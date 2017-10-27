import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import history from '../App/history';
import { createUser, fetchUserByAuthId } from '../api/users';
import profileService from '../App/utils/profile_service';
// import axios from 'axios';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  authProfile;
  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Unauthorized');
    }
    return accessToken;
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, async (err, profile) => {
      let dbUser = {};
      if (profile) {
        this.authProfile = profile;
        dbUser = await fetchUserByAuthId(profile.sub);
        this.userProfile = dbUser;
        profileService.profile = dbUser;
      }
      cb(err, dbUser);
    });
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // console.log('is authorized');
        this.setSesstion(authResult);
        createUser(authResult.idTokenPayload);
        history.replace('/profile');
      } else if (err) {
        console.log('handle authentication error', err);
        history.replace('/');
      }
    });
  }

  setSesstion(authResult) {
    // Set the time that the access token will expirce at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to home
    history.replace('/');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.authProfile = null;
    this.userProfile = null;
    profileService.profile = {};
    // navigate to home
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current tie is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

const auth = new Auth();
export { Auth };
export default auth;

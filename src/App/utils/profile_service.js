class ProfileService {
  constructor() {
    this.profile = null;
    this.fetchProfile = this.fetchProfile.bind(this);
  }
  fetchProfile = async auth => {
    if (this.profile) {
      return this.profile;
    }
    return new Promise((res, rej) => {
      if (auth && auth.isAuthenticated()) {
        const { userProfile, getProfile } = auth;
        if (!userProfile || Object.keys(userProfile).length === 0) {
          getProfile((err, profile) => {
            if (!err) {
              this.profile = profile;
              res(profile);
            } else {
              rej(err);
            }
          });
        } else {
          this.profile = userProfile;
          res(userProfile);
        }
      }
    });
  };
}

const profileService = new ProfileService();
export default profileService;

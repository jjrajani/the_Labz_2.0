class ProfileStore {
  constructor() {
    this.profile = {};
    this.fetchProfile = this.fetchProfile.bind(this);
  }
  fetchProfile = auth => {
    if (auth.isAuthenticated()) {
      const { userProfile, getProfile } = auth;
      if (!userProfile || Object.keys(userProfile).length === 0) {
        getProfile((err, profile) => {
          return profile;
        });
      } else {
        return userProfile;
      }
    }
  };
}

const profileStore = new ProfileStore();
export default profileStore;

// HOC
import WithProfile from './WithProfile';

class WithWorkspaceAndProfile extends WithProfile {
  componentDidMount = async () => {
    if (!this.state.profile._id && this.props.auth.isAuthenticated()) {
      await this.fetchProfile();
    }
    const { id } = this.props.match.params;
    id === 'new' ? this.initNew() : this.initExisting(id);
  };
  componentDidUpdate() {
    let { id } = this.props.match.params;
    if (id !== 'new' && id !== this.state.project._id) {
      this.initExisting(id);
    }
    if (id === 'new' && this.state.project._id !== undefined) {
      this.initNew();
    }
  }
}

export default WithWorkspaceAndProfile;

// Services
import { fetchUsers } from '../../api/users';
// HOC
import WithProfile from './WithProfile';

class WithArtistsAndProfile extends WithProfile {
  componentWillUpdate = async () => {
    if (this.props.auth.isAuthenticated() && !this.state.profile._id) {
      let users = await fetchUsers();
      if (this.state.profile._id) {
        this.profileId = this.state.profile._id;
        users = this.filterUsers(users, this.state.profile._id);
      }
      this.setState({ artists: users, filteredArtists: users });
    }
  };
  componentDidMount = async () => {
    if (!this.state.profile && this.props.auth.isAuthenticated()) {
      this.fetchProfile();
      let users = await fetchUsers();
      this.setState({ artists: users });
    }
    if (!this.props.auth.isAuthenticated()) {
      let users = await fetchUsers();
      this.setState({ artists: users, filteredArtists: users });
    }
  };
}

export default WithArtistsAndProfile;

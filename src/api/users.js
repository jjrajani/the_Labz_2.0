import axios from 'axios';

export const fetchUsers = async () => {
  const res = await axios.get('/api/users');
  return res.data;
};

export const fetchUser = async id => {
  const res = await axios.get(`/api/user/${id}`);

  return res.data;
};

export const createUser = async user => {
  const res = await axios.post('/api/users', {
    authId: user.sub,
    name: user.name,
    avatar: user.picture,
    nickname: user.nickname
  });
  return res.data;
};

export const fetchUserByAuthId = async authId => {
  const res = await axios.get(`/api/user/auth/${authId}`);

  return res.data;
};

export const updateUser = async user => {
  const res = await axios.put(`/api/user/${user._id}`, user);
  return res.data;
};

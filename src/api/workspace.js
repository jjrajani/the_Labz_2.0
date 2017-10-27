import axios from 'axios';

export const saveWorkspace = async (project, values) => {
  Object.keys(values).forEach(k => {
    project[k] = values[k];
  });

  const res = await axios.post('/api/project', project);
  return res.data;
};

export const fetchWorkspace = async id => {
  const res = await axios.get(`/api/project/${id}`);
  return res.data;
};

export const fetchProjects = async id => {
  const res = await axios.get(`/api/projects/${id}`);
  return res.data;
};

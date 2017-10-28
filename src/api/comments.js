import axios from 'axios';

export const fetchComments = async workspaceId => {
  const res = await axios.get(`/api/comments/${workspaceId}`);
  return res.data;
};

const submitTextComment = async (profileId, workspaceId, comment) => {
  const res = await axios.post(`/api/comment/${workspaceId}`, {
    userId: profileId,
    text: comment
  });
  return res.data;
};

const submitUploadAudioComment = (profileId, workspaceId, comment) => {
  console.log('submit upload audio comment', profileId, comment);
};

const submitRecordAudioComment = (profileId, workspaceId, comment) => {
  console.log('submit record audio comment', profileId, comment);
};

export const submitComment = async (type, profileId, workspaceId, comment) => {
  switch (type) {
    case 'text': {
      return submitTextComment(profileId, workspaceId, comment);
    }
    case 'audio_upload': {
      submitUploadAudioComment(profileId, workspaceId, comment);
      break;
    }
    case 'audio_record': {
      submitRecordAudioComment(profileId, workspaceId, comment);
      break;
    }
    default: {
      return;
    }
  }
};

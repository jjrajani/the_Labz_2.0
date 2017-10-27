export default class Project {
  constructor(props) {
    props = props || {};
    if (props._id) {
      this._id = props._id;
    }
    this.userId = props.userId || null;
    this.title = props.title || 'Untitled';
    this.paid = props.paid || false;
    this.promotedAudio = props.promotedAudio || '';
    this.renditions = props.renditions || [];
    this.collaborators = props.collaborators || [];
    this.isPrivate = props.isPriavte || false;
    this.comments = props.comments || [];
  }
}

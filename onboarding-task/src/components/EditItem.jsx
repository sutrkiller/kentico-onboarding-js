import React, { Component, PropTypes } from 'react';

class EditItem extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }),
    onButtonClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    let { item: {description } } = props;
    this.state = {
      description: description,
      updateButtonEnabled: this.canClickOnUpdateButton(description),
    };

    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
    this.onUpdateClicked = this.onButtonClicked.bind(this, 'update');
    this.onCancelClicked = this.onButtonClicked.bind(this, 'cancel');
    this.onDeleteClicked = this.onButtonClicked.bind(this, 'delete');
  }

  canClickOnUpdateButton = description => description.length > 0;

  onButtonClicked = (eventType) =>
    this.props.onButtonClick(
      eventType,
      this.state.description || this.props.item.description);

  onDescriptionChanged(event) {
    const newDescription = event.target.value;
    this.setState({
      description: newDescription,
      updateButtonEnabled: this.canClickOnUpdateButton(newDescription),
    })
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="input-group">
          <span className="input-group-addon">
            {this.props.index}.
          </span>
          <input
            className="form-control"
            type="text"
            placeholder={`Description of item #${this.props.index} in the list…`}
            value={this.state.description}
            onChange={this.onDescriptionChanged}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onUpdateClicked}
              disabled={!this.state.updateButtonEnabled}>
                Update
            </button>
            <button
              className="btn btn-default"
              type="button"
              onClick={this.onCancelClicked}>
                Cancel
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.onDeleteClicked}>
                Delete
            </button>
          </span>
        </div>
      </li>
    );
  }
}

export default EditItem;

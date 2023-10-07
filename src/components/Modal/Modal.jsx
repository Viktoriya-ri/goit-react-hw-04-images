import { Component } from 'react';

import { Overlay, ModalContent } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <Overlay className="overlay" onClick={this.handleBackdropClick}>
        <ModalContent className="modal">
          <img src={largeImageURL} alt={tags} />
        </ModalContent>
      </Overlay>
    );
  }
}

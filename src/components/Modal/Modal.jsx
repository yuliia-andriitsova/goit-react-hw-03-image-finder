import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  state = { isOpen: false };

  render() {
    const { largeImageURL, tags, toggleModal } = this.props;
    return (
      <div className={css.Overlay} onClick={() => toggleModal()}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

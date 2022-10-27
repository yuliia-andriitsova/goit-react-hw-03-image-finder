import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { id, web, tags, largeImageURL, toggleModal, toggleMod } = this.props;
    return (
      <li
        className={css.ImageGalleryItem}
        key={id}
        onClick={() => toggleModal(largeImageURL)}
      >
        <img src={web} alt={tags} className={css.ImageGalleryItemImage} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  web: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

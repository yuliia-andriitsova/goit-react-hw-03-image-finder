// import PropTypes from 'prop-types';
import React, { Component } from 'react';
//import css from '../ImageGallery/'-------------------------- styles!!!!

export default class ImageGalleryItem extends Component {
  //   static propTypes = { second: third };

  render() {
    const { id, web, tags } = this.props;
    return (
      <li key={id}>
        <img src={web} alt={tags} />
      </li>
    );
  }
}

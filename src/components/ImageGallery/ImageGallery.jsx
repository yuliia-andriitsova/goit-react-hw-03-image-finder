import { Component } from 'react';
// import PropTypes from 'prop-types';
import { getPhoto } from 'components/Api/Fetch';
import ImageGalleryItem from './ImageGalleryItem';

// import css from '.';------------------------------------------- не встановлюються стилі!

export class ImageGallery extends Component {
  render() {
    const { isLoading, images } = this.props;
    return (
      <>
        {isLoading ? (
          <p>Loading.............</p>
        ) : (
          <ul className="ImageGallery">
            {images.map(image => (
              <ImageGalleryItem
                id={image.id}
                key={image.id}
                web={image.webformatURL}
                large={image.largeImageURL}
                tags={image.tags}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

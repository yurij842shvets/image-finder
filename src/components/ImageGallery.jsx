import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends React.Component {
  render() {
    const {images} = this.props;
    return (<ul class="gallery">
        {images.map((image) => (
         <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
         />
        ))}
        </ul>);
  }
}

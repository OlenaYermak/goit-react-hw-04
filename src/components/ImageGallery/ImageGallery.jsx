import ImageCard from '../ImageCard/ImageCard';

import style from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={style.imageList}>
      {images.map(image => (
        <li className={style.imgListItem} key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

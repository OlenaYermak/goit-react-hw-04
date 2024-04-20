import style from './ImageCard.module.css';

export default function ImageCard({ image, openModal }) {
  return (
    <div className={style.imageContainer}>
      <img
        onClick={() => openModal(image)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

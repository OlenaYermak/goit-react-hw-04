import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, image }) {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
      className={css.content}
    >
      <div>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <ul className={css.cardList}>
          <li className={css.cardListItem}>
            <h3 className={css.cardListTitle}>Likes:</h3>
            <p className={css.cardText}> {image.likes}</p>
          </li>
          <li className={css.cardListItem}>
            <h3 className={css.cardListTitle}>Author:</h3>
            <p className={css.cardText}>{image.user.name}</p>
          </li>
          {image.user.portfolio_url && (
            <li className={css.cardListItem}>
              <a className={css.cardListLink} href={image.user.portfolio_url}>
                Author's <br />
                portfolio
              </a>
            </li>
          )}
          {image.user.instagram_username && (
            <li className={css.cardListItem}>
              <a
                className={css.cardListLink}
                href={image.user.instagram_username}
              >
                Author's <br /> instagram
              </a>
            </li>
          )}
        </ul>
      </div>
    </Modal>
  );
}

import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css"

export default function ImageGallery({ images, isOpen, openModal, closeModal, setSelectedImage  }) {
    return (
        <ul className={style.imageList}>
            {images.map((image) => (
            <li className={style.imgListItem} key={image.id}>
                    <ImageCard image={image}
                        isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
          setSelectedImage={setSelectedImage} /></li>))}

        </ul>
    )
}





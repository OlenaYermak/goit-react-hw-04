import style from "./ImageCard.module.css"

export default function ImageCard({ setSelectedImage, image: {
    alt_description,
    likes,
    user:{name, portfolio_url, instagram_username},
     urls: {small, regular},
    }, openModal,
}) {
    return (
        <div className={style.imageContainer}>
            <img  src={small} alt={alt_description}
                onClick={() => {
                   setSelectedImage({
                       url: regular,
                       alt: alt_description,
                        likes: likes,
                       author: name,
                       portfolio: portfolio_url,
                       instagram: instagram_username,
                   });
                   
                    openModal();
            }}/>
            </div>
    )
}





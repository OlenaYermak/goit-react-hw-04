import { useState, useEffect } from 'react'
import { fetchImages } from '../imageSearch-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from "../Loader/Loader";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import Modal from "react-modal";



Modal.setAppElement('#root');


export default function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  // const [showBtn, setShowBtn] = useState(false);
  // const [totalPages, setTotalPages] = useState(0);

// useEffect(() => {
//   setShowBtn(totalPages && totalPages !== page);
// }, [totalPages, page]);



  const handleSearch = async (query) => {
  setQuery(query);
    setPage(1);
    setImages([]);
  console.log(query);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  


  useEffect(() => { 
    if (query === "") {
      return;
    }
  async function getImages() {
    try {
      setIsLoading(true);
      const data = await fetchImages(query, page);
      setImages(prevImages => {
        return [...prevImages, ...data.results]
        } 
      );
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
    getImages(); 
    
  }, [page, query]);
  



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} isOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          setSelectedImage={setSelectedImage} />}
     
     
     
      {isLoading && <Loader />}

 {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedImage={selectedImage}
          
        />
      )}

{/* {showBtn && images.length > 0 && !isLoading && (
  <LoadMoreBtn onLoadMore={handleLoadMore} />
)} */}
      
      {images.length > 0 &&  !isLoading && <LoadMoreBtn onLoadMore={handleLoadMore} />}
 
    </>
    
  )
}




// import { useState, useEffect } from 'react';
// import { fetchImages } from '../imageSearch-api';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import SearchBar from '../SearchBar/SearchBar';
// import Loader from "../Loader/Loader";
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
// import ImageModal from '../ImageModal/ImageModal';
// import Modal from "react-modal";

// Modal.setAppElement('#root');

// export default function App() {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [totalPages, setTotalPages] = useState(0);
//   // const [showBtn, setShowBtn] = useState(false);

//   const handleSearch = async (query) => {
//     setQuery(query);
//     setPage(1);
//     setImages([]);
    
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   useEffect(() => { 
//     if (query === "") {
//       return;
//     }

//     async function getImages() {
//       try {
//         setIsLoading(true);
//         const data = await fetchImages(query, page);
//         setImages(prevImages => [...prevImages, ...data.results]);
//         setTotalPages(data.total_pages);
//         console.log(data.total_pages);
//         console.log(data.results);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getImages(); 
//   }, [page, query]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <SearchBar onSearch={handleSearch} />
//       {error && <ErrorMessage />}
//       {images.length > 0 && (
//         <ImageGallery 
//           images={images} 
//           isOpen={isModalOpen}
//           openModal={openModal}
//           closeModal={closeModal}
//         />
//       )}
//       {isLoading && <Loader />}
//       {isModalOpen && (
//         <ImageModal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           selectedImage={images}  
//         />
//       )}
//       {/* {showBtn && <LoadMoreBtn onLoadMore={handleLoadMore} />} */}
//       {images.length > 0 && page < totalPages && !isLoading && (
//         <LoadMoreBtn onLoadMore={handleLoadMore} />
        
//       )}
      

//       {/* {showBtn && images.length > 0 && !isLoading && page < totalPages && (
//   <LoadMoreBtn onLoadMore={handleLoadMore} />
// )} */}
//     </>
//   );
// }






 








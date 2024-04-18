import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com"

export const fetchImages = async (inputQuery, currentPage) => {

    const ACCESS_KEY = "I46zfzblJbqWRT8pqEARestwdM4-IBnBPBAdFmYRH_E"

     const response = await axios.get("/search/photos", {
         params: {
            query: inputQuery,
            page: currentPage,
             per_page: 12,
             orientation: "landscape",
            client_id: ACCESS_KEY,
            
         },

     });

    
    return response.data; 
    
}


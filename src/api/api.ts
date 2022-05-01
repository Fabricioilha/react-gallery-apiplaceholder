import axios from "axios"

const api = {
    getAllAlbums: async () => {
        const response =  await axios.get("https://jsonplaceholder.typicode.com/albums");
        return response.data
    },
    getAllPhotos: async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
        return response.data
    }
}
export default api
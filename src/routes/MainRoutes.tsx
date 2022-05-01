import { useRoutes } from "react-router-dom";
import { Albums, Photos } from "../types/types";
import Album from "../components/Album";
import Home from "../components/Home"
import Photo from "../components/Photo";
type Props = {
    albums: Albums[],
    photos: Photos[]
}
const MainRoutes = ({albums, photos}:Props) => {
    return useRoutes([
        {path:'/', element: <Home albums={albums} />},
        {path:"/album/:albumId", element: <Album photos={photos} /> },
        {path:"/album/:albumId/photo/:photoId", element:<Photo photos = {photos} />}
    ])
}

export default MainRoutes
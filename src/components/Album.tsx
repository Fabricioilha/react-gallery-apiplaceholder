import { Link, useParams } from "react-router-dom";
import { Photos } from "../types";
import "./album.scss"

type Props = {
    photos: Photos[]
}

const Album = ({ photos }: Props) => {
    const params = useParams()
    return (
        <div className="grid">
            {photos.map((item, index) => {
                if (item.albumId.toString() === params.albumId) {
                    return (
                        <div key={index} className="box">
                            <Link to={`/album/${item.albumId}/photo/${item.id}`}>
                                <img src={item.thumbnailUrl} alt="" />
                            </Link>
                            {item.title}
                        </div>
            )}})}
        </div>
    )
}

export default Album
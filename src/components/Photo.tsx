import { useParams } from "react-router-dom"
import { Photos } from "../types"

type Props = {
    photos: Photos[]
}
const Photo = ({photos}:Props) => {
    const params = useParams()
    console.log(params)
    return(
        <>
            {photos.map((item,index)=>{
                if( item.albumId.toString() === params.albumId &&
                    item.id.toString() === params.photoId){
                        return(
                            <div key={index}>
                                <img src={item.url} alt="" />
                            </div>
                        )
                    }
            })}
        </>
    )
}

export default Photo
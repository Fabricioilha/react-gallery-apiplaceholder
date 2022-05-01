import { Link } from "react-router-dom";
import { Albums } from "../types/types";

type Props = {
    albums: Albums[]
}

const Home = ({albums}:Props) => {
    return(
        <>
            {albums.map((item, index)=>{
                return(
                    <ul>
                        <li key={index}>
                            <Link to={`/album/${item.id}`}>
                                {item.title}
                            </Link>
                        </li>
                    </ul>
                )
            })}
        </>
    )
}

export default Home
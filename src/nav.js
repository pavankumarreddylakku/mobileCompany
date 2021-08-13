import React,{useContext} from "react";
import { MovieContent } from "./movieData";
const Nav = (props) => {
    console.log("nav") 
    const [movie, setMovie] = useContext(MovieContent);
return(<div>
    length:{movie.length}
</div>);
}
export default Nav;
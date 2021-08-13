import React, { useContext, useState} from "react";
import { MovieContent } from "./movieData";

const AddMovie = (props) => {
    const [movie, setMovie] = useContext(MovieContent);
    const [name1,setName] = useState();
    const [price1,setPrice] = useState();
    const changeName = (e) => {
        setName(e.target.value)
    };
    const changePrice = (e) => {
        setPrice(e.target.value)
    }
    const submit = () => {
        setMovie([...movie,{name:name1,price:price1}])
        setName()
        setPrice()
    }
    return (<div>
        <input value={name1} onChange={changeName}/>
        <input value={price1} onChange={changePrice}/>
        <button onClick= {submit}> submit</button>
    </div>);
}
export default AddMovie;
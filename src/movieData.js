import React,{useState,createContext} from "react";

export const MovieContent = createContext();
export const MovieProvider = (props) => {
    { console.log("movidata") }
    const [movie, setMovie] = useState([{ name: "pori", price: "12", id: 1 },
        { name: "pori1", price: "13", id: 2 },
        { name: "pori2", price: "14", id: 3 }]);
     return(
         <MovieContent.Provider value ={[movie,setMovie]}>
            {props.children}
         </MovieContent.Provider>
     )

 }
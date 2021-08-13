import React, { useState } from "react";

const Movie = (props) => {
    { console.log("movie") }
    return(
        <div>
            <p>name:{props.name}</p>
            <p>id:{props.id}</p>
            <p>price:{props.price}</p>
        </div>    
    )
}
export default Movie;
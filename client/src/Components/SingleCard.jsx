import React from "react";

export default function Card({ image , title , diets }){
    return (
        <div>
            <img src={image} alt="Image not found" width="250px" height="200px"/>
            <h3>{title}</h3>
            <h5>{diets}</h5>
        </div>
    )
}
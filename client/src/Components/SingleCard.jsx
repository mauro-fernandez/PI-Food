import React from "react";
import styles from "../Styles/SingleCard.module.css"


export default function Card({ image , title , diets }){
console.log(diets)
    return (
        <div className={styles.mainContainer}>
            <img className={styles.image} src={image} alt="Image not found"/>
            <div>
                <h3 className={styles.title}>{title}</h3>
                {diets.map(diet => (
                    <p className={styles.diets}>{diet}</p>
                ))}
            </div>
        </div>
    )
}
import React from "react";
import {Link} from "react-router-dom"
import styles from "../Styles/LandingPage.module.css"

export default function LandingPage(){
    return (
        <div className={styles.background}>
            <h1>The Hungry Api</h1>
            <Link to ="/home">
                <button>Bite me!</button>
            </Link>
        </div>
    )
}
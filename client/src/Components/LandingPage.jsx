import React from "react";
import {Link} from "react-router-dom"

export default function LandingPage(){
    return (
        <div>
            <h1>The Hungry Api</h1>
            <Link to ="/home">
                <button>Give me food!</button>
            </Link>
        </div>
    )
}
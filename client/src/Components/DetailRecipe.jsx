import React from "react";
import { Link } from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { getDetail } from "../Redux/actions";
import { useEffect } from "react";

export default function DetailRecipe(props){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])

    const detailRecipe = useSelector((state) => state.detail)

    return (
        <div>
            {
                detailRecipe.length > 0 ?
                <div>
                    <img src={detailRecipe[0]?.image} alt="No Image Found"/>
                    <h1>{detailRecipe[0].title}</h1>
                    <h3>Summary</h3>
                    <p>{detailRecipe[0]?.summary.replace(/<[^>]*>?/g, '')}</p>
                    <h3>Spoonacular Score</h3>
                    <p>{detailRecipe[0].spoonacularScore}</p>
                    <h3>Health Score</h3>
                    <p>{detailRecipe[0].healthScore}</p>
                    <h3>Diets</h3>
                    <p>{detailRecipe[0].diets.map(r => r.name) + " "}</p>
                    <h3>Instructions</h3>
                    <p>{detailRecipe[0].instructions}</p>
                </div> : 
                <p>Loading ...</p>
            }
            <Link to="/home">
                <button>Go back!</button>
            </Link>
        </div>
    )

}
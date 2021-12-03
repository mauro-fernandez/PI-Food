import React from "react";
import { Link , useParams} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { useEffect } from "react";
import { getDetail } from "../Redux/actions";

export default function DetailRecipe(){
    
    const dispatch = useDispatch()
    const recipeId = useParams()
    const detailRecipe = useSelector((state) => state.detail) 
    // console.log(recipeId)
    
    useEffect(() => {
        dispatch(getDetail(recipeId.id))
    },[dispatch])


    return (
        <div>
            {
                (detailRecipe) ?
                        <div>
                            <img src={detailRecipe.image} alt="No Image Found"/>
                            <h1>{detailRecipe.title}</h1>
                            <h3>Summary</h3>
                            <p>{detailRecipe.summary}</p>
                            <h3>Spoonacular Score</h3>
                            <p>{detailRecipe.spoonacularScore}</p>
                            <h3>Health Score</h3>
                            <p>{detailRecipe.healthScore}</p>
                            <h3>Diets</h3>
                            <p>{detailRecipe.diets?.map(r => (<li>{r.name} </li>))}</p>
                            <h3>Instructions</h3>
                            <p>{detailRecipe.instructions}</p>
                        </div>
                    
                : <p>Loading ...</p>
            }
            <Link to="/home">
                <button>Go back!</button>
            </Link>
        </div>
    )

}
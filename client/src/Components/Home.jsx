import React from "react";
import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux"
import { getRecipes, getDetail, getDiets } from "../Redux/actions";
import { Link } from "react-router-dom"
import Card from "./SingleCard";
import Paginado from "./Paginado";

export default function Home(){

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.allRecipes)
    const alldiets = useSelector((state) => state.diets)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe,indexOfLastRecipe)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
  
    useEffect(()=> {
        dispatch(getRecipes())
    },[dispatch])

    
    useEffect(()=> {
        dispatch(getDiets())
    },[dispatch])
    
    return (
        <div>
           <Link to="/create">Create Recipe</Link>
           <h1>Prueba 1</h1>
           <Paginado recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paginado={paginado}></Paginado>
            <div>
                
                <select>
                    <option value="">Select Order</option>
                    <option value="Asc">A to Z</option>
                    <option value="Desc">Z to A</option>
                </select>
                <select>
                    <option value="">Select Score</option>
                    <option value="SpoonacularMax">Max Score</option>
                    <option value="SpoonacularMin">Min Score</option>
                </select>
                <select>
                    <option value="">Select Diets</option>
                    {alldiets?.map(diet => {
                        <option value={diet.diets}>{diet.diets}</option>
                    })
                    }
                </select>
            </div>
            <div>
                {currentRecipes?.map(recipe => {
                    return (<Card image={recipe.image} title={recipe.title} diets={recipe.diets + " "}></Card>)
                    })
                }
            </div>
        
        </div>
    )
}
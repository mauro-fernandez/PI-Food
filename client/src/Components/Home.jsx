import React from "react";
import { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux"
import { getRecipes, getDetail, getDiets , filteredByDiet, orderByTitle, orderBySpoonacularScore} from "../Redux/actions";
import { Link } from "react-router-dom"
import Card from "./SingleCard";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

export default function Home(){

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.allRecipes)
    const allDiets = useSelector((state) => state.diets)
    
    useEffect(()=> {
        dispatch(getRecipes())
    },[dispatch])
    
    useEffect(()=> {
        dispatch(getDiets())
    },[dispatch])

    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe,indexOfLastRecipe)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
      
    function handleFilteredDiet(e){
        dispatch(filteredByDiet(e.target.value))
    }

    function handleSortedRecipesTitle(e){
        dispatch(orderByTitle(e.target.value))
    }

    function handleSortedRecipesSpoonScore(e){
        dispatch(orderBySpoonacularScore(e.target.value))
    }

    return (
        <div>   
           <Link to="/create">Create Recipe</Link>
           <h1>Recipe Book</h1>
           <SearchBar></SearchBar>
           <Paginado recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paginado={paginado}></Paginado>
            <div>
                
                <select onChange={(e) => handleSortedRecipesTitle(e)}>
                    <option value="">Select Order</option>
                    <option value="Asc">A to Z</option>
                    <option value="Desc">Z to A</option>
                </select>
                <select onChange={(e) => handleSortedRecipesSpoonScore(e)}>
                    <option value="">Select Score</option>
                    <option value="SpoonacularMax">Max Score</option>
                    <option value="SpoonacularMin">Min Score</option>
                </select>
                <select onChange={e => handleFilteredDiet(e)}>
                    <option value="">Select Diets</option>
                    {allDiets?.map(diet => {
                        return ( <option value={diet.name}>{diet.name}</option>)
                        })
                    }
                </select>
            </div>
            <div>
                {currentRecipes?.map(recipe => {
                    return (
                        <Link to={`/recipe/${recipe.id}`}>
                        <Card image={recipe.image} title={recipe.title} diets={recipe.diets.map(r => r.name) + " "}></Card>
                        </Link>
                        )
                    })
                }
            </div>        
        </div>
    )
}
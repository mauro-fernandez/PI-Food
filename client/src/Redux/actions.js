import axios from "axios"

export function getRecipes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/recipes")
        return dispatch({
            type: "GET_RECIPES",
            payload: json.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/recipes/${id}`)
        return dispatch({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}
export function getDiets(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/types")
        return dispatch({
            type: "GET_DIETS_TYPES",
            payload: json.data
        })
    }
}

export function filteredByDiet(payload){ // el payload en este caso significa el value="..." que yo le mande desde el componente, osea el nombre de la dieta
    return {
        type: "FILTERED_BY_DIETS",
        payload
    }
}

export function orderByTitle(payload){
    return {
        type: "ORDER_BY_TITLE",
        payload
    }
}

export function orderBySpoonacularScore(payload){
    return {
        type: "ORDER_BY_SPOONACULAR_SCORE",
        payload
    }
}
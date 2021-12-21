import axios from "axios"

// export function getRecipes(){
//     return async function(dispatch){
//         try {
//             var json = await axios.get("http://localhost:3001/recipes")
//             return dispatch({
//                 type: "GET_RECIPES",
//                 payload: json.data
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }  esta forma es con async await, la de abajo con .then

export function getRecipes(){
    return function(dispatch){
             axios.get("http://localhost:3001/recipes")
            .then(response => {
                return dispatch({
                    type: "GET_RECIPES",
                    payload: response.data
                })
    })
}}

export function getDiets(){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/types")
            return dispatch({
                type: "GET_DIETS_TYPES",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
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

export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: "GET_DETAIL",
                payload: json.data
            })
        } catch (error) {
            console.log(error)    
        }
    }
}

export function searchRecipe(name){
    return async function(dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({
                type: "SEARCH_RECIPE",
                payload: json.data
            })  
        } catch (error) {
            console.log(error)
        }
    }
}

export function postRecipe(payload){
    return async function(dispatch){//este dispatch no lo use, ver que pasa si lo borro
        try {
            var json = await axios.post(`http://localhost:3001/recipes/create`, payload)
            return json
        } catch (error) {
            console.log(error)
        }
    }
}
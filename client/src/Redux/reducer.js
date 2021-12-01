
const initialState = {
    allRecipes: [],   // me trae todo
    filteredRecipes: [], // para hacerle filtros y guardar el state
    diets: [], // me traigo las dietas
    detail: [] // me trago el detalle de cada una por id
}

function rootReducer (state = initialState, action){
    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                allRecipes: action.payload,
                filteredRecipes: action.payload
            } 
        case "GET_DIETS_TYPES" :
            return {
                ...state,
                diets: action.payload
            }
        case "GET_DETAIL" :
            return {
                ...state,
                detail: action.payload
            }
        case "FILTERED_BY_DIETS":
            const recipes = state.filteredRecipes
            const dietFiltered = action.payload === "" ? recipes : recipes.filter(recipe => {
                    let diet = recipe.diets.map(d => d.name)
                    if (diet.includes(action.payload)){
                        return recipe
                    }
                })  
            return {
                ...state,
                allRecipes: dietFiltered
            }
        case "ORDER_BY_TITLE":
            const sortedRecipesTitle = action.payload === "Asc" ? 
                state.allRecipes.sort(function(a,b) {
                    if(a.title > b.title){
                        return 1
                    }
                    if (b.title > a.title){
                        return -1
                    }
                    return 0
                }) : state.allRecipes.sort(function(a,b) {
                    if(a.title > b.title){
                        return -1
                    }
                    if (b.title > a.title){
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                allRecipes: sortedRecipesTitle
            }
            case "ORDER_BY_SPOONACULAR_SCORE":
                const sortedRecipesSpoonScore = action.payload === "SpoonacularMax" ? 
                    state.allRecipes.sort(function(a,b) {
                        if(a.spoonacularScore > b.spoonacularScore){
                            return 1
                        }
                        if (b.spoonacularScore > a.spoonacularScore){
                            return -1
                        }
                        return 0
                    }) : state.allRecipes.sort(function(a,b) {
                        if(a.spoonacularScore > b.spoonacularScore){
                            return -1
                        }
                        if (b.spoonacularScore > a.spoonacularScore){
                            return 1
                        }
                        return 0
                    })
                return {
                    ...state,
                    allRecipes: sortedRecipesSpoonScore
                }
            case "SEARCH_RECIPE":
                return {
                    ...state,
                    allRecipes: action.payload
                }
            case "POST_RECIPE": //esto lo hizo asi selene, no le veo el sentido
                return {
                    ...state
                }
        default: return state
    }
} 

export default rootReducer
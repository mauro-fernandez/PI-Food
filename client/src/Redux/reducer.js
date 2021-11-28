
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
        default: return state
    }
} 

export default rootReducer
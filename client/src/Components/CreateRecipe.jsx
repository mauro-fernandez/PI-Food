import React, { useState, useEffect } from "react";
import { Link ,  useNavigate } from "react-router-dom"
import { postRecipe , getDiets } from "../Redux/actions"
import { useDispatch , useSelector } from "react-redux"

function validate(post){
    let errors = {}
    if (!post.title){
        errors.title = "Your recipe needs a title!"
    }
    if (!post.summary){
        errors.summary = "Give a brief explanation of your recipe"
    }
    if (!post.instructions){
        errors.instructions = "Don´t forget to tell us how you did it"
    }
    return errors
}

    
export default function RecipeCreate(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allDiets = useSelector((state) => state.diets)
    const [errors, setErrors] = useState({})

    const [post, setPost] = useState({
        title: "",
        summary: "",
        spoonacularScore: 50,
        healthScore: 50,
        instructions: "",
        image: "",
        diets: []  
    })

    function handleChange(e){
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...post,
            [e.target.name]: e.target.value
        }))
    //    console.log(post)
    }

    function handleSelect(e){
        setPost({
            ...post,
            diets: [...post.diets, e.target.value]
        })
    //    console.log(post)
    }

    function handleDietDelete(deleteThis){
        setPost({
            ...post,
            diets: post.diets.filter(diet => diet !== deleteThis)
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!post.diets.length){
            return alert("You need to add at least one diet for the recipe")
        } else {
            if (!post.image) {
                post.image = "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
            }
            dispatch(postRecipe(post))
            alert("Recipe sucessfully created!")
            setPost({
                title: "",
                summary: "",
                spoonacularScore: 50,
                healthScore: 50,
                instructions: "",
                image: "",
                diets: []
            })
            navigate("/home")
        }
    }

    useEffect(()=> {
        dispatch(getDiets())
    }) //ver aca porque hace un loop de /types 
    
    return(
        <div>
            <Link to="/home" >
                <button>Home</button>
            </Link>
            <h1>Create your own Recipe</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Title</label>
                    <input type="text" value={post.title} name="title" onChange={(e) => handleChange(e)} ></input>
                    {errors.title && (<p>{errors.title}</p>)}
                </div>
                <div>
                    <label>Summary</label>
                    <textarea type="text" value={post.summary} name="summary" maxLength="1000" onChange={(e) => handleChange(e)}></textarea>
                    {errors.summary && (<p>{errors.summary}</p>)}
                </div>
                <div>
                    <label>Spoonacular Score</label>
                    <input type="range" min="0" max="100" value={post.spoonacularScore} name="spoonacularScore" onChange={(e) => handleChange(e)}></input>
                    {post.spoonacularScore}
                </div>
                <div>
                    <label>Health Score</label>
                    <input type="range" min="0" max="100" value={post.healthScore} name="healthScore" onChange={(e) => handleChange(e)}></input>
                    {post.healthScore}
                </div>
                <div>
                    <label>Instructions</label>
                    <textarea type="text" value={post.instructions} name="instructions" onChange={(e) => handleChange(e)}></textarea>
                    {errors.instructions && (<p>{errors.instructions}</p>)}
                </div>
                <div>
                    <label>Load URL Image</label>
                    <input type="url" value={post.image} name="image" onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                    <select onChange={(e)=> handleSelect(e)}>
                        <option value="" name="diets" >Select Diets</option>
                        {allDiets?.map(diet => {
                            return ( <option value={diet.id} key={diet.id}>{diet.name}</option>)
                            })
                        }
                    </select>
                    <ul><li>{post.diets.map(diet => 
                            <div>
                                <p>{diet}</p>
                                <button onClick={() => handleDietDelete(diet)}>X</button>
                            </div>
                        )}</li></ul>
                </div>
                <button type="submit" >Create Recipe!</button>
            </form>
        </div>
    )


}
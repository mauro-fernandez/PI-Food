import React, { useState, useEffect } from "react";
import { Link ,  useNavigate } from "react-router-dom"
import { postRecipe , getDiets } from "../Redux/actions"
import { useDispatch , useSelector } from "react-redux"

export default function RecipeCreate(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allDiets = useSelector((state) => state.diets)

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
        console.log(post)
    }

    function handleSelect(e){
        setPost({
            ...post,
            diets: [...post.diets, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault()
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

    useEffect(()=> {
        dispatch(getDiets())
    },[])

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
                </div>
                <div>
                    <label>Summary</label>
                    <textarea type="text" value={post.summary} name="summary" maxLength="1000" onChange={(e) => handleChange(e)}></textarea>
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
                    <ul><li>{post.diets.map(d => d + ", ")}</li></ul>
                </div>
                <button type="submit">Create Recipe!</button>
            </form>
        </div>
    )


}
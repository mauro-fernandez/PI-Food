import React from "react"
import {useState} from "react"
import { useDispatch } from "react-redux"
import { searchRecipe } from "../Redux/actions"

export default function SearchBar({title}){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchRecipe(name))
        setName("")
    }

    return (
        <div>
            <input type="search" placeholder="Search Recipe..." value={name} onChange={(e) => handleInputChange(e)}></input>
            <button type="submit"  onClick={(e) => handleSubmit(e)}>Find Me</button>
        </div>
    )
}
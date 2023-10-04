import React, { useEffect, useState } from 'react'
import ItemMeal from '../components/ItemMeal'
import MealIndex from '../components/MealIndex'

const Meal = () => {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState()
    const [show,setShow]=useState(false)
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data => {
            console.log(data.meals)
            setItem(data.meals)
            setShow(true)
        })
    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
    const searchRecipe=(evt)=>{
        if (evt.key =="Enter") {
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    
  return (
    <div className='main'>
        <div className='heading'>
            <h1>Procure a sua receita</h1>
            <h4>Ache uma receita deliciosa para você cozinhar!</h4>
        </div>
        <div className='searchBox'>
            <input type="text" className="search-bar" onChange={e=>setSearch(e.target.value)}
            onKeyPress={searchRecipe} />
        </div>
        <div className="container">
            
            {
                show ? <ItemMeal data={item}></ItemMeal> : "Não encontrado"
                
            }
        </div>
        <div className="indexContainer">
            <MealIndex alphaIndex={(alpha) =>setIndex(alpha)}></MealIndex>
        </div>
    </div>
  )
}

export default Meal
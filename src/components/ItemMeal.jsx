import React from 'react'

const ItemMeal = ({data}) => {
    console.log(data)
  return (
    <>
    {
        (!data)?"Não encontrado":data.map(item=>{
            return (
                <div className="card">
                    <img src={item.strMealThumb} alt="" />
                    <h3>{item.strMeal}</h3>
                    <button id="youtube" onClick={() => {window.location.href = `${item.strYoutube}`}}>Youtube</button>
                </div>
            )

        })
    }
    
    </>
  )
}

export default ItemMeal
import React from 'react'
import data from "../data"
import pizzaData from '../data'
// import "./Style.css"
import "../App.css"

function Menu() {
  return (
    <>
      <section>
        <div className='menuContent'>
        <h2>OUR MENU</h2>

        <p>Authentic italian  cuisine, 6 creative dishes to choose from . all from our store owen. all organic. all delicious</p>
        </div>
        <div className='pizzaArea'>
        {
          pizzaData.map((data) => {
            return (
              <div className='pizza' id={data.soldOut ? "gray":" "}>
                <div className='pizzaImage'>
                  <img src={data.photoName}></img>
                </div>
                <div className='pizzaContent'>
                  <h2>{data.name}</h2>
                  <p>{data.ingredients}</p>
                  <h3>{data.price}</h3>
                </div>

              </div>
            )
          })
        }
        </div>
      </section>
    </>
  )
}

export default Menu
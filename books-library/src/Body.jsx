import React, { useState } from "react"
import Card from "./card.jsx"
import data from "./data.jsx"
import axios from 'axios'

function Body(){
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState()
    const searchBook = (evt) =>{
        if(evt.key==="Enter"){
            axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&keyAIzaSyC_CCsWiT0V1exxTGehx3hkBTchPPSIJVs"+"&maxResults=25")
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
return(
    <>
        <div className="header">
            <div className="row1">
                <h1>A room without a book<br/>is like a body without a soul</h1>
            </div>
            <div className="row2">
                <h2>find your book</h2>
                <div className="search">
                <input type="text" placeholder="Enter the name" value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyDown={searchBook}
                ></input>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img src="./public/reading.png"></img>
            </div>
        </div>
        <div className="container">
        
          <Card book={bookData} />
    
        </div>
    </>
)

}

export default Body
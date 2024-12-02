import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Search from './Search'



function App() {
  const [state,setState] =useState({
    search : '',
    results: []
  })
  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      let search = event.target.value;
          return {...prevState, search: search}
      })
  }
  const SearchResult = (event) => {
    if(event.key === "Enter"){
      alert("enter")
    }
  }
  return (
    <div className='w-100 main-wrapper d-flex flex-column aligh-items-center justify-content-center'>
       <header className='w-100 text-center text-white mt-5'>
        <h2>Movie Search</h2>
           <Search handleInput={handleInput} SearchResult={SearchResult} />
       </header>

    </div>
  )
}

export default App
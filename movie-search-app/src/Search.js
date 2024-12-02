import React from 'react'

function Search(handleInput,SearchResult) {
  return (
    <div className='search-input my-3 mb-5'>
        <input type='text' name='movie' className='w-50 p-2'
        placeholder='Search for a movie...'onChange={handleInput} onKeyDown={SearchResult}></input>
    </div>
  )
}

export default Search
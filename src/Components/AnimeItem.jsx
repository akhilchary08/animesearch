import React from 'react'
const AnimeItem = ({dataItem}) => {
  return (
    <div className='animeItem'>
        <img className='animeImage' src={dataItem.image} alt="" />
        <p className='title'>{dataItem.title}</p>
        <p className='status'>Status :- {dataItem.status}</p>
    </div>
  )
}

export default AnimeItem
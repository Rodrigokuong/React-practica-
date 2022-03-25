import React from 'react'

const Showincrement = React.memo(({increment}) => {

  console.log('Me volvi a generar :c');

  return (
    <div>
        <button 
            className='btn btn-outline-primary'
            onClick={ () =>{ increment( 5 ); }}> incrementador</button>
    </div>
  )
})

export default Showincrement
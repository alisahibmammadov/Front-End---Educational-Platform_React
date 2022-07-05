import React from 'react'

const Homebooks = () => {
  return (
    <div className='homebook container-fluid'>
        <div className='homebook-head'>
            <h1>You Can Read Books</h1>
            <div></div>
            <p>Plaid you probably haven't heard of them fashion axe meditation</p>
        </div>
        <div className='book-cards'>
            <div className='bookcard'>
                <i className='fa fa-area-chart'></i>
                <p>STRUCTURE <br /> ENTRY REQUIREMENTS</p>
            </div>
            <div className='bookcard'>
                <i class="fa-solid fa-briefcase"></i>
                <p>EDUCATION <br /> GRAPHIC INTERIOR</p>
            </div>
            <div className='bookcard'>
                <i class="fa-regular fa-compass"></i>
                <p>PREPARING <br /> THE COMPASS EXAM</p>
            </div>
            <div className='bookcard'>
                <i class="fa fa-comment"></i>
                <p>TEACHER <br /> TALKING TO A GROUP</p>
            </div>
        </div>
        <button className='homebook-btn'>GO TO THE BOOKS</button>
    </div>
  )
}

export default Homebooks
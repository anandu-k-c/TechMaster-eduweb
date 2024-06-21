import React from 'react'
import './Member.css'

function Member() {

    const handleClick = () =>{
        window.open('https://wa.link/o1opkh','_blank');
    }

  return (
    <div className="container">
        <div className="member-container">
        <h2>Welcome to MemberShip Corner</h2>
        <p>By clicking the below link you are direct to our counsellors.</p>
        <button className='register-btn' onClick={handleClick}>Join Now</button>
</div>


    </div>
  )
}

export default Member
import React from 'react'
import img1 from "./images/5.jpg"
import img2 from "./images/6.jpg"
import img3 from "./images/7.jpg"
import img4 from "./images/8.jpg"
function Food() {
  return (
    <div className='food | sm:grid sm:grid-cols-2 || md:grid-cols-4 '>
<img className='w-full h-96 || sm:h-full' src={img1} alt="" />
<img className='w-full h-96 || sm:h-full' src={img2} alt="" />
<img className='w-full h-96 || sm:h-full' src={img3} alt="" />
<img className='w-full h-96 || sm:h-full' src={img4} alt="" />
    </div>
  )
}

export default Food
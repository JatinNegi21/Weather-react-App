import React from 'react'

function TopButton({setQuery}) {

    const cities = [

        {
            id:1,
            title: 'New-Delhi'
        },
        {
            id:1,
            title: 'Bengaluru'
        },
        {
            id:1,
            title: 'Pune'
        },
        {
            id:1,
            title: 'Dehradun'
        },
        {
            id:1,
            title: 'Hyderabad'
        },
        




    ]
  return <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
       <button key ={city.id}className='text-white text-lg front-medium' onClick={() => setQuery({q:city.title})}>{city.title}</button>
    ))}
  </div>
  
}

export default TopButton
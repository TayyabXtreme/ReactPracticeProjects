import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/tayyabxtreme').
        then(res=>res.json())
        .then(data=>{
            console.log(data.followers)
            setData(data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='m-auto ' width={300} src={data.avatar_url} alt="" />
    </div>
    
  )
}

export default Github
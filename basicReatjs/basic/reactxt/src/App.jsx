import axios from 'axios'
import React, { useEffect } from 'react'

const App =() => {

  const [data,getData]=React.useState([])

  const getall=async ()=>{
    console.log('Get Data')
    const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    getData(response.data)
    console.log(response.data)
  }

  useEffect(()=>{
    getall()
  },[])

  return (
    <div className='p-10'>
     
      <div className='p-5 b-gray-900 flex flex-wrap'>
        {
          data.map((item,index)=>{
           return <div className='border-2 border-gray-900 p-5 m-5 flex item-center justify-center flex-col' key={index}>
            <h1>{item.author}</h1>
            <img className='w-24 h-24' src={item.download_url} alt="" />


            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
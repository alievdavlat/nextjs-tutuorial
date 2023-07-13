import React from 'react'


const getserversideprops = ({photos}) => {
  return (
    <div className='flex items-center justify-center flex-wrap m-auto w-[1400px] p-[100px]'>
      {
        photos.map(photo => <div key={photo.id} className='flex items-center justify-center gap-10 flex-col'><h1 className='mb-4'>{photo.title}</h1></div> )
      }
    </div>
  )
}

export default getserversideprops


export async function getServerSideProps () {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await response.json()


  return {
    props : {
      photos : data
    }
  }
}
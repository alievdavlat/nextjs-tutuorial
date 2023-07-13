import React from 'react'

const staticgenaration = ({users}) => {

  return (
    <div className='w-[1300px] h-screen m-auto flex  items-center justify-center flex-wrap gap-10'>

<div className="w-[1300px] m-auto  p-10 border border-slate-600">
      <h1 className="font-bold">
   getStaticProps 
      </h1>
      <br /><br /><br /><br />
      <p>
      1 -  getStaticProps orqali componentni render qme fetch qlngan datalni olsh mumkun getStaticProps return qladi object ichida props objecti boladi va prpsdegi data la oavtoamtichski <br />
      function componenti parametri bolb keladi getStaticProps orqali props jonatsih vue ni state saqlidgan data methodiga ohshidi
      <br />
      
      </p>


    </div>
      <br /><br /><br /><br />
    {
      users.map((user) => {
        return (
          <div key={user.id} className='flex flex-col items-center justify-center gap-10 p-10 border border-slate-400'> 
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div> 
        )
      })
    }
    </div>
  )
}

export default staticgenaration


export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data =  await response.json()
  return {
    props : {
      users:data
    }
  }
}

  
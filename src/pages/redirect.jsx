import { useRouter } from 'next/router'
import React from 'react'

const redirect = () => {

  const router = useRouter()

  const handleRouter = () => {
      router.push('/')
  }
  return (
    <div className="w-[1300px] m-auto  p-10 border border-slate-600">
      <h1 className="font-bold">
    redirect
      </h1>
      <br /><br /><br /><br />
      <p>
      1 -  redirect qlsh ucun useRouter hook ni router dgan ozgaruvchiga olsh kere kein routerga bunaq kornshda redirect qlanadi 
      <br /> <br />
      router.push('/path') <br /><br />
      <strong>or </strong><br /><br />
      router.replace('/path')
      </p>
        <br /><br /><br /><br />
    <button onClick={() => handleRouter()} className='font-bold border-0 bg-[teal] rounded-xl p-3'>
      redirect to home page
    </button>

    </div>
  )
}

export default redirect
import { useRouter } from 'next/router'
import React from 'react'

const dynamicpageid = () => {
 const router = useRouter()
 
const id = router.query.dynamicpageid
const path = router.asPath
  return (
    <div className="w-[1300px] m-auto  p-10 border border-slate-600">
      <h1 className="font-bold">
    dynamic - routing-page
      </h1>
      <br /><br /><br /><br />
      <p>
        dinamik pageni id sni olsh uchuh oldn useRouter hook import qlnadi<br />
        kein ozgaruvciga router nomi bilan tenglanadi  <br /> <br />
        const router = useRouter()
        <br />
        kein boshqa izgaruvichiga id nomi bilan router.query.dinamik-page-name yozladi misol ucun <br />
        const id = router.query.pageid qlnadi  <br />
        kein ishlatiladi 
        <br /><br /><br />
        bu page id si 👉 ---  {id} chi page <br /><br />
        path -- locolhost:3000/{path}
      </p>


    </div>

  )
}

export default dynamicpageid
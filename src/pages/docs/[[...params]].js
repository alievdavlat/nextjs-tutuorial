import { useRouter } from 'next/router'
import React from 'react'

const params = () => {
  const router = useRouter()
  const { params = [] } = router.query
  console.log(params);
  return (
    <div className="w-[1300px] m-auto  p-10 border border-slate-600">
      <h1 className="font-bold">
    infinite - params 
      </h1>
      <br /><br /><br /><br />
      <p>
      1 -  infinite paramsli page yasaw uchun pages ichidan papka ochladi va [...params].js qlb fayl yasaladi <br />
      kein base url ga  slash bilan luboy narsa yozlasa osh pathga params boliib yozladi misol uchun<br />
      locolhost:3000/docs/example1/product1/concept1 <br />
      har bitta params array ichiga item bolub saqanadi ishlatish uchun useRouter hookdan foydlaniladi <br />
      agar base urga infinite params bor papkani nomini ozini yozsa undifined cqadi papkni ozini yozgandayam chqishi uchun [[...params]].js qb fayl ochlshi kere <br />
      array qavsi uchida spreed operadiri bilan fayl yozlsa osha faylga cheksiz paramsla yozish mumkun  [[]] ikktali array ichida qb ochsa fayl params yozlmasa oddi ozi chqadgan boladi pageni
      </p>
        <br /><br /><br /><br />
        <h1 className='font-bold'>
          {
           params.length > 0  ? params.map((item, idx) => `params${idx + 1} = ${item},      `) : ' params lar yozlmagan hozi default holatda turbdi  locolhost:3000/docs 👈 bunga 👉 locolhost:3000/docs + paramslar yozsh kere '
          }
        </h1>



    </div>
  )
}

export default params
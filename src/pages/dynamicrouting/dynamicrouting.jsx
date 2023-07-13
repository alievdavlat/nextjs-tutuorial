import React from 'react'

const dynamicrouting = () => {
  return (
    <div className="w-[1300px] m-auto  p-10 border border-slate-600">
      <h1 className="font-bold">
    dynamic - routing 
      </h1>
      <br /><br /><br /><br />
      <p>
      1 -  dynamic routing [filenameid] kornishida yozladi va agar papkani ichida nested bolb turgan bosa papkaNami/file-nome/luboy-id   yozlsa osha id bilan bita page paydo boladi dinamichski page <br />
        yoki  dinamik pageni folderni [page-nameid] qlb papka ochsaham dinamik page yasaladi <br />
        locolhost:300/file-name/id  yoki nested bosa locolhost:300\folder-name/file-name/id   qlb ishlatiladi
      </p>


    </div>
  )
}

export default dynamicrouting

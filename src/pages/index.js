export default function index() {
  return (
    <div className="w-[1300px] m-auto  p-10 border border-slate-600">
      <h1 className="font-bold">
      Routing
      </h1>
      <br /><br /><br /><br />
      <p>
      1 -  routing src papkasini ichidegi pages papkasiga fayl ochilsa osha fayl avtomatichski routinga tushadi <br />
        pathga <br />
        locolhost:300/file-name qlb ishlatiladi
      <br /> <br /><br />
      2 - nested rouinitg esa pages ichida papka ochilgan bosa osha papka ichida file bosa ishlatilshi   <br /> 
          locolhost:300/folder-name/file-name 


      </p>


    </div>
  );
}

export async function getServerSideProps(ctx){


  return {
    props:{
      data:null
    }
  }
}

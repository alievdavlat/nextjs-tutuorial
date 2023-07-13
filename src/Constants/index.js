export const navbarItems = [
  {
    id:1,
    path: '/',
    name:'Routing'
  },
  {
    id:2,
    path: '/dynamicrouting/dynamicrouting',
    name:'Dynamic-route-segments'
  },
  {
    id:3,
    path: `/dynamicrouting/${Math.floor(Math.random() * 1000)}`,
    name:'Dynamic-random-page'
  },
  {
    id:4,
    path: '/docs',
    name:'infinite - params - pages'
  },
  {
    id:5,
    path: '/redirect',
    name:'Redirect'
  },
  {
    id:6,
    path: 'dmlsml',
    name:'custom-error-page-404'
  },
  {
    id:7,
    path: '/staticgenaration',
    name:'getStaticProps'
  },
  {
    id:8,
    path: '/getserversideprops',
    name:'getServerSideProps'
  },



]
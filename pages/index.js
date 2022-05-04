import Head from 'next/head'


// const studentsApi = 'https://neo4jfinal.vercel.app/api/allstudents';
// const modulesApi = 'https://neo4jfinal.vercel.app/api/allmodules';
// const locationsApi = 'https://neo4jfinal.vercel.app/api/alllocations';
//
// fetch(studentsApi)
//     .then(res)


export default function Home() {
  return (
    <div>
        <header>
            <h1>TEAC882 Final</h1>
        </header>
        <main>
            <button> All Students</button>
            <button> All Modules </button>
            <button> All Locations</button>
        </main>
        <footer>
        Description:
        </footer>
    </div>
  )
}

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
            <button className={"glow-on-hover"}> All Students</button>
            <button className={"glow-on-hover"}> All Modules </button>
            <button className={"glow-on-hover"}> All Locations</button>
        </main>
        <footer>
        Description:
        </footer>
    </div>
  )
}

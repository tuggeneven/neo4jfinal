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
            <button className={"glow-on-hover"}> Students IDs</button>
            <button className={"glow-on-hover"}> Modules </button>
            <button className={"glow-on-hover"}> Locations</button>
            <button className={"glow-on-hover"}> Average Compilation Time</button>
            <button className={"glow-on-hover"}> Average Scores</button>
        </main>
        <footer>
        Description:
        </footer>
    </div>
  )
}

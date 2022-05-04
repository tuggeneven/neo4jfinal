import Head from 'next/head'


const studentsApi = 'https://neo4jfinal.vercel.app/api/allstudents';
const modulesApi = 'https://neo4jfinal.vercel.app/api/allmodules';
const locationsApi = 'https://neo4jfinal.vercel.app/api/alllocations';

studentsBtn.document.addEventListener("click", function () {

})


export default function Home() {
  return (
    <div>
        <header>
            <h1>TEAC882 Final</h1>
        </header>
        <main>
            <button className={"glow-on-hover"} id={studentsBtn}> Students IDs</button>
            <button className={"glow-on-hover"} id={modulesBtn}> Modules </button>
            <button className={"glow-on-hover"} id={locationsBtn}> Locations</button>
            <button className={"glow-on-hover"} id={avgCompTimeBtn}> Average Compilation Time</button>
            <button className={"glow-on-hover"} id={AvgScoreBtn}> Average Scores</button>
        </main>
        <footer>
        Description:
        </footer>
    </div>
  )
}

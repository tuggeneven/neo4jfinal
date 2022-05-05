import Head from 'next/head'


let allStudentObj;
let allModulesObj;
let allLocationsObj;
let avgCompTimeObj;
let avgScoreObj;

import neo4j from "neo4j-driver";

//setting up the API in driver
const uri = 'neo4j+s://955946c8.databases.neo4j.io';
const user = 'neo4j';
const password = process.env.NEO4J;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

async function studentsBtn(req, res) {
    const session = driver.session();
    const response = await session.run('MATCH (s:Student) RETURN s');
        console.log(response)

    const records = response.records.map((record) => {
        allStudentObj = record.toObject();
        console.log(allStudentObj);
    })
    // document.getElementById('studentObject').innerHTML = allStudentObj;
}



export default function Home() {

  return (
    <div>
        <header>
            <h1>TEAC882 Final</h1>
        </header>
        <main>
            <button className={"glow-on-hover"} onClick={'studentsBtn()'}>Students IDs</button>
            <button className={"glow-on-hover"}> Modules </button>
            <button className={"glow-on-hover"}> Locations</button>
            <button className={"glow-on-hover"}> Average Compilation Time</button>
            <button className={"glow-on-hover"}> Average Scores</button>
            <div id={'studentObject'}></div>
        </main>
        <footer>
        Description:
        </footer>
    </div>

  )
}


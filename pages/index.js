import Head from 'next/head';
import React from "react";
import neo4j from "neo4j-driver";


const uri = 'neo4j+s://955946c8.databases.neo4j.io';
const user = 'neo4j';
const password = process.env.NEO4J;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

async function allData(request, response) {
    const session = driver.session();
    // const responseAll = await session.run('MATCH (n1:LOCATION)<-[r1:LIVES_IN]-(n2:Student)-[r2:ENGAGED_WITH]->(n3:Module) RETURN (n1)<-[r1]-(n2)-[r2]->(n3)');
    const students = await session.run('MATCH (s:student) RETURN s');
    const records = students.records.map((record) => {
        let allData = record.toObject();
        console.log("Data:", allData);

    })
}



// const allApi = 'https://neo4jfinal.vercel.app/api/allstudents';
//
//
// let studentData = fetch(allApi)
//         .then(response => response.json())
//         .then(json => console.log(json));
        

// HTML index page
export default function Home() {

  return (
    <div>
      <Head />
        <header>
            <h1>TEAC882 Final</h1>
        </header>
        <main>
            <div className='.contentContainer'>
                <div className='contentWrapper'>
                    <div className='buttons'>
                        <div className='categories'>
                            <button className="glow-on-hover">Students IDs</button>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='categories'>
                            <button className="glow-on-hover"></button>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='categories'>
                            <button className="glow-on-hover"</button>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='categories'>
                            <button className="glow-on-hover"</button>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='categories'>
                            <button className="glow-on-hover">Avg. Scores</button>
                        </div>
                    </div>
                </div>
                {/* chart.js starts */}
                <div className='charts'>
                    <div className='bar'>
                        <div className='contentArea'>Text Here</div>
                        {/* Line Starts   */}
                        {/* <Line data={dataArray} width={400} heigth={400} /> */}
                        <div className='circle'>
                            <h5>Text Here</h5>
                            {/* Doughnut Chart Starts */}

                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <leftcolumn className="columnOne" id="graph">Description: </leftcolumn>
            <rightcolumn className="columnTwo">Hello</rightcolumn>
        </footer>
    </div>
  )
}

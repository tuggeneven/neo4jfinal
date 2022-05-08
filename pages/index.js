import Head from 'next/head';
import React from "react";
import neo4j from "neo4j-driver";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

console.log('hello');



// JS codes

let callBack;

// setting up the API in driver
// const uri = 'neo4j+s://955946c8.databases.neo4j.io';
// const user = 'neo4j';
// const password = process.env.NEO4J;
//
// const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
//
// async function allData(request, response) {
//     const session = driver.session();
//     const responseAll = await session.run('MATCH (n1:LOCATION)<-[r1:LIVES_IN]-(n2:Student)-[r2:ENGAGED_WITH]->(n3:Module) RETURN (n1)<-[r1]-(n2)-[r2]->(n3)');
//
//     const records = responseAll.records.map((record) => {
//         callBack = record.toObject();
//         console.log(callBack);
//     })
// }



const allApi = "https://neo4jfinal.vercel.app/api/allstudents";

// Fetching the API on page load
// let allData = function pullData () {

        fetch(allApi)
        .then(response => response.json())
        .then(data => console.log(data));
// }


// HTML index page
export default function Home() {

  return <div>
      <Head>
          <title>TEAC882</title>
          <meta name="description" content="Created by Tuggen Even" />
      </Head>
      <header>
          <h1>TEAC882 Final</h1>
          <button className={"glow-on-hover"}>Students IDs</button>
          <button className={"glow-on-hover"}> Modules </button>
          <button className={"glow-on-hover"}> Locations</button>
          <button className={"glow-on-hover"}> Avg. Compilation Time</button>
          <button className={"glow-on-hover"}> Avg. Scores</button>
      </header>

      <main>
          <div className="columnOne">
              <div className={"contentContainer"}>
                  <div className={"contentWrapper"}>
                     <div className={"charts"}>
                         <div className={"bar"}>
                             <h2>text here</h2>
                         </div>
                         <div className={"circle"}>
                             <h2>text here</h2>
                             <Line data={totalData}> width={400} height={400}></Line>

                         </div>
                     </div>
                  </div>
              </div>
          </div>
          <div className="columnTwo"></div>
      </main>

      <footer>

      </footer>
  </div>
}


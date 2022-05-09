import Head from 'next/head';
import React from "react";




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
                            <button className="glow-on-hover">Students</button>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='categories'>
                            <button className="glow-on-hover">Module</button>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='categories'>
                            <button className="glow-on-hover">Locations</button>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='categories'>
                            <button className="glow-on-hover">Avg. Compilation Time</button>
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
                            <h5>Doughnut </h5>
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

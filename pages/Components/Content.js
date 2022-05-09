import { handleClientScriptLoad } from 'next/script';
import React from 'react'
import {Line} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';



function studentBtn(){
    handleClientScriptLoad();
}

function moduleBtn(){
    handleClientScriptLoad();
}

function locationBtn(){
    handleClientScriptLoad();
}

function timeBtn(){
    handleClientScriptLoad();
}

function scoreBtn(){
    handleClientScriptLoad();
}


function Content() {
  return (
<main>
    <div className='.contentContainer'>
        <div className='contentWrapper'>
            <div className='buttons'>
                <div className='categories'>
                    <button className="glow-on-hover" onClick={studentBtn}>Students IDs</button>
                </div>
            </div>
            <div className='buttons'>
                <div className='categories'>
                    <button className="glow-on-hover" onClick={moduleBtn}>Modules </button>
                </div>
            </div>
            <div className='buttons'>
                <div className='categories'>
                <button className="glow-on-hover" onClick={locationBtn}>Locations</button>
                </div>
            </div>
            <div className='buttons'>
                <div className='categories'>
                <button className="glow-on-hover" onClick={timeBtn}>Avg. Compilation Time</button>
                </div>
            </div>
            <div className='buttons'>
                <div className='categories'>
                <button className="glow-on-hover" onClick={scoreBtn}>Avg. Scores</button>
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
  )
}

export default Content

const allApi = 'https://neo4jfinal.vercel.app/api/allstudents';

const dataDisplay = document.getElementsByClassName('contentArea')

let studentData = fetch(allApi)
        .then(response => response.json())
        .then(json => {
            dataArray.push(json) 
            
        });

        let dataArray = [];

        console.log(dataArray)

        // dataArray.body[0].m.properties.userID
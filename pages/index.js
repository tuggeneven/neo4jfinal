import Head from 'next/head';
import React from "react";
import Content from "../pages/Components/Content";
import Footer from '../pages/Components/Footer';
import Header from '../pages/Components/Header';

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
      <Header />
      <Content />                         
      <Footer />
    </div>
  )
}

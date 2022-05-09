import neo4j from "neo4j-driver";

const uri = 'neo4j+s://955946c8.databases.neo4j.io';
const user = 'neo4j';
const password = process.env.NEO4J;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

export default async function handler(req, res) {
    const session = driver.session();
    const response = await session.run('MATCH (m:Module) RETURN m');

    const records = response.records.map((record) => {
        return record.toObject();
    })
    res.status.json({body: records});
}
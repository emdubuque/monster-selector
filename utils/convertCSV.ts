import fs from "fs";
import csv from "csvtojson";
import path from "path";

const csvFilePath = path.join(process.cwd(), "data/monsters.csv");
const jsonFilePath = path.join(process.cwd(), "data/monsters.json");

async function convertCSV() {
    try {
        const jsonObj = await csv().fromFile(csvFilePath);
        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2));
        console.log("converted to json")
    } catch (error) {
        console.error("error converting csv:", error);
    }
}

convertCSV();

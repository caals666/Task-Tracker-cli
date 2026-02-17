#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
}

let cmd=process.argv[2];
const data = fs.readFileSync(filePath, 'utf8');
let jsonData = JSON.parse(data);


if(cmd=="add"){
    try {
        jsonData.push(process.argv[3]);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        console.log('Item added successfully!');
    } catch (err) {
        console.error('Error:', err);
    }
}
else if(cmd=="delete"){
    try{
       jsonData.splice((process.argv[3]-1),1);
        fs.writeFileSync(filePath,JSON.stringify(jsonData,null,2));
        console.log("Item deleted successfully");
    }
    catch(e){
        console.error(e);
    }
}
else if(cmd=="update"){
    try{
        jsonData[process.argv[3]-1]=process.argv[4];
        fs.writeFileSync(filePath,JSON.stringify(jsonData,null,2));
        console.log("Item updated successfully");
    }
    catch(e){
        console.error(e);
    }
}
else if(cmd=="list"){
    try{
        for(let x of jsonData){
            console.log(x+"\n");
        }
    }
    catch(e){
        console.error(e);
    }
}
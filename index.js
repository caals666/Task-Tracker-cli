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

const now = new Date();

if(cmd=="add"){
    try {
        jsonData.push({'id':jsonData.length,"description":process.argv[3],"status":"todo","createdAt":now.toLocaleString(),"updatedAt":now.toLocaleString()});
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
        jsonData[process.argv[3]-1]["description"]=process.argv[4];
        jsonData[process.argv[3]-1]["updatedAt"]=now.toLocaleString();
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
            if(process.argv.length==4&&process.argv[3]=="done"){
                if(x.status=="done"){
                    console.log(x);
                }
            }
            else if(process.argv.length==4&&process.argv[3]=="in-progress"){
                if(x.status=="in-progress"){
                    console.log(x);
                }
            }
            else{
                console.log(x);
            }
        }
    }
    catch(e){
        console.error(e);
    }
}
else if(cmd=="mark-in-progress"||cmd=="mark-done"){
    jsonData[process.argv[3]-1]['status']=cmd.substring(5);
    fs.writeFileSync(filePath,JSON.stringify(jsonData,null,2));
    console.log("Item marked successfully");
}
const fs = require('fs');
const path = require('path');
fs.mkdir(path.join(__dirname,'test'),(error) =>{
    if (error){
        return console.error(err);
    }
    console.log('Directory created successfully!');
});
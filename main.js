//We require the filesystem module for writing the file and the csvtojson module for converting the csv file to json format.
const fs = require('fs')
const path = require('path')
const csv=require('csvtojson')

//Set the csv/json files and folders. By doing this we only have to edit here if the file/folder names changes.
const csvfolder = 'csv'
const jsonfolder = 'json'
const csvfile = 'customer-data.csv'
const jsonfile = 'customer-data.json'

//The filepath to our csv file. We use path.join so that it'll work on any OS.
const csvdata=(path.join(csvfolder, csvfile))

//Here we use csvtojson for converting the csv file to json.
csv().fromFile(csvdata)
.then((jsonObj)=>{ //We use path.join for the filepath, and json.strigify to convert to proper json.
    fs.writeFile(path.join(jsonfolder, jsonfile), JSON.stringify(jsonObj), function (error) {
        if (error) return console.error(error)
        console.log('Convertion of ' + csvfile + ' in folder ' + csvfolder + ' have been completed! The result is saved in folder ' + jsonfolder + ' as the json file ' + jsonfile + ".") 
        //console.log(jsonObj); //Could be used if we wanted to display all the new json data in the console.
    })
})
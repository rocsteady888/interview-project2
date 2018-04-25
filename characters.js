const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require('cli-table');
// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "root",
  database: "tardis"
});


// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {

  connection.query("SELECT * FROM characters", function (err, results) {
    if (err) throw err;
    // instantiate
    let table = new Table({
      head: ['ID', 'First Name', 'Last Name', 'Home']
      , colWidths: [10, 10, 10, 10]
    });
    //characterArray is for 
    let characterArray = [];
    for (var i = 0; i < results.length; i++) {
      //first name is required and should not be null
      characterArray.push(results[i].first_name);
      //last name can be null and cli-table looks for a string
      //these ternary operators makes last_name and home empty string in the event they are null
      let lastName = results[i].last_name ? results[i].last_name : " ";
      let home = results[i].home ? results[i].home : " "; 
      
      table.push(
        [results[i].id, results[i].first_name, lastName, home]
      );
    }
    // this displays a table in the terminal for easier viewing
    console.log(table.toString());
    console.log("Add a new character.");
    // prompt for info about the item
    inquirer
      .prompt([
        {
          name: "firstName",
          type: "input",
          message: "What is the character's first name? (If character only has one name, enter it here.)"
        },
        {
          name: "lastName",
          type: "input",
          message: "What is the character's last name? (Optional)"
        },
        {
          name: "home",
          type: "input",
          message: "Where is their home planet?"
        }
      ])
      .then(function (answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO characters SET ?",
          {
            first_name: answer.firstName,
            last_name: answer.lastName,
            home: answer.home
          },
          function (err) {
            if (err) throw err;
            console.log("Your character was added successfully!");
            // re-prompt the user
            start();
          });
      });
    });
  }







//fin

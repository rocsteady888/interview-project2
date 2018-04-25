
 :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  


#### Node.js & MySQL

## Overview

This a CLI tool to view and add characters to a database.  First open MySQL workbench and get server started.  Then copy and paste the data from the .sql file and run it.  


### Add Character

1. Uses a MySQL Database called `tardis`.

2. With a table called `characters`.

3. The products table has each of the following columns:

   * id (unique id for each character)

   * first_name (required)

   * last_name

   * home 

4. The database is populated with characters.  

5. I created a Node application called `characters.js`. Running this application in the command line will first display all of the characters in the database. 

6. The app then prompts users to add a new character.

7. The app updates the database and renders the new table.
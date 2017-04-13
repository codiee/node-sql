# Angular with Node and Mysql - kickstart
  A demo app to demonstrate 3 tier architecture. Angular (client side), Node.js (server side)  and Mysql (database).
# Prerequisite Installation:

1. Install Node [Run node -v if version shown so node properly installed]
2. Install mysql and configure locally (Remember you can configure any database)
   In this repo database config is available: library/public/config
   
   Run this to create users table in your database
   //database-table-users
   
   CREATE TABLE Users(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255),
    Age int,
    City varchar(255),
    PRIMARY KEY (ID)
  );
  
# Styling 
  Bootstrap

# Folder Sturucture 
   Js files and HTML files [recommended to keep JS and HTML files seperately]
   library -> public -> 
   
   Node config file 
    library -> app.js
    library -> package.json

# How to start
1. Clone library repo using:  git clone "repo_name"
2. Once clone done start node server using node app.js
3. Node can ask for any missing depndency installation run : npm install
4. Take a look at pacakge.json which includes all the dependencies, when yu run npm install it will
   read pacakge.json and all the dependencies will install.
5. Here you go open browser with http://localhost:8080/

# End to End data flow
1. once your server started it will load index.html view
   Define default on start of server in
    library-> app.js
    
     app.get('*', function(req, res) {
       res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
     });
     
    
2. index.html is binded to a angular controller(mainController) and all methods are written inside controller
   library -> public - > core.js [recommended to seperate controller and services in seperate files]
3. Any CRUD operation will call specific api written in app.js
   mainController -> app -> query  
4. You can refer app.js for any server related changes

Conclusion: 
# A basic CRUD app using Angular, Node, Express and Sql


# Live demo on:
https://node-sql.herokuapp.com/


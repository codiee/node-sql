# Angular with Node and Mysql - kickstart

conclusion:
# A running app with CRUD

# Prerequisite:

1. Install Node
2. Install mysql and configure locally (Remember you can configure any database)
   In this repo database config is available: libraray/public/config
   
   //database-table-users
   CREATE TABLE Users(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(255),
    Age int,
    City varchar(255),
    PRIMARY KEY (ID)
  );
   
3. Take a clone of repo - library
4. Open node cmd and run node -v (it will let you know node version)
5. Once node is installed you can run node app.js to start node server
6. it will ask you for dependencies, you can run npm install for all or npm install 'module_name' specific
    - take a look at pacakge.json which includes all the dependencies, when yu run npm install it will
      read pacakge.json and all the dependencies will install.
7. Once all dependencies resolved it will say "magic happens on port 8080"
8. Here you go open browser with http://localhost:8080/ and its done
9. You can refer app.js for any server related changes.

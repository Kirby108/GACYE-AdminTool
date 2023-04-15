=======
# GACYEAdminTool

To run:
Create two terminal sessions
In one session:
npm i
cd gacye-admin
cd api-server-nodejs-master
npm run typeorm migration:run 
npm run dev

In the other session:
npm i
cd horizon-ui-chakra-main
npm start

GACYE Admin Tool
A web application that supports GACYE's admins to easily manage the website and view data.

Pages
Login Page
Admins can access the website and its functionalities by login with their username and password. JWT authentication is implemented to make the login secrue from potential leaks.

Main Admin Page
The main admin page currently has the functionality of viewing a heatmap that displays where users are accessing the website from. GACYE has various users from various regions, and tracking which part of Georgia (or elsewhere) the website users are located in is essential for GACYE leaders to make strategic decisions. We chose to implement this feature for our artifact implementation because it'll be a key component the admin tool, and makes good use of each part of the tech stack so we can evaluate whether the technologies we chose will be appropriate for the final project. The map needs to be neatly presented in the frontend, while making use of backend code to efficiently retrieve and send large amounts of data entries from the database. In general, the admin page will mainly include components whose functionality is to pull data from the database and display it in efficient and useful ways for GACYE admins to analyze (eg. displaying an overview of monthly donations, displaying a chart of volunteers, etc.), and the heatmap exemplifies this functionality. Thus, we thought it would be useful to code it for our artifact demo and understand the nature of the work we will be doing, and evaluate whether our tasks are compatible with the tech stack we've chosen.

Tech Stack
Front-end: React library
We chose React because it has a lot of functionalities that are built-in to accelerate the implemantation process. Moreover, many UI components are reusable, which means we could still utilize this artifact in the future, even if significant changes are made.

Back-end: NodeJS
NodeJS provides a non-blocking, single threaded I/O which is extremely beneficial to light weight web applications. The Node Package Manager (NPM) is also very helpful on fast implementation by using accessible packages.

Database: MySQL, AWS Relational Database Service (RDS)
MySQL provides strong data protection, and it has direct support from various cloud services including AWS. MySQL also has high performance, allowing a fast transaction of data to the user. We chose to store the database in cloud, so that the data is protected from potential damage on local storage, and many developers could contirbute on the implementation simultaneously. We chose AWS RDS specifically because AWS is well known for its security and easy-to-manage console.
=======


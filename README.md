# GACYE Admin Tool


A web application that supports GACYE's admins to easily manage the website and view data.

---

### Pages

#### Login Page
Admins can access the website and its functionalities by login with their username and password. JWT authentication is implemented to make
the login secrue from potential leaks.

#### Main Admin Page
The main admin page currently has the functionality of viewing user heatmap. GACYE has various users from various regions, and tracking which part of Georgia (or elsewhere) the website users are located in is essential for GACYE leaders to make strategic decisions. 


### Tech Stack

#### Front-end: React library
We chose React because it has a lot of functionalities that are built-in to accelerate the implemantation process. Moreover, many UI components are reusable, which means we could still utilize this artifact in the future, even if significant changes are made.

#### Back-end: NodeJS
NodeJS provides a non-blocking, single threaded I/O which is extremely beneficial to light weight web applications. The Node Package Manager (NPM) is also very helpful on fast implementation by using accessible packages. 

#### Database: MySQL, AWS Relational Database Service (RDS)
MySQL provides strong data protection, and it has direct support from various cloud services including AWS. MySQL also has high performance, allowing a fast transaction of data to the user. 
We chose to store the database in cloud, so that the data is protected from potential damage on local storage, and many developers could contirbute on the implementation simultaneously. We chose AWS RDS specifically because AWS is well known for its security and easy-to-manage console. 

  
 


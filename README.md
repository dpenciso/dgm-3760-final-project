# dgm-3760-final-project


## Journal App

## Overview

This journal app is connected to a database using MongoDB and allows you to get and post entries to and from that database. This app is rendered using node.js on the back-end and html, css, and javascript on the front-end. This app uses mongoose, ejs,bodyParser, dotenv, and express as dependencies.

## To Run Locally

Install the following dependencies:

-   express
-   mongoose
-   ejs
-   bodyParser
-   dotenv (for database password link)

Use a MongoDB cluster and whitelist your IP addresss.

    npm start

## Methods/Endpoints

    GET '/'

Retireves stored journal entries along with title, entry, date, grateful for list, and rating from database in order to display them.


    POST '/'

Takes the title, entry, date, grateful for list, and rating inputs from the user and stores them to the databse.


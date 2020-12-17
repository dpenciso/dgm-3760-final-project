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

## User Stories

The following are the user stories for my app (10):

-   As a user I would like to be able to add a new journal entry
-   As a user I would like the date to be included with my journal entry
-   As a user I would like to be able to add a title to my journal entry
-   As a user I would like to be able to include a list of things I am grateful for
-   As a user I would like to be able to rate my day
-   As a user I would like to be able to read specific journal entries
-   As a user I would like to be able to see previous journal entries’ grateful for list
-   As a user I would like to be able to see previous journal entries’ ratings
-   As a user I would like to be able to see all my previous journal entries sorted by date
-   As a user I would like to be able to post and access journal entries from all my devices
# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

.............



## installtions : 
express / cors / body-parser . 
then requiring them . 
saving the express the app variable  
## setting up the server : 
by listen to the port:7000
with a callback function as a 2nd pamatere with the 1st as the port number . 
the string is  'the port runs faster than MoSalah' as an indication the server is up and running . 

## get/post requests : 
in these two requests we collect all the data to be called later in the client side whenever these routes/links are visited . 
links : /getting /posting
responses : projectData 
projectData includes date/temp/userResponse




## getting the tempreture : 

1. after aquiring both the API key and dynamic API current weather link for the Zipcode . 
2. adding an event listener to the button on click & the 2nd parameter is an async function for getting the temp upon the click . 
3. using fetch asynchronously to get the post data from the post request and turn it into json 
4. calling the updating the user's interface function which has all the data 'theUi' 
5. using try and catch to catch errors in both of the asynchronous functions . 
6. changing  the css . 

## the result : 

we have now an asynchronous application that gets the date / tempreture and the user's feeling value upon the generate click. 
 
 
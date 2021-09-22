/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'/'+ d.getDate()+'/'+ d.getFullYear();

/*defining the API key*/
//&units=metric added to convert to Celsius as asked by the reviewer
const apikeyhehe = "f9b257025dfb4ca83c0d4c11ad0a8f7c&units=metric"
//defining the generate button
let generate = document.getElementById('generate')
//an even listening by click with two parameters one is an async function 
generate.addEventListener('click',async()=>{
//using try and catch 
    try{
    //defining the zip id with the value to be entered 
    let zippcode = document.getElementById('zip').value
    //defining feeling by it's id
    let feelings = document.getElementById('feelings').value
    //definging the link and replacing the zipcode and the apikey with the variables
    const linkie = `https://api.openweathermap.org/data/2.5/weather?zip=${zippcode},&appid=${apikeyhehe}`

    //adding an alert for not adding a zipcode
    if (!zippcode){
        alert('Please enter a Zipcode');
        console.log('could you please help me with the zipcode ?? help me to help you');
    }  

    //creating an await and fetch for the linkie const 
    let Response = await fetch(linkie)
  
  // creating an await for the const response and turning it to a json format  
    const data= await Response.json()
    //geting the tempreture only from the main and saving it in a variable  
    const temp = data.main.temp
    console.log(temp);

  
  
//an await and fetch for the client side post 

  await fetch ('/posting',{
    method:'POST',
    credentials:'same-origin',
    headers:{
        "content-type":"application/json"
    },
    //changing our data into JSON
    body:JSON.stringify({
        date:newDate,
        temp:temp,
        feelings:feelings
    })

})

}
//to catch errors
catch(error){console.log('OH !! Erroooor ',error)}

//declaring the UI function
theUi()



});



//an async function for updating the user interface with all the data with a callback
const theUi = async()=>{
    // fetching the data from the get request from the server Side in a variable
    const request=await fetch('/getting');
    try{
        //variable for the collected data from the server and turning it into json
        const allTheData=await request.json()
        //placeing each piece of info in it's id using innerHTML
        document.getElementById('date').innerHTML=allTheData.date;
        document.getElementById('temp').innerHTML=allTheData.temp;
        document.getElementById('content').innerHTML=allTheData.userResponse;

      
    }
    catch(error){
        console.log ('OOOOH Error !!!',error)
    }
}

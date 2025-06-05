// var arr=function(input){
//     if(toString.call(input)==="[object Array]")
//         return true;
//     return false;
// }
// console.log(arr("ws cubetech"));
// console.log(arr([1,2,3,4,5,6,7,8]));
// 2 question
// var arrays=function(arr1){
//     return arr1.slice(0);
// }
// console.log(arrays([1,2,4,0]));
// console.log(arrays([1,2,[4,0]]));/


// 3 question

// function abc(a,b){
//     let c = a+b;
//     console.log(c)
// }
// abc(10,20);
// let num1 = 30;
// let num2 = 50;
// abc(num1,num2);





// function abc(a,b){
//     let c = a+b;
//     // console.log(c)
//     return c;
// }
// // let abx = abc(10,20);
// console.log(abc(10,20))
// // console.log(abx)
// let num1 = 30;
// let num2 = 50;
// // let abx2 = abc(num1,num2);
// // console.log(abx2)

// console.log(abc(20,30))




// let xyz= function(a,b){
//     let c = a+b;
//     return c;
// }

// console.log(xyz(10,20))



const apikey="56783e1b577619385b5bc79a97a88081";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");


async function chechWeather(city){
    const response=await fetch(apiUrl + city +`&appid=${apikey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

        var data= await response.json();

   

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="weatherimages/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
         weathericon.src="weatherimages/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="weatherimages/rain.png"
   }
   else if(data.weather[0].main=="Drizzle"){
    weathericon.src="weatherimages/drizzle.png"
   }
   else if(data.weather[0].main=="Mist"){
    weathericon.src="weatherimages/mist.png"
  }
   
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }


    
}
searchbtn.addEventListener("click",()=>{
    chechWeather(searchbox.value);
})


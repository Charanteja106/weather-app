
const apiKey = 'acd99d568906b6c673f4b0e489931a46';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherImage = document.querySelector(".wheather-image")


async function checkWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    // 
   const City =  document.querySelector(".city")
   City.innerHTML = data.name;

//    color for °C

   searchBtn.addEventListener('click' , () =>{
    City.style.color='black'
    Temp.style.color='black'
   })

    const Temp = document.querySelector(".temp")
    Temp.innerHTML = Math.round(data.main.temp)+ "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    searchBtn.addEventListener('click' , () =>{
        City.style.color='black'
        // Temp.style.color='black'
       })

    weatherImage.style.borderRadius = "20%"
    weatherImage.style.border = "1.5px solid black"

    if(data.weather[0].main == "Clouds"){
        weatherImage.src="clouds.png";
    }
    else if (data.weather[0].main == 'Clear'){
        weatherImage.src = "clear.png";
    }
    else if (data.weather[0].main == 'Rain'){
        weatherImage.src = "rain.png";

    }
    else if (data.weather[0].main =='Drizzle'){
        weatherImage.src = "drizzle.png";
    }
    else if (data.weather[0].main=='Mist'){
        weatherImage.src = 'mist.png';
    }

}

searchBtn.addEventListener("click" , () =>{
    checkWeather(searchBox.value);
    
})


//  themes

const BGColor=document.querySelector('.dot')
const BGcontainer = document.querySelector('.color-container')

BGColor.addEventListener('click', () =>{
    BGcontainer.classList.toggle('active')
    // BGcontainer.style.display='block'
})




function mytheme1(){
  // document.body.style.background = "lightcoral"
   
  document.body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?semt=ais_hybrid") ';
  document.body.style.backgroundSize = "cover";
  document.body.style.position= "fit";

}
function mytheme2(){
    // document.body.style.background = "darkslategray"
    document.body.style.backgroundImage = 'url("https://w0.peakpx.com/wallpaper/17/930/HD-wallpaper-shadow-in-the-water-water-moon-moonlight-tree-lale-night.jpg") ';
    document.body.style.backgroundSize = "cover";
    document.body.style.position= "fit";
    document.body.style.height='100dvh'

}
function mytheme3(){
    // document.body.style.background = "greenyellow"
    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/a2/fe/21/a2fe21da9ce7d1698f5b48cdb506c853.jpg") ';
    document.body.style.backgroundSize = "cover";
    document.body.style.position= "fit";
    document.body.style.height='100dvh'   
}
function mytheme4(){
    // document.body.style.background = "bisque"

    document.body.style.backgroundImage = 'url("https://c4.wallpaperflare.com/wallpaper/949/647/781/bioshock-rapture-video-games-wallpaper-preview.jpg") ';
    document.body.style.backgroundSize = "cover";
    document.body.style.position= "fit";
    document.body.style.height='100dvh'
}
function mytheme5(){
    // document.body.style.background = "blueviolet"
    document.body.style.backgroundImage = 'url("https://c4.wallpaperflare.com/wallpaper/929/162/426/lights-sky-landscape-mountains-stars-hd-wallpaper-preview.jpg") ';
    document.body.style.backgroundSize = "cover";
    document.body.style.position= "fit";
    document.body.style.height='100dvh'
}
function mytheme6(){
    document.body.style.background = "darkblue"
    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/3e/ba/05/3eba05b9023be9f106238aea8a250344.jpg") ';
    document.body.style.backgroundSize = "cover";
    document.body.style.position= "fit";
    document.body.style.height='100dvh'
}

function wallpaper1(){
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1708893634094-f6604d94e43f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bGwlMjBoZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D") ';
    document.body.style.backgroundSize = "cover";
    document.body.style.position= "fit";
    document.body.style.height='100dvh'

}
function wallpaper2(){
    document.body.style.backgroundImage = 'url("https://img.freepik.com/premium-photo/beautiful-lakes-mountains-artwork_1194790-180.jpg?semt=ais_hybrid") ';
    document.body.style.backgroundSize = "cover";
    document.body.style.position= "fit";
}
function wallpaper3(){
    document.body.style.backgroundImage = ' url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg") ';
    document.body.style.backgroundSize = "cover";
    document.body.style.position= "fit";
    document.body.style.height='100dvh'

}

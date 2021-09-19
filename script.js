function Clock(){
    var timeField = document.getElementById("text-field");
    var imageField = document.getElementById("image");

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    

    if(hour < 10){
        hour = "0" + hour;
    } 
    else if(minute < 10){
        minute = "0" + minute;
    }
    else if(second < 10){
        second = "0" + second;
    }

    var clock = `Hello, It's; ${hour}:${minute}:${second}`
    timeField.innerHTML = clock;

    //Morning Background Color
    if(hour < 12){
        imageField.src = 'photos/morningPic.png'
        document.body.style.background = "#BACDE0";
    }
    //Afeternoon Background Color
    else if(hour < 18 ){
        imageField.src = "photos/afternoonPic.jpg"
        document.body.style.background = "#D2C9C0";
    }
    //Evening Background Color
    else{
        imageField.src = "photos/eveningPic.jpg"
        document.body.style.background = "#24323A";
    }
        
    
}

setInterval(Clock, 1000);
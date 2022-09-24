


function time() {
fetch("/dates")
.then(resolve => resolve.json())
.then(res => {

    /* Can also be made like this insted of the Ternary Operator
    let sec;
    if(res.seconds < 10){
        sec = "0" + res.seconds;
    }else{
        sec = res.seconds;
    }
    */

    let hour = (res.hour < 10 ? "0" + res.hour : res.hour);
    let minut = (res.minut < 10 ? "0" + res.minut : res.minut);
    let seconds = (res.seconds < 10 ? "0" + res.seconds : res.seconds);
    
    document.querySelector("#label_time").textContent =
    + hour + " : " 
    + minut + " : " 
    + seconds;


    //console.log(res.hour);
    let timeColor = hexaTime(res.seconds);

    console.log(timeColor);
    
    /*
    if(res.hour < 12){
        timeColor = res.hour * 23.1;
    }else{
        timeColor = ((res.hour * 23.1) * (res.hour / 24));
        //console.log(23.1 * (res.hour / 24));
    }
    */

    
    
    //document.body.style.backgroundColor = `rgb(${timeColor}, ${timeColor}, ${timeColor})`;
    document.body.style.backgroundColor = timeColor;
    
    document.querySelector("#label_date").textContent = res.dateString;
    

    
});
}

setInterval(time, 1000);



function toHex(d) {
    let hex = ("0" + (Number(d).toString(16))).slice(-2).toUpperCase();
    return hex;
}

function hexaTime(time) {

    let timeColorNumber = parseInt(time * 255 / 59);
  
    return "#" + toHex(timeColorNumber) + toHex(timeColorNumber) + toHex(timeColorNumber);
  }
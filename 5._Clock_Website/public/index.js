


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

    console.log(hour);
    
    document.querySelector("#label_hour").textContent =
    + hour + " : " 
    + minut + " : " 
    + seconds;

    
    //console.log(res.hour);
    let timeColor = 0;
    
    if(res.hour < 12){
        timeColor = res.hour * 23.1;
    }else{
        //timeColor = (res.hour * 23.1) ; lav dette
    }
    
    document.body.style.backgroundColor = `rgb(${timeColor}, ${timeColor}, ${timeColor})`;
    
    //document.querySelector("#label_minut").textContent = res.minut;

    //document.querySelector("#label_seconds").textContent = res.seconds;

    
    //document.querySelector("#label_date").textContent = res.date;
    
});
}

setInterval(time, 1000);

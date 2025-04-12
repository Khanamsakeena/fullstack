const currentTime=()=>{
    let curTime=new Date().toLocaleTimeString();
    document.getElementById('clock').innerText=curTime;
}



const intervalId=setInterval(()=>{
    currentTime();
}, 1000);



// this code is for stopwatch with timer

//setTimeout(()=>clearInterval(intervalId),5000)
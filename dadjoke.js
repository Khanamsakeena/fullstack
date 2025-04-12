

const apiBody=document.querySelector(".api_body");










const apiUrl="https://icanhazdadjoke.com/"
// const apiUrl="https://jsonplaceholder.typicode.com/posts/1";


const fetchData=()=>{
    fetch(apiUrl,{
        headers:{
            Accept:"application/json",
        },
    })
    .then((res)=>{
       console.log(res);
       return res.json();
    })
    .then((data)=>{
        console.log(data.joke);
        apiBody.innerHTML=data.joke
    })
    .catch((error)=>{
      console.log(error)
    })
}









document.getElementById("fetchJoke").addEventListener('click',fetchData)
function searchvid(){
console.log("hello")
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=unholy%20acoustic%20karaoke&key=AIzaSyAIVusd82WaGoihJTZ-9-52K2NAt4gSHYU")
.then((res)=>{
    console.log(res.json())
})
   
}

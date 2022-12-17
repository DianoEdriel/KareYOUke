function searchvid(){

fetch("https://youtube.googleapis.com/youtube/v3/search?maxResults=1&order=viewCount&q=pampanga&key=AIzaSyAIVusd82WaGoihJTZ-9-52K2NAt4gSHYU")
.then((data)=>{
    console.log(data)
})


}

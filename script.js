console.log("Welcome to Tune");

//Initialize the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');

let songs=[
    {songName: "Ranjha (From Shershaah)", filepath: "1.mp3", coverpath: "song 2.jpg"},
    {songName: "Mann Bharya (From Shershaah)", filepath: "2.mp3", coverpath: "song 2.jpg"},
    {songName: "Lover", filepath: "3.mp3", coverpath: "song3.jpg"},
    {songName: "Chitta (From Shiddat)", filepath: "4.mp3", coverpath: "song5.jpg"},
    {songName: "Born To Shine", filepath: "5.mp3", coverpath: "song4.jpg"},
    {songName: "Raataan Lambiyan", filepath: "6.mp3", coverpath: "song 2.jpg"},
    {songName: "G.O.A.T.", filepath: "7.mp3", coverpath: "song4.jpg"},
    {songName: "Tera Yaar Hun Mai", filepath: "8.mp3", coverpath: "song8.jpg"},
    {songName: "Kun Faya Kun", filepath: "9.mp3", coverpath: "song9.jpg"},
    {songName: "Mitti Di Khushboo", filepath: "10.mp3", coverpath: "song10.jpg"},

]

//audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

// Listen To Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
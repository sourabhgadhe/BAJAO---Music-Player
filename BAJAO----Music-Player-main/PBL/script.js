console.log("Welcome to BAJAO");
//Initialize the varibles
let songIndex = 0;
let audioElement = new Audio('songs/default.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');


let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "It's Criminal__(Ra-one)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Pani Da__(Vicky Donor)", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Desi Kalakar__(Album Song)", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Dilbar__(Satyameva Jayate)", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Wakhra Swag__(Album Song)", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Dildara__(Ra-one)", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Ag Bai__(Aiyya)", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})
// audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;

    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
    
    if(myProgressBar.value == 100)
    {
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;

   
})

document.getElementById('next').addEventListener('click', () => {
   
    songIndex += 1;
    if(songIndex>7)
    {
        songIndex = 1;
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

})

document.getElementById('previous').addEventListener('click', () => {
  
    songIndex -= 1;
    if(songIndex==0 || songIndex<0)
    {
        songIndex=7;
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})
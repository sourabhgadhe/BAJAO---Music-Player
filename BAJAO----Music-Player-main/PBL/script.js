console.log("Welcome to BAJAO");
//Initialize the varibles
let songIndex = 0;
let audioElement = new Audio('songs/default.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songItem'));
let timestamp = document.getElementById('time');

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

    var s = parseInt(audioElement.currentTime % 60);
    var m = parseInt((audioElement.currentTime / 60) % 60);
    timestamp.innerHTML = m + ' : ' + s;

    if (myProgressBar.value == 100) {
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
    if (songIndex > 7) {
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
    if (songIndex == 0 || songIndex < 0) {
        songIndex = 7;
    }

    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})


// click on carousels for navigation
document.getElementById("child1").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/radio/hindi", "_blank");
})

document.getElementById("child2").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/album/top-bollywood-movie-songs-of-2021/bqbrhlzBfaM_", "_blank");
})

document.getElementById("child3").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/top-artists", "_blank");
})

document.getElementById("child4").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/new-releases/hindi", "_blank");
})

document.getElementById("child5").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/s/playlist/phulki_user/Romantic_Top_40/m9Qkal5S733ufxkxMEIbIw__", "_blank");
})

document.getElementById("child6").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/artist/silent-songs/GviKKC9ho60_", "_blank");
})

document.getElementById("child7").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/s/playlist/phulki_user/Golden_Oldies/ATyiA13i9H3femJ68FuXsA__", "_blank");
})

document.getElementById("child8").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/s/playlist/phulki_user/Instrumental_-_Hindi/f8XJdpjsuKxuOxiEGmm6lQ__", "_blank");
})

document.getElementById("child9").addEventListener('click', () => {
    window.open("https://www.jiosaavn.com/s/playlist/phulki_user/Now_Playing_Pop/IQO11xk800E_", "_blank");
})

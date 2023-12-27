const takeQuerySelector = () => {
    const buttonChangeTheme = document.querySelector(".changeBackground button");
    const h1 = document.querySelector("h1");
    const buttonPlay = document.querySelector("#play");
    const buttonTimer = document.querySelector("#timer");
    const buttonSpeeker = document.querySelector("#speeker");
    const body = document.querySelector("body");
    const audio = document.querySelector("audio")

    return {
        buttonChangeTheme,
        h1,
        buttonPlay,
        buttonTimer,
        buttonSpeeker,
        body,
        audio
    }
}

const takeQuery = takeQuerySelector();

const darkTheme = () => {
    takeQuery.buttonChangeTheme.addEventListener("click", () => {
        takeQuery.body.classList.toggle("darkTheme");
        takeQuery.buttonChangeTheme.classList.toggle("sun");
        takeQuery.h1.classList.toggle("white");

        if(!takeQuery.buttonSpeeker.classList.contains("speekerHigh")) {
            takeQuery.audio.play();
        }
    })
}

const changeControls = () => {
    takeQuery.buttonPlay.addEventListener("click", () => {
        takeQuery.buttonPlay.classList.toggle("play");
        takeQuery.buttonPlay.classList.toggle("pause");


        if(takeQuery.buttonPlay.classList.contains("pause")) {
            pause();
        } else {
            count();
        }
    });

    takeQuery.buttonTimer.addEventListener("click", () => {
        takeQuery.buttonTimer.classList.toggle("stop");
        takeQuery.buttonTimer.classList.toggle("timer");

        if(takeQuery.buttonTimer.classList.contains("stop")) {
            count();
            takeQuery.buttonPlay.classList.add("play");
            takeQuery.buttonPlay.classList.remove("pause")

        } else {
            clear();
            pause();
            takeQuery.buttonPlay.classList.remove("play");
            takeQuery.buttonPlay.classList.add("pause");
        }

        

    });

    takeQuery.buttonSpeeker.addEventListener("click", () => {
        takeQuery.buttonSpeeker.classList.toggle("speekerHigh");
        
    })
}

let seconds = 0;
let minutes = 0;
let interval;

const count = () => {
    
    interval = setInterval(() => {
        seconds++;
        
        takeQuery.buttonSpeeker.classList.contains("speekerHigh") ? takeQuery.audio.play() : takeQuery.audio.pause(); 
        
        if(seconds > 0 && seconds <= 9) {
            takeQuery.h1.innerHTML = `0${minutes}:0${seconds}`;
            
        }
        if(seconds >= 10){
            takeQuery.h1.innerHTML = `0${minutes}:${seconds}`
        }
        
        if(seconds >= 60) {
            seconds = 0;
            minutes++;
            
        }

        if(minutes > 9 && seconds > 0 && seconds <= 9) {
            takeQuery.h1.innerHTML = `${minutes}:0${seconds}`
        }
        
        if(minutes > 9 && seconds >= 10) {
            takeQuery.h1.innerHTML  =`${minutes}:${seconds}`
        }

    }, 1000);
    
    
}



const pause = () => {
    clearInterval(interval)
}

const clear = () => {
    setTimeout(() => {
        seconds = 0;
        minutes = 0;
        takeQuery.h1.innerHTML = "00:00";

    })
}



changeControls();
darkTheme();
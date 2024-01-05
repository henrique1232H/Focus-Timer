import takeQuery from "./elements.js"

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

export default darkTheme()
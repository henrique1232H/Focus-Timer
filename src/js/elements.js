const takeQuery = () => {
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


export default takeQuery()
import MainPageCarousel from "../Carousel/MainPageCarousel"

const MainPage = () => {
    const emoji = require("emoji-dictionary")

    return(
        <div className="container">
            <h1>{"Hi, i'm Orest" + emoji.getUnicode("smile")}</h1>
            <h2>{"Some time ago I became interested in 3D modeling" + emoji.getUnicode("scream_cat")}</h2>
            <h2>{"Below you can see some of my work" + emoji.getUnicode("cat") + emoji.getUnicode("computer")}</h2>
        <MainPageCarousel />
        </div>
    );
}

export default MainPage;
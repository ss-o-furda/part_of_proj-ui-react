import Carousel from "react-bootstrap/cjs/Carousel";


function MainPageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/LCnXyUO.png"
                    alt="Sunset"
                />
                <Carousel.Caption>
                    <h4>Model of sunset</h4>
                    <p>Screenshot of animation with sea movement</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/eKr4tgz.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>Model of light bulb</h4>
                    <p>Many light bulbs, but only one shines</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.imgur.com/fRwn5cQ.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>Model of house with tower</h4>
                    <p>Flying island with a house and a tower</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MainPageCarousel;
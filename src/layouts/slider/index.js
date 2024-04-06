import { Carousel } from "react-bootstrap";
import img1 from "./img1.png";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpeg";
import "./Slider.css"

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Slider = () => (
  <Carousel>
    {images.map((image, index) => (
      <Carousel.Item key={index} interval={2000}>
        <img className="d-block w-100  carousel-img" src={image} alt={`Slide ${index + 1}`} />
      </Carousel.Item>
    ))}
  </Carousel>
);

export default Slider;

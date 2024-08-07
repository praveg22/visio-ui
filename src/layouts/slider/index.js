import { Carousel } from "react-bootstrap";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
// import img7 from "./img7.jpg";
// import img8 from "./img8.jpeg";
import "./Slider.css";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

const images = [img1, img2, img3, img4, img5, img6];

const Slider = () => (
  <>
    {/* <DashboardNavbar /> */}
    <DashboardLayout> 

    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={2000}>
          <img
            className="d-block w-100  carousel-img"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </DashboardLayout> 

  </>
);

export default Slider;

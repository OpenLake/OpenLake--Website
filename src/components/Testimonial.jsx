import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Testimonial.css";
import { Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
    
      <div style={{ width: "50%", textAlign: "center" }}>
      <h1 className="texthead leading-relaxed font-[600] mb-10 ">Message from <span className="bg-opacity-20 text-[#28A9E2] bg-[#28A9E2] px-1 py-1">Alumni</span></h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://i.ibb.co/dB9kSZy/47217984.jpg" />
          <Card img="https://i.ibb.co/dB9kSZy/47217984.jpg" />
          <Card img="https://i.ibb.co/dB9kSZy/47217984.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
      Closed source is like eating pizza with only crust. It's just not as satisfying, right? Open source is like a pizza with unlimited toppings, where you can customize to your heart's content! 🍕😋 And best of all, with open source, you can have that extra cheese without any extra charge! 🧀🙌
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "#28A9E2" }}>K Shivendu</span> ,
        Open Source Engineer @supertokens
      </p>
    </div>
  );
};

export default Testimonial;
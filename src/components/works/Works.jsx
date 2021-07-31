import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/sapos/sapoZenPNG.png",
      title: "Sapo Calmo",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "./assets/sapos/sapoZenPNG.png",
    },
    {
      id: "2",
      icon: "./assets/sapos/sapoConePNG.png",
      title: "Sapo Manifestante",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "./assets/sapos/sapoConePNG.png",
    },
    {
      id: "3",
      icon: "./assets/sapos/sapoViolaoPNG.png",
      title: "Sapo Raul Seixas",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "./assets/sapos/sapoViolaoPNG.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href="https://google.com" target="_blank" rel="noreferrer"><span>Link pro site</span></a>
                </div>
              </div>
              <div className="right">
                <img
                  src="assets/sapos/sapoSkatePNG.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import "./works.css";

const workImg = [
  {
    id: 1,
    img: img1,
    link: "https://un-stuck-git-main-vermapiyush823s-projects.vercel.app/",
  },
  {
    id: 2,
    img: img2,
    link: "https://github.com/vermapiyush823/Jewellery-Website",
  },
  {
    id: 3,
    img: img3,
    link: "https://vermapiyush823.github.io/Grocers/",
  },
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="works-title">My Works</h2>
      <span className="workDesc">
        I do my best to make my works look good and clean. Also I try to make
        them as responsive as possible.
      </span>
      <div className="workImgs">
        {workImg.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="workImgContainer"
          >
            <img src={item.img} alt="" key={item.id} className="worksImg" />
          </a>
        ))}
      </div>
      <button className="workBtn">Show More</button>
    </section>
  );
};

export default Works;

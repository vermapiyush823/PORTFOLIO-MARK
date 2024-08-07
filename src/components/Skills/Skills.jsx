import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import "./skills.css";

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const education = [
    {
      h1: "Lovely Professional University",
      h2: "Bachelor of Technology, Computer Science",
      p: "Sept'20 - Present",
      backgroundColor: "rgba(255, 99, 132, 0.4)",
      borderColor: "rgb(255, 99, 132)",
    },
    {
      h1: "Hindu VidhyaPeeth",
      h2: "Senior Secondary School, Science",
      p: "Apr'2020 - May'21",
      backgroundColor: "rgba(255, 159, 64, 0.4)",
      borderColor: "rgb(255, 159, 64)",
    },
    {
      h1: "Hindu VidhyaPeeth",
      h2: "Secondary School, Science",
      p: "Apr'18 - May'19",
      backgroundColor: "rgba(255, 205, 86, 0.4)",
      borderColor: "rgb(255, 205, 86)",
    },
  ];

  const experience = [
    {
      h1: "React",
      p: "Have worked on multiple projects using React and React Native. I have also worked on a few open source projects using React.",
      backgroundColor: "rgba(75, 192, 192, 0.4)",
      borderColor: "rgb(75, 192, 192)",
    },
    {
      h1: "JavaScript",
      p: "I have worked on multiple projects using JavaScript. I have also worked on a few open source projects using JavaScript.",
      backgroundColor: "rgba(54, 162, 235, 0.4)",
      borderColor: "rgb(54, 162, 235)",
    },
    {
      h1: "HTML CSS",
      p: "I have worked on multiple projects using HTML CSS. I have also worked on a few open source projects using HTML CSS.",
      backgroundColor: "rgba(153, 102, 255, 0.4)",
      borderColor: "rgb(153, 102, 255)",
    },
  ];

  return (
    <section id="skills">
      <h1 className="aboutMeHeading">About Me</h1>
      <p className="aboutMePara">
        I am a software engineer with a passion for building and designing
        applications. I am currently a senior at the University of California,
        Irvine studying Computer Science. I have experience working with
        JavaScript, React, Node.js, Express, MongoDB, Python, Java, and C++.
      </p>
      <div className="SelectButtonContainer">
        <button
          onClick={() => handleClick("skills")}
          className={`btn ${activeTab === "skills" ? "active" : ""}`}
        >
          Skills
        </button>
        <button
          onClick={() => handleClick("experience")}
          className={`btn ${activeTab === "experience" ? "active" : ""}`}
        >
          Experience
        </button>
        <button
          onClick={() => handleClick("education")}
          className={`btn ${activeTab === "education" ? "active" : ""}`}
        >
          Education
        </button>
      </div>
      <div className="content-container">
        {activeTab === "skills" && (
          <div className="skills">
            <div className="chart-container">
              <Bar
                className="chart"
                data={{
                  labels: [
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                  ],
                  datasets: [
                    {
                      label: "Proficiency",
                      data: [90, 80, 70, 60, 50],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.4)",
                        "rgba(255, 159, 64, 0.4)",
                        "rgba(255, 205, 86, 0.4)",
                        "rgba(75, 192, 192, 0.4)",
                        "rgba(54, 162, 235, 0.4)",
                        "rgba(153, 102, 255, 0.4)",
                        "rgba(201, 203, 207, 0.4)",
                      ],
                      borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                      ],
                      borderWidth: 1,
                      borderRadius: 10,
                      maxBarThickness: 80,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Proficiency in Programming Languages and Frameworks",
                    },
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      type: "category", // Ensure the category scale is registered
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
        {activeTab === "education" &&
          education.map((item, index) => (
            <div
              key={index}
              className="education-container c1"
              style={{
                backgroundColor: item.backgroundColor,
                border: "1px solid " + item.borderColor,
              }}
            >
              <h1 className="schoolName">{item.h1}</h1>
              <hr />
              <h2 className="degree">{item.h2}</h2>
              <p className="duration">{item.p}</p>
            </div>
          ))}
        {activeTab === "experience" && (
          <div className="experience">
            {experience.map((item, index) => (
              <div
                key={index}
                className="experience-container c1"
                style={{
                  backgroundColor: item.backgroundColor,
                  border: "1px solid " + item.borderColor,
                }}
              >
                <h1 className="tech">{item.h1}</h1>
                <hr />
                <p className="desc">{item.p}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

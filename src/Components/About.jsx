/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background-mosaique.jpg";

const imageAltText = "mosaique background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a jr backend Developer and Physics student at University. I love building powerful web applications using Django/Laravel and Solving problems using scientific methods.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web development",
  "Software Engineering",
  "Backend Engineering",
  "Python(Django/flask)",
  "PHP(Laravel)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a software engineer focus on Backend(server-side programming). I have a strong background in physics and a passion for problem-solving and programming. My early exposure to algorithmic thinking in courses such as Pascal and Fortran at school led me to pursue the application of simulation techniques in physics to real-world problems using Python(NumPy).I have the abilities to build complex systems such as web applications using django, Laravel and NodeJS.I am constantly seeking new challenges and opportunities to grow, and I thrive in collaborative environments where I can learn from others. .";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

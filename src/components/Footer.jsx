import React from "react";
import yash from "../assets/yash.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={yash} alt="Founder" />

        <h2>Yash Niboriya</h2>

        <p>“The quieter you become the more you can hear.”</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/yash-niboriya-613918213/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/yash_niboriya/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Yashniboriya" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>

      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

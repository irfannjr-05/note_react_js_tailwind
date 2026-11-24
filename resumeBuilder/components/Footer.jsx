import { Box } from "@mui/material";
import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "10px",
          backgroundColor: "brown",
          color: "white",
        }}
      >
        <Box id="a">
          <h4>Resume Builder</h4>

          <p>
            An AI Powered Resume Builder is a web application that helps users
            create professional resumes quickly and efficiently using artificial
            intelligence. Traditional resume creation can be time-consuming and
            difficult, especially for freshers who may not know the correct
            format or keywords required for modern recruitment systems.
          </p>
        </Box>

        <Box id="b"></Box>

        <Box id="c">
          <h4> Contact Us</h4>

          <p>
            <MdAttachEmail /> resumebuilder@gmail.com
          </p>

          <p>
            <FaPhoneAlt /> 9087654321
          </p>

          <h5>Connect With Us</h5>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <FaInstagram />
            <FaFacebookSquare />
            <FaWhatsapp />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          margin: "2px",
          marginTop: "-50px",
          color: "white",
          fontSize: "30px",
        }}
      >
        <h6>Designed & built with ❤️ using React</h6>
      </Box>
    </>
  );
};

export default Footer;
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box id="img">
        <Box
          sx={{
            backgroundColor: "rgba(151, 152, 143, 0.7)",
            color: "white",
            textAlign: "center",
            padding: "20px 50px",

            borderRadius: "10px",
            fontSize: "25px",
          }}
        >
          <h3 id="heading">
            Designed To Get Hired. Your <br /> Skills, Your Story, Your Next{" "}
            <br /> Job - All In One.
          </h3>

   <Link id="link" to="/generate">
  Make Your Resume
</Link>
        </Box>
      </Box>

      <Box className="container">
        <h1>What's Resume Builder</h1>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box id="para">
            <p>
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems.
            </p>

            <p>
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly.
            </p>

            <p>
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes. Users can edit content,
              preview their resume, and download it in formats such as PDF.
            </p>

            <p>
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </p>
          </Box>

          <Box>
            <img
              id="img1"
              src="	https://ai-r-builder-dec25.vercel.app/resume.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>

      <Box className="container">
        <h1>Testimony</h1>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box id="text">
            <h5>Trusted by professionals worldwide.</h5>

            <p>
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>

            <p>
              In fact, users who used LiveCareer reported getting hired an
              average of 48 days faster.
            </p>

            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers
              with a résumé that truly stands out
            </p>
          </Box>

          <Box id="images">
            <Box className="image">
              <img
                src="	https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src=" https://writestylesonline.com/wp-content/uploads/2…k-Your-Professional-Profile-Picture-1024x1024.jpg"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://img.freepik.com/premium-photo/design-profe…-clean-neutral-background_880763-20280.jpg?w=1060"
                alt=""
              />
            </Box>

            <Box className="image">
              <img
                src="	https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180"
                alt=""
              />
            </Box>
            
          </Box>
        </Box>
      </Box>
      
    </>
  );
};

export default Home;
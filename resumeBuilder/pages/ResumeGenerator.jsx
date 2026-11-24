import { Box, Typography } from "@mui/material";
import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResumeGenerator = () => {
  return (
    <Box>
      <Typography sx={{ textAlign: "center", py: 5 }} variant="h4">
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around", mb: 7 }}>
        <Box sx={{ border: "1px solid black", p: 3, textAlign: "center" }}>
          <IoDocumentText style={{ color: "blue", fontSize: "40px" }} />
          <Typography sx={{ textAlign: "center", py: 2 }} variant="h6">
            Add your details
          </Typography>
          <Typography sx={{ textAlign: "center", py: 2 }} variant="p">
            Our AI will generate Skills & Summary
          </Typography>
          <Typography sx={{ textAlign: "center", py: 4 }} variant="h6">
            Step 1
          </Typography>
        </Box>
        <Box sx={{ border: "1px solid black", p: 3, textAlign: "center" }}>
          <FaFileDownload style={{ color: "red", fontSize: "40px" }} />
          <Typography sx={{ textAlign: "center", py: 2 }} variant="h6">
            Download your Resume
          </Typography>
          <Typography sx={{ textAlign: "center", py: 2 }} variant="p">
            Download PDF and start applying
          </Typography>
          <Typography sx={{ textAlign: "center", py: 4 }} variant="h6">
            Step 2
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Link to={'/form'} id="link">Let's Start</Link>
      </Box>
    </Box>
  );
};

export default ResumeGenerator;
import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import Preview from "../components/Preview";

const MainPage = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    location: "",
    jobRole: "",
    email: "",
    contactNumber: 0,
    linkedinLink: "",
    githubLink: "",
    degree: "",
    university: "",
    yog: 0,
    skills: [],
    summary: "",
  });

  return (
    <Grid sx={{ p: 7 }} container spacing={2}>
      <Grid size={6}>
        <Form setResumeData={setResumeData} resumeData={resumeData} />
      </Grid>
      <Grid size={6}>
        <Preview resumeData={resumeData} />
      </Grid>
    </Grid>
  );
};

export default MainPage;
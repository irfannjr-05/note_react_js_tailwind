
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { blue } from "@mui/material/colors";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from "../src/assets/jobRole.json";
import jobSkills from '../src/assets/jobSkills.json'
import summaries from '../src/assets/summaries.json'
import axios from 'axios'


const Form = ({setResumeData,resumeData}) => {
  console.log(resumeData)
  const steps = [
    "Basic Informations",
    "Contact Details",
    "Educational Details",
    "Review & Submit",
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const onJobRoleSelect =(role)=>{
    setResumeData({...resumeData,summary:summaries[role],skills:jobSkills[role],jobRole:role})
  }
  const handleSubmit =async()=>{
    try{
    if (
   resumeData.fullName == "" ||


    resumeData.location == ""  ||
    resumeData.jobRole == ""  ||
    resumeData.email == ""  ||
    resumeData.contactNumber == 0  ||
    resumeData.linkedinLink == ""  ||
    resumeData.githubLink == ""  ||
   resumeData.degree == ""  ||
    resumeData.university == ""  ||
    resumeData.yog == 0  ||
    resumeData.skills == []  ||
    resumeData.summary == "" 
    ) 
{
  alert("please fill the form")
}else{
  let apiResponse = await axios.post('http://localhost:3000/resumeDatas',resumeData)
  if(apiResponse.status==201){
    alert('successfully resume added')
  }else{
    alert('failed to add resume ')
  }
}

    }catch(error){
      console.log(error);
      alert('api call failed')
    };
    
  }

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box key="personal">
            <Typography sx={{ mb: 4 }} variant="h5">
              Personal Details
            </Typography>

            <TextField 
          onChange={(e)=>setResumeData({...resumeData,fullName:e.target.value})}

          value={resumeData.fullName}
             sx={{ width: '100%', mb: 1 }} id="fullName" label="Full Name" variant="standard" />
            <TextField 
            onChange={(e)=>setResumeData({...resumeData,location:e.target.value})}
            value={resumeData.location}
            sx={{ width: '100%', mb: 1 }} id="location" label="Location" variant="standard" />

            <FormControl fullWidth>
              <InputLabel id="job-role-label">Job Role</InputLabel>
              <Select
                labelId="job-role-label"
                id="job-role"
                label="Job Role"
                defaultValue=""
                onChange={(e)=>onJobRoleSelect(e.target.value)}
              >
                {jobRole.jobRoles.map((eachJob, index) => (
                  <MenuItem value={eachJob} key={index}>
                    {eachJob}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 1:
        return (
          <Box key="contact">
            <Typography sx={{ mb: 4 }} variant="h5">
              Contact Details
            </Typography>

            <TextField 
            onChange={(e)=>setResumeData({...resumeData,email:e.target.value})}

          value={resumeData.Email}
            sx={{ width: '100%', mb: 1 }} id="email" label="email" variant="standard" />
            <TextField 
            onChange={(e)=>setResumeData({...resumeData,contactNumber:e.target.value})}

          value={resumeData.contactNumber}
            sx={{ width: '100%', mb: 1 }} id="contact" label="Contact Number" variant="standard" />
            <TextField 
            onChange={(e)=>setResumeData({...resumeData,linkedinLink:e.target.value})}

          value={resumeData.linkedinLink}
            sx={{ width: '100%', mb: 1 }} id="linkedin" label="LinkedIn Link" variant="standard" />
            <TextField
             onChange={(e)=>setResumeData({...resumeData, githubLink:e.target.value})}

          value={resumeData.githubLink}

            sx={{ width: '100%', mb: 1 }} id="github" label="Github Link" variant="standard" />
          </Box>
        );

      case 2:
        return (
          <Box key="education">
            <Typography sx={{ mb: 4 }} variant="h5">
              Educational Details
            </Typography>

            <TextField
              onChange={(e)=>setResumeData({...resumeData, degree:e.target.value})}

          value={resumeData.degree}

            
            sx={{ width: '100%', mb: 1 }} id="degree" label="Bachelor's Degree" variant="standard" />
            <TextField 
                  onChange={(e)=>setResumeData({...resumeData, university:e.target.value})}

          value={resumeData.university}


            sx={{ width: '100%', mb: 1 }} id="college" label="University/College Name" variant="standard" />
            <TextField 
                  onChange={(e)=>setResumeData({...resumeData, yog:e.target.value})}

          value={resumeData.yog}


            sx={{ width: '100%', mb: 1 }} id="year" label="Year of Graduation" variant="standard" />
          </Box>
        );

      case 3:
        return (
          <Box key="review">
            <Typography sx={{ mb: 4 }} variant="h5">
              Review and submit
            </Typography>

            <Typography sx={{ color: 'grey', mb: 2 }} variant="body1">
              Our resume builder will generate Skills & Summary according to your job role. Click the finish button to Proceed.
            </Typography>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Our AI will generate Skills & Summary according to your job role.
            Click the Generate AI Skill & Summary button to Proceed
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleReset}
              sx={{ backgroundColor: blue[500], color: "white" }}
            >
              GENERATE SKILLS & SUMMARY
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
          </Typography>

          {renderForm()}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />

            {/* <Button
              onClick={handleNext}
              sx={{ backgroundColor: blue[500], color: "white" }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button> */}
{
  activeStep === steps.length -1 ? <Button onClick={handleSubmit}>Finish</Button> : <Button  onClick={handleNext}>Next</Button>
}

          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Form;

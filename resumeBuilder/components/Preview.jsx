import React from "react";
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

const Preview = ({resumeData}) => {
  return (
    <Box>

      <Paper elevation={2} sx={{p:3}}>
        <Typography  variant="h5" sx={{mb:1}}>{resumeData?.fullName}</Typography>
        <Typography  sx={{m:1}}>Phone : {resumeData?.contactNumber} </Typography>
        <Typography  sx={{m:1}}>Email : {resumeData?.email}</Typography>
        <Typography  sx={{m:1}}>LinkedIn : {resumeData?.linkedinLink}</Typography>
        <Typography  sx={{m:1}}>Github : {resumeData?.githubLink}</Typography>
        <Typography  sx={{m:1}}>Location : {resumeData?.location}</Typography>
        <Divider />
        <Typography variant="h5" sx={{mb:1}}>Professional Summary</Typography>
        <Typography variant="p" sx={{m:1}}>{resumeData?.summary}</Typography>
        <Divider />
        <Typography variant="h5" sx={{m:1}}>Technical Skills</Typography>
        {
          resumeData?.skills?.map((eachSkill,index)=>(
            <Button key={index}>{eachSkill}</Button>
          ))
        }
        <Divider />
        
        <Typography variant="h5" sx={{m:1}}>Education</Typography>
        <Typography  sx={{m:1}}>Bachelor's Degree in : {resumeData?.degree}</Typography>
        <Typography  sx={{m:1}}>University/College Name : {resumeData?.university}</Typography>
        <Typography  sx={{m:1}}>Year of Graduation : {resumeData?.yog}</Typography>


    </Paper>
    </Box>
  )
}

export default Preview
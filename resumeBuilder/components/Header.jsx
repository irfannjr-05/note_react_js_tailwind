
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { GrDocumentThreat } from "react-icons/gr";

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"maroon"}} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'white',
              textDecoration: 'none'
            }}
          >
            <GrDocumentThreat />
            ResumeBuilder
          </Typography>

          <Button color="inherit" component={Link} to="/generate">
           About Us
          </Button>

        
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

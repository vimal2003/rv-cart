import React,{useState} from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login = () => {
    const[login,setLogin]=useState(true);
    const[value,setValue]=useState({
     email:"",
     password:"",
     name:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
     
      const handleLogIn=()=>{
        
      }
      const defaultTheme = createTheme();
  return (
    <div className=''>
   
   <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className='bg-gray-300 border-2 border-gray-400 rounded-lg'
          sx={{
            padding:'50px',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Typography component="h1" variant="h4" sx={{fontFamily:"Lavanderia"}}>
          RV SHOP
          </Typography>
          <Typography component="h1" variant="h5">
          {login?"Log In":"Register"}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          {!login&&<TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              onChange={handleChange}
              value={value.name}
              autoFocus
            />}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={value.email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              value={value.password}
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              onClick={()=>handleLogIn()}
              sx={{ mt: 3, mb: 2 }}
            >
             {login?"Login":"Register"}
            </Button>
            <Grid container>
              <Grid item xs>

              </Grid>
              <Grid item>
                <Link onClick={()=>{setLogin(!login)}} variant="body2">
                  {login?"Don't have an account? Register":
                  "Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
   </div>
  )
}

export default Login
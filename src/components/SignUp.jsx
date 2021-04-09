import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom"
import '../styles/Login.css'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const history = useHistory()
  // post data to local storage
  function register() {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }
  //check email & password
  function checkPassword() {
    let firstPassword = document.getElementById('firstPassword')
    let confirmPassword = document.getElementById('confirmPassword')
    let span = document.getElementById('spanSign')
    let emailSign = document.getElementById('emailSign')
    if (firstPassword.value != confirmPassword.value
      || firstPassword.value == ''
      || emailSign.value == '') {
      span.innerHTML = '* Register info are incorrect, please try again'
      return false;
    }
    else {
      history.push('/Login')
      return true;
    }
  }
  //validation
  function validate(e) {
    e.preventDefault()
    if (checkPassword() && register()) {

    }
    return false;
  }
  const useStyles = makeStyles((theme) => ({
    paperSign: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    formSign: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    icon: {
      width: '50px',
      height: '50px'
    },
    submitSign: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: 'rgb(20, 240, 181)',

    },
    resetSign: {
      backgroundColor: 'rgb(255, 0, 119)',
    },
    spanSign: {
      color: 'rgb(255, 30, 116)',
    },
  }));
  const classes = useStyles();
  return (
    <div id="formMain">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paperSign}>
          <PersonAddIcon className={classes.icon} />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.formSign} >
            <TextField
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="emailSign"
              label="Email Address / User Name"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="firstPassword"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
            />
            <span id="spanSign" className={classes.spanSign}></span>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={validate}
              className={classes.submitSign}
            >
              Register
            </Button>
            <Button
              type="reset"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.resetSign}
            >
              Reset
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/Login" variant="body2"> {"Already have an account ? Log in"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  )
}

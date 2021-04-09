import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom"
import '../styles/Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const history = useHistory()
 //check data from local storage
  function checkData(e) {
    e.preventDefault()
    let storageMail = localStorage.getItem('email')
    let storagePass = localStorage.getItem('password')
    let span = document.getElementById('span')
    if (storageMail == email && storagePass == password) {
      history.push('/Users')
    }
    else span.innerHTML = '* Login info are incorrect, please try again'
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: 'rgb(48, 54, 53)',
      width: "60px",
      height: '60px'
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    icon: {
      width: '50px',
      height: '50px'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: 'rgb(81, 81, 253)'
    },
    reset: {
      backgroundColor: 'rgb(255, 0, 119)',
    },
    span: {
      color: 'rgb(255, 30, 116)',
    },
  }));
  const classes = useStyles();
  return (
    <div id="formMain">
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonIcon className={classes.icon} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address / User Name"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <span className={classes.span} id="span"></span>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={checkData}
              className={classes.submit}
            >
              Log In
            </Button>
            <Button
              type="reset"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.reset}
            >
              Reset
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2"> {"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  )
}

import React, { useCallback, useContext , useState} from "react";
import { withRouter, Redirect } from "react-router";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import firebase from "../../base";
import { AuthContext } from "../../Auth";

import logo from '../../assets/logo.jpg';
import logo1 from '../../assets/logo1.png';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' '}
      <Link color="inherit" href="https://material-ui.com/">
      React Firebase Authentication ®
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  image:{
    width:450,
    height:450
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'#0E6973',
    color:'#FFF'
  },
}));

const Login = ({ history }) => {
  const classes = useStyles();

  
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={"https://cdn.liveagent.com/app/uploads/2020/08/img-login.svg?v=2021-06-25"} className={classes.image}></img>
        <Typography component="h1" variant="h5">
          React Firebase Authentication
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            // onChange={e=> setPass(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar-me"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
          >
            Entrar
          </Button>


          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem conta? Faça o cadastro"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(Login);

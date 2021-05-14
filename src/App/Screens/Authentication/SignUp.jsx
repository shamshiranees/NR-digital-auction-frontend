import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Amplify, { Auth } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSignupValue } from "../../Redux/Actions/auth";
import config from "../../../aws-exports";


Amplify.configure(config);
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const SignUp = () => {
  const signUpVal = useSelector(({ authReducer }) => authReducer.signUpVal);
  const classes = useStyles();
  const history = useHistory();
  const [level, setlevel] = useState("signUp");
  const dispatch = useDispatch();
  async function signUp() {
    const {
      username,
      password,
      email,
      phone_number,
      firstName,
      lastName,
      type,
    } = signUpVal;
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          phone_number: phone_number,
        },
      });
      setlevel("sss");
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  async function confirmSignUp() {
    const { email, code } = signUpVal;
  
    try {
      await Auth.confirmSignUp(email, code);
      history.push(`/`);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
  const onValueChange = (typ, val) => {
    dispatch(setSignupValue({ value: val.target.value, name: typ }));
  };
// export default function SignUp() {
//   const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" style={{paddingBottom:60}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {level === "signUp" ? (
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                onChange={(val) => onValueChange("firstName", val)}
                value={signUpVal.firstName}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                onChange={(val) => onValueChange("lastName", val)}
                value={signUpVal.lastName}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                onChange={(val) => onValueChange("email", val)}
                value={signUpVal.email}
                //value={signUpVal.username}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(val) => onValueChange("password", val)}
                value={signUpVal.password}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={signUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link  to="/login"  variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        ) : (
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  onChange={(val) => onValueChange("email", val)}
                  value={signUpVal.email}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="code"
                  onChange={(val) => onValueChange("code", val)}
                  value={signUpVal.code}
                  label="Code"
                  name="code"
                  autoComplete="code"
                />
              </Grid>
              <Grid item xs={12}>
              <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={confirmSignUp}
            >
              Sign Up
            </Button>
              </Grid>
            </Grid>
            
          </form>
        )}
      </div>
      
    </Container>
  );
};
export default SignUp;

import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography,FormControl, TextField, Button, MenuItem } from '@material-ui/core'
import { SmileFilled } from "@ant-design/icons";
import { Card, Avatar } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../Redux/Actions/auth';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;
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

export default function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch()
  dispatch(getUserData(localStorage.getItem("email")));
  const userData = useSelector(({authReducer}) => authReducer.userData)
  console.log("userData",userData);

  return (
    <Container component="main" maxWidth="xs" style={{paddingBottom:60}}>
      <CssBaseline />
      <div className={classes.paper}>
        <center>
          <Typography component="h1" variant="h2">
            User Profile
          </Typography>
        </center><br/>
        <Card
          hoverable
          style={{ width: 240, height: 300 }}
          cover={<div><center></center></div>}
        >
        

        <form className={classes.form} noValidate>
          <center>
          <img alt="example" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" style= {{width:100}}/>
          {/* <form className={classes.form} noValidate>
          <Grid container>
            <Grid item xs={6} sm={2}>
            <Typography component="h1" variant="h5" level={5}>
            {userData && userData.first_name}
            </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Typography component="h1" variant="h5" level={5}>
            {userData && userData.last_name}
            </Typography>
            </Grid>
            </Grid>
            </form> */}
            <Typography component="h1" variant="h5" level={5}>
            {userData && userData.first_name}
            </Typography>
            <Typography component="h1" variant="h5" level={5}>
            {userData && userData.email}
            </Typography>
            <Typography component="h1" variant="h5" level={5}>
            {userData && userData.namebiddingplatform}
            </Typography>
         </center>
         
        </form>
        </Card>
      </div>
      
    </Container>
  );
}

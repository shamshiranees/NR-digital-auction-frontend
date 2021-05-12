import React from "react";

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
import { SmileFilled } from "@ant-design/icons";
import { Card, Avatar } from 'antd';
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

  return (
    <Container component="main" maxWidth="xs" style={{paddingBottom:60}}>
      <CssBaseline />

     
      <div className={classes.paper}>
<center>
      <Typography component="h1" variant="h5">
          User Profile
        </Typography></center><br/>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"  />}
  >
    
  </Card>

     
       
        <form className={classes.form} noValidate>
        <center>
        <Typography level={5}>
          Andria John
        </Typography>
        <Typography level={5}>
          +155555555
        </Typography>
        <Typography level={5}>
        Address: New York
        </Typography>
         </center>
        
        </form>
      </div>
      
    </Container>
  );
}

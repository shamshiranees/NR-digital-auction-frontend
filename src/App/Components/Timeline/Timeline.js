import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Eco";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  const data = [
    {
      title: "Project",
      date: "08/04/2021",
      content: "created new project",
      completed: true,
    },
    {
      title: "Fund raised",
      date: "08/04/2021",
      content: "raised a fund of 200000",
      completed: true,
    },
    {
      title: "Started",
      date: "12/04/2021",
      content: "stared project",
      completed: true,
    },
    {
      title: "Harvest Crop",
      date: "12/07/2021",
      content: "Crop ready to harvest",
      completed: false,
    },{
        title: "Distribute profit",
        date: "18/07/2021",
        content: "the profit will be distributed",
        completed: false,
      },
  ];
  return (
    <Timeline align="alternate">
      {data.map((item,index) => (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {item.date}
            </Typography>
          </TimelineOppositeContent>
          {index===data.length-1 ?<>
            <TimelineDot color={item.completed ? "secondary": 'textSecondary'}>
              <FastfoodIcon />
            </TimelineDot>
            {/* <TimelineConnector /> */}
          </>:<TimelineSeparator>
            <TimelineDot color={item.completed ? "secondary": 'textSecondary'}>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>}
          
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {item.title}
              </Typography>
      <Typography>{item.content}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
     
    
     
      
    </Timeline>
  );
}

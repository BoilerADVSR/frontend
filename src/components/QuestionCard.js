import { Component } from "react";
import Copyright from "./Copyright";
import CourseService from "../services/CourseService";
import StudentService from "../services/StudentService";
import APIService from "../services/APIService";
import theme from "../theme";
import CssBaseline from "@mui/material/CssBaseline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HelpIcon from "@mui/icons-material/Help";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import { mainListItems, secondaryListItems } from "./listItems";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import Carousel from "react-material-ui-carousel";

import {
  ThemeProvider,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Paper,
  Grid,
  Container,
  Button,
  ButtonGroup,
  Card,
  ButtonBase,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Circle,
  ConstructionOutlined,
  QuestionAnswer,
  ReplayCircleFilledOutlined,
  Reply,
  ReplyOutlined,
} from "@mui/icons-material";
import ChatService from "../services/ChatService";

export default class QuestionCard extends Component {
  render() {
    return (
      <div>
        <Paper
          sx={{
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 1,
            paddingBottom: 1,
            flexDirection: "column",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            width: 400,
            marginBottom: 2,
            backgroundColor: "#1b1b1b",
          }}
          elevation={5}
        >
          <List>
            <ListItem sx={{p: 0}}>
              <Grid container sx={{ marginBottom: 1 }}>
                <Grid
                  item
                  xs={2}
                  md={2}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography color="secondary" fontWeight={800} variant="h3">
                    Q
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={10}
                  md={10}
                  lg={10}
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    fontSize={22}
                    sx={{ marginLeft: 1 }}
                  >
                    {this.props.qText}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem sx={{p: 0}}>
              <Grid container sx={{ marginBottom: 0, marginTop: 0 }} spacing={1}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography fontSize={11}>by </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                    marginLeft: 0,
                  }}
                >
                  <Avatar
                    variant="circle"
                    src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ="
                    alt="profilepic"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      verticalAlign: "middle",
                      height: 25,
                      width: 25,
                    }}
                  />
                </Grid>

                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography variant="h8" fontSize={11} fontWeight={500}>
                    {this.props.qName}
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography variant="h11" color="secondary" fontSize={11}>
                    {this.props.qMajor}
                  </Typography>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </ListItem>

            <Divider color="#EBD99F" sx={{marginTop: 2, marginBottom: 1}} />

            <ListItem sx={{p: 0}}>
              <Grid container sx={{ marginBottom: 1, marginTop: 1 }}>
                <Grid
                  item
                  xs={2}
                  md={2}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography color="secondary" fontWeight={800} variant="h3">
                    A
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={10}
                  md={10}
                  lg={10}
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography fontSize={18}>
                    {this.props.aText}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem sx={{p: 0}}>
              <Grid container sx={{ marginBottom: 0 }} spacing={1}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography fontSize={11}>by </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                    marginLeft: 0,
                  }}
                >
                  <Avatar
                    variant="circle"
                    src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                    alt="profilepic"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      verticalAlign: "middle",
                      height: 25,
                      width: 25,
                    }}
                  />
                </Grid>

                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography variant="h8" fontSize={11} fontWeight={500}>
                  {this.props.aName}
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  <Typography variant="h11" color="secondary" fontSize={11}>
                  {this.props.aMajor}
                  </Typography>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}
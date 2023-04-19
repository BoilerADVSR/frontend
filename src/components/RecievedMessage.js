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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Book,
  Circle,
  ConstructionOutlined,
  QuestionAnswer,
  ReplayCircleFilledOutlined,
  Reply,
  ReplyOutlined,
} from "@mui/icons-material";
import ChatService from "../services/ChatService";

export default class ReceivedMessage extends Component {
  render() {
    return (
      <div>
        <Paper
          sx={{
            p: 2,
            flexDirection: "column",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            width: "auto",
            marginBottom: 1,
            backgroundColor: "#EBD99F",
          }}
          elevation={5}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "right",
                textAlign: "left",
                verticalAlign: "middle",
              }}
            >
               <Typography color="primary" fontSize={14} fontWeight={550}>{this.props.message}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

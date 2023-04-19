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
  TextField
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
import ReviewCard from "./ReviewCard";
import QuestionCard from "./QuestionCard";

class CourseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseID: this.props.match.params.courseID,
      id: this.props.match.params.id,
      student: {},
      course: {},
      text: "",
      rating: "",
      chat: "",
      reviewNumber: 1,
    };

    this.drawerWidth = 240;
    this.pages = ["Find a Course", "Suggest a Semester", "Review a Course"];

    this.toLandingpage = this.toLandingpage.bind(this);
    this.addReview = this.addReview.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addCourse = this.addCourse.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.courseRec = this.courseRec.bind(this);
  }

  componentDidMount() {
    CourseService.getCourse(this.state.courseID).then((res) => {
      this.setState({ course: res.data });
    });
    StudentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });
  }

  toggleDrawer() {
    this.state.open = !this.state.open;
  }

  toDashboard(id) {
    this.props.history.push(`/students/dashboard/${id}`);
  }

  toPlanofstudy(id) {
    this.props.history.push(`/students/planofstudy/${id}`);
  }
  toEditProfile(id) {
    this.props.history.push(`/students/editprofile/${id}`);
  }

  toLandingpage(id) {
    this.props.history.push(`/students/landingpage/${id}`);
  }

  setAnchorElNav(target) {
    this.setState({
      anchorElNav: target,
    });
  }

  setAnchorElUser(target) {
    this.setState({
      anchorElUser: target,
    });
  }

  handleNextReview(current) {
    current++;
    this.setState({
      reviewNumber: current,
    });
  }

  handlePrevReview(current) {
    current--;
    this.setState({
      reviewNumber: current,
    });
  }

  handleOpenNavMenu(event) {
    this.setAnchorElNav(event.currentTarget);
  }

  handleOpenUserMen(event) {
    this.setAnchorElUser(event.currentTarget);
  }

  handleCloseNavMenu() {
    this.setAnchorElNav(null);
  }

  handleCloseUserMenu() {
    this.setAnchorElUser(null);
  }

  addReview(courseID, id, text, rating) {
    CourseService.addReview(courseID, id, text, rating);
  }

  addQuestion(courseID, id, text, rating, desc) {
    CourseService.addQuestion(courseID, id, text, rating, desc);
  }

  toLandingpage(id) {
    this.props.history.push(`/students/landingpage/${id}`);
  }

  handleInput(event) {
    const value = event.target.value;
    console.log(value);
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  addCourse(id, currentCourse) {
    StudentService.addToBacklog(id, currentCourse);
  }

  courseRec(id, connectionID, courseID) {
    ChatService.getChat(id, connectionID).then((res) => {
      const chat = res.data;
      console.log("Course sent to " + connectionID + " chat id: " + chat.id);
      ChatService.sendCourse(id, courseID, chat.id);
    });
  }

  render() {
    const { course, student, id, text, rating, chat } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <AppBar>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <Button
                onClick={() => {
                  this.toLandingpage(this.state.student.email);
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  noWrap
                  color="secondary"
                  sx={{ flexGrow: 1 }}
                  fontWeight={800}
                >
                  BOILERADVSR
                </Typography>
              </Button>
              <ButtonGroup
                disableElevation="true"
                variant="contained"
                color="secondary"
                sx={{ marginRight: 50, p: 4 }}
              >
                <Button
                  sx={{
                    backgroundColor: "#ffffff",
                    fontWeight: 700,
                    mr: 1,
                    ml: 1,
                  }}
                >
                  Find a Course
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#ffffff",
                    fontWeight: 700,
                    mr: 1,
                    ml: 1,
                  }}
                >
                  Suggest a Semester
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#ffffff",
                    fontWeight: 700,
                    mr: 1,
                    ml: 1,
                  }}
                >
                  Plan of Study
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#ffffff",
                    fontWeight: 700,
                    mr: 1,
                    ml: 1,
                  }}
                >
                  Transcript
                </Button>
              </ButtonGroup>

              <Button
                color="inherit"
                onClick={() => {
                  this.toDashboard(this.state.student.email);
                }}
              >
                <Badge badgeContent={4} color="secondary">
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
                      height: 40,
                      width: 40,
                    }}
                  />
                </Badge>
              </Button>
            </Toolbar>
          </AppBar>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />

            <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
              <Grid container spacing={3} sx={{ marginBottom: 2 }}>
                <Grid item xs={0} md={1} lg={1}></Grid>
                <Grid item xs={12} md={10} lg={10}>
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
                    }}
                    elevation={8}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        verticalAlign: "middle",
                        marginBottom: 2,
                      }}
                      variant="h3"
                      fontWeight={700}
                      color="secondary"
                    >
                      {course.courseIdDepartment} {course.courseIdNumber}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        verticalAlign: "middle",
                        marginBottom: 2,
                      }}
                      variant="h4"
                      fontWeight={600}
                      color="text"
                    >
                      {course.courseTitle}
                    </Typography>
                    <Grid container sx={{ marginBottom: 0 }} spacing={1}>
                      <Grid item xs={3} md={3} lg={3}></Grid>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        lg={2}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Typography fontSize={12}>Average Rating: 4.5</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        lg={2}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Typography fontSize={12}>Average GPA: 3.4</Typography>
                      </Grid>

                      <Grid
                        item
                        xs={1}
                        md={1}
                        lg={1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Typography fontSize={12}>Save</Typography>
                      </Grid>

                      <Grid
                        item
                        xs={1}
                        md={1}
                        lg={1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Typography fontSize={12}>Share</Typography>
                      </Grid>

                      <Grid item xs={3} md={3} lg={3}></Grid>
                    </Grid>
                    <Grid container sx={{ marginBottom: 2 }} spacing={1}>
                      <Grid item xs={3} md={3} lg={3}></Grid>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        lg={2}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Rating
                          readOnly
                          value={4.5}
                          precision={0.25}
                          icon={<StarIcon/>}
                          emptyIcon={<StarBorderIcon  style={{color: '#EBD99F'}}/>}
                          size="small"
                          style={{color: '#EBD99F'}}
                        ></Rating>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        lg={2}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Tooltip title="3.2">
                        <Rating
                          readOnly
                          value={3.4}
                          precision={0.1}
                          max={4}
                          icon={<CircleIcon/>}
                          emptyIcon={<CircleOutlinedIcon  style={{color: '#EBD99F'}} />}
                          size="small"
                          style={{color: '#EBD99F'}}
                        ></Rating>
                        </Tooltip>
                      </Grid>

                      <Grid
                        item
                        xs={1}
                        md={1}
                        lg={1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Tooltip title="Add to Course Backlog">
                          <IconButton
                            variant="contained"
                            color="secondary"
                            size="small"
                          >
                            <AddIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>

                      <Grid
                        item
                        xs={1}
                        md={1}
                        lg={1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Tooltip title="Share with Classmate">
                          <IconButton
                            variant="contained"
                            color="secondary"
                            size="small"
                          >
                            <SendIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>

                      <Grid item xs={3} md={3} lg={3}></Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={0} md={1} lg={1}></Grid>
              </Grid>

              <Grid container spacing={3} sx={{ marginBottom: 2 }}>
                <Grid item xs={0} md={1} lg={1}></Grid>
                <Grid item xs={12} md={5} lg={5}>
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
                    }}
                    elevation={8}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        verticalAlign: "middle",
                        marginBottom: 2,
                      }}
                      variant="h4"
                      fontWeight={600}
                      color="secondary"
                      elevation={8}
                    >
                      Reviews
                    </Typography>

                    <Grid container sx={{ marginBottom: 2 }}>
                      <Grid item xs={0} md={0} lg={0}></Grid>

                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <List
                          sx={{
                            p: 2,
                            overflow: "auto",
                            maxHeight: 450,
                          }}
                        >
                          <ListItem disablePadding>
                            <ReviewCard name="Freddie Clarke" rating={5} major="Computer Science"/>
                          </ListItem>
                          <ListItem disablePadding>
                            <ReviewCard name="John Smith" rating={4} major="General Management"/>
                          </ListItem>
                          <ListItem disablePadding>
                            <ReviewCard name="Bill Williams" rating={3} major="Biology"/>
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={0} md={0} lg={0}></Grid>
                    </Grid>


                    <Grid container sx={{ marginBottom: 2, marginTop: 2 }}>
                      <Grid item xs={1} md={1} lg={1}></Grid>

                      <Grid
                        item
                        xs={10}
                        md={10}
                        lg={10}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Rating></Rating>
                      </Grid>
                      <Grid item xs={1} md={1} lg={1}></Grid>
                    </Grid>


                    <Grid container sx={{ marginBottom: 2, marginTop: 2 }}>
                      <Grid item xs={1} md={1} lg={1}></Grid>

                      <Grid
                        item
                        xs={10}
                        md={10}
                        lg={10}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <TextField fullWidth multiline maxRows={5} variant="filled" label="Your Review"></TextField>
                      </Grid>
                      <Grid item xs={1} md={1} lg={1}></Grid>
                    </Grid>



                    <Grid container sx={{ marginBottom: 2, marginTop: 2 }}>
                      <Grid item xs={2} md={2} lg={2}></Grid>

                      <Grid
                        item
                        xs={8}
                        md={8}
                        lg={8}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<QuestionAnswer />}
                          elevation={8}
                        >
                          Write a Review
                        </Button>
                      </Grid>
                      <Grid item xs={2} md={2} lg={2}></Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={5}>
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
                    }}
                    elevation={8}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        verticalAlign: "middle",
                        marginBottom: 2,
                      }}
                      variant="h4"
                      fontWeight={600}
                      color="secondary"
                      elevation={8}
                    >
                      Questions
                    </Typography>

                    <Grid container sx={{ marginBottom: 2 }}>
                      <Grid item xs={0} md={0} lg={0}></Grid>

                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <List
                          sx={{
                            p: 2,
                            overflow: "auto",
                            maxHeight: 450,
                          }}
                        >
                          <ListItem disablePadding>
                            <QuestionCard qName="Freddie Clarke" qMajor="Computer Science" qText="Who is the best professor for this course?" aName="John Jones" aMajor="Statistics" aText="Dr. Chen is the best lecturer." />
                          </ListItem>
                          <ListItem disablePadding>
                          <QuestionCard qName="James Cook" qMajor="Physics" qText="How many lectures are there per week" aName="Adam Smith" aMajor="Actuarial Science" aText="There are 3 lectures per week." />
                          </ListItem>
                          <ListItem disablePadding>
                          <QuestionCard qName="Bill Watson" qMajor="Chemical Engineering" qText="How many exams are there for this course?" aName="Peter Evans" aMajor="Integrated Business & Engineering" aText="There are two midterms and one final exam for this course." />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={0} md={0} lg={0}></Grid>
                    </Grid>

                    <Grid container sx={{ marginBottom: 2, marginTop: 2 }}>
                      <Grid item xs={2} md={2} lg={2}></Grid>

                      <Grid
                        item
                        xs={8}
                        md={8}
                        lg={8}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<QuestionAnswer />}
                          elevation={8}
                        >
                          Ask a Question
                        </Button>
                      </Grid>
                      <Grid item xs={2} md={2} lg={2}></Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={0} md={2} lg={3}></Grid>
              </Grid>
            </Container>

            <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={0} md={2} lg={3}></Grid>
                <Grid item xs={12} md={8} lg={6}>
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
                    }}
                  >
                    <div className="col-md-6">
                      <div>
                        <h4>Course</h4>
                        <div>
                          <br></br>
                          <button
                            type="button"
                            onClick={() => this.addCourse(id, course)}
                          >
                            Add to course backlog
                          </button>
                        </div>
                        <div>
                          <label>
                            <strong>Title:</strong>
                          </label>{" "}
                          {course.courseID}
                        </div>
                        <div>
                          <label>
                            <strong>Description:</strong>
                          </label>{" "}
                          {course.courseTitle}
                        </div>
                        <div>
                          <label>
                            <strong>Average Rating:</strong>
                          </label>{" "}
                          {course.averageRating}
                        </div>
                        <div>
                          <label>
                            <strong>Average GPA:</strong>
                          </label>{" "}
                          {course.averageGPA}
                        </div>
                        <div>
                          <form
                            onSubmit={() =>
                              this.addReview(course.courseID, id, text, rating)
                            }
                          >
                            <label>
                              <strong>Reviews:</strong>
                            </label>{" "}
                            <ul>
                              {course.reviews &&
                                course.reviews.map((review, index) => (
                                  <li key={index}>
                                    <div>
                                      <p>
                                        Name of reviewer:{" "}
                                        {review.studentReviewer}
                                      </p>
                                    </div>
                                    <div>
                                      <p>Review: {review.reviewText}</p>
                                    </div>
                                    <div>
                                      <p>Rating: {review.overallRating}</p>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                            <input
                              type="text"
                              name="text"
                              id="text"
                              placeholder="Enter review"
                              value={text}
                              onChange={this.handleInput}
                            />
                            <input
                              type="text"
                              name="rating"
                              id="rating"
                              placeholder="Enter rating"
                              value={rating}
                              onChange={this.handleInput}
                            />
                            <button type="submit">Submit</button>
                          </form>
                        </div>
                        <br></br>
                        <label>
                          <strong>Discussions:</strong>
                        </label>{" "}
                        <div>
                          {course.discussion &&
                            course.discussion.map((question, index) => (
                              <ul key={index}>
                                <div>
                                  <p>Question ID: {question.id}</p>
                                </div>
                                <div>
                                  <p>Name of questioner: {question.userID}</p>
                                </div>
                                <div>
                                  <p>Review: {question.text}</p>
                                </div>
                                <div>
                                  {question.responses &&
                                    question.responses.map((response) => (
                                      <ul>
                                        <li>
                                          <div>
                                            <p>
                                              Name of response:{" "}
                                              {response.userID}
                                            </p>
                                          </div>
                                          <div>
                                            <p>Answer: {response.text}</p>
                                          </div>
                                        </li>
                                      </ul>
                                    ))}
                                </div>
                                <>Post a Response</>
                                <form
                                  onSubmit={() =>
                                    this.addQuestion(
                                      course.courseID,
                                      id,
                                      text,
                                      question.id
                                    )
                                  }
                                >
                                  <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder="Enter your response here"
                                    value={text}
                                    onChange={this.handleInput}
                                  />
                                  <button type="submit">Submit</button>
                                </form>
                              </ul>
                            ))}
                          <>Post a Question</>
                          <form
                            onSubmit={() =>
                              this.addQuestion(course.courseID, id, text, "")
                            }
                          >
                            <input
                              type="text"
                              name="text"
                              id="text"
                              placeholder="Enter question"
                              value={text}
                              onChange={this.handleInput}
                            />
                            <button type="submit">Submit</button>
                          </form>
                          <br></br>
                          <>Recommend to a Friend?</>

                          <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Enter connection to recommend"
                            value={text}
                            onChange={this.handleInput}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              this.courseRec(id, chat, course.courseID)
                            }
                          >
                            Send!
                          </button>

                          <br></br>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={0} md={2} lg={3}></Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
        <Copyright sx={{ margin: 5 }} />
      </ThemeProvider>
    );
  }
}

export default CourseView;

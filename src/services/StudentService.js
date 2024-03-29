import React from 'react';
import axios from 'axios';
import CourseService from './CourseService';
import { VapingRooms } from '@mui/icons-material';

const STUDENT_API_BASE_URL = "http://localhost:8081/students";

class StudentService {

    //get all students
    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    //register
    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    //login
    loginStudent(id, password){
        return axios({
            method: 'put',
            url: STUDENT_API_BASE_URL + '/login',
            data: {
                email: id,
                password: password
            }
        });
    }

    //get taken courses
    getStudentCourses(studentId) {
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId + '/plan/courses');
    }

    //get courses havent taken yet
    getStudentIncompleted(studentId) {
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId + '/plan/requirements');
    }

    //add course to transcrip
    // addCourse(id, course) {
    //     return axios.post(STUDENT_API_BASE_URL + '/' + id + '/plan/addcourse', course);
    // }

    //get student
    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    //update student info
    updateStudent(student, studentId){
        return axios.put(STUDENT_API_BASE_URL + '/' + studentId, student);
    }

    //delete student
    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
    }

    //add to backlog
    addToBacklog(studentId, course) {
        return axios.post(STUDENT_API_BASE_URL + '/' + studentId + '/plan/addbacklog', course);
    }

    //get suggested semester given parameters
    getSuggestedSemester(studentId, sort, level) {
        if (sort === "" && level === "") {
            return axios.get(STUDENT_API_BASE_URL + '/' + studentId + '/plan/courses/suggestedSemester');
        }
        else if (sort !== "" && level === "") {
            return axios.get(STUDENT_API_BASE_URL + '/' + studentId + '/plan/courses/suggestedSemester?sort=' + sort);
        }
        else if (sort === "" && level !== "") {
            return axios.get(STUDENT_API_BASE_URL + '/' + studentId + '/plan/courses/suggestedSemester?level=' + level);
        }
        else {
            return axios.get(STUDENT_API_BASE_URL + '/' + studentId + '/plan/courses/suggestedSemester?sort=' + sort + '&level=' + level);
        }
    }

    //get whole plan of study
    getPlanofStudy(studentId) {
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId + '/plan');
    }

    //get students completed semesters
    getCompletedSemesters(studentId) {
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId + '/plan/semesters');
    }

    //reset password link sent to email
    resetPasswordLink(id) {
        return axios.get(STUDENT_API_BASE_URL + '/change/pass/' + id);
    }

    //reset password
    resetPassword(password, id) {
        return axios.put(STUDENT_API_BASE_URL + '/change/pass/' + id + '/' + password)
    }

    removeBacklog(id, courseID) {
        return axios.post(STUDENT_API_BASE_URL + '/' + id + '/plan/removebacklog/' + courseID);
    }

    //Get all connections
    getConnections(id) {
        return axios.get(STUDENT_API_BASE_URL + '/' + id + '/connections');
    }

    //request to connect to someone
    requestConnection(id, connectionID) {
        return axios.put(STUDENT_API_BASE_URL + '/' + id + '/connection/request/' + connectionID);
    }

    //accept request
    handleRequest(id, connectionID, status) {
        if (status === "") {
            return axios({
                method: 'put',
                url: STUDENT_API_BASE_URL + '/' + id + '/connection/handle/' + connectionID,
                data: {
                    status: "decline"
                }
            });
        }
        else {
            return axios({
                method: 'put',
                url: STUDENT_API_BASE_URL + '/' + id + '/connection/handle/' + connectionID,
                data: {
                    status: "accept"
                }
            });
        }
    }

    //add semester
    addCourseSem(id, year, season, courseID, gpaGrade) {
        return axios({
            method: 'post',
            url: STUDENT_API_BASE_URL + '/' + id + '/plan/addcoursebyid',
            data: {
                year: year,
                season: season,
                courseId: courseID,
                grade: gpaGrade
            }
        })
    }

    addEmptySem(id, year, season)  {
        return axios({
            method: 'post',
            url: STUDENT_API_BASE_URL + '/' + id + '/plan/addNewSemester',
            data: {
                year: year,
                season: season,
            }
        })
    }


    getProfilePic(id) {
        return axios.get(STUDENT_API_BASE_URL + '/' + id + '/profile/picture');
    }

    changeDegree(id, degree, operation) {
        if (operation === "true") {
            return axios({
                method: 'post',
                url: STUDENT_API_BASE_URL + '/' + id + '/plan/adddegree',
                data: {
                    degree: degree,
                    operation: "true"
                }
            })
        }
        else {
            return axios({
                method: 'post',
                url: STUDENT_API_BASE_URL + '/' + id + '/plan/adddegree',
                data: {
                    degree: degree,
                    operation: "false"
                }
            })
        }
    }

    getSemester(id, season, year) {
        return axios({
            method: 'put',
            url: STUDENT_API_BASE_URL + '/' + id + '/plan/getsemester',
            data: {
                season: season,
                year: year
            }
        })
    }

    getSearchConnections(id, dep) {
        console.log("dep :" + dep);
        if (dep === "suggested") {
            return axios.get(STUDENT_API_BASE_URL + '/' + id + '/search/suggested');
        }
        if (dep === "") {
            return axios.get(STUDENT_API_BASE_URL + '/' + id + '/search/all');
        }
        
        else {
            return axios.get(STUDENT_API_BASE_URL + '/' + id + '/search/all?department=' + dep);
        }
    }


}


export default new StudentService()
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import StudentPage from "@/views/studentViews/StudentPage.vue";
import DeanPage from "@/views/deanViews/DeanPage.vue";
import StudentInfo from "@/views/studentViews/StudentInfo.vue";
import StudentGrades from "@/views/studentViews/StudentGrades.vue";
import StudentCourses from "@/views/studentViews/StudentCourses.vue";
import StudentCourseSchedule from "@/views/studentViews/StudentCourseSchedule.vue";
import StudentExamSchedule from "@/views/studentViews/StudentExamSchedule.vue";
import StudentNotifications from "@/views/studentViews/StudentNotifications.vue";
import CourseManagement from "@/views/deanViews/CourseManagement.vue";
import GradesManagement from "@/views/deanViews/GradesManagement.vue";
import NotificationManagement from "@/views/deanViews/NotificationManagement.vue";
import ManagerInfo from "@/views/deanViews/ManagerInfo.vue";
import ExamManagement from "@/views/deanViews/ExamManagement.vue";
import CourseList from "@/views/deanViews/CourseList.vue";
import TeacherInfo from "@/components/Dean/TeacherInfo.vue";
import StudentsInfo from "@/components/Dean/StudentsInfo.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'login',
        component:LoginPage
    },
    {
        path:'/student',
        name:'student',
        component:StudentPage,
        children:[
            {
                path:'',
                redirect:'/student/student-info'
            },
            {
                path:'student-info',
                name:'StudentInfo',
                component:StudentInfo,
            },
            {
                path:'student-grades',
                name:'StudentGrades',
                component:StudentGrades,
            },
            {
                path:'student-courses',
                name:'StudentCourses',
                component:StudentCourses,
            },
            {
                path:'student-course-schedule',
                name:'StudentCourseSchedule',
                component:StudentCourseSchedule,
            },
            {
                path:'student-exam-schedule',
                name:'StudentExamSchedule',
                component:StudentExamSchedule,
            },
            {
                path:'student-notifications',
                name:'StudentNotifications',
                component:StudentNotifications,
            }
        ]
    },
    {
        path: '/dean',
        name: 'dean',
        component: DeanPage,
        children: [
            {
                path: '',
                redirect: '/dean/grades-management',
            },
            {
                path:'grades-management',
                name:'GradesManagement',
                component:GradesManagement,
            },
            {
                path: 'course-management',
                name: 'CourseManagement',
                component: CourseManagement,
            },
            {
                path:'notification-management',
                name:'NotificationManagement',
                component:NotificationManagement,
            },
            {
                path:'manager-info',
                name:'ManagerInfo',
                component:ManagerInfo,
            },
            {
                path:'exam-management',
                name:'ExamManagement',
                component:ExamManagement,
            },
            {
                path:'course-list',
                name:'CourseList',
                component:CourseList,
            },
            {
                path:'students-info',
                name:'StudentsInfo',
                component:StudentsInfo,
            },
            {
                path:'teacher-info',
                name:'TeacherInfo',
                component:TeacherInfo,
            }
        ],
    }
]

const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import StudentPage from "@/views/StudentPage.vue";
import DeanPage from "@/views/DeanPage.vue";
import StudentInfo from "@/views/StudentInfo.vue";
import StudentGrades from "@/views/StudentGrades.vue";
import StudentCourses from "@/views/StudentCourses.vue";
import StudentCourseSchedule from "@/views/StudentCourseSchedule.vue";
import StudentExamSchedule from "@/views/StudentExamSchedule.vue";
import StudentNotifications from "@/views/StudentNotifications.vue";
import CourseManagement from "@/views/CourseManagement.vue";
import GradesManagement from "@/views/GradesManagement.vue";
import NotificationManagement from "@/views/NotificationManagement.vue";
import ManagerInfo from "@/views/ManagerInfo.vue";

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
            }
        ],
    }
]

const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router
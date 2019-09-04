import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/common/login'
import phoneLogin from '@/components/common/phoneLogin'
import emailLogin from '@/components/common/emailLogin'
import userCenter from '@/components/common/userCenter'
import user from '@/components/common/user'
import addUser from '@/components/common/addUser'
import editUser from '@/components/common/editUser'
import reg from '@/components/common/reg'

import exampaper from '@/components/exampaper'
import addExampaper from '@/components/addExampaper'
import editExampaper from '@/components/editExampaper'
import examresult from '@/components/examresult'
import addExamresult from '@/components/addExamresult'
import editExamresult from '@/components/editExamresult'
import question from '@/components/question'
import addQuestion from '@/components/addQuestion'
import editQuestion from '@/components/editQuestion'
import questioncollection from '@/components/questioncollection'
import addQuestioncollection from '@/components/addQuestioncollection'
import editQuestioncollection from '@/components/editQuestioncollection'
import questioncomment from '@/components/questioncomment'
import addQuestioncomment from '@/components/addQuestioncomment'
import editQuestioncomment from '@/components/editQuestioncomment'
import questionjobtype from '@/components/questionjobtype'
import addQuestionjobtype from '@/components/addQuestionjobtype'
import editQuestionjobtype from '@/components/editQuestionjobtype'
import useranserquestion from '@/components/useranserquestion'
import addUseranserquestion from '@/components/addUseranserquestion'
import editUseranserquestion from '@/components/editUseranserquestion'
import userquestionwrong from '@/components/userquestionwrong'
import addUserquestionwrong from '@/components/addUserquestionwrong'
import editUserquestionwrong from '@/components/editUserquestionwrong'
import pointslog from '@/components/pointslog'
import addPointslog from '@/components/addPointslog'
import editPointslog from '@/components/editPointslog'
import course from '@/components/course'
import addCourse from '@/components/addCourse'
import editCourse from '@/components/editCourse'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/phoneLogin',
			name: 'phoneLogin',
			component: phoneLogin
		},
		{
			path: '/emailLogin',
			name: 'emailLogin',
			component: emailLogin
		},
		{
			path: '/userCenter',
			name: 'userCenter',
			component: userCenter
		},
		{
			path: '/user',
			name: 'user',
			component: user
		},
		{
			path: '/addUser',
			name: 'addUser',
			component: addUser
		},
		{
			path: '/editUser',
			name: 'editUser',
			component: editUser
		},
		{
			path: '/reg',
			name: 'reg',
			component: reg
		}


		, {
			path: '/exampaper',
			name: 'exampaper',
			component: exampaper
		}, {
			path: '/addExampaper',
			name: 'addExampaper',
			component: addExampaper
		}, {
			path: '/editExampaper',
			name: 'editExampaper',
			component: editExampaper
		}, {
			path: '/examresult',
			name: 'examresult',
			component: examresult
		}, {
			path: '/addExamresult',
			name: 'addExamresult',
			component: addExamresult
		}, {
			path: '/editExamresult',
			name: 'editExamresult',
			component: editExamresult
		}, {
			path: '/question',
			name: 'question',
			component: question
		}, {
			path: '/addQuestion',
			name: 'addQuestion',
			component: addQuestion
		}, {
			path: '/editQuestion',
			name: 'editQuestion',
			component: editQuestion
		}, {
			path: '/questioncollection',
			name: 'questioncollection',
			component: questioncollection
		}, {
			path: '/addQuestioncollection',
			name: 'addQuestioncollection',
			component: addQuestioncollection
		}, {
			path: '/editQuestioncollection',
			name: 'editQuestioncollection',
			component: editQuestioncollection
		}, {
			path: '/questioncomment',
			name: 'questioncomment',
			component: questioncomment
		}, {
			path: '/addQuestioncomment',
			name: 'addQuestioncomment',
			component: addQuestioncomment
		}, {
			path: '/editQuestioncomment',
			name: 'editQuestioncomment',
			component: editQuestioncomment
		}, {
			path: '/questionjobtype',
			name: 'questionjobtype',
			component: questionjobtype
		}, {
			path: '/addQuestionjobtype',
			name: 'addQuestionjobtype',
			component: addQuestionjobtype
		}, {
			path: '/editQuestionjobtype',
			name: 'editQuestionjobtype',
			component: editQuestionjobtype
		}, {
			path: '/useranserquestion',
			name: 'useranserquestion',
			component: useranserquestion
		}, {
			path: '/addUseranserquestion',
			name: 'addUseranserquestion',
			component: addUseranserquestion
		}, {
			path: '/editUseranserquestion',
			name: 'editUseranserquestion',
			component: editUseranserquestion
		}, {
			path: '/userquestionwrong',
			name: 'userquestionwrong',
			component: userquestionwrong
		}, {
			path: '/addUserquestionwrong',
			name: 'addUserquestionwrong',
			component: addUserquestionwrong
		}, {
			path: '/editUserquestionwrong',
			name: 'editUserquestionwrong',
			component: editUserquestionwrong
		}, {
			path: '/pointslog',
			name: 'pointslog',
			component: pointslog
		}, {
			path: '/addPointslog',
			name: 'addPointslog',
			component: addPointslog
		}, {
			path: '/editPointslog',
			name: 'editPointslog',
			component: editPointslog
		}, {
			path: '/course',
			name: 'course',
			component: course
		}, {
			path: '/addCourse',
			name: 'addCourse',
			component: addCourse
		}, {
			path: '/editCourse',
			name: 'editCourse',
			component: editCourse
		}

	]
})

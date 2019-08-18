var dataFroSuperAdmin = [
	
	{
		menuName:'试题',
		menuRoute:'',
		childMenus:[
			{
				menuName:'试题',
				menuRoute:'#/question'
			},
			{
				menuName:'试卷',
				menuRoute:'#/exampaper'
			},
			{
				menuName:'试题所属职位',
				menuRoute:'#/questionjobtype'
			}
		]
	},
	{
		menuName:'用户',
		menuRoute:'',
		childMenus:[
			{
				menuName:'用户管理',
				menuRoute:'#/user'
			},
			{
				menuName:'考试结果',
				menuRoute:'#/examresult'
			},
			{
				menuName:'试题收藏',
				menuRoute:'#/questioncollection'
			},
			{
				menuName:'试题评论',
				menuRoute:'#/questioncomment'
			},
			{
				menuName:'用户答题记录',
				menuRoute:'#/useranserquestion'
			},
			{
				menuName:'用户错题记录',
				menuRoute:'#/userquestionwrong'
			}
		]
	}
	
	
	
]


var dataFroGeneralUser = [
	
	{
		menuName:'试题',
		menuRoute:'',
		childMenus:[
			{
				menuName:'试题',
				menuRoute:'#/question'
			},
			{
				menuName:'试卷',
				menuRoute:'#/exampaper'
			},
			{
				menuName:'试题所属职位',
				menuRoute:'#/questionjobtype'
			}
		]
	},
	{
		menuName:'用户',
		menuRoute:'',
		childMenus:[
			{
				menuName:'考试结果',
				menuRoute:'#/examresult'
			},
			{
				menuName:'试题评论',
				menuRoute:'#/questioncomment'
			}
		]
	}
	
	
	
]

export default{
	dataFroGeneralUser,dataFroSuperAdmin
}
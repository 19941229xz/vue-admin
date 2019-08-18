import axios from 'axios'

axios.defaults.baseURL = 'https://www.bitcoc.top'

/*
	发送普通邮件
*/
var sendNormalEmail = async function(title, content, emailAddress) {

	var data = {
		"emailAdress": emailAddress,
		"text": content,
		"title": title
	}
	var res = await axios.post('/message-server/emailSender/getEmailToken', data)
	var token = res.data.content
	var res2 = await axios('/message-server/emailSender/sendNormalEmail/' + token)
	console.log('给'+emailAddress+'发送邮件成功')
	return res2

}

/*
	发送普通邮件给所有管理员
*/
var sendNormalEmailToAllAdmin = async function(title, content) {
	var searchDataFroAdmin = {
		"model": {
			roleId:2
		},
		"orderParams": [

		],
		"pageNum": 1,
		"pageSize": 1000
	}
	var res = await axios.post('/user-server/getAllUser' , searchDataFroAdmin)
	var adminList = res.data.content.list || []


	for (var i = 0; i < adminList.length; i++) {
		
		var data = {
			"emailAdress": adminList[i].email,
			"text": content,
			"title": title
		}
		var res = await axios.post('/message-server/emailSender/getEmailToken', data)
		var token = res.data.content
		var res2 = await axios('/message-server/emailSender/sendNormalEmail/' + token)
		
		
	}
	

}


/*
	通过用户id发送邮件
*/
var sendEmailByUserId = async function(title,content,userId){
	console.log('通过用户id发送邮件')
	var res = await axios('/user-server/getUserById/'+userId)
	var email = res.data.content.email
	
	// var data = {
	// 	"emailAdress": email,
	// 	"text": content,
	// 	"title": title
	// }
	// var res = await axios.post('/message-server/emailSender/getEmailToken', data)
	// var token = res.data.content
	// var res2 = await axios('/message-server/emailSender/sendNormalEmail/' + token)
	// console.log('给'+emailAddress+'发送邮件成功')
	
	sendNormalEmail(title,content,email)
}



export default {
	sendNormalEmail,
	sendNormalEmailToAllAdmin,
	sendEmailByUserId
}

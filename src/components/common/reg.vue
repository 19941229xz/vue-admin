<template>
	<div>

		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-12 mx-auto tm-login-col">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12 text-center">
								<h2 class="tm-block-title mb-4">欢迎, 请注册</h2>
							</div>
						</div>
						<div class="row mt-2">
							<div class="col-12">
								<div class="tm-login-form">
									<!-- 账号密码登录模块 -->
									<!-- <div class="form-group">
										<label for="userName">账号</label>
										<input type="text" v-validate="'required'" name="账号" v-model="userName" class="form-control validate" id="userName" />
										<span class="validateErrorSpan">{{userNameIsRightTip}}{{ errors.first('账号')}}</span>
									</div>
									<div class="form-group mt-3">
										<label for="password">密码</label>
										<input type="password" v-validate="'required'" name="密码" v-model="password" class="form-control validate" id="password" />
										<span class="validateErrorSpan">{{ errors.first('密码')}}</span>
									</div> -->

									<!-- 手机短信登录模块 -->
									<div class="form-group">
										<label for="phoneNum">手机号</label>
										<input type="text" v-validate="'required|mobile'" name="手机号" v-model="phoneNum" class="form-control validate"
										 id="phoneNum" />
										<span class="validateErrorSpan">{{ errors.first('手机号')}}</span>
									</div>
									<div class="form-group mt-3">
										<label for="textCode">验证码</label>
										<input type="textCode" v-validate="'required'" name="验证码" v-model="textCode" class="form-control validate" id="textCode" />
										<span class="yzmBtn" :style="{'color':sendTextCodeBtnIsDisabled?'#9ba9b7':'white'}" @click="sendTextCode">{{sendTextCodeTip}}</span>
										<span class="validateErrorSpan">{{ errors.first('验证码')}}</span>
									</div>

									<!-- 邮箱验证码登录模块 -->
									<!-- <div class="form-group">
										<label for="userName">账号</label>
										<input type="text" v-validate="'required'" name="账号" v-model="userName" class="form-control validate" id="userName" />
										<span class="validateErrorSpan">{{userNameIsRightTip}}{{ errors.first('账号')}}</span>
									</div>
									<div class="form-group mt-3">
										<label for="password">密码</label>
										<input type="password" v-validate="'required'" name="密码" v-model="password" class="form-control validate" id="password" />
										<span class="validateErrorSpan">{{ errors.first('密码')}}</span>
									</div> -->

									<div class="form-group mt-4">
										<button @click="regWithPhoneCode()" class="btn btn-primary btn-block text-uppercase">
											注册
										</button><br />
										<!-- <button @click="toLogin" class="btn btn-primary btn-block text-uppercase">
											账号密码登录
										</button><br />
										<button @click="toEmailLogin()" class="btn btn-primary btn-block text-uppercase">
											邮箱登录
										</button> -->
									</div>
									<a style="color: white;float: right;" class="mt-5  text-uppercase" href="#/login">
										去登录
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				// userName: '',
				// password: '',
				phoneNum: '', // 手机号
				textCode: '', // 短信验证码
				searchData: {
					"model": {

					},
					"orderParams": [

					],
					"pageNum": 1,
					"pageSize": 10
				},
				userInfo: {},
				// userNameIsRightTip:'',
				// phoneNumIsRightTip: '', // 判断手机号是否存在
				// textCodeIsRightTip: '', // 判断手机验证码是否正确

				sendTextCodeTip: '发送验证码',
				sendTextCodeBtnIsDisabled: false, // 发送验证码按钮是否可以点击  默认可以  false
				phoneToken: ''
			}
		},
		methods: {
			loginWithAccountPass: function() { // 账号密码登录
				// this.$validator.validate().then(valid => {
				// 	if (!valid) {
				// 		// do stuff if not valid.
				// 		this.$warnMsg('表单参数不正确')
				// 		return
				// 	} else {
				// 		var that = this
				// 		that.searchData.model.userName=that.userName
				// 		that.searchData.model.password=that.password
				// 		// delete some date field //Todo need  fix
				// 		this.$http.post('/user-server/getAllUser', that.searchData).then(res => {
				// 			if (res.data.code == 200) {
				// 				if(res.data.content.list.length==1){
				// 					that.$router.push('/')
				// 				}else{
				// 					that.$warnMsg('账号密码错误')
				// 				}
				// 				// this.userquestionwrong = res.data.content
				// 				// this.$infoMsg('保存成功')
				// 				that.$log(res)
				// 			} else {
				// 				that.$errMsg('登录失败')
				// 			}
				// 		}).catch(err => {
				// 			that.$log(err)
				// 			that.$errMsg('登录失败')
				// 		})
				// 	}
				// })
			},
			loginWithEmailCode: function() { //  邮箱验证码登录

			},
			regWithPhoneCode: function() { //  手机验证码登录
				// this.regUser()
				// return
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						// phoneToken非空校验
						if (that.phoneToken == '') {
							that.$warnMsg('验证码不正确')
							return
						}

						// debugger

						// delete some date field //Todo need  fix
						that.$http('/message-server/textMessage/verifyCodeByPhone/' + that.phoneToken + '/' + that.textCode).then(res => {
							that.$log(res)
							// alert('test')
							if (res.data.code == 200) {
								//登录成功 将用户id保存到cookie中  时间半小时 30*60
								// that.$setCookie('userId',that.userInfo.id,30*60)
								//  新增用户  账号默认为手机号 密码123456
								that.regUser()

								// that.$router.push('/')
							} else {
								that.$warnMsg('验证码错误')
							}
						}).catch(err => {
							that.$log(err)
						})


					}
				})
			},
			sendTextCode: async function() { // 发送手机验证码
				if (!this.sendTextCodeBtnIsDisabled) { // 如果按钮可用请求后台验证码接口
					var that = this
					var getPhoneTokenData = {
						"phone": that.phoneNum,
						"templateId": 1 // 1 是发送普通手机验证码
					}

					// that.searchData.model = {}
					// that.searchData.model.phoneNum = that.phoneNum
					//
					that.searchData.model = {}
					that.searchData.model.phoneNum = that.phoneNum
					// debugger
					console.log(that.searchData.model.phoneNum)
					var res = await that.$http.post('/user-server/getAllUser', that.searchData)
					console.log(res)
					// debugger
					if (res.data.code == 200 && res.data.content.list.length == 0) {
						var res = await that.$http.post('/message-server/textMessage/getPhoneToken', getPhoneTokenData)
						if(res.data.code==200){
							var token = res.data.content
							that.phoneToken = token
							var res = await that.$http('/message-server/textMessage/sendCodeByPhone/' + token)
								if (res.data.code == 200) {
									// 如果发送验证码成功 禁用发送按钮 改变提示内容  60秒计时倒数
									that.$infoMsg('验证码已发送至您的手机')
									that.sendTextCodeBtnIsDisabled = true
									var _that = that
									var num = 60
									_that.sendTextCodeTip = '已发送(' + num + ')'
									var interval = setInterval(function() {
										num--
										_that.sendTextCodeTip = '已发送(' + num + ')'
										if (num == 0) {
											clearInterval(interval)
											_that.sendTextCodeBtnIsDisabled = false
											_that.sendTextCodeTip = '重新发送'
										}
									}, 1000)
								} else {
									that.$errMsg('手机验证码发送失败')
								}
						}
					} else {
						that.$warnMsg('手机号已被注册')
					}
					// that.$log(res)
					// if (res.data.code == 200 && res.data.content.list.length == 0) {
					// 	//保存用户数据到本地
					// 	that.userInfo = res.data.content.list[0]
					// 	that.$http.post('/message-server/textMessage/getPhoneToken', getPhoneTokenData).then(res => {
					// 		that.$log(res)
					// 		if (res.data.code == 200) {
					// 			var phoneToken = res.data.content
					// 			that.phoneToken = res.data.content
					// 拿着phoneToken去调用发短信接口
					// that.$http('/message-server/textMessage/sendCodeByPhone/' + phoneToken).then(res => {
					// 	if (res.data.code == 200) {
					// 		// 如果发送验证码成功 禁用发送按钮 改变提示内容  60秒计时倒数
					// 		that.$infoMsg('验证码已发送至您的手机')
					// 		that.sendTextCodeBtnIsDisabled = true
					// 		var _that = that
					// 		var num = 60
					// 		_that.sendTextCodeTip = '已发送(' + num + ')'
					// 		var interval = setInterval(function() {
					// 			num--
					// 			_that.sendTextCodeTip = '已发送(' + num + ')'
					// 			if (num == 0) {
					// 				clearInterval(interval)
					// 				_that.sendTextCodeBtnIsDisabled = false
					// 				_that.sendTextCodeTip = '重新发送'
					// 			}
					// 		}, 1000)
					// 	} else {
					// 		that.$errMsg('手机验证码发送失败')
					// 	}
					// }).catch(err => {
					// 	that.$log(err)
					// 	that.$errMsg('后台出小差了...')
					// })


					// 	} else {
					// 		that.$errMsg('手机验证码发送失败')
					// 	}
					// }).catch(err => {
					// 	that.$log(err)
					// 	that.$errMsg('后台出小差了...')
					// })
					//
					// 						} else {
					// 							
					// 							that.$warnMsg('该手机号已被注册,请直接登录')
					// 							that.$router.push('/phoneLogin')
					// 						}
					// 
					// 					}).catch(err => {
					// 						that.$warnMsg('注册失败')
					// 					})
					// 
					// 
					// 				} else {
					// 					//  提示操作太过频繁
					// 				}

				}

			},
			regUser: function() {
				var that = this
				var userInfo = {}
				userInfo.phoneNum = this.phoneNum
				userInfo.password = '123456'
				userInfo.userName = this.phoneNum

				// this.userInfo.phoneNum = this.phoneNum
				// this.userInfo.password = '123456'
				// this.userInfo.userName = this.phoneNum
				this.$http.post('/user-server/addUser', userInfo).then(res => {
					if (res.data.code == 200) {
						// alert('test')
						that.$setCookie('userId', res.data.content.id, 30 * 60)
						// that.$setCookie('companyId', res.data.content.companyId, 30 * 60)
						// that.$setCookie('schoolId', res.data.content.schoolId, 30 * 60)
						// that.$setCookie('realName', res.data.content.realName, 30 * 60)
						// that.$setCookie('roleId', res.data.content.roleId, 30 * 60)
						// that.$setCookie('headImg', res.data.content.headImg, 30 * 60)
						// that.$setCookie('nickName', res.data.content.nickName, 30 * 60)
						that.$infoMsg('注册成功，马上跳转到个人中心...')
						setTimeout(function() {
							that.$router.push('/userCenter')
						}, 2000)

					} else {
						that.$warnMsg('注册失败')
					}
				}).then(err => {
					that.$log(err)
					// that.$warnMsg('注册失败')
				})
			}
		},
		watch: {
			userName: function() {
				var that = this
				that.searchData.model.userName = that.userName
				delete that.searchData.model.password
				// delete some date field //Todo need  fix
				this.$http.post('/user-server/getAllUser', that.searchData).then(res => {
					if (res.data.code == 200) {
						if (res.data.content.list.length < 1) {
							this.userNameIsRightTip = '账号不存在'
						} else {
							this.userNameIsRightTip = ''
						}
						// this.userquestionwrong = res.data.content
						// this.$infoMsg('保存成功')
						that.$log(res)
					} else {
						// that.$errMsg('登录失败')
					}
				}).catch(err => {
					that.$log(err)
					that.$errMsg('服务器开小差了...')
				})
			}
		},
		mounted: function() {

		}
	}
</script>

<style scoped="scoped">
	.yzmBtn {
		position: absolute;
		right: 35px;
		top: 145px;
		color: white;
		font-size: 15px;
	}
</style>

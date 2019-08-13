<template>
	<div>

		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-12 mx-auto tm-login-col">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12 text-center">
								<h2 class="tm-block-title mb-4">邮箱登录</h2>
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
									<!-- <div class="form-group">
										<label for="phoneNum">手机号</label>
										<input type="text" v-validate="'required'" name="手机号" v-model="phoneNum" class="form-control validate" id="phoneNum" />
										<span class="validateErrorSpan">{{phoneNumIsRightTip}}{{ errors.first('手机号')}}</span>
									</div>
									<div class="form-group mt-3">
										<label for="textCode">验证码</label>
										<input type="textCode" v-validate="'required'" name="验证码" v-model="textCode" class="form-control validate" id="textCode" />
										<span class="validateErrorSpan">{{textCodeIsRightTip}}{{ errors.first('验证码')}}</span>
									</div> -->
									
									<!-- 邮箱验证码登录模块 -->
									<div class="form-group">
										<label for="email">邮箱号</label>
										<input type="text" v-validate="'required'" name="邮箱号" v-model="email" class="form-control validate" id="email" />
										<span class="validateErrorSpan">{{emailIsRightTip}}{{ errors.first('邮箱号')}}</span>
									</div>
									<div class="form-group mt-3">
										<label for="emailCode">验证码</label>
										<input type="text" v-validate="'required'" name="验证码" v-model="emailCode" class="form-control validate" id="emailCode" />
										<span class="validateErrorSpan">{{emailCodeIsRightTip}}{{ errors.first('验证码')}}</span>
									</div>
									
									<div class="form-group mt-4">
										<button @click="loginWithEmailCode()" class="btn btn-primary btn-block text-uppercase">
											登录
										</button><br />
										<button @click="toLogin" class="btn btn-primary btn-block text-uppercase">
											账号密码登录
										</button><br />
										<button @click="toPhoneLogin()" class="btn btn-primary btn-block text-uppercase">
											短信快捷登录
										</button>
									</div>
									<a style="color: white;float: right;" class="mt-5  text-uppercase">
										忘记密码?
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
				// phoneNum:'',  // 手机号
				// textCode:'',  // 短信验证码
				emailCode:'',
				email:'',
				searchData: {
					"model": {
				
					},
					"orderParams": [
				
					],
					"pageNum": 1,
					"pageSize": 10
				},
				emailIsRightTip:'',
				emailCodeIsRightTip:''
				// userNameIsRightTip:''
				// phoneNumIsRightTip:'',
				// textCodeIsRightTip:''
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
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						// var that = this
						// that.searchData.model.userName=that.userName
						// that.searchData.model.password=that.password
						// // delete some date field //Todo need  fix
						// this.$http.post('/user-server/getAllUser', that.searchData).then(res => {
						// 	if (res.data.code == 200) {
						// 		if(res.data.content.list.length==1){
						// 			that.$router.push('/')
						// 		}else{
						// 			that.$warnMsg('账号密码错误')
						// 		}
						// 		// this.userquestionwrong = res.data.content
						// 		// this.$infoMsg('保存成功')
						// 		that.$log(res)
						// 	} else {
						// 		that.$errMsg('登录失败')
						// 	}
						// }).catch(err => {
						// 	that.$log(err)
						// 	that.$errMsg('登录失败')
						// })
					}
				})
			},
			loginWithPhoneCode: function() { //  手机验证码登录

			},
			toPhoneLogin:function(){  // 跳转到手机登录页
				this.$router.push('/phoneLogin')
			},
			toLogin:function(){  // 跳转到邮箱登录页
				this.$router.push('/login')
			}
		},
		watch:{
			userName:function(){
				var that = this
				that.searchData.model.userName=that.userName
				delete that.searchData.model.password
				// delete some date field //Todo need  fix
				this.$http.post('/user-server/getAllUser', that.searchData).then(res => {
					if (res.data.code == 200) {
						if(res.data.content.list.length<1){
							this.userNameIsRightTip='账号不存在'
						}else{
							this.userNameIsRightTip=''
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

<style>
</style>

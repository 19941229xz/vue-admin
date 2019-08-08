<template>
	<div>

		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-12 mx-auto tm-login-col">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12 text-center">
								<h2 class="tm-block-title mb-4">欢迎, 请登录</h2>
							</div>
						</div>
						<div class="row mt-2">
							<div class="col-12">
								<form class="tm-login-form">
									<div class="form-group">
										<label for="userName">账号</label>
										<input type="text" v-validate="'required'" name="账号" v-model="userName" class="form-control validate" id="userName" />
										<span class="validateErrorSpan">{{ errors.first('账号')}}</span>
									</div>
									<div class="form-group mt-3">
										<label for="password">密码</label>
										<input type="password" v-validate="'required'" name="密码" v-model="password" class="form-control validate" id="password" />
										<span class="validateErrorSpan">{{ errors.first('密码')}}</span>
									</div>
									<div class="form-group mt-4">
										<button @click="loginWithAccountPass()" class="btn btn-primary btn-block text-uppercase">
											登录
										</button>
									</div>
									<button class="mt-5 btn btn-primary btn-block text-uppercase">
										忘记密码?
									</button>
								</form>
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
				userName: '',
				password: '',
				searchData: {
					"model": {
				
					},
					"orderParams": [
				
					],
					"pageNum": 1,
					"pageSize": 10
				}
			}
		},
		methods: {
			loginWithAccountPass: function() { // 账号密码登录
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						that.searchData.model.userName=that.userName
						that.searchData.model.password=that.password
						// delete some date field //Todo need  fix
						this.$http.post('/user-server/getAllUser', that.searchData).then(res => {
							debugger
							if (res.data.code == 200) {
								if(res.data.content.list.length==1){
									that.$router.push('/')
								}else{
									that.$warnMsg('账号密码错误')
								}
								// this.userquestionwrong = res.data.content
								// this.$infoMsg('保存成功')
								that.$log(res)
							} else {
								that.$errMsg('登录失败')
							}
						}).catch(err => {
							that.$log(err)
							that.$errMsg('登录失败')
						})
					}
				})
			},
			loginWithEmailCode: function() { //  邮箱验证码登录

			},
			loginWithPhoneCode: function() { //  手机验证码登录

			}
		},
		mounted: function() {

		}
	}
</script>

<style>
</style>

<template>
	<div>

		<div class="container mt-5">
			<div v-show="$superAdminMode" class="row tm-content-row">
				<div class="col-12 tm-block-col">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<!-- <h2 class="tm-block-title">List of Accounts</h2> -->
						<!-- <p class="text-white">审核状态</p> -->
						<h2 class="tm-block-title">账户状态(1已激活、2未激活、3冻结、4已删除)</h2>
						<select class="custom-select" v-model="userInfo.status">
							<option value="1">已激活</option>
							<option value="2">未激活</option>
							<option value="3">冻结</option>
							<option value="4">已删除</option>
						</select>
					</div>
				</div>
			</div>
			<!-- row -->
			<div class="row tm-content-row">
				<div class="tm-block-col tm-col-avatar">
					<div class="tm-bg-primary-dark tm-block tm-block-avatar">
						<h2 class="tm-block-title">修改头像</h2>
						<div class="tm-avatar-container">
							<img :src="userInfo.headImg" alt="Avatar" class="tm-avatar img-fluid mb-4" />
						</div>
						<input @change="addImage" id="headImg" type="file" style="display:none;" />
						<button onclick="document.getElementById('headImg').click();" class="btn btn-primary btn-block text-uppercase">
							上传新头像
						</button>
					</div>
				</div>
				<div class="tm-block-col tm-col-account-settings">
					<div class="tm-bg-primary-dark tm-block tm-block-settings">
						<h2 class="tm-block-title">账号设置</h2>
						<div class="tm-signup-form row">










							<!-- <div class="form-group col-lg-6">
								<label for="id">主键id</label>
								<input id="id" v-validate="'required'" name="主键id" v-model="userInfo.id" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('主键id') }}</span>
							</div> -->
							<!-- <div class="form-group col-lg-6">
								<label for="headImg">头像</label>
								<input id="headImg" v-validate="'required'" name="头像" v-model="userInfo.headImg" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('头像') }}</span>
							</div> -->
							<div class="form-group col-lg-6">
								<label for="userName">账号</label>
								<input id="userName" v-validate="'required'" name="账号" v-model="userInfo.userName" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('账号') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="password">密码</label>
								<input id="password" v-validate="'required'" name="密码" v-model="userInfo.password" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('密码') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="nickName">昵称</label>
								<input id="nickName" v-validate="'required'" name="昵称" v-model="userInfo.nickName" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('昵称') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="realName">真实姓名</label>
								<input id="realName" v-validate="'required'" name="真实姓名" v-model="userInfo.realName" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('真实姓名') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="gender">性别 1男 2女</label>
								<!-- <input id="gender" v-validate="'required'" name="性别 1男  2女" v-model="userInfo.gender" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('性别 1男  2女') }}</span> -->
								<select v-validate="'required'" v-model="userInfo.gender" class="custom-select tm-select-accounts" id="gender">
									<option value="1">男</option>
									<option value="2">女</option>
								</select>
							</div>
							<div class="form-group col-lg-6">
								<label for="birthday">生日</label>
								<input id="birthday" placeholder="例如:1998-01-01" v-validate="''" name="生日" v-model="userInfo.birthday" type="text"
								 class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('生日') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="age">年龄</label>
								<input id="age" v-validate="'required|between:1,100'" name="年龄" v-model="userInfo.age" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('年龄') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="qq">qq号</label>
								<input id="qq" v-validate="'required|max:13|min:1'" name="qq号" v-model="userInfo.qq" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('qq号') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="weChat">微信号</label>
								<input id="weChat" v-validate="'required'" name="微信号" v-model="userInfo.weChat" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('微信号') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="phoneNum">手机号</label>
								<input id="phoneNum" v-validate="'required|mobile'" name="手机号" v-model="userInfo.phoneNum" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('手机号') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="email">邮箱</label>
								<input id="email" v-validate="'required|email'" name="邮箱" v-model="userInfo.email" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('邮箱') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="regIp">注册ip</label>
								<input id="regIp" v-validate="''" name="注册ip" v-model="userInfo.regIp" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('注册ip') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="regTime">注册时间</label>
								<input id="regTime" v-validate="''" name="注册时间" v-model="userInfo.regTime" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('注册时间') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="lastLogoutIp">（上一次）登出ip</label>
								<input id="lastLogoutIp" v-validate="''" name="（上一次）登出ip" v-model="userInfo.lastLogoutIp" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('（上一次）登出ip') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="loginIp">（本次）登录ip</label>
								<input id="loginIp" v-validate="''" name="（本次）登录ip" v-model="userInfo.loginIp" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('（本次）登录ip') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="lastOnlineTime">最后在线/登出时刻</label>
								<input id="lastOnlineTime" v-validate="''" name="最后在线/登出时刻" v-model="userInfo.lastOnlineTime" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('最后在线/登出时刻') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="loginTime">（本次）登录时刻</label>
								<input id="loginTime" v-validate="''" name="（本次）登录时刻" v-model="userInfo.loginTime" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('（本次）登录时刻') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="timeOfThisLogin">本次登录时长</label>
								<input id="timeOfThisLogin" v-validate="''" name="本次登录时长" v-model="userInfo.timeOfThisLogin" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('本次登录时长') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="totalOnlineTime">在线总时长</label>
								<input id="totalOnlineTime" v-validate="''" name="在线总时长" v-model="userInfo.totalOnlineTime" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('在线总时长') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="roleId">用户身份id（1用户 2管理员）</label>
								<input id="roleId" v-validate="'required'" name="用户身份id（1用户 2管理员）" v-model="userInfo.roleId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('用户身份id（1用户 2管理员）') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="memberId">会员id</label>
								<input id="memberId" v-validate="''" name="会员id" v-model="userInfo.memberId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('会员id') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="shippingAddress">收货地址id（关联地区表）</label>
								<input id="shippingAddress" v-validate="''" name="收货地址id（关联地区表）" v-model="userInfo.shippingAddress" type="text"
								 class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('收货地址id（关联地区表）') }}</span>
							</div>
							<!-- <div class="form-group col-lg-6">
								<label for="status">状态（1已激活、2未激活、3冻结、4已删除）</label>
								<input id="status" v-validate="'required'" name="状态（1已激活、2未激活、3冻结、4已删除）" v-model="userInfo.status" type="text"
								 class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('状态（1已激活、2未激活、3冻结、4已删除）') }}</span>
							</div> -->
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="commonLoginIp">常用登录ip</label>
								<input id="commonLoginIp" v-validate="''" name="常用登录ip" v-model="userInfo.commonLoginIp" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('常用登录ip') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="payPassword">支付密码</label>
								<input id="payPassword" v-validate="''" name="支付密码" v-model="userInfo.payPassword" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('支付密码') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="signature">用户签名</label>
								<input id="signature" v-validate="''" name="用户签名" v-model="userInfo.signature" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('用户签名') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="userAddress">用户地址</label>
								<input id="userAddress" v-validate="''" name="用户地址" v-model="userInfo.userAddress" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('用户地址') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="studentId">学生id</label>
								<input id="studentId" v-validate="''" name="学生id" v-model="userInfo.studentId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('学生id') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="companyId">公司id</label>
								<input id="companyId" v-validate="''" name="公司id" v-model="userInfo.companyId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('公司id') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="schoolId">学校id</label>
								<input id="schoolId" v-validate="''" name="学校id" v-model="userInfo.schoolId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('学校id') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="facultyId">学院id</label>
								<input id="facultyId" v-validate="''" name="学院id" v-model="userInfo.facultyId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('学院id') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="banjiId">班级id</label>
								<input id="banjiId" v-validate="''" name="班级id" v-model="userInfo.banjiId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('班级id') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="teacherId">教师id</label>
								<input id="teacherId" v-validate="''" name="教师id" v-model="userInfo.teacherId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('教师id') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="departmentId">部门id</label>
								<input id="departmentId" v-validate="''" name="部门id" v-model="userInfo.departmentId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('部门id') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="staffId">职工id</label>
								<input id="staffId" v-validate="''" name="职工id" v-model="userInfo.staffId" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('职工id') }}</span>
							</div>
							<!-- <div class="form-group col-lg-6">
								<label for="birthPlace">籍贯（关联地区表）</label>
								<input id="birthPlace" v-validate="'required'" name="籍贯（关联地区表）" v-model="userInfo.birthPlace" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('籍贯（关联地区表）') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="politicalStatus">政治面貌（1党员 2团员 3其他）</label>
								<input id="politicalStatus" v-validate="'required'" name="政治面貌（1党员 2团员 3其他）" v-model="userInfo.politicalStatus"
								 type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('政治面貌（1党员 2团员 3其他）') }}</span>
							</div>
							<div class="form-group col-lg-6">
								<label for="religion">宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）</label>
								<input id="religion" v-validate="'required'" name="宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）" v-model="userInfo.religion" type="text"
								 class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）') }}</span>
							</div> -->
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="inviteCode">邀请码</label>
								<input id="inviteCode" v-validate="''" name="邀请码" v-model="userInfo.inviteCode" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('邀请码') }}</span>
							</div>
							<div v-show="$superAdminMode" class="form-group col-lg-6">
								<label for="inviteNum">邀请人数</label>
								<input id="inviteNum" v-validate="''" name="邀请人数" v-model="userInfo.inviteNum" type="text" class="form-control validate" />
								<span class="validateErrorSpan">{{ errors.first('邀请人数') }}</span>
							</div>










							<div class="col-12">
								<button @click="saveUserInfo" class="btn btn-primary btn-block text-uppercase">
									确认修改
								</button>
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
		name: 'userCenter',
		data() {
			return {
				userInfo: {

				}
			}
		},
		methods: {
			getUserInfoByUserId: function() {
				var that = this
				this.$http('/user-server/getUserById/' + that.$getCookie('userId')).then(res => {
					this.$log(res)
					if (res.data.code == 200) {
						this.userInfo = res.data.content
					} else {
						this.$warnMsg('用户信息获取失败')
					}
				}).catch(err => {
					this.$log(err)
				})
			},
			addImage: function(e) {
				var that = this;
				if (e.target.files.length !== 0) {
					var formData = new FormData()
					formData.append('file_data', e.target.files[0]);
					// console.log(e.target.files[0].name)
					var fileName = e.target.files[0].name
					// 获取fileToken
					var fileParam = {
						fileName: fileName
					}
					this.$http.post('/file-server/createFileToken', fileParam).then(res => {
						if (res.data.code == 200) {
							var token = res.data.content
							// 上传文件
							//单个文件进行上传
							this.$http.post('/file-server/uploadFile/' + token, formData).then(res => {
								// this.imgPath="http://localhost:8888/demo/static/"+e.target.files[0].name
								if (res.data.code == 200) {
									this.userInfo[e.target.id] = res.data.content
								} else {
									this.$warnMsg('上传失败')
								}

							})
						} else {
							this.$warnMsg('上传失败')
						}
					})

				} else {
					this.$warnMsg('文件选择错误')
				}
			},
			saveUserInfo: function() {
				var that = this
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						this.$http.put('/user-server/updateUser', that.userInfo).then(res => {
							this.$log(res.data)
							if (res.data.code == 200) {
								this.$infoMsg('保存成功')
								
							}else{
								this.$warnMsg('保存失败')
							}
						}).catch(err=>{
							this.$warnMsg('保存失败')
						})
					}
				})
			}
		},
		mounted: function() {
			this.getUserInfoByUserId()

			// 加载日历插件


		}
	}
</script>

<style scoped="scoped">
</style>

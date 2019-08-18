<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">编辑用户信息数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" method="post" class="tm-edit-product-form"> -->
								<div class="form-group mb-3">
									<label for="status">状态（1已激活、2未激活、3普通用户、4已删除）</label>
									<select class="custom-select" v-model="user.status">
										<option value="1">已激活</option>
										<option value="2">未激活</option>
										<option value="3">普通用户</option>
										<option value="4">已删除</option>
									</select>
								</div>
								<div class="form-group mb-3">
									<label for="companyId">公司id</label>
									<!-- <input id="companyId" type="text" v-validate="''" name="公司id" v-model="user.companyId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('公司id') }}</span> -->
									<select v-validate="''" v-model="user.companyId" class="custom-select tm-select-accounts" id="companyId">
										<option v-for="item in companyList" :value="item.id">{{item.name}}</option>
									</select>
								</div>
								<div class="form-group mb-3">
									<label for="realName">真实姓名</label>
									<input id="realName" type="text" v-validate="'required'" name="真实姓名" v-model="user.realName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('真实姓名') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="phoneNum">手机号</label>
									<input id="phoneNum" type="text" v-validate="'required'" name="手机号" v-model="user.phoneNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('手机号') }}</span>
								</div>
								<!-- <div class="form-group mb-3">
									<label for="headImg">头像</label>
									<input id="headImg" type="text" v-validate="'required'" name="头像" v-model="user.headImg" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('头像') }}</span>
								</div> -->
								<div class="form-group mb-3">
									<label for="userName">用户名</label>
									<input id="userName" type="text" v-validate="'required'" name="用户名" v-model="user.userName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('用户名') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="password">密码</label>
									<input id="password" type="text" v-validate="'required'" name="密码" v-model="user.password" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('密码') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="nickName">昵称</label>
									<input id="nickName" type="text" v-validate="'required'" name="昵称" v-model="user.nickName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('昵称') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="gender">性别 1男 2女</label>
									<input id="gender" type="text" v-validate="'required'" name="性别 1男  2女" v-model="user.gender" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('性别 1男  2女') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="birthday">生日</label>
									<input id="birthday" type="text" v-validate="'required'" name="生日" v-model="user.birthday" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('生日') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="age">年龄</label>
									<input id="age" type="text" v-validate="'required'" name="年龄" v-model="user.age" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('年龄') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="qq">qq号</label>
									<input id="qq" type="text" v-validate="'required'" name="qq号" v-model="user.qq" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('qq号') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="weChat">微信号</label>
									<input id="weChat" type="text" v-validate="'required'" name="微信号" v-model="user.weChat" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('微信号') }}</span>
								</div>
								
								<div class="form-group mb-3">
									<label for="email">邮箱</label>
									<input id="email" type="text" v-validate="'required'" name="邮箱" v-model="user.email" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('邮箱') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="regIp">注册ip</label>
									<input id="regIp" type="text" v-validate="''" name="注册ip" v-model="user.regIp" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('注册ip') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="regTime">注册时间</label>
									<input id="regTime" type="text" v-validate="'required'" name="注册时间" v-model="user.regTime" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('注册时间') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="lastLogoutIp">（上一次）登出ip</label>
									<input id="lastLogoutIp" type="text" v-validate="''" name="（上一次）登出ip" v-model="user.lastLogoutIp" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('（上一次）登出ip') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="loginIp">（本次）登录ip</label>
									<input id="loginIp" type="text" v-validate="''" name="（本次）登录ip" v-model="user.loginIp" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('（本次）登录ip') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="lastOnlineTime">最后在线/登出时刻</label>
									<input id="lastOnlineTime" type="text" v-validate="'required'" name="最后在线/登出时刻" v-model="user.lastOnlineTime"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('最后在线/登出时刻') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="loginTime">（本次）登录时刻</label>
									<input id="loginTime" type="text" v-validate="'required'" name="（本次）登录时刻" v-model="user.loginTime" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('（本次）登录时刻') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="timeOfThisLogin">本次登录时长</label>
									<input id="timeOfThisLogin" type="text" v-validate="''" name="本次登录时长" v-model="user.timeOfThisLogin" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('本次登录时长') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="totalOnlineTime">在线总时长</label>
									<input id="totalOnlineTime" type="text" v-validate="''" name="在线总时长" v-model="user.totalOnlineTime" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('在线总时长') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="roleId">用户身份id（1用户 2管理员）</label>
									<input id="roleId" type="text" v-validate="'required'" name="用户身份id（1用户 2管理员）" v-model="user.roleId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('用户身份id（1用户 2管理员）') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="memberId">会员id</label>
									<input id="memberId" type="text" v-validate="''" name="会员id" v-model="user.memberId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('会员id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="shippingAddress">收货地址id（关联地区表）</label>
									<input id="shippingAddress" type="text" v-validate="''" name="收货地址id（关联地区表）" v-model="user.shippingAddress"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('收货地址id（关联地区表）') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="commonLoginIp">常用登录ip</label>
									<input id="commonLoginIp" type="text" v-validate="''" name="常用登录ip" v-model="user.commonLoginIp" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('常用登录ip') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="payPassword">支付密码</label>
									<input id="payPassword" type="text" v-validate="''" name="支付密码" v-model="user.payPassword" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('支付密码') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="signature">用户签名</label>
									<input id="signature" type="text" v-validate="''" name="用户签名" v-model="user.signature" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('用户签名') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="userAddress">用户地址</label>
									<input id="userAddress" type="text" v-validate="''" name="用户地址" v-model="user.userAddress" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('用户地址') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="studentId">学生id</label>
									<input id="studentId" type="text" v-validate="''" name="学生id" v-model="user.studentId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('学生id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="schoolId">学校id</label>
									<input id="schoolId" type="text" v-validate="''" name="学校id" v-model="user.schoolId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('学校id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="facultyId">学院id</label>
									<input id="facultyId" type="text" v-validate="''" name="学院id" v-model="user.facultyId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('学院id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="banjiId">班级id</label>
									<input id="banjiId" type="text" v-validate="''" name="班级id" v-model="user.banjiId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('班级id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="teacherId">教师id</label>
									<input id="teacherId" type="text" v-validate="''" name="教师id" v-model="user.teacherId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('教师id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="departmentId">部门id</label>
									<input id="departmentId" type="text" v-validate="''" name="部门id" v-model="user.departmentId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('部门id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="staffId">职工id</label>
									<input id="staffId" type="text" v-validate="''" name="职工id" v-model="user.staffId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('职工id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="birthPlace">籍贯（关联地区表）</label>
									<input id="birthPlace" type="text" v-validate="''" name="籍贯（关联地区表）" v-model="user.birthPlace" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('籍贯（关联地区表）') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="politicalStatus">政治面貌（1党员 2团员 3其他）</label>
									<input id="politicalStatus" type="text" v-validate="''" name="政治面貌（1党员 2团员 3其他）" v-model="user.politicalStatus"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('政治面貌（1党员 2团员 3其他）') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="religion">宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）</label>
									<input id="religion" type="text" v-validate="''" name="宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）" v-model="user.religion" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="inviteCode">邀请码</label>
									<input id="inviteCode" type="text" v-validate="''" name="邀请码" v-model="user.inviteCode" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('邀请码') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="inviteNum">邀请人数</label>
									<input id="inviteNum" type="text" v-validate="''" name="邀请人数" v-model="user.inviteNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('邀请人数') }}</span>
								</div>

								<!-- <div class="form-group mb-3">
									<label for="description">Description</label>
									<textarea class="form-control validate tm-small" rows="5" required>Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.</textarea>
								</div>
								<div class="form-group mb-3">
									<label for="category">Category</label>
									<select class="custom-select tm-select-accounts" id="category">
										<option>Select category</option>
										<option value="1" selected>New Arrival</option>
										<option value="2">Most Popular</option>
										<option value="3">Trending</option>
									</select>
								</div>
								<div class="row">
									<div class="form-group mb-3 col-xs-12 col-sm-6">
										<label for="expire_date">Expire Date
										</label>
										<input id="expire_date" name="expire_date" type="text" value="22 Oct, 2020" class="form-control validate"
										 data-large-mode="true" />
									</div>
									<div class="form-group mb-3 col-xs-12 col-sm-6">
										<label for="stock">Units In Stock
										</label>
										<input id="stock" name="stock" type="text" value="19,765" class="form-control validate" />
									</div>
								</div> -->

							</div>
							<div class="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
								<div class="tm-product-img-edit mx-auto">
									<img :src="user.headImg" alt="Product image" class="img-fluid d-block mx-auto" style="width: 100%;height: 100%;">
									<i class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('headImg').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" id="headImg" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="修改头像" onclick="document.getElementById('headImg').click();" />
								</div>
							</div>
							<div class="col-12">
								<button @click="saveUser" class="btn btn-primary btn-block text-uppercase">保存</button>
								<button @click="toUserList" class="btn btn-primary btn-block text-uppercase">返回用户信息列表</button>
							</div>
							<!-- </form> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'editUser',
		data() {
			return {
				user: {
					id: '',
					headImg: '',
					userName: '',
					password: '',
					nickName: '',
					realName: '',
					gender: '',
					birthday: '',
					age: '',
					qq: '',
					weChat: '',
					phoneNum: '',
					email: '',
					regIp: '',
					regTime: '',
					lastLogoutIp: '',
					loginIp: '',
					lastOnlineTime: '',
					loginTime: '',
					timeOfThisLogin: '',
					totalOnlineTime: '',
					roleId: '',
					memberId: '',
					shippingAddress: '',
					status: '',
					commonLoginIp: '',
					payPassword: '',
					signature: '',
					userAddress: '',
					studentId: '',
					companyId: '',
					schoolId: '',
					facultyId: '',
					banjiId: '',
					teacherId: '',
					departmentId: '',
					staffId: '',
					birthPlace: '',
					politicalStatus: '',
					religion: '',
					inviteCode: '',
					inviteNum: '',
				},
				itemId: 1,
				companyList: []
			}
		},
		methods: {
			getUserById: function(id) {
				this.$http('/user-server/getUserById/' + id).then(res => {
					if (res.data.code == 200) {
						this.user = res.data.content
						this.itemId = res.data.content.id
						this.$log(res)
					} else {
						this.$errMsg('用户信息数据查询失败')
					}
				}).catch(err => {
					this.$log(err)
					this.$errMsg('用户信息数据查询失败')
				})
			},
			saveUser: function() {
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						// delete some date field //Todo need  fix
						this.$http.put('/user-server/updateUser', that.user).then(res => {
							if (res.data.code == 200) {
								this.user = res.data.content
								this.$infoMsg('保存成功')
								this.$log(res)
							} else {
								this.$errMsg('用户信息数据修改失败')
							}
							this.getUserById(this.itemId)
						}).catch(err => {
							this.$log(err)
							this.$errMsg('用户信息数据修改失败')
							this.getUserById(this.itemId)
						})
					}
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
									this.user[e.target.id] = res.data.content
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
			getCompanyList: function() {
				var searchData = {
					"model": {

					},
					"orderParams": [

					],
					"pageNum": 1,
					"pageSize": 1000
				}
				this.$http.post('/user-server/getAllCompany', searchData).then(res => {
					if (res.data.code == 200) {
						this.companyList = res.data.content.list
						// this.userInfo.companyId = res.data.content.list[0].id
					} else {

					}
				}).catch(err => {
					this.$log('err')
				})
			},
			toUserList: function() {
				this.$router.push('/user')
			}
		},
		mounted: function() {
			var id = this.$route.query.id
			this.getUserById(id)

			this.getCompanyList()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

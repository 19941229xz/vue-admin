<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">新增用户信息数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" class="tm-edit-product-form"> -->
								
								                                                                                                                                            <div class="form-group mb-3">
                                        <label for="headImg">头像</label>
                                        <input id="headImg" type="text" v-validate="'required'" name="头像" v-model="user.headImg" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('头像') }}</span>
                                    </div>
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
                                        <label for="realName">真实姓名</label>
                                        <input id="realName" type="text" v-validate="'required'" name="真实姓名" v-model="user.realName" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('真实姓名') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="gender">性别 1男  2女</label>
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
                                        <label for="phoneNum">手机号</label>
                                        <input id="phoneNum" type="text" v-validate="'required'" name="手机号" v-model="user.phoneNum" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('手机号') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="email">邮箱</label>
                                        <input id="email" type="text" v-validate="'required'" name="邮箱" v-model="user.email" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('邮箱') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="regIp">注册ip</label>
                                        <input id="regIp" type="text" v-validate="'required'" name="注册ip" v-model="user.regIp" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('注册ip') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="regTime">注册时间</label>
                                        <input id="regTime" type="text" v-validate="'required'" name="注册时间" v-model="user.regTime" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('注册时间') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="lastLogoutIp">（上一次）登出ip</label>
                                        <input id="lastLogoutIp" type="text" v-validate="'required'" name="（上一次）登出ip" v-model="user.lastLogoutIp" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('（上一次）登出ip') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="loginIp">（本次）登录ip</label>
                                        <input id="loginIp" type="text" v-validate="'required'" name="（本次）登录ip" v-model="user.loginIp" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('（本次）登录ip') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="lastOnlineTime">最后在线/登出时刻</label>
                                        <input id="lastOnlineTime" type="text" v-validate="'required'" name="最后在线/登出时刻" v-model="user.lastOnlineTime" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('最后在线/登出时刻') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="loginTime">（本次）登录时刻</label>
                                        <input id="loginTime" type="text" v-validate="'required'" name="（本次）登录时刻" v-model="user.loginTime" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('（本次）登录时刻') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="timeOfThisLogin">本次登录时长</label>
                                        <input id="timeOfThisLogin" type="text" v-validate="'required'" name="本次登录时长" v-model="user.timeOfThisLogin" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('本次登录时长') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="totalOnlineTime">在线总时长</label>
                                        <input id="totalOnlineTime" type="text" v-validate="'required'" name="在线总时长" v-model="user.totalOnlineTime" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('在线总时长') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="roleId">用户身份id（1用户 2管理员）</label>
                                        <input id="roleId" type="text" v-validate="'required'" name="用户身份id（1用户 2管理员）" v-model="user.roleId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('用户身份id（1用户 2管理员）') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="memberId">会员id</label>
                                        <input id="memberId" type="text" v-validate="'required'" name="会员id" v-model="user.memberId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('会员id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="shippingAddress">收货地址id（关联地区表）</label>
                                        <input id="shippingAddress" type="text" v-validate="'required'" name="收货地址id（关联地区表）" v-model="user.shippingAddress" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('收货地址id（关联地区表）') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="status">状态（1已激活、2未激活、3普通用户、4已删除 5未审核）</label>
                                        <input id="status" type="text" v-validate="'required'" name="状态（1已激活、2未激活、3普通用户、4已删除 5未审核）" v-model="user.status" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('状态（1已激活、2未激活、3普通用户、4已删除 5未审核）') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="commonLoginIp">常用登录ip</label>
                                        <input id="commonLoginIp" type="text" v-validate="'required'" name="常用登录ip" v-model="user.commonLoginIp" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('常用登录ip') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="payPassword">支付密码</label>
                                        <input id="payPassword" type="text" v-validate="'required'" name="支付密码" v-model="user.payPassword" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('支付密码') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="signature">用户签名</label>
                                        <input id="signature" type="text" v-validate="'required'" name="用户签名" v-model="user.signature" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('用户签名') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="userAddress">用户地址</label>
                                        <input id="userAddress" type="text" v-validate="'required'" name="用户地址" v-model="user.userAddress" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('用户地址') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="studentId">学生id</label>
                                        <input id="studentId" type="text" v-validate="'required'" name="学生id" v-model="user.studentId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('学生id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="companyId">公司id</label>
                                        <input id="companyId" type="text" v-validate="'required'" name="公司id" v-model="user.companyId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('公司id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="schoolId">学校id</label>
                                        <input id="schoolId" type="text" v-validate="'required'" name="学校id" v-model="user.schoolId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('学校id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="facultyId">学院id</label>
                                        <input id="facultyId" type="text" v-validate="'required'" name="学院id" v-model="user.facultyId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('学院id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="banjiId">班级id</label>
                                        <input id="banjiId" type="text" v-validate="'required'" name="班级id" v-model="user.banjiId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('班级id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="teacherId">教师id</label>
                                        <input id="teacherId" type="text" v-validate="'required'" name="教师id" v-model="user.teacherId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('教师id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="departmentId">部门id</label>
                                        <input id="departmentId" type="text" v-validate="'required'" name="部门id" v-model="user.departmentId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('部门id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="staffId">职工id</label>
                                        <input id="staffId" type="text" v-validate="'required'" name="职工id" v-model="user.staffId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('职工id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="birthPlace">籍贯（关联地区表）</label>
                                        <input id="birthPlace" type="text" v-validate="'required'" name="籍贯（关联地区表）" v-model="user.birthPlace" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('籍贯（关联地区表）') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="politicalStatus">政治面貌（1党员 2团员 3其他）</label>
                                        <input id="politicalStatus" type="text" v-validate="'required'" name="政治面貌（1党员 2团员 3其他）" v-model="user.politicalStatus" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('政治面貌（1党员 2团员 3其他）') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="religion">宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）</label>
                                        <input id="religion" type="text" v-validate="'required'" name="宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）" v-model="user.religion" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('宗教信仰（1基督教 2伊斯兰教 3佛教 4其他）') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="inviteCode">邀请码</label>
                                        <input id="inviteCode" type="text" v-validate="'required'" name="邀请码" v-model="user.inviteCode" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('邀请码') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="inviteNum">邀请人数</label>
                                        <input id="inviteNum" type="text" v-validate="'required'" name="邀请人数" v-model="user.inviteNum" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('邀请人数') }}</span>
                                    </div>
                                                                    								<!-- <div class="form-group mb-3">
										<label for="description">Description</label>
										<textarea class="form-control validate" rows="3" required></textarea>
									</div>
									<div class="form-group mb-3">
										<label for="category">Category</label>
										<select class="custom-select tm-select-accounts" id="category">
											<option selected>Select category</option>
											<option value="1">New Arrival</option>
											<option value="2">Most Popular</option>
											<option value="3">Trending</option>
										</select>
									</div>
									<div class="row">
										<div class="form-group mb-3 col-xs-12 col-sm-6">
											<label for="expire_date">Expire Date
											</label>
											<input id="expire_date" name="expire_date" type="text" class="form-control validate" data-large-mode="true" />
										</div>
										<div class="form-group mb-3 col-xs-12 col-sm-6">
											<label for="stock">Units In Stock
											</label>
											<input id="stock" name="stock" type="text" class="form-control validate" required />
										</div>
									</div> -->

							</div>
							<div class="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
								<div class="tm-product-img-dummy mx-auto">
									<i class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('fileInput').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input id="fileInput" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="UPLOAD PRODUCT IMAGE" onclick="document.getElementById('fileInput').click();" />
								</div>
							</div>
							<div class="col-12">
								<button @click="addUser" class="btn btn-primary btn-block text-uppercase">确认添加</button>
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
		name: 'addUser',
		data() {
			return {
				user: {
					
                                        id:'',
                                        headImg:'',
                                        userName:'',
                                        password:'',
                                        nickName:'',
                                        realName:'',
                                        gender:'',
                                        birthday:'',
                                        age:'',
                                        qq:'',
                                        weChat:'',
                                        phoneNum:'',
                                        email:'',
                                        regIp:'',
                                        regTime:'',
                                        lastLogoutIp:'',
                                        loginIp:'',
                                        lastOnlineTime:'',
                                        loginTime:'',
                                        timeOfThisLogin:'',
                                        totalOnlineTime:'',
                                        roleId:'',
                                        memberId:'',
                                        shippingAddress:'',
                                        status:'',
                                        commonLoginIp:'',
                                        payPassword:'',
                                        signature:'',
                                        userAddress:'',
                                        studentId:'',
                                        companyId:'',
                                        schoolId:'',
                                        facultyId:'',
                                        banjiId:'',
                                        teacherId:'',
                                        departmentId:'',
                                        staffId:'',
                                        birthPlace:'',
                                        politicalStatus:'',
                                        religion:'',
                                        inviteCode:'',
                                        inviteNum:'',
                    				}
			}
		},
		methods: {
			addUser: function() {
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						// delete some date field
						this.$http.post('/user-server/addUser', that.user).then(res => {
							if (res.data.code == 200) {
								this.$log(res)
								this.$infoMsg('添加成功')
								this.$router.push('/user')
							} else {
								this.$errMsg('添加失败')
							}
						}).catch(err => {
							this.$log(err)
							this.$errMsg('添加失败')
						})
					}
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>
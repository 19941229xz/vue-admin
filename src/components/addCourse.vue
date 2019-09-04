<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">新增课程数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" class="tm-edit-product-form"> -->

								<div class="form-group mb-3">
									<label for="courseName">课程名称</label>
									<input id="courseName" type="text" v-validate="'required|max:50|min:5'" name="课程名称" v-model="course.courseName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('课程名称') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionJobTypeId">课程所属得岗位类型id</label>
									<select @change="questionJobTypeIdChanged(course.questionJobTypeId)" v-validate="'required'" v-model="course.questionJobTypeId"
									 class="custom-select tm-select-accounts" id="questionJobTypeId">
										<option v-for="(item,index) in questionjobtypeList" :value="item.id">{{item.questionJobTypeName}}</option>
									</select>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="questionJobTypeName">课程所属得岗位类型名称</label>
									<input id="questionJobTypeName" type="text" v-validate="''" name="问题所属得岗位类型名称" v-model="course.questionJobTypeName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题所属得岗位类型名称') }}</span>
								</div>
								<!-- <div class="form-group mb-3">
									<label for="coursePic1">课程介绍图片1</label>
									<input id="coursePic1" type="text" v-validate="'required'" name="课程介绍图片1" v-model="course.coursePic1" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('课程介绍图片1') }}</span>
								</div> -->
								<!-- <div class="form-group mb-3">
									<label for="coursePic2">课程介绍图片2</label>
									<input id="coursePic2" type="text" v-validate="''" name="课程介绍图片2" v-model="course.coursePic2" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('课程介绍图片2') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="coursePic3">课程介绍图片3</label>
									<input id="coursePic3" type="text" v-validate="''" name="课程介绍图片3" v-model="course.coursePic3" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('课程介绍图片3') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="coursePic4">课程介绍图片4</label>
									<input id="coursePic4" type="text" v-validate="''" name="课程介绍图片4" v-model="course.coursePic4" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('课程介绍图片4') }}</span>
								</div> -->
								<div class="form-group mb-3">
									<label for="pointsNeed">所需积分</label>
									<input id="pointsNeed" type="text" v-validate="'required|between:100,10000'" name="所需积分" v-model="course.pointsNeed" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('所需积分') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="downloadUrl">网盘下载链接</label>
									<input id="downloadUrl" type="text" v-validate="'required|url:https://pan.baidu.com?'" name="网盘下载链接" v-model="course.downloadUrl" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('网盘下载链接') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="downloadPwd">网盘下载密码</label>
									<input id="downloadPwd" type="text" v-validate="'required|min:4|max:8'" name="网盘下载密码" v-model="course.downloadPwd" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('网盘下载密码') }}</span>
								</div>
								<!-- <div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserId">创建人id</label>
									<input id="createUserId" type="text" v-validate="'required'" name="创建人id" v-model="course.createUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('创建人id') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserRealName">创建人真实姓名</label>
									<input id="createUserRealName" type="text" v-validate="'required'" name="创建人真实姓名" v-model="course.createUserRealName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('创建人真实姓名') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserNickName">创建人昵称</label>
									<input id="createUserNickName" type="text" v-validate="'required'" name="创建人昵称" v-model="course.createUserNickName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('创建人昵称') }}</span>
								</div> -->
								<!-- <div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserName">审核人账号</label>
									<input id="createUserName" type="text" v-validate="''" name="审核人账号" v-model="course.createUserName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人账号') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createDate">创建时间</label>
									<input id="createDate" type="text" v-validate="''" name="创建时间" v-model="course.createDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('创建时间') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserId">审核人id</label>
									<input id="checkUserId" type="text" v-validate="''" name="审核人id" v-model="course.checkUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人id') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserRealName">审核人真实姓名</label>
									<input id="checkUserRealName" type="text" v-validate="''" name="审核人真实姓名" v-model="course.checkUserRealName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人真实姓名') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserNickName">审核人昵称</label>
									<input id="checkUserNickName" type="text" v-validate="''" name="审核人昵称" v-model="course.checkUserNickName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人昵称') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserName">审核人账号</label>
									<input id="checkUserName" type="text" v-validate="''" name="审核人账号" v-model="course.checkUserName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人账号') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="isChecked">是否审核 1未审核 2已审核</label>
									<input id="isChecked" type="text" v-validate="''" name="是否审核  1未审核 2已审核" v-model="course.isChecked" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('是否审核  1未审核 2已审核') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkDate">审核时间</label>
									<input id="checkDate" type="text" v-validate="''" name="审核时间" v-model="course.checkDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核时间') }}</span>
								</div> -->
								
								<!-- <div class="form-group mb-3">
									<label for="courseQrcode">课程二维码</label>
									<input id="courseQrcode" type="text" v-validate="'required'" name="课程二维码" v-model="course.courseQrcode" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('课程二维码') }}</span>
								</div> -->
								<!-- <div v-show="$superAdminMode" class="form-group mb-3">
									<label for="viewNum">浏览次数</label>
									<input id="viewNum" type="text" v-validate="''" name="浏览次数" v-model="course.viewNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('浏览次数') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="buyNum">购买次数</label>
									<input id="buyNum" type="text" v-validate="''" name="购买次数" v-model="course.buyNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('购买次数') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="longTabNum">长按识别次数</label>
									<input id="longTabNum" type="text" v-validate="''" name="长按识别次数" v-model="course.longTabNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('长按识别次数') }}</span>
								</div> -->
								<div class="form-group mb-3">
									<label for="remark">备注</label>
									<input id="remark" type="text" v-validate="''" name="备注" v-model="course.remark" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('备注') }}</span>
								</div>

							</div>
							<div class="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
								<div class="tm-product-img-dummy mx-auto">
									<img style="height: 100%;width: 100%;" v-if="course.coursePic1!=''&&course.coursePic1!='null'&&course.coursePic1!=null"
									 :src="course.coursePic1" alt="Product image" class="img-fluid d-block mx-auto">
									<i v-show="course.coursePic1==''" class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('coursePic1').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" v-validate="'required'" id="coursePic1" type="file" name="课程介绍图片1" style="display:none;" />
									<span class="validateErrorSpan" style="display:none;">{{ errors.first('课程介绍图片1') }}</span>
									<input type="button" class="btn btn-primary btn-block mx-auto" value="上传课程介绍图片1" onclick="document.getElementById('coursePic1').click();" />
								</div>

								<!-- <div class="tm-product-img-dummy mx-auto">
									<img style="height: 100%;width: 100%;" v-if="course.coursePic2!=''&&course.coursePic2!='null'&&course.coursePic2!=null"
									 :src="course.coursePic2" alt="Product image" class="img-fluid d-block mx-auto">
									<i v-show="course.coursePic2==''" class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('coursePic2').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" id="coursePic2" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="上传课程介绍图片2" onclick="document.getElementById('coursePic2').click();" />
								</div>
								
								<div class="tm-product-img-dummy mx-auto">
									<img style="height: 100%;width: 100%;" v-if="course.coursePic3!=''&&course.coursePic3!='null'&&course.coursePic3!=null"
									 :src="course.coursePic3" alt="Product image" class="img-fluid d-block mx-auto">
									<i v-show="course.coursePic3==''" class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('coursePic3').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" id="coursePic3" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="上传课程介绍图片3" onclick="document.getElementById('coursePic3').click();" />
								</div>

								<div class="tm-product-img-dummy mx-auto">
									<img style="height: 100%;width: 100%;" v-if="course.coursePic4!=''&&course.coursePic4!='null'&&course.coursePic4!=null"
									 :src="course.coursePic4" alt="Product image" class="img-fluid d-block mx-auto">
									<i v-show="course.coursePic4==''" class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('coursePic4').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" id="coursePic4" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="上传课程介绍图片4" onclick="document.getElementById('coursePic4').click();" />
								</div> -->

								<div class="tm-product-img-dummy mx-auto">
									<img style="height: 100%;width: 100%;" v-if="course.courseQrcode!=''&&course.courseQrcode!='null'&&course.courseQrcode!=null"
									 :src="course.courseQrcode" alt="Product image" class="img-fluid d-block mx-auto">
									<i v-show="course.courseQrcode==''" class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('courseQrcode').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" v-validate="'required'" name="课程二维码" id="courseQrcode" type="file" style="display:none;" />
									<span class="validateErrorSpan" style="display:none;">{{ errors.first('课程二维码') }}</span>
									<input type="button" class="btn btn-primary btn-block mx-auto" value="上传课程二维码" onclick="document.getElementById('courseQrcode').click();" />
								</div>
							</div>
							<div class="col-12">
								<button @click="addCourse" class="btn btn-primary btn-block text-uppercase">确认添加</button>
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
	import emailUtil from '.././util/emailUtil.js'
	
	export default {
		name: 'addCourse',
		data() {
			return {
				course: {

					id: '',
					courseName: '',
					coursePic1: '',
					coursePic2: '',
					coursePic3: '',
					coursePic4: '',
					pointsNeed: '',
					createUserId: '',
					createUserRealName: '',
					createUserNickName: '',
					createUserName: '',
					createDate: '',
					checkUserId: '',
					checkUserRealName: '',
					checkUserNickName: '',
					checkUserName: '',
					isChecked: '',
					checkDate: '',
					downloadUrl: '',
					downloadPwd: '',
					courseQrcode: '',
					viewNum: '',
					buyNum: '',
					longTabNum: '',
					remark: '',
					questionJobTypeId: 1,
					questionJobTypeName: '',
				},
				questionjobtypeList: [],
			}
		},
		methods: {
			addCourse: function() {
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						// console.log(this.$validator.errors.items[0].msg)
						this.$warnMsg('表单参数不正确,' + this.$validator.errors.items[0].msg)
						return
					} else {
						var that = this
						// delete some date field
						that.course.isChecked = 1
						this.$http.post('/msbd/addCourse', that.course).then(res => {
							if (res.data.code == 200) {
								this.$log(res)
								this.$infoMsg('添加成功')
								
								// 邮件通知  如果是普通用户则通知到各个管理员  管理员用户自己添加不需要通知 只需要跳转到审核首页即可
								if (!this.$superAdminMode) {
									emailUtil.sendNormalEmailToAllAdmin('新课程待审核', that.course.createUserRealName+':我在'+that.course.questionJobTypeName + '岗位新上架一个课程请尽快审核')
								} else {
									this.$router.push('/')
								}
								//
								
								this.$router.push('/course')
							} else {
								this.$errMsg('添加失败')
							}
						}).catch(err => {
							this.$log(err)
							this.$errMsg('添加失败')
						})
					}
				});
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
									this.course[e.target.id] = res.data.content
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
			getquestionjobtypeList: function() {
				var that = this
				var searchData = {
					"model": {

					},
					"orderParams": [

					],
					"pageNum": 1,
					"pageSize": 1000
				}
				searchData.model.isChecked = 2
				this.$http.post('/msbd/getAllQuestionjobtype', searchData).then(res => {
					if (res.data.code == 200) {
						this.questionjobtypeList = res.data.content.list
						this.course.questionJobTypeId = res.data.content.list[0].id
						this.course.questionJobTypeName = res.data.content.list[0].questionJobTypeName
						this.$log(this.questionjobtypeList)
						this.$log(res.data)
					} else {
						this.$errMsg('职位数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('职位数据加载失败')
					that.$log(err)
				})
			},
			questionJobTypeIdChanged: function(questionJobTypeId) {
				// console.log(questionJobTypeId)
				this.$http('/msbd/getQuestionjobtypeById/' + questionJobTypeId).then(res => {
					this.$log(res.data)
					if (res.data.code == 200) {
						this.course.questionJobTypeName = res.data.content.questionJobTypeName
					} else {

					}

				})
			}
		},
		mounted: function() {
			// this.course.createUserHeadPic = this.$getCookie('headImg')
			this.course.createUserRealName = this.$getCookie('realName')
			this.course.createUserNickName = this.$getCookie('nickName')
			this.course.createUserId = this.$getCookie('userId')
			this.getquestionjobtypeList()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

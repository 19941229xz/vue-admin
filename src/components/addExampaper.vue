<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">新增试卷数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-12 col-lg-12 col-md-12">
								<!-- <form action="" class="tm-edit-product-form"> -->

								<div class="form-group mb-3">
									<label for="examPaperName">试卷名称</label>
									<input id="examPaperName" type="text" v-validate="'required'" name="试卷名称" v-model="exampaper.examPaperName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试卷名称') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserId">出题人id</label>
									<input id="createUserId" type="text" v-validate="'required'" name="出题人id" v-model="exampaper.createUserId"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('出题人id') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createDate">命题时间</label>
									<input id="createDate" type="text" v-validate="''" name="命题时间" v-model="exampaper.createDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('命题时间') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="userHeadPic">出题人头像</label>
									<input id="userHeadPic" type="text" v-validate="'required'" name="出题人头像" v-model="exampaper.userHeadPic" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('出题人头像') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="userNickName">出题人昵称</label>
									<input id="userNickName" type="text" v-validate="'required'" name="出题人昵称" v-model="exampaper.userNickName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('出题人昵称') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="userRealName">出题人真实姓名</label>
									<input id="userRealName" type="text" v-validate="'required'" name="出题人真实姓名" v-model="exampaper.userRealName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('出题人真实姓名') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="questionJobTypeName">试卷所属得岗位</label>
									<input id="questionJobTypeName" type="text" v-validate="'required'" name="试卷所属得岗位" v-model="exampaper.questionJobTypeName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试卷所属得岗位') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionJobTypeId">试卷所属得岗位</label>
									<select v-validate="'required'" v-model="exampaper.questionJobTypeId" class="custom-select tm-select-accounts"
									 id="questionJobTypeId">
										<option @click="exampaper.questionJobTypeName=item.questionJobTypeName" v-for="(item,index) in questionjobtypeList" :value="item.id">{{item.questionJobTypeName}}</option>
									</select>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="examTime">考试规定时长（单位秒）</label>
									<input id="examTime" type="text" v-validate="'required'" name="考试规定时长（单位秒）" v-model="exampaper.examTime" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('考试规定时长（单位秒）') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="examTime">考试规定时长（单位秒）</label>
									<select v-validate="'required'" v-model="exampaper.examTime" class="custom-select tm-select-accounts"
									 id="examTime">
										<option value="1200">20分钟</option>
										<option value="1800">半小时</option>
										<option value="2400">40分钟</option>
										<option value="3000">50分钟</option>
										<option value="3600">1小时</option>
									</select>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="banjiId">试卷所属班级id</label>
									<input id="banjiId" type="text" v-validate="'required'" name="试卷所属班级id" v-model="exampaper.banjiId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试卷所属班级id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="banjiId">试卷所属班级id</label>
									<select v-validate="'required'" v-model="exampaper.banjiId" class="custom-select tm-select-accounts"
									 id="banjiId">
										<option v-for="(item,index) in banjiList" :value="item.id">{{item.banjiName}}</option>
									</select>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="companyId">所属公司id</label>
									<input id="companyId" type="text" v-validate="'required'" name="所属公司id" v-model="exampaper.companyId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('所属公司id') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="schoolId">所属学校id</label>
									<input id="schoolId" type="text" v-validate="'required'" name="所属学校id" v-model="exampaper.schoolId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('所属学校id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="schoolId">所属学校id</label>
									<select v-validate="'required'" v-model="exampaper.schoolId" class="custom-select tm-select-accounts"
									 id="schoolId">
										<option v-for="(item,index) in schoolList" :value="item.id">{{item.name}}</option>
									</select>
								</div>
								<div class="form-group mb-3">
									<label for="publicLevel">试卷可浏览级别 1完全公开 2对学校或公司公开 3只对班级公开</label>
									<select v-validate="'required'" v-model="exampaper.publicLevel" class="custom-select tm-select-accounts"
									 id="publicLevel">
										<option value="1">完全公开</option>
										<option value="2">对学校或公司公开</option>
										<option value="3">只对班级公开</option>
									</select>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="isChecked">试卷是否审核 1 未审核 2已审核</label>
									<select v-validate="'required'" v-model="exampaper.isChecked" class="custom-select tm-select-accounts"
									 id="isChecked">
										<option value="1">未审核</option>
										<option value="2">已审核</option>
									</select>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserId">审核人id</label>
									<input id="checkUserId" type="text" v-validate="''" name="审核人id" v-model="exampaper.checkUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人id') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkDate">审核时间</label>
									<input id="checkDate" type="text" v-validate="''" name="审核时间" v-model="exampaper.checkDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核时间') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserRealName">审核人真实姓名</label>
									<input id="checkUserRealName" type="text" v-validate="''" name="审核人真实姓名" v-model="exampaper.checkUserRealName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人真实姓名') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserNickName">审核人昵称</label>
									<input id="checkUserNickName" type="text" v-validate="''" name="审核人昵称" v-model="exampaper.checkUserNickName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人昵称') }}</span>
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
							<!-- <div class="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
								<div class="tm-product-img-dummy mx-auto">
									<i class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('fileInput').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input id="fileInput" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="UPLOAD PRODUCT IMAGE" onclick="document.getElementById('fileInput').click();" />
								</div>
							</div> -->
							<div class="col-12">
								<button @click="addExampaper" class="btn btn-primary btn-block text-uppercase">确认添加</button>
								<button @click="toExampaperList" class="btn btn-primary btn-block text-uppercase">返回试卷列表</button>
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
		name: 'addExampaper',
		data() {
			return {
				exampaper: {

					id: '',
					examPaperName: '',
					createUserId: '',
					createDate: '',
					userHeadPic: '',
					userNickName: '',
					userRealName: '',
					questionJobTypeId: '',
					questionJobTypeName:'',
					examTime: '',
					banjiId: '',
					companyId: '',
					schoolId: '',
					publicLevel: '',
					isChecked: '',
					checkUserId: '',
					checkDate: '',
					checkUserRealName: '',
					checkUserNickName: '',
				},
				questionjobtypeList: [],
				banjiList:[],
				schoolList:[],
				searchData: {
					"model": {

					},
					"orderParams": [

					],
					"pageNum": 1,
					"pageSize": 1000
				},
				userInfo:{
					
				}
			}
		},
		methods: {
			addExampaper: function() {
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						that.searchData.model={}
						that.searchData.model.examPaperName = that.exampaper.examPaperName
						// 判断名字是否重复
						this.$http.post('/msbd/getAllExampaper', that.searchData).then(res => {
							if (res.data.code == 200) {
								if(res.data.content.list.length==0){
									
									that.$http.post('/msbd/addExampaper', that.exampaper).then(res => {
										if (res.data.code == 200) {
											this.$log(res)
											this.$infoMsg('添加成功')
											// 邮件通知  如果是普通用户则通知到各个管理员  管理员用户自己添加不需要通知 只需要跳转到审核首页即可
											if (!this.$superAdminMode) {
												emailUtil.sendNormalEmailToAllAdmin('新试卷待审核', that.exampaper.userRealName+':我在'+that.exampaper.questionJobTypeName + '岗位新增一份试卷请尽快审核')
											} else {
												this.$router.push('/')
											}
											//
											this.$router.push('/exampaper')
										} else {
											this.$errMsg('添加失败')
										}
									}).catch(err => {
										this.$log(err)
										this.$errMsg('添加失败')
									})
									
								}else{
									that.$warnMsg('名字被占用')
								}
								this.$log(res.data)
							} else {
								// this.$errMsg('试题所属职位数据加载失败')
							}
						}).catch(err => {
							// this.$errMsg('试题所属职位数据加载失败')
							that.$log(err)
						})
						// delete some date field
						
					}
				});
			},
			getquestionjobtypeList: function() {
				var that = this
				that.searchData.model.isChecked=2
				this.$http.post('/msbd/getAllQuestionjobtype', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.questionjobtypeList = res.data.content.list
						this.exampaper.questionJobTypeId = res.data.content.list[0].id
						this.exampaper.questionJobTypeName = res.data.content.list[0].questionJobTypeName
						this.$log(this.questionjobtypeList)
						this.$log(res.data)
					} else {
						this.$errMsg('试题所属职位数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试题所属职位数据加载失败')
					that.$log(err)
				})
			},
			getbanjiList:function(){
				var that = this
				this.$http.post('/user-server/getAllBanji', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.banjiList = res.data.content.list
						this.exampaper.banjiId = res.data.content.list[0].id
						this.$log(this.banjiList)
						this.$log(res.data)
					} else {
						this.$errMsg('班级数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('班级数据加载失败')
					that.$log(err)
				})
			},
			getschoolList:function(){
				var that = this
				this.$http.post('/user-server/getAllSchool', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.schoolList = res.data.content.list
						this.exampaper.schoolId = res.data.content.list[0].id
						this.$log(this.schoolList)
						this.$log(res.data)
					} else {
						this.$errMsg('学校数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('学校数据加载失败')
					that.$log(err)
				})
			},
			getUserInfo:function(){
				// debugger
				var userId = this.$getCookie('userId')
				if(userId==null||userId==''){
					this.$router.push('/login')
				}else{
					this.$http('/user-server/getUserById/'+userId).then(res=>{
						if(res.data.code==200){
							this.userInfo=res.data.content
							this.$log(this.userInfo)
							// 用户信息自动录入到表单
							this.exampaper.createUserId=this.userInfo.id
							this.exampaper.userHeadPic=this.userInfo.headImg
							this.exampaper.userNickName=this.userInfo.nickName
							this.exampaper.userRealName=this.userInfo.realName
							this.exampaper.companyId=this.userInfo.companyId
						}else{
							this.$router.push('/login')
						}
					})
				}
			},
			toExampaperList: function() {
				this.$router.push('/exampaper')
			}
		},
		mounted: function() {
			this.getUserInfo()
			
			this.getquestionjobtypeList()
			this.getbanjiList()
			this.getschoolList()
			this.exampaper.publicLevel=1
			this.exampaper.isChecked=1
			
			
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

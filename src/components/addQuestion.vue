<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">新增试题数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" class="tm-edit-product-form"> -->
								<div class="form-group mb-3">
									<label for="question">问题</label>
									<input id="question" type="text" v-validate="'required|max:80|min:5'" name="问题" v-model="question.question"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionJobTypeId">问题所属得岗位类型id</label>
									<select @change="questionJobTypeIdChanged(question.questionJobTypeId)" v-validate="'required'" v-model="question.questionJobTypeId"
									 class="custom-select tm-select-accounts" id="questionJobTypeId">
										<option v-for="(item,index) in questionjobtypeList" :value="item.id">{{item.questionJobTypeName}}</option>
									</select>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="questionJobTypeName">问题所属得岗位类型名称</label>
									<input id="questionJobTypeName" type="text" v-validate="''" name="问题所属得岗位类型名称" v-model="question.questionJobTypeName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题所属得岗位类型名称') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionTypeId">问题分类：1选择题 2判断题</label>
									<!-- <input id="questionTypeId" type="text" v-validate="'required'" name="问题分类：1选择题  2判断题" v-model="question.questionTypeId"
									 class="form-control validate" /> -->
									<select @change="questionTypeIdChanged(question.questionTypeId)" v-validate="'required'" v-model="question.questionTypeId"
									 class="custom-select tm-select-accounts" id="questionTypeId">
										<option value="1">选择题</option>
										<option value="2">判断题</option>
										<option value="3">多选题</option>
									</select>
								</div>
								<div class="form-group mb-3">
									<label for="examPaperId">所属试卷id</label>
									<!-- <input id="examPaperId" type="text" v-validate="'required'" name="所属试卷id" v-model="question.examPaperId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('所属试卷id') }}</span> -->
									<select v-validate="''" v-model="question.examPaperId" class="custom-select tm-select-accounts" id="examPaperId">
										<option @click="setExampaperName(item)" v-for="(item,index) in exampaperList" :value="item.id">{{item.examPaperName}}</option>
									</select>
								</div>

								<div class="form-group mb-3">
									<label for="answer">答案</label>
									<input id="answer" type="text" v-validate="'required'" name="答案" v-model="question.answer" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('答案') }}</span>
								</div>


								<div class="form-group mb-3">
									<label for="explaination">题目解析</label>
									<!-- <input id="explaination" type="text" v-validate="'required'" name="题目解析" v-model="question.explaination" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析') }}</span> -->
									<!-- <textarea class="form-control validate tm-small" rows="5" name="详细解释" v-validate="'required'" required>{{question.explaination}}</textarea> -->

									<textarea class="form-control validate tm-small" rows="5" name="题目解析" v-model="question.explaination"
									 v-validate="'required'" required></textarea>
									<span class="validateErrorSpan">{{ errors.first('题目解析') }}</span>
								</div>
								<!-- <div class="form-group mb-3">
									<label for="explainationImg1">题目解析配图1</label>
									<input id="explainationImg1" type="text" v-validate="'required'" name="题目解析配图1" v-model="question.explainationImg1"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析配图1') }}</span>
								</div> -->
								<!-- <div class="form-group mb-3">
									<label for="explainationImg2">题目解析配图2</label>
									<input id="explainationImg2" type="text" v-validate="'required'" name="题目解析配图2" v-model="question.explainationImg2"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析配图2') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="explainationImg3">题目解析配图3</label>
									<input id="explainationImg3" type="text" v-validate="'required'" name="题目解析配图3" v-model="question.explainationImg3"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析配图3') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="explainationImg4">题目解析配图4</label>
									<input id="explainationImg4" type="text" v-validate="'required'" name="题目解析配图4" v-model="question.explainationImg4"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析配图4') }}</span>
								</div> -->
								<div class="form-group mb-3">
									<label for="optionA">选项A</label>
									<input @change="validEachOption(question.optionA,$event)" id="optionA" type="text" v-validate="'required|max:100'"
									 name="选项A" v-model="question.optionA" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('选项A') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="optionB">选项B</label>
									<input id="optionB" type="text" v-validate="'required|max:100'" name="选项B" v-model="question.optionB" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('选项B') }}</span>
								</div>
								<div v-if="question.questionTypeId==1||question.questionTypeId==3" class="form-group mb-3">
									<label for="optionC">选项C</label>
									<input id="optionC" type="text" v-validate="'required|max:100'" name="选项C" v-model="question.optionC" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('选项C') }}</span>
								</div>
								<div v-if="question.questionTypeId==1||question.questionTypeId==3" class="form-group mb-3">
									<label for="optionD">选项D</label>
									<input id="optionD" type="text" v-validate="'required|max:100'" name="选项D" v-model="question.optionD" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('选项D') }}</span>
								</div>
								<div v-if="question.questionTypeId!=3" class="form-group mb-3">
									<label for="rightOption">正确选项</label>
									<!-- <input id="rightOption" type="text" v-validate="'required'" name="正确选项" v-model="question.rightOption" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('正确选项') }}</span> -->
									<select @change="rightOptionChanged(question.rightOption)" v-validate="'required'" v-model="question.rightOption"
									 class="custom-select tm-select-accounts" id="questionTypeId">
										<option value="A">A</option>
										<option value="B">B</option>
										<option v-if="question.questionTypeId==1" value="C">C</option>
										<option v-if="question.questionTypeId==1" value="D">D</option>
									</select>
								</div>
								<div v-if="question.questionTypeId==3" class="form-group mb-3">
									<label for="rightOption">正确选项</label>
									<input id="rightOption" type="text" v-validate="'required|min:2'" name="正确选项" v-model="question.rightOption"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('正确选项') }}</span>
									<!-- <select @change="rightOptionChanged(question.rightOption)" v-validate="'required'" v-model="question.rightOption"
									 class="custom-select tm-select-accounts" id="questionTypeId">
										<option value="A">A</option>
										<option value="B">B</option>
										<option v-if="question.questionTypeId==1" value="C">C</option>
										<option v-if="question.questionTypeId==1" value="D">D</option>
									</select> -->
								</div>
								<!-- <div class="form-group mb-3">
									<label for="questionImg1">问题配图1</label>
									<input id="questionImg1" type="text" v-validate="'required'" name="问题配图1" v-model="question.questionImg1"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题配图1') }}</span>
								</div> -->
								<!-- <div class="form-group mb-3">
									<label for="questionImg2">问题配图2</label>
									<input id="questionImg2" type="text" v-validate="'required'" name="问题配图2" v-model="question.questionImg2"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题配图2') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionImg3">问题配图3</label>
									<input id="questionImg3" type="text" v-validate="'required'" name="问题配图3" v-model="question.questionImg3"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题配图3') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionImg4">问题配图4</label>
									<input id="questionImg4" type="text" v-validate="'required'" name="问题配图4" v-model="question.questionImg4"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题配图4') }}</span>
								</div> -->
								<div class="form-group mb-3">
									<label for="fullExplaination">详细解释</label>
									<!-- <input id="fullExplaination" type="text" v-validate="'required'" name="详细解释" v-model="question.fullExplaination"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释') }}</span> -->
									<textarea class="form-control validate tm-small" rows="5" name="详细解释" v-validate="'required'" v-model="question.fullExplaination"
									 required></textarea>
									<span class="validateErrorSpan">{{ errors.first('详细解释') }}</span>
								</div>
								<!-- <div class="form-group mb-3">
									<label for="fullExplainationImg1">详细解释配图1</label>
									<input id="fullExplainationImg1" type="text" v-validate="'required'" name="详细解释配图1" v-model="question.fullExplainationImg1"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释配图1') }}</span>
								</div> -->
								<!-- <div class="form-group mb-3">
									<label for="fullExplainationImg2">详细解释配图2</label>
									<input id="fullExplainationImg2" type="text" v-validate="'required'" name="详细解释配图2" v-model="question.fullExplainationImg2"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释配图2') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="fullExplainationImg3">详细解释配图3</label>
									<input id="fullExplainationImg3" type="text" v-validate="'required'" name="详细解释配图3" v-model="question.fullExplainationImg3"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释配图3') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="fullExplainationImg4">详细解释配图4</label>
									<input id="fullExplainationImg4" type="text" v-validate="'required'" name="详细解释配图4" v-model="question.fullExplainationImg4"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释配图4') }}</span>
								</div> -->

								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserId">试题创建人id</label>
									<input id="createUserId" type="text" v-validate="'required'" name="试题创建人id" v-model="question.createUserId"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建人id') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserHeadPic">试题创建人头像</label>
									<input id="createUserHeadPic" type="text" v-validate="'required'" name="试题创建人头像" v-model="question.createUserHeadPic"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建人头像') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserRealName">试题创建人真实姓名</label>
									<input id="createUserRealName" type="text" v-validate="'required'" name="试题创建人真实姓名" v-model="question.createUserRealName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建人真实姓名') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createUserNickName">试题创建人昵称</label>
									<input id="createUserNickName" type="text" v-validate="'required'" name="试题创建人昵称" v-model="question.createUserNickName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建人昵称') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="commentNum">试题评论数</label>
									<input id="commentNum" type="text" v-validate="''" name="试题评论数" v-model="question.commentNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题评论数') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="isChecked">是否审核通过 1未通过 2已通过</label>
									<input id="isChecked" type="text" v-validate="'required'" name="是否审核通过 1未通过 2已通过" v-model="question.isChecked"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('是否审核通过 1未通过 2已通过') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserId">审核人id</label>
									<input id="checkUserId" type="text" v-validate="''" name="审核人id" v-model="question.checkUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人id') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserRealName">审核人真实姓名</label>
									<input id="checkUserRealName" type="text" v-validate="''" name="审核人真实姓名" v-model="question.checkUserRealName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人真实姓名') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkUserNickName">审核人昵称</label>
									<input id="checkUserNickName" type="text" v-validate="''" name="审核人昵称" v-model="question.checkUserNickName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人昵称') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="checkDate">审核时间</label>
									<input id="checkDate" type="text" v-validate="''" name="审核时间" v-model="question.checkDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核时间') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="createDate">试题创建时间</label>
									<input id="createDate" type="text" v-validate="''" name="试题创建时间" v-model="question.createDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建时间') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="answeredNum">被回答次数</label>
									<input id="answeredNum" type="text" v-validate="''" name="被回答次数" v-model="question.answeredNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('被回答次数') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="viewNum">浏览次数</label>
									<input id="viewNum" type="text" v-validate="''" name="浏览次数" v-model="question.viewNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('浏览次数') }}</span>
								</div>
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="answerIsFalseNum">回答错误的次数</label>
									<input id="answerIsFalseNum" type="text" v-validate="''" name="回答错误的次数" v-model="question.answerIsFalseNum"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('回答错误的次数') }}</span>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
								<!--  -->
								<div class="tm-product-img-dummy mx-auto">
									<img style="height: 100%;width: 100%;" v-if="question.questionImg1!=0" :src="question.questionImg1" alt="Product image"
									 class="img-fluid d-block mx-auto">
									<i v-show="question.questionImg1==''" class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('questionImg1').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" id="questionImg1" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="上传问题配图1" onclick="document.getElementById('questionImg1').click();" />
								</div>
								<!--  -->
								<div class="tm-product-img-dummy mx-auto">
									<img style="height: 100%;width: 100%;" v-if="question.explainationImg1!=0" :src="question.explainationImg1"
									 alt="Product image" class="img-fluid d-block mx-auto">
									<i v-show="question.explainationImg1==''" class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('explainationImg1').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" id="explainationImg1" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="上传题目解析配图1" onclick="document.getElementById('explainationImg1').click();" />
								</div>
								<!--  -->
								<div class="tm-product-img-dummy mx-auto">
									<img style="height: 100%;width: 100%;" v-if="question.fullExplainationImg1!=0" :src="question.fullExplainationImg1"
									 alt="Product image" class="img-fluid d-block mx-auto">
									<i v-show="question.fullExplainationImg1==''" class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('fullExplainationImg1').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input @change="addImage" id="fullExplainationImg1" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="上传详细解释配图1" onclick="document.getElementById('fullExplainationImg1').click();" />
								</div>
							</div>
							<div class="col-12">
								<button @click="addQuestion" class="btn btn-primary btn-block text-uppercase">确认添加</button>
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
		name: 'addQuestion',
		data() {
			return {
				question: {
					id: '',
					question: '',
					answer: '见解析',
					questionTypeId: '',
					questionJobTypeId: '',
					questionJobTypeName: '',
					explaination: '暂无',
					explainationImg1: '',
					explainationImg2: '',
					explainationImg3: '',
					explainationImg4: '',
					optionA: '',
					optionB: '',
					optionC: '',
					optionD: '',
					rightOption: '',
					questionImg1: '',
					questionImg2: '',
					questionImg3: '',
					questionImg4: '',
					fullExplaination: '',
					fullExplainationImg1: '',
					fullExplainationImg2: '',
					fullExplainationImg3: '',
					fullExplainationImg4: '',
					examPaperId: '',
					examPaperName: '',
					createUserId: '',
					createUserHeadPic: '',
					createUserRealName: '',
					createUserNickName: '',
					commentNum: '',
					isChecked: '',
					checkUserId: '',
					checkUserRealName: '',
					checkUserNickName: '',
					checkDate: '',
					createDate: '',
					answeredNum: '',
					viewNum: '',
					answerIsFalseNum: '',
				},
				questionjobtypeList: [],
				exampaperList: [],
				searchData: {
					"model": {

					},
					"orderParams": [

					],
					"pageNum": 1,
					"pageSize": 1000
				}
			}
		},
		methods: {
			addQuestion: function() {
				// 校验试题为选择题类型时  cd选项为空的问题
				if (this.question.questionTypeId == 1) {
					if (this.question.optionC == '' || this.question.optionD == '') {
						this.$warnMsg('选择题类型，选项CD未必填')
						return
					}
				}

				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						console.log(that.question)
						// debugger
						// delete some date field
						this.$http.post('/msbd/addQuestion', that.question).then(res => {
							if (res.data.code == 200) {
								this.$log(res)
								this.$infoMsg('添加成功')

								// 邮件通知  如果是普通用户则通知到各个管理员  管理员用户自己添加不需要通知 只需要跳转到审核首页即可
								if (!this.$superAdminMode) {
									emailUtil.sendNormalEmailToAllAdmin('新试题待审核', that.question.createUserRealName+':我在'+that.question.questionJobTypeName + '岗位新增一题请尽快审核')
								} else {
									this.$router.push('/')
								}
								//

								this.$router.push('/question')
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
									this.question[e.target.id] = res.data.content
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
				that.searchData.model.isChecked = 2
				this.$http.post('/msbd/getAllQuestionjobtype', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.questionjobtypeList = res.data.content.list
						this.question.questionJobTypeId = res.data.content.list[0].id
						this.question.questionJobTypeName = res.data.content.list[0].questionJobTypeName
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
			getExampaperList: function() {
				var that = this
				if (this.$superAdminMode == false) { // 如果不是超级管理员模式  那么用户只能看见自己所属公司创建的数据  但是只能修改自己创建的
					that.searchData.model.companyId = that.$getCookie('companyId')
				} else {
					delete that.searchData.model.companyId
				}
				this.$http.post('/msbd/getAllExampaper', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.exampaperList = res.data.content.list
						// this.question.examPaperId = res.data.content.list[0].id
						// 清空查询条件数据 以免对其他地方产生影响
						this.searchData.model = {}
						this.$log(this.exampaperList)
						this.$log(res.data)
					} else {
						this.$errMsg('试卷数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试卷数据加载失败')
					console.log(err)
				})
			},
			questionJobTypeIdChanged: function(questionJobTypeId) {
				// console.log(questionJobTypeId)
				this.$http('/msbd/getQuestionjobtypeById/' + questionJobTypeId).then(res => {
					this.$log(res.data)
					if (res.data.code == 200) {
						this.question.questionJobTypeName = res.data.content.questionJobTypeName
					} else {

					}

				})
			},
			validEachOption: function(optionVal, e) {
				// console.log(e.target.id)
				// var res = ''
				// var targetIdStr = e.target.id+''
				// var option = targetIdStr.charAt(targetIdStr.length - 1)
				// if(optionVal.charAt(0)!=option){
				// 	res = option+','+optionVal
				// }else{
				// 	res = optionVal
				// }
				// this.question[targetIdStr]=res
			},
			setExampaperName:function(item){
				this.question.examPaperName = item.examPaperName
			},
			questionTypeIdChanged: function(questionJobTypeId) {
				if (questionJobTypeId != 1) {
					this.question.optionA = '正确'
					this.question.optionB = '错误'
					this.question.optionC = '判断题C选项无效'
					this.question.optionD = '判断题D选项无效'
				} else {
					this.question.optionA = ''
					this.question.optionB = ''
					this.question.optionC = ''
					this.question.optionD = ''
				}
			},
			rightOptionChanged: function(rgtOpt) {
				// console.log(rgtOpt)
				// this.question.optionA.replace('*#1002', "")
				// this.question.optionB.replace('*#1002', "")
				// this.question.optionC.replace('*#1002', "")
				// this.question.optionD.replace('*#1002', "")
				// switch (rgtOpt) {
				// 	case 'A':
				// 		this.question.optionA += '*#1002'
				// 		break;
				// 	case 'B':
				// 		this.question.optionB += '*#1002'
				// 		break;
				// 	case 'C':
				// 		this.question.optionC += '*#1002'
				// 		break;
				// 	case 'D':
				// 		this.question.optionD += '*#1002'
				// 		break;
				// 	default:
				// 		break;
				// }
			}
		},
		mounted: function() {
			this.question.questionTypeId = 1
			this.question.isChecked = 1
			this.question.rightOption = 'A'
			// need fix  must to get the newest user  info
			this.question.createUserHeadPic = this.$getCookie('headImg')
			this.question.createUserRealName = this.$getCookie('realName')
			this.question.createUserNickName = this.$getCookie('nickName')
			this.question.createUserId = this.$getCookie('userId')
			this.getquestionjobtypeList()
			this.getExampaperList()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

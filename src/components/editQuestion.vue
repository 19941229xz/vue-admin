<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">编辑试题数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" method="post" class="tm-edit-product-form"> -->
								                                                                                                                                <div class="form-group mb-3">
									<label for="question">问题</label>
									<input id="question" type="text" v-validate="'required'" name="问题" v-model="question.question" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="answer">答案</label>
									<input id="answer" type="text" v-validate="'required'" name="答案" v-model="question.answer" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('答案') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionTypeId">问题分类：1选择题  2判断题</label>
									<input id="questionTypeId" type="text" v-validate="'required'" name="问题分类：1选择题  2判断题" v-model="question.questionTypeId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题分类：1选择题  2判断题') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionJobTypeId">问题所属得岗位类型id</label>
									<input id="questionJobTypeId" type="text" v-validate="'required'" name="问题所属得岗位类型id" v-model="question.questionJobTypeId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题所属得岗位类型id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="explaination">题目解析</label>
									<input id="explaination" type="text" v-validate="'required'" name="题目解析" v-model="question.explaination" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="explainationImg1">题目解析配图1</label>
									<input id="explainationImg1" type="text" v-validate="'required'" name="题目解析配图1" v-model="question.explainationImg1" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析配图1') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="explainationImg2">题目解析配图2</label>
									<input id="explainationImg2" type="text" v-validate="'required'" name="题目解析配图2" v-model="question.explainationImg2" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析配图2') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="explainationImg3">题目解析配图3</label>
									<input id="explainationImg3" type="text" v-validate="'required'" name="题目解析配图3" v-model="question.explainationImg3" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析配图3') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="explainationImg4">题目解析配图4</label>
									<input id="explainationImg4" type="text" v-validate="'required'" name="题目解析配图4" v-model="question.explainationImg4" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('题目解析配图4') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="optionA">选项A</label>
									<input id="optionA" type="text" v-validate="'required'" name="选项A" v-model="question.optionA" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('选项A') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="optionB">选项B</label>
									<input id="optionB" type="text" v-validate="'required'" name="选项B" v-model="question.optionB" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('选项B') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="optionC">选项C</label>
									<input id="optionC" type="text" v-validate="'required'" name="选项C" v-model="question.optionC" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('选项C') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="optionD">选项D</label>
									<input id="optionD" type="text" v-validate="'required'" name="选项D" v-model="question.optionD" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('选项D') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="rightOption">正确选项</label>
									<input id="rightOption" type="text" v-validate="'required'" name="正确选项" v-model="question.rightOption" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('正确选项') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionImg1">问题配图1</label>
									<input id="questionImg1" type="text" v-validate="'required'" name="问题配图1" v-model="question.questionImg1" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题配图1') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionImg2">问题配图2</label>
									<input id="questionImg2" type="text" v-validate="'required'" name="问题配图2" v-model="question.questionImg2" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题配图2') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionImg3">问题配图3</label>
									<input id="questionImg3" type="text" v-validate="'required'" name="问题配图3" v-model="question.questionImg3" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题配图3') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionImg4">问题配图4</label>
									<input id="questionImg4" type="text" v-validate="'required'" name="问题配图4" v-model="question.questionImg4" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题配图4') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="fullExplaination">详细解释</label>
									<input id="fullExplaination" type="text" v-validate="'required'" name="详细解释" v-model="question.fullExplaination" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="fullExplainationImg1">详细解释配图1</label>
									<input id="fullExplainationImg1" type="text" v-validate="'required'" name="详细解释配图1" v-model="question.fullExplainationImg1" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释配图1') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="fullExplainationImg2">详细解释配图2</label>
									<input id="fullExplainationImg2" type="text" v-validate="'required'" name="详细解释配图2" v-model="question.fullExplainationImg2" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释配图2') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="fullExplainationImg3">详细解释配图3</label>
									<input id="fullExplainationImg3" type="text" v-validate="'required'" name="详细解释配图3" v-model="question.fullExplainationImg3" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释配图3') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="fullExplainationImg4">详细解释配图4</label>
									<input id="fullExplainationImg4" type="text" v-validate="'required'" name="详细解释配图4" v-model="question.fullExplainationImg4" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('详细解释配图4') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="examPaperId">所属试卷id</label>
									<input id="examPaperId" type="text" v-validate="'required'" name="所属试卷id" v-model="question.examPaperId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('所属试卷id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="createUserId">试题创建人id</label>
									<input id="createUserId" type="text" v-validate="'required'" name="试题创建人id" v-model="question.createUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建人id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="createUserHeadPic">试题创建人头像</label>
									<input id="createUserHeadPic" type="text" v-validate="'required'" name="试题创建人头像" v-model="question.createUserHeadPic" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建人头像') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="createUserRealName">试题创建人真实姓名</label>
									<input id="createUserRealName" type="text" v-validate="'required'" name="试题创建人真实姓名" v-model="question.createUserRealName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建人真实姓名') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="createUserNickName">试题创建人昵称</label>
									<input id="createUserNickName" type="text" v-validate="'required'" name="试题创建人昵称" v-model="question.createUserNickName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建人昵称') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="commentNum">试题评论数</label>
									<input id="commentNum" type="text" v-validate="'required'" name="试题评论数" v-model="question.commentNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题评论数') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="isChecked">是否审核通过 1未通过 2已通过</label>
									<input id="isChecked" type="text" v-validate="'required'" name="是否审核通过 1未通过 2已通过" v-model="question.isChecked" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('是否审核通过 1未通过 2已通过') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="checkUserId">审核人id</label>
									<input id="checkUserId" type="text" v-validate="'required'" name="审核人id" v-model="question.checkUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="checkUserRealName">审核人真实姓名</label>
									<input id="checkUserRealName" type="text" v-validate="'required'" name="审核人真实姓名" v-model="question.checkUserRealName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人真实姓名') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="checkUserNickName">审核人昵称</label>
									<input id="checkUserNickName" type="text" v-validate="'required'" name="审核人昵称" v-model="question.checkUserNickName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人昵称') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="checkDate">审核时间</label>
									<input id="checkDate" type="text" v-validate="'required'" name="审核时间" v-model="question.checkDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核时间') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="createDate">试题创建时间</label>
									<input id="createDate" type="text" v-validate="'required'" name="试题创建时间" v-model="question.createDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题创建时间') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="answeredNum">被回答次数</label>
									<input id="answeredNum" type="text" v-validate="'required'" name="被回答次数" v-model="question.answeredNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('被回答次数') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="viewNum">浏览次数</label>
									<input id="viewNum" type="text" v-validate="'required'" name="浏览次数" v-model="question.viewNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('浏览次数') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="answerIsFalseNum">回答错误的次数</label>
									<input id="answerIsFalseNum" type="text" v-validate="'required'" name="回答错误的次数" v-model="question.answerIsFalseNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('回答错误的次数') }}</span>
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
									<img src="../../static/img/product-image.jpg" alt="Product image" class="img-fluid d-block mx-auto">
									<img src="http:\/\/placehold.it\/600x600" alt="Product image" class="img-fluid d-block mx-auto">
									<img src="http:\/\/placehold.it\/600x600" alt="Product image" class="img-fluid d-block mx-auto">
									<i class="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('fileInput').click();"></i>
								</div>
								<div class="custom-file mt-3 mb-3">
									<input id="fileInput" type="file" style="display:none;" />
									<input type="button" class="btn btn-primary btn-block mx-auto" value="CHANGE IMAGE NOW" onclick="document.getElementById('fileInput').click();" />
								</div>
							</div>
							<div class="col-12">
								<button @click="saveQuestion" class="btn btn-primary btn-block text-uppercase">保存</button>
								<button @click="toQuestionList" class="btn btn-primary btn-block text-uppercase">返回试题列表</button>
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
		name: 'editQuestion',
		data() {
			return {
				question:{
                	                    id:'',
                                        question:'',
                                        answer:'',
                                        questionTypeId:'',
                                        questionJobTypeId:'',
                                        explaination:'',
                                        explainationImg1:'',
                                        explainationImg2:'',
                                        explainationImg3:'',
                                        explainationImg4:'',
                                        optionA:'',
                                        optionB:'',
                                        optionC:'',
                                        optionD:'',
                                        rightOption:'',
                                        questionImg1:'',
                                        questionImg2:'',
                                        questionImg3:'',
                                        questionImg4:'',
                                        fullExplaination:'',
                                        fullExplainationImg1:'',
                                        fullExplainationImg2:'',
                                        fullExplainationImg3:'',
                                        fullExplainationImg4:'',
                                        examPaperId:'',
                                        createUserId:'',
                                        createUserHeadPic:'',
                                        createUserRealName:'',
                                        createUserNickName:'',
                                        commentNum:'',
                                        isChecked:'',
                                        checkUserId:'',
                                        checkUserRealName:'',
                                        checkUserNickName:'',
                                        checkDate:'',
                                        createDate:'',
                                        answeredNum:'',
                                        viewNum:'',
                                        answerIsFalseNum:'',
                                    },
				itemId:1
			}
		},
		methods:{
			getQuestionById:function(id){
				this.$http('/msbd/getQuestionById/'+id).then(res=>{
					if(res.data.code==200){
						this.question=res.data.content
						this.itemId=res.data.content.id
						this.$log(res)
					}else{
						this.$errMsg('试题数据查询失败')
					}
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('试题数据查询失败')
				})
			},
			saveQuestion:function(){
            this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
				var that = this
				// delete some date field //Todo need  fix
				this.$http.put('/msbd/updateQuestion',that.question).then(res=>{
					if(res.data.code==200){
						this.question=res.data.content
						this.$infoMsg('保存成功')
						this.$log(res)
					}else{
						this.$errMsg('试题数据修改失败')
					}
					this.getQuestionById(this.itemId)
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('试题数据修改失败')
					this.getQuestionById(this.itemId)
				})
                }
                }
                )
			},
			toQuestionList:function(){
				this.$router.push('/question')
			}
		},
		mounted:function(){
			var id = this.$route.query.id
			this.getQuestionById(id)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

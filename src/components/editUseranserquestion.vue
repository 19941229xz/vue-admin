<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">编辑用户答题记录数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" method="post" class="tm-edit-product-form"> -->
								                                                                                                                                <div class="form-group mb-3">
									<label for="questionId">试题id</label>
									<input id="questionId" type="text" v-validate="'required'" name="试题id" v-model="useranserquestion.questionId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionTypeId">试题类型  1选择题（单选） 2判断题 3多选题</label>
									<input id="questionTypeId" type="text" v-validate="'required'" name="试题类型  1选择题（单选） 2判断题 3多选题" v-model="useranserquestion.questionTypeId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题类型  1选择题（单选） 2判断题 3多选题') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionJobTypeId">问题所属得岗位类型id</label>
									<input id="questionJobTypeId" type="text" v-validate="'required'" name="问题所属得岗位类型id" v-model="useranserquestion.questionJobTypeId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题所属得岗位类型id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="answerUserId">答题人id</label>
									<input id="answerUserId" type="text" v-validate="'required'" name="答题人id" v-model="useranserquestion.answerUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('答题人id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="answerDate">答题时间</label>
									<input id="answerDate" type="text" v-validate="'required'" name="答题时间" v-model="useranserquestion.answerDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('答题时间') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="answerIsRight">是否回答正确  1 正确  2错误</label>
									<input id="answerIsRight" type="text" v-validate="'required'" name="是否回答正确  1 正确  2错误" v-model="useranserquestion.answerIsRight" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('是否回答正确  1 正确  2错误') }}</span>
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
								<button @click="saveUseranserquestion" class="btn btn-primary btn-block text-uppercase">保存</button>
								<button @click="toUseranserquestionList" class="btn btn-primary btn-block text-uppercase">返回用户答题记录列表</button>
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
		name: 'editUseranserquestion',
		data() {
			return {
				useranserquestion:{
                	                    id:'',
                                        questionId:'',
                                        questionTypeId:'',
                                        questionJobTypeId:'',
                                        answerUserId:'',
                                        answerDate:'',
                                        answerIsRight:'',
                                    },
				itemId:1
			}
		},
		methods:{
			getUseranserquestionById:function(id){
				this.$http('/msbd/getUseranserquestionById/'+id).then(res=>{
					if(res.data.code==200){
						this.useranserquestion=res.data.content
						this.itemId=res.data.content.id
						this.$log(res)
					}else{
						this.$errMsg('用户答题记录数据查询失败')
					}
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('用户答题记录数据查询失败')
				})
			},
			saveUseranserquestion:function(){
            this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
				var that = this
				// delete some date field //Todo need  fix
				this.$http.put('/msbd/updateUseranserquestion',that.useranserquestion).then(res=>{
					if(res.data.code==200){
						this.useranserquestion=res.data.content
						this.$infoMsg('保存成功')
						this.$log(res)
					}else{
						this.$errMsg('用户答题记录数据修改失败')
					}
					this.getUseranserquestionById(this.itemId)
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('用户答题记录数据修改失败')
					this.getUseranserquestionById(this.itemId)
				})
                }
                }
                )
			},
			toUseranserquestionList:function(){
				this.$router.push('/useranserquestion')
			}
		},
		mounted:function(){
			var id = this.$route.query.id
			this.getUseranserquestionById(id)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

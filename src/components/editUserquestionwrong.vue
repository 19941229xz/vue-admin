<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">编辑用户错题数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" method="post" class="tm-edit-product-form"> -->
								<div class="form-group mb-3">
									<label for="userId">用户id</label>
									<input id="userId" type="text" v-validate="'required'" name="用户id" v-model="userquestionwrong.userId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('用户id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionId">试题id</label>
									<input id="questionId" type="text" v-validate="'required'" name="试题id" v-model="userquestionwrong.questionId"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题id') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="createDate">错题时间</label>
									<input id="createDate" type="text" v-validate="'required'" name="错题时间" v-model="userquestionwrong.createDate"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('错题时间') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="wrongCount">错题次数</label>
									<input id="wrongCount" type="text" v-validate="'required'" name="错题次数" v-model="userquestionwrong.wrongCount"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('错题次数') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionTypeId">试题类型 1选择题 2判断题</label>
									<input id="questionTypeId" type="text" v-validate="'required'" name="试题类型  1选择题 2判断题" v-model="userquestionwrong.questionTypeId"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题类型  1选择题 2判断题') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="questionJobTypeId">试题所属得岗位类型id</label>
									<input id="questionJobTypeId" type="text" v-validate="'required'" name="试题所属得岗位类型id" v-model="userquestionwrong.questionJobTypeId"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试题所属得岗位类型id') }}</span>
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
								<button @click="saveUserquestionwrong" class="btn btn-primary btn-block text-uppercase">保存</button>
								<button @click="toUserquestionwrongList" class="btn btn-primary btn-block text-uppercase">返回用户错题列表</button>
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
		name: 'editUserquestionwrong',
		data() {
			return {
				userquestionwrong: {
					id: '',
					userId: '',
					questionId: '',
					createDate: '',
					wrongCount: '',
					questionTypeId: '',
					questionJobTypeId: '',
				},
				itemId: 1
			}
		},
		methods: {
			getUserquestionwrongById: function(id) {
				this.$http('/msbd/getUserquestionwrongById/' + id).then(res => {
					if (res.data.code == 200) {
						this.userquestionwrong = res.data.content
						this.itemId = res.data.content.id
						this.$log(res)
					} else {
						this.$errMsg('用户错题数据查询失败')
					}
				}).catch(err => {
					this.$log(err)
					this.$errMsg('用户错题数据查询失败')
				})
			},
			saveUserquestionwrong: function() {
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						// delete some date field //Todo need  fix
						this.$http.put('/msbd/updateUserquestionwrong', that.userquestionwrong).then(res => {
							if (res.data.code == 200) {
								this.userquestionwrong = res.data.content
								this.$infoMsg('保存成功')
								this.$log(res)
							} else {
								this.$errMsg('用户错题数据修改失败')
							}
							this.getUserquestionwrongById(this.itemId)
						}).catch(err => {
							this.$log(err)
							this.$errMsg('用户错题数据修改失败')
							this.getUserquestionwrongById(this.itemId)
						})
					}
				})
			},
			toUserquestionwrongList: function() {
				this.$router.push('/userquestionwrong')
			}
		},
		mounted: function() {
			var id = this.$route.query.id
			this.getUserquestionwrongById(id)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

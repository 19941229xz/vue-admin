<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">新增试题所属职位数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-12 col-lg-12 col-md-12">
								<!-- <form action="" class="tm-edit-product-form"> -->
								<div v-show="$superAdminMode" class="form-group mb-3">
									<label for="isChecked">审核状态</label>
									<!-- <input id="isChecked" type="text" v-validate="'required'" name="审核状态" v-model="questionjobtype.isChecked"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核状态') }}</span> -->
									<select class="custom-select" v-model="questionjobtype.isChecked">
										<option value="1">未审核</option>
										<option value="2">已审核</option>
									</select>
								</div>
								<div class="form-group mb-3">
									<label for="questionJobTypeName">问题所属职位名称</label>
									<input id="questionJobTypeName" type="text" v-validate="'required'" name="问题所属职位名称" v-model="questionjobtype.questionJobTypeName"
									 class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('问题所属职位名称') }}</span>
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
								<button @click="addQuestionjobtype" class="btn btn-primary btn-block text-uppercase">确认添加</button>
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
		name: 'addQuestionjobtype',
		data() {
			return {
				questionjobtype: {
					id: '',
					questionJobTypeName: '',
					isChecked:''
				},
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
			addQuestionjobtype: function() {
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						that.searchData.model.questionJobTypeName = that.questionjobtype.questionJobTypeName
						this.$http.post('/msbd/getAllQuestionjobtype', that.searchData).then(res => {
							if (res.data.code == 200 && res.data.content.list.length == 0) {
								// delete some date field
								this.$http.post('/msbd/addQuestionjobtype', that.questionjobtype).then(res => {
									if (res.data.code == 200) {
										this.$log(res)
										this.$infoMsg('添加成功')
										this.$router.push('/questionjobtype')
									} else {
										this.$errMsg('添加失败')
									}
								}).catch(err => {
									this.$log(err)
									this.$errMsg('添加失败')
								})
								this.$log(res.data)
							} else {
								this.$warnMsg('名称已经被占用')
							}
						}).catch(err => {
							this.$warnMsg('名称已经被占用')
							console.log(err)
						})


					}
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">新增试题收藏数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" class="tm-edit-product-form"> -->
								
								                                                                                                                                            <div class="form-group mb-3">
                                        <label for="collectUserId">收藏人id</label>
                                        <input id="collectUserId" type="text" v-validate="'required'" name="收藏人id" v-model="questioncollection.collectUserId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('收藏人id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="questionId">被收藏的试题id</label>
                                        <input id="questionId" type="text" v-validate="'required'" name="被收藏的试题id" v-model="questioncollection.questionId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('被收藏的试题id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="collectDate">收藏时间</label>
                                        <input id="collectDate" type="text" v-validate="'required'" name="收藏时间" v-model="questioncollection.collectDate" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('收藏时间') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="questionTypeId">试题类型  1选择题 2判断题</label>
                                        <input id="questionTypeId" type="text" v-validate="'required'" name="试题类型  1选择题 2判断题" v-model="questioncollection.questionTypeId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('试题类型  1选择题 2判断题') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="questionJobTypeId">问题所属得岗位类型id</label>
                                        <input id="questionJobTypeId" type="text" v-validate="'required'" name="问题所属得岗位类型id" v-model="questioncollection.questionJobTypeId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('问题所属得岗位类型id') }}</span>
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
								<button @click="addQuestioncollection" class="btn btn-primary btn-block text-uppercase">确认添加</button>
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
		name: 'addQuestioncollection',
		data() {
			return {
				questioncollection: {
					
                                        id:'',
                                        collectUserId:'',
                                        questionId:'',
                                        collectDate:'',
                                        questionTypeId:'',
                                        questionJobTypeId:'',
                    				}
			}
		},
		methods: {
			addQuestioncollection: function() {
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						// delete some date field
						this.$http.post('/msbd/addQuestioncollection', that.questioncollection).then(res => {
							if (res.data.code == 200) {
								this.$log(res)
								this.$infoMsg('添加成功')
								this.$router.push('/questioncollection')
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
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>
<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">新增积分记录表数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" class="tm-edit-product-form"> -->
								
								                                                                                                                                            <div class="form-group mb-3">
                                        <label for="changeType">积分变化类型 1消费 2充值 3奖励 4提现</label>
                                        <input id="changeType" type="text" v-validate="'required'" name="积分变化类型 1消费 2充值 3奖励 4提现" v-model="pointslog.changeType" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('积分变化类型 1消费 2充值 3奖励 4提现') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="createDate">创建时间</label>
                                        <input id="createDate" type="text" v-validate="'required'" name="创建时间" v-model="pointslog.createDate" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('创建时间') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="belongUserId">积分所属用户id</label>
                                        <input id="belongUserId" type="text" v-validate="'required'" name="积分所属用户id" v-model="pointslog.belongUserId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('积分所属用户id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="belongUserName">积分所属用户账号</label>
                                        <input id="belongUserName" type="text" v-validate="'required'" name="积分所属用户账号" v-model="pointslog.belongUserName" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('积分所属用户账号') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="belongUserNIckName">积分所属用户昵称</label>
                                        <input id="belongUserNIckName" type="text" v-validate="'required'" name="积分所属用户昵称" v-model="pointslog.belongUserNIckName" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('积分所属用户昵称') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="belongUserRealName">积分所属用户真实姓名</label>
                                        <input id="belongUserRealName" type="text" v-validate="'required'" name="积分所属用户真实姓名" v-model="pointslog.belongUserRealName" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('积分所属用户真实姓名') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="belongUserHeadPic">积分所属用户头像</label>
                                        <input id="belongUserHeadPic" type="text" v-validate="'required'" name="积分所属用户头像" v-model="pointslog.belongUserHeadPic" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('积分所属用户头像') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="consumeType">消费类型 1购买课程 2开通详细解释</label>
                                        <input id="consumeType" type="text" v-validate="'required'" name="消费类型 1购买课程 2开通详细解释" v-model="pointslog.consumeType" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('消费类型 1购买课程 2开通详细解释') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="consumeTypeStr">消费类型解释</label>
                                        <input id="consumeTypeStr" type="text" v-validate="'required'" name="消费类型解释" v-model="pointslog.consumeTypeStr" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('消费类型解释') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="changePoints">积分变化量</label>
                                        <input id="changePoints" type="text" v-validate="'required'" name="积分变化量" v-model="pointslog.changePoints" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('积分变化量') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="buyCourseId">购买的课程id</label>
                                        <input id="buyCourseId" type="text" v-validate="'required'" name="购买的课程id" v-model="pointslog.buyCourseId" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('购买的课程id') }}</span>
                                    </div>
                                                                                                                                            <div class="form-group mb-3">
                                        <label for="buyCourseName">购买的课程的名称</label>
                                        <input id="buyCourseName" type="text" v-validate="'required'" name="购买的课程的名称" v-model="pointslog.buyCourseName" class="form-control validate" />
                                        <span class="validateErrorSpan">{{ errors.first('购买的课程的名称') }}</span>
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
								<button @click="addPointslog" class="btn btn-primary btn-block text-uppercase">确认添加</button>
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
		name: 'addPointslog',
		data() {
			return {
				pointslog: {
					
                                        id:'',
                                        changeType:'',
                                        createDate:'',
                                        belongUserId:'',
                                        belongUserName:'',
                                        belongUserNIckName:'',
                                        belongUserRealName:'',
                                        belongUserHeadPic:'',
                                        consumeType:'',
                                        consumeTypeStr:'',
                                        changePoints:'',
                                        buyCourseId:'',
                                        buyCourseName:'',
                    				}
			}
		},
		methods: {
			addPointslog: function() {
				this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
						var that = this
						// delete some date field
						this.$http.post('/msbd/addPointslog', that.pointslog).then(res => {
							if (res.data.code == 200) {
								this.$log(res)
								this.$infoMsg('添加成功')
								this.$router.push('/pointslog')
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
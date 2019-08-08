<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">编辑试卷数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" method="post" class="tm-edit-product-form"> -->
								                                                                                                                                <div class="form-group mb-3">
									<label for="examPaperName">试卷名称</label>
									<input id="examPaperName" type="text" v-validate="'required'" name="试卷名称" v-model="exampaper.examPaperName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试卷名称') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="createUserId">出题人id</label>
									<input id="createUserId" type="text" v-validate="'required'" name="出题人id" v-model="exampaper.createUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('出题人id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="createDate">命题时间</label>
									<input id="createDate" type="text" v-validate="'required'" name="命题时间" v-model="exampaper.createDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('命题时间') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="userHeadPic">出题人头像</label>
									<input id="userHeadPic" type="text" v-validate="'required'" name="出题人头像" v-model="exampaper.userHeadPic" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('出题人头像') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="userNickName">出题人昵称</label>
									<input id="userNickName" type="text" v-validate="'required'" name="出题人昵称" v-model="exampaper.userNickName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('出题人昵称') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="userRealName">出题人真实姓名</label>
									<input id="userRealName" type="text" v-validate="'required'" name="出题人真实姓名" v-model="exampaper.userRealName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('出题人真实姓名') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="questionJobTypeId">试卷所属得岗位类型id</label>
									<input id="questionJobTypeId" type="text" v-validate="'required'" name="试卷所属得岗位类型id" v-model="exampaper.questionJobTypeId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试卷所属得岗位类型id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="examTime">考试规定时长（单位秒）</label>
									<input id="examTime" type="text" v-validate="'required'" name="考试规定时长（单位秒）" v-model="exampaper.examTime" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('考试规定时长（单位秒）') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="banjiId">试卷所属班级id</label>
									<input id="banjiId" type="text" v-validate="'required'" name="试卷所属班级id" v-model="exampaper.banjiId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试卷所属班级id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="companyId">所属公司id</label>
									<input id="companyId" type="text" v-validate="'required'" name="所属公司id" v-model="exampaper.companyId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('所属公司id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="schoolId">所属学校id</label>
									<input id="schoolId" type="text" v-validate="'required'" name="所属学校id" v-model="exampaper.schoolId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('所属学校id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="publicLevel">试卷可浏览级别 1完全公开 2对学校或公司公开 3只对班级公开</label>
									<input id="publicLevel" type="text" v-validate="'required'" name="试卷可浏览级别 1完全公开 2对学校或公司公开 3只对班级公开" v-model="exampaper.publicLevel" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试卷可浏览级别 1完全公开 2对学校或公司公开 3只对班级公开') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="isChecked">试卷是否审核 1 未审核  2已审核</label>
									<input id="isChecked" type="text" v-validate="'required'" name="试卷是否审核 1 未审核  2已审核" v-model="exampaper.isChecked" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('试卷是否审核 1 未审核  2已审核') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="checkUserId">审核人id</label>
									<input id="checkUserId" type="text" v-validate="'required'" name="审核人id" v-model="exampaper.checkUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="checkDate">审核时间</label>
									<input id="checkDate" type="text" v-validate="'required'" name="审核时间" v-model="exampaper.checkDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核时间') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="checkUserRealName">审核人真实姓名</label>
									<input id="checkUserRealName" type="text" v-validate="'required'" name="审核人真实姓名" v-model="exampaper.checkUserRealName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人真实姓名') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="checkUserNickName">审核人昵称</label>
									<input id="checkUserNickName" type="text" v-validate="'required'" name="审核人昵称" v-model="exampaper.checkUserNickName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('审核人昵称') }}</span>
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
								<button @click="saveExampaper" class="btn btn-primary btn-block text-uppercase">保存</button>
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
	export default {
		name: 'editExampaper',
		data() {
			return {
				exampaper:{
                	                    id:'',
                                        examPaperName:'',
                                        createUserId:'',
                                        createDate:'',
                                        userHeadPic:'',
                                        userNickName:'',
                                        userRealName:'',
                                        questionJobTypeId:'',
                                        examTime:'',
                                        banjiId:'',
                                        companyId:'',
                                        schoolId:'',
                                        publicLevel:'',
                                        isChecked:'',
                                        checkUserId:'',
                                        checkDate:'',
                                        checkUserRealName:'',
                                        checkUserNickName:'',
                                    },
				itemId:1
			}
		},
		methods:{
			getExampaperById:function(id){
				this.$http('/msbd/getExampaperById/'+id).then(res=>{
					if(res.data.code==200){
						this.exampaper=res.data.content
						this.itemId=res.data.content.id
						this.$log(res)
					}else{
						this.$errMsg('试卷数据查询失败')
					}
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('试卷数据查询失败')
				})
			},
			saveExampaper:function(){
            this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
				var that = this
				// delete some date field //Todo need  fix
				this.$http.put('/msbd/updateExampaper',that.exampaper).then(res=>{
					if(res.data.code==200){
						this.exampaper=res.data.content
						this.$infoMsg('保存成功')
						this.$log(res)
					}else{
						this.$errMsg('试卷数据修改失败')
					}
					this.getExampaperById(this.itemId)
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('试卷数据修改失败')
					this.getExampaperById(this.itemId)
				})
                }
                }
                )
			},
			toExampaperList:function(){
				this.$router.push('/exampaper')
			}
		},
		mounted:function(){
			var id = this.$route.query.id
			this.getExampaperById(id)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">编辑试题评论表数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" method="post" class="tm-edit-product-form"> -->
								                                                                                                                                <div class="form-group mb-3">
									<label for="commentContent">评论内容</label>
									<input id="commentContent" type="text" v-validate="'required'" name="评论内容" v-model="questioncomment.commentContent" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('评论内容') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="commentUserId">评论用户id</label>
									<input id="commentUserId" type="text" v-validate="'required'" name="评论用户id" v-model="questioncomment.commentUserId" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('评论用户id') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="commentDate">评论时间</label>
									<input id="commentDate" type="text" v-validate="'required'" name="评论时间" v-model="questioncomment.commentDate" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('评论时间') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="commentUserHeadPic">评论用户头像</label>
									<input id="commentUserHeadPic" type="text" v-validate="'required'" name="评论用户头像" v-model="questioncomment.commentUserHeadPic" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('评论用户头像') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="commentUserNickName">评论用户昵称</label>
									<input id="commentUserNickName" type="text" v-validate="'required'" name="评论用户昵称" v-model="questioncomment.commentUserNickName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('评论用户昵称') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="commentUserRealName">评论用户真实姓名</label>
									<input id="commentUserRealName" type="text" v-validate="'required'" name="评论用户真实姓名" v-model="questioncomment.commentUserRealName" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('评论用户真实姓名') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="commentUserGender">评论用户性别 1男 2女</label>
									<input id="commentUserGender" type="text" v-validate="'required'" name="评论用户性别 1男 2女" v-model="questioncomment.commentUserGender" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('评论用户性别 1男 2女') }}</span>
								</div>
                                                                                                                                <div class="form-group mb-3">
									<label for="favorNum">点赞数</label>
									<input id="favorNum" type="text" v-validate="'required'" name="点赞数" v-model="questioncomment.favorNum" class="form-control validate" />
									<span class="validateErrorSpan">{{ errors.first('点赞数') }}</span>
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
								<button @click="saveQuestioncomment" class="btn btn-primary btn-block text-uppercase">保存</button>
								<button @click="toQuestioncommentList" class="btn btn-primary btn-block text-uppercase">返回试题评论表列表</button>
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
		name: 'editQuestioncomment',
		data() {
			return {
				questioncomment:{
                	                    id:'',
                                        commentContent:'',
                                        commentUserId:'',
                                        commentDate:'',
                                        commentUserHeadPic:'',
                                        commentUserNickName:'',
                                        commentUserRealName:'',
                                        commentUserGender:'',
                                        favorNum:'',
                                    },
				itemId:1
			}
		},
		methods:{
			getQuestioncommentById:function(id){
				this.$http('/msbd/getQuestioncommentById/'+id).then(res=>{
					if(res.data.code==200){
						this.questioncomment=res.data.content
						this.itemId=res.data.content.id
						this.$log(res)
					}else{
						this.$errMsg('试题评论表数据查询失败')
					}
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('试题评论表数据查询失败')
				})
			},
			saveQuestioncomment:function(){
            this.$validator.validate().then(valid => {
					if (!valid) {
						// do stuff if not valid.
						this.$warnMsg('表单参数不正确')
						return
					} else {
				var that = this
				// delete some date field //Todo need  fix
				this.$http.put('/msbd/updateQuestioncomment',that.questioncomment).then(res=>{
					if(res.data.code==200){
						this.questioncomment=res.data.content
						this.$infoMsg('保存成功')
						this.$log(res)
					}else{
						this.$errMsg('试题评论表数据修改失败')
					}
					this.getQuestioncommentById(this.itemId)
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('试题评论表数据修改失败')
					this.getQuestioncommentById(this.itemId)
				})
                }
                }
                )
			},
			toQuestioncommentList:function(){
				this.$router.push('/questioncomment')
			}
		},
		mounted:function(){
			var id = this.$route.query.id
			this.getQuestioncommentById(id)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

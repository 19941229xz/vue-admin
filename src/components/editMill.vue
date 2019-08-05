<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">编辑矿机数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" method="post" class="tm-edit-product-form"> -->
								<div class="form-group mb-3">
									<label for="bitType">币种id</label>
									<input id="bitType" type="text" v-model="mill.bitType"  class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="brand">品牌id</label>
									<input id="brand" type="text" v-model="mill.brand"  class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="hasGPU">是否有显卡（1有 2没有 )</label>
									<input id="hasGPU" type="text" v-model="mill.hasGPU"  class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="isUsed">是否二手（1二手 2新货）</label>
									<input id="isUsed" type="text" v-model="mill.isUsed"  class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="manufactureDate">生产日期</label>
									<input id="manufactureDate" type="text" v-model="mill.manufactureDate"  class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="model">型号id(关联型号表)</label>
									<input id="model" type="text" v-model="mill.model"  class="form-control validate" />
								</div>
								
								<div class="form-group mb-3">
									<label for="num">数量 </label>
									<input id="num" type="text" v-model="mill.num"  class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="orderId">订单号(选填)</label>
									<input id="orderId" type="text" v-model="mill.orderId"  class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="powerContent">电源详情（关联电源表</label>
									<input id="powerContent" type="text" v-model="mill.powerContent"  class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="price">价格</label>
									<input id="price" type="text" v-model="mill.price"  class="form-control validate" />
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
								<button @click="saveMill" class="btn btn-primary btn-block text-uppercase">保存</button>
								<button @click="toMillList" class="btn btn-primary btn-block text-uppercase">返回矿机列表</button>
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
		name: 'editMill',
		data() {
			return {
				mill:{},
				itemId:1
			}
		},
		methods:{
			getMillById:function(id){
				this.$http('/renrenkuang/getMillById/'+id).then(res=>{
					if(res.data.code==200){
						this.mill=res.data.content
						this.itemId=res.data.content.id
						this.$log(res)
					}else{
						this.$errMsg('矿机数据查询失败')
					}
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('矿机数据查询失败')
				})
			},
			saveMill:function(){
				var that = this
				delete that.mill.manufactureDate  //Todo need  fix
				this.$http.put('/renrenkuang/updateMill',that.mill).then(res=>{
					if(res.data.code==200){
						this.mill=res.data.content
						this.$infoMsg('保存成功')
						this.$log(res)
					}else{
						this.$errMsg('矿机数据修改失败')
					}
					this.getMillById(this.itemId)
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('矿机数据修改失败')
					this.getMillById(this.itemId)
				})
			},
			toMillList:function(){
				this.$router.push('/mill')
			}
		},
		mounted:function(){
			var id = this.$route.query.id
			this.getMillById(id)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

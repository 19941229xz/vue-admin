

<template>
	<div class="hello">
		<div class="container tm-mt-big tm-mb-big">
			<div class="row">
				<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
					<div class="tm-bg-primary-dark tm-block tm-block-h-auto">
						<div class="row">
							<div class="col-12">
								<h2 class="tm-block-title d-inline-block">新增矿机数据</h2>
							</div>
						</div>
						<div class="row tm-edit-product-row">
							<div class="col-xl-6 col-lg-6 col-md-12">
								<!-- <form action="" class="tm-edit-product-form"> -->
								<div class="form-group mb-3">
									<label for="bitType">币种id</label>
									<input id="bitType" type="text" v-validate="'required|email'" name="mill.bitType" v-model="mill.bitType" class="form-control validate" />
                  <span style="background:red;width:250px;">{{ errors.first('mill.bitType') }}</span>
								</div>
								<div class="form-group mb-3">
									<label for="brand">品牌id</label>
									<input id="brand" type="text" v-model="mill.brand" class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="hasGPU">是否有显卡（1有 2没有 )</label>
									<input id="hasGPU" type="text" v-model="mill.hasGPU" class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="isUsed">是否二手（1二手 2新货）</label>
									<input id="isUsed" type="text" v-model="mill.isUsed" class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="manufactureDate">生产日期</label>
									<input id="manufactureDate" type="text" v-model="mill.manufactureDate" class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="model">型号id(关联型号表)</label>
									<input id="model" type="text" v-model="mill.model" class="form-control validate" />
								</div>

								<div class="form-group mb-3">
									<label for="num">数量 </label>
									<input id="num" type="text" v-model="mill.num" class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="orderId">订单号(选填)</label>
									<input id="orderId" type="text" v-model="mill.orderId" class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="powerContent">电源详情（关联电源表</label>
									<input id="powerContent" type="text" v-model="mill.powerContent" class="form-control validate" />
								</div>
								<div class="form-group mb-3">
									<label for="price">价格</label>
									<input id="price" type="text" v-model="mill.price" class="form-control validate" />
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
								<button @click="addMill" class="btn btn-primary btn-block text-uppercase">确认添加</button>
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
		name: 'addMill',
		data() {
			return {
				mill: {
					"brand": 1,
					"model": 1,
					"powerContent": 1,
					"orderId": 23123123,
					"price": 2000,
					"bitType": 1,
					"hasGPU": 1,
					"manufactureDate": "2019-08-04T02:28:21.000+0000",
					"num": 10,
					"isUsed": 1
				}
			}
		},
		methods:{
			addMill:function(){
				var that = this
				delete this.mill.manufactureDate
				this.$http.post('/renrenkuang/addMill',that.mill).then(res=>{
					if(res.data.code==200){
						this.$log(res)
						this.$infoMsg('添加成功')
						this.$router.push('/mill')
					}else{
						this.$errMsg('添加失败')
					}
				}).catch(err=>{
					this.$log(err)
					this.$errMsg('添加失败')
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/jquery-ui-datepicker/jquery-ui.min.css");
</style>

<template>
	<div class="hello">
		<div class="container mt-5">
			<div class="row tm-content-row">
				<div class="col-sm-12 ">
					<div class="tm-bg-primary-dark tm-block tm-block-products">
						<div @scroll="scroll($event)" class="tm-product-table-container">
							<table class="table table-hover tm-table-small tm-product-table">
								<thead>
									<tr>
										<th scope="col">&nbsp;</th>
										<th scope="col">币种id </th>
										<th scope="col">品牌id（关联品牌表）</th>
										<th scope="col">是否有显卡</th>
										<th scope="col">是否二手（1二手 2新货</th>
										<th scope="col">生产日期 </th>
										<th scope="col">型号id(关联型号表)</th>
										<th scope="col">数量</th>
										<th scope="col">订单号</th>
										<th scope="col">电源详情（关联电源表）</th>
										<th scope="col">价格</th>
										<th scope="col">&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in millList">
										<th scope="row"><input type="checkbox" v-model="checkedItem" :value="item.id" /></th>
										<td @click="editItem(item)">{{item.bitType}}</td>
										<td @click="editItem(item)">{{item.brand}}</td>
										<td @click="editItem(item)">{{item.hasGPU}}</td>
										<td @click="editItem(item)">{{item.isUsed}}</td>
										<td @click="editItem(item)">{{item.manufactureDate | dateformat}}</td>
										<td @click="editItem(item)">{{item.model}}</td>
										<td @click="editItem(item)">{{item.num}}</td>
										<td @click="editItem(item)">{{item.orderId}}</td>
										<td @click="editItem(item)">{{item.powerContent}}</td>
										<td @click="editItem(item)">{{item.price}}</td>
										<td>
											<a @click="deleteItem(item)" class="tm-product-delete-link">
												<i class="far fa-trash-alt tm-product-delete-icon"></i>
											</a>
										</td>
									</tr>

								</tbody>
							</table>

						</div>
						<!-- table container -->
						<!-- <a class="btn btn-primary btn-block text-uppercase mb-3" @click="addMill">添加矿机</a> -->
						<button @click="addMill" class="btn btn-primary btn-block text-uppercase">
							添加矿机
						</button>
						<button @click="batchDelete" class="btn btn-primary btn-block text-uppercase">
							批量删除
						</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	// import layer from '../../static/js/layer.js'
	export default {
		name: 'mill',
		data() {
			return {
				millList: [],
				checkedItem: [],
				searchData: {
					"model": {

					},
					"orderParams": [

					],
					"pageNum": 1,
					"pageSize": 10
				},
				isLastPage: false,
				scrollTop: 1
			}
		},
		methods: {
			refreshItemList: function() {
				this.searchData.pageNum = 1
				this.isLastPage = false
				this.getMillList()
			},
			getMoreMillList: function() {
				var that = this
				that.searchData.pageNum++
				if (this.isLastPage) {
					return
				}
				this.$http.post('/renrenkuang/getAllMill', that.searchData).then(res => {
					if (res.data.code == 200) {
						if (!res.data.content.isLastPage) {
							this.millList = this.millList.concat(res.data.content.list)
						} else {
							this.$infoMsg('没有更多数据')
							this.isLastPage = true
						}
						this.$log(this.millList)
					} else {
						this.$errMsg('矿机数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('矿机数据加载失败')
					console.log(err)
				})
			},
			getMillList: function() {
				var that = this
				this.$http.post('/renrenkuang/getAllMill', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.millList = res.data.content.list
						this.$log(this.millList)
						this.$log(res.data)
					} else {
						this.$errMsg('矿机数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('矿机数据加载失败')
					console.log(err)
				})
			},
			scroll: function(e) {
				// this.$log('scroll')
				// this.$log(e.srcElement)
				// this.$log(e.srcElement.scrollTop)
				// this.$log(e.srcElement.offsetHeight)
				// this.$log(e.srcElement.scrollHeight)
				var scrollTop = e.srcElement.scrollTop
				this.scrollTop = scrollTop
				var offsetHeight = e.srcElement.offsetHeight
				var scrollHeight = e.srcElement.scrollHeight
				// scrollTop=0 在顶部  scrollTop=scrollHeight-offsetHeight 在底部
				if (scrollTop < 0.1) { // 出发刷新事件
					this.refreshItemList
				} else if (scrollTop + 0.5 > scrollHeight - offsetHeight) {
					this.getMoreMillList()
				}
				// if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
				// 	//当前盒子的滚动高度+当前盒子绝对高度>当前盒子可滚动高度-100px时，加载更多
				// 	this.$log('scroll reach the bottom')
				// }

				// this.getMoreMillList()
			},
			editItem: function(item) {
				this.$log(item.id)
				this.$router.push({
					path: '/editMill',
					query: {
						id: item.id
					}
				})
			},
			addMill: function() {
				this.$router.push('addMill')
			},
			deleteItem: function(item) {
				this.$http('/renrenkuang/removeMillById/' + item.id).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.getMillList()
					} else {
						this.$errMsg('删除失败')
					}
				}).catch(err => {
					this.$errMsg('删除失败')
					console.log(err)
				})
			},
			batchDelete: function() {
				if (this.checkedItem.length == 0) {
					this.$log(this.checkedItem)
					this.$warnMsg('未选择要删除得数据')
					return
				}
				var that = this
				this.$http.post('/renrenkuang/batchDeleteMillByIds', that.checkedItem).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('批量删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.checkedItem = []
						this.getMillList()
					} else {
						this.$errMsg('批量删除失败')
					}
				}).catch(err => {
					this.$errMsg('批量删除失败')
					console.log(err)
				})
			}

		},
		filters: {
			dateformat: function(val) {
				var dateee = new Date(val).toJSON();
				var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
				return date
			}
		},
		watch: {
			scrollTop: function() {
				if (this.scrollTop == 0) { // 触发下拉刷新事件
					this.refreshItemList()
				}
			}
		},
		mounted: function() {
			this.getMillList()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

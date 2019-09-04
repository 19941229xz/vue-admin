<template>
	<div class="hello">
		<div class="container mt-5">
			<div class="row tm-content-row">
				<div class="col-sm-12">
					<input class="superSearch inp" type="text" v-model="superSearchKeyWord" placeholder="高级检索..." />
				</div>
			</div>
			<div class="row tm-content-row">
				<div class="col-sm-12 ">
					<div class="tm-bg-primary-dark tm-block tm-block-products">
						<div @scroll="scroll($event)" class="tm-product-table-container">
							<table class="table table-hover tm-table-small tm-product-table">
								<thead>
									<tr>
										<th scope="col">&nbsp;</th>


										<!-- <th scope="col">主键 </th> -->
										<th scope="col">课程名称 </th>
										<!-- <th scope="col">课程介绍图片1 </th>
										<th scope="col">课程介绍图片2 </th>
										<th scope="col">课程介绍图片3 </th>
										<th scope="col">课程介绍图片4 </th> -->
										<th scope="col">所需积分 </th>
										<th scope="col">创建人id </th>
										<th scope="col">创建人真实姓名 </th>
										<!-- <th scope="col">创建人昵称 </th> -->
										<th scope="col">审核人账号 </th>
										<th scope="col">创建时间 </th>
										<!-- <th scope="col">审核人id </th> -->
										<th scope="col">审核人真实姓名 </th>
										<!-- <th scope="col">审核人昵称 </th> -->
										<!-- <th scope="col">审核人账号 </th> -->
										<th scope="col">状态1未审核2已审核 </th>
										<!-- <th scope="col">审核时间 </th> -->
										<!-- <th scope="col">网盘下载链接 </th> -->
										<!-- <th scope="col">网盘下载密码 </th> -->
										<!-- <th scope="col">课程二维码 </th> -->
										<th scope="col">浏览次数 </th>
										<th scope="col">购买次数 </th>
										<!-- <th scope="col">长按识别次数 </th> -->
										<!-- <th scope="col">备注 </th> -->
										<th scope="col">&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in courseList">
										<th  v-show="$superAdminMode" scope="row"><input type="checkbox" v-model="checkedItem" :value="item.id" /></th>
										<th v-show="!$superAdminMode" scope="row">&nbsp;</th>

										<!-- <td @click="editItem(item)">{{item.id}}</td> -->

										<td @click="editItem(item)">{{item.courseName}}</td>

										<!-- <td @click="editItem(item)">{{item.coursePic1}}</td>

										<td @click="editItem(item)">{{item.coursePic2}}</td>

										<td @click="editItem(item)">{{item.coursePic3}}</td>

										<td @click="editItem(item)">{{item.coursePic4}}</td> -->

										<td @click="editItem(item)">{{item.pointsNeed}}</td>

										<td @click="editItem(item)">{{item.createUserId}}</td>

										<td @click="editItem(item)">{{item.createUserRealName}}</td>

										<!-- <td @click="editItem(item)">{{item.createUserNickName}}</td> -->

										<td @click="editItem(item)">{{item.createUserName}}</td>

										<td @click="editItem(item)">{{item.createDate}}</td>

										<!-- <td @click="editItem(item)">{{item.checkUserId}}</td> -->

										<td @click="editItem(item)">{{item.checkUserRealName}}</td>

										<!-- <td @click="editItem(item)">{{item.checkUserNickName}}</td> -->

										<!-- <td @click="editItem(item)">{{item.checkUserName}}</td> -->

										<td @click="editItem(item)">{{item.isChecked}}</td>

										<!-- <td @click="editItem(item)">{{item.checkDate}}</td> -->

										<!-- <td @click="editItem(item)">{{item.downloadUrl}}</td> -->

										<!-- <td @click="editItem(item)">{{item.downloadPwd}}</td> -->

										<!-- <td @click="editItem(item)">{{item.courseQrcode}}</td> -->

										<td @click="editItem(item)">{{item.viewNum}}</td>

										<td @click="editItem(item)">{{item.buyNum}}</td>

										<!-- <td @click="editItem(item)">{{item.longTabNum}}</td> -->

										<!-- <td @click="editItem(item)">{{item.remark}}</td> -->


										<td  v-show="$superAdminMode">
											<a @click="deleteItem(item)" class="tm-product-delete-link">
												<i class="far fa-trash-alt tm-product-delete-icon"></i>
											</a>
										</td>
									</tr>

								</tbody>
							</table>

						</div>
						<!-- table container -->

						<button @click="addCourse" class="btn btn-primary btn-block text-uppercase">
							添加数据
						</button>
						<button v-show="$superAdminMode" @click="batchDelete" class="btn btn-primary btn-block text-uppercase">
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
		name: 'course',
		data() {
			return {
				courseList: [],
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
				scrollTop: 1,
				superSearchKeyWord: ''

			}
		},
		methods: {
			refreshItemList: function() {
				this.searchData.pageNum = 1
				this.isLastPage = false
				this.getCourseList()
			},
			getMoreCourseList: function() {
				var that = this
				that.searchData.pageNum++
				if (this.isLastPage) {
					return
				}
				this.$http.post('/msbd/getAllCourse', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.courseList = this.courseList.concat(res.data.content.list)
						if (!res.data.content.isLastPage) {

						} else {
							this.$infoMsg('没有更多数据')
							this.isLastPage = true
						}
						this.$log(this.courseList)
					} else {
						this.$errMsg('课程数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('课程数据加载失败')
					console.log(err)
				})

			},
			getCourseList: function() {
				var that = this
				
				if(!this.$superAdminMode){
					that.searchData.model.createUserId = this.$getCookie('userId')
				}else{
					delete that.searchData.model.createUserId
				}
				
				this.$http.post('/msbd/getAllCourse', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.courseList = res.data.content.list
						this.$log(this.courseList)
						this.$log(res.data)
					} else {
						this.$errMsg('课程数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('课程数据加载失败')
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
					this.getMoreCourseList()
				}
				// if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
				// 	//当前盒子的滚动高度+当前盒子绝对高度>当前盒子可滚动高度-100px时，加载更多
				// 	this.$log('scroll reach the bottom')
				// }

				// this.getMoreCourseList()
			},
			editItem: function(item) {
				this.$log(item.id)
				this.$router.push({
					path: '/editCourse',
					query: {
						id: item.id
					}
				})
			},
			addCourse: function() {
				this.$router.push('addCourse')
			},
			deleteItem: function(item) {
				// this.layer.open({
				// 	btn: ['删除','取消'],
				// 	content: '内容',
				// 	// style: 'border:none; background-color:red; color:#fff;'
				// 	skin:'msg'
				// })
				// return
				this.$http('/msbd/removeCourseById/' + item.id).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.getCourseList()
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
				this.$http.post('/msbd/batchDeleteCourseByIds', that.checkedItem).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('批量删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.checkedItem = []
						this.getCourseList()
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
			},
			superSearchKeyWord: function() {
				this.searchData.superSearchKeyWord = this.superSearchKeyWord
				this.getCourseList()
			}
		},
		mounted: function() {
			this.getCourseList()
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.superSearch {
		background-color: #486177;
		border: 10px solid #435c70;
		font-size: 20px;
		text-indent: 10px;
		color: white;
		border-bottom: none;
	}

	input::-webkit-input-placeholder {
		color: white;
	}

	input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: white;
	}

	input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: white;
	}

	input:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: white;
	}

	.inp:focus {
		outline: none;
	}
</style>

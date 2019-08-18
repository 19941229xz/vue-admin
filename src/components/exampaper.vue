<template>
	<div class="hello">
		<div class="container mt-5">
			<!-- <h2 class="tm-block-title">List of Accounts</h2> -->
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
										<th scope="col">试卷名称 </th>
										<!-- <th scope="col">出题人id </th> -->
										<th scope="col">命题时间 </th>
										<!-- <th scope="col">出题人头像 </th> -->
										<!-- <th scope="col">出题人昵称 </th> -->
										<th scope="col">出题人</th>
										<th scope="col">所属岗位 </th>
										<th scope="col">考试时长(秒) </th>
										<th scope="col">所属班级</th>
										<!-- <th scope="col">所属公司id </th> -->
										<!-- <th scope="col">所属学校id </th> -->
										<!-- <th scope="col">试卷可浏览级别 1完全公开 2对学校或公司公开 3只对班级公开 </th> -->
										<th scope="col">是否审核1未审核2已审核 </th>
										<!-- <th scope="col">审核人id </th> -->
										<th scope="col">审核时间 </th>
										<th scope="col">审核人 </th>
										<!-- <th scope="col">审核人昵称 </th> -->
										<th scope="col">&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in exampaperList">
										<th v-show="$superAdminMode" scope="row"><input type="checkbox" v-model="checkedItem" :value="item.id" /></th>
										<th v-show="!$superAdminMode" scope="row">&nbsp;</th>


										<!-- <td @click="editItem(item)">{{item.id}}</td> -->

										<td @click="editItem(item)">{{item.examPaperName}}</td>

										<!-- <td @click="editItem(item)">{{item.createUserId}}</td> -->

										<td @click="editItem(item)">{{item.createDate}}</td>

										<!-- <td @click="editItem(item)">{{item.userHeadPic}}</td> -->

										<!-- <td @click="editItem(item)">{{item.userNickName}}</td> -->

										<td @click="editItem(item)">{{item.userRealName}}</td>

										<td @click="editItem(item)">{{item.questionJobTypeName}}</td>

										<td @click="editItem(item)">{{item.examTime}}</td>

										<td @click="editItem(item)">{{item.banjiName}}</td>

										<!-- <td @click="editItem(item)">{{item.companyId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.schoolId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.publicLevel}}</td> -->

										<td @click="editItem(item)">{{item.isChecked}}</td>

										<!-- <td @click="editItem(item)">{{item.checkUserId}}</td> -->

										<td @click="editItem(item)">{{item.checkDate}}</td>

										<td @click="editItem(item)">{{item.checkUserRealName}}</td>

										<!-- <td @click="editItem(item)">{{item.checkUserNickName}}</td> -->


										<td v-show="$superAdminMode">
											<a @click="deleteItem(item)" class="tm-product-delete-link">
												<i class="far fa-trash-alt tm-product-delete-icon"></i>
											</a>
										</td>
										<td v-show="!$superAdminMode" scope="row">&nbsp;</td>
									</tr>

								</tbody>
							</table>

						</div>
						<!-- table container -->

						<button @click="addExampaper" class="btn btn-primary btn-block text-uppercase">
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
		name: 'exampaper',
		data() {
			return {
				exampaperList: [],
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
				superSearchKeyWord: '',
				userInfo:{
					
				}

			}
		},
		methods: {
			refreshItemList: function() {
				this.searchData.pageNum = 1
				this.isLastPage = false
				this.getExampaperList()
			},
			getMoreExampaperList: function() {
				var that = this
				
				if (this.isLastPage) {
					return
				}else{
					that.searchData.pageNum++
				}
				this.$http.post('/msbd/getAllExampaper', that.searchData).then(res => {
					if (res.data.code == 200) {
						
						if (!res.data.content.isLastPage) {
							this.exampaperList = this.exampaperList.concat(res.data.content.list)
						} else {
							this.$infoMsg('没有更多数据')
							this.isLastPage = true
							this.exampaperList = this.exampaperList.concat(res.data.content.list)
						}
						this.$log(this.exampaperList)
					} else {
						this.$errMsg('试卷数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试卷数据加载失败')
					console.log(err)
				})

			},
			getExampaperList: function() {
				var that = this
				if(this.$superAdminMode==false){ // 如果不是超级管理员模式  那么用户只能看见自己所属公司创建的数据  但是只能修改自己创建的
					that.searchData.model.createUserId=that.$getCookie('userId')
				}else{
					delete that.searchData.model.createUserId
				}
				this.$http.post('/msbd/getAllExampaper', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.exampaperList = res.data.content.list
						this.$log(this.exampaperList)
						this.$log(res.data)
					} else {
						this.$errMsg('试卷数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试卷数据加载失败')
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
					this.getMoreExampaperList()
				}
				// if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
				// 	//当前盒子的滚动高度+当前盒子绝对高度>当前盒子可滚动高度-100px时，加载更多
				// 	this.$log('scroll reach the bottom')
				// }

				// this.getMoreExampaperList()
			},
			editItem: function(item) {
				//在非超管模式  用户只允许修改自己创建的试卷
				if(!this.$superAdminMode&&this.$getCookie('userId')!=item.createUserId){
					this.$warnMsg('你无权编辑他人创建的试卷')
					return
				}
				this.$log(item.id)
				this.$router.push({
					path: '/editExampaper',
					query: {
						id: item.id
					}
				})
			},
			addExampaper: function() {
				this.$router.push('addExampaper')
			},
			deleteItem: function(item) {
				// this.layer.open({
				// 	btn: ['删除','取消'],
				// 	content: '内容',
				// 	// style: 'border:none; background-color:red; color:#fff;'
				// 	skin:'msg'
				// })
				// return
				this.$http('/msbd/removeExampaperById/' + item.id).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.getExampaperList()
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
				this.$http.post('/msbd/batchDeleteExampaperByIds', that.checkedItem).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('批量删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.checkedItem = []
						this.getExampaperList()
					} else {
						this.$errMsg('批量删除失败')
					}
				}).catch(err => {
					this.$errMsg('批量删除失败')
					console.log(err)
				})
			},
			getUserInfo:function(){
				
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
				this.getExampaperList()
			}
		},
		mounted: function() {
			this.getExampaperList()
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

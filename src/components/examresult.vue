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
										<!-- <th scope="col">考试用户id </th> -->
										<th scope="col">考试人昵称 </th>
										<th scope="col">考试人真实姓名 </th>
										<!-- <th scope="col">问题所属得岗位类型id </th> -->
										<th scope="col">问题所属岗位名称 </th>
										<th scope="col">考试分数 </th>
										<!-- <th scope="col">考试者所属公司id </th> -->
										<th scope="col">考试者所属公司名称 </th>
										<!-- <th scope="col">考试者所属班级id </th> -->
										<th scope="col">考试者所属班级名称 </th>
										<!-- <th scope="col">所属试卷id </th> -->
										<th scope="col">所属试卷名称 </th>
										<th scope="col">是否完成考试 1未完成 2已完成 </th>
										<th scope="col">考试总题数 </th>
										<th scope="col">错题数 </th>
										<th scope="col">&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in examresultList">
										<th v-show="$superAdminMode" scope="row"><input type="checkbox" v-model="checkedItem" :value="item.id" /></th>
										<th v-show="!$superAdminMode" scope="row">&nbsp;</th>


										<!-- <td @click="editItem(item)">{{item.id}}</td> -->

										<!-- <td @click="editItem(item)">{{item.userId}}</td> -->

										<td @click="editItem(item)">{{item.userNickName}}</td>

										<td @click="editItem(item)">{{item.userRealName}}</td>

										<!-- <td @click="editItem(item)">{{item.questionJobTypeId}}</td> -->

										<td @click="editItem(item)">{{item.questionJobTypeName}}</td>

										<td @click="editItem(item)">{{item.score}}</td>

										<!-- <td @click="editItem(item)">{{item.companyId}}</td> -->

										<td @click="editItem(item)">{{item.companyName}}</td>

										<!-- <td @click="editItem(item)">{{item.banjiId}}</td> -->

										<td @click="editItem(item)">{{item.banjiName}}</td>

										<!-- <td @click="editItem(item)">{{item.exampaperId}}</td> -->

										<td @click="editItem(item)">{{item.exampaperName}}</td>

										<td @click="editItem(item)">{{item.isFinished}}</td>

										<td @click="editItem(item)">{{item.totalQuestionCount}}</td>

										<td @click="editItem(item)">{{item.wrongAnswerCount}}</td>


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

						<button v-show="$superAdminMode" @click="addExamresult" class="btn btn-primary btn-block text-uppercase">
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
		name: 'examresult',
		data() {
			return {
				examresultList: [],
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
				this.getExamresultList()
			},
			getMoreExamresultList: function() {
				var that = this
				that.searchData.pageNum++
				if (this.isLastPage) {
					return
				}
				this.$http.post('/msbd/getAllExamresult', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.examresultList = this.examresultList.concat(res.data.content.list)
						if (!res.data.content.isLastPage) {
							
						} else {
							this.$infoMsg('没有更多数据')
							this.isLastPage = true
						}
						this.$log(this.examresultList)
					} else {
						this.$errMsg('考试结果数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('考试结果数据加载失败')
					console.log(err)
				})

			},
			getExamresultList: function() {
				var that = this
				if(this.$superAdminMode==false){ // 如果不是超级管理员模式  那么用户只能看见自己所属公司创建的数据  但是只能修改自己创建的
					that.searchData.model.companyId=that.$getCookie('companyId')
				}else{
					delete that.searchData.model.companyId
				}
				this.$http.post('/msbd/getAllExamresult', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.examresultList = res.data.content.list
						this.$log(this.examresultList)
						this.$log(res.data)
					} else {
						this.$errMsg('考试结果数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('考试结果数据加载失败')
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
					this.getMoreExamresultList()
				}
				// if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
				// 	//当前盒子的滚动高度+当前盒子绝对高度>当前盒子可滚动高度-100px时，加载更多
				// 	this.$log('scroll reach the bottom')
				// }

				// this.getMoreExamresultList()
			},
			editItem: function(item) {
				this.$warnMsg('暂不支持编辑考试结果')
				return
				this.$log(item.id)
				this.$router.push({
					path: '/editExamresult',
					query: {
						id: item.id
					}
				})
			},
			addExamresult: function() {
				this.$router.push('addExamresult')
			},
			deleteItem: function(item) {
				// this.layer.open({
				// 	btn: ['删除','取消'],
				// 	content: '内容',
				// 	// style: 'border:none; background-color:red; color:#fff;'
				// 	skin:'msg'
				// })
				// return
				this.$http('/msbd/removeExamresultById/' + item.id).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.getExamresultList()
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
				this.$http.post('/msbd/batchDeleteExamresultByIds', that.checkedItem).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('批量删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.checkedItem = []
						this.getExamresultList()
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
				this.getExamresultList()
			}
		},
		mounted: function() {
			this.getExamresultList()
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

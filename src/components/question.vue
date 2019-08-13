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
										<th scope="col">问题 </th>
										<th scope="col">答案 </th>
										<th scope="col">问题分类：1选择题 2判断题 </th>
										<!-- <th scope="col">问题所属得岗位类型id </th> -->
										<th scope="col">所属岗位 </th>
										<!-- <th scope="col">题目解析 </th> -->
										<!-- <th scope="col">题目解析配图1 </th> -->
										<!-- <th scope="col">题目解析配图2 </th>
										<th scope="col">题目解析配图3 </th>
										<th scope="col">题目解析配图4 </th> -->
										<!-- <th scope="col">选项A </th>
										<th scope="col">选项B </th>
										<th scope="col">选项C </th>
										<th scope="col">选项D </th> -->
										<th scope="col">正确选项 </th>
										<!-- <th scope="col">问题配图1 </th> -->
										<!-- <th scope="col">问题配图2 </th>
										<th scope="col">问题配图3 </th>
										<th scope="col">问题配图4 </th> -->
										<!-- <th scope="col">详细解释 </th> -->
										<!-- <th scope="col">详细解释配图1 </th> -->
										<!-- <th scope="col">详细解释配图2 </th>
										<th scope="col">详细解释配图3 </th>
										<th scope="col">详细解释配图4 </th>
										<th scope="col">所属试卷id </th> -->
										<!-- <th scope="col">试题创建人id </th>
										<th scope="col">试题创建人头像 </th> -->
										<th scope="col">试题创建人真实姓名 </th>
										<!-- <th scope="col">试题创建人昵称 </th>
										<th scope="col">试题评论数 </th>
										<th scope="col">是否审核通过 1未通过 2已通过 </th>
										<th scope="col">审核人id </th>
										<th scope="col">审核人真实姓名 </th>
										<th scope="col">审核人昵称 </th>
										<th scope="col">审核时间 </th>-->
										<th scope="col">创建时间 </th>
										<!-- <th scope="col">被回答次数 </th>
										<th scope="col">浏览次数 </th>
										<th scope="col">回答错误的次数 </th> --> 
										<th scope="col">&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in questionList">
										<th v-show="$superAdminMode" scope="row"><input type="checkbox" v-model="checkedItem" :value="item.id" /></th>
										<th v-show="!$superAdminMode" scope="row">&nbsp;</th>


										<!-- <td @click="editItem(item)">{{item.id}}</td> -->

										<td @click="editItem(item)">{{item.question}}</td>

										<td @click="editItem(item)">{{item.answer}}</td>

										<td @click="editItem(item)">{{item.questionTypeId}}</td>

										<!-- <td @click="editItem(item)">{{item.questionJobTypeId}}</td> -->
										
										<td @click="editItem(item)">{{item.questionJobTypeName}}</td>

										<!-- <td @click="editItem(item)">{{item.explaination}}</td>

										<td @click="editItem(item)">{{item.explainationImg1}}</td> -->

										<!-- <td @click="editItem(item)">{{item.explainationImg2}}</td>

										<td @click="editItem(item)">{{item.explainationImg3}}</td>

										<td @click="editItem(item)">{{item.explainationImg4}}</td>

										<td @click="editItem(item)">{{item.optionA}}</td>

										<td @click="editItem(item)">{{item.optionB}}</td>

										<td @click="editItem(item)">{{item.optionC}}</td>

										<td @click="editItem(item)">{{item.optionD}}</td> -->

										<td @click="editItem(item)">{{item.rightOption}}</td>

										<!-- <td @click="editItem(item)">{{item.questionImg1}}</td> -->

										<!-- <td @click="editItem(item)">{{item.questionImg2}}</td>

										<td @click="editItem(item)">{{item.questionImg3}}</td>

										<td @click="editItem(item)">{{item.questionImg4}}</td> -->

										<!-- <td @click="editItem(item)">{{item.fullExplaination}}</td> -->

										<!-- <td @click="editItem(item)">{{item.fullExplainationImg1}}</td> -->

										<!-- <td @click="editItem(item)">{{item.fullExplainationImg2}}</td>

										<td @click="editItem(item)">{{item.fullExplainationImg3}}</td>

										<td @click="editItem(item)">{{item.fullExplainationImg4}}</td>

										<td @click="editItem(item)">{{item.examPaperId}}</td>

										<td @click="editItem(item)">{{item.createUserId}}</td>

										<td @click="editItem(item)">{{item.createUserHeadPic}}</td> -->

										<td @click="editItem(item)">{{item.createUserRealName}}</td>

										<!-- <td @click="editItem(item)">{{item.createUserNickName}}</td>

										<td @click="editItem(item)">{{item.commentNum}}</td>

										<td @click="editItem(item)">{{item.isChecked}}</td>

										<td @click="editItem(item)">{{item.checkUserId}}</td>

										<td @click="editItem(item)">{{item.checkUserRealName}}</td>

										<td @click="editItem(item)">{{item.checkUserNickName}}</td>

										<td @click="editItem(item)">{{item.checkDate}}</td>-->

										<td @click="editItem(item)">{{item.createDate | dateformat}}</td>

										<!-- <td @click="editItem(item)">{{item.answeredNum}}</td>

										<td @click="editItem(item)">{{item.viewNum}}</td>

										<td @click="editItem(item)">{{item.answerIsFalseNum}}</td> -->


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

						<button @click="addQuestion" class="btn btn-primary btn-block text-uppercase">
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
		name: 'question',
		data() {
			return {
				questionList: [],
				checkedItem: [],
				searchData: {
					"model": {

					},
					"orderParams": [
						'createDate desc'
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
				this.getQuestionList()
			},
			getMoreQuestionList: function() {
				var that = this
				that.searchData.pageNum++
				if (this.isLastPage) {
					return
				}
				this.$http.post('/msbd/getAllQuestion', that.searchData).then(res => {
					if (res.data.code == 200) {
						if (!res.data.content.isLastPage) {
							this.questionList = this.questionList.concat(res.data.content.list)
						} else {
							this.$infoMsg('没有更多数据')
							this.isLastPage = true
						}
						this.$log(this.questionList)
					} else {
						this.$errMsg('试题数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试题数据加载失败')
					console.log(err)
				})

			},
			getQuestionList: function() {
				var that = this
				if(!this.$superAdminMode){
					that.searchData.model.createUserId = this.$getCookie('userId')
				}else{
					delete that.searchData.model.createUserId
				}
				this.$http.post('/msbd/getAllQuestion', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.questionList = res.data.content.list
						this.$log(this.questionList)
						this.$log(res.data)
					} else {
						this.$errMsg('试题数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试题数据加载失败')
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
					this.getMoreQuestionList()
				}
				// if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
				// 	//当前盒子的滚动高度+当前盒子绝对高度>当前盒子可滚动高度-100px时，加载更多
				// 	this.$log('scroll reach the bottom')
				// }

				// this.getMoreQuestionList()
			},
			editItem: function(item) {
				this.$log(item.id)
				this.$router.push({
					path: '/editQuestion',
					query: {
						id: item.id
					}
				})
			},
			addQuestion: function() {
				this.$router.push('addQuestion')
			},
			deleteItem: function(item) {
				// this.layer.open({
				// 	btn: ['删除','取消'],
				// 	content: '内容',
				// 	// style: 'border:none; background-color:red; color:#fff;'
				// 	skin:'msg'
				// })
				// return
				this.$http('/msbd/removeQuestionById/' + item.id).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.getQuestionList()
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
				this.$http.post('/msbd/batchDeleteQuestionByIds', that.checkedItem).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('批量删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.checkedItem = []
						this.getQuestionList()
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
				this.getQuestionList()
			}
		},
		mounted: function() {
			this.getQuestionList()
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

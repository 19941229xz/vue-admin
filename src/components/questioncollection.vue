<template>
	<div class="hello">
		<div class="container mt-5">
        	<div class="row tm-content-row">
				<div class="col-sm-12">
					<input class="superSearch inp"  type="text" v-model="superSearchKeyWord" placeholder="高级检索..." />
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
										
										
                                                                                    <th scope="col">主键 </th>     
                                                                                     <th scope="col">收藏人id </th>     
                                                                                     <th scope="col">被收藏的试题id </th>     
                                                                                     <th scope="col">收藏时间 </th>     
                                                                                     <th scope="col">试题类型  1选择题 2判断题 </th>     
                                                                                     <th scope="col">问题所属得岗位类型id </th>     
                                         										<th scope="col">&nbsp;</th>
									</tr>
								</thead>
                                <tbody>
									<tr v-for="item in questioncollectionList">
										<th scope="row"><input type="checkbox" v-model="checkedItem" :value="item.id" /></th>
										
										                                            
                                            <td @click="editItem(item)">{{item.id}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.collectUserId}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.questionId}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.collectDate}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.questionTypeId}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.questionJobTypeId}}</td>
                                                                                 
                                        
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
						
						<button @click="addQuestioncollection" class="btn btn-primary btn-block text-uppercase">
							添加数据
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
		name: 'questioncollection',
		data() {
			return {
				questioncollectionList: [],
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
                superSearchKeyWord:''
                
			}
		},
        methods: {
			refreshItemList: function() {
				this.searchData.pageNum = 1
				this.isLastPage = false
				this.getQuestioncollectionList()
			},
			getMoreQuestioncollectionList: function() {
				var that = this
				that.searchData.pageNum++
				if (this.isLastPage) {
					return
				}
                this.$http.post('/msbd/getAllQuestioncollection', that.searchData).then(res =>{
                                    if (res.data.code == 200) {
										this.questioncollectionList = this.questioncollectionList.concat(res.data.content.list)
                                        if (!res.data.content.isLastPage) {
                                            
                                        } else {
                                            this.$infoMsg('没有更多数据')
                                            this.isLastPage = true
                                        }
                                        this.$log(this.questioncollectionList)
                                    } else {
                                        this.$errMsg('试题收藏数据加载失败')
                                    }
                                }).catch(err => {
                                    this.$errMsg('试题收藏数据加载失败')
                                    console.log(err)
                                })
				
			},
            getQuestioncollectionList: function() {
				var that = this
				this.$http.post('/msbd/getAllQuestioncollection', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.questioncollectionList = res.data.content.list
						this.$log(this.questioncollectionList)
						this.$log(res.data)
					} else {
						this.$errMsg('试题收藏数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试题收藏数据加载失败')
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
					this.getMoreQuestioncollectionList()
				}
				// if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
				// 	//当前盒子的滚动高度+当前盒子绝对高度>当前盒子可滚动高度-100px时，加载更多
				// 	this.$log('scroll reach the bottom')
				// }

				// this.getMoreQuestioncollectionList()
			},
            editItem: function(item) {
				this.$log(item.id)
				this.$router.push({
					path: '/editQuestioncollection',
					query: {
						id: item.id
					}
				})
			},
			addQuestioncollection: function() {
				this.$router.push('addQuestioncollection')
			},
			deleteItem: function(item) {
				// this.layer.open({
				// 	btn: ['删除','取消'],
				// 	content: '内容',
				// 	// style: 'border:none; background-color:red; color:#fff;'
				// 	skin:'msg'
				// })
				// return
				this.$http('/msbd/removeQuestioncollectionById/' + item.id).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.getQuestioncollectionList()
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
				this.$http.post('/msbd/batchDeleteQuestioncollectionByIds', that.checkedItem).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('批量删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.checkedItem = []
						this.getQuestioncollectionList()
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
            superSearchKeyWord:function(){
				this.searchData.superSearchKeyWord=this.superSearchKeyWord
				this.getQuestioncollectionList()
			}
		},
		mounted: function() {
			this.getQuestioncollectionList()
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

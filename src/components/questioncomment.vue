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
                                                                                     <th scope="col">评论内容 </th>     
                                                                                     <th scope="col">评论用户id </th>     
                                                                                     <th scope="col">评论时间 </th>     
                                                                                     <th scope="col">评论用户头像 </th>     
                                                                                     <th scope="col">评论用户昵称 </th>     
                                                                                     <th scope="col">评论用户真实姓名 </th>     
                                                                                     <th scope="col">评论用户性别 1男 2女 </th>     
                                                                                     <th scope="col">点赞数 </th>     
                                         										<th scope="col">&nbsp;</th>
									</tr>
								</thead>
                                <tbody>
									<tr v-for="item in questioncommentList">
										<th scope="row"><input type="checkbox" v-model="checkedItem" :value="item.id" /></th>
										
										                                            
                                            <td @click="editItem(item)">{{item.id}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.commentContent}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.commentUserId}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.commentDate}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.commentUserHeadPic}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.commentUserNickName}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.commentUserRealName}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.commentUserGender}}</td>
                                                                                     
                                            <td @click="editItem(item)">{{item.favorNum}}</td>
                                                                                 
                                        
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
						
						<button v-show="$superAdminMode" @click="addQuestioncomment" class="btn btn-primary btn-block text-uppercase">
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
		name: 'questioncomment',
		data() {
			return {
				questioncommentList: [],
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
				this.getQuestioncommentList()
			},
			getMoreQuestioncommentList: function() {
				var that = this
				that.searchData.pageNum++
				if (this.isLastPage) {
					return
				}
                this.$http.post('/msbd/getAllQuestioncomment', that.searchData).then(res =>{
                                    if (res.data.code == 200) {
                                        if (!res.data.content.isLastPage) {
                                            this.questioncommentList = this.questioncommentList.concat(res.data.content.list)
                                        } else {
                                            this.$infoMsg('没有更多数据')
                                            this.isLastPage = true
                                        }
                                        this.$log(this.questioncommentList)
                                    } else {
                                        this.$errMsg('试题评论表数据加载失败')
                                    }
                                }).catch(err => {
                                    this.$errMsg('试题评论表数据加载失败')
                                    console.log(err)
                                })
				
			},
            getQuestioncommentList: function() {
				var that = this
				// if(this.$superAdminMode==false){ // 如果不是超级管理员模式  那么用户只能看见自己所属公司创建的数据  但是只能修改自己创建的
				// 	that.searchData.model.companyId=that.$getCookie('companyId')
				// }else{
				// 	delete that.searchData.model.companyId
				// }
				this.$http.post('/msbd/getAllQuestioncomment', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.questioncommentList = res.data.content.list
						this.$log(this.questioncommentList)
						this.$log(res.data)
					} else {
						this.$errMsg('试题评论表数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试题评论表数据加载失败')
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
					this.getMoreQuestioncommentList()
				}
				// if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
				// 	//当前盒子的滚动高度+当前盒子绝对高度>当前盒子可滚动高度-100px时，加载更多
				// 	this.$log('scroll reach the bottom')
				// }

				// this.getMoreQuestioncommentList()
			},
            editItem: function(item) {
				if(!this.$superAdminMode){
					this.$warnMsg('你无权编辑评论')
					return
				}
				this.$log(item.id)
				this.$router.push({
					path: '/editQuestioncomment',
					query: {
						id: item.id
					}
				})
			},
			addQuestioncomment: function() {
				this.$router.push('addQuestioncomment')
			},
			deleteItem: function(item) {
				// this.layer.open({
				// 	btn: ['删除','取消'],
				// 	content: '内容',
				// 	// style: 'border:none; background-color:red; color:#fff;'
				// 	skin:'msg'
				// })
				// return
				this.$http('/msbd/removeQuestioncommentById/' + item.id).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.getQuestioncommentList()
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
				this.$http.post('/msbd/batchDeleteQuestioncommentByIds', that.checkedItem).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('批量删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.checkedItem = []
						this.getQuestioncommentList()
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
				this.getQuestioncommentList()
			}
		},
		mounted: function() {
			this.getQuestioncommentList()
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

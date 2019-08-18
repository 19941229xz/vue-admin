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


										<!-- <th scope="col">主键id </th> -->
										<!-- <th scope="col">头像 </th> -->
										<th scope="col">用户名 </th>
										<!-- <th scope="col">密码 </th> -->
										<!-- <th scope="col">昵称 </th> -->
										<th scope="col">真实姓名</th>
										<th scope="col">性别1男2女</th>
										<!-- <th scope="col">生日</th> -->
										<!-- <th scope="col">年龄</th> -->
										<!-- <th scope="col">qq号 </th> -->
										<!-- <th scope="col">微信号 </th> -->
										<th scope="col">手机号</th>
										<!-- <th scope="col">邮箱 </th> -->
										<!-- <th scope="col">注册ip </th> -->
										<!-- <th scope="col">注册时间 </th> -->
										<!-- <th scope="col">（上一次）登出ip </th> -->
										<!-- <th scope="col">（本次）登录ip </th> -->
										<!-- <th scope="col">最后在线/登出时刻 </th> -->
										<!-- <th scope="col">（本次）登录时刻 </th> -->
										<!-- <th scope="col">本次登录时长 </th> -->
										<!-- <th scope="col">在线总时长 </th> -->
										<th scope="col">用户身份1用户2管理员</th>
										<!-- <th scope="col">会员id </th> -->
										<!-- <th scope="col">收货地址id（关联地区表） </th> -->
										<th scope="col">状态1已激活2未激活3普通用户4已删除5未审核</th>
										<!-- <th scope="col">常用登录ip </th> -->
										<!-- <th scope="col">支付密码 </th> -->
										<!-- <th scope="col">用户签名 </th> -->
										<!-- <th scope="col">用户地址 </th> -->
										<!-- <th scope="col">学生id </th> -->
										<!-- <th scope="col">公司id </th> -->
										<!-- <th scope="col">学校id </th> -->
										<!-- <th scope="col">学院id </th> -->
										<!-- <th scope="col">班级id </th> -->
										<!-- <th scope="col">教师id </th> -->
										<!-- <th scope="col">部门id </th> -->
										<!-- <th scope="col">职工id </th> -->
										<!-- <th scope="col">籍贯（关联地区表） </th> -->
										<!-- <th scope="col">政治面貌（1党员 2团员 3其他） </th> -->
										<!-- <th scope="col">宗教信仰（1基督教 2伊斯兰教 3佛教 4其他） </th> -->
										<!-- <th scope="col">邀请码 </th> -->
										<!-- <th scope="col">邀请人数 </th> -->
										<th scope="col">&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="item in userList">
										<th scope="row"><input type="checkbox" v-model="checkedItem" :value="item.id" /></th>


										<!-- <td @click="editItem(item)">{{item.id}}</td> -->

										<!-- <td @click="editItem(item)">{{item.headImg}}</td> -->

										<td @click="editItem(item)">{{item.userName}}</td>

										<!-- <td @click="editItem(item)">{{item.password}}</td> -->

										<!-- <td @click="editItem(item)">{{item.nickName}}</td> -->

										<td @click="editItem(item)">{{item.realName}}</td>

										<td @click="editItem(item)">{{item.gender}}</td>

										<!-- <td @click="editItem(item)">{{item.birthday}}</td> -->

										<!-- <td @click="editItem(item)">{{item.age}}</td> -->

										<!-- <td @click="editItem(item)">{{item.qq}}</td> -->

										<!-- <td @click="editItem(item)">{{item.weChat}}</td> -->

										<td @click="editItem(item)">{{item.phoneNum}}</td>

										<!-- <td @click="editItem(item)">{{item.email}}</td> -->

										<!-- <td @click="editItem(item)">{{item.regIp}}</td> -->

										<!-- <td @click="editItem(item)">{{item.regTime}}</td> -->

										<!-- <td @click="editItem(item)">{{item.lastLogoutIp}}</td> -->

										<!-- <td @click="editItem(item)">{{item.loginIp}}</td> -->

										<!-- <td @click="editItem(item)">{{item.lastOnlineTime}}</td> -->

										<!-- <td @click="editItem(item)">{{item.loginTime}}</td> -->

										<!-- <td @click="editItem(item)">{{item.timeOfThisLogin}}</td> -->

										<!-- <td @click="editItem(item)">{{item.totalOnlineTime}}</td> -->

										<td @click="editItem(item)">{{item.roleId}}</td>

										<!-- <td @click="editItem(item)">{{item.memberId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.shippingAddress}}</td> -->

										<td @click="editItem(item)">{{item.status}}</td>

										<!-- <td @click="editItem(item)">{{item.commonLoginIp}}</td> -->

										<!-- <td @click="editItem(item)">{{item.payPassword}}</td> -->

										<!-- <td @click="editItem(item)">{{item.signature}}</td> -->

										<!-- <td @click="editItem(item)">{{item.userAddress}}</td> -->

										<!-- <td @click="editItem(item)">{{item.studentId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.companyId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.schoolId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.facultyId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.banjiId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.teacherId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.departmentId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.staffId}}</td> -->

										<!-- <td @click="editItem(item)">{{item.birthPlace}}</td> -->

										<!-- <td @click="editItem(item)">{{item.politicalStatus}}</td> -->

										<!-- <td @click="editItem(item)">{{item.religion}}</td> -->

										<!-- <td @click="editItem(item)">{{item.inviteCode}}</td> -->

										<!-- <td @click="editItem(item)">{{item.inviteNum}}</td> -->


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

						<button @click="addUser" class="btn btn-primary btn-block text-uppercase">
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
		name: 'user',
		data() {
			return {
				userList: [],
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
				this.getUserList()
			},
			getMoreUserList: function() {
				var that = this
				that.searchData.pageNum++
				if (this.isLastPage) {
					return
				}
				this.$http.post('/user-server/getAllUser', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.userList = this.userList.concat(res.data.content.list)
						if (!res.data.content.isLastPage) {

						} else {
							this.$infoMsg('没有更多数据')
							this.isLastPage = true
						}
						this.$log(this.userList)
					} else {
						this.$errMsg('用户信息数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('用户信息数据加载失败')
					console.log(err)
				})

			},
			getUserList: function() {
				var that = this
				this.$http.post('/user-server/getAllUser', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.userList = res.data.content.list
						this.$log(this.userList)
						this.$log(res.data)
					} else {
						this.$errMsg('用户信息数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('用户信息数据加载失败')
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
					this.getMoreUserList()
				}
				// if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
				// 	//当前盒子的滚动高度+当前盒子绝对高度>当前盒子可滚动高度-100px时，加载更多
				// 	this.$log('scroll reach the bottom')
				// }

				// this.getMoreUserList()
			},
			editItem: function(item) {
				this.$log(item.id)
				this.$router.push({
					path: '/editUser',
					query: {
						id: item.id
					}
				})
			},
			addUser: function() {
				this.$router.push('addUser')
			},
			deleteItem: function(item) {
				// this.layer.open({
				// 	btn: ['删除','取消'],
				// 	content: '内容',
				// 	// style: 'border:none; background-color:red; color:#fff;'
				// 	skin:'msg'
				// })
				// return
				this.$http('/user-server/removeUserById/' + item.id).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.getUserList()
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
				this.$http.post('/user-server/batchDeleteUserByIds', that.checkedItem).then(res => {
					if (res.data.code == 200) {
						this.$infoMsg('批量删除成功')
						this.$log(res.data)
						this.searchData.pageNum = 1
						this.isLastPage = false
						this.checkedItem = []
						this.getUserList()
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
				this.getUserList()
			}
		},
		mounted: function() {
			this.getUserList()
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

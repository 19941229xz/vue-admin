<template>
	<div class="hello">
		<div class="container">
			<div class="row">
				<div class="col">
					<p class="text-white mt-5 mb-5">Welcome back, <b>{{userInfo.realName}}</b></p>
				</div>
			</div>
			<!-- row -->
			<div class="row tm-content-row">
				<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
					<div class="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
						<h2 class="tm-block-title">待审核试题({{questionList.length}})</h2>
						<div class="tm-notification-items">
							<!--  -->
							<div @click="editQuestion(item)" v-for="item in questionList" class="media tm-notification-item">
								<div class="tm-gray-circle"><img :src="item.createUserHeadPic" alt="Avatar Image" style="width: 100%;height: 100%;"
									 class="rounded-circle"></div>
								<div class="media-body">
									<p class="mb-2"><b>{{item.createUserRealName}}</b> 创建了 <b>一份</b> {{item.questionJobTypeName}}岗位的试题 "{{item.question}}".
										请尽快审核.</p>
									<span class="tm-small tm-text-color-secondary">{{item.createDate | dateformat}}.</span>
								</div>
							</div>
							<!--  -->
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
					<div class="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
						<h2 class="tm-block-title">待审核试卷({{exampaperList.length}})</h2>
						<div class="tm-notification-items">
							<!--  -->
							<div @click="editExampaper(item)" v-for="item in exampaperList" class="media tm-notification-item">
								<div class="tm-gray-circle"><img :src="item.userHeadPic" alt="Avatar Image" style="width: 100%;height: 100%;"
									 class="rounded-circle"></div>
								<div class="media-body">
									<p class="mb-2"><b>{{item.userRealName}}</b> 创建了 <b>一份</b> {{item.questionJobTypeName}} 试卷《{{item.examPaperName}}》.
										请尽快审核.</p>
									<span class="tm-small tm-text-color-secondary">{{item.createDate | dateformat}}.</span>
								</div>
							</div>
							<!--  -->
						</div>
					</div>
				</div>
				<div v-show="questionjobtypeList.length!=0" class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
					<div class="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
						<h2 class="tm-block-title">待审核岗位({{questionjobtypeList.length}})</h2>
						<div class="tm-notification-items">
							<!--  -->
							<div @click="editQuestionjobtype(item)" v-for="item in questionjobtypeList" class="media tm-notification-item">
								<div class="tm-gray-circle"></div>
								<div class="media-body">
									{{item.questionJobTypeName}}
									<!-- <p class="mb-2"><b>{{item.userRealName}}</b> 创建了 <b>一份</b> {{item.questionJobTypeName}} 试卷《{{item.examPaperName}}》. 请尽快审核.</p>
									<span class="tm-small tm-text-color-secondary">{{item.createDate | dateformat}}.</span> -->
								</div>
							</div>
							<!--  -->
						</div>
					</div>
				</div>
				<div v-show="userList.length!=0" class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
					<div class="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
						<h2 class="tm-block-title">待审核账号({{userList.length}})</h2>
						<div class="tm-notification-items">
							<!--  -->
							<div @click="editUser(item)" v-for="item in userList" class="media tm-notification-item">
								<div class="tm-gray-circle"><img v-show="item.headImg!=''&&item.headImg!=null" :src="item.headImg" alt="Avatar Image" style="width: 100%;height: 100%;"
									 class="rounded-circle"></div>
								<div class="media-body">
									<b>{{item.realName}}</b>有一个新账号{{item.phoneNum}}注册了，请尽快审核！
									<!-- <p class="mb-2"><b>{{item.userRealName}}</b> 创建了 <b>一份</b> {{item.questionJobTypeName}} 试卷《{{item.examPaperName}}》. 请尽快审核.</p>
									<span class="tm-small tm-text-color-secondary">{{item.createDate | dateformat}}.</span> -->
								</div>
							</div>
							<!--  -->
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
					<div class="tm-bg-primary-dark tm-block">
						<h2 class="tm-block-title">Latest Hits</h2>
						<canvas id="lineChart"></canvas>
					</div>
				</div>
				<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
					<div class="tm-bg-primary-dark tm-block">
						<h2 class="tm-block-title">Performance</h2>
						<canvas id="barChart"></canvas>
					</div>
				</div>
				<!--  -->
				<div class="col-12 tm-block-col">
					<h2 class="tm-block-title">Orders List</h2>
					<div class="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
						<table class="table">
							<thead>
								<tr>
									<th scope="col">ORDER NO.</th>
									<th scope="col">STATUS</th>
									<th scope="col">OPERATORS</th>
									<th scope="col">LOCATION</th>
									<th scope="col">DISTANCE</th>
									<th scope="col">START DATE</th>
									<th scope="col">EST DELIVERY DUE</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row"><b>#122349</b></th>
									<td>
										<div class="tm-status-circle moving">
										</div>Moving
									</td>
									<td><b>Oliver Trag</b></td>
									<td><b>London, UK</b></td>
									<td><b>485 km</b></td>
									<td>16:00, 12 NOV 2018</td>
									<td>08:00, 18 NOV 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122348</b></th>
									<td>
										<div class="tm-status-circle pending">
										</div>Pending
									</td>
									<td><b>Jacob Miller</b></td>
									<td><b>London, UK</b></td>
									<td><b>360 km</b></td>
									<td>11:00, 10 NOV 2018</td>
									<td>04:00, 14 NOV 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122347</b></th>
									<td>
										<div class="tm-status-circle cancelled">
										</div>Cancelled
									</td>
									<td><b>George Wilson</b></td>
									<td><b>London, UK</b></td>
									<td><b>340 km</b></td>
									<td>12:00, 22 NOV 2018</td>
									<td>06:00, 28 NOV 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122346</b></th>
									<td>
										<div class="tm-status-circle moving">
										</div>Moving
									</td>
									<td><b>William Aung</b></td>
									<td><b>London, UK</b></td>
									<td><b>218 km</b></td>
									<td>15:00, 10 NOV 2018</td>
									<td>09:00, 14 NOV 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122345</b></th>
									<td>
										<div class="tm-status-circle pending">
										</div>Pending
									</td>
									<td><b>Harry Ryan</b></td>
									<td><b>London, UK</b></td>
									<td><b>280 km</b></td>
									<td>15:00, 11 NOV 2018</td>
									<td>09:00, 17 NOV 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122344</b></th>
									<td>
										<div class="tm-status-circle pending">
										</div>Pending
									</td>
									<td><b>Michael Jones</b></td>
									<td><b>London, UK</b></td>
									<td><b>218 km</b></td>
									<td>18:00, 12 OCT 2018</td>
									<td>06:00, 18 OCT 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122343</b></th>
									<td>
										<div class="tm-status-circle moving">
										</div>Moving
									</td>
									<td><b>Timmy Davis</b></td>
									<td><b>London, UK</b></td>
									<td><b>218 km</b></td>
									<td>12:00, 10 OCT 2018</td>
									<td>08:00, 18 OCT 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122342</b></th>
									<td>
										<div class="tm-status-circle moving">
										</div>Moving
									</td>
									<td><b>Oscar Phyo</b></td>
									<td><b>London, UK</b></td>
									<td><b>420 km</b></td>
									<td>15:30, 06 OCT 2018</td>
									<td>09:30, 16 OCT 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122341</b></th>
									<td>
										<div class="tm-status-circle moving">
										</div>Moving
									</td>
									<td><b>Charlie Brown</b></td>
									<td><b>London, UK</b></td>
									<td><b>300 km</b></td>
									<td>11:00, 10 OCT 2018</td>
									<td>03:00, 14 OCT 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122340</b></th>
									<td>
										<div class="tm-status-circle cancelled">
										</div>Cancelled
									</td>
									<td><b>Wilson Cookies</b></td>
									<td><b>London, UK</b></td>
									<td><b>218 km</b></td>
									<td>17:30, 12 OCT 2018</td>
									<td>08:30, 22 OCT 2018</td>
								</tr>
								<tr>
									<th scope="row"><b>#122339</b></th>
									<td>
										<div class="tm-status-circle moving">
										</div>Moving
									</td>
									<td><b>Richard Clamon</b></td>
									<td><b>London, UK</b></td>
									<td><b>150 km</b></td>
									<td>15:00, 12 OCT 2018</td>
									<td>09:20, 26 OCT 2018</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				userInfo: {

				},
				exampaperList: [], // 待审核数据
				questionList: [],
				questionjobtypeList: [],
				userList: [], // 
				searchData: {
					"model": {

					},
					"orderParams": [
						'createDate asc'
					],
					"pageNum": 1,
					"pageSize": 1000
				}
			}
		},
		methods: {
			getUserInfoByUserId: function() {
				var that = this
				this.$http('/user-server/getUserById/' + that.$getCookie('userId')).then(res => {
					this.$log(res)
					if (res.data.code == 200) {
						this.userInfo = res.data.content
					} else {
						this.$warnMsg('用户信息获取失败')
					}
				}).catch(err => {
					this.$log(err)
				})
			},
			getQuestionjobtypeList: function() {
				var that = this
				this.$http.post('/msbd/getAllQuestionjobtype', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.questionjobtypeList = res.data.content.list
						this.$log(this.questionjobtypeList)
						this.$log(res.data)
					} else {
						this.$errMsg('试题所属职位数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('试题所属职位数据加载失败')
					console.log(err)
				})
			},
			getExampaperList: function() {
				var that = this
				// if(this.$superAdminMode==false){ // 如果不是超级管理员模式  那么用户只能看见自己所属公司创建的数据  但是只能修改自己创建的
				// 	that.searchData.model.companyId=that.$getCookie('companyId')
				// }else{
				// 	delete that.searchData.model.companyId
				// }
				that.searchData.model.isChecked = 1
				this.$http.post('/msbd/getAllExampaper', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.exampaperList = res.data.content.list
						this.$log(this.exampaperList)
						this.$log(res.data)
					} else {
						this.$errMsg('未审核试卷数据加载失败')
					}
				}).catch(err => {
					this.$errMsg('未审核试卷数据加载失败')
					console.log(err)
				})
			},
			getQuestionList: function() {
				var that = this
				that.searchData.model.isChecked = 1
				that.searchData.orderParams = []
				this.$http.post('/msbd/getAllQuestion', that.searchData).then(res => {
					if (res.data.code == 200) {
						this.questionList = res.data.content.list
						this.$log(this.questionList)
						this.$log(res.data)
					} else {
						this.$errMsg('试题数据加载失败')
					}
					that.searchData.orderParams = ['createDate asc']
				}).catch(err => {
					this.$errMsg('试题数据加载失败')
					that.searchData.orderParams = ['createDate asc']
				})
			},
			getUserList: function() {
				var that = this
				// that.searchData.model.isChecked = 2
				// that.searchData.orderParams=[]
				var searchData = {
					"model": {
						status:2
					},
					"orderParams": [
						'regTime asc'
					],
					"pageNum": 1,
					"pageSize": 1000
				}
				this.$http.post('/user-server/getAllUser', searchData).then(res => {
					if (res.data.code == 200) {
						this.userList = res.data.content.list
						this.$log(this.userList)
						this.$log(res.data)
					} else {
						this.$errMsg('待审核用户加载失败')
					}
					that.searchData.orderParams = ['createDate asc']
				}).catch(err => {
					this.$errMsg('待审核用户加载失败')
					that.searchData.orderParams = ['createDate asc']
				})
			},
			editExampaper: function(item) {
				//在非超管模式  用户只允许修改自己创建的试卷
				// if(!this.$superAdminMode&&this.$getCookie('userId')!=item.createUserId){
				// 	this.$warnMsg('你无权编辑他人创建的试卷')
				// 	return
				// }
				this.$log(item.id)
				this.$router.push({
					path: '/editExampaper',
					query: {
						id: item.id
					}
				})
			},
			editQuestion: function(item) {
				//在非超管模式  用户只允许修改自己创建的试卷
				// if(!this.$superAdminMode&&this.$getCookie('userId')!=item.createUserId){
				// 	this.$warnMsg('你无权编辑他人创建的试卷')
				// 	return
				// }
				this.$log(item.id)
				this.$router.push({
					path: '/editQuestion',
					query: {
						id: item.id
					}
				})
			},
			editQuestionjobtype: function(item) {
				this.$log(item.id)
				this.$router.push({
					path: '/editQuestionjobtype',
					query: {
						id: item.id
					}
				})
			},
			editUser: function(item) {
				this.$log(item.id)
				this.$router.push({
					path: '/userCenter',
					query: {
						id: item.id
					}
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
		mounted: function() {
			// 该页面非超级管理员不能访问
			if (!this.$superAdminMode) {
				this.$router.push('/question')
				return
			}

			this.getUserInfoByUserId()
			this.getExampaperList()
			this.getQuestionList()
			this.getQuestionjobtypeList()
			this.getUserList()


		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>

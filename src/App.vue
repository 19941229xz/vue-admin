<template>
	<div id="app">
		<nav v-show="$route.name.indexOf('ogin')<=-1&&$route.name.indexOf('reg')<=-1" class="navbar navbar-expand-xl">
			<div class="container h-100">
				<a class="navbar-brand" href="index.html">
					<h1 class="tm-site-title mb-0">面试宝典后台</h1>
				</a>
				<button class="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<i class="fas fa-bars tm-nav-icon"></i>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mx-auto h-100">
						<li v-show="$superAdminMode" class="nav-item">
							<a class="nav-link active" href="#/">
								<i class="fas fa-tachometer-alt"></i>
								主页
								<span class="sr-only">(current)</span>
							</a>
						</li>
						<li v-if="userInfo.status==1" v-for="item in menuList" class="nav-item dropdown" style="color: white;">

							<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown"
							 aria-haspopup="true" aria-expanded="false">
								<i class="far fa-file-alt"></i>
								<span>
									{{item.menuName}} <i class="fas fa-angle-down"></i>
								</span>
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a v-for="childItem in item.childMenus" class="dropdown-item" :href="childItem.menuRoute">{{childItem.menuName}}</a>
								<!-- <a class="dropdown-item" href="#">Weekly Report</a>
                            <a class="dropdown-item" href="#">Yearly Report</a> -->
							</div>
						</li>
						<!-- <li class="nav-item">
                        <a class="nav-link" href="products.html">
                            <i class="fas fa-shopping-cart"></i>
                            Products
                        </a>
                    </li> -->

						<li class="nav-item">
							<a class="nav-link" href="#/userCenter">
								<i class="far fa-user"></i>
								账户
							</a>
						</li>
						<li v-show="false" class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown"
							 aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-cog"></i>
								<span>
									Settings <i class="fas fa-angle-down"></i>
								</span>
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a @click="changeMode" class="dropdown-item" href="javascript:void(0);">切换模式</a>
								<a class="dropdown-item" href="">Billing</a>
								<a class="dropdown-item" href="">Customize</a>
							</div>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item">
							<a @click="logout" class="nav-link d-block" href="javascript:void(0);">
								{{userInfo.realName}}, <b>Logout</b>
							</a>
						</li>
					</ul>
				</div>
			</div>

		</nav>
		<router-view />
	</div>
</template>

<script>
	import jquery from '../static/js/jquery-3.3.1.min.js'
	import moment from '../static/js/moment.min.js'
	import Chart from '../static/js/Chart.min.js'
	import bootstrap from '../static/js/bootstrap.min.js'
	import tooplateScripts from '../static/js/tooplate-scripts.js'
	import menus from './router/menu.js' //引入菜单数据


	export default {
		name: 'App',
		data() {
			return {
				menuList: [],
				realName:'',
				userInfo:{}
			}
		},
		methods:{
			logout:function(){
				this.$clearAllCookie()
				localStorage.clear()
				sessionStorage.clear()
				// this.$setCookie('lastHref',window.location.href,30*60)
				this.$router.push('/login')
			},
			changeMode:function(){
				
			},
			getUserInfo: async function(){
				var that =  this
				if(that.$getCookie('userId')==null||that.$getCookie('userId')==''){
					
				}else{
					var res = await this.$http('/user-server/getUserById/'+that.$getCookie('userId'))
					this.userInfo = res.data.content
					//非管理员模式 修改完信息以后如果是  未激活状态 跳转到登录页
					if(this.userInfo.status==2&&!this.$superAdminMode){
						this.$warnMsg('账号审核中暂不可使用')
						this.$router.push('/userCenter')
					}
				}
				
			}
		},
		mounted: function() {
			if(this.$superAdminMode){
				this.menuList = menus.dataFroSuperAdmin
			}else{
				this.menuList = menus.dataFroGeneralUser
			}
			
			this.realName=this.$getCookie('realName')
			// console.log(this.$getCookie('realName'))
			this.$log(this.menuList.length)
			this.getUserInfo()
		}
	}
</script>

<style>
	@import url("../static/css/fontawesome.min.css");
	@import url("../static/css/bootstrap.min.css");
	@import url("../static/css/templatemo-style.css");
</style>

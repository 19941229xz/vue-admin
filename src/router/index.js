import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import mill from '@/components/mill'
import addMill from '@/components/addMill'
import editMill from '@/components/editMill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
		  path: '/mill',
		  name: 'mill',
		  component: mill
		},
		{
		  path: '/addMill',
		  name: 'addMill',
		  component: addMill
		},
		{
		  path: '/editMill',
		  name: 'editMill',
		  component: editMill
		}
  ]
})

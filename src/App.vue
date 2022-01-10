<template>
  <div id="app">
	<button @click="increase()">+</button>
	<p>{{$store.state.count}}</p>
	<router-view></router-view>
	<tab-bar>
		<tab-bar-item path='/home'>
			<template #item-icon-active>
				<img src="../public/img/home-active.png" />
			</template>
			<template #item-icon>
				<img src="../public/img/home.png" />
			</template>
			<template #item-text>
				首页
			</template>
		</tab-bar-item>
		<tab-bar-item path='/category'>
			<template #item-icon-active>
				<img src="../public/img/category-active.png" />
			</template>
			<template #item-icon>
				<img src="../public/img/category.png" />
			</template>
			<template #item-text>
				类别
			</template>
		</tab-bar-item>
		<tab-bar-item path='/cart'>
			<template #item-icon-active>
				<img src="../public/img/shopping-cart-active.png" />
			</template>
			<template #item-icon>
				<img src="../public/img/shopping-cart.png" />
			</template>
			<template #item-text>
				购物车
			</template>
		</tab-bar-item>
		<tab-bar-item path='/profile'>
			<template #item-icon-active>
				<img src="../public/img/user-fill-active.png" />
			</template>
			<template #item-icon>
				<img src="../public/img/user-fill.png" />
			</template>
			<template #item-text>
				我的
			</template>
		</tab-bar-item>
	</tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue'
import TabBarItem from './components/TabBarItem.vue'
//const TabBar = () => import('./components/TabBar.vue')
export default {
  name: 'App',
  components: {
    TabBar,
	TabBarItem
  },
  methods:{
	increase(){
		this.$store.commit('increament')
	}
  }
}
</script>

<style>

</style>

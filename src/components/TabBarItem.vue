<template>
	<div class="tab-bar-item" @click="tabbarClick">
		<div v-show="isActive"><slot name="item-icon-active"></slot></div>
		<div v-show="!isActive"><slot name="item-icon"></slot></div>
		<div :class="{'active': isActive}">
			<slot name="item-text"></slot>
		</div>
		
	</div>
</template>

<script>
	
	export default {
		name:'TabBarItem',
		props:
			{
				path:String
			},
		// data() {
		// 	return {
		// 		isActive:false
		// 	}
		// },
		computed:{
			isActive(){
				return this.$route.path == this.path
			}
		},
		methods:{
			tabbarClick(){
				//console.log(this.path);
				this.$router.push(this.path);
			}
		}
	}
</script>

<style>
	.active {
		color: red;
	}
</style>

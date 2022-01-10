<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name:'TabBar'
}
</script>

<style>
	#tab-bar {
		display: flex;
		background-color: #F6F6F6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		
	}
	.tab-bar-item {
		flex: 1;
		height: 53px;
		text-align: center;
	}
	.tab-bar-item img{
		height: 32px;
		width: 32px;
	}
</style>

<template>
	<div class="sidebar">
		<transition
			enter-active-class="animate__animated animate__slideInLeft"
			leave-active-class="animate__animated animate__slideOutRight"
			appear
			mode="out-in"
		>
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
export default {};
</script>

<style scoped>
.sidebar {
	width: 100%;
	display: flex;
}
</style>

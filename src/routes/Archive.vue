<template>
	<div>
		<h2>This is the archive page</h2>
		<ul>
			<li v-for="item in archived" :key="item.id">{{ item.content }}</li>
		</ul>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
	computed: {
		...mapGetters({
			archived: 'getArchived',
		}),
	},
};
</script>

<style></style>

<template>
	<div class="app-content">
		<h2>This is the archive page</h2>

		<ul>
			<transition-group
				enter-active-class="animate__animated animate__backInLeft animate__faster"
				leave-active-class="animate__animated animate__backOutRight animate__faster"
				mode="out-in"
			>
				<li
					v-for="item in archived"
					:key="item.id"
					class="list-item"
					v-list-type.archive
				>
					{{ item.content }}
				</li>
			</transition-group>
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

<style scoped>
.app-content {
	background-color: rgba(224, 102, 102, 0.3);
}
ul {
	width: 70%;
}
</style>

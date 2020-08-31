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
					v-content.cross
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
	directives: {
		content: {
			bind(el, binding, vnode) {
				if (binding.modifiers['cross']) {
					console.log('HAH');
					el.style.textDecoration = 'line-through';
				}
			},
		},
	},
};
</script>

<style>
.app-content {
	background-color: rgba(224, 102, 102, 0.3);
}
ul {
	width: 70%;
}
.list-item {
	width: 100%;
	font-size: 20px;
	list-style: none;
	margin: 25px 5px;
	padding: 10px 20px;
	background-color: rgba(228, 54, 54, 0.5);
}
</style>

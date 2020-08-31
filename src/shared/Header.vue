<template>
	<div>
		<h1>to-do list</h1>
		<!-- Navbar here -->
		<div class="navbar">
			<ul class="navbar-items">
				<router-link to="/" tag="li" active-class="active" exact
					><a>To-do's</a></router-link
				>
				<router-link
					to="/completed"
					tag="li"
					active-class="active"
					exact
					><a>Completed</a></router-link
				>
				<router-link to="/archive" tag="li" active-class="active" exact
					><a>Archive</a></router-link
				>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>

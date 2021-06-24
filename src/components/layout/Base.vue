<template>
	<v-app>
		<Navigation />
		<Navbar />
		<v-main>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>
		<Footer />
	</v-app>	
</template>
<script>
	import Navbar from "./Navbar.vue";
	import Navigation from "./Navigation";
	import Footer from "./Footer";
	export default {
		components: {
			Navbar,
			Navigation,
			Footer,
		},
	};
</script>

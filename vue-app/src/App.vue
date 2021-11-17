<script>
import NavLink from './components/navlink.vue'

export default {
	name: 'App',
	components: {
		NavLink
	}
}
</script>

<template>
	<div id="app">
		<nav>
      <navLink url="/" text="Acceuil" />
      <navLink url="/about" text="A propos" />
      <navLink url="/contact" text="Contact" />
			
		</nav>
		
	</div>
</template>

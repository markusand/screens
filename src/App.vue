<template>
	<div id="app">
		<header id="app__header">
			<section />
			<router-link to="/">
				<img svg-inline src="@/assets/logos/cdm.svg" class="logo-cdm">
			</router-link>
			<section />
		</header>
		<router-view id="app__content" />
	</div>
</template>

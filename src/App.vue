<template>
	<div id="app"
		:oncontextmenu="`return ${isDevelopment}`"
		:class="{ 'prod-ready': !isDevelopment }">
		<header id="app__header">
			<section />
			<router-link to="/">
				<img svg-inline src="@/assets/logos/cdm.svg" class="logo-cdm">
			</router-link>
			<section>
				<ul class="nav-languages">
					<li v-for="language in $i18n.availableLocales" :key="language">
						<a :href="`#${language}`"
							:class="{ 'active': language === $i18n.locale }"
							@click.prevent="$i18n.locale = language">
							{{ language }}
						</a>
					</li>
				</ul>
			</section>
		</header>
		<router-view id="app__content" />
	</div>
</template>

<script>
export default {
	name: 'App',
	data: () => ({ isDevelopment: process.env.NODE_ENV === 'development' }),
};
</script>

<template>
	<div id="app">
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

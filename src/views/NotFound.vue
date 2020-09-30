<template>
	<main id="page-not-found">
		<container :section="$t('404.not_found')" class="fill">
			<div class="not-found">
				<h1 class="code-404" data-animate="reveal-up">404</h1>
				<h2 data-animate="fade-up" data-delay="150">{{ $t('404.got_lost') }}</h2>
				<p data-animate="fade-up" data-delay="300">{{ $t('404.not_here') }}</p>
				<p data-animate="fade-up" data-delay="450">
					<button class="btn" @click="$router.go(-1)">{{ $t('404.go_back') }}</button>
					<router-link to="/" class="btn btn--plain">{{ $t('404.go_menu') }}</router-link>
				</p>
			</div>
		</container>
	</main>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container } from '@/components/layout';

export default {
	name: 'NotFound',
	components: { Container },
	mixins: [TransitionsViews],
};
</script>

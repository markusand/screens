<template>
	<main id="page-safety-rescue">
		<!-- Emergency number -->
		<block-image
			src="https://images.pexels.com/photos/263356/pexels-photo-263356.jpeg?auto=compress&cs=tinysrgb&h=800"
			width="400"
			height="575"
			class="block-image-box emergency-phone"
			shadow>
			<h3 data-animate="reveal-down">{{ $t('safety.rescue.emergency_phone') }}</h3>
			<article
				class="block-image-box__box box box--alert"
				data-animate="reveal-down"
				data-delay="300">
				<strong>112</strong>
				<p data-animate="fade-up" data-delay-in="600">
					{{ $t('safety.rescue.european_phone') }}
				</p>
				<p
					class="note"
					data-animate="fade-up"
					data-delay-in="750"
					data-delay-out="150">
					{{ $t('safety.rescue.disclaimer') }}
				</p>
			</article>
		</block-image>

		<!-- Emergency call -->
		<section data-animate="fade-up">
			<p data-animate="fade-up">{{ $t('safety.rescue.phone_directives') }}</p>
			<ul class="list list--bignum">
				<li v-for="(question, i) in phoneQuestions" :key="question">
					<h4 data-animate="fade-up" :data-delay="i * 150">
						{{ $t(`safety.rescue.phone_questions.${question}`) }}
					</h4>
					<p data-animate="fade-up" :data-delay="i * 150 + 150">
						{{ $t(`safety.rescue.phone_questions.${question}_desc`) }}
					</p>
				</li>
			</ul>
		</section>

		<!-- Distress signals -->
		<container :tag="$t('safety.rescue.distress_signals')" class="fill cols distress" dual-tag>
			<article class="col col--6 distress__helicopter">
				<p data-animate="fade-up">
					{{ $t('safety.rescue.distress.helicopter_message') }}
				</p>
				<figure data-animate="fade-up" data-delay="150">
					<img svg-inline src="@/assets/vectors/silhouettes/hands_up.svg">
					<figcaption>{{ $t('safety.rescue.distress.helicopter_yes') }}</figcaption>
				</figure>
				<figure data-animate="fade-up" data-delay="300">
					<img svg-inline src="@/assets/vectors/silhouettes/hand_up.svg">
					<figcaption>{{ $t('safety.rescue.distress.helicopter_no') }}</figcaption>
				</figure>
			</article>
			<article class="col col--auto">
				<p data-animate="fade-up" data-delay="150">
					{{ $t('safety.rescue.distress.morse_sos') }}
				</p>
				<p data-animate="fade-up" data-delay="300" class="distress__sos">
					<span data-morse-beep="S">S</span>
					<span data-morse-beep="O">O</span>
					<span data-morse-beep="S">S</span>
				</p>
			</article>
		</container>
	</main>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container, BlockImage } from '@/components/layout';

export default {
	name: 'SafetyRescue',
	components: { Container, BlockImage },
	mixins: [TransitionsViews],
	data() {
		return { phoneQuestions: ['what', 'when', 'where', 'who'] };
	},
};
</script>

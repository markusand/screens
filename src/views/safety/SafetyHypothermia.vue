<template>
	<main id="page-safety-hypothermia">
		<!-- Silhouette animation -->
		<section class="animation">
			<img
				svg-inline
				src="@/assets/vectors/silhouettes/body.svg"
				:style="silhouetteColor"
				data-animate="fade">
			<div class="animation__container">
				<p class="animation__temperature">
					{{ temperature | decimals(1) }}
					<sup><small>&deg;C</small></sup>
				</p>
				<transition-group
					v-if="showSymptoms"
					tag="ul"
					name="fade"
					mode="out-in"
					class="animation__symptoms">
					<li v-for="symptom in symptoms" :key="symptom">
						{{ $t(`safety.hypothermia.symptoms.${symptom}`) }}
					</li>
				</transition-group>
				<aside data-animate="fade-up">
					{{ $t('safety.hypothermia.definition') }}
				</aside>
			</div>
		</section>

		<!-- Safety tips -->
		<section>
			<div class="cols">
				<div class="col col--6">
					<container :tag="$t('safety.hypothermia.prevention_tips')">
						<ul class="list-icons">
							<li
								v-for="(tip, i) in prevention.dos"
								:key="tip"
								data-animate="fade-up"
								:data-delay="i * 150">
								<i class="ri-check-line icon icon--success" />
								{{ $t(`safety.hypothermia.tips.${tip}`) }}
							</li>
							<li
								v-for="(tip, i) in prevention.donts"
								:key="tip"
								data-animate="fade-up"
								:data-delay="prevention.dos.length * 150 + i * 150">
								<i class="ri-close-line icon icon--alert" />
								{{ $t(`safety.hypothermia.tips.${tip}`) }}
							</li>
						</ul>
					</container>
				</div>

				<!-- Treatment -->
				<div class="col col--auto">
					<container :tag="$t('safety.hypothermia.in_case_of')">
						<ul class="list-icons">
							<li
								v-for="(tip, i) in treatment.dos"
								:key="tip"
								data-animate="fade-up"
								:data-delay="i * 150">
								<i class="ri-check-line icon icon--success" />
								{{ $t(`safety.hypothermia.tips.${tip}`) }}
							</li>
							<li
								v-for="(tip, i) in treatment.donts"
								:key="tip"
								data-animate="fade-up"
								:data-delay="treatment.dos.length * 150 + i * 150">
								<i class="ri-close-line icon icon--alert" />
								{{ $t(`safety.hypothermia.tips.${tip}`) }}
							</li>
						</ul>
					</container>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container } from '@/components/layout';
import { constrain, decimals, round } from '@/utils/filter.numbers';

import { hypothermia } from '@/config/safety';

const { animation, symptoms, prevention, treatment } = hypothermia;
const colors = ['#c23b22', '#BA4635', '#B15148', '#A95C5A', '#A1676D', '#987280', '#907D93', '#8888A5', '#7F93B8', '#779ECB'];

export default {
	name: 'Safetyhypothermia',
	filters: { decimals },
	components: { Container },
	mixins: [TransitionsViews],
	data() {
		return {
			temperature: 37,
			timeout: null,
			decrease: true,
			prevention,
			treatment,
		};
	},
	computed: {
		silhouetteColor() {
			const { temperature } = this;
			const cold = colors[constrain((37 - Math.ceil(temperature)) * 2, 0, 9)];
			const warm = colors[37 - Math.ceil(temperature)];
			return `--in-color:${warm}; --out-color:${cold};`;
		},
		symptoms() {
			return Object.keys(symptoms).filter(symptom => {
				const [min, max] = symptoms[symptom];
				return this.temperature >= min && this.temperature <= max;
			});
		},
		showSymptoms() {
			return this.decrease || this.temperature === 28;
		},
	},
	watch: {
		temperature: {
			immediate: true,
			handler() {
				const { temperature } = this;
				const { DECREASE_TIME, INCREASE_TIME, WAIT_TIME } = animation;
				this.decrease = temperature > 28 ? temperature < 37 ? this.decrease : true : false;
				const wait = temperature > 28 && temperature < 37
					? this.decrease
						? DECREASE_TIME
						: INCREASE_TIME
					: WAIT_TIME;
				const step = this.decrease ? -0.1 : 0.1;
				this.timeout = setTimeout(() => {
					this.temperature = round(this.temperature + step, 1);
				}, wait);
			},
		},
	},
	beforeDestroy() {
		clearTimeout(this.timeout);
	},
};
</script>

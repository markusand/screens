<template>
	<main id="page-safety-equipment">
		<header class="header" data-animate="reveal-right" data-delay-out="600" />
		<section>
			<h3 data-animate="reveal-down">
				{{ $t('safety.equipment.equip_yourself') }}
			</h3>
			<p data-animate="fade-up" data-delay-in="300">
				{{ $t('safety.equipment.proper_equipment') }}
			</p>
		</section>
		<div class="fill cols">
			<div class="col col--7">
				<container :tag="$t('safety.equipment.essentials')">
					<ul class="list-icons columns-2">
						<li
							v-for="(item, i) in equipment.essential"
							:key="item"
							data-animate="fade-up"
							:data-delay="(i % 5) * 150">
							<img :src="`/assets/vectors/equipment/${item}.svg`" class="icon">
							{{ $t(`safety.equipment.items.${item}`) }}
						</li>
					</ul>
				</container>
			</div>
			<div class="col col--auto">
				<container :tag="$t('safety.equipment.recommended')">
					<ul class="list-icons">
						<li
							v-for="(item, i) in equipment.recommended"
							:key="item"
							data-animate="fade-up"
							:data-delay="i * 150">
							<img :src="`/assets/vectors/equipment/${item}.svg`" class="icon">
							{{ $t(`safety.equipment.items.${item}`) }}
						</li>
					</ul>
				</container>
			</div>
		</div>
		<p class="note" data-animate="fade-up" data-delay="300">
			{{ $t('safety.equipment.disclaimer') }}
		</p>
	</main>
</template>

<script>
import TransitionsViews from '@/utils/mixin.transitions-views';
import { Container } from '@/components/layout';
import { equipment } from '@/config/safety';

export default {
	name: 'SafetyEquipment',
	components: { Container },
	mixins: [TransitionsViews],
	data() {
		return { equipment };
	},
};
</script>

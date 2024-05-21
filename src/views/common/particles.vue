<template>
	<div class="box">
		<vue-particles id="tsparticles" class="login-partic" :options="options" />
	</div>
</template>
 
<script>
import { reactive, toRefs } from "vue";
 
export default {
	setup(props) {
		const data = reactive({
			options: {
				fpsLimit: 100,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: 'push'
						},
						onHover: {
							enable: true,
							mode: 'grab'
						},
						resize: true
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.6,
							size: 10
						},
						push: {
							quantity: 4
						},
						repulse: {
							distance: 200,
							duration: 0.4
						}
					}
				},
				particles: {
					color: {
						value: '#ffffff'
					},
					links: {
						color: '#ffffff',
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1
					},
					collisions: {
						enable: true
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: false,
						speed: 3,
						straight: false
					},
					number: {
						density: {
							enable: true,
							value_area: 800
						},
						value: 100
					},
					opacity: {
						value: 0.5
					},
					shape: {
						type: 'circle'
					},
					size: {
						random: true,
						value: 4
					}
				},
				detectRetina: true
			}
		})
 
		return {
			...toRefs(data),
		}
	}
}
</script>
<style lang="less">
.box {
    display: block;
}
</style>
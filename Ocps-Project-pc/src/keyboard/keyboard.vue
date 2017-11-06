<template>
	<transition name="slide">
		<div class="keyboard animated" v-show="show" @touchstart.stop.prevent="fn">
			<!-- 完成 按钮-->
			<div class="done">
				<p class="text" @touchstart="complete">完成</p>
			</div>
			<!-- 键盘区域 -->
			<div class="list">
				<div class="key" @touchstart="typing('1')">1</div>
				<div class="key" @touchstart="typing('2')">2</div>
				<div class="key" @touchstart="typing('3')">3</div>
				<div class="key" @touchstart="typing('4')">4</div>
				<div class="key" @touchstart="typing('5')">5</div>
				<div class="key" @touchstart="typing('6')">6</div>
				<div class="key" @touchstart="typing('7')">7</div>
				<div class="key" @touchstart="typing('8')">8</div>
				<div class="key" @touchstart="typing('9')">9</div>
				<div v-if="type == 'money'" class="key dot" @touchstart="typing('.')">
					<i class="iconfont icon-dot"  >.</i>
				</div>
				<div v-if="type == 'password' || type == 'number'" class="key dot disable">
				</div>
				<div class="key"
					@touchstart="typing('0')">0</div>
				<div class="key"
					@touchstart="typing('')"
					>
					<i class="iconfont icon-keyboard-delete del"></i>
				</div>
			</div>

		</div>
	</transition>
</template>
<script>
	export default {
		props: ['show','type'],
		methods: {
			/*防止点击完成按钮左边的空白区域收起键盘*/
			fn () {},
			/*输入*/
			typing (val) {
				this.$emit('typing', val);
			},
			/*点击完成*/
			complete () {
				this.$emit('complete');
			}
		}
	}
</script>

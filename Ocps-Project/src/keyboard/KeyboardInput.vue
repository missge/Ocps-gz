<template>
	<div class="keyboard-box">
		<!-- 自定义输入框 -->
		<div class="input-box" @touchstart.stop="focus">
			<!-- 左侧标签 -->
			<span class="label">{{label}}  </span>
			<!-- 右侧内容 -->
			<div class="content">
				<p class="input">{{valstr}}</p>
				<p class="placeholder" v-show="val.length === 0 && !placeholderflag">{{placeholder}}</p>
				<!-- 光标 -->
				<p class="cursor" :style="{visibility: cursor ? 'visible' : 'hidden'}"></p>
			</div>
		</div>
		<!-- 自定义键盘 -->
		<keyboard
			:show="keyboard"
      :type="type"
			@typing="typing"
			@complete="blur" />
	</div>
</template>
<script>
	import keyboard from './keyboard'
	export default {
		name: 'KeyboardInput',
		components: {
			keyboard
		},
		created () {
			document.addEventListener('touchstart', () => {
				this.blur();
			});
		},
		props: {
			value: '',
			inter: {
				default: 5
			},
			decimal: {
				default: 2
			},
			label: {
				default: 'label'
			},
      type: {
        default: 'money'
      },
			placeholder: {
				default: 'placeholder'
			}
		},
		data () {
			return {
				cursor: false,
				keyboard: false,
        placeholderflag: false,
				/*value 在组件中的值*/
				val: '',
        valstr: '',
				aIllegal: ['00', '01' ,'02','03','04','05','06','07','08','09', '0..', '.'],
				cursorDuration: 600,
				bodyHeight: '',
				bodyOverflow: ''
			}
		},
		methods: {
			/*focus*/
			focus () {
			  /*隐藏其他的光标和键盘*/
        for(let i=0; i<this.$parent.$children.length;i++){
          this.$parent.$children[i].blur();
        }
        this.placeholderflag=true;
        /*显示键盘*/
				this.showKeyboard();
				/*显示光标*/
				this.showCursor();
				/*闪烁光标*/
				this.blinkCursor();
			},
			blinkCursor () {
				clearInterval(this.intervalID);
				this.intervalID = setInterval(()=>{
					this.cursor = !this.cursor;
				}, this.cursorDuration);
			},
			unblinkCursor () {
				clearInterval(this.intervalID);
			},
			/*blur*/
			blur () {
				this.placeholderflag=false;
				/*隐藏光标*/
				this.hideCursor();
				/*停止光标闪烁*/
				this.unblinkCursor();
				/*隐藏键盘*/
				this.hideKeyboard();
				/*
					附加 00, 如果用户输入了一个以 . 结尾的值就点完成了,
					那么这个时候就在后面加上00
				*/
		        if(this.type === 'money'){
					this.toCompletion();
		        }
				/*通知父组件, 老子值出来了*/
				/*
					校验用户输入的金额是不是为 0, 如果是的话, 直接重置
				*/
				this.checkValue();
				this.notify();

			},
			showKeyboard () {
				this.keyboard = true;
			},
			hideKeyboard () {
				this.keyboard = false;
			},
			showCursor () {
				this.cursor = true;
			},
			hideCursor () {
				this.cursor = false;
			},
			checkValue () {
				if (parseFloat(this.val) === 0) {
					this.val = '';
				}
			},
			/*判读是否需要加0*/
			toCompletion () {
				let list = this.value.split('.');
				if (typeof list[1] === 'undefined') {
					if (this.val !== '') {
						this.val = this.val + '.';
						this.completion(this.decimal);
					}
				} else {
					if (list[1].length < this.decimal) {
						this.completion(this.decimal - list[1].length);
					}
				}
			},
			completion (len) {
				let v = '';
				for(let i =0;i<len;i++){
					v = v + '0';
				}
				this.val = this.val + v;
			},
			notify () {
				this.$emit('input',this.val);
			},
			del () {
				/*删除值并不会触发值的校验, 所以需要手动再触发一次*/
				this.val = this.val.slice(0, -1);
				this.notify();
			},
			/*输入*/
			typing (value) {
				/*如果是点击删除*/
				if (value === '') {
					this.del();
				}
				/*保存旧的值*/
				let oldValue = this.val;
				/*获取新的值*/
				this.val = this.val + value;
        if(this.type === 'password'){
          this.valstr='';
          for(let i=0; i<this.val.length;i++){
            this.valstr = this.valstr + '*'
          }
        }else{
          this.valstr = this.val;
        }
        
				/*检验新值, 如果没有通过检测, 恢复值*/
				if (!this.passCheck(this.val)) {
					this.val = oldValue;
          this.valstr = this.val;
          if(this.type ==='password'){
            this.valstr='';
            for(let i=0; i<this.val.length;i++){
              this.valstr = this.valstr + '*'
            }
          }else{
            this.valstr = this.val;
          }
					return;
				}
				/*为了让外界同步输入, 需要发送事件*/
				this.notify();
			},
			passCheck (val) {
				/*验证规则*/
				let aRules = [
						this.illegalInput,
						this.illegalValue,
						this.accuracy
					]
				return aRules.every((item) => {
					return item(val);
				});
			},
			illegalInput (val) {
				if (this.aIllegal.indexOf(val) > -1) {
					return false;
				}
				return true;
			},
			/*非法值*/
			illegalValue (val) {
				if (parseFloat(val) != val) {
					return false;
				}
				return true;
			},
			/*验证精度*/
			accuracy (val) {
				let v = val.split('.')
				if (v[0].length > this.inter) {
					return false;
				}
				if (v[1] && (v[1].length) > this.decimal) {
					return false;
				}
				return true;
			}
		}
	}
</script>

import Vue from 'vue'

import wcKeyboard from './keyboardInput'

export default {
	install (Vue, options = {}) {
		Vue.component('wcKeyboard', Vue.extend(wcKeyboard));
	}
}
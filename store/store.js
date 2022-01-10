import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
		
		count: {
			age:18,
			name: 'tom'
		}
    }
  },
  mutations: {
    increament (state) {
      // state.count['address'] = 'NC'
		delete state.count.name
    }
  }
})

export default store
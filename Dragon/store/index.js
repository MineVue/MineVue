import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // module 조합 시 로컬 state
    state: { // Store에서 관리하는 전체 상태
        comments_A: ['hi im a'],
        comments_B: ['hi im b']
    },

    // module 조합 시에도 글로벌 mutations, actions, getters
    mutations: { // 상태값을 변경시키는 동작들을 정의
        addCommentToA (state, payload) {
            // 변이는 무조건 동기적
            state.comments_A.push(payload.msg);
        },
        addCommentToB (state, msg) {
            state.comments_B.push(payload.msg);
        }
    },
    actions: { // mutation의 메소드들을 호출하는 액션을 정의
        // 비동기로직은 여기에 넣는다.
    },
    getters: { // 상태값을 조작, 계산하여 return, Angular의 filter처럼 사용
        // $store.getters.**** 와 같이 접근할 수 있음
        doneTodos: (state) => {
            return state.todos.filter(todo => todo.done);
        }
    }
});


import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export const store = createStore({
  state: {
    cart : 0,
    items : [],
    item : {},
    prev : []
    
  },
 
  mutations: {
    setitem(state, new_item){
     
        state.item = new_item
    

    },
    setItems(state, ls) {
      if(ls[1] == -1){
        console.log(ls[0])
        console.log("Nu mai aveam ")
        ls[0]['quantity'] +=1
        state.items.push(ls[0])
        console.log(state.items)
      }else{
        console.log("mai avem")
        console.log(state.items)
        state.items[ls[1]]['quantity'] +=1
      }
     
        // Înlocuiește întreaga listă cu newItems
    },
    setcart(state, nr) {
        state.cart += nr;  // Înlocuiește întreaga listă cu newItems
      },

    setcartback(state){
      state.cart=0

    },
    setItemsback(state){
      state.items = []
    }
  },
  actions: {
    itemset({commit}, neww){
      commit('setitem', neww)

    },
    increase({ commit }, [newItems, a]) {
      console.log(a)
      commit('setItems', [newItems,a]);  // Înlocuiește lista existentă cu newItems
    },
    increaseCart({ commit }, nr) {
        commit('setcart', nr);  // Înlocuiește lista existentă cu newItems
      },
    cartzero({commit}){
      commit('setcartback');

    },
    itemszero({commit}){
      commit('setItemsback')
    }
    
    
  
  },
  plugins: [createPersistedState()]
});
export default store;
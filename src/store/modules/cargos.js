
import rucdeservice from '@/services/rucdeService';
export default {
    namespaced: true,
    state:{
        codigo_cargo:'',
        nombre:'' ,
        list: [],
        errors: []       
    },
    getters:{
        codigoCargo(state){
            return state.codigo_cargo;
        },
        nombre(state){
            return state.nombre;
        }
    },
    mutations:{
        SET_CODIGOCARGO(state,codigo_cargo){
            state.codigo_cargo = codigo_cargo;
        },
        SET_NOMBRE(state,nombre){
            state.nombre = nombre;
        },
        set(state, items) {
            state.list = items
        },
        add(state, item) {
            state.list.push(item)
        },
        remove(state, { item }) {
            state.list.splice(state.list.indexOf(item), 1)
        },
        replace(state, item) {
            state.list = [
                ...state.list.filter(element => element.id !== item.id),
                item
            ]
        },
        add_error(state, error) {
            state.errors.push(error)
        }
    },
    actions:{
        setCodigoCargo({commit},codigo_cargo){
            commit('SET_CODIGOCARGO',codigo_cargo);
        },
        setNombre({commit},nombre){
            commit('SET_NOMBRE',nombre);
        },
        async load({ commit }) {
            const  data  = await rucdeservice.getCargos();
            commit('set', data)
        },
        async create({ commit }, item) {
            const  data  = await rucdeservice.postCargo(item);
            commit('add', data)
        },
        async update({ commit }, item) {
            const  data  = await rucdeservice.putCargo(item.id, item);
            commit('replace', data)
        },
        // delete({ commit }, item) {
        //     this.$axios.delete(item.url).then(({ data }) => commit('remove', data)).catch(error => commit('add_error', error))
        // }
    }
    }

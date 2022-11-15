import axios from "axios";

export default {
    state: {
        subSections:[],
        session_url: "http://localhost:5000/api/v1/subSections"
    },
    getters: {
        allSubSections: (state)=>{
            return state.subSections
        }
    },
    actions: {
        async getSubSections({commit, state}) {
            const response = await axios.get(state.session_url);
            commit('setSubSections', response.data)
        }
    },
    mutations: {
        setSubSections: (state, subSections)=>{
            state.subSections = subSections
        }
    }
}


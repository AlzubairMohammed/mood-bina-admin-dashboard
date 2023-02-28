import axios from "axios";

export default {
    state: {
        user:{},
        users:[],
        config: {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("user_token"),
            },
          },
        login_url: "https://mod-bina.com/api/v1/auth/login",
        get_users_url: "https://mod-bina.com/api/v1/users",
        session_url: " https://mod-bina.com/api/v1/auth/me",
    },
    getters: {
        allUsers: (state)=>{
            return state.users
        },
        userData: (state) => {
            return state.user;
          },
    },
    actions: {
        async login({ commit, state }, user) {
            try {
              const response = await axios.post(state.login_url, user);
              console.log("success");
              console.log(response.data);
              localStorage.setItem("user_token", response.data.token);
              commit("loginUser", response.data);
            } catch (err) {
              commit("loginUser", err.response.data);
            }
          },
        async createUser({commit, state} ,users) {
            this.users = Object.fromEntries(users)
            this.users.address = 'kalakla'
            this.users.image = 'a.jpg'
            this.users.country = 'sudan'
            console.log(Object.fromEntries(users));
            const response = await axios.post(state.get_users_url, this.users)
            commit('createUser', response.data)
        },
        async getUsers({commit, state}) {
            const response = await axios.get(state.get_users_url);
            commit('setUsers', response.data)
        },
        async deletUser({commit, state} ,id) {
            console.log(id);
            const response = await axios.delete(`${state.get_users_url}/${id}`)
            commit('deletUserMutation', response.data)
        },
        async updateUser({ commit, state }, payload) {
            const { id, user } = payload;
            console.log(user.userName);
            console.log(user.role);
            await axios.put(`${state.get_users_url}/${id}`, user);
            commit("editUser");
          },
          async getUser({ commit, state }) {
            const response = await axios.get(state.session_url, state.config);
            commit("setUser", response.data);
          } 
    },
    mutations: {
        loginUser: (state, user) => {
            if (user.success == true) {
              state.token = user.token;
            } else {
              console.log(user.success);
            }
          },
        createUser: (state, users)=>{
            state.users.unshift(users)
        },
        setUsers: (state, users)=>{
            state.users = users
        },
        deletUserMutation: ()=>{
            console.log('user deleted');
        },
        editUser: ()=>{
            console.log('user updated');
        },
        setUser: (state, user) => {
            state.user = user;
          }
    }
}


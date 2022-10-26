import { createApp } from 'vue'
// import {createRouter, createWeHistory} from 'vue-router'
import App from './App.vue'
// import EmployeeList from './veiw/employee/EmployeeList.vue'


// const routes = [
//     // { path: '/', component: Home },
//     { path: '/employee', component: EmployeeList },
//   ]

//   const router = createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: createWeHistory(),
//     routes, // short for `routes: routes`
//   })
//   // 5. Create and mount the root instance.


createApp(App).mount('#app')

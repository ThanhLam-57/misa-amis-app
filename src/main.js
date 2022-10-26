import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import VueClickAway from "vue3-click-away";
import EmployeeList from '@/veiw/employee/EmployeeList.vue';
import ReportList from './veiw/report/ReportList.vue';

// const routes = [
//     {path: "/nhan-vien", component: EmployeeList, name: "/nhan-vien" },
//     {path: "/bao-cao", component:ReportList }
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes: routes,
// })
const routers = [
    { path: "/", redirect: "nhan-vien", name: "/" },
    { path: "", redirect: "nhan-vien", name: "" },
    {path: "/nhan-vien", component: EmployeeList, name: "/nhan-vien" },
    {path: "/bao-cao", component:ReportList }
  ];
// B3: Khởi tạo router:
const router = createRouter({
    history: createWebHistory(),
    routes: routers,
});

 const app =createApp(App);

 app.use(VueClickAway);
 app.use(router);
 app.mount('#app');


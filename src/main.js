
import "./styles.css";
import DetaliiProdus from "./components/DetaliiProdus.vue";
import { createRouter,createWebHistory } from 'vue-router'
import { createApp } from "vue";
import App from './App.vue'
import HomePreview from "./components/HomePreview.vue";
import AccesoriiBarbati from "./components/AccesoriiBarbati.vue";
import AccesoriiFemei from "./components/AccesoriiFemei.vue";
import CosCump from "./components/CosCump.vue";
import { store } from "./store";
import AccesoriiGenerale from "./components/AccesoriiGenerale.vue";
import SectiunePlata from "./components/SectiunePlata.vue";
const route = createRouter({
    history: createWebHistory(),
    routes:[
        {
        path: "/",
        component: HomePreview
        },
        {
            path: "/Barbati",
            component: AccesoriiBarbati
        }
       ,{
        path: "/Femei",
        component: AccesoriiFemei,

       },
       {
        path: "/cos",
        component: CosCump,

       },
       {
        path: "/payment",
        component: SectiunePlata,

       },
       {
        path: "/Universale",
        component: AccesoriiGenerale,

       },
       {
        path: "/produs",
        component: DetaliiProdus,

       }
       
    ]
})

createApp(App).use(route).use(store).mount("#app");

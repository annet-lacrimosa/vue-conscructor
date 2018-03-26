import Page404 from './components/Page404.vue'
import About from './components/About.vue'

export default [
    {path: '/about', component: About, name: 'about', meta: {title: ``}},
    {path: '*', component: Page404, name: '404', meta: {title: ` Ops... there is nothing found`}}
]
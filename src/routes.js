import Home from './View/HomePage.vue'
import Article from './View/Article.vue'
import Category from './View/Category.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/article', component: Article},
    {path: '/category', component: Category}

];
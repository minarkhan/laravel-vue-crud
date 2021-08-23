import AllProduct from './components/product/AllProduct.vue';
import CreateProduct from './components/product/CreateProduct.vue';
import EditProduct from './components/product/EditProduct.vue';
import ShowProduct from './components/product/ShowProduct';
import AllPost from './components/post/AllPost.vue';
import CreatePost from './components/post/CreatePost.vue';
import EditPost from './components/post/EditPost.vue';
import ShowPost from './components/post/ShowPost';
import Home from './components/Home';

export const routes = [{
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'products',
        path: '/products',
        component: AllProduct
    },
    {
        name: 'product.create',
        path: '/product/create',
        component: CreateProduct
    },
    {
        name: 'product.edit',
        path: '/product/edit/:id',
        component: EditProduct
    },
    {
        name: 'product.show',
        path: '/product/show/:id',
        component: ShowProduct
    },
    {
        name: 'posts',
        path: '/posts',
        component: AllPost
    },
    {
        name: 'post.create',
        path: '/post/create',
        component: CreatePost
    },
    {
        name: 'post.edit',
        path: '/post/edit/:id',
        component: EditPost
    },
    {
        name: 'post.show',
        path: '/post/show/:id',
        component: ShowPost
    }
];
<template>
    <div class="">
        <h2>Products List</h2>
        <router-link to="/product/create" class="btn btn-primary mt-2 mb-5">Create Product</router-link>

        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Detail</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.detail }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'product.edit', params: { id: product.id }}" class="btn btn-success">Edit</router-link>
                        <router-link :to="{name: 'product.show', params: { id: product.id }}" class="btn btn-success">Show</router-link>
                        <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/products/')
                .then(response => {
                    this.products = response.data;
                });
        },
        methods: {
            deleteProduct(id) {
                this.axios
                    .delete(`http://localhost:8000/api/products/${id}`)
                    .then(response => {
                        let i = this.products.map(data => data.id).indexOf(id);
                        this.products.splice(i, 1)
                    });
            }
        }
    }
</script>

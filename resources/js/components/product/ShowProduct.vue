<template>
    <div>
        <h3 class="text-center">Details of Product</h3>
        <div class="row">
            <div class="col-md-6">
                <!-- <form @submit.prevent="updateProduct"> -->
                    <div class="form-group">
                        <label>Name: {{ product.name }}</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Detail: {{ product.detail }}</label>
                        <input type="text" class="form-control" v-model="product.detail">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                <!-- </form> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/products/${this.$route.params.id}`)
                .then((res) => {
                    this.product = res.data;
                });
        },
        methods: {
            updateProduct() {
                this.axios
                    .patch(`http://localhost:8000/api/products/${this.$route.params.id}`, this.product)
                    .then((res) => {
                        this.$router.push({ name: 'products' });
                    });
            }
        }
    }
</script>

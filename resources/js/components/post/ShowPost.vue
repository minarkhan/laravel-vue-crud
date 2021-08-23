<template>
    <div>
        <h3 class="">Details of post</h3>
        <div class="row">
            <div class="col-md-6">
                <!-- <form @submit.prevent="updatepost"> -->
                    <div class="form-group">
                        <label>Name: {{ post.name }}</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                    <div class="form-group">
                        <label>Detail: {{ post.detail }}</label>
                        <input type="text" class="form-control" v-model="post.description">
                    </div>
                    <!-- <button type="submit" class="btn btn-primary">Update</button> -->
                <!-- </form> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/posts/${this.$route.params.id}`)
                .then((res) => {
                    this.post = res.data;
                });
        }
    }
</script>

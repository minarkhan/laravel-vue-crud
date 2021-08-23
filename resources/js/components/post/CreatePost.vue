<template>
    <div>
        <h3 class="">Create post</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addpost">
                    <div class="form-group">
                        <label>title</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                    <div class="form-group">
                        <label>description</label>
                        <input type="text" class="form-control" v-model="post.description">
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
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
        methods: {
            addpost() {
                this.axios
                    .post('http://localhost:8000/api/posts', this.post)
                    .then(response => (
                        this.$router.push({ name: 'posts' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>

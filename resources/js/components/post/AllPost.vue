<template>
    <div class="">
        <h2>post List</h2>
        <router-link to="/post/create" class="btn btn-primary mt-2 mb-5">Create post</router-link>

        <table class="table">
            <thead>
            <tr>
                <th>SL</th>
                <th>ID</th>
                <th>title</th>
                <th>description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{ serial++ }}</td>
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.description }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'post.edit', params: { id: post.id }}" class="btn btn-success">Edit</router-link>
                        <router-link :to="{name: 'post.show', params: { id: post.id }}" class="btn btn-success">Show</router-link>
                        <button class="btn btn-danger" @click="deletepost(post.id)">Delete</button>
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
                posts: [],
                serial: 1
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/posts/')
                .then(response => {
                    this.posts = response.data;
                    console.log(response.data);
                });
        },
        methods: {
            deletepost(id) {
                this.axios
                    .delete(`http://localhost:8000/api/posts/${id}`)
                    .then(response => {
                        let i = this.posts.map(data => data.id).indexOf(id);
                        this.posts.splice(i, 1)
                    });
            }
        }
    }
</script>

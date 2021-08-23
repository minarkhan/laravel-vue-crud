<template>
    <div class="container-fulid ">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary mb-5">
            <div class="collapse navbar-collapse">
                <div class="mr-5">
                    <h1>LOGO</h1>
                </div>
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/products" class="nav-item nav-link">Products List</router-link>
                    <router-link to="/posts" class="nav-item nav-link">Post List</router-link>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <router-view> </router-view>
                </div>
            </div>
        </div>

        <footer style="height: 100px" class="bg-primary mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div  class="">
                        <p class="text-center">Footer</p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {}
</script>

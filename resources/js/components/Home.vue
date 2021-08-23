<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- <h1>Minar khan</h1> -->
                    <img class="w-100" :src="img_url" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [],
                img_url: '/img/123.jpg'
            }
        }
    }
</script>

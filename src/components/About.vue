<template>
    <div class="center-holder">
        <h1 @click="showAlert">About US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi debitis delectus distinctio dolor, earum ex excepturi magni obcaecati possimus quia repellendus sed tempora voluptas voluptates. Architecto aut deleniti dicta, expedita fuga, harum impedit incidunt ipsum molestias nisi nostrum odit pariatur perferendis quos temporibus! A aperiam autem consequatur cupiditate dignissimos, dolor doloremque ducimus earum error ex expedita explicabo facere facilis fugiat incidunt ipsum iure labore, laborum magnam minima molestiae mollitia non nostrum numquam odio officiis provident quis, quisquam repellat saepe sint tempora temporibus totam ullam vel velit voluptates. Aliquam atque, eaque. Aut dolore modi nostrum numquam, officia quibusdam sapiente sint?</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {
            showAlert(){
                // Use sweetalret2
                this.$swal({
                    title: 'Hello',
                    text: 'World'
                });
            }
        }
    }
</script>
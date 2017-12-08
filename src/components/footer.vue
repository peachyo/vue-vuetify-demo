<template>
    <footer>
        <p>Copyright &copy; 2017 {{title}}</p>
    </footer>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    footer{
        background: #222;
        padding: 6pc;
    }
    p{
        color: lightgreen;
        text-align: center;
    }
</style>
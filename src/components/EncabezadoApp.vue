<template>
    <header>
        <h1>
            <slot></slot>
        </h1>
    </header>
</template>

<script>
export default {
    name:'EncabezadoApp'
}
</script>

<style scoped>
    header{
        background-color: #662e9b;
        padding: 20px 0;
    }
    h1{
        text-align: center;
        color:white;
        text-shadow: 1px 1px 5px white;
    }
</style>
<template>
    <nav class='menu'>
        <router-link to='/'>Home</router-link>
        <router-link to='/about'>About</router-link>
        <router-link to="/user">Usuario</router-link>
    </nav>
</template>


<script>
export default {
    name:'MenuApp'
}
</script>

<style  scoped>
    .menu{
        margin: 2rem 0;
    }
    a{
        color: #662e9b;
        text-decoration: none;
        padding: 5px 10px;
    }
    .router-link-exact-active{
        background-color: #662e9b;
        color: white;
    }
</style>
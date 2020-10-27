<template>
    <div>
        Datos de usuario:
    <ul>
        <li>Usuario: {{user.display_name}}</li>
        <li>Email: {{user.user_email}}</li>
    </ul>
        
    </div>
</template>


<script>
export default {
    name:"User",
    props:{
        user: Object
    }
}
</script>
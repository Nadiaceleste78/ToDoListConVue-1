<template>
    <div class="container mx-auto">
        <!-- <form @submit.prevent='login()'>
            <input type="text" placeholder="Usuario" v-model='username' required>
            <input type="password" placeholder="Password" v-model='password' required>
            <input type="submit">
            <p v-html='mensaje'></p>
            <h3>Usuarios:</h3>
            <ul>
                <li>Usuario:estudiante1</li>
                <li>Password:estudiante321</li>
                <li>Usuario:estudiante2</li>
                <li>Password:estudiante321</li>
            </ul>
        </form> -->

            <form class="w-1/2 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent='login()'>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Usuario
                    </label>
                    <input
                        class="shadow appearance-none border border-purple-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" v-model='username'>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Contraseña
                    </label>
                    <input
                        class="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************" v-model='password'>
                    
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                mensaje: '',
            }
        },
        methods: {
            login() {
                let data = new FormData();
                data.append('username', this.username);
                data.append('password', this.password);
                fetch('https://waitforit.com.ar/docta/wp-json/v2/login', {
                        method: 'POST',
                        body: data
                    })
                    .then(res => res.json())
                    .then(json => {
                        console.log(json);
                        if (json.data != null) {
                            this.$emit('login', json.data);
                        } else {
                            this.mensaje = json.message
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })

            }
        },
    }
</script>


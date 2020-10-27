# Guía para trabajar con vuejs 

## Crear un componente nuevo

1 - Crear un archivo en la carpeta `src/components`, y el nombre del mismo debería escribirse con Pascal Case (NuevoComponente.vue).

2 - Definir el template HTML del componente. El mismo tiene que estar anidado entre etiquetas `<template></template>`.

3 - Definir el código JS del componente. Obligatoriamente tenemos que exportarlo. 
Código base:

```js
<script>
export default {
    name:'NombreComponente',
}
</script>
```

4 - Generar la hoja de estilos utilizando la etiqueta `<style></style>`. Si queremos que los estilos solamente se apliquen el componente en el que estamos trabajando, podemos agregarle el atributo *scoped* `<style scoped></style>`.

5 - Importar al archivo de nuestro componente desde `App.vue`.
Ejemplo: 
```js
import NuevoComponente from './components/NuevoComponente';
``` 
6 - Registrar nuestro componente dentro del objeto de configuracion del componente *App*.

7 - Utilizar el componente dentro del template de `App.vue`.

## Pasos para clonar un repositorio con un proyecto en Vue

1 - Clonar el proyecto desde git con el comando `git clone <url del poyecto>` o descarganló como zip. 

![url proyecto](https://s3.amazonaws.com/awesomescreenshot/upload/1084939/1121753/fb5c1e05-1fcd-4f8c-54c1-c48b7e4d5a38.png?AWSAccessKeyId=AKIAJSCJQ2NM3XLFPVKA&Expires=1602916923&Signature=3ZCTNCH%2BqemDwTAsJkHQdbuxUsU%3D)

2 - Ingresar a la carpeta del proyecto, si no sabemos en que carpeta estamos, podemos utilizar el comando `pwd`. 

3 - Instalamos todos las dependencias que nos faltan con el comando `npm install`, esperamos que termine de descargar todo y ¡Listo! Yaaaayyyy 🙌


## Pasos para comunicar datos de componentes hijos a componentes padres. 

1 - Definir en `methods` la función que va a disparar el evento. 

2 - Asignar ese *método* a un evento tradisional (click,submit,change,etc.)

3 - Definimos dentro de el método un evento creado por nosotros con el la herramienta de vue *$emit*.

```js
methods:{
    metodo(){
        this.$emit(nombre-del-evento, datosParaEnviarConElEvento);
    }

}
```

4 - Dentro del componente padre (por ejemplo, App.vue), agregamos un `v-on` en la ejecución del componente hijo, con el evento que creamos en él.

```html
<hijo @nombre-del-evento='metodo-a-ejecutar'><hijo>

```

5 - Definir método a ejecutar cuando el evento se cumpla.

## Pasos para comunicar datos de componentes padres a componentes hijos. 

1 - Dentro del componente hijo, en el objeto de configuración, definimos el objeto `props` en el cual tenemos que aclarar el nombre de la propiedad y el tipo de dato que va a recibir. 

```javascript
props:{
    titulo: String,
    categorias: Array
}
```

2 - Cuando ejecutamos el componente dentro del padre, declaramos como atributos de la etiqueta las propiedades que definimos. Si es string llamamos al tributo solo, y si el dato es una variable lo declaramos con `v-bind`.

```html
<hijo titulo='Propiedad' v-bind:categorias='cats'></hijo>
```

3 - Una vez realizados los pasos anteriores, podemos utilizar esas propiedades en el template del componente hijo, como variables. 

```html
<template>
    <h1>{{titulo}}</h1>
    <ul>
        <li v-for='(categoria,pos) in categorias' :key='pos'> 
            {{categoria}}
        </li>
    </ul>
</template>

```


## Instalar Vue Route

1 - Instalar vue router en el proyecto. `vue add route`.

2 - Armar el archivo de configuración para vue route `router.js` dentro de la carpeta *src*.

```js
//router.js - configuración inicial 

import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

```

3 - Dentro del archivo *main.js* agregar el archivo *router.js* y incorporarlo en el objeto de configuración de vue.

```js
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```

## Crear router o rutas

1 - Agregar dentro de *App.vue* el componente `<router-view></router-view>` el cual va a ir mostrando los componentes que configuremos, según la url del sitio. 

2 - Creamos un directorio *Views* donde vamos a crear un componente para cada url que tenga nuestro sitio. 

3 - Importamos dentro del archivo *router.js* el o los compontes que vamos a utilizar en el ruteo. Por ejemplo: 

```js
    import Home from './views/Home';
```

4 - Agregamos el componente a la configuración de router. 

```js

import Vue from 'vue';
import Router from 'vue-router';


import Home from './views/Home';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: "*", //Todas las que no estén especificadas.
            name: 'error',
            component: Error
        }
    ]
})

```



## Deployment en Vercel desde la consola 

1 - Ejecutar el comando `vercel login` para logear con su email. Es el mismo que el *github*

2 - Ejecutar el comando `vercel`. 

3 - Nos pregunta si estamos en la carpeta correcta, si lo estamos, escribimos *Y* y enter.

4 - Nos pregunta el nombre del usuario de vercel en el que queremos armar el deployment. 

5 - Nos pregunta si queremos asociar nuestro proyecto a otro existente, si es nuevo ponemos *N* y enter.

6 - Nos pide el nombre del proyecto, ponemos el nombre y damos enter. 

7 - Nos pregunta donde están nuestros archivos. Por defecto estamos en "./" solo damos enter y seguimos. 

8 - Nos pregunta con qué comando queremos hacer el build. Elegimos `npm run build`.

9 - Por último seleccionamos la opción `Build Command` y empieza a subir. 



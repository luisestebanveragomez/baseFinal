#Implementando Gulp.js

<h1>Pasos:</h1>

1. Tener instalado Node.js.

2. Agregar los archivos gulpfile.js y package.json a la raíz del proyecto.

3. Escribir en consola: npm install (lo que hace es instalar todas las dependencias que necesitamos).

4. El archivo gulpfile.js quedó global, lo único que se necesita modificar es las variables que se encuentran en la sección que dice <b>Rutas</b>.

  Las variables que inician con "src" son las que indican la ruta de los archivos que vamos a compilar o minificar (importante tener cuidado con el orden del array que se llama "src_js" que posee las rutas de los archivos .js, esto evita conflictos entre librerías).

  Las variables que inician con "dest" son las que indican en donde van a quedar guardadas los archivos compilados.

5.Formas de compilar el archivo según necesidad:
   
  Tareas que se ejecutan una sola vez:
   <ul>
     <li>Escribir en consola "gulp stylus", si solo necesitamos compilar el css.</li>
     <li>Escribir en consola "gulp js", si solo necesimamos minificar y ofuscar los archivos .js.</li>
     <li>Escribir en consola "gulp img", si solo necesitamos minificar las imagenes.</li>
   </ul>
   
  Tareas que se ejecutan cada vez que hay cambios:
   
   <ul>
     <li>Escribir en consola "gulp watch", este ejecutara las tareas de stylus y js.</li>
     <li>Escribir en consola "gulp", este ejecutara la tareas stylus, js y watch.</li>
   </ul>
   
<h2>Recomendaciones:</h2>
  
  1. Ejecutar la tarea "gulp img" al finalizar el proyecto.
  2. Cambiar el valor de la varaible compress a true en la tarea stylus (esto comprime el css) al subir el proyecto a producción.
  3. Dejar el archivo .gitignore en la raiz para que cuando vayan a versionar no suba la carpeta "node_modules".
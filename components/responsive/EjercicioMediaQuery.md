# Ejercicio Media Queries

### 01 - Basic Layout

* Crear un documento HTML con el nombre index49.html

## index49.html
* Title: Cambio de tamaño
* Agregar en el head el siguiente meta:
```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
* Declarar una etiqueta style
* Crear un título h1 con el siguiente texto 'Cambio de tamaño'
* Crear un título h2 con el siguiente texto 'Magico!!!!'
* Crear 6 párrafos con texto autogenerado
* En la etiqueta style:
  * Seleccionar el elemento body
    * Establecer el tamaño de la tipografía en 16px
    * Color de fondo: #eee
  * Seleccionar los elementos título h2
    * Color de texto: red
    * Display en none (para que lo oculte)

  * Agregar el selector de media: @media (max-width:412px)
    * Seleccionar el elemento body
      Color de fondo: black
      Color de texto: white
      Alineado de texto: justify
      Familia tipográfica: Arial, Helvetica, sans-serif
      Tamaño de tipografía: 14px
    * Seleccionar el elemento h1
      * Display en none para que se oculte
    * Seleccionar el elemento h2
      * Display en block para que se muestre
      * Tamaño de tipografía: 40px
    * Agregar el selector de media: @media (max-width:732px) and (orientation: landscape) 
      * Seleccionar el elemento body
        * Color de fondo: blues
* Agranda y achicar el browser para ver que pasa
* Utilizar el developers tools de chrome para ver el sitio como si fuera un celular
* Cambiar la orientación del celular para ver que pasa!


### 02 - Layout I
Replicar el [siguiente ejemplo](https://ce7du.csb.app/) con breakpoints incluidos.

### 03 - Layout II
Replicar el [siguiente ejemplo](https://4ntmp.csb.app/) con breakpoints incluidos.

### 04 - Layout III
Replicar el [siguiente ejemplo](https://9eoom.csb.app/) con breakpoints incluidos.
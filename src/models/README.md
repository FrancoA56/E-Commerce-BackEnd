Rutas del API: http://localhost:3000/api

Rutas para Product

1. Obtener todas los productos
   Endpoint: GET /api/product/

Descripción: Obtiene un array con todas las propiedades del producto y todos los productos creados hasta el momento. Cada producto incluye la siguiente información:

Ejemplo de respuesta:

[
{
"id": 2,
"name": "Product 1",
"code": "Code 1",
"price": 50,
"image": "image1",
"stock": 30,
"shortDescription": "descripcion corta",
"longDescription": "descripcion larga",
"instructions": "instrucciones",
"isDisable": false,
"releasedAt": "2024-09-10T14:59:16.345Z",
"createdAt": "2024-09-10T14:59:16.346Z",
"updatedAt": "2024-09-10T14:59:16.346Z",
"deletedAt": null,
"brandId": 2
}
]

2. Obtener un producto por ID
   Endpoint: GET /api/product/:id

Descripción: Devuelve un objeto con la información del producto correspondiente al id especificado.

Ejemplo de respuesta:

{
"id": 2,
"name": "Product 1",
"code": "Code 1",
"price": 50,
"image": "image1",
"stock": 30,
"shortDescription": "descripcion corta",
"longDescription": "descripcion larga",
"instructions": "instrucciones",
"isDisable": false,
"releasedAt": "2024-09-10T14:59:16.345Z",
"createdAt": "2024-09-10T14:59:16.346Z",
"updatedAt": "2024-09-10T14:59:16.346Z",
"deletedAt": null,
"brandId": 2,
"gallery": [
{
"id": 3,
"productId": 2,
"url": "image2",
"createdAt": "2024-09-10T14:59:16.601Z",
"updatedAt": "2024-09-10T14:59:16.601Z"
},
{
"id": 4,
"productId": 2,
"url": "image3",
"createdAt": "2024-09-10T14:59:16.601Z",
"updatedAt": "2024-09-10T14:59:16.601Z"
}
],
"invoiceDetails": [],
"cart": [],
"reviews": [],
"categories": [
{
"id": 2,
"name": "categoria n",
"isDisable": false,
"createdAt": "2024-09-03T20:19:34.031Z",
"updatedAt": "2024-09-03T20:19:34.031Z",
"deletedAt": null,
"ProductCategory": {
"productId": 2,
"categoryId": 2,
"createdAt": "2024-09-10T14:59:16.578Z",
"updatedAt": "2024-09-10T14:59:16.578Z"
}
}
],
"labels": [
{
"id": 2,
"name": "label n",
"isDisable": false,
"createdAt": "2024-09-03T20:19:30.073Z",
"updatedAt": "2024-09-03T20:19:30.073Z",
"deletedAt": null,
"ProductLabel": {
"productId": 2,
"labelId": 2,
"createdAt": "2024-09-10T14:59:16.582Z",
"updatedAt": "2024-09-10T14:59:16.582Z"
}
}
],
"brand": {
"id": 2,
"name": "brand n1",
"isDisable": false,
"createdAt": "2024-09-03T20:19:24.875Z",
"updatedAt": "2024-09-03T20:19:24.875Z",
"deletedAt": null
}
}

3. Crear una nuevo producto
   Endpoint: POST /api/product/

Descripción: Crea una nuevo producto enviando un body con la información requerida.

Body:

{
"name": "Product 1",
"code": "Code 1",
"price": 50,
"category": [2], \\array de ids de las categorias del producto\\
"label": [2], \\array de ids de las etiquetas del producto\\
"image": "image1", \\url de la imagen principal\\
"stock": 30,
"gallery": [ \\array de urls de las imagenes de gallerias\\
"image2",
"image3"
],
"shortDescription": "descripcion corta",
"longDescription": "descripcion larga",
"instructions": "instrucciones",
"brand": 2 \\ id de la marca \\
}

4. Actualizar un producto
   Endpoint: PUT /api/product/1

Descripción: Actualiza el producto correspondiente al id especificado. Por body se envia la propiedad a modificar.

Body:

{
"id": 2,
"name": "New Stainless Steel Knife Set",
"code": "Code 1",
"price": 20,
"image": "image1",
"stock": 30,
"shortDescription": "descripcion corta",
"longDescription": "descripcion larga",
"instructions": "instrucciones",
"isDisable": false,
"releasedAt": "2024-09-10T14:59:16.345Z",
"createdAt": "2024-09-10T14:59:16.346Z",
"updatedAt": "2024-09-10T15:14:53.006Z",
"deletedAt": null,
"brandId": 2
}

5. Deshabilitar un producto
   Endpoint: PUT /api/product/disable/:id

Descripción: Deshabilita el producto correspondiente al id especificado. (propiedad isDisable: true)

Ejemplo de respuesta:

{
"message": "Product succesfully disabled"
}

6. Habilitar un producto previamente deshabilitada
   Endpoint: PUT /api/product/undisable/:id

Descripción: Habilita el producto correspondiente al id si estaba previamente deshabilitada. (propiedad isDisable: false)

Ejemplo de respuesta:

{
"message": "Product succesfully abled"
}

7. Eliminar un producto permanentemente
   Endpoint: DELETE /api/product/delete/:id

Descripción: Elimina permanentemente el producto correspondiente al id especificado.

{
"message": "Product deleted successfully"
}

---

Rutas para Label

1. Obtener todas las etiquetas
   Endpoint: GET /api/label/

Descripción: Obtiene un array con todas las etiquetas creadas hasta el momento. Cada etiquetas incluye la siguiente información:

Ejemplo de respuesta:

[
{
"id": 1,
"name": "label n",
"isDisable": false,
"createdAt": "2024-09-03T20:17:36.419Z",
"updatedAt": "2024-09-03T20:17:36.419Z",
"deletedAt": null
}
]

2. Obtener una etiqueta por ID
   Endpoint: GET /api/label/:id

Descripción: Devuelve un objeto con la información de la etiqueta correspondiente al id especificado.

Ejemplo de respuesta:

{
"id": 2,
"name": "label n",
"isDisable": false,
"createdAt": "2024-09-03T20:19:30.073Z",
"updatedAt": "2024-09-03T20:19:30.073Z",
"deletedAt": null
}

3. Crear una nueva etiqueta
   Endpoint: POST /api/label/

Descripción: Crea una nueva etiqueta enviando un body con la información del name.

Body:

{
"name": "label n"
}

4. Actualizar el nombre de una etiqueta
   Endpoint: PUT /api/label/:id

Descripción: Actualiza el nombre de la etiqueta correspondiente al id especificado.

Body:

{
"name": "new label"
}

5. Deshabilitar una etiqueta
   Endpoint: PUT /api/label/disable/:id

Descripción: Deshabilita la etiqueta correspondiente al id especificado. (propiedad isDisable: true)

Ejemplo de respuesta:

{
"message": "Label disabled successfully",
"label": {
"id": 1,
"name": "new label",
"isDisable": true,
"createdAt": "2024-09-03T20:17:36.419Z",
"updatedAt": "2024-09-03T20:18:09.582Z",
"deletedAt": null
}
}

6. Habilitar una etiqueta previamente deshabilitada
   Endpoint: PUT /api/label/undisable/:id

Descripción: Habilita la etiqueta correspondiente al id si estaba previamente deshabilitada. (propiedad isDisable: false)

Ejemplo de respuesta:

{
"message": "Label succesfully abled",
"label": {
"id": 1,
"name": "new label",
"isDisable": false,
"createdAt": "2024-09-03T20:17:36.419Z",
"updatedAt": "2024-09-03T20:18:14.258Z",
"deletedAt": null
}
}

7. Eliminar una etiqueta permanentemente
   Endpoint: DELETE /api/label/delete/:id

Descripción: Elimina permanentemente la etiqueta correspondiente al id especificado.

{
"message": "Label deleted successfully"
}

---

Rutas para Category

1. Obtener todas las categorias
   Endpoint: GET /api/category/

Descripción: Obtiene un array con todas las categorias creadas hasta el momento. Cada categoria incluye la siguiente información:

Ejemplo de respuesta:

[
{
"id": 1,
"name": "categoria n",
"isDisable": false,
"createdAt": "2024-09-03T20:18:32.109Z",
"updatedAt": "2024-09-03T20:18:32.109Z",
"deletedAt": null
}
]

2. Obtener una categoria por ID
   Endpoint: GET /api/category/:id

Descripción: Devuelve un objeto con la información de la categoria correspondiente al id especificado.

Ejemplo de respuesta:

{
"id": 2,
"name": "categoria n",
"isDisable": false,
"createdAt": "2024-09-03T20:19:34.031Z",
"updatedAt": "2024-09-03T20:19:34.031Z",
"deletedAt": null
}

3. Crear una nueva categoria
   Endpoint: POST /api/category/

Descripción: Crea una nueva categoria enviando un body con la información del name.

Body:

{
"name": "categoria n"
}

4. Actualizar el nombre de una categoria
   Endpoint: PUT /api/category/:id

Descripción: Actualiza el nombre de la categoria correspondiente al id especificado.

Body:

{
"name": "new name"
}

5. Deshabilitar una categoria
   Endpoint: PUT /api/category/disable/:id

Descripción: Deshabilita la categoria correspondiente al id especificado. (propiedad isDisable: true)

Ejemplo de respuesta:

{
"message": "Category disabled successfully",
"category": {
"id": 1,
"name": "new category",
"isDisable": true,
"createdAt": "2024-09-03T20:18:32.109Z",
"updatedAt": "2024-09-03T20:18:54.802Z",
"deletedAt": null
}
}

6. Habilitar una categoria previamente deshabilitada
   Endpoint: PUT /api/category/undisable/:id

Descripción: Habilita la categoria correspondiente al id si estaba previamente deshabilitada. (propiedad isDisable: false)

Ejemplo de respuesta:

{
"message": "Category succesfully abled",
"category": {
"id": 1,
"name": "new category",
"isDisable": false,
"createdAt": "2024-09-03T20:18:32.109Z",
"updatedAt": "2024-09-03T20:18:59.531Z",
"deletedAt": null
}
}

7. Eliminar una categoria permanentemente
   Endpoint: DELETE /api/category/delete/:id

Descripción: Elimina permanentemente la categoria correspondiente al id especificado.

{
"message": "Category deleted successfully"
}

---

Rutas para Brand

1. Obtener todas las marcas
   Endpoint: GET /api/brand/

Descripción: Obtiene un array con todas las marcas creadas hasta el momento. Cada marca incluye la siguiente información:

Ejemplo de respuesta:

[
{
"id": 2,
"name": "brand n1",
"isDisable": false,
"createdAt": "2024-09-03T20:19:24.875Z",
"updatedAt": "2024-09-03T20:19:24.875Z",
"deletedAt": null
}
]

2. Obtener una marca por ID
   Endpoint: GET /api/brand/:id

Descripción: Devuelve un objeto con la información de la marca correspondiente al id especificado.

Ejemplo de respuesta:

{
"id": 2,
"name": "brand n1",
"isDisable": false,
"createdAt": "2024-09-03T20:19:24.875Z",
"updatedAt": "2024-09-03T20:19:24.875Z",
"deletedAt": null
}

3. Crear una nueva marca
   Endpoint: POST /api/brand/

Descripción: Crea una nueva marca enviando un body con la información del name.

Body:

{
"name": "brand nueva"
}

4. Actualizar el nombre de una marca
   Endpoint: PUT /api/brand/:id

Descripción: Actualiza el nombre de la marca correspondiente al id especificado.

Body:

{
"name": "new name"
}

5. Deshabilitar una marca
   Endpoint: PUT /api/brand/disable/:id

Descripción: Deshabilita la marca correspondiente al id especificado. (propiedad isDisable: true)

Ejemplo de respuesta:

{
"message": "Brand disabled successfully",
"brand": {
"id": 1,
"name": "new brand",
"isDisable": true,
"createdAt": "2024-09-03T20:16:01.221Z",
"updatedAt": "2024-09-03T20:17:11.386Z",
"deletedAt": null
}
}

6. Habilitar una marca previamente deshabilitada
   Endpoint: PUT /api/brand/undisable/:id

Descripción: Habilita la marca correspondiente al id si estaba previamente deshabilitada. (propiedad isDisable: false)

Ejemplo de respuesta:

{
"message": "Brand successfully unDisabled",
"brand": {
"id": 1,
"name": "new brand",
"isDisable": false,
"createdAt": "2024-09-03T20:16:01.221Z",
"updatedAt": "2024-09-03T20:17:16.826Z",
"deletedAt": null
}
}

7. Eliminar una marca permanentemente
   Endpoint: DELETE /api/brand/delete/:id

Descripción: Elimina permanentemente la marca correspondiente al id especificado.

{
"message": "Brand deleted successfully"
}

---

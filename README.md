## Validacion que tengo que implementar cuando recibo el password
 ```js
is: {
  args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
  msg: 'Password must be contains letter, numbers and simbols'
}
```
# Consulting Tech (API-REST)

## Reglas de la App

- Las cuentas de las bases de datos estan divididas en 2
  - El usuario admin (usuario root u otro)
  - El usuario para la aplicación

- Siempre hay un usuario que es el que tiene todos los privilegios (owner)

- El usuario (owner) puede generar mas usuarios admins, pero estan limitados hasta cierto punto
  
  - No puede cambiar la contraseña de los usuarios
  - No alterar sus datos personales
  - No pueden generar mas usuarios ***admins***
  - Pueden obtener una lista de todos los usuarios (username, name, email)

- El usuario (owner) tiene todos los privilegios

- El usuario (cliente) 
  - Puede iniciar sesión con su username ó email
  - Puede alterar solo sus propios datos
  - No puede ser admin
  - Solo puede borrar su propio usuario
  - Solo puede obtener su name, username y charge de otros usuarios

- Reglas de Posts

  - El usuario tiene que estar autenticado para crear uno
  - El usuario solo le puede dar un like a cada post
  - El usuario solo puede alterar la imformacion de su propio posteo (title, content)
  - El usuario solo puede eliminar su propio posteo
  - El usuario puede obtener sus propios posteos (solo uno ó todos)

- Reglas de Comments

  - Todos los usuarios pueden comentar un post
  - Puede eliminar su propio comentario
  - Pueden alterar su propio comentario
  - Pueden eliminar su propio comentario

- Reglas de likes

  - Todos los usuario pueden darle like a los posteos, pero esta limitado un like por cada usuario
  - Tambien pueden quitar su like de cada posteo
  - El usuario puede obtener todos los posteos a los que le dió like



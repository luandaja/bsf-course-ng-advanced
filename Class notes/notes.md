### Types of angular modules
- modules of pages: Definir vistas. Si la división de módulos se hace en base 

Clase 1
schematics:
cuando usar?
tnego un cliente con N projects en angular
-tokens,interceptor,componente que siempre consulta el dato X en un servicio
se pone en un repo y toda la compñia la puede usar
como crear schematics? recomendado crear con templates enblanco
que es workspace en angular?como te organiza?
angular universal---leer (para server side rendering)
-------
Clase 2
App Overview: Objetivo del producto, que se quiere hacer?a quien se quiere ayudar?
App Features: Que caracteristicas necesita el sistema?
Domain Security: Roles de usuario?como se van a comunicar? (en API basado en tokens?otros?)
Domain Rules: algunas reglas van en front (reglas de presentacion x ejemplo (ruteos de diferentes proveedores x ej)) y otras en back,
Logging: como app insihts
Services/Comunication: como comunicar con back? (http, sockets?)
Data Models: el back idealmente solo devuelve lo que el front end necesita (cuando la api por ser reusable devuelve mas campos de los necesarios se puede aplicar mappers)
		Graph-QL permite en proyectos my grandes tener diferentes origenes de datos en json (monolito,pai,batch) en una sola peticion
Feature Components
Shared components
---------
Clase 34
MonoRepo (1 repo y todo en carpeas hasta el primer mvp x ejemplo y lo pasas a repos indeendientes)
Tarea: Standard de Programacion (enviar por correo) Puede ser basado en la guia de estilos de angular
Notas finales: 
*nunca olvodar los requirements
*servicios de logeo en front (para que mande a la nube o algo)
*los third party deerian incluirse como feature components
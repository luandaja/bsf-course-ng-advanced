### Types of angular modules
- modules of pages: Definir vistas. Si la división de módulos se hace en base 

##Clase 1
schematics:
cuando usar?
tnego un cliente con N projects en angular
-tokens,interceptor,componente que siempre consulta el dato X en un servicio
se pone en un repo y toda la compñia la puede usar
como crear schematics? recomendado crear con templates enblanco
que es workspace en angular?como te organiza?
angular universal---leer (para server side rendering)
-------
##Clase 2
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
##Clase 3
MonoRepo (1 repo y todo en carpeas hasta el primer mvp x ejemplo y lo pasas a repos indeendientes)
Tarea: Standard de Programacion (enviar por correo) Puede ser basado en la guia de estilos de angular
Notas finales: 
*nunca olvodar los requirements
*servicios de logeo en front (para que mande a la nube o algo)
*los third party deerian incluirse como feature components
---------
##Clase 4
Componentes para? (Abstraer logica, unidades mas pequeñas que se puedan administrar)
-Encapsular 
-Definir 
-Reutilizar
-Mantenibilidad
Tiene Metadata (informacion que es util para el framework que lo compila)
Formas de comunicar: -Rootscope **??
 1.Input/Output (EventEmitters)
 2.Servicios (Singletons para compartir data, HTTP, Observable/subscribtion, Subject, EmitterService)
 3.ViewChild/ContentChild
 4.Event bus service
 5.StateManagement (localstorage)


1.Input/Output (Emitters)
Funciona bien en padre hija, cuando tienen mas niveles de anidacion lo que lo hace mas sencillo es I/O con objetos inmutables
2.Servicios 
-Singletons
Se crea para compartir data en el servicio
-Http
Llamadas http standards
-Observable (ServiceObservable en la pagina de angular)
Creo un observer al que se subscriber otras clases y se emite un evento del que los suscritos se enteran.
-Service Subject (RxJs-Programación Reactiva)
Tipos: Subject, Behaviour,Replied,Async
Subject: Emito 1,2,3,4 S1(Inicio): 1,2,3,4 S2(En 2):2,3,4 (Ningun valor anterios)
Behaviour   Emito 1,2,3,4 S1 (Inicio): 1,2,3,4 S2(En 3):2,3,4 (El ultimo valor emitido)
Replied: Emito 1,2,3,4 S1(Inicio): 1,2,3,4 S2(En 4):1,2,3,4 (Conserva todos los valores emitidos y los recibe todos juntos en el momento en el que se susbcriba)
Async:  (Para todos los subscribs que han sido completado)
-EmitterService 
Usa el Mediator Pattern con EventEmmitter
Links: 
https://rxjs-dev.firebaseapp.com/api?query=subje&type=class
https://www.learnrxjs.io/subjects/subject.html
 3.ViewChild/ContentChild
 Ejecutar referencias de los componentes hijos (se estan amarrando los componentes, pierden el estar desacoplados)
 4.Event bus service
Permite tener un servicio que ayude a desacoplar los componentes, usa el Mediator Pattern, de esta forma los componentes no necesitan conocerse entre ellos y quedan desacoplados.
Se crea un servicio generico con On (evento) y Emit (evento) y los componentes se suscriben a el
5.StateManagement (localstorage)
Permite manejar los distintos estados de la aplicaciones en un solo lugar, se centraliza. Usa el Redux Pattern

Cuando usar uno u otro:
Más de 2 nivel de comunicación, están con jerarquías...es un parto mantenerlo si usas Input/Output
Input/Output para padre e hijo
Cuando usar servicios: 
Es el top de comunicación entre servicios, uno de los mas elegantes es con Subject o EventBus mas pro todavia porq aplicas arquitectua de diseño y patrones
EmitterService: cuando tienes modulos o componentes padre e hijo y quires comunicarlo de manera rapida, si no envia mucha data te da alto performance
EventBus: En la mayoria de caso porque te permite hace rlos componentes facilmente testeables y desacoplados
Subject: No me intersa desacoplar y no voy a usar unit test puedo usar este
ViewChild: Tratar de no usarlos en la medida de lo posible, al hacer refrencia seesta agregando un puntero en el browser y es un memory leak...cuesta mucho
		   Si van a cargar muchos componentes en la vista jala mucho performance
StateManagement: Esta de moda, Cuando usar un Store (unico repositorio)?
Si como estas trabajando va bien no usar esto porque:
Genera mas codigo (Boilerplate)
Genera más complejidad
Implica mayor mantenibilidad
Si hay problemas con como se esta trabajando, proponer esto ya es proponer una solucion


MicrofrontEnd 
En teoría se puede dividir pequeas aplicaciones cada una independiente.Da un delivery mas rapido pero genera que el tamñao de archivo es mayor. Lo vuelve escalable. Se necesita usar pattern library
El error que se comete es que al resolver un problema se genera un problema de comunicacion entre componentes:
Hay tecincas para comunicarlos:
Para unir los componentes se usa el state management
Server side(ngix <%include%>)
Iframe (lado cliente)
Single-SPA es un framework que ayuda a integrar los microfrontend
Implica cambiar toda la cultura de la organizacion (En los bancos por ejemplo no aplica, Spotify usa equipos flats para compartir las cosas al maximo)
| MonoRepo (Startup de ley)
Para la CI ejecuta partes por eso es mas rapido
Cata carpeta que maneja cada team tiene MetaProjects
Forma mas sencilla
Acoplado
CI Fast
Desarrollo rapido
Team por proyecto pero el tema sabe de todo el proyecto
Si puedes reutilizar y compartir
Es mas facil pasar monolito a monorepo que a micro fonrt end
MultiRepo
Cuando quiero que todo sea totalmente desacoplado
Cuando el CI me cuesta ya mucho en MonoRepo
Cuando no se que tan grande va a ser mi compañia me conviene tenerlo 

---------
##Clase 5
Angular Advanced Unit Testing
Piramide Varilla (Piramide de Unit Test para Front)

		     e2e(Protractor)
(jasmine)Integration/snapshot (Jesx+Enzyme)
	(jasmine)	Unit Test    

Cuanto mas escalabale es se van agregando mas test conforme va creciendo pero como minimo siempre los unit test.

Cuando hago unit test?
Los unit test deberiamos de hacerlos siempre.
Pruebas de conceptop no llevan unit test.
Si el cliente no quiere tampoco van.

Si primero escribes el codigo y luego el unit test, lo mas probable es que termines refactorizando, si no algo esta mal.
Si primero haces el test lo mas probable es que tu codigo quede limpio desde el inicio porque el codigo se hace pensando en testing.

Cuando hago test de integracion?
Se hace para validar el comportamiento entre componentes, especialmente la comunicacion. Por ejemplo un manager que administra otros componentes.
Si a nuestra aplicacion solo queremos hacerle test a la parte mas critica (unit test).
Si el cliente no quiere tampoco van.

Que testear? que formas de testear un componente hay? deberia testear un pipe?
la documentacion de angular tiene info de como testear todo revisar.

---------
##Clase 6
Jes y Jasmine son lenguajes similares para unit test
Jesx tiene la ventaja de q es mas flexible con javascript puro que jasmine

Component class testing (Isolamos el componente y hacemos el test)
Se usa para logica, validaciones, formatos, cualquier cosa q tenga en la clase del componente.
Component DOM testing ()
Se usa en los component container

Los componentes son de 2 tipos: Presentacional y Containers (para Angular,Reacct y ViewJs)
Presentacionales:
Se les llama tambien Dumb Component. 
En el ejemplo de la clase anterior el Article component es Dumb
Usualmente tienen Input/Output, no le interesa de donde viene la data, la recibe y la pinta
Usa class component testing
las librerias de componentes entran aca
No_Error_Schema...Se usa para no renderizar el componente para que puedas hacer component class testing
Containers:
Se les llama también Smart Components o Application Level Components
Se le llama Smart porque simepre saben de donde viene la data
 En el ejemplo de la clase anterior el Lista (que tiene el foreach de cada Article) component es Smart
 Son los que jalan la data, se comunican con algun servicio/state management...lo que sea pero traen la data
 Usa DOM testing 
 Links:
 https://www.dotnetcurry.com/angularjs/1463/unit-testing-angular-components
 https://angular.io/guide/testing#testing
 https://logrocket.com/blog/angular-unit-testing/
 https://github.com/krishna-acondy/ng-simple-unit-tests


Plugin the git para añadir reglas al PR (ejecutar comandos)

Code Standards:
BEM Conventions para CSS es una buena recomandación. El único problema es hacer una intro para la gente dle proyecto que no lo conoce pero tras que se acostumbre no hay problema.
Testrunners: Karma esta bien
Las Constantes globales van en mayusucla y con sub guiones
Constantes inmutables van en lower camel case

State Management:


---------
##Clase 7
State Management (Centralizan todo a un store)

Si no lo necesitas no lo uses!
Es para comunicar componentes.

Fb crea el patron Redux, la arquitectura Flux se basa en ese patron y Mob es una libreria que usa Flux y Redux.

State Management cumple:
- Un solo origne de datos (Single source of trurth)
- Predictable
- Inmutable
- Track state changes
No se recomienda usar por ejemplo forms con state management (no es informacion inmutable, genera memory leaks y slow render)
State Management Options:
-Service: puedes agregar un singleton general o uno independiente por modulo

-NgRx(si no sabes nada y usas este aqui aprendes, es la mas usada)
	Perimite pode rimplementar el patron redux en angular
 Ventajas: Al ser una de las mas antiguas tiene mayor comunidad, es decir, respuestas a los problemas. Si o s aprendes con esta liberia, tienes un buen manejo de estados, controla todo lo que tengas en tu applicacion. tiene buen performance
 Desventajas: Surgen side affects como the Race Condition(la request q tarda mas va a chancar la data que esta pintada) y boilerplate. Necesitas aprender mucho los conceptos de rudex para entenderlo. Te da consistencia
-Ngrx-data
 Es una version simplificada de la anterior. Sigue activa. No recomendable si es que necesitas q sea escalable
-Observable Store
HAces tu implementacion propia, no usa libreria. Trabaja bien cuando no tienes muchos modulos
-Akita
-Ngxs (una de las mejores solo que tiene pros y contras)(genera poco codigo)
-Mobx

Redux Pattern:
Forma en la que se trabaja el front end para poder manejar un control de estados.
1.Single source of truth called the store
2.State is read only and only changed by dispatching actions
3.Changes are made using pure functions (in base of one input one outpt) called reducers

Se le llama anti pattron por que:
al centralizar toda la data en un store se esta rompiendo el single responsability.
Sus peligros son: mantenimiento al store
---------





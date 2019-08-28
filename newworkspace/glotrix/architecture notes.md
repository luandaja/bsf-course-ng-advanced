
Core (nivel arriba de CMS y Store)
 -AuthService

CMS

Core Module

-AuthGuard

Shared Module

LoginModule
LoginAppComponent (login)

LayoutModule(para el dashboard...podria tb ser solo un component..esta abierto a debate)

Product (View) Module
-ProducComponent (como el AppComponent..es el q gestiona todo el modulo).Tiene el buscar y llama al list/grid
-ProductCardsComponent
	-ProductCardItem
-ProductDetailComponent
-ProductGridComponent

ProductEditor(View)
 -ProductCreate
 -ProducUpdate

Profile (View) Module
 ProfileAppcomponent (usa los componentes atomicos y el avatar en shared)

Report (View) Module
 - ReportAppComponent (llama a los componentes del lib ui (que usan chart.js))

Sales (View) Module
-SalesAppComponent
-SalesCardsComponent
	-ProductCardItem
-SalesGridComponent

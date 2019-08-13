class: middle, center

# Final Project Architecture

- Luis Antoni del Aguila Jacobo
- Claudia Alejandra Montalvo Yarnold

---

## App Overview

### Requerimientos para el primer MVP

- Cliente puede ver/comprar productos que el vendedor oferta
- Vendedor puede ofertar productos
- Venderdor puede visualizer reportes
- Cualquier vendedor puede registrarse
- Cualquier cliente puede registrarse
- Ambos pueden ver/actualizar su perfil
- Ambos pueden visualizar su app en Móviles y Desktop

---

class: middle, center

## App Features

Dividido en dos aplicativos

---

## App Features

### App comprador

- Registro en la applicación (email, fb, Instagram)
- Visualizar productos
  - Vista de grilla
  - Vista de Lista
  - Vista detalle
- Filtrar productos por nombre o categoría
- Comprar el producto mediante visa
  - Confirmación de compra
- Visualizar y editar su perfil

---

## App Features

### App vendedor

- App vendedor
- Registro en la applicación
- Mantenimiento(CRUD) de productos
- Visualizar reportes de Conversiones y conexiones activas
- Visualizar y editar su perfil
- Visualizar la ventas activas (por entregar)
- Actualizar el estado de las ventas

---

## Domain Security

- La autenticación se realizará mediante registro por email o API de Facebook, Instagram\*
- La comunicación con el backend estará asegurado mendiante Open Id Connect (protocolo OAuth 2.0)[^1]
- La aplicación de vendedor aceptará los roles de:
  - Admin
  - Vendedor
- La aplicación de comprador aceptará el rol de: Comprador

[^1] : Se empleará BaaS de Firebase Auth

---

## Domain Rules

- Backend
  - Reglas de negocio
  - Reglas de validación de campos/modelo
- Frontend
  - Reglas de presentación
  - Reglas de negocio
  - Reglas de validación de campos/modelo

---

## Logging

Para medir el rendimiento de los aplicativos se empleará Microsoft Insight (o Firebase Performance)[^2].

Entre las principales características, se medirá:

- first paint vs first contentful paint
- first input delay
- DOM-related events

[^2] : A elección del cliente

---

## Services / Comunication

La comunicación entre el backend y el frontend se realizará mediente Web Sockets y Open Id Connect[^3].

[^3] : Se empleará BaaS de Firestore para el almacenamiento de data, Firebase Auth para la gestión de usuarios, Firebase Storage para el amacenamiento de recursos

---

## Data Models

La capa encargada de la comunicación con el backend realizará el mapeo de las clases especificas.

---

## Feature Components

```
├── App - User
├───── Carrito Group
├──────── Carrito
├──────── Pasarela Pago
├──────── ConfirmacionCompra
```

--

```

└── App - CMS
├───── Product Group
├──────── ProductEdit
├──────── ProductManager(List/delete/edit)
├───── Ventas
├──────── VentasActivas
├───── Reportes
├──────── ViewActiveConnections
├──────── ViewConversiones

```

---

## Shared functionality

```
├── Lib
├───── Perfil
├──────── Editar Perfil
├──────── Ver perfil
├───── Product Group
├──────── Search Bar
├──────── ProductDetail
├──────── ProducListGrid
├──────── ProductListCard
```

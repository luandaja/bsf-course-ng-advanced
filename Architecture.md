# Final Project Architecture

- Luis Antoni del Aguila Jacobo
- Claudia Alejandra Montalvo Yarnold

---

## App Overview

add content here

---

## App Features

add content here

---

## Domain Security

- La autenticación se realizará mediante registro por email o API de Facebook, Instagram*
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
├── Lib 
├── App - Vendedor
└── App - Comprador
```

---

## Shared functionality



---

```
src
├── modules
│   ├── store
│   │   ├── app
│   │   │   └── use-cases
│   │   │       ├── list-products.usecase.ts
│   │   │       ├── add-to-cart.usecase.ts
│   │   │       └── checkout.usecase.ts
│   │   ├── domain
│   │   │   ├── entities
│   │   │   │   ├── product.entity.ts
│   │   │   │   ├── product-variant.entity.ts
│   │   │   │   └── stock.entity.ts
│   │   │   ├── repositories
│   │   │   │   └── product.repository.ts
│   │   │   └── services
│   │   │       └── stock.service.ts
│   │   └── infra
│   │       ├── db
│   │       │   └── product.repository.impl.ts
│   │       ├── http
│   │       │   └── store.controller.ts
│   │       └── store.module.ts
│   │
│   ├── orders
│   │   ├── app
│   │   │   └── use-cases
│   │   │       ├── create-order.usecase.ts
│   │   │       └── assign-product.usecase.ts
│   │   ├── domain
│   │   │   ├── entities
│   │   │   │   ├── order.entity.ts
│   │   │   │   └── order-item.entity.ts
│   │   │   ├── repositories
│   │   │   │   └── order.repository.ts
│   │   │   └── services
│   │   └── infra
│   │       ├── db
│   │       │   └── order.repository.impl.ts
│   │       ├── http
│   │       │   └── order.controller.ts
│   │       └── order.module.ts
│   │
│   ├── customers
│   │   ├── app
│   │   │   └── use-cases
│   │   │       └── register-customer.usecase.ts
│   │   ├── domain
│   │   │   ├── entities
│   │   │   │   └── customer.entity.ts
│   │   │   ├── repositories
│   │   │   │   └── customer.repository.ts
│   │   │   └── services
│   │   └── infra
│   │       ├── db
│   │       │   └── customer.repository.impl.ts
│   │       ├── http
│   │       │   └── customer.controller.ts
│   │       └── customer.module.ts
│   │
│   ├── deliveries
│   │   ├── app
│   │   │   └── use-cases
│   │   │       └── create-delivery.usecase.ts
│   │   ├── domain
│   │   │   ├── entities
│   │   │   │   └── delivery.entity.ts
│   │   │   ├── repositories
│   │   │   │   └── delivery.repository.ts
│   │   │   └── services
│   │   └── infra
│   │       ├── db
│   │       │   └── delivery.repository.impl.ts
│   │       ├── http
│   │       │   └── delivery.controller.ts
│   │       └── delivery.module.ts
│   │
│   └── payments
│       ├── app
│       │   └── use-cases
│       │       ├── create-payment.usecase.ts
│       │       └── verify-payment.usecase.ts
│       ├── domain
│       │   ├── entities
│       │   │   └── payment.entity.ts
│       │   ├── repositories
│       │   │   └── payment.gateway.ts
│       │   └── services
│       └── infra
│           ├── gateways
│           │   └── wompi.adapter.ts
│           ├── http
│           │   └── payment.controller.ts
│           └── payment.module.ts
│
├── shared
│   ├── errors
│   │   └── domain-exception.ts
│   └── utils
│       └── date.util.ts
│
├── app.module.ts
└── main.ts

```
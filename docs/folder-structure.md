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
│   │   │   │   ├── order.entity.ts
│   │   │   │   ├── order-item.entity.ts
│   │   │   │   └── delivery.entity.ts
│   │   │   ├── repositories
│   │   │   │   ├── product.repository.ts
│   │   │   │   └── order.repository.ts
│   │   │   └── services
│   │   │       └── stock.service.ts
│   │   ├── infra
│   │   │   ├── db
│   │   │   │   ├── product.repository.impl.ts
│   │   │   │   └── order.repository.impl.ts
│   │   │   ├── http
│   │   │   │   └── store.controller.ts
│   │   │   └── store.module.ts
│   │   └── index.ts
│   │
│   ├── payments
│   │   ├── app
│   │   │   └── use-cases
│   │   │       ├── create-payment.usecase.ts
│   │   │       └── verify-payment.usecase.ts
│   │   ├── domain
│   │   │   ├── entities
│   │   │   │   └── payment.entity.ts
│   │   │   ├── repositories
│   │   │   │   └── payment.gateway.ts
│   │   │   └── services
│   │   ├── infra
│   │   │   ├── gateways
│   │   │   │   └── payment.adapter.ts
│   │   │   ├── http
│   │   │   │   └── payment.controller.ts
│   │   │   └── payment.module.ts
│   │   └── index.ts
│
├── shared
│   ├── errors
│   │   └── domain-exception.ts
│   └── utils
│       └── date.util.ts
│
├── app.module.ts      # módulo raíz NestJS
└── main.ts            # bootstrap
```
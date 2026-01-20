# playwright-node
Sample project to learn Playwright with NodeJS

playwright-framework/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
│
├── tests/
│   ├── e2e/
│   │   ├── login.spec.ts
│   │   ├── checkout.spec.ts
│   │   └── user-profile.spec.ts
│   │
│   ├── smoke/
│   │   └── smoke.spec.ts
│   │
│   ├── api/
│   │   └── user.api.spec.ts
│   │
│   └── regression/
│       └── full-regression.spec.ts
│
├── src/
│   ├── pages/
│   │   ├── base/
│   │   │   └── BasePage.ts
│   │   │
│   │   ├── LoginPage.ts
│   │   ├── HomePage.ts
│   │   └── CheckoutPage.ts
│   │
│   ├── flows/              # (your function / service layer)
│   │   ├── LoginFlow.ts
│   │   ├── CheckoutFlow.ts
│   │   └── UserFlow.ts
│   │
│   ├── components/         # reusable UI blocks
│   │   ├── HeaderComponent.ts
│   │   └── FooterComponent.ts
│   │
│   ├── fixtures/
│   │   ├── pageFixtures.ts
│   │   └── apiFixtures.ts
│   │
│   ├── api/
│   │   ├── clients/
│   │   │   └── UserApiClient.ts
│   │   └── models/
│   │       └── User.ts
│   │
│   ├── utils/
│   │   ├── env.ts
│   │   ├── logger.ts
│   │   ├── testData.ts
│   │   └── waitUtils.ts
│   │
│   └── types/
│       └── custom.d.ts
│
├── test-data/
│   ├── users.json
│   ├── orders.json
│   └── environments.json
│
├── reports/
│   └── playwright-report/
│
└── ci/
    ├── github-actions.yml
    └── docker-compose.yml


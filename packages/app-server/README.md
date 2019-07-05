# NIGHT WATCH APP SERVER

## INSTALLATION

### Requirements

- Node.js >= 8

### Instructions

```bash
$ yarn install
$ yarn start # yarn dev for development
```

## DOCUMENTATION

| ROUTE        | METHOD | REQ BODY                                | RES BODY               | USE           |
| ------------ | ------ | --------------------------------------- | ---------------------- | ------------- |
| `/`          | GET    |                                         | `{ iam: '/' }`         |
| `/api/watch` | POST   | `{ url: string, cssSelectors: object }` | `{ success: boolean }` | Add new watch |

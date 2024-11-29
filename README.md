# API Test Playwright

## Introduction

Playwright framework for API testing

## Installation

To set up this project, you can use the following command:

```bash
npm install
```

## Handling Multiple Test Environments

### Config File

- [config-default.json](./src/app-config/config-default.json): Contains all the common configurations shared across environments.
- [config-[env].json](./src/app-config/config-[env].json): Holds environment-specific configurations. Replace [env] with the target environment name (e.g., dev, staging, prod).

### Resources (Test Data)

- Environment-specific test data is located in the `/src/test/resources/` directory.
Each environment-specific subdirectory contains the test data relevant to that environment.

### To Run Tests

To run DEV test:

```bash
export TEST_ENV=dev
npm run test-local
```

To run UAT test:

```bash
export TEST_ENV=uat
npm run test-local
```

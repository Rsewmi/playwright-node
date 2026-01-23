# 🎭 Playwright Automation Framework (Node.js + TypeScript)

## Overview

This project is a scalable UI test automation framework built using **Playwright with Node.js and TypeScript**.  
It was created as a learning project with a strong focus on **framework design, clean architecture, and scalability**, rather than writing simple Playwright test scripts.

The goal of this project is to demonstrate how Playwright can be structured for **real-world, large-scale automation projects**.

---

## Key Objectives

- Learn Playwright using TypeScript
- Design a maintainable and scalable automation framework
- Apply enterprise-level test automation best practices
- Avoid hard-coded data and credentials

---

## Project Structure
src/
├─ pages/ # Page Objects (UI locators and actions)
├─ flows/ # Business flows / user journeys
├─ data/ # Test data and user definitions
├─ fixtures/ # Playwright fixtures and dependency wiring
├─ utils/ # Reusable utilities (authentication, helpers)
tests/ # Test scenarios

---

## Architecture Approach

### Page Objects (`pages`)
- Encapsulate UI locators and low-level interactions
- Own the Playwright `Page` instance
- Do not contain assertions or test logic

### Flows (`flows`)
- Represent business-level actions (e.g. login, navigation)
- Combine multiple page actions
- Hide UI implementation details from tests

### Test Data (`data`)
- Centralized definition of user roles and credentials
- Credentials are loaded from environment variables
- No sensitive data is committed to the repository

### Fixtures (`fixtures`)
- Use Playwright’s fixture system for dependency injection
- Provide Page Objects and Flows to tests
- Keep test files clean and readable

### Utilities (`utils`)
- Contain reusable logic such as authentication helpers
- Designed to support future enhancements (API login, storage state, etc.)

---

## Environment Configuration

Sensitive data such as URLs and credentials are stored in a `.env` file.

Example:
BASE_URL=https://example.com
STANDARD_USER=standard_user
STANDARD_PASSWORD=********

- `.env` is ignored from version control
- Environment variables are loaded once in `playwright.config.ts`
- Accessed throughout the framework using `process.env`

---

## Running the Tests

Install dependencies:
```bash
npm install
```
Run all tests:
```bash
npx playwright test
```
Run in UI mode:
```bash
npx playwright test --headed
```
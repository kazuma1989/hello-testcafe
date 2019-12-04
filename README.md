# hello-testcafe

[TestCafe](https://devexpress.github.io/testcafe/) trial

## Getting Started

Requirements:

- Node.js (LTS) installed
- Browsers installed

Clone the repo, then run:

```zsh
npm install
npm test
```

## What is TestCafe?

> A node.js tool to automate end-to-end web testing  
> (https://devexpress.github.io/testcafe/)

## Why do I use TestCafe?

- I need to write tests for multi browsers
- I don't want to install the drivers for each browser in CI environments

|          | TestCafe                            | Selenium                            | Cypress         | Puppeteer |
| -------- | ----------------------------------- | ----------------------------------- | --------------- | --------- |
| Browsers | Chrome, Firefox, Safari, Edge, IE11 | Chrome, Firefox, Safari, Edge, IE11 | Chrome, Firefox | Chrome    |
| Language | TypeScript, Node.js                 | Java, Groovy                        | Node.js         | Node.js   |
| Drivers  | -                                   | Required                            | -               | -         |

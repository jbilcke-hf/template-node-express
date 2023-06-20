---
title: Template Node Express
emoji: 🏗️
colorFrom: gray
colorTo: blue
sdk: docker
pinned: false
app_port: 7860
---

A minimalist Docker Space to help people getting started with Node, Express and TypeScript

## Installation

### Prerequisites

- Install NVM: https://github.com/nvm-sh/nvm
- Install Docker https://www.docker.com

### Building and run without Docker

```bash
nvm use
npm i
npm run start
```

### Building and running with Docker

```bash
npm run docker
```

This script is a shortcut executing the following commands:

```bash
docker build -t template-node-express .
docker run -it -p 7860:7860 template-node-express
```

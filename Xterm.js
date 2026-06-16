cat << 'EOF' > .github/workflows/ci.yml
name: Web Terminal CI

on:
  push:
    branches: [ "main", "master" ]
  pull_request:
    branches: [ "main", "master" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci --if-present

      - name: Build app
        run: npm run build --if-present
EOF

mkdir -p .github/workflows

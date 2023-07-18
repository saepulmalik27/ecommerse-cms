## Demo Project

open [DEMO PROJECT](https://ecommerse-cms.vercel.app)

## Project Description & Tools

Create CMS using data from dummyjson.com

| No  | Description                           |
| --- | ------------------------------------- |
| 1   | Product Table                         |
| 2   | Analytics product                     |
| 3   | Cart Table                            |
| 4   | Cart Detail                           |
| 5   | Pagination and filter for every table |

this project using tools

| No  | Description                 |
| --- | --------------------------- |
| 1   | NextJs                      |
| 2   | React                       |
| 3   | Typescript                  |
| 4   | Tailwindcss                 |
| 5   | HeadlessUI                  |
| 6   | react-intersection-observer |
| 7   | framer-motion               |

## Getting Started

1. clone project from this repo url [https://github.com/saepulmalik27/ecommerse-cms]
2. go to porject folder

```bash
cd ecommerse-cms
```

3. i recommend you using yarn here so please if install yarn first

```bash
npm i -g yarn
```

4. install all the depedencies in project using this command

```bash
yarn install
or
yarn
```

5. setup environment in .env or .env.local

```
SERVICE_API_URL = https://dummyjson.com/
```

6. after finish install all the dependencies, for run your project localy run this command below

```bash
yarn dev
```

## How this project formated & structured

1. using `typescript`, code formated using `prettier` with standar format you may setup on file `.prettierrc.json`
2. and `eslints` as default linter you can add additional linter on file `.eslintrc.json`
3. also using husky for check format & linter before commit,
4. using `lint-staged` so husky cek format & linter file that only change or add, you may find setup in `lint-staged-config.js`

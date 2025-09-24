# Posts App | median.dev

Стек: Next.js (Pages Router), React Query, Axios, Tailwind CSS.

## Скрипты

- dev — запуск дев-сервера
- build — прод сборка
- start — запуск собранного
- lint — ESLint

## Архитектура и подходы

- Получение данных: клиентский рендер (CSR) через React Query. На страницах, где нужен SEO/404 — SSR через getServerSideProps.
- Сетевой слой: лёгкая обёртка над Axios (`lib/api.ts`) с таймаутом и простым пробросом ошибок.
- Хуки: вся работа с React Query вынесена в кастомные хуки (`hooks/`).
- Состояния UI: единые компоненты `Loader` и `ErrorState`. Для 404 используется `pages/404.tsx`.

## Структура папок

```
src/
  components/
  hooks/
  lib/
  pages/
  styles/
  types/
  utils/
```

Примечания:

- Компоненты “экраны/страницы” не размещаются в `components/`, а живут в `pages/`.

## Рендеринг

- `/` — CSR: данные через React Query.
- `/posts/[id]` — SSR (getServerSideProps).
- `/search` — CSR: локальная фильтрация по кэшу.
- `/404` — статическая.

## Данные

Используется публичный API https://jsonplaceholder.typicode.com

## Запуск

```bash
npm install
npm run dev
```

# Константин Попов — Персональный сайт

Персональный сайт Senior Project Manager. Статический сайт на Astro, готов к публикации на GitHub Pages.

## Технологии

- **Astro** — генерация статического сайта
- **TypeScript** — типизированные data-файлы
- **CSS** — кастомные стили, без фреймворков
- Минимальный Vanilla JS только для навигации

## Быстрый старт

```bash
npm install
npm run dev
```

Открыть: http://localhost:4321

## Сборка

```bash
npm run build
npm run preview
```

## Публикация на GitHub Pages

### 1. Создать репозиторий

Создать репозиторий: `<username>.github.io` (для публикации на корневом домене).

### 2. Обновить конфиг

В `astro.config.mjs` заменить `site`:
```js
site: 'https://<username>.github.io',
```

### 3. Включить GitHub Pages

В репозитории: **Settings → Pages → Source → GitHub Actions**

### 4. Push

```bash
git init
git add .
git commit -m "initial"
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

GitHub Actions автоматически соберёт и задеплоит сайт.

## Структура проекта

```
src/
  components/   — все секции сайта
  data/         — данные (metrics, projects, skills, certificates)
  layouts/      — BaseLayout с SEO
  pages/        — index.astro
  styles/       — global.css
public/
  robots.txt
  sitemap.xml
  favicon.svg
.github/
  workflows/deploy.yml
```

## Обновление контента

Все данные — в `src/data/`:
- `metrics.ts` — ключевые показатели
- `projects.ts` — проекты
- `skills.ts` — навыки
- `certificates.ts` — сертификаты и образование

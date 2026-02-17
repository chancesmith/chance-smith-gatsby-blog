# Chance Smith blog (Hugo)

This site now builds with Hugo.

## Local development

```sh
npm run develop
```

## Production build

```sh
npm run build
```

Generated files are written to `public/`.

## Project structure

- `content/` - markdown content for posts and pages
- `layouts/` - Hugo templates and partials
- `static/` - static files copied directly to the build output
- `hugo.toml` - Hugo site configuration
- `migration/` - migration plans and phase validation notes

## Migration notes

Migration planning and validation records are tracked in:

- `HUGO_MIGRATION_PLAN.md`
- `migration/phase-*-validation.md`

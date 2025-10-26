# Personal Portfolio
> https://marcocalifano89.github.io/

## Stack
- [Astro 4](https://astro.build/) (static output)
- Bootstrap / custom CSS served via CDN and `public/assets`

## Prerequisites
- Node.js 18+ (consigliata installazione tramite [nvm](https://github.com/nvm-sh/nvm) o [volta](https://volta.sh/))

## Comandi principali
```bash
npm install        # installa le dipendenze
npm run dev        # avvia server locale (http://localhost:4321)
npm run build      # genera la build statica in ./dist
npm run preview    # serve la build generata
```

## Deploy su GitHub Pages
1. Esegui `npm run build` (la cartella `dist/` contiene l'output statico)
2. Pubblica il contenuto di `dist/` sul branch configurato per GitHub Pages (es. `gh-pages`):
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```
   oppure usa un workflow GitHub Actions che esegua `npm install`, `npm run build` e carichi `dist/`.

## Struttura cartelle
- `src/layouts/` layout Astro condivisi
- `src/pages/` pagine (.astro)
- `public/` asset statici (immagini, vendor, progetti, favicon)

## Note
- Le librerie vendor sono servite da CDN; gli asset rimasti in `public/assets` vengono copiati nella build.
- Aggiorna `astro.config.mjs` se cambi dominio o preferisci output server-side.

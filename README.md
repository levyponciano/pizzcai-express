# PizzÇAÍ Express

Site estatico em formato link da bio para a PizzÇAÍ Express.

## Estrutura

- `index.html`: conteudo principal do site.
- `styles.css`: identidade visual, responsividade e animacoes.
- `script.js`: revelacao por rolagem com `IntersectionObserver`.
- `img/`: imagens usadas no site.
- `.github/workflows/deploy-pages.yml`: publicacao no GitHub Pages.

## Validacao

```bash
npm run check
```

## Publicacao

O deploy e feito pelo GitHub Pages via Actions. No GitHub, configure:

- `Settings > Pages`
- `Build and deployment > Source`
- `GitHub Actions`

Depois, envie alteracoes para a branch `main`.

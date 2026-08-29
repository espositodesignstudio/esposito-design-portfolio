@AGENTS.md

## Regola tipografica (OBBLIGATORIA)
- h1: 7.993rem, h2: 5.653rem, h3: 3.998rem, h4: 2.827rem, h5: 1.999rem, h6: 1.414rem, p: 1rem, small: 0.707rem — tutti definiti come clamp() responsive in globals.css.
- h1, h2, h3, h4, h5, h6, p ereditano SEMPRE queste dimensioni — MAI sovrascrivere con classi text-* Tailwind sui tag semantici di titolo/paragrafo di contenuto.
- Un H1 per pagina, H2 per sezioni, H3 per sotto-titoli/titoli di card.
- Micro-elementi UI (badge, label, input, pulsanti, copyright) possono avere dimensioni proprie dedicate — non sono soggetti a questa regola.
- Prima di aggiungere una classe text-* a un tag h1-h6/p, verifica prima se serve davvero o se il valore ereditato da globals.css è già corretto.

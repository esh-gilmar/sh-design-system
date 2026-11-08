---
name: sh-web-ui
description: Padroniza interfaces web da Santa Helena usando tokens oficiais, convenções de UI, componentes e validação visual. Acione ao criar, revisar ou alterar páginas, CSS, Tailwind, React e fluxos de interface.
---

# SH Web UI · implementação assistida

## Pré-condição

Leia, nesta ordem:
1. AGENTS.md
2. docs/foundations.md
3. docs/components.md
4. docs/decisions.md
5. packages/tokens/sh.tokens.json
6. docs/references.md (quando for relevante à tela)

## Protocolo

1. Identifique público, objetivo e família visual (SH Identity ou SH Workspace).
2. Reconheça a stack do projeto existente antes de propor libs ou alterações.
3. Preserve padrões funcionais, regras de negócio e acessibilidade.
4. Use tokens semânticos, sem inventar tons que contrariem a identidade oficial.
5. Reutilize componentes existentes; se não houver, registre proposta no catálogo antes de disseminá-la.
6. Considere estados vazios/erro/loading/disabled/focus e navegação por teclado.
7. Aplique escala legível; nunca reduza textos arbitrariamente para caber.
8. Construa responsivo, sem overflow horizontal involuntário em telas comuns.
9. Execute testes disponíveis e verifique imagens com baseline sanitizado aprovado.
10. Informe mudanças, evidências de validação e decisões pendentes de aprovação.

## Restrições

- Não alegar que proposta v0.1.0 está homologada.
- Não usar #00D17A ou #F28C07 como cor institucional por terem aparecido no legado.
- Não redesenhar logomarca nem fabricar arquivos de fonte/licença.
- Não publicar prints internos ou informações sensíveis em repo público.
- Não instalar Radix, Tailwind ou shadcn automaticamente em projetos CSS puros.
- Não citar screenshots indisponíveis como se tivessem sido consultadas pelo agente local.
- Não criar qualquer interface apenas com base nesta Skill sem considerar o domínio e os dados.

## Critério de entrega

Resultado funcional + evidência de testes + documentação das exceções visuais + nenhuma regressão de acessibilidade conhecida.

## Quando a solicitação envolver apresentação, telão ou data show

Leia **docs/presentation.md** obrigatoriamente. Não transporte duas visualizações densas lado a lado para slides. Confirme a fonte legível após escalar o gráfico/SVG; use um assunto por slide, navegação por teclado, tela cheia opcional, logo autorizada, período, metodologia e fontes. Preferir ampliar a escala e reduzir a quantidade de dados por tela, preservando a visualização detalhada no dashboard. Valide em 1366×768 e 1920×1080, além de garantir ausência de overflow horizontal.

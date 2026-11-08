# Orientações obrigatórias para agentes de código

Este projeto desenvolve o **SH Design System**, ainda em versão **proposta**.

Antes de criar/modificar interface:
1. Leia docs/foundations.md, docs/components.md e docs/decisions.md.
2. Execute as instruções de .agents/skills/sh-web-ui/SKILL.md.
3. Não invente cores corporativas: consulte packages/tokens/sh.tokens.json.
4. Distingua tokens oficiais (Brandbook) de decisões de UI ainda provisórias.
5. Não copie capturas internas nem dados reais para o repositório público.
6. Use componentes/tokens compartilhados. Evite CSS específico desnecessário.
7. Preserve acessibilidade, comportamento responsivo, navegação por teclado e qualidade de foco.
8. Aplique a alteração mínima e rode npm test e npm run tokens:check.
9. Não afirme que a biblioteca React @sh/ui existe: ela está planejada, não implementada.
10. Não faça mudanças destrutivas em consumidores legados nem migrações em massa sem solicitação.

Critério de conclusão: comportamento funcional demonstrado, variáveis coerentes, visual comparado com referências aprovadas e ausência de dados corporativos expostos.

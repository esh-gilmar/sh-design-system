# SH Design System

**Design System de aplicações da Energética Santa Helena · Fundação v0.1.0 (proposta)**

> **Status:** proposta técnica em validação, ainda não homologada como padrão corporativo. Este repositório está **público** no momento; não publicar prints internos, materiais restritos, dados pessoais, credenciais ou fontes licenciadas.

## O que contém

| Camada | Caminho | Responsabilidade |
| --- | --- | --- |
| Identidade | docs/foundations.md | Padrões oficiais versus decisões digitais propostas |
| Tokens | packages/tokens/ | Valores semânticos em JSON e CSS, independentes do framework |
| UI de referência | packages/ui/sh-components.css | Componentes CSS para prototipação e aplicações sem React |
| Vitrine | showcase/index.html | Dashboard e formulário sem dados internos |
| Agentes | .agents/skills/sh-web-ui/SKILL.md | Skill principal para Codex / Gemini |
| Claude Code | .claude/skills/sh-web-ui/SKILL.md | Adaptador para a Skill principal |
| Qualidade | tests/ e .github/workflows/ | Testes para tokens, contraste e arquivos obrigatórios |
| Origem visual | docs/references.md | Inventário de screenshots sem incluir capturas confidenciais |

## Começar

~~~bash
git clone https://github.com/esh-gilmar/sh-design-system.git
cd sh-design-system
npm test
npm run tokens:check
~~~

Para inspecionar a vitrine, abra showcase/index.html em um navegador (os estilos são relativos e não dependem de CDN). Os exemplos não implementam autenticação e não expõem dados da operação.

## Uso em projetos novos

1. Consulte AGENTS.md e a Skill sh-web-ui.
2. Consuma os tokens de packages/tokens/sh.css, fixando uma versão/tag.
3. Reutilize estilos/componentes existentes ou proponha novos componentes com evidências.
4. Execute npm test e verificação visual nas telas afetadas.
5. Não adote referências legadas que contrariem o Brandbook.

Para aplicações React, a futura biblioteca @sh/ui terá wrappers sobre primitives acessíveis; **não está publicada** e não deve ser declarada como dependência existente.

## Regras de precedência

**Marca oficial (Brandbook SH 2026)** > **decisões aprovadas do Design System** > **padrões propostos** > **legado de aplicações**.

## Próximos passos

Ver docs/roadmap.md. Para contribuir, siga docs/contributing.md.

## Modo apresentação

Para relatórios executivos projetados em sala, siga [SH Presentation](docs/presentation.md). A escala do SH Workspace não é suficiente para data show: requer tipografia, legendas e gráficos maiores e composição por slides sem rolagem horizontal.

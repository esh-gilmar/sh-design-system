# Catálogo inicial de componentes

**Status:** estilos de referência CSS. Não são uma biblioteca React publicada.

| Componente | Classe base | Regras |
|---|---|---|
| Botão | .sh-button | Primário, secundário, ghost; foco visível e disabled |
| Campo | .sh-field, .sh-input | Label real e descrição de erro |
| Card | .sh-card | Fundo surface, borda, raio e espaçamento |
| Status | .sh-badge | Texto acompanha cor; não depender apenas da cor |
| Tabela | .sh-table | Semântica th/scope, hover discreto, overflow horizontal |
| Navegação | .sh-nav, .sh-nav__link | Link ativo com aria-current quando aplicável |
| Shell | .sh-shell, .sh-sidebar, .sh-main | Sidebar e main responsivos |
| KPIs | .sh-kpi | Números, contexto e descrição legíveis |
| Tabs | .sh-tabs | Usar links ou controles corretos; visuais não bastam |

## Contrato obrigatório

Todo componente novo deve documentar: propósito, variantes, propriedades/atributos, estados, acessibilidade, responsividade, exemplos e critérios de aceitação. Tamanho e cor não são suficientes para considerar um componente pronto.

## Uso com React e shadcn/ui

shadcn/ui + Radix UI + Tailwind são uma **proposta de stack para novos projetos React**, inspirada no Registro de Viagem. Os primitives de Radix facilitam padrões acessíveis, mas **não substituem testes de acessibilidade**. A biblioteca corporativa @sh/ui ainda será construída; não declarar imports inexistentes.

## Migrar gradualmente

Não reescrever estilos dos projetos Helena Projetos ou PCP Agrícola apenas para adotar tokens. Começar por novas telas e componentes de menor risco; manter regressão visual e funcional por fluxo. Aprovação por produto.

## Comportamento em apresentação

Componentes de dashboard devem oferecer uma variante de leitura ampla para data show, sem duplicar a fonte de dados. Gráficos com eixos pequenos, legendas inferiores a 18 px no tamanho renderizado e tabelas com dezenas de registros **não** devem ser transferidos intactos para slides. Consultar [SH Presentation](presentation.md) para escala e critérios de aprovação.

# Fundamentos da interface SH

**Versão:** 0.1.0 · **Status:** proposta, não aprovada

## Fonte de autoridade

O Brandbook SH 2026 é a fonte normativa para a identidade institucional. Está sob guarda corporativa, **não incorporado ao repositório público**.

### Cores institucionais confirmadas no Brandbook

| Token | HEX | Classificação |
|---|---|---|
| color.brand.green | #00602D | **Oficial** |
| color.brand.greenDark | #032D10 | **Oficial** |
| color.brand.orange | #EF7D00 | **Oficial** |
| color.brand.white | #FFFFFF | **Oficial** |

Observação de controle: no Brandbook há divergência entre HEX e RGB para o verde principal. Usar o HEX nesta implementação até esclarecimento pelo responsável da marca.

### Tipografia

- Brandbook: **Dax** indicada para títulos/textos.
- Não distribuir arquivos Dax neste repositório. É preciso garantir licenciamento e disponibilidade em ambiente corporativo.
- **Proposta provisória para UI:** Inter, Segoe UI, system-ui, sans-serif, com hierarquia e alinhamento consistentes. A escolha final da fonte da interface depende da decisão institucional.
- Valores de tipografia em rem, respeitando zoom do navegador; nunca bloquear dimensionamento do usuário.

## Famílias visuais adotadas como direção (não como especificação aprovada)

### SH Identity

Entradas e experiências institucionais: fotografia autorizada da instalação ou ilustração licenciada, grandes áreas verdes, texto de alto contraste e painel de acesso claro. Adotar conteúdo visual apenas se o projeto possuir permissão para usá-lo.

### SH Workspace

Experiência operacional: canvas cinza muito claro, cartões brancos, cabeçalho compacto, navegação lateral neutra, hierarquia simples, verde em ações primárias e laranja restrito a alertas/destaques; evitar excesso de cor.

## Tokens de interface propostos

- background #F5F6F8
- surface #FFFFFF
- text #1D2025
- muted #64748B
- border #DCE1E5
- success #166534
- warning #9A6700
- danger #B42318
- raios 8/12/16 px, grid de espaços múltiplos de 4 px

**Esses valores NÃO fazem parte das quatro cores oficiais do Brandbook**; são convenções de interface provisórias, sujeitas a testes e aprovação.

## Diretrizes

- Clareza e legibilidade acima de ornamentação.
- Componentes não devem reduzir o tamanho dos textos para caber no layout.
- Em desktops, preferir densidade moderada e colunas alinhadas; em dispositivos móveis, reorganizar informação em vez de simplesmente encolher.
- Tabelas têm cabeçalhos, ordenação explícita, paginação e estados sem resultados; não exibir falsas capacidades interativas.
- Estados: idle, hover, focus-visible, active, loading, empty, error, disabled e success.
- Acessibilidade WCAG 2.2 AA como objetivo técnico: contraste textual mínimo 4.5:1 no texto normal, foco visível, labels, fluxo por teclado.
- Laranja institucional é destaque, não cor padrão de texto pequeno sobre branco; verificar contraste.
- Modo escuro, quando implementado, deve ter tokens semânticos próprios e revisão de contraste; não derivar por inversão automática.

## Não confundir marca com legado

Exemplos de cores identificadas em aplicações SH:
- Helena Projetos: #00552B / #E67817.
- PCP Agrícola e Registro de Viagem Admin: #00D17A / #F28C07.

São evidências do legado, **não autorização** para substituir #00602D / #EF7D00 como fonte institucional.

## Legibilidade mínima e apresentação

A escala de 12 px encontrada em algumas telas legadas **não é padrão recomendado** para relatórios e painéis de análise. Para uso operacional, adotar fonte base de 16 px, e evitar suporte, tabelas e legendas sistematicamente abaixo de 14 px. Para projeção em data show, aplicar o perfil **SH Presentation** definido em [docs/presentation.md](presentation.md): títulos grandes, rótulos de gráficos e metodologia legíveis à distância, evitando mera ampliação do dashboard.

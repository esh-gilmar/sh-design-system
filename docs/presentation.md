# SH Presentation — legibilidade e modo data show

**Status:** proposta de padrão do SH Design System, complementar ao SH Workspace e à Skill sh-executive-interactive.

## Dois perfis de leitura

| Perfil | Finalidade | Requisitos |
|---|---|---|
| **Workspace** | Operação em monitor individual | Fonte base de 16 px; conteúdo secundário e gráficos não devem ficar sistematicamente abaixo de 14 px; garantir contraste e zoom |
| **Presentation** | Projeção em reunião e data show | Tipografia, visualizações e controles ampliados; cada assunto ocupa uma tela, com pouca informação acessória |

**Nunca** usar a densidade de interface operacional como escala tipográfica de uma apresentação. A apresentação não deve ser um simples zoom no dashboard.

## Escala de referência — apresentação 1366 × 768 ou 1920 × 1080

Valores-alvo em CSS px, avaliados no **tamanho efetivamente renderizado**; SVGs escalados podem reduzir substancialmente o texto:

| Elemento | Alvo inicial |
|---|---:|
| Título de slide | 36–52 px |
| Subtítulo/corpo de texto | 20–24 px |
| KPI principal | 44–64 px |
| Legendas e rótulos de gráficos | 18–22 px |
| Tabela projetada | 18–22 px |
| Metodologia e observações importantes | 18–22 px |
| Botões de navegação | 18 px ou mais, alvo interativo de 44 px |

Os valores são referências para a distância de leitura; se o ambiente exigir mais tamanho, reduzir a quantidade de elementos **antes** de reduzir a fonte. Em tela 1366 × 768, alguns controles periféricos podem exigir adaptação, mas nunca esconder informações metodológicas essenciais.

## Regras obrigatórias para o modo apresentação

1. Entrada explícita “Modo apresentação” no dashboard; voltar ao modo normal sem perda de filtros e dados.
2. Navegação entre slides por botões e teclas: setas, PageUp/PageDown, Espaço, Home/End; **Esc** encerra.
3. A opção de tela cheia utiliza a API fullscreen quando disponível e possui fallback não bloqueante.
4. Exibir número do slide/progresso, título contextual e logomarca oficial quando houver asset autorizado.
5. Uma visualização principal por slide; evitar dois gráficos densos lado a lado.
6. Não exigir **scroll horizontal da página ou do slide**. Se necessário, colocar o gráfico mensal em linha própria, usar recorte temporal **declarado** ou criar slide adicional.
7. Evitar tabelas extensas em projeção; sintetizar registros relevantes e disponibilizar tabela completa no dashboard.
8. Animações discretas e pausadas (preferir 500–700 ms), respeitando `prefers-reduced-motion`. Não usar autoplay que prejudique leitura.
9. Informar fonte, período, unidades, legendas e limitações da metodologia sem esconder dados ou propor métricas não calculadas.
10. **Nunca** expor imagens com dados pessoais ou relatórios corporativos no repositório público apenas para demonstrar o padrão.

## Critérios de aceite visual

- Capturar screenshot em 1366×768 e 1920×1080, 100% de zoom.
- Inspecionar legibilidade em sala, não somente no navegador de desenvolvimento.
- Testar ausência de overflow horizontal, clipping de rótulos, contraste, teclado e modo fullscreen.
- Verificar que a série temporal destacada informa se mostra período completo ou amostra de meses.
- Testar as telas normais também em 390×844 e 320×568.
- Preservar a base de dados e o cálculo; apresentação é **camada de visualização**, não processamento alternativo.

## Organização recomendada

`SH Identity`: acessos e capas institucionais. `SH Workspace`: consulta e operação. `SH Presentation`: composição para tela grande e projeção. Os três perfis compartilham identidade e tokens semânticos, mas possuem densidades e escalas diferentes.

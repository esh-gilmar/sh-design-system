# Inventário de evidências visuais

Em 08/11/2026 foram recebidas **7 capturas** diretamente na conversa de levantamento do Design System. Elas não são distribuídas aqui por exibirem interfaces internas e, em alguns casos, dados pessoais ou corporativos.

| ID | Categoria | O que observar | Não generalizar |
|---|---|---|---|
| REF-01 | Helena IA — login com ilustração | Paleta escura, separação visual, formulários, hero | Personagem não é elemento obrigatório para todo sistema |
| REF-02 | Portal de Relatórios — acesso fotográfico | Fotografia institucional, painel claro e autenticadores | Foto não deve ser copiada sem autorização |
| REF-03 | Helena Projetos — login | Overlay verde, card de login, hierarquia, marca | Login não determina estrutura do app interno |
| REF-04 | Helena Projetos — visão geral | Sidebar clara, KPIs, tabela, ações e espaçamento | Números e nomes não são dados de exemplo autorizados |
| REF-05 | Helena Projetos — quadro | Navegação por abas, Kanban, status, cards | Status e fluxos dependem do domínio do produto |
| REF-06 | Helena Projetos — painel gerencial | Barra de filtros, cards densos, hierarquia | Valores e indicadores de negócio não devem ser reproduzidos |
| REF-07 | Helena Projetos — matriz de analistas | Tabela densa, medidores, alertas e links | Não reutilizar nomes de funcionários nem dados reais |

## Fluxo seguro

1. Guardar os originais em ambiente corporativo privado controlado.
2. Redigir ou substituir informações pessoais/operacionais.
3. Registrar resolução, data, versão do produto, tela, componentes observados e decisão de aprovação.
4. Incluir no GitHub somente capturas aprovadas para esse contexto.
5. Validar correspondência do CSS/DOM com screenshot (Playwright) antes de promover padrão.

## Links de inspeção técnica

- Helena Projetos: https://github.com/esh-gilmar/Helena-Projetos/blob/main/src/styles.css
- PCP Agrícola: https://github.com/esh-gilmar/portal-pcp-agricola/blob/develop/src/web/styles.css
- Registro de Viagem: https://github.com/esh-gilmar/sh-registro-de-viagem/blob/main/apps/admin/src/index.css

**Nota:** estes projetos são fontes de evidência e não fontes normativas superiores ao Brandbook.

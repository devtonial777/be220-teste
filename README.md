# BE220 Teste - App Ionic Angular

Aplicação desenvolvida como parte de um teste técnico utilizando **Ionic + Angular + Capacitor**.

---

## Sobre o projeto

Este projeto consiste na construção de uma interface mobile baseada em um layout fornecido, com foco em:

* Estrutura organizada de componentes
* Boas práticas com Angular (Standalone Components)
* Uso de componentes do Ionic
* Interface responsiva e moderna

---

## Decisões Técnicas

Durante a análise do layout, foi identificado que as seções abaixo do header possuíam a mesma estrutura base, com pequenas variações de comportamento.

Com isso, foi adotada a seguinte abordagem:

* Criação de um componente **Section** responsável por:

  * Título
  * Ações (ex: botão "+")
  * Scroll horizontal

* Criação de um componente **Card** reutilizável para:

  * Cards do tipo `create`
  * Cards do tipo `progress`

* Criação de um componente separado (**ContentCard**) para:

  * Cards de conteúdo, devido à diferença estrutural (sem imagem/overlay)

Essa separação foi feita para manter:

* Baixo acoplamento
* Alta reutilização
* Facilidade de manutenção

---

## Estrutura de Dados

A renderização das seções e cards é totalmente dinâmica, baseada em objetos JSON, permitindo fácil escalabilidade.

Exemplo:

```json
{
  "titulo": "PERSONAL ONLINE",
  "type": "create",
  "cards": [
    {
      "type": "create",
      "titulo": "NOVO TREINO",
      "urlImagem": "assets/images/img-treino.webp"
    },
    {
      "type": "progress",
      "titulo": "YOGA EXPRESS",
      "subtitulo": "continuar treinando",
      "urlImagem": "assets/images/img-treino.webp"
    }
  ]
}
```

---

## Tecnologias utilizadas

* Ionic Framework
* Angular (Standalone Components)
* Capacitor
* TypeScript
* HTML5 + SCSS

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repo>
cd be220-teste/front
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar no navegador

```bash
ionic serve
```

---

## Rodar no Android (opcional)

```bash
ionic capacitor add android
ionic capacitor run android
```

---

## Estrutura do projeto

```
src/
  app/
    pages/
      home/
    shared/
      components/
        card/
        content-card/
        section/
```

---

## Objetivo

Reproduzir fielmente o layout proposto, mantendo código limpo, reutilizável e bem estruturado.

---

## Observações

* Projeto desenvolvido com foco em componentização e reutilização
* Uso de tipagem forte com TypeScript
* Separação de responsabilidades entre componentes
* Estrutura preparada para evolução e escalabilidade

## Tempo de desenvolvimento

Estimativa de tempo dedicada ao desenvolvimento:

- Setup do projeto: ~30min
- Analise da estrutura do projeto e da proposta da tela: ~1h
- Estruturação e componentização: ~2h
- Desenvolvimento da interface: ~3h
- Ajustes e refinamentos: ~2h

**Total aproximado:** ~8h30

---

## Autor

Desenvolvido por **Marcos Tonial**

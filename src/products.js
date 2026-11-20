// Centralizar os produtos em um arquivo facilita alterar o cardápio sem mexer na interface.
export const produtos = [
  {
    id: 1,
    nome: "Trap Bacon",
    categoria: "Burgers",
    preco: 34.90,
    selo: "MAIS VENDIDO",
    descricao: "Smash duplo 180g, cheddar, tiras de bacon crocante e molho da casa no brioche.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmgilkUV95SUeRlxXXMnEHzfsoPlTdB34TIoPVcwSnxhfTzIq9eaButZX8G9S_BLl-qHk9KNojc4Z6EoHLh6-RLNsL-dBrO83WJhjE41h4krT-Sefx2dt7-uoQRAUSs4yaknec53kxzZuVQktZDxq2NNeIoOdAy-tZW9KbPqDa0Bj82Sa66Y8K5hOYEL7TxvywlTVA4LurBqBkXIMMo5prNb8NcRCs0nBGPtLQEpw"
  },
  {
    id: 2,
    nome: "Street King",
    categoria: "Burgers",
    preco: 38.00,
    selo: "CLÁSSICO URBANO",
    descricao: "Duplo blend especial, cheddar, cebola caramelizada e molho barbecue rústico.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuADO6xlZUNp14dUZFVVsktiy6IiK-gNxCb2GNf6Xwca7cQsVy1Nj_jEq3qt3r5vVp02qlbzQimy_l3ttPTX2hYU632LeybYajQyAkNKFEyQfuPMrsUowHy6ohkA5H8Cvy_J-YwIBWyvxeyRRJHHO6tqAJAlYoinJhX7ESCsKWSHrzo8WxoL5UyqpaJE8KXBHtI1y1B-TbvxTZRBL3Ypzb1zL4RSZ4Pu3PJI-kalN0o"
  },
  {
    id: 3,
    nome: "JJ Boombox Combo",
    categoria: "Combos",
    preco: 69.90,
    selo: "COMBO GALERA",
    descricao: "2 burgers da linha Smash Street, fritas rústicas e duas bebidas para compartilhar.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJM045DT-8S8heZy2810Itg5I_DX_DpJC2vrVg04NjfsIJexRRJhMyBslydP7viHtQqhCwqBUJhR9XU2cLzf8jpD2-boHQNaYaDd0pLV4lm5rY70btJHHzqfiUekTfJ55SQ32isQpHjtuUYIdumd6wE7M18rs53f2bB8Bp2M3QU3P3OmgdnZw4FwqNVKecj4f6O739TMw7nEgPUaVTytZwxRn2UVoIaD4FGnLLNbM"
  },
  {
    id: 4,
    nome: "Porção de Fritas",
    categoria: "Acompanhamentos",
    preco: 25.00,
    selo: "CROCANTE",
    descricao: "Batatas crocantes com páprica defumada e toque especial da casa.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI_yZK4ZK645FzsA-7-VQjD4L-qcT2BqKwQTFEV1b76CbFwwfGXRZOiPWmX2X3wzA4xpVL0zLegnP1Fpdnf7iv-gyXyMH11-zGHoWX-v9jLmPkfNYgVqpt_X08Ez5WScvmDJC6THQOIdqHAeTm8V0CTQ6lzkhsb4Y-SeRjppR_vlzIi1LwhorZ3bKMACYutwJjSF0K00bReud6pxYGeciA5dpHECsQx2He6RBbJEw"
  },
  {
    id: 5,
    nome: "Fruki Guaraná",
    categoria: "Bebidas",
    preco: 6.00,
    selo: "GELADA",
    descricao: "Lata 350 ml, geladinha para acompanhar seu burger.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCeqQK8KAce8D7bSgpqnWjx7T6XW4KXoKmrYgLK1yj-w5GfQXyF24Wom66zYTPAeD9_SI2q1wShQnSuk3mknIxyqyn26_SJBUB4035n36DS9ONrAlFnmWPVi5UJ13qYSQ0PfZ2bgJ_SHeUFPSocjRd0MxCnsGSLSR4d346rFD-a_ZjNkfAGLUMrTlOkqnenLqsOO7VkH-tlZhsp2Kbi8b7hGBlwp64a8U1yny2k80"
  },
  {
    id: 6,
    nome: "Smash Clássico",
    categoria: "Burgers",
    preco: 29.90,
    selo: "RAIZ",
    descricao: "Pão brioche, smash bovino, queijo derretido, picles e molho especial.",
    imagem: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNy5gRp-JcTey7NG6Y3_3FQM1tnQh2kyo4TAbPl-fksxaS9k6bMWE26qwH6fL8sDKycCx3CUS5qvAevB9Jet19mxzE8mTwrHSVRTUs2Nqnrr3WzSToxzSgbO3mPsABRUuE6QCHsN_72kAUsc9Yfc2sSpTYG3T8-sj_ZudvDQAoT2j3sK800-a8apNG3tqhyIH9OHilvEXqxluOguEuv34vuR6Qu1TX-D8OXspYKJA"
  }
];

// Opções extras usadas no modal de personalização do hambúrguer.
export const adicionais = [
  { id: "bacon", nome: "Bacon crocante", preco: 5 },
  { id: "cheddar", nome: "Cheddar extra", preco: 4.5 },
  { id: "cebola", nome: "Cebola caramelizada", preco: 4 },
  { id: "picles", nome: "Picles artesanais", preco: 3 }
];
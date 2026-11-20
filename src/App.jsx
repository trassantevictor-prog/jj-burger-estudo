import React, { useMemo, useState } from "react"; // useState guarda dados que mudam; useMemo calcula valores derivados.
import { adicionais, produtos } from "./products.js"; // Importa os dados do cardápio separados da interface.

// Converte números em valores monetários no padrão brasileiro.
const moeda = (valor) => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Componente de navegação: recebe a quantidade e o evento do botão da sacola via props.
function Header({ quantidade, abrirSacola }) {
  return (
    <header className="topbar">
      <a className="marca" href="#inicio" aria-label="JJ Burger - início">
        <span className="marca-icone">♛</span>
        <span><strong>JJ BURGER</strong><small>RESTINGA • POA</small></span>
      </a>
      <span className="status"><i /> ABERTO AGORA</span>
      <nav className="nav-links" aria-label="Navegação principal">
        <a href="#inicio">Home</a><a href="#cardapio">Cardápio</a><a href="#sobre">Sobre nós</a><a href="#contato">Contato</a>
      </nav>
      <button className="sacola-topo" onClick={abrirSacola} aria-label={`Abrir sacola com ${quantidade} itens`}>
        <span>♧</span><b>{quantidade}</b>
      </button>
    </header>
  );
}

// Apresentação principal: a prop onVerCardapio permite navegar até os produtos.
function Hero({ onVerCardapio }) {
  return (
    <section className="hero" id="inicio">
      <div className="faixa-amarela" />
      <div className="hero-conteudo">
        <div className="hero-texto">
          <div className="etiquetas"><span>📍 RESTINGA • ZONA SUL POA</span><span className="vermelha">🔥 FOGO & CHAPA BRUTA</span></div>
          <p className="eyebrow">♛ STREET RAW GRILL</p>
          <h1>O SABOR DA RUA<br /><em>NA SUA CASA!</em></h1>
          <p className="hero-descricao">Smash burgers artesanais na chapa ultr quente, queijos derretidos no capricho e molhos especiais com a atitude e o pulsar autêntico da Tinga.</p>
          <div className="prova-social"><span>★★★★★</span><b>4.9 na Zona Sul</b><small>• +5.000 burgers entregues</small></div>
          <div className="hero-acoes">
            <button className="botao botao-amarelo" onClick={onVerCardapio}>VER CARDÁPIO COMPLETO　→</button>
            <a className="botao botao-verde" href="https://wa.me/5551999999999" target="_blank" rel="noreferrer">▣ PEDIR WHATSAPP</a>
          </div>
          <p className="aviso-aberto">● Chapa estalando • Tempo médio de entrega: 35–45 min</p>
        </div>
        <div className="hero-foto">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXOmiSFoELeEpl-j5AkoFjPulBdcUTYtuu0X-8KhSciMviBgRiyXC793mhPdjFgqdS0RTwgr68iphP48mfr4Q1gWAxGmIel75ORgMVfGFIynrZ4bnxpjrHBtUtgZXgPcEMc3tRLpS23evDtXEbDJa2xlqP0P-e3VXjqd6w0CMC69yTBH0NqdVlLWBk3isw2-X1dEDoJB5GQm-IbJS_9XJ7Njod_a1r0K2mEMdl0J4" alt="Hambúrguer artesanal com queijo derretido" />
          <span className="selo-foto">100% ARTESANAL</span><span className="legenda-foto">BLEND SECRETO<br /><small>Carne fresca • Sem frescura</small></span>
        </div>
      </div>
    </section>
  );
}

// Cartão reutilizável: cada produto chega por props, evitando duplicar o mesmo HTML.
function ProductCard({ produto, adicionar }) {
  return (
    <article className="produto-card">
      <div className="produto-imagem"><img src={produto.imagem} alt={produto.nome} loading="lazy" /><span>{produto.selo}</span></div>
      <div className="produto-info">
        <div className="produto-titulo"><h3>{produto.nome}</h3><strong>{moeda(produto.preco)}</strong></div>
        <p>{produto.descricao}</p>
        <button className="botao-adicionar" onClick={() => adicionar(produto)}>＋ ADICIONAR AO PEDIDO</button>
      </div>
    </article>
  );
}

// Janela simples de personalização. O estado local controla pão, ponto e adicionais.
function ModalProduto({ produto, fechar, confirmar }) {
  const [pao, setPao] = useState("Brioche artesanal");
  const [ponto, setPonto] = useState("Ao ponto da casa");
  const [extras, setExtras] = useState([]);

  // Soma os preços dos extras selecionados; useMemo evita refazer a conta sem necessidade.
  const totalExtras = useMemo(() => adicionais.filter((item) => extras.includes(item.id)).reduce((soma, item) => soma + item.preco, 0), [extras]);
  // Atualiza a lista sem mutar o array anterior, seguindo o padrão imutável do React.
  function alternarExtra(id) {
    setExtras((atuais) => atuais.includes(id) ? atuais.filter((item) => item !== id) : [...atuais, id]);
  }

  if (!produto) return null; // Renderização condicional: sem produto selecionado, não exibe a janela.

  return (
    <div className="overlay" role="presentation" onMouseDown={(evento) => evento.target === evento.currentTarget && fechar()}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        <button className="fechar" onClick={fechar} aria-label="Fechar">×</button>
        <img className="modal-foto" src={produto.imagem} alt={produto.nome} />
        <div className="modal-corpo">
          <span className="tag">PERSONALIZE SEU BURGER</span><h2 id="modal-titulo">{produto.nome}</h2>
          <p>{produto.descricao}</p>
          <h3>1. ESCOLHA SEU PÃO</h3>
          {["Brioche artesanal", "Pão australiano"].map((opcao) => <label className="opcao" key={opcao}><input type="radio" name="pao" checked={pao === opcao} onChange={() => setPao(opcao)} />{opcao}</label>)}
          <h3>2. PONTO DA CARNE</h3>
          {["Mal passado", "Ao ponto da casa", "Bem passado"].map((opcao) => <label className="opcao" key={opcao}><input type="radio" name="ponto" checked={ponto === opcao} onChange={() => setPonto(opcao)} />{opcao}</label>)}
          <h3>3. TURBINE SEU LANCHE</h3>
          <div className="extras">{adicionais.map((extra) => <label className="extra" key={extra.id}><input type="checkbox" checked={extras.includes(extra.id)} onChange={() => alternarExtra(extra.id)} /><span>{extra.nome}<b>+ {moeda(extra.preco)}</b></span></label>)}</div>
          <button className="botao botao-amarelo largura-total" onClick={() => confirmar({ ...produto, preco: produto.preco + totalExtras, pao, ponto, extras: adicionais.filter((item) => extras.includes(item.id)).map((item) => item.nome) })}>ADICIONAR À SACOLA • {moeda(produto.preco + totalExtras)}</button>
        </div>
      </section>
    </div>
  );
}

// Sacola lateral: recebe itens, funções para alterar quantidade e abrir a finalização.
function Sacola({ aberta, fechar, itens, alterarQuantidade, finalizar }) {
  const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  if (!aberta) return null; // A sacola só aparece quando a variável aberta for verdadeira.

  return (
    <div className="overlay overlay-direita" onMouseDown={(evento) => evento.target === evento.currentTarget && fechar()}>
      <aside className="sacola-painel" aria-label="Sua sacola">
        <div className="sacola-cabecalho"><div><span className="tag">SACOLA JJ</span><h2>SEU PEDIDO</h2></div><button className="fechar" onClick={fechar}>×</button></div>
        {itens.length === 0 ? <p className="vazio">Sua sacola está vazia. Bora escolher um burger?</p> : itens.map((item) => (
          <div className="linha-sacola" key={item.chave}>
            <img src={item.imagem} alt="" /><div className="linha-detalhe"><b>{item.nome}</b><small>{item.pao} • {item.ponto}</small><strong>{moeda(item.preco * item.quantidade)}</strong><div className="contador"><button onClick={() => alterarQuantidade(item.chave, -1)} aria-label="Diminuir quantidade">−</button><span>{item.quantidade}</span><button onClick={() => alterarQuantidade(item.chave, 1)} aria-label="Aumentar quantidade">＋</button></div></div>
          </div>
        ))}
        <div className="sacola-total"><span>Subtotal</span><strong>{moeda(total)}</strong></div>
        <button className="botao botao-amarelo largura-total" disabled={!itens.length} onClick={finalizar}>CONTINUAR PARA ENTREGA →</button>
      </aside>
    </div>
  );
}

// Checkout controlado: React guarda os campos no estado e monta a mensagem do pedido.
function Checkout({ itens, fechar, voltar }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [recebimento, setRecebimento] = useState("Delivery");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("Pix");
  const [observacao, setObservacao] = useState("");
  const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  function enviarPedido(evento) {
    evento.preventDefault(); // Evita que o navegador recarregue a página ao enviar o formulário.
    const lista = itens.map((item) => `${item.quantidade}x ${item.nome} (${moeda(item.preco)})`).join("%0A");
    const mensagem = `Olá, JJ Burger! Quero fazer um pedido:%0A${lista}%0A%0ATotal: ${moeda(total)}%0ACliente: ${nome}%0AWhatsApp: ${telefone}%0ARecebimento: ${recebimento}%0AEndereço: ${endereco || "Retirada/no local"}%0APagamento: ${pagamento}%0AObservações: ${observacao}`;
    // Abre o WhatsApp com os dados preenchidos; substitua o telefone pelo número comercial correto.
    window.open(`https://wa.me/5551999999999?text=${mensagem}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="checkout-overlay">
      <form className="checkout" onSubmit={enviarPedido}>
        <div className="checkout-topo"><button type="button" className="link-voltar" onClick={voltar}>← VOLTAR À SACOLA</button><button type="button" className="fechar" onClick={fechar}>×</button></div>
        <span className="tag">ÚLTIMA ETAPA</span><h2>FINALIZAR SEU PEDIDO</h2><p>Preencha seus dados para enviar o pedido pelo WhatsApp.</p>
        <label>Nome completo *<input required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" /></label>
        <label>WhatsApp com DDD *<input required value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(51) 99999-9999" /></label>
        <fieldset><legend>Forma de recebimento</legend>{["Delivery", "Balcão", "No local"].map((tipo) => <label className="opcao" key={tipo}><input type="radio" name="recebimento" checked={recebimento === tipo} onChange={() => setRecebimento(tipo)} />{tipo}</label>)}</fieldset>
        {recebimento === "Delivery" && <label>Rua, número e bairro *<input required value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Seu endereço completo" /></label>}
        <fieldset><legend>Forma de pagamento</legend>{["Pix", "Cartão", "Dinheiro"].map((tipo) => <label className="opcao" key={tipo}><input type="radio" name="pagamento" checked={pagamento === tipo} onChange={() => setPagamento(tipo)} />{tipo}</label>)}</fieldset>
        <label>Observações<textarea value={observacao} onChange={(e) => setObservacao(e.target.value)} placeholder="Ex.: sem picles, ponto da carne..." rows="3" /></label>
        <div className="checkout-total"><span>Total estimado</span><strong>{moeda(total)}</strong></div>
        <button className="botao botao-verde largura-total" type="submit">ENVIAR PEDIDO PELO WHATSAPP</button>
        <small className="nota-checkout">A taxa de entrega será combinada pelo WhatsApp.</small>
      </form>
    </div>
  );
}

// Rodapé com informações institucionais e links para as seções da página.
function Footer() {
  return (
    <footer id="contato">
      <div className="faixa-amarela" />
      <div className="footer-grid">
        <div><a className="marca" href="#inicio"><span className="marca-icone">♛</span><strong>JJ BURGER</strong></a><p>Smash burgers e grelhados artesanais com a força da cultura de rua da Restinga.</p><small>● ATENDIMENTO LOCAL & TAKEOUT</small></div>
        <div><h3>NAVEGAÇÃO</h3><a href="#inicio">Home</a><a href="#cardapio">Cardápio completo</a><a href="#sobre">História & cultura</a></div>
        <div><h3>PONTO DE RETIRADA</h3><p>Restinga Velha<br />Porto Alegre - RS</p><small>Terça a domingo • 18h30 às 23h30</small></div>
        <div><h3>CONECTE-SE</h3><p>Acompanhe lançamentos e especiais de chapa.</p><a href="https://wa.me/5551999999999" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      </div>
      <div className="copyright">© 2026 JJ Burger Artesanal. Feito na chapa • Orgulho da Zona Sul.</div>
    </footer>
  );
}

// Componente principal: coordena estados compartilhados e compõe os componentes menores.
export default function App() {
  const [categoria, setCategoria] = useState("Todos"); // Estado da categoria ativa no filtro.
  const [produtoSelecionado, setProdutoSelecionado] = useState(null); // Guarda qual produto está sendo personalizado.
  const [itens, setItens] = useState([]); // A sacola é um array de produtos e quantidades.
  const [sacolaAberta, setSacolaAberta] = useState(false); // Controla a abertura da sacola lateral.
  const [checkoutAberto, setCheckoutAberto] = useState(false); // Controla a etapa de finalização.

  // Deriva a lista visível do estado categoria, sem alterar a lista original de produtos.
  const produtosVisiveis = categoria === "Todos" ? produtos : produtos.filter((item) => item.categoria === categoria);
  // Soma quantidades para mostrar o número de itens no ícone da sacola.
  const quantidade = itens.reduce((soma, item) => soma + item.quantidade, 0);

  function adicionarItem(produto) {
    // Cada personalização recebe chave própria para distinguir variações do mesmo lanche.
    const chave = `${produto.id}-${produto.pao || "padrao"}-${produto.ponto || "padrao"}-${(produto.extras || []).join("-")}`;
    setItens((atuais) => {
      const existente = atuais.find((item) => item.chave === chave);
      // Se já existe a mesma configuração, aumenta a quantidade; caso contrário, cria uma linha.
      if (existente) return atuais.map((item) => item.chave === chave ? { ...item, quantidade: item.quantidade + 1 } : item);
      return [...atuais, { ...produto, chave, quantidade: 1 }];
    });
    setProdutoSelecionado(null); // Fecha o modal depois de adicionar.
    setSacolaAberta(true); // Abre a sacola para dar retorno visual ao usuário.
  }

  function alterarQuantidade(chave, diferenca) {
    // filter remove linhas que chegaram a zero; map atualiza apenas a linha escolhida.
    setItens((atuais) => atuais.map((item) => item.chave === chave ? { ...item, quantidade: item.quantidade + diferenca } : item).filter((item) => item.quantidade > 0));
  }

  function abrirProduto(produto) {
    // Produtos de acompanhamento e bebida podem ir direto para a sacola; burgers abrem personalização.
    if (produto.categoria === "Burgers") setProdutoSelecionado(produto);
    else adicionarItem({ ...produto, pao: "—", ponto: "—", extras: [] });
  }

  return (
    <>
      <Header quantidade={quantidade} abrirSacola={() => setSacolaAberta(true)} />
      <main>
        <Hero onVerCardapio={() => document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" })} />
        <section className="horarios">
          <div><b>◷ ABERTO AGORA</b><span>TERÇA A DOMINGO</span><small>Restinga Velha • Porto Alegre</small></div>
          <div><b>TURNO DO DIA</b><span>11h00 às 15h00</span><small>Delivery exclusivo</small></div>
          <div><b>TURNO DA NOITE</b><span>18h00 à meia-noite</span><small>Chapa quente • salão e entrega</small></div>
        </section>
        <section className="cardapio secao" id="cardapio">
          <div className="secao-titulo"><div><span className="eyebrow">■ DIRETO DA GRELHA</span><h2>OS FAVORITOS DA CHAPA</h2></div><span className="ver-cardapio">ESCOLHA SEU PEDIDO ↘</span></div>
          <div className="filtros" aria-label="Filtrar cardápio">
            {["Todos", "Burgers", "Combos", "Acompanhamentos", "Bebidas"].map((item) => <button key={item} className={categoria === item ? "filtro ativo" : "filtro"} onClick={() => setCategoria(item)}>{item}</button>)}
          </div>
          <div className="produtos-grid">
            {produtosVisiveis.map((produto) => <ProductCard key={produto.id} produto={produto} adicionar={abrirProduto} />)}
          </div>
        </section>
        <section className="sobre secao" id="sobre">
          <div className="sobre-foto"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdgvQoFI7myPVUhi_uYXCxX60LMBz1usb1Y07d4cNmn2V2C75Wg1XYnS5s9eyDfoSEBtccsZkwumPsj27j2ZgLPHqww-M1l5zz-MXTR5WNiNEU4cWTbaI4lSQPtVVsgsUC2puurPJT-TFAgVyvjMTMQOO7zlZ2Vjdc7Xxl81SEKV_Y1u2xcpTKu0M35IahIozPCM9pFU2IX4_hj7uytEGEq-mcfE6EcRldYHUa6cI" alt="Ambiente de hamburgueria e chapa acesa" /></div>
          <div><span className="eyebrow">♛ COMUNIDADE & RAIZ</span><h2>VEM PRA NOSSA CASA.<br /><em>COLA COM A GENTE!</em></h2><blockquote>“SONHO, TRABALHO, RESULTADO. RESPEITO É TUDO!”</blockquote><p>A JJ Burger nasceu nas esquinas da Zona Sul com um objetivo: entregar o hambúrguer mais suculento, forte e honesto que você já experimentou. Sem cerimônia, sem firula, com muito queijo e tempero de rua.</p><div className="sobre-tags"><span>⚡ TELE RÁPIDA</span><span>♫ SOM PESADO</span></div><a className="botao botao-verde" href="https://wa.me/5551999999999" target="_blank" rel="noreferrer">FALAR COM O BALCÃO</a></div>
        </section>
      </main>
      <Footer />
      <button className="sacola-flutuante" onClick={() => setSacolaAberta(true)}>♧ SACOLA ({quantidade}) • {moeda(itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0))}</button>
      <ModalProduto produto={produtoSelecionado} fechar={() => setProdutoSelecionado(null)} confirmar={adicionarItem} />
      <Sacola aberta={sacolaAberta} fechar={() => setSacolaAberta(false)} itens={itens} alterarQuantidade={alterarQuantidade} finalizar={() => { setSacolaAberta(false); setCheckoutAberto(true); }} />
      {checkoutAberto && <Checkout itens={itens} fechar={() => setCheckoutAberto(false)} voltar={() => { setCheckoutAberto(false); setSacolaAberta(true); }} />}
    </>
  );
}
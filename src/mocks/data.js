import ContactButton from "components/ContactButton/ContactButton";
import uuid from "react-uuid";
import { add_homepage_images } from "utils/global-utils";

const social_media = [
  { label: "facebook", ref: "https://www.facebook.com/andrerodrigoweb" },
  {
    label: "instagram",
    ref: "https://www.instagram.com/andre.creativedesign/"
  },
  {
    label: "linkedin",
    ref: "https://www.linkedin.com/in/andr%C3%A9-rodrigues-4b4a9b188/"
  }
];

const blog = {
  //Categories are displayed by this order
  categories: [
    { display_name: "Recent posts", name: "recent" },
    { display_name: "Lifestyle", name: "lifestyle" },
    { display_name: "Career & Mentoring", name: "career" },
    { display_name: "All", name: "all" }
  ],
  articles: [
    {
      id: "917e4fba-199c-11ed-861d-0242ac120002",
      title: "6 motivos para criar um website",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      category: "lifestyle",
      date: "12, June 2022",
      tags: {
        description: "Lorem is really cool",
        keywords: ["lorem", "something"]
      },
      content: (
        <div>
          <h2 className="section-title">A importância da Internet</h2>
          <p>
            Nos últimos anos, a Internet cresceu a um ritmo exponencial.
            Atualmente dispomos de um mundo digital que nos permite ter um
            acesso praticamente instantâneo a bens, serviços e informações.
            Desde procurar restaurantes nas redondezas, até procedimentos mais
            básicos como o preenchimento do IRS, são tudo processos feitos
            online. Atualmente o nosso quotidiano está intimamente ligado à
            Internet, tanto ao nível da comunicação como de comércio. Esta
            revolução levou a que inúmeras empresas e empreendedores vissem uma
            oportunidade de promoção dos seus negócios sem limitarem os seus
            clientes a uma localização geográfica, nem a horários de
            funcionamento, trazendo uma vantagem competitiva comparativamente
            aos que não disponham da mesma visibilidade. Atualmente, a presença
            digital de qualquer negócio é determinante para o seu crescimento,
            portanto a pergunta é: porque é que o teu negócio ainda não tem
            website? Se ainda não estás convencido(a), vou apresentar-te agora
            as vantagens.
          </p>
          <ol>
            <li className="section-title">Aumentar a visibilidade</li>
            <p>
              O único caso em que aumentar a visibilidade não é bom para o
              negócio, é se tiveres assaltado um banco e agora és fugitivo. De
              resto, são apenas vantagens, entre elas: atrair mais clientes,
              aumentar as vendas e expandir a empresa. Só para teres uma ideia,
              um website simples sem grande promoção, consegue alcançar 300
              novos utilizadores num mês. Agora imagina que desses 300, 25%
              aderem ao teu negócio (estou a ser pessimista). Só através do
              website, ganhaste 75 novos clientes num mês, praticamente a custo
              zero comparativamente às formas de promoção tradicionais. Ao
              contrário de um estabelecimento físico, um website permite um
              alcance mundial sem restrições de horário ou zona demográfica. É
              uma janela para o mundo aberta 24 horas por dia.
            </p>
            <li className="section-title">Aumento das vendas</li>
            <p>
              A exposição do teu negócio é fundamental para atrair clientes e se
              aliares a uma boa estratégia de marketing e promoção, podes
              aumentar substancialmente o fluxo de faturação. A tua empresa não
              precisa de se limitar ao mercado local. Tens o exemplo da Zara e
              outras tantas lojas virtuais que têm também lojas físicas e que
              vendem para todo o mundo. Claro que entrar no mercado
              internacional requer estratégia e planeamento, mas tens outros
              exemplos como artistas com projeção internacional onde o seu
              website permite divulgar o seu talento e atrair companhias por
              todo o mundo.
            </p>
            <li className="section-title">Mais informação disponível</li>
            <p>
              Imagina que o teu produto alcançou uma pessoa através das redes
              sociais. Esta, ficou interessada e gostaria de saber mais para
              tomar uma decisão de compra. Começa por procurar pelo teu nome ou
              pelo nome da empresa, mas além das redes sociais, não encontra
              mais informações. Desiste. Mais tarde, encontra um produto online
              semelhante ao teu, mas da concorrência, que além de redes sociais
              têm também um website. Ao visitá-lo, encontrou mais detalhes sobre
              o produto e decide comprá-lo. Isto pode soar a uma encenação
              dramática, mas é bem próxima da realidade: 90% das decisões de
              compra online são tomadas com recurso à experiência no website. E
              basta pensares: no teu caso, aderias a um serviço de uma empresa
              com website, onde podes encontrar maior detalhe nas descrições, ou
              numa página de Facebook ou Instagram?{" "}
            </p>
            <img
              className="image-horizontal"
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Cria um website e aumenta a visibilidade do teu negócio"
            />
            <li className="section-title">Ir além das redes sociais</li>
            <p>
              Perguntam-me várias vezes: “Faz sentido criar um website, quando
              já tenho página de Instagram e/ou Facebook?”. A resposta é: “Sim.
              Faz.”. As redes sociais são como uma vitrine do teu negócio,
              permitem uma forma conveniente e rápida de apresentar o teu
              produto ou serviço, mas como sabemos, assim que um cliente fica
              interessado, a primeira coisa que faz é entrar na loja para obter
              mais informações sobre a marca e conhecer os detalhes. Na internet
              o processo é igual, as redes sociais e o website complementam-se:
              um permite mostrar o produto, o outro apresenta-o em detalhe
              dentro do contexto da marca.
            </p>
            <li className="section-title">
              Analisar o histórico de visitantes
            </li>
            <p>
              A internet permite fazer uma coisa incrível e quase impossível de
              recriar numa loja física: a recolha completa de dados dos
              visitantes. Isto é muito simples de fazer e muito mais barato do
              que numa loja física. Teres acesso ao histórico do número de
              pessoas, idades, género, dispositivos utilizados, zona geográfica,
              como interagiram com a tua página, entre outros, são informações
              bastante valiosas para o planeamento e promoção do teu negócio.
              Consegues definir o teu público-alvo, redirecionar a publicidade e
              até construir campanhas online!
            </p>
            <li className="section-title">Publicidade e divulgação</li>
            <p>
              Para promoveres o teu negócio no marketing tradicional, terias de
              pagar centenas ou milhares de euros. As opções passam pela rádio,
              TV, folhetos, panfletos, cartazes, entre outros, sendo que o
              sucesso depende diretamente da zona geográfica e da rotina do
              consumidor. No mundo virtual o céu é o limite. O conteúdo que é
              partilhado na Internet pode expandir qualquer produto ou serviço
              por diversas cidades, países, ou continentes, independente do fuso
              horário, disponível 24 horas por dia. Com um website, consegues
              fazer promoção através de campanhas online e alcançar milhares de
              pessoas de forma mais eficaz e por um preço bem mais acessível.
            </p>
          </ol>
          <img
            className="image-horizontal"
            src="https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Cria um website e aumenta a visibilidade do teu negócio"
          />
          <h2 className="section-title">Como criar um website?</h2>
          <p>
            Nem sempre dispomos do tempo ou conhecimentos para criar um website
            apelativo e funcional. Quais são as melhores cores? Qual a melhor
            estrutura e layout para o meu negócio? Como é que adiciono e analiso
            métricas? As respostas a estas e outras perguntas exigem tempo de
            estudo e alguma experiência, que muitas vezes não é possível dedicar
            devido à sobreposição de prioridades, como a gestão da empresa.
            Neste caso, <b>procurar ajuda</b> é a melhor solução. <br /> Há 4
            anos que ajudo empreendedores a aumentarem a visibilidade dos seus
            negócios, desde a criação do design, até à implementação e
            lançamento dos seus projetos no mundo digital. <br />
            Numa primeira conversa, posso{" "}
            <b>ajudar-te a delinear uma estratégia adaptada ao teu negócio</b>,
            sem compromisso.
          </p>
          <ContactButton />
          <h2 className="section-title">Pontos-chave</h2>
          <p>
            Resumindo, qualquer entidade independente ou coleciva deve criar um
            website para o seu negócio, a fim de atrair novos clientes, aumentar
            a visibilidade e rentabilizar os seus produtos. <br />
          </p>

          <p> Aqui tens o resumo do artigo:</p>
          <ul className="list-key-points">
            <li>
              Teres um website torna o teu negócio visível 24 horas por dia
            </li>
            <li>O aumento da visibilidade aumenta as vendas</li>
            <li>
              As redes sociais são um complemento do website, não um substituto
            </li>
            <li>
              Medir e analisar as métricas dos visitantes permite definir o
              público-alvo e muito mais
            </li>
            <li>
              Consegues promover o teu negócio de forma mais eficaz e por um
              preço bem mais acessível{" "}
            </li>
          </ul>
        </div>
      ),
      image_src:
        "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      writer: "Andre Rodrigues"
    },
    {
      id: "c5d2a482-199c-11ed-861d-0242ac120002",
      title: "Non-standard Flutter custom bottom navigation bar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

      category: "lifestyle",
      date: "12, June 2022",
      content: <div>Hello</div>,
      image_src:
        "https://images.unsplash.com/photo-1618221227897-57302c9460b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      writer: "Andre Rodrigues"
    }
  ]
};

const translator = {
  language: "pt",
  components: {
    homepage: {
      heading: {
        pt: [""],
        en: [""]
      },
      subtitle: {
        pt: [""],
        en: [""]
      },
      action_button: {
        pt: [""],
        en: [""]
      }
    },
    about: {
      heading: {
        pt: ["André Rodrigo é um programador criativo residente em Portugal."],
        en: ["André Rodrigo is a creative web developer from Portugal"]
      },
      introduction: {
        pt: [
          "Desde que tornei a minha paixão numa carreira, estou continuamente a desenvolver e a entregar projetos há cerca de 4 anos. A minha atenção aos detalhes, visão criativa do mundo e natureza meticulosa são os principais contributos da minha identidade para o desenvolvimento e criação de soluções personalizadas ao projeto. Ao longo da minha carreira, desenvolvi soluções para diversos sectores, desde pequenos negócios a trabalhadores independentes dedico-me "
        ],
        en: [
          " Since turning my passion into a career, I've been continuously creating and delivering projects for almost 4 years. My eye for detail, creative view of the world, and meticulous nature help me make a difference and deliver unique and personalized solutions. I've created and delivered solutions for various types of projects, from small businesses to independent workers, I'm here to help you bring your website vision to life so you can free up your time to do what you do best - running your awesome business, of course!",
          "When I'm not busy making website dreams come true, you can find me relaxing at home in Lisbon, with my partner or unique friends, laughing with silly jokes, taking a walk, making something fun, or eating an amazing croissant accompained by jazz oldies."
        ]
      },

      education_title: {
        pt: ["Formação"],
        en: ["Education"]
      },
      courses: {
        pt: [
          "Front-End Libraries Certification",
          "Back-End Development and APIs Certification",
          "Algorithms and Data Structures Certification",
          "Responsive Web Design Certification",
          "Design Thinking Certification",
          "UX/UI Fundamentals Certification"
        ]
      }
    },
    testimonials: {
      heading: {
        pt: ["Testemunhos que nos enchem o coração"],
        en: ["Sweet testimonials from warming people"]
      },
      question: {
        pt: ["Gostaria de ver o seu feedback aqui?", "Vamos conversar"],
        en: ["Would you like to be next?", "Let's talk!"]
      }
    },
    work_category_page: {
      heading: {
        pt: [""],
        en: [""]
      },
      description: {
        pt: [""],
        en: [""]
      }
    }
  },

  gettext(component, content) {
    return translator.components[component][content][translator.language];
  }
};

export { social_media, blog, translator };

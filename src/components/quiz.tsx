"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type Question = {
  question: string
  options: string[]
  correctAnswer: number
  category: string
}

const QUESTION_BANK: Question[] = [
  // Novelas dos anos 50-70
  {
    question: "Qual foi a primeira novela brasileira transmitida pela TV?",
    options: ["Sua Vida Me Pertence", "O Direito de Nascer", "2-5499 Ocupado", "Redenção"],
    correctAnswer: 0,
    category: "Novelas",
  },
  {
    question: "Quem foi a protagonista de 'Irmãos Coragem' (1970)?",
    options: ["Glória Menezes", "Tarcísio Meira", "Cláudio Marzo", "Reginaldo Faria"],
    correctAnswer: 1,
    category: "Novelas",
  },
  {
    question: "Em que ano estreou a novela 'Beto Rockfeller'?",
    options: ["1965", "1968", "1970", "1972"],
    correctAnswer: 1,
    category: "Novelas",
  },
  {
    question: "Qual novela marcou a estreia de Glória Pires na TV?",
    options: ["Dancin' Days", "Pecado Capital", "Selva de Pedra", "Cavalo de Aço"],
    correctAnswer: 0,
    category: "Novelas",
  },
  {
    question: "Quem escreveu a novela 'O Direito de Nascer'?",
    options: ["Janete Clair", "Dias Gomes", "Félix Caignet", "Ivani Ribeiro"],
    correctAnswer: 2,
    category: "Novelas",
  },

  // Culinária dos anos 50-70
  {
    question: "Qual sobremesa era servida em praticamente todas as festas nos anos 60?",
    options: ["Pudim de leite", "Pavê", "Mousse de chocolate", "Gelatina colorida"],
    correctAnswer: 3,
    category: "Culinária",
  },
  {
    question: "Qual marca de margarina fez sucesso nos anos 70 com o slogan 'A Família Unida'?",
    options: ["Doriana", "Delícia", "Primor", "Qualy"],
    correctAnswer: 0,
    category: "Culinária",
  },
  {
    question: "O que era servido como entrada em jantares elegantes nos anos 60?",
    options: ["Canapés", "Coxinha", "Pastel", "Empada"],
    correctAnswer: 0,
    category: "Culinária",
  },
  {
    question: "Qual refrigerante chegou ao Brasil em 1942 mas fez sucesso nos anos 50?",
    options: ["Fanta", "Sprite", "Coca-Cola", "Guaraná"],
    correctAnswer: 2,
    category: "Culinária",
  },
  {
    question: "Qual prato era considerado sofisticado nos anos 70?",
    options: ["Estrogonofe", "Feijoada", "Churrasco", "Macarronada"],
    correctAnswer: 0,
    category: "Culinária",
  },

  // Cultura dos anos 50-70
  {
    question: "Qual foi o primeiro programa de auditório da TV brasileira?",
    options: ["Programa Silvio Santos", "Chacrinha", "Almoço com as Estrelas", "Discoteca do Chacrinha"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Em que ano foi realizado o Festival de Woodstock?",
    options: ["1967", "1968", "1969", "1970"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual banda britânica invadiu os EUA em 1964?",
    options: ["The Rolling Stones", "The Beatles", "The Who", "Led Zeppelin"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Quem apresentava o programa 'Jovem Guarda' na TV Record?",
    options: ["Roberto Carlos", "Erasmo Carlos", "Wanderléa", "Todos os anteriores"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro homem a pisar na Lua em 1969?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
    correctAnswer: 1,
    category: "Cultura",
  },

  // Mais Novelas
  {
    question: "Qual atriz ficou famosa como a 'Viúva Porcina' em Roque Santeiro?",
    options: ["Regina Duarte", "Lima Duarte", "Beatriz Segall", "Dercy Gonçalves"],
    correctAnswer: 2,
    category: "Novelas",
  },
  {
    question: "Quem foi o autor da novela 'Irmãos Coragem'?",
    options: ["Dias Gomes", "Janete Clair", "Lauro César Muniz", "Ivani Ribeiro"],
    correctAnswer: 1,
    category: "Novelas",
  },
  {
    question: "Qual novela de 1975 abordou o tema da ditadura militar de forma simbólica?",
    options: ["O Espigão", "Roque Santeiro", "O Bem-Amado", "Saramandaia"],
    correctAnswer: 2,
    category: "Novelas",
  },
  {
    question: "Em 'Selva de Pedra' (1972), quem interpretou Cristiano Vilhena?",
    options: ["Francisco Cuoco", "Tarcísio Meira", "Paulo Goulart", "Cláudio Marzo"],
    correctAnswer: 0,
    category: "Novelas",
  },
  {
    question: "Qual foi a primeira novela em cores da TV Globo?",
    options: ["O Bem-Amado", "Irmãos Coragem", "Selva de Pedra", "Cavalo de Aço"],
    correctAnswer: 1,
    category: "Novelas",
  },

  // Mais Culinária
  {
    question: "Qual era o prato típico de domingo nas famílias brasileiras dos anos 60?",
    options: ["Feijoada", "Macarrão", "Frango assado", "Churrasco"],
    correctAnswer: 2,
    category: "Culinária",
  },
  {
    question: "Qual marca de achocolatado fez sucesso nos anos 60?",
    options: ["Toddy", "Nescau", "Ovomaltine", "Todas as anteriores"],
    correctAnswer: 3,
    category: "Culinária",
  },
  {
    question: "O que era servido em festas infantis nos anos 70?",
    options: ["Cachorro-quente", "Brigadeiro", "Beijinho", "Todas as anteriores"],
    correctAnswer: 3,
    category: "Culinária",
  },
  {
    question: "Qual era a bebida alcoólica mais consumida nos anos 50?",
    options: ["Cerveja", "Cachaça", "Vinho", "Whisky"],
    correctAnswer: 1,
    category: "Culinária",
  },
  {
    question: "Qual doce era vendido em carrinhos nas ruas nos anos 60?",
    options: ["Algodão doce", "Pipoca", "Amendoim", "Todas as anteriores"],
    correctAnswer: 3,
    category: "Culinária",
  },

  // Mais Cultura
  {
    question: "Qual foi o primeiro satélite artificial lançado ao espaço em 1957?",
    options: ["Apollo 11", "Sputnik", "Explorer 1", "Vostok 1"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Quem foi o presidente do Brasil durante a Copa de 1970?",
    options: ["Juscelino Kubitschek", "João Goulart", "Emílio Médici", "Castelo Branco"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei' nos anos 50?",
    options: ["Elvis Presley", "Frank Sinatra", "Chuck Berry", "Little Richard"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Em que ano foi inaugurada Brasília?",
    options: ["1956", "1958", "1960", "1962"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro Festival da Canção realizado pela TV Record?",
    options: ["1965", "1966", "1967", "1968"],
    correctAnswer: 1,
    category: "Cultura",
  },

  // Continuando com mais perguntas variadas...
  {
    question: "Qual atriz foi considerada o símbolo sexual dos anos 50?",
    options: ["Marilyn Monroe", "Brigitte Bardot", "Sophia Loren", "Elizabeth Taylor"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual programa infantil estreou na TV Tupi em 1952?",
    options: ["Sítio do Picapau Amarelo", "Circo do Arrelia", "TV de Vanguarda", "Clube do Guri"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Quem cantou 'Garota de Ipanema' em 1962?",
    options: ["Tom Jobim", "João Gilberto", "Vinicius de Moraes", "Todos os anteriores"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro shopping center do Brasil, inaugurado em 1966?",
    options: ["Shopping Iguatemi SP", "Shopping Ibirapuera", "Shopping Morumbi", "Shopping Paulista"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual time brasileiro ganhou a Copa do Mundo de 1958?",
    options: ["Flamengo", "Santos", "Seleção Brasileira", "Palmeiras"],
    correctAnswer: 2,
    category: "Cultura",
  },

  // Novelas - continuação
  {
    question: "Qual novela de Dias Gomes foi censurada pela ditadura?",
    options: ["O Bem-Amado", "Roque Santeiro", "Saramandaia", "O Espigão"],
    correctAnswer: 1,
    category: "Novelas",
  },
  {
    question: "Quem interpretou Helena em 'Selva de Pedra'?",
    options: ["Dina Sfat", "Regina Duarte", "Glória Menezes", "Fernanda Montenegro"],
    correctAnswer: 0,
    category: "Novelas",
  },
  {
    question: "Qual foi a primeira novela de Janete Clair?",
    options: ["Irmãos Coragem", "Véu de Noiva", "Anastácia, a Mulher sem Destino", "Sangue e Areia"],
    correctAnswer: 2,
    category: "Novelas",
  },
  {
    question: "Em que ano estreou 'Dancin' Days'?",
    options: ["1976", "1977", "1978", "1979"],
    correctAnswer: 2,
    category: "Novelas",
  },
  {
    question: "Qual ator interpretou Dirceu Borboleta em 'O Bem-Amado'?",
    options: ["Paulo Gracindo", "Lima Duarte", "Jardel Filho", "Cláudio Marzo"],
    correctAnswer: 0,
    category: "Novelas",
  },

  // Culinária - continuação
  {
    question: "Qual era o prato mais pedido em restaurantes nos anos 70?",
    options: ["Bife à cavalo", "Filé à parmegiana", "Picanha", "Estrogonofe"],
    correctAnswer: 1,
    category: "Culinária",
  },
  {
    question: "Qual marca de maionese era líder nos anos 60?",
    options: ["Hellmann's", "Liza", "Etti", "Arisco"],
    correctAnswer: 0,
    category: "Culinária",
  },
  {
    question: "O que era servido como sobremesa em restaurantes por quilo nos anos 70?",
    options: ["Não existia restaurante por quilo", "Pudim", "Sorvete", "Frutas"],
    correctAnswer: 0,
    category: "Culinária",
  },
  {
    question: "Qual era o salgado mais vendido em padarias nos anos 60?",
    options: ["Coxinha", "Pastel", "Empada", "Pão de queijo"],
    correctAnswer: 2,
    category: "Culinária",
  },
  {
    question: "Qual bebida era servida em festas elegantes nos anos 50?",
    options: ["Champanhe", "Ponche", "Vinho", "Licor"],
    correctAnswer: 1,
    category: "Culinária",
  },

  // Cultura - continuação
  {
    question: "Qual foi o primeiro filme brasileiro a ganhar a Palma de Ouro em Cannes?",
    options: ["O Pagador de Promessas", "Deus e o Diabo na Terra do Sol", "Terra em Transe", "Vidas Secas"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Quem foi o criador do Sítio do Picapau Amarelo?",
    options: ["Monteiro Lobato", "Ziraldo", "Mauricio de Sousa", "Ruth Rocha"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Voz'?",
    options: ["Orlando Silva", "Francisco Alves", "Nelson Gonçalves", "Cauby Peixoto"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Em que ano foi criada a Rede Globo?",
    options: ["1963", "1965", "1967", "1969"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro desenho animado da TV brasileira?",
    options: ["Pica-Pau", "Tom e Jerry", "Popeye", "Mickey Mouse"],
    correctAnswer: 0,
    category: "Cultura",
  },

  // Mais perguntas variadas para completar 200
  {
    question: "Qual era o carro mais desejado nos anos 70?",
    options: ["Fusca", "Opala", "Chevette", "Brasília"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual revista feminina era mais lida nos anos 60?",
    options: ["Claudia", "Manequim", "Capricho", "Desfile"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual programa de rádio era o mais ouvido nos anos 50?",
    options: ["Balança mas não Cai", "Programa César de Alencar", "A Hora do Brasil", "Repórter Esso"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira emissora de TV do Brasil?",
    options: ["TV Tupi", "TV Record", "TV Globo", "TV Excelsior"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Em que ano foi realizada a primeira transmissão de TV no Brasil?",
    options: ["1948", "1950", "1952", "1954"],
    correctAnswer: 1,
    category: "Cultura",
  },

  {
    question: "Qual cantor era conhecido como 'Tremendão'?",
    options: ["Erasmo Carlos", "Roberto Carlos", "Wanderley Cardoso", "Jerry Adriani"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro filme de James Bond?",
    options: ["007 Contra Goldfinger", "Dr. No", "Moscou Contra 007", "007 Contra o Satânico Dr. No"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Quem foi o primeiro apresentador do Fantástico?",
    options: ["Cid Moreira", "Sérgio Chapelin", "Hilton Gomes", "Não teve apresentador fixo"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira novela das 8 da Globo?",
    options: ["Irmãos Coragem", "Selva de Pedra", "Véu de Noiva", "Cavalo de Aço"],
    correctAnswer: 0,
    category: "Novelas",
  },
  {
    question: "Qual atriz foi conhecida como 'Namoradinha do Brasil'?",
    options: ["Regina Duarte", "Sônia Braga", "Vera Fischer", "Malu Mader"],
    correctAnswer: 0,
    category: "Novelas",
  },

  {
    question: "Qual era o brinquedo mais popular nos anos 60?",
    options: ["Pião", "Bolinha de gude", "Bambolê", "Ioiô"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro videogame lançado comercialmente?",
    options: ["Atari", "Pong", "Odyssey", "Nintendo"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual banda brasileira fez sucesso com 'Que País é Este'?",
    options: ["Legião Urbana", "Titãs", "Os Mutantes", "Secos e Molhados"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro festival de música pop no Brasil?",
    options: ["Hollywood Rock", "Festival de Woodstock", "Festival da Canção", "Phono 73"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Quem foi o primeiro brasileiro no espaço?",
    options: ["Marcos Pontes", "Não houve nos anos 50-70", "Santos Dumont", "Nenhum brasileiro foi ao espaço"],
    correctAnswer: 1,
    category: "Cultura",
  },

  {
    question: "Qual era a dança mais popular nos anos 50?",
    options: ["Rock and Roll", "Twist", "Mambo", "Samba"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual programa de TV era apresentado por Hebe Camargo nos anos 60?",
    options: ["Hebe", "O Mundo é das Mulheres", "Almoço com as Estrelas", "Programa da Hebe"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro computador pessoal lançado?",
    options: ["Apple II", "IBM PC", "Altair 8800", "Commodore 64"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Bossa Nova'?",
    options: ["Tom Jobim", "João Gilberto", "Vinicius de Moraes", "Baden Powell"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira Copa do Mundo transmitida pela TV brasileira?",
    options: ["1954", "1958", "1962", "1966"],
    correctAnswer: 1,
    category: "Cultura",
  },

  {
    question: "Qual novela marcou a estreia de Tony Ramos na TV?",
    options: ["Pecado Capital", "Dancin' Days", "Cavalo de Aço", "Selva de Pedra"],
    correctAnswer: 2,
    category: "Novelas",
  },
  {
    question: "Quem foi o autor de 'Gabriela, Cravo e Canela'?",
    options: ["Jorge Amado", "Dias Gomes", "Janete Clair", "Walcyr Carrasco"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual era o jornal mais lido nos anos 60?",
    options: ["O Globo", "Folha de S.Paulo", "O Estado de S. Paulo", "Jornal do Brasil"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro filme brasileiro em cores?",
    options: ["O Cangaceiro", "Destino em Apuros", "Sinhá Moça", "Tico-Tico no Fubá"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Bruxo'?",
    options: ["Roberto Carlos", "Erasmo Carlos", "Raul Seixas", "Caetano Veloso"],
    correctAnswer: 2,
    category: "Cultura",
  },

  {
    question: "Qual foi a primeira minissérie da TV Globo?",
    options: ["Lampião e Maria Bonita", "Avenida Paulista", "Caso Verdade", "Malu Mulher"],
    correctAnswer: 0,
    category: "Novelas",
  },
  {
    question: "Qual atriz foi conhecida como 'A Pantera Negra'?",
    options: ["Ruth de Souza", "Zezé Motta", "Léa Garcia", "Chica Xavier"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro programa de humor da TV brasileira?",
    options: ["Praça da Alegria", "Balança mas não Cai", "Família Trapo", "Chico Anysio Show"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual era o cigarro mais vendido nos anos 60?",
    options: ["Hollywood", "Continental", "Minister", "Vila Rica"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira telenovela diária da TV brasileira?",
    options: ["2-5499 Ocupado", "O Direito de Nascer", "Sua Vida Me Pertence", "Helena"],
    correctAnswer: 0,
    category: "Novelas",
  },

  {
    question: "Qual cantor era conhecido como 'O Príncipe dos Poetas'?",
    options: ["Vinicius de Moraes", "Chico Buarque", "Caetano Veloso", "Gilberto Gil"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro programa de auditório da TV Globo?",
    options: ["Programa Silvio Santos", "Chacrinha", "Buzina do Chacrinha", "Discoteca do Chacrinha"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual era a marca de TV mais vendida nos anos 70?",
    options: ["Philips", "Philco", "Admiral", "Telefunken"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro desenho animado brasileiro?",
    options: ["Sítio do Picapau Amarelo", "Turma da Mônica", "Pererê", "Senninha"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Seresteiro das Multidões'?",
    options: ["Nelson Gonçalves", "Orlando Silva", "Francisco Alves", "Cauby Peixoto"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual foi a primeira revista em quadrinhos brasileira?",
    options: ["O Tico-Tico", "Gibi", "Pererê", "Turma da Mônica"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual era o refrigerante brasileiro mais vendido nos anos 60?",
    options: ["Guaraná Antarctica", "Guaraná Brahma", "Tubaína", "Grapette"],
    correctAnswer: 0,
    category: "Culinária",
  },
  {
    question: "Qual foi o primeiro parque de diversões do Brasil?",
    options: ["Playcenter", "Hopi Hari", "Parque da Mônica", "Parque de Diversões do Ibirapuera"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei do Iê-iê-iê'?",
    options: ["Roberto Carlos", "Erasmo Carlos", "Wanderley Cardoso", "Ronnie Von"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira emissora de rádio do Brasil?",
    options: ["Rádio Sociedade do Rio de Janeiro", "Rádio Nacional", "Rádio Tupi", "Rádio Record"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual era o doce mais vendido em confeitarias nos anos 50?",
    options: ["Brigadeiro", "Beijinho", "Cajuzinho", "Bem-casado"],
    correctAnswer: 3,
    category: "Culinária",
  },
  {
    question: "Qual foi o primeiro supermercado do Brasil?",
    options: ["Pão de Açúcar", "Sirva-se", "Disco", "Carrefour"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Ídolo Negro'?",
    options: ["Jorge Ben Jor", "Tim Maia", "Wilson Simonal", "Jair Rodrigues"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira escola de samba do Brasil?",
    options: ["Mangueira", "Portela", "Deixa Falar", "Império Serrano"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual era a marca de sabão em pó mais vendida nos anos 60?",
    options: ["Omo", "Rinso", "Minerva", "Surf"],
    correctAnswer: 1,
    category: "Culinária",
  },

  {
    question: "Qual foi o primeiro time brasileiro a ganhar a Libertadores?",
    options: ["Santos", "Palmeiras", "Peñarol", "Cruzeiro"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Lambada'?",
    options: ["Não existia lambada nos anos 50-70", "Beto Barbosa", "Márcia Ferreira", "Kaoma"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira linha de metrô inaugurada no Brasil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual era o brinquedo mais caro nos anos 70?",
    options: ["Bicicleta", "Patins", "Boneca Susi", "Autorama"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro presidente eleito após o golpe de 1964?",
    options: ["Ernesto Geisel", "Emílio Médici", "Costa e Silva", "Castelo Branco"],
    correctAnswer: 3,
    category: "Cultura",
  },

  {
    question: "Qual cantor era conhecido como 'O Rei do Baião'?",
    options: ["Luiz Gonzaga", "Jackson do Pandeiro", "Dominguinhos", "Sivuca"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira ponte ligando Rio e Niterói?",
    options: ["Ponte Rio-Niterói", "Ponte Presidente Costa e Silva", "Ambas são a mesma", "Ponte da Amizade"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual era o jornal de maior circulação nos anos 50?",
    options: ["O Globo", "Última Hora", "Diário Carioca", "Correio da Manhã"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro avião a jato brasileiro?",
    options: ["Bandeirante", "Xavante", "Tucano", "Não houve nos anos 50-70"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei do Samba'?",
    options: ["Cartola", "Nelson Cavaquinho", "Martinho da Vila", "Bezerra da Silva"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual foi a primeira usina nuclear do Brasil?",
    options: ["Angra 1", "Angra 2", "Angra 3", "Não houve nos anos 50-70"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual era a marca de geladeira mais vendida nos anos 60?",
    options: ["Consul", "Brastemp", "Prosdócimo", "Climax"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro banco brasileiro?",
    options: ["Banco do Brasil", "Bradesco", "Itaú", "Caixa Econômica"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Música Romântica'?",
    options: ["Agnaldo Timóteo", "Odair José", "Benito di Paula", "Wando"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira companhia aérea brasileira?",
    options: ["Varig", "Vasp", "Panair", "Cruzeiro do Sul"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual era o cinema mais famoso do Rio de Janeiro nos anos 50?",
    options: ["Cine Odeon", "Cine Pathé", "Cine Metro", "Cine Palácio"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro estádio de futebol com capacidade para 100 mil pessoas?",
    options: ["Maracanã", "Morumbi", "Mineirão", "Pacaembu"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei do Rock Brasileiro'?",
    options: ["Celly Campello", "Tony Campello", "Ronnie Cord", "Sérgio Murilo"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira rodovia pavimentada do Brasil?",
    options: ["Via Dutra", "Anchieta", "Imigrantes", "Washington Luís"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual era a marca de fogão mais vendida nos anos 70?",
    options: ["Dako", "Brastemp", "Consul", "Atlas"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual foi o primeiro time brasileiro a fazer uma excursão internacional?",
    options: ["Corinthians", "Fluminense", "Flamengo", "Palmeiras"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Música Caipira'?",
    options: ["Tonico e Tinoco", "Tião Carreiro e Pardinho", "Milionário e José Rico", "Chitãozinho e Xororó"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira hidrelétrica do Brasil?",
    options: ["Itaipu", "Furnas", "Marmelos", "Três Marias"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual era o bairro mais elegante do Rio de Janeiro nos anos 50?",
    options: ["Copacabana", "Ipanema", "Leblon", "Botafogo"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro presidente do Brasil eleito pelo voto direto?",
    options: ["Getúlio Vargas", "Juscelino Kubitschek", "Jânio Quadros", "Eurico Gaspar Dutra"],
    correctAnswer: 3,
    category: "Cultura",
  },

  {
    question: "Qual cantor era conhecido como 'O Rei do Bolero'?",
    options: ["Agnaldo Rayol", "Altemar Dutra", "Waldick Soriano", "Lindomar Castilho"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira universidade do Brasil?",
    options: ["USP", "UFRJ", "UFBA", "UFMG"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual era a marca de rádio mais vendida nos anos 60?",
    options: ["Philips", "Philco", "Telefunken", "Semp"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro túnel do Rio de Janeiro?",
    options: ["Túnel Rebouças", "Túnel Santa Bárbara", "Túnel Velho", "Túnel Novo"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Jovem Guarda'?",
    options: ["Roberto Carlos", "Erasmo Carlos", "Wanderléa", "Jerry Adriani"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual foi a primeira emissora de TV em cores do Brasil?",
    options: ["TV Globo", "TV Tupi", "TV Record", "TV Excelsior"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual era o hotel mais luxuoso do Rio de Janeiro nos anos 50?",
    options: ["Copacabana Palace", "Glória", "Serrador", "Novo Mundo"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro presidente militar do Brasil?",
    options: ["Castelo Branco", "Costa e Silva", "Médici", "Geisel"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Música Brega'?",
    options: ["Reginaldo Rossi", "Waldick Soriano", "Odair José", "Agnaldo Timóteo"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira linha de ônibus do Rio de Janeiro?",
    options: ["Não se sabe ao certo", "Linha 1", "Circular", "Centro-Copacabana"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual era a marca de liquidificador mais vendida nos anos 70?",
    options: ["Walita", "Arno", "Britânia", "Philips"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro parque nacional do Brasil?",
    options: ["Itatiaia", "Iguaçu", "Serra dos Órgãos", "Tijuca"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei do Forró'?",
    options: ["Luiz Gonzaga", "Jackson do Pandeiro", "Dominguinhos", "Genival Lacerda"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira linha de trem do Brasil?",
    options: ["Central do Brasil", "Leopoldina", "Mauá", "Santos-Jundiaí"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual era o restaurante mais famoso de São Paulo nos anos 60?",
    options: ["Fasano", "Terraço Itália", "Massimo", "D.O.M."],
    correctAnswer: 1,
    category: "Culinária",
  },

  {
    question: "Qual foi o primeiro zoológico do Brasil?",
    options: ["Zoo de São Paulo", "Zoo do Rio", "Zoo de BH", "Jardim Zoológico do Rio"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Seresta'?",
    options: ["Nelson Gonçalves", "Cauby Peixoto", "Agnaldo Rayol", "Altemar Dutra"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira fábrica de automóveis do Brasil?",
    options: ["Ford", "GM", "Volkswagen", "FNM"],
    correctAnswer: 3,
    category: "Cultura",
  },
  {
    question: "Qual era a marca de máquina de lavar mais vendida nos anos 70?",
    options: ["Brastemp", "Consul", "Enxuta", "Arno"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro museu do Brasil?",
    options: ["MASP", "Museu Nacional", "Museu Imperial", "Museu Histórico Nacional"],
    correctAnswer: 1,
    category: "Cultura",
  },

  {
    question: "Qual cantor era conhecido como 'O Rei da Música Popular Brasileira'?",
    options: ["Chico Buarque", "Caetano Veloso", "Gilberto Gil", "Elis Regina"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira biblioteca pública do Brasil?",
    options: [
      "Biblioteca Nacional",
      "Biblioteca Mário de Andrade",
      "Biblioteca Pública da Bahia",
      "Real Gabinete Português de Leitura",
    ],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual era o clube mais exclusivo do Rio de Janeiro nos anos 50?",
    options: ["Fluminense", "Botafogo", "Jockey Club", "Country Club"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro teatro do Brasil?",
    options: ["Teatro Municipal do Rio", "Teatro Municipal de SP", "Casa da Ópera", "Teatro São Pedro"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'A Voz do Milênio'?",
    options: ["Elis Regina", "Clara Nunes", "Gal Costa", "Maria Bethânia"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual foi a primeira cervejaria do Brasil?",
    options: ["Brahma", "Antarctica", "Bohemia", "Skol"],
    correctAnswer: 2,
    category: "Culinária",
  },
  {
    question: "Qual era a marca de aspirador de pó mais vendida nos anos 70?",
    options: ["Electrolux", "Arno", "Walita", "Black & Decker"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro jornal do Brasil?",
    options: ["Gazeta do Rio de Janeiro", "Correio Braziliense", "Diário de Pernambuco", "Jornal do Commercio"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei do Samba-Canção'?",
    options: ["Lupicínio Rodrigues", "Dolores Duran", "Maysa", "Nora Ney"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira editora do Brasil?",
    options: ["Companhia das Letras", "Record", "Impressão Régia", "José Olympio"],
    correctAnswer: 2,
    category: "Cultura",
  },

  {
    question: "Qual era o perfume mais vendido nos anos 60?",
    options: ["Chanel Nº 5", "Maderas de Oriente", "Phebo", "Leite de Colônia"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro hospital do Brasil?",
    options: ["Santa Casa de Misericórdia", "Hospital das Clínicas", "Hospital São Paulo", "Hospital Sírio-Libanês"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei do Choro'?",
    options: ["Pixinguinha", "Jacob do Bandolim", "Waldir Azevedo", "Altamiro Carrilho"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira confeitaria do Rio de Janeiro?",
    options: ["Colombo", "Cavé", "Paschoal", "Manon"],
    correctAnswer: 1,
    category: "Culinária",
  },
  {
    question: "Qual era a marca de barbeador elétrico mais vendida nos anos 70?",
    options: ["Philips", "Remington", "Braun", "Panasonic"],
    correctAnswer: 0,
    category: "Cultura",
  },

  {
    question: "Qual foi o primeiro clube de futebol do Brasil?",
    options: ["Fluminense", "São Paulo Athletic", "Sport Club do Recife", "Ponte Preta"],
    correctAnswer: 1,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'O Rei da Música Sertaneja'?",
    options: ["Tonico e Tinoco", "Tião Carreiro e Pardinho", "Milionário e José Rico", "Chitãozinho e Xororó"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira padaria do Brasil?",
    options: ["Não se sabe ao certo", "Padaria Brasileira", "Padaria Mooca", "Padaria Santa Tereza"],
    correctAnswer: 0,
    category: "Culinária",
  },
  {
    question: "Qual era o sabonete mais vendido nos anos 60?",
    options: ["Lux", "Phebo", "Gessy", "Palmolive"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro circo do Brasil?",
    options: ["Circo Garcia", "Circo Irmãos Viana", "Não se sabe ao certo", "Circo Tihany"],
    correctAnswer: 2,
    category: "Cultura",
  },

  {
    question: "Qual cantor era conhecido como 'O Rei da Música Romântica Brasileira'?",
    options: ["Fábio Jr.", "Djavan", "Roberto Carlos", "Erasmo Carlos"],
    correctAnswer: 2,
    category: "Cultura",
  },
  {
    question: "Qual foi a primeira sorveteria do Brasil?",
    options: ["Sorvetes Glacial", "Kibon", "Yopa", "Não se sabe ao certo"],
    correctAnswer: 3,
    category: "Culinária",
  },
  {
    question: "Qual era a marca de pasta de dente mais vendida nos anos 70?",
    options: ["Kolynos", "Gessy", "Close-Up", "Colgate"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual foi o primeiro cassino do Brasil?",
    options: ["Cassino da Urca", "Cassino Atlântico", "Cassino Copacabana", "Cassino Icaraí"],
    correctAnswer: 0,
    category: "Cultura",
  },
  {
    question: "Qual cantor era conhecido como 'A Rainha do Rádio'?",
    options: ["Emilinha Borba", "Marlene", "Ângela Maria", "Dalva de Oliveira"],
    correctAnswer: 0,
    category: "Cultura",
  },
]

function getRandomQuestions(): Question[] {
  const shuffled = [...QUESTION_BANK].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 20)
}

export function QuizGame() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)

  const startGame = () => {
    setQuestions(getRandomQuestions())
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setGameStarted(true)
    setTimeLeft(30)
  }

  useEffect(() => {
    if (!gameStarted || showResult || selectedAnswer !== null) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion()
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStarted, showResult, selectedAnswer, currentQuestion])

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
      setTimeLeft(30)
    } else {
      setShowResult(true)
    }
  }

  const getButtonColor = (index: number) => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-pink-500"]
    return colors[index]
  }

  const getButtonHoverColor = (index: number) => {
    const colors = ["hover:bg-blue-600", "hover:bg-green-600", "hover:bg-orange-600", "hover:bg-pink-600"]
    return colors[index]
  }

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Quiz Nostálgico</h2>
          <p className="text-xl text-muted-foreground">Teste seus conhecimentos sobre os anos 50-70!</p>
          <p className="text-lg">20 perguntas aleatórias sobre cultura, novelas e culinária</p>
        </div>
        <Button onClick={startGame} size="lg" className="text-xl px-8 py-6">
          Começar Quiz
        </Button>
      </div>
    )
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100
    return (
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Quiz Finalizado!</h2>
          <div className="text-6xl font-bold text-primary">
            {score}/{questions.length}
          </div>
          <p className="text-2xl">
            {percentage >= 80
              ? "Excelente! Você é um expert!"
              : percentage >= 60
                ? "Muito bom! Você manda bem!"
                : percentage >= 40
                  ? "Bom trabalho! Continue estudando!"
                  : "Não desanime! Tente novamente!"}
          </p>
        </div>
        <Button onClick={startGame} size="lg" className="text-xl px-8 py-6">
          Jogar Novamente
        </Button>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="font-bold">{timeLeft}s</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-sm font-medium text-primary">{currentQ.category}</span>
            <h3 className="text-2xl font-bold">{currentQ.question}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQ.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
                className={`
                  h-auto min-h-[80px] text-lg p-6 text-white
                  ${getButtonColor(index)}
                  ${getButtonHoverColor(index)}
                  ${selectedAnswer === index && index === currentQ.correctAnswer ? "ring-4 ring-green-300" : ""}
                  ${selectedAnswer === index && index !== currentQ.correctAnswer ? "ring-4 ring-red-300" : ""}
                  ${selectedAnswer !== null && index === currentQ.correctAnswer ? "ring-4 ring-green-300" : ""}
                `}
              >
                {option}
              </Button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <div className="text-center">
              <Button onClick={handleNextQuestion} size="lg" className="text-xl px-8">
                {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

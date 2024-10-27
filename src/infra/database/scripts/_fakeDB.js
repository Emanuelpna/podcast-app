import { PodcastAuthor } from '../../../domain/models/podcast/PodcastAuthor';
import { PodcastChannel } from '../../../domain/models/podcast/PodcastChannel';
import { PodcastEpisode } from '../../../domain/models/podcast/PodcastEpisode';
import { PodcastAudioFile } from '../../../domain/models/podcast/PodcastAudioFile';

export const database = {
  subscribedPodcasts: [
    new PodcastChannel(
      'Jogabilidade',
      'https://jogabilida.de',
      1,
      'Podcasts do Jogabilidade que discutem jogos, aqui você vai encontrar o DASH e o Vértice.',
      'Wed, 09 Oct 2024 17:04:23 +0000',
      'https://jogabilida.de/wp-content/uploads/powerpress/capa_games1440.png',
      'https://jogabilida.de/category/podcasts/podcast-games/feed/podcast/',
      616
    ),
    new PodcastChannel(
      'Braincast',
      'http://www.b9.com.br/',
      2,
      'Braincast é um podcast semanal onde informação e descontração se encontram. Um papo solto, sem perder o fio. Com senso crítico e leveza, criamos conversas autênticas sobre cultura digital, comportamento, inovação e negócios, sempre refletindo quais faíscas vão impulsionar nosso presente e futuro.',
      'Wed, 09 Oct 2024 17:04:23 +0000',
      'https://www.omnycontent.com/d/playlist/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/d4c8e398-446c-447a-ad41-acd400edccc1/image.jpg?t=1662142394&size=Large',
      'https://www.omnycontent.com/d/playlist/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/d4c8e398-446c-447a-ad41-acd400edccc1/podcast.rss',
      559
    ),
    new PodcastChannel(
      '99% Invisible',
      'https://www.99pi.org',
      3,
      'Design is everywhere in our lives, perhaps most importantly in the places where we&apos;ve just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars. Learn more at 99percentinvisible.org.',
      'Fri, 11 Oct 2024 16:30:57 +0000',
      'https://image.simplecastcdn.com/images/96792a27-13c3-40ce-b933-36bdb43a299e/54c9f8d8-80d8-425d-a3f3-751478db2e52/3000x3000/cover-99percentinvisible-3000x3000-r2021-final.jpg?aid=rss_feed',
      'https://feeds.simplecast.com/BqbsxVfO',
      686
    ),
    new PodcastChannel(
      'Jogabilidade (Não Games)',
      'https://jogabilida.de',
      1,
      'Podcasts do Jogabilidade que não discutem jogos, aqui você vai encontrar o Linha Quente e o Fora da Caixa.',
      'Wed, 09 Oct 2024 17:04:23 +0000',
      'https://jogabilida.de/wp-content/uploads/powerpress/capa_naogames1440.png',
      'https://jogabilida.de/category/podcasts/podcast-naogames/feed/podcast/',
      357
    ),
    new PodcastChannel(
      'Hipsters Ponto Tech',
      'https://www.hipsters.tech/',
      5,
      'Discussões sobre tecnologia, programação, design, startups e as últimas tendências.',
      'Tue, 15 Oct 2024 12:22:22 +0000',
      'https://www.hipsters.tech/wp-content/uploads/2021/07/HipstersTech_Logo_Vertical_1.png',
      'https://hipsters.tech/feed/podcast',
      503
    ),
    new PodcastChannel(
      'AntiCast',
      'https://open.spotify.com/show/40IuG6Qs0lwYntanTQbpDJ?si=tH4elzqGSaWFAiXbTvsalg',
      4,
      'Podcast sobre política, história, artes e qualquer outra forma de subversão.',
      'Wed, 16 Oct 2024 06:55:38 GMT',
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/40442977/90e60c33fb55eaf1.jpeg',
      'https://anchor.fm/s/f1a7ac64/podcast/rss',
      410
    ),
    new PodcastChannel(
      'mimimidias | cultura digital, artes e entretenimento',
      'https://mimimidias.podbean.com',
      6,
      'todas as quintas-feiras, clara matheus e leonardo oliveira conversam sobre assuntos que chamaram atenção durante a semana. cultura da internet, arte, lançamento de livros, filmes e séries: tudo que é mídia pode se tornar assunto. sempre compromissados com a informação de qualidade, mas sem perder o bom humor.',
      'Thu, 17 Oct 2024 00:01:00 -0300',
      'https://pbcdn1.podbean.com/imglogo/image-logo/5174808/Perfil_mimimidias_2024_FINAL_LOW.jpeg',
      'https://feed.podbean.com/mimimidias/feed.xml',
      193
    ),
    new PodcastChannel(
      'Naruhodo',
      'http://naruhodo.b9.com.br',
      7,
      'Naruhodo! é o podcast pra quem tem fome de aprender. Ciência, senso comum, curiosidades e muito mais. Com o leigo curioso, Ken Fujioka, e o cientista PhD, Altay de Souza.',
      'Mon, 14 Oct 2024 03:00:11 +0000',
      'https://image.simplecastcdn.com/images/35e2db64-2d2f-4a5b-8291-d6b12131fb3d/076e15b7-8541-4754-9e2d-952bbd93ff83/3000x3000/screenshot-2023-06-27-at-09-10-18-overview-simplecast-dashboard.jpg?aid=rss_feed',
      'https://feeds.simplecast.com/hwQVm5gy',
      499
    ),
    new PodcastChannel(
      'DWBRcast',
      'http://doctorwhobrasil.com.br',
      8,
      'Podcast oficial do Doctor Who Brasil! Reviews, notícias e conteúdos exclusivos de Doctor Who. Série moderna, série clássica, universo expandido e muito mais! Apresentado por Freddy Pavão e Thais Aux!',
      'Tue, 15 Oct 2024 09:17:45 GMT',
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1755769/1755769-1666807908874-f90d145d4869a.jpg',
      'https://anchor.fm/s/b0fadc4/podcast/rss',
      316
    ),
    new PodcastChannel(
      'Pouco Pixel',
      'https://poucopixel.com',
      9,
      'Papo novo sobre video game velho',
      'Tue, 22 Oct 2024 06:51:18 GMT',
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1042869/1042869-1559332004393-31fda626ae688.jpg',
      'https://anchor.fm/s/6cfe134/podcast/rss',
      207
    ),
    new PodcastChannel(
      'Não Obstante',
      'http://www.naoobstante.com/',
      10,
      'Um bate-papo conduzido por Marcos Beccari e Daniel B. Portugal (contando com a edição de Felipe Ayres), fruto de uma parceira do Anticast com o Filosofia do Design.',
      'Mon, 16 Jan 2023 15:05:58 +0000',
      'https://artwork.captivate.fm/152b5fe0-93c0-426b-95e3-a429a2b6734f/naobslogo.jpg',
      'https://feeds.captivate.fm/nao-obstante/',
      40
    ),
    new PodcastChannel(
      'QuebraDev',
      'http://quebradev.com.br/',
      11,
      'O QuebraDev é um podcast de origem periférica que surgiu de forma independente com a ideia de disseminar informação de uma maneira simples, interativa e inclusiva.\n\nEmail para contatos: quebradev@gmail.com\n\nNossas lives acontecem a cada duas semanas às segundas-feiras 20h na twitch.tv 🎥',
      'Tue, 22 Oct 2024 08:18:27 GMT',
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/4616634/6d80fdf53b9e5442.jpeg',
      'https://anchor.fm/s/1c1d0328/podcast/rss',
      72
    ),
    new PodcastChannel(
      'O Alvissareiro',
      'https://www.spreaker.com/podcast/o-alvissareiro--5920998',
      12,
      'Conversas sobre cultura digital, comportamento e atualidades organizado por temporadas. Por Luiz Yassuda, Gabriel Prado e Jessica Correa',
      'Mon, 10 Jun 2024 15:01:36 +0000',
      'https://d3wo5wojvuv7l.cloudfront.net/t_rss_itunes_square_1400/images.spreaker.com/original/d8902b1719cc6355d1482034ece5dac0.jpg',
      'https://www.spreaker.com/show/5920998/episodes/feed',
      13
    ),
  ],
  downloadedPodcastEpisodes: [
    new PodcastEpisode(
      'https://jogabilida.de/?p=20014',
      'https://jogabilida.de',
      'Vértice #444: BGS 2024, Dragon Ball Sparking Zero, as crias da ZA/UM, vazamento da Game Freak e mais!',
      'https://jogabilida.de/2024/10/vertice-444/',
      `Recebemos Ricardo Regis para trocar socos entre 19 Gokus diferentes em Dragon Ball Sparking! Zero, além de comentar a Brasil Game Show 2024, o vazamento na Game Freak, os estúdios dos ex-ZA/UM e mais!<ul>\n \t<li>00:07:03: Vote no Jogabilidade no prêmio MPB: https://jogabilida.de/vote</li>\n \t<li>00:10:40: Brasil Game Show 2024</li>\n \t<li>00:20:18: Sonic x Shadow Generations</li>\n \t<li>00:29:12: Hunter x Hunter: Nen x Impact</li>\n \t<li>00:37:09: Fatal Fury: City of Wolves</li>\n \t<li>00:49:16: Dynasty Warriors: Origins</li>\n \t<li>00:57:59: Like a Dragon: Pirate Yakuza in Hawaii</li>\n \t<li>01:08:06: Vyanka's Memories</li>\n \t<li>01:11:29: DRAGON BALL: Sparking! ZERO</li>\n \t<li>01:35:39: Silent Hill 2</li>\n \t<li>01:55:09: Perguntas dos ouvintes</li>\n \t<li>02:07:06: Xbox Partnet preview anunciado para 17/10</li>\n \t<li>02:08:11: Vazamentos na Game Freak</li>\n \t<li>02:14:53: Concord vai voltar?</li>\n \t<li>02:20:50: Os novos estúdios dos criadores de Disco Elysium</li>\n \t<li>02:47:58: Estúdio de Halo troca de nome e de engine</li>\n</ul><p><a href="https://contribua.jogabilida.de">Contribua</a> | <a href="https://twitter.com/jogabilidade">Twitter</a> | <a href="https://youtube.com/jogabilidade">YouTube</a> | <a href="https://twitch.tv/jogabilidade">Twitch</a> | <a href="mailto:contato@jogabilida.de">Contato</a></p>`,
      'Wed, 16 Oct 2024 17:12:51 +0000',
      'https://jogabilida.de/wp-content/uploads/2024/10/v444c.jpg',
      10732,
      new PodcastAudioFile(
        'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42739/f617acbfdef91f97e8eecad8f16c1006.mp3',
        'audio/mpeg',
        129580030
      )
    ),
    new PodcastEpisode(
      'e5226e8a-b4f3-4f47-aed8-b2060140714a',
      'http://www.b9.com.br/',
      'Demolição Digital: O apagamento da memória cultural na Era do Streaming',
      'https://omny.fm/shows/braincast/demoli-o-digital-o-apagamento-da-mem-ria-cultural',
      'Sabe aquela sua estante cheia de livros, discos e filmes? Pois é, pense duas vezes antes de se desfazer dela, pois é um item cada vez mais raro nas casas. Nesse Braincast vamos explorar um fenômeno que está remodelando a forma como consumimos e preservamos cultura e entretenimento na era digital.',
      'Fri, 11 Oct 2024 19:30:54 +0000',
      'https://www.omnycontent.com/d/clips/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/e5226e8a-b4f3-4f47-aed8-b2060140714a/image.jpg?t=1728674808&amp;size=Large',
      5291,
      new PodcastAudioFile(
        'https://chtbl.com/track/BC6GF7//pdst.fm/e/traffic.omny.fm/d/clips/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/e5226e8a-b4f3-4f47-aed8-b2060140714a/audio.mp3?utm_source=Podcast&amp;in_playlist=d4c8e398-446c-447a-ad41-acd400edccc1',
        'audio/mpeg',
        84690472
      )
    ),
    new PodcastEpisode(
      'https://jogabilida.de/?p=19696',
      'https://jogabilida.de',
      'DASH #157: Elden Ring',
      'https://jogabilida.de/2024/07/dash-157/',
      `Nesse breve papo, discutimos como foi a espera até esse lançamento que parou o mundo em 2022, como Hidetaka Miyazaki e seus asseclas abordaram, pela primeira vez, a adaptação de um soulslike num mundo verdadeiramente aberto, qual foi o papel de George R. R. Martin na criação desse misterioso universo e muito mais! <![CDATA[<ul>
 	<li>Assista: <a href="https://www.youtube.com/@VaatiVidya">VaatiVidya</a></li>
 	<li>Assista: <a href="https://www.youtube.com/@quelaag">Quelaag</a></li>
 	<li>Assista: <a href="https://www.youtube.com/@ZullietheWitch">Zullie</a></li>
 	<li>Assista: <a href="https://www.youtube.com/@ratatoskr6324">Ratatoskr</a></li>
 	<li>Assista: <a href="https://www.youtube.com/@SmoughTown">SmoughTown</a></li>
 	<li>Assista: <a href="https://www.youtube.com/@tarnishedarchaeologist">Tarnished Archaeologist</a></li>
</ul><ul>
 	<li>00:24:08 - Anúncio e Desenvolvimento</li>
 	<li>01:08:51 - Lançamento</li>
 	<li>02:44:56 - Limgrave</li>
 	<li>03:55:53 - Castelo Tempesvéu</li>
 	<li>04:49:15 - Liurnia dos Lagos</li>
 	<li>06:06:45 - Caelid</li>
 	<li>06:31:36 - Nokron e Ranni</li>
 	<li>07:21:58 - Platô Altus e Monte Gelmir</li>
 	<li>08:00:34 - Leyndell</li>
 	<li>08:19:57 - Montanha dos Gigantes</li>
 	<li>08:32:10 - Farum Azula</li>
 	<li>09:06:26 - Dinastia Mohgwyn</li>
 	<li>09:26:25 - Elphael</li>
 	<li>09:44:52 - De volta à Térvore</li>
 	<li>10:18:47 - Conclusões</li>
</ul><p><a href="https://contribua.jogabilida.de">Contribua</a> | <a href="https://twitter.com/jogabilidade">Twitter</a> | <a href="https://youtube.com/jogabilidade">YouTube</a> | <a href="https://twitch.tv/jogabilidade">Twitch</a> | <a href="mailto:contato@jogabilida.de">Contato</a></p>]]>`,
      'Fri, 05 Jul 2024 15:58:44 +0000',
      'https://jogabilida.de/wp-content/uploads/2024/07/dash157.jpg',
      38179,
      new PodcastAudioFile(
        'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42739/c5819df398412868959e71994536d0cf.mp3',
        'audio/mpeg',
        116838462
      )
    ),
    new PodcastEpisode(
      'https://jogabilida.de/?p=19174',
      'https://jogabilida.de',
      'Re:JACK by Crunchyroll #14: Vinland Saga (Temporada 1)',
      'https://jogabilida.de/2023/07/rejack-14/',
      `Nesse episódio, navegamos pelos mares gelados do norte em busca de terras mais quentes e férteis numa discussão sobre a natureza da violência na primeira temporada de Vinland Saga.<![CDATA[<ul>
  	<li><a href="https://got.cr/podcast-jogabilidade">14 Dias Grátis de Crunchyroll</a></li>
</ul><p><a href="https://contribua.jogabilida.de">Contribua</a> | <a href="https://twitter.com/jogabilidade">Twitter</a> | <a href="https://youtube.com/jogabilidade">YouTube</a> | <a href="https://twitch.tv/jogabilidade">Twitch</a> | <a href="mailto:contato@jogabilida.de">Contato</a></p>]]>`,
      'Wed, 05 Jul 2023 16:28:34 +0000',
      'https://jogabilida.de/wp-content/uploads/2023/07/rejack13-vinlandsaga_capa.jpg',
      11091,
      new PodcastAudioFile(
        'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42741/ef29dfe5296bf2f25f8a401410a35fe5.mp3',
        'audio/mpeg',
        135633736
      )
    ),
    new PodcastEpisode(
      'https://api.spreaker.com/episode/60277241',
      'https://www.spreaker.com/podcast/o-alvissareiro--5920998',
      'IAI, como anda essa inteligência artificial? (participação especial: Tales Cione)',
      'https://omny.fm/shows/braincast/copa-dos-fandoms-qual-o-mais-t-xico',
      `Você está com a sensação de que tudo o que acontece no mundo da tecnologia agora tem a ver com Inteligência Artificial? Do ano passado para cá algumas ferramentas se popularizaram e trouxeram para a conversa absolutamente todo mundo.

É claro que por...`,
      'Tue, 04 Jun 2024 19:06:50 +0000',
      'https://d3wo5wojvuv7l.cloudfront.net/t_rss_itunes_square_1400/images.spreaker.com/original/c150451dbfd7cf8a7bc1b413fd1877ce.jpg',
      5688,
      new PodcastAudioFile(
        'https://dts.podtrac.com/redirect.mp3/api.spreaker.com/download/episode/60277241/oa_12.mp3',
        'audio/mpeg',
        96441982
      )
    ),
    new PodcastEpisode(
      'd81f51e7-531d-41db-8bca-1a31b1c93d39',
      'https://www.99pi.org',
      "Trompe L'oeil",
      'https://99percentinvisible.org/?p=42844',
      `<p>Today, we have three stories about designs meant to fool you. Camouflage meant to fool U-boats. Highways designed to fool your brain into going way faster than it should want to. And impeccably made fake signs meant to guide you to the right freeway. Three classic, favorite 99PI's completely updated, remixed, and rescored.</p><p><a href="https://99percentinvisible.org/?p=42844" target="_blank">Trompe L'oeil</a></p>\n<p><p>Subscribe to SiriusXM Podcasts+ on Apple Podcasts to listen to ad-free new episodes and get exclusive access to bonus content.</p></p>`,
      'Tue, 15 Oct 2024 22:12:37 +0000',
      'https://image.simplecastcdn.com/images/96792a27-13c3-40ce-b933-36bdb43a299e/9923578a-0e59-4bfe-9ebb-c097f2dc1c71/3000x3000/99pi-cover-the-power-broker-3000x3000-final.jpg?aid=rss_feed',
      38179,
      new PodcastAudioFile(
        'https://dts.podtrac.com/redirect.mp3/chrt.fm/track/288D49/tracking.swap.fm/track/0bDcdoop59bdTYSfajQW/stitcher.simplecastaudio.com/3bb687b0-04af-4257-90f1-39eef4e631b6/episodes/252137a6-26a2-4bf0-8da6-ff321f4f33fa/audio/128/default.mp3?aid=rss_feed&awCollectionId=3bb687b0-04af-4257-90f1-39eef4e631b6&awEpisodeId=252137a6-26a2-4bf0-8da6-ff321f4f33fa&feed=BqbsxVfO',
        'audio/mpeg',
        31505710
      )
    ),
  ],
  newPodcastEpisodes: [
    new PodcastEpisode(
      'https://jogabilida.de/?p=20014',
      'https://jogabilida.de',
      'Vértice #444: BGS 2024, Dragon Ball Sparking Zero, as crias da ZA/UM, vazamento da Game Freak e mais!',
      'https://jogabilida.de/2024/10/vertice-444/',
      `Recebemos Ricardo Regis para trocar socos entre 19 Gokus diferentes em Dragon Ball Sparking! Zero, além de comentar a Brasil Game Show 2024, o vazamento na Game Freak, os estúdios dos ex-ZA/UM e mais!<ul>\n \t<li>00:07:03: Vote no Jogabilidade no prêmio MPB: https://jogabilida.de/vote</li>\n \t<li>00:10:40: Brasil Game Show 2024</li>\n \t<li>00:20:18: Sonic x Shadow Generations</li>\n \t<li>00:29:12: Hunter x Hunter: Nen x Impact</li>\n \t<li>00:37:09: Fatal Fury: City of Wolves</li>\n \t<li>00:49:16: Dynasty Warriors: Origins</li>\n \t<li>00:57:59: Like a Dragon: Pirate Yakuza in Hawaii</li>\n \t<li>01:08:06: Vyanka's Memories</li>\n \t<li>01:11:29: DRAGON BALL: Sparking! ZERO</li>\n \t<li>01:35:39: Silent Hill 2</li>\n \t<li>01:55:09: Perguntas dos ouvintes</li>\n \t<li>02:07:06: Xbox Partnet preview anunciado para 17/10</li>\n \t<li>02:08:11: Vazamentos na Game Freak</li>\n \t<li>02:14:53: Concord vai voltar?</li>\n \t<li>02:20:50: Os novos estúdios dos criadores de Disco Elysium</li>\n \t<li>02:47:58: Estúdio de Halo troca de nome e de engine</li>\n</ul><p><a href="https://contribua.jogabilida.de">Contribua</a> | <a href="https://twitter.com/jogabilidade">Twitter</a> | <a href="https://youtube.com/jogabilidade">YouTube</a> | <a href="https://twitch.tv/jogabilidade">Twitch</a> | <a href="mailto:contato@jogabilida.de">Contato</a></p>`,
      'Wed, 16 Oct 2024 17:12:51 +0000',
      'https://jogabilida.de/wp-content/uploads/2024/10/v444c.jpg',
      10732,
      new PodcastAudioFile(
        'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42739/f617acbfdef91f97e8eecad8f16c1006.mp3',
        'audio/mpeg',
        129580030
      )
    ),
    new PodcastEpisode(
      '1db65f4c-bd6b-44dd-9639-b20e00044bba',
      'http://www.b9.com.br/',
      'Copa dos Fandoms: qual é o mais tóxico?',
      'https://omny.fm/shows/braincast/copa-dos-fandoms-qual-o-mais-t-xico',
      `A gente sabe que todo fandom tem seus fãs leais e apaixonados, mas alguns desses grupos acabam passando do limite e se tornando verdadeiras comunidades de ódio, perseguição e cancelamento. É por isso que realizamos um torneio especial no Braincast 567: a Copa dos Fandoms Tóxicos. Vários concorrentes se enfrentam em duelos diretos, e ao final, Carlos Merigo, Ieda Marcondes, Hiago Vinícius e Liv Brandão decidem quem leva o troféu do fandom mais insuportável de todos. 07:20 - Pauta 01:26:54 - QEAB -- ✳️ SIGA O CANAL B9 NO WHATSAPP: b9.com.br/zap ASSINE O BRAINCAST E FAÇA PARTE DO NOSSO GRUPO FECHADO Assinando o Braincast você pode interagir com a gente na Braincasteria Gourmet, nosso grupo fechado no Telegram, além de receber conteúdo exclusivo. Saiba como ser um braincaster de carteirinha: b9.com.br/assine https://youtube.com/playlist?list=UUMOGNdGepMFVqPNgaCkNBdiLw&si=wJknzXE_tk23gG7g SIGA O BRAINCAST Seu podcast com conversas curiosas para mentes criativas está em todas as plataformas e redes. Inclusive, na mais próxima de você. Encontre o @braincastpod: No Instagram; no Twitter; no TikTok na Twitch na YouTube. Entre em contato através do braincast@b9.com.br. Perdeu o Qual É A Boa? Encontre todas as dicas da bancada nos destaques do nosso Instagram. O Braincast é uma produção B9 B9 Criação e Apresentação: Carlos Merigo Coordenação: Alexandre Potascheff Edição: Gabriel Pimentel Identidade Sonora: Nave, com Direção Artística de Oga Mendonça Identidade Visual: Johnny Britto Atendimento e Comercialização: Camila Mazza e Telma Zennaro O2 Filmes Direção de Arte e Direção de Fotografia: Tomás Di Spagna Produtor e Operador De Áudio: Gabriel Paim Coordenadora de Produção: Jeniffer Sousa Operadora de Câmera: Laís Lima (Tangerina) Assistente de produção: Cardim Equipe Técnica: Anderson Figueiroa M. Silva, Odécio Manfrim, Samuel Simão Rodrigues eWalter Transporte: Ângelo Koyama Coordenação de Estúdios: Sr. Figueroa Torne-se membro do B9 e ganhe benefícios: Braincast secreto; grupo de assinantes no Telegram; e mais! https://www.youtube.com/channel/UCGNdGepMFVqPNgaCkNBdiLw/join`,
      'Sat, 19 Oct 2024 00:18:28 +0000',
      'https://www.omnycontent.com/d/clips/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/1db65f4c-bd6b-44dd-9639-b20e00044bba/image.jpg?t=1729296945&size=Large',
      5688,
      new PodcastAudioFile(
        'https://chtbl.com/track/BC6GF7//pdst.fm/e/traffic.omny.fm/d/clips/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/1db65f4c-bd6b-44dd-9639-b20e00044bba/audio.mp3?utm_source=Podcast&in_playlist=d4c8e398-446c-447a-ad41-acd400edccc1',
        'audio/mpeg',
        91050426
      )
    ),
    new PodcastEpisode(
      'mimimidias.podbean.com/b6d9e573-91ff-3954-8e55-6493b8ab5eec',
      'https://mimimidias.podbean.com',
      '192 - cybercab, tiktokers se arriscando no furacão, preso no linkedin e ia na wikipédia',
      'https://mimimidias.podbean.com/e/192-cybercab-tiktokers-se-arriscando-no-furacao-preso-no-linkedin-e-ia-na-wikipedia/',
      `<p>essa semana a gente conversa sobre o executivo condenado que atualizou, no linkedin, seu status de emprego para "presidiário". falamos também sobre o projeto que está combatendo a presença de conteúdo gerado por ia na wikipédia. discutimos os últimos lançamentos do menor homem do mundo e a pequeneza dos tiktokers que se arriscaram durante o furação milton com o objetivo de "criar conteúdo".</p>\n<p>\n–\nouça episódios exclusivos na <a href='https://orelo.cc/mimimidias'>orelo</a>, no <a href='http://catarse.me/mimimidias'>catarse</a> ou <a href='https://www.youtube.com/channel/UCg0CfiR_iKjBOYgeHps17BA/join'>youtube</a>!</p>\n`,
      "Thu, 17 Oct 2024 00:01:00 -0300",
      "https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog5174808/93fa3619-5c27-4717-939c-97ccc854b3c1.jpeg",
      2676,
      new PodcastAudioFile(
         "https://mcdn.podbean.com/mf/web/2iy5k8dmg387gg4g/EP_192_TikTokFuracao_Cybercab_PresoLinkedin_WikipedIA.mp3",
        'audio/mpeg',
        42820992
      )
    ),
  ],
  autoGeneratedPlaylists: [
    {
      title: 'Episódios mais recentes',
      category: 'Recomendação',
      episodes: [
        new PodcastEpisode(
          'https://jogabilida.de/?p=19174',
          'https://jogabilida.de',
          'Re:JACK by Crunchyroll #14: Vinland Saga (Temporada 1)',
          'https://jogabilida.de/2023/07/rejack-14/',
          `Nesse episódio, navegamos pelos mares gelados do norte em busca de terras mais quentes e férteis numa discussão sobre a natureza da violência na primeira temporada de Vinland Saga.<![CDATA[<ul>
  	<li><a href="https://got.cr/podcast-jogabilidade">14 Dias Grátis de Crunchyroll</a></li>
</ul><p><a href="https://contribua.jogabilida.de">Contribua</a> | <a href="https://twitter.com/jogabilidade">Twitter</a> | <a href="https://youtube.com/jogabilidade">YouTube</a> | <a href="https://twitch.tv/jogabilidade">Twitch</a> | <a href="mailto:contato@jogabilida.de">Contato</a></p>]]>`,
          'Wed, 05 Jul 2023 16:28:34 +0000',
          'https://jogabilida.de/wp-content/uploads/2023/07/rejack13-vinlandsaga_capa.jpg',
          11091,
          new PodcastAudioFile(
            'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42741/ef29dfe5296bf2f25f8a401410a35fe5.mp3',
            'audio/mpeg',
            135633736
          )
        ),
        new PodcastEpisode(
          'https://www.hipsters.tech/?p=5463',
          'https://www.hipsters.tech/',
          'Por Dentro da AWS e Amazon.com.br – Hipsters Ponto Tech #432',
          'https://www.hipsters.tech/?p=5463',
          `Hoje é dia de falar de nuvem!\n\n\n\nNeste episódio, exploramos a surpreendente relação entre a AWS e a Amazon Brasil, e as importantes questões ligadas a dimensionamento, escalabilidade e, é claro, segurança quando o assunto é nuvem. Vem ver quem participou desse papo:\n\n\n\n\nAndré David, o host que fica ligado em palavrinhas-chave\n\n\n\nVinny Neves, co-host e Tech Lead na UsTwo\n\n\n\nBruno Toffolo, Principal Software Development Engineer na Amazon\n\n\n\nGaston Perez, Principal Solutions Architect na AWS\n\n\n\n\n🔗 Links: \n\n\n\n\nAWS investirá mais de R$10 bilhões para expandir infraestrutura no Brasil\n\n\n\nTechGuide: Fundamentos Cloud – Hipsters Ponto Tech #348\n\n\n\nAmazon Bedrock\n\n\n\nLivro: Working Backwards – Obsessão pelo cliente\n\n\n\nTreinamentos e certificações oferecidos pela AWS\n\n\n\n\nConheça a Formação Começando na AWS com Lightsail, EC2, S3, VPC, RDS e DynamoDB da Alura e aprenda os fundamentos de Cloud da Amazon Web Services.\n\n\n\nTechGuide.sh, um mapeamento das principais tecnologias demandadas pelo mercado para diferentes carreiras, com nossas sugestões e opiniões.\n\n\n\n#7DaysOfCode: Coloque em prática os seus conhecimentos de programação em desafios diários e gratuitos. Acesse https://7daysofcode.io/\n\n\n\nProdução e conteúdo:\n\n\n\n\nAlura Cursos de Tecnologia – https://www.alura.com.br\n\n\n\n\nEdição e sonorização: Rede Gigahertz de Podcasts`,
          'Tue, 15 Oct 2024 12:22:22 +0000',
          'https://www.hipsters.tech/wp-content/uploads/2021/07/HipstersTech_Logo_Vertical_1.png',
          2268,
          new PodcastAudioFile(
            'https://media.blubrry.com/hipsterstech/content.blubrry.com/hipsterstech/HpT-432_aws.mp3',
            'audio/mpeg',
            27737626
          )
        ),
        new PodcastEpisode(
          'd81f51e7-531d-41db-8bca-1a31b1c93d39',
          'https://www.99pi.org',
          "Trompe L'oeil",
          'https://99percentinvisible.org/?p=42844',
          `<p>Today, we have three stories about designs meant to fool you. Camouflage meant to fool U-boats. Highways designed to fool your brain into going way faster than it should want to. And impeccably made fake signs meant to guide you to the right freeway. Three classic, favorite 99PI's completely updated, remixed, and rescored.</p><p><a href="https://99percentinvisible.org/?p=42844" target="_blank">Trompe L'oeil</a></p>\n<p><p>Subscribe to SiriusXM Podcasts+ on Apple Podcasts to listen to ad-free new episodes and get exclusive access to bonus content.</p></p>`,
          'Tue, 15 Oct 2024 22:12:37 +0000',
          'https://image.simplecastcdn.com/images/96792a27-13c3-40ce-b933-36bdb43a299e/54c9f8d8-80d8-425d-a3f3-751478db2e52/3000x3000/cover-99percentinvisible-3000x3000-r2021-final.jpg?aid=rss_feed',
          38179,
          new PodcastAudioFile(
            'https://dts.podtrac.com/redirect.mp3/chrt.fm/track/288D49/tracking.swap.fm/track/0bDcdoop59bdTYSfajQW/stitcher.simplecastaudio.com/3bb687b0-04af-4257-90f1-39eef4e631b6/episodes/252137a6-26a2-4bf0-8da6-ff321f4f33fa/audio/128/default.mp3?aid=rss_feed&awCollectionId=3bb687b0-04af-4257-90f1-39eef4e631b6&awEpisodeId=252137a6-26a2-4bf0-8da6-ff321f4f33fa&feed=BqbsxVfO',
            'audio/mpeg',
            31505710
          )
        ),
      ],
    },
    {
      title: 'Canais mais ouvidos',
      category: 'Recomendação',
      episodes: [
        new PodcastEpisode(
          'https://jogabilida.de/?p=19739',
          'https://jogabilida.de',
          'DASH #158: Músicas Boas em Jogos Ruins',
          'https://jogabilida.de/2024/07/dash-158/',
          'Do charme inexperiente de Cheetamen à atitude sem limites do Sonic, das orquestrações ambiciosas de Genshin Impact aos infinitos solos de guitarra de Masahiro Andoh em Gran Turismo 2, nossa trume se reúne para comentar e escutar músicas queridas de jogos que, por qualquer motivo, não clicaram com eles',
          'Mon, 29 Jul 2024 21:46:35 +0000',
          'https://jogabilida.de/wp-content/uploads/2024/07/dash158-capa.jpg',
          11091,
          new PodcastAudioFile(
            'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42739/0f3f9a1f7257b0eda92ecd1caf40f037.mp3',
            'audio/mpeg',
            157522740
          )
        ),
        new PodcastEpisode(
          'd81f51e7-531d-41db-8bca-1a31b1c93d39',
          'https://www.99pi.org',
          "Trompe L'oeil",
          'https://99percentinvisible.org/?p=42844',
          `<p>Today, we have three stories about designs meant to fool you. Camouflage meant to fool U-boats. Highways designed to fool your brain into going way faster than it should want to. And impeccably made fake signs meant to guide you to the right freeway. Three classic, favorite 99PI's completely updated, remixed, and rescored.</p><p><a href="https://99percentinvisible.org/?p=42844" target="_blank">Trompe L'oeil</a></p>\n<p><p>Subscribe to SiriusXM Podcasts+ on Apple Podcasts to listen to ad-free new episodes and get exclusive access to bonus content.</p></p>`,
          'Tue, 15 Oct 2024 22:12:37 +0000',
          'https://www.omnycontent.com/d/clips/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/0a3aae91-cbb5-4c36-a1e4-b1f801835f9b/image.jpg?t=1727479829&size=Large',
          38179,
          new PodcastAudioFile(
            'https://dts.podtrac.com/redirect.mp3/chrt.fm/track/288D49/tracking.swap.fm/track/0bDcdoop59bdTYSfajQW/stitcher.simplecastaudio.com/3bb687b0-04af-4257-90f1-39eef4e631b6/episodes/252137a6-26a2-4bf0-8da6-ff321f4f33fa/audio/128/default.mp3?aid=rss_feed&awCollectionId=3bb687b0-04af-4257-90f1-39eef4e631b6&awEpisodeId=252137a6-26a2-4bf0-8da6-ff321f4f33fa&feed=BqbsxVfO',
            'audio/mpeg',
            31505710
          )
        ),
        new PodcastEpisode(
          'd81f51e7-531d-41db-8bca-1a31b1c93d39',
          'https://www.99pi.org',
          "Trompe L'oeil",
          'https://99percentinvisible.org/?p=42844',
          `<p>Today, we have three stories about designs meant to fool you. Camouflage meant to fool U-boats. Highways designed to fool your brain into going way faster than it should want to. And impeccably made fake signs meant to guide you to the right freeway. Three classic, favorite 99PI's completely updated, remixed, and rescored.</p><p><a href="https://99percentinvisible.org/?p=42844" target="_blank">Trompe L'oeil</a></p>\n<p><p>Subscribe to SiriusXM Podcasts+ on Apple Podcasts to listen to ad-free new episodes and get exclusive access to bonus content.</p></p>`,
          'Tue, 15 Oct 2024 22:12:37 +0000',
          'https://www.omnycontent.com/d/clips/651a251e-06e1-47e0-9336-ac5a00f41628/fc243b66-f34c-4656-9042-acd400edcca5/a64a44b8-6e63-4753-8abd-b1eb00037135/image.jpg?t=1726272759&size=Large',
          38179,
          new PodcastAudioFile(
            'https://dts.podtrac.com/redirect.mp3/chrt.fm/track/288D49/tracking.swap.fm/track/0bDcdoop59bdTYSfajQW/stitcher.simplecastaudio.com/3bb687b0-04af-4257-90f1-39eef4e631b6/episodes/252137a6-26a2-4bf0-8da6-ff321f4f33fa/audio/128/default.mp3?aid=rss_feed&awCollectionId=3bb687b0-04af-4257-90f1-39eef4e631b6&awEpisodeId=252137a6-26a2-4bf0-8da6-ff321f4f33fa&feed=BqbsxVfO',
            'audio/mpeg',
            31505710
          )
        ),
      ],
    },
  ],
  userGeneratedPlaylists: [
    {
      title: 'Jack de Hunter x Hunter',
      episodes: [
        new PodcastEpisode(
          'https://jogabilida.de/?p=19234',
          'https://jogabilida.de',
          'Re:JACK by Crunchyroll #15: Hunter X Hunter (Eleição Presidencial)',
          'https://jogabilida.de/2023/07/rejack-by-crunchyroll-15/',
          `Nossos caçadores votantes reúnem-se para encerrar o anime de Hunter X Hunter discutindo esse último arco cheio de politicagem, poderes estranhos e regras complexas: a Eleição do Presidente Hunter.<ul>\n \t<li><a href="https://got.cr/podcast-jogabilidade">14 Dias Grátis de Crunchyroll</a></li>\n</ul><p><a href="https://contribua.jogabilida.de">Contribua</a> | <a href="https://twitter.com/jogabilidade">Twitter</a> | <a href="https://youtube.com/jogabilidade">YouTube</a> | <a href="https://twitch.tv/jogabilidade">Twitch</a> | <a href="mailto:contato@jogabilida.de">Contato</a></p>`,
          'Mon, 31 Jul 2023 17:17:37 +0000',
          'https://jogabilida.de/wp-content/uploads/2023/07/rejack15-hxh.jpg',
          11091,
          new PodcastAudioFile(
            'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42741/8fc22984d7121e28ed92bef6a7151d58.mp3',
            'audio/mpeg',
            156097629
          )
        ),
        new PodcastEpisode(
          'https://jogabilida.de/?p=19234',
          'https://jogabilida.de',
          'Re:JACK by Crunchyroll #11: Hunter X Hunter (Chimera Ant &#8211; Parte 2)',
          'https://jogabilida.de/2023/07/rejack-by-crunchyroll-15/',
          `Nossos caçadores votantes reúnem-se para encerrar o anime de Hunter X Hunter discutindo esse último arco cheio de politicagem, poderes estranhos e regras complexas: a Eleição do Presidente Hunter.<ul>\n \t<li><a href="https://got.cr/podcast-jogabilidade">14 Dias Grátis de Crunchyroll</a></li>\n</ul><p><a href="https://contribua.jogabilida.de">Contribua</a> | <a href="https://twitter.com/jogabilidade">Twitter</a> | <a href="https://youtube.com/jogabilidade">YouTube</a> | <a href="https://twitch.tv/jogabilidade">Twitch</a> | <a href="mailto:contato@jogabilida.de">Contato</a></p>`,
          'Mon, 31 Jul 2023 17:17:37 +0000',
          'https://jogabilida.de/wp-content/uploads/2023/02/rejack11.jpg',
          11091,
          new PodcastAudioFile(
            'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42741/8fc22984d7121e28ed92bef6a7151d58.mp3',
            'audio/mpeg',
            156097629
          )
        ),
        new PodcastEpisode(
          'https://jogabilida.de/?p=19234',
          'https://jogabilida.de',
          'Re:JACK #10: Hunter X Hunter (Chimera Ant &#8211; Parte 1)',
          'https://jogabilida.de/2023/07/rejack-by-crunchyroll-15/',
          `Nossos caçadores votantes reúnem-se para encerrar o anime de Hunter X Hunter discutindo esse último arco cheio de politicagem, poderes estranhos e regras complexas: a Eleição do Presidente Hunter.<ul>\n \t<li><a href="https://got.cr/podcast-jogabilidade">14 Dias Grátis de Crunchyroll</a></li>\n</ul><p><a href="https://contribua.jogabilida.de">Contribua</a> | <a href="https://twitter.com/jogabilidade">Twitter</a> | <a href="https://youtube.com/jogabilidade">YouTube</a> | <a href="https://twitch.tv/jogabilidade">Twitch</a> | <a href="mailto:contato@jogabilida.de">Contato</a></p>`,
          'Mon, 31 Jul 2023 17:17:37 +0000',
          'https://jogabilida.de/wp-content/uploads/2022/12/rejack-hxh-chimera_capa.jpg',
          11091,
          new PodcastAudioFile(
            'https://media.blubrry.com/bilid/audio.transistor.fm/m/shows/42741/8fc22984d7121e28ed92bef6a7151d58.mp3',
            'audio/mpeg',
            156097629
          )
        ),
      ],
    },
  ],
};

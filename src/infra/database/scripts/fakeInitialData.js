import { database } from './_fakeDB';

//  create table if not exists channel (
//     id integer not null primary key,
//     title varchar(255) not null,
//     website varchar(255) unique not null,
//     authorId integer not null,
//     description TEXT not null,
//     lastPublishDate datetime null,
//     logo varchar(255) not null,
//     feedRSSUrl varchar(255) not null,
//     totalEpisodesQuantity INTEGER not null,
//     FOREIGN KEY(authorId) REFERENCES author(id)
//   );

const subscribedPodcastsQueries = database.subscribedPodcasts.map(
  (channel) =>
    `insert into author (title, website, authorId, description, lastPublishDate, logo, feedRSSUrl, totalEpisodesQuantity) values (${Object.values(
      channel
    ).join(', ')});`
);

const newPodcastEpisodesQueries = database.newPodcastEpisodes.map(
  (channel) =>
    `insert into author (title, website, authorId, description, lastPublishDate, logo, feedRSSUrl, totalEpisodesQuantity) values (${Object.values(
      channel
    ).join(', ')});`
);

export const configDB = `
  insert into author(id, name, email) values(1, 'Jogabilidade', 'admin@jogabilida.de');
  insert into author(id, name, email) values(2, 'B9', 'podcasts@g.globo');
  insert into author(id, name, email) values(3, 'Roman Mars', 'contact@99pi.org');
  insert into author(id, name, email) values(4, 'HD1', 'feeds@halfdeaf.com.br');
  insert into author(id, name, email) values(5, 'Alura', 'paulo.silveira@alura.com.br');
  insert into author(id, name, email) values(6, 'mimimidias', '');
  insert into author(id, name, email) values(7, 'B9', 'podcast@naruhodo.com.br');
  insert into author(id, name, email) values(8, 'Doctor Who Brasil', 'contato@doctorwhobrasil.com.br');
  insert into author(id, name, email) values(9, 'ADeD Studio', 'adrianosbr@gmail.com');
  insert into author(id, name, email) values(10, 'Marcos Beccari', '');
  insert into author(id, name, email) values(11, 'QuebraDev', 'quebradev@gmail.com');
  insert into author(id, name, email) values(12, 'O Alvissareiro', 'tecnico@oalvissareiro.com.br');
`;

export const createTables = `
  create table if not exists channel (
    id integer not null primary key,
    title varchar(255) not null,
    website varchar(255) unique not null,
    authorId integer not null,
    description TEXT not null,
    lastPublishDate datetime null,
    logo varchar(255) not null,
    feedRSSUrl varchar(255) not null,
    totalEpisodesQuantity INTEGER not null,
    FOREIGN KEY(authorId) REFERENCES author(id)
  );
  
  create table if not exists episode (
    id integer not null primary key,
    channelId INTEGER not null,
    title varchar(255) not null,
    link varchar(255) not null,
    description TEXT not null,
    publishDate datetime null,
    banner varchar(255) not null,
    duration varchar(255) not null,
    audioFileId INTEGER not null,
    FOREIGN KEY(channelId) REFERENCES channel(id),
    FOREIGN KEY(audioFileId) REFERENCES audioFile(id)
  );
  
  create table if not exists author (
    id integer not null primary key,
    name varchar(255),
    email varchar(255) unique
  );
  
  create table if not exists audioFile (
    id integer not null primary key,
    url varchar(255) not null,
    length varchar(255) not null,
    fileType varchar(255)
  );
`;

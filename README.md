# Podcast app

## Como instalar

Clone o projeto, abra o terminal na pasta criada e instale as dependências com o NPM:

```bash
npm install
```

Após instalado, rode o projeto Expo:

```bash
npx expo start
```

No terminal irá aparecer um QR Code para abrir o aplicativo com um celular (no iOs basta ler o  QR Code com a câmera e no android é necessário ler com o aplicativo Expo Go).

Alternativamente, você pode apertar `w` com o terminal em foco para abrir a versão web ou apertar `a` se tiver um emulador android rodando no seu computador.

Caso esteja rodando o projeto de dentro do WSL, o QR Code pode não funcionar sem que as portas usadas pelo Expo sejam expostas do WSL para o Windows. Uma solução simples para resolver isso sem mexer nas configurações de portas no firewall é rodar o expo em modo tunnel:

```bash
npx expo start --tunnel
```

## Next Steps

- [x] Fix Player styles and playbackObject persistance to use on AsyncStorage
- [ ] Add iTunes or Spotify API integration on usePodcastSearch()
- [ ] Add feedback to download episode progress on downloads page
- [ ] Add a toast notifications system

## TO DO

- [x] Subscriptions -  Add subscribe to a channel option (a action button in subscribes page and a subscribe button on podcast channel page)
- [ ] Discovery - maybe a tab selector to change view from newest episodes and most listen channels by category
- [ ] Categories - maybe add categories podcast channels
- [ ] useTrackPlayer - Prevent from 2 audios playing at the same time (which make to lose controle on one of them)
- [x] MiniPlayer - Change ellipsis mode to 'tail' instead of 'head'
- [x] PodcastEpisodePage - Change Banner to full-width on mobile
- [x] PodcastEpisodePage - Add scroll to description content
- [ ] PodcastEpisodeCard - Change like button to add to playlist button
- [ ] PodcastEpisodePage - Add download and add to playlist buttons
- [ ] IconButton - Make button icons fixed
- [ ] IconButton - Set default color of icon
- [ ] PlaylistsPage - Fix user playlist width to not overflow from screen
- [x] ProfilePage - Create layout and styles

## Maybe in Future

> Moved playlist feature to future to keep on schedule

- [ ] PlaylistEpisodesPage - Create layout and styles
- [ ] DownloadsPage - Add feature to re-ordenate the episodes, so as to reverse the list order. When playing an episode from here, assume the whole downloaded episodes as a playlist

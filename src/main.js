import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');

albums
  .then(data => renderAlbums(data.albums.items, albumList));

function createMarkup(data) {
  return data.map(album => `
    <div class="list-item" data-album-id="${album.id}">
      <img src="${album.images[2].url}" alt="${album.name}" class="list-image" data-album-id="${album.id}">
      <div class="list-description" data-album-id="${album.id}">
        <p class="list-title" data-album-id="${album.id}">${album.name}</p>
        <p class="list-subtitle" data-album-id="${album.id}">${album.artists[0].name}</p>
      </div>
    </div>`).join('');
}

export default function renderAlbums(data, element) {
  const markup = createMarkup(data);

  element.innerHTML = markup;
}

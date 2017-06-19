import 'jsdom-global/register';
import { expect } from 'chai';

import renderAlbumInfo from '../src/AlbumInfo';

describe('AlbumInfo', () => {

  const data = {
    "album_type" : "album",
    "artists" : [ {
      "name" : "Incubus",
    } ],
    "id" : "6peEdPVO73WtgGah5sEhX4",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
      "width" : 64
    } ],
    "name" : "The Essential Incubus",
    "type" : "album",
    "tracks": {
      "total": 18
    }
  };

  const markup = `
    <img class="album-image" src="https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757" alt="The Essential Incubus">
    <p class="album-title">The Essential Incubus</p>
    <p class="album-artist">Incubus</p>
    <p class="album-counter">18 Músicas</p>
  `;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumInfo(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should return the data', () => {
    const element2 = document.createElement('div');
    expect(renderAlbumInfo(data, element2)).to.be.eql(data);
  });
});

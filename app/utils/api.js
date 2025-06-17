export const fetchSearchImages = async (query, page = 1) => {
  const apiKey = '6f102c62f41998d151e5a1b48713cf13';
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${query}&page=${page}&per_page=20&api_key=${apiKey}&format=json&nojsoncallback=1&extras=url_s`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.photos.photo.map(photo => photo.url_s);
  } catch (err) {
    throw new Error('Search failed');
  }
};

// utils/api.js
export const fetchFlickrImages = async (page = 1) => {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=${page}&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s`
    );
    const data = await response.json();
    const urls = data.photos.photo.map(photo => photo.url_s).filter(Boolean);
    return urls;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

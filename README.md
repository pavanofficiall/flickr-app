# 📸 Flickr Image Gallery App

A React Native mobile app built with Expo that displays recent images from Flickr. Users can also search for images by keyword (like cat, dog, etc.) and enjoy offline caching.

## 🚀 Features

- **Home Page**: Displays recent images from Flickr (with pagination).
- **Drawer Navigation**: Navigate between Home and Search screens.
- **Search Screen**: Search images by keyword with pagination.
- **Offline Support**: Caches images locally for offline viewing.
- **Pull to Refresh**: Refresh recent photos manually.
- **Pagination Loader**: Shows a loader when loading additional images.
- **Snackbar**: Shows retry message on network failure.

## 🛠️ Tech Stack
- React Native (Expo)
- Async Storage (for caching)
- react-navigation (Drawer navigation)
- react-native-paper (for Snackbar UI)
- Flickr API

## 📦 Folder Structure
```
project-root/
├── app/
    ├── utils/
         ├── api.js
         ├── storage.js
    ├── _layout.js
    ├── index.js
    ├── search.js

```

## 📲 Run the App
```bash
# 1. Clone the repo
git clone https://github.com/your-username/flickr-gallery.git
cd flickr-gallery

# 2. Install dependencies
npm install

# 3. Start the app on iOS
npx expo start --ios
```

## 🔑 API Used
- **Recent Images API:**
  `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&...`
- **Search API:**
  `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=cat&...`

## 📄 License

MIT License – Free to use and modify.

---

## 🤝 Credits

Built with ❤️ by Pavan Babar
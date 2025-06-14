# 📷 Flickr Image Gallery App

This is a mobile image gallery app built using **React Native** with **Expo Router**, which fetches recent images from Flickr and supports offline caching. Users can view a drawer-based navigation and see the last viewed images even when offline — similar to Instagram's offline-first behavior.

---

## 🚀 Features

- 🖼️ Displays recent photos using [Flickr API](https://www.flickr.com/services/api/)
- 📦 Offline support via AsyncStorage
- 🧠 Smart caching: refreshes only when the API data changes
- 📱 Designed for iOS with Expo
- 📂 Drawer navigation using Expo Router

---

## 🔧 Tech Stack

- React Native (Expo)
- Expo Router
- AsyncStorage
- NetInfo (network detection)
- Flickr API (`flickr.photos.getRecent`)
- FlatList for image grid

---

## 📂 Folder Structure

```
project-root/
├── app/
│   ├── index.js              # Home screen (Image gallery)
│   └── _layout.js            # Drawer layout (navigation)
├── components/
│   └── ImageGrid.js          # Reusable image grid component
├── utils/
│   ├── api.js                # Flickr API logic
│   └── storage.js            # AsyncStorage caching logic
└── README.md
```

---

## 📸 API Reference

**Flickr API**:
```
https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=YOUR_API_KEY&format=json&nojsoncallback=1&extras=url_s
```

---

## 🧪 How Caching Works

- On app launch:
  - If **offline**, loads image URLs from AsyncStorage
  - If **online**, fetches from Flickr and checks if data is different
    - If yes, updates AsyncStorage
    - If no, loads from cache

---

## 🛠 Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/flickr-gallery.git
cd flickr-gallery

# 2. Install dependencies
npm install

# 3. Start the app on iOS
npx expo start --ios
```

---

## 📼 Submission Instructions

As part of the task, record a 1-minute video showing:
- Images loading
- Drawer working
- Reload when offline (with cached images)

Only send the GitHub repo if asked.

---

## 📄 License

MIT License – Free to use and modify.

---

## 🤝 Credits

Built with ❤️ by [Your Name]  
Flickr API courtesy of Yahoo!
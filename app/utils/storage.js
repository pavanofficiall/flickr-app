import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeImageUrls = async (urls) => {
  try {
    await AsyncStorage.setItem('cachedImages', JSON.stringify(urls));
  } catch (e) {
    console.error("Saving failed", e);
  }
};

export const getCachedImageUrls = async () => {
  try {
    const cached = await AsyncStorage.getItem('cachedImages');
    return cached ? JSON.parse(cached) : null;
  } catch (e) {
    console.error("Reading failed", e);
    return null;
  }
};

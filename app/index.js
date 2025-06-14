import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, RefreshControl } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { fetchFlickrImages } from './utils/api';
import { storeImageUrls, getCachedImageUrls } from './utils/storage';

export default function Home() {
  const [images, setImages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadImages = async () => {
    const isConnected = (await NetInfo.fetch()).isConnected;
    if (!isConnected) {
      const cached = await getCachedImageUrls();
      if (cached) setImages(cached);
    } else {
      const latest = await fetchFlickrImages();
      const cached = await getCachedImageUrls();
      if (JSON.stringify(latest) !== JSON.stringify(cached)) {
        setImages(latest);
        await storeImageUrls(latest);
      } else {
        setImages(cached);
      }
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <FlatList
      data={images}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadImages} />}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={{ width: '48%', height: 150, margin: '1%' }} />
      )}
    />
  );
}

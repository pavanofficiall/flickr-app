import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { fetchFlickrImages } from './utils/api';

export default function HomeScreen() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadImages = async () => {
    try {
      setLoading(true);
      const newImages = await fetchFlickrImages(1);
      setImages(newImages);
      setPage(2); // next page
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async () => {
    if (loadingMore) return;
    setLoadingMore(true);
    try {
      const newImages = await fetchFlickrImages(page);
      setImages(prev => [...prev, ...newImages]);
      setPage(prev => prev + 1);
    } catch (err) {
      console.log('Pagination error:', err);
    } finally {
      setLoadingMore(false);
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
      onEndReached={loadMoreImages}
      onEndReachedThreshold={0.5}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={loadImages} />}
      ListFooterComponent={loadingMore ? <ActivityIndicator size="large" /> : null}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{ width: '48%', height: 150, margin: '1%' }}
        />
      )}
    />
  );
}

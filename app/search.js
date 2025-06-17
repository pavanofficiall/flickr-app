import { useState } from 'react';
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { Snackbar } from 'react-native-paper';
import { fetchSearchImages } from './utils/api';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);
  const [retryAction, setRetryAction] = useState(null);

  const searchImages = async (newSearch = false) => {
    if (loading || (newSearch && !query)) return;
    if (newSearch) {
      setPage(1);
      setResults([]);
    }
    const nextPage = newSearch ? 1 : page;
    const setLoadingFn = newSearch ? setLoading : setLoadingMore;

    try {
      setError(false);
      setLoadingFn(true);
      const images = await fetchSearchImages(query, nextPage);
      setResults(prev => (newSearch ? images : [...prev, ...images]));
      setPage(prev => prev + 1);
    } catch (err) {
      setError(true);
      setRetryAction(() => () => searchImages(newSearch));
    } finally {
      setLoadingFn(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search images..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <Button title="Search" onPress={() => searchImages(true)} />

      <FlatList
        data={results}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => searchImages(false)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loadingMore ? <ActivityIndicator size="large" /> : null}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: '48%', height: 150, margin: '1%' }}
          />
        )}
      />

      <Snackbar
        visible={error}
        onDismiss={() => setError(false)}
        action={{
          label: 'Retry',
          onPress: () => retryAction && retryAction(),
        }}
      >
        Network error. Please try again.
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});
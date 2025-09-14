import { FlashList } from '@shopify/flash-list';
import { MotiView } from 'moti';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '~/components/Text';
import colors from '../../constants/colors';
import Loading from '../Loading';
import { ZeldaListProps } from './types';
import useZeldaListViewModel from './view.model';

const ZeldaList = <T extends { id: number }>({
  data,
  isLoading,
  error,
  renderItem,
  emptyMessage = 'List Empty',
}: ZeldaListProps<T>) => {
  const { listRef, showBackToTop, handleScroll, scrollToTop } =
    useZeldaListViewModel();

  if (isLoading) return <Loading />;
  if (error)
    return (
      <Text>
        Error: {error?.status} {JSON.stringify(error?.message)}
      </Text>
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data?.length === 0 ? (
        <Text>{emptyMessage}</Text>
      ) : (
        <>
          <FlashList
            ref={listRef}
            contentContainerStyle={styles.listContentContainer}
            contentInsetAdjustmentBehavior="automatic"
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => renderItem(item)}
            ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
            keyboardDismissMode="on-drag"
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />
          <MotiView
            style={styles.backToTopButton}
            animate={{
              opacity: showBackToTop ? 1 : 0,
              scale: showBackToTop ? 1 : 0.8,
            }}
            transition={{
              type: 'timing',
              duration: 300,
            }}
            pointerEvents={showBackToTop ? 'auto' : 'none'}
          >
            <TouchableOpacity
              onPress={scrollToTop}
              style={styles.backToTopTouchable}
            >
              <Text style={styles.backToTopText}>↑</Text>
            </TouchableOpacity>
          </MotiView>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    marginVertical: 20,
  },
  listContentContainer: {
    marginTop: 12,
  },
  listSeparator: {
    height: 12,
  },
  backToTopButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  backToTopTouchable: {
    backgroundColor: colors.text,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  backToTopText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ZeldaList;

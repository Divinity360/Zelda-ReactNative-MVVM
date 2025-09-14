import { FlashListRef } from '@shopify/flash-list';
import { useRef, useState } from 'react';

const useZeldaListViewModel = () => {
  const listRef = useRef<FlashListRef<any>>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowBackToTop(offsetY > 500);
  };

  const scrollToTop = () => {
    listRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  return {
    listRef,
    showBackToTop,
    handleScroll,
    scrollToTop,
  };
};

export default useZeldaListViewModel;

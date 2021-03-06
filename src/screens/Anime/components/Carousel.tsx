import React, { useState, useCallback, useRef } from 'react';
import { View, Image, Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './Carousel.styles';

interface ItemProps {
  imageUrl: string;
}

interface CustomCarouselProps {
  imageUrl: string;
}
interface RenderItemProps {
  item: ItemProps;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ imageUrl }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [{ imageUrl }, { imageUrl }, { imageUrl }];
  const carouselRef = useRef<Carousel<ItemProps>>();
  const windowWidth = Dimensions.get('window').width;

  const renderItem = useCallback(({ item }: RenderItemProps) => {
    return (
      <View style={styles.sliderContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        autoplay
        autoplayDelay={5000}
        autoplayInterval={5000}
        ref={carouselRef as React.MutableRefObject<Carousel<ItemProps> | null>}
        data={carouselItems}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
      />

      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default CustomCarousel;

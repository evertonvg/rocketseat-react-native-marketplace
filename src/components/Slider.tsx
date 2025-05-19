import { config } from 'config/gluestack-ui.config';
import React, { useState } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');
const height = 280;

type SliderGalleryProps = {
  images: string[]; 
};

export function SliderGallery({images}: SliderGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSegments = images.length;
  const gap = 6;
  const segmentWidth = (width - gap * (totalSegments - 1)) / totalSegments;

  return (
    <View style={{ height }}>
      <Carousel
        width={width}
        height={height}
        data={images}
        autoPlay
        autoPlayInterval={10000}
        loop
        scrollAnimationDuration={600}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />

      <View style={[styles.progressContainer, { width }]}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              {
                width: segmentWidth,
                height: 4,
                backgroundColor: config.tokens.colors.gray7,
                opacity: currentIndex === index ? 0.9 : 0.4,
                borderRadius: 2,
                marginRight: index !== totalSegments - 1 ? gap : 0,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
});





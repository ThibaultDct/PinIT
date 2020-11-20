import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function BodyContainer() {
  return (
    <View style={styles.bodyContainer}>
        <ScrollView>
            <FlatList
                data={[
                    {src: "https://picsum.photos/1000/100"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                    {src: "https://picsum.photos/1000/1000"},
                ]}
                renderItem={({item}) => (
                    <Image style={styles.item} source={{uri: item.src}} />
                )}
                numColumns={2}>
            </FlatList>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 8,
    top: 0,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
      width: 240,
      height: 240,
  }
});

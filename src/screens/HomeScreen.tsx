import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AutocompleteInput } from "../components/AutocompleteInput";
import { MapViewComponent } from "../components/MapView";

export const HomeScreen: React.FC = () => {
  const [latitude, setLatitude] = useState(3.1319);
  const [longitude, setLongitude] = useState(101.6841);

  const handlePlaceSelect = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };
  return (
    //Input search for only state in Malaysia
    <View style={styles.container}>
      <AutocompleteInput onPlaceSelect={handlePlaceSelect} />
      <MapViewComponent latitude={latitude} longitude={longitude} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

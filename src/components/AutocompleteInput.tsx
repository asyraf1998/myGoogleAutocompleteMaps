import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../redux/actions/placeActions";
import { RootState } from "../store";
import { Input } from "@ant-design/react-native";

interface AutocompleteInputProps {
  onPlaceSelect: (lat: number, lng: number) => void;
}

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  onPlaceSelect,
}) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector(
    (state: RootState) => state.places.searchResults
  );

  const handleSearch = (value: string) => {
    setQuery(value);
    dispatch(fetchPlaces(value));
  };

  const handlePlaceSelect = (place: {
    name: string;
    lat: number;
    lng: number;
  }) => {
    onPlaceSelect(place.lat, place.lng);
    setQuery(place.name);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Input
        value={query}
        onChangeText={handleSearch}
        placeholder="Enter The Location"
        style={styles.input}
      />
      {query && searchResults.length > 0 && (
        //filter the input search based on the mock data for state in Malaysia
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePlaceSelect(item)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

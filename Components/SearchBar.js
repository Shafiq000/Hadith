import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import { useAuthContext } from '../Navigations/AuthContext';
const SearchBar = ({ title }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { themeMode } = useAuthContext();

  return (
    <View style={{ }}>
      <View style={[styles.searchContainer,themeMode == "dark" && { backgroundColor: "#26272C" }]}>
        <Searchbar
          style={[{
            height: 43,
            width: '88%',
            borderColor: 'lightgray',
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#F6F4F5',
          },themeMode == "dark" && { backgroundColor: "#26272C" }]}
          inputStyle={{
            minHeight: 0,
          }}
          
          selectionColor={'#0a9484'}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}

        />
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 90,
    width: '100%',
    elevation: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },

})
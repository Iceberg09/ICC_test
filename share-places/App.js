import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

export default class App extends React.Component {
  state = {
    userLocation: null,
    usersPlaces: []
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.001,
        }
      })
      fetch('https://webhook.site/c17f499f-a06a-4606-85ce-5577e6b673aa', { //one argument only would send a GET request, two arguments are for a POST
        method: 'POST',
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
          .then(res => console.log(res))
          .catch(err => console.log(err));
    }, err => console.log(err));
  }

getUserPlacesHandler = () => {
  console.log("HI MOM!");
  fetch('http://localhost:3000/locations/5caff96b1595d4720ec89f8d') //localhost is only referencing internal "localhost"
          .then(res => res.json())
          .then(parsedRes => {
            const placesArray = [];
            // for (const _id in parsedRes) {
              console.log("Success!!!!!!!!!!")
              placesArray.push({
                latitude: parsedRes.latitude,
                longitude: parsedRes.longitude,
                // id: parsedRes._id,
                // blah: parsedRes.__v,
              });
            // }
            console.log(JSON.stringify(placesArray));
            this.setState({
              userPlaces: placesArray
            })
          })
          .catch(err => console.log(err));
}

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 20}}>
          <Button title="Get User Places" onPress={this.getUserPlacesHandler} />
        </View>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap
        userLocation={this.state.userLocation}
        usersPlaces={this.state.usersPlaces} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

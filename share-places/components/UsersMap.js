import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const UsersMap = (props) => {
	let userLocationMarker = null;
	if (props.userLocation) {
		userLocationMarker = <MapView.Marker coordinate={props.userLocation} />
	}

	const usersMarkers = props.usersPlaces.map(userPlace => <MapView.Marker coordinate={userPlace} key={userPlace.id} />)

    return (
      <View style={styles.mapContainer}>
      	<MapView
	    	style={styles.map}
	    	initialRegion={{
	    		latitude: 37.78825,
	    		longitude: -122.4324,
	        	latitudeDelta: 0.005,
	    		longitudeDelta: 0.001,
	       	}}
	       	region={props.userLocation}> 
	       	{userLocationMarker}
	       	{usersMarkers}
	    </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
	mapContainer: {
		width: '100%',
		height: 200,
		marginTop: 20
	},
	map: {
		width: '100%',
		height: '100%'
	}
})

export default UsersMap;
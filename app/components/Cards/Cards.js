import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image
} from 'react-native';

import Button from '../Partials/Button';
import Header   from '../Partials/Header';
import Modal   from '../Partials/Modal';
import CardList from './CardList';

var window = Dimensions.get('window');

export default (props)=>(

		<View style={styles.container}>

					<Header titleView="MIS TARJETAS" {...props}/>              

	                <View style={styles.main}>
	                						
						<View style={{
							paddingTop:25,
							marginLeft:5,
							marginRight:5,
							marginTop: 15,
							marginBottom: 30,
							borderBottomWidth:2,
							borderBottomColor:'rgba(0,0,0,.15)'
						}}>
	 						<Text style={{fontFamily: 'Varela Round',textAlign:'center',fontSize:18,color: 'black',}}>Recuerda que no compartimos tu información financiera</Text>
						</View>
	 					<CardList />
						<Button text="Editar Tarjeta" invert/>
						<Modal  text="Agregar Tarjeta" message="Some Text" />
						
	                </View>
	    </View>

);

let styles = StyleSheet.create({
	main:{
		flex:21,
		flexDirection:'column',
		backgroundColor:'white',		
		alignItems:'center',		
		justifyContent:'flex-start',
		padding:20,		
		alignSelf: 'stretch'
	},
	container:{

		height:window.height,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
				
	},	
});
'use strict'

import React, { Component } from 'react';
import {Dimensions,View,Image,StyleSheet,Text,ListView} from 'react-native';
import { Container, Content, List, ListItem,Thumbnail,Badge } from 'native-base';
export default class CardList extends Component {
    render() {
        
        
        var window = Dimensions.get('window');      
      
        return (
                <View style={styles.container}>
                    <View style={styles.boxContainer}>

                        <Image source={require('../../img/cards/Visa.png')} style={styles.image}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} >Visa </Text>                            
                            <Text style={styles.body}>Tarjeta 2345 </Text>
                        </View>    
                        <Badge style={styles.badge}> > </Badge>                         
                    </View>
                    <View style={styles.boxContainer}>

                        <Image source={require('../../img/cards/Masterdcard.png')} style={styles.image}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} >Masterdcard </Text>                            
                            <Text style={styles.body}>Tarjeta 2345 </Text>
                        </View>
                        <Badge style={styles.badge}> > </Badge> 
                    </View>
                    <View style={styles.boxContainer}>

                        <Image source={require('../../img/cards/Masterdcard.png')} style={styles.image}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} >Visa </Text>                            
                            <Text style={styles.body}>Tarjeta 2345 </Text>
                        </View>
                        <Badge style={styles.badge}> > </Badge> 
                    </View>

                </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        width : window.width,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        //backgroundColor:'yellow'
    },
    boxContainer:{
        width : window.width,
        flexDirection:'row',
        alignSelf:'stretch',
        justifyContent:'space-around',
        borderTopWidth:2,
        borderColor:'#FFF',
        //backgroundColor:'red'
    },
    textContainer:{
        flexDirection:'column',
        justifyContent:'flex-start'

    },
    title:{
   
        //flex:1
    },
    body:{
        fontSize: 11,
        color: '#eee'
    },
    image:{
        //resizeMode:'contain',
        width:60
    },
    badge:{
        backgroundColor:'rgb(32,76,165)'      
    }
});
// <Container>
//                 <Content >
//                     <List dataArray={items}                     
//                         renderRow={(item) =>
//                             <ListItem >
//                                 <Thumbnail style={{resizeMode: 'contain'}} square size={40} source={
//                                     require('../../img/cards/Visa.png')} />
//                                 <Text>{item}</Text>
//                                 <Text note> 4590 </Text>
//                                 <Badge style={{backgroundColor:'rgb(32,76,165)'}}>></Badge>
//                             </ListItem>
//                         }>
//                     </List>
//                 </Content>
//             </Container>
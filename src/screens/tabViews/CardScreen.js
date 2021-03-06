import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text
       } from 'react-native';

import {styles} from '../../styles/styles';

import CardView from '../../components/QuickCardSummary.js';
import MainCardView from '../../components/QCMainCard.js';

import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';


var kidNames = [
    "Ali",
    "Samantha",
    "Samuel",
    "Sarah"
];


export class CardListScreen extends Component{    
    constructor(props){	
	super(props);
	var data = [];
	for(let i=0; i< 3; i++){
	    var li = Math.floor(Math.random()* kidNames.length);
	    data.push({key: i+"",
				  amount: Math.floor(Math.random()*100)+"",
				  balance: Math.floor(Math.random()*214)+"",
				  progress: Math.floor(Math.random()*100),
				  cardId:kidNames[li]
				 });
	}
	this.state = {
	    data: data
	};	
    }
    
    render(){
	
	return(
	    <View style={styles.cardContainer}>
	      <View
		
		style={{width:"97%"}}
		>
		<MainCardView
		  cardId="My QuickCard"
	    balance={25.3}
		  progress={100}
		  />
	      </View>

	      <View style={{margin:5}}>
		<Text style={styles.title1_style}>Child cards</Text>
	      </View>

	      
	      <FlatList
		data={this.state.data}
		renderItem={
		    ({item}) =>      {
			//let cid = "Card #"+item.key;
			return(<CardView
				     {...item}
				     />);
		    }
	 	
		}
		/>
		<ActionButton
	    buttonColor="rgba(231,76,60,1)"
	    onPress={Actions.addNewCard}	    
		/>	 
		</View>		
	);
    }
}

export default CardListScreen;

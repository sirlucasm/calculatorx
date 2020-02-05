import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: false,
      panelValue: 0,
    }
  }

  getKeyValue = () => {
    //bla bla bla
  };

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ alignSelf:'center', marginVertical:75, }}>
            <Text style={{ color:'#fff', fontSize:28, fontWeight:'bold', letterSpacing:2, }}> CALCULATORX </Text>
          </View>
        </View>
        <View style={styles.display}>
          <View style={{ alignSelf:'flex-end', }}>
            <Text style={{ color:'#000', fontSize:52, }}>{this.state.panelValue}</Text>
          </View>
        </View>
        <View style={styles.keysPart}>
          <View style={{ ...styles.keysOrientation, flexDirection:'row', alignSelf:'center', }}>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>÷</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.keysOrientation, flexDirection:'row', alignSelf:'center', }}>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.keysOrientation, flexDirection:'row', alignSelf:'center', }}>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.keysOrientation, flexDirection:'row', alignSelf:'center', }}>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(value) => { this.getKeyValue(value) }}>
              <Text style={{ ...styles.keys, backgroundColor:'#fd48a9', }}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    backgroundColor:'#e4273d',
    width:'100%',
    height:150,
  },
  display: {
    backgroundColor:'#fff',
    paddingHorizontal:30,
    width:'100%',
    padding:60,
  },
  keysPart: {
    backgroundColor:'#272cd0',
    width:'100%',
    height:'100%',
  },
  keys: {
    fontSize: 38,
    color:'#fff',
    textAlign:'center',
    width:80,
    marginHorizontal:10,
    marginTop:40,
    padding:10,
  },
  keysOrientation: {
    top:10,
  },
});

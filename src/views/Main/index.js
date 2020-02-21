import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import normalize from 'react-native-normalize';

export default class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: false,
      numberKey: [],
      defaultPanelValue: 0,
    }
  }

  getKeyValue = (value) => {
    if( this.state.numberKey.length < 7 )
      this.setState({ numberKey: this.state.numberKey + value });
    this.onPressNumber(value)
  };

  onPressNumber = (value) => {
    if (value == 'AC')
      this.setState({ numberKey: '', defaultPanelValue: 0, });
    else if (this.state.numberKey.includes(' ')) {
      let result = eval(this.state.numberKey)
      this.setState({ numberKey: '', defaultPanelValue: result, });
    }
  }

  // componentDidUpdate = () => {
  //     this.onPressNumber();
  // };

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ alignSelf:'center', marginVertical: normalize(75, 'height'), }}>
            <Text style={{ color:'#fff', fontSize:28, fontWeight:'bold', letterSpacing:2, }}> CALCULATORX </Text>
          </View>
        </View>
        <View style={styles.display}>
          {
          this.state.numberKey!=''?
          <View>
            <TouchableOpacity onPress={ () => this.getKeyValue('AC') } style={{ position:'absolute', top:20, left:-10, }}>
              <Text style={{ fontSize:19, color:'#000', }}>clear</Text>
            </TouchableOpacity>
          </View>
          :
          null
          }
          <View style={{ alignSelf:'flex-end', }}>
            <Text style={{ color:'#000', fontSize:52, }}>{this.state.numberKey!=''?this.state.numberKey:this.state.defaultPanelValue}</Text>
          </View>
        </View>
        <View style={styles.keysPart}>
          <View style={{ ...styles.keysOrientation, flexDirection:'row', alignSelf:'center', }}>
            <TouchableOpacity onPress={ () => this.getKeyValue('+') }>
              <Text style={{ ...styles.keys }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue('-') }>
              <Text style={{ ...styles.keys }}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue('*') }>
              <Text style={{ ...styles.keys }}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue('/') }>
              <Text style={{ ...styles.keys }}>÷</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.keysOrientation, flexDirection:'row', alignSelf:'center', }}>
            <TouchableOpacity onPress={ () => this.getKeyValue(7) }>
              <Text style={{ ...styles.keys }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue(8) }>
              <Text style={{ ...styles.keys }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue(9) }>
              <Text style={{ ...styles.keys }}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue(0) }>
              <Text style={{ ...styles.keys }}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.keysOrientation, flexDirection:'row', alignSelf:'center', }}>
            <TouchableOpacity onPress={ () => this.getKeyValue(4) }>
              <Text style={{ ...styles.keys }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue(5) }>
              <Text style={{ ...styles.keys }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue(6) }>
              <Text style={{ ...styles.keys }}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue('.') }>
              <Text style={{ ...styles.keys }}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.keysOrientation, flexDirection:'row', alignSelf:'center', }}>
            <TouchableOpacity onPress={ () => this.getKeyValue(1) }>
              <Text style={{ ...styles.keys }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue(2) }>
              <Text style={{ ...styles.keys }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue(3) }>
              <Text style={{ ...styles.keys }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.getKeyValue(' ') } disabled={this.state.numberKey!=''?false:true} >
              <Text style={{ ...styles.keys, backgroundColor:'#fd48a9', borderRadius:150, }}>=</Text>
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
    height: normalize(150, 'height'),
  },
  display: {
    backgroundColor:'#fff',
    paddingHorizontal:30,
    width:'100%',
    padding: normalize(60, 'height'),
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
    marginHorizontal: normalize(10, 'width'),
    marginTop: normalize(40, 'height'),
    padding: normalize(10),
  },
  keysOrientation: {
    top: normalize(10, 'height'),
  },
});

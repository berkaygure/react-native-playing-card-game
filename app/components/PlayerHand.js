import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import commonStyle from '../styles';
import * as Actions from '../actions';

class PlayerHand extends React.Component {
  degree = 20;
  screenWidth = 0;

  initAlpha = 0;
  cardsCount = 0;
  angleOfCard = 7;
  step = 4;
  a = 90;
  b = 200;

  constructor(props) {
    super(props);
    this.screenWidth = Dimensions.get('window').width;
  }

  init() {
    this.cardsCount = this.props.playerHand.length;
    this.initAlpha = (180 - this.angleOfCard * (this.cardsCount - 1)) / 2;
    this.beta = (180 - this.step * (this.cardsCount - 1)) / 2 - 15;
    this.betaRad = this.toRadian(this.beta);
    this.x = this.a * Math.cos(this.betaRad);
    this.y = this.b * Math.sin(this.betaRad);
    this.dx = 0;
    this.dy = 0;
  }

  calculateDegree() {
    const transform = [
      {
        translateX: Number.parseInt(this.dx),
      },
      {
        translateY: Number.parseInt(this.dy),
      },
      {
        rotate: this.parseDegree(this.initAlpha),
      },
    ];
    console.log(transform);
    this.beta += this.step;
    this.initAlpha += this.angleOfCard;
    this.betaRad = this.toRadian(this.beta);
    let x2 = this.a * Math.cos(this.betaRad);
    let y2 = this.b * Math.sin(this.betaRad);
    this.dx += this.x - x2;
    this.dy += this.y - y2;
    this.x = x2;
    this.y = y2;

    return transform;
    /*if ((length - 1) / 2 == index) return 0;

    let direction = index < length / 2 ? -1 : 1;

    return direction * (this.degree * 2 / (length - 1));*/
  }

  getIndentWidth(index, length) {
    if (index == 0) return 0;

    let itemsWidth = length * 100;
    let diff = this.screenWidth - 100 - itemsWidth;

    return diff / length;
  }

  parseDegree(degree) {
    return `${degree}deg`;
  }

  getMarginTop(rotation, i, length) {
    if (i < length / 2) {
      return rotation * (length - i);
    } else {
      return rotation * i;
    }
  }

  getCardWrapperStyle(i) {
    //let direction = i < length / 2 ? -1 : 1;
    //const rotation = this.calculateDegree(i, this.props.playerHand.length);
    //const marginTop = this.getMarginTop(rotation, i, length);
    const marginLeft = this.getIndentWidth(i, this.props.playerHand.length);

    return {
      marginLeft: marginLeft,
      //marginTop: Math.abs(marginTop), // * direction,
      //transform: rotation,
    };
  }

  toRadian(degrees) {
    return degrees * Math.PI / 180;
  }

  render() {
    this.init();
    return (
      <ImageBackground
        resizeMode="stretch"
        source={require('../assets/board.png')}
        style={commonStyle.playerArea}>
        {this.props.gameStart ? (
          <View style={commonStyle.topArea}>
            {this.props.playerHand.map((card, i) => {
              return (
                <Animated.View
                  key={i}
                  style={this.getCardWrapperStyle(
                    i,
                    this.props.playerHand.length
                  )}>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={card.image}
                      style={[commonStyle.card]}
                    />
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
          </View>
        ) : (
          <View style={commonStyle.topArea}>
            <Animatable.Text
              style={{
                fontSize: 24,
                color: 'white',
                textAlign: 'center',
              }}
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite">
              {this.props.gameStarting
                ? 'Kartlar Dağıtılıyor...'
                : 'Oyunu Başlatmak İçin Lütfen Ortadaki Desteye Dokunun'}
            </Animatable.Text>
          </View>
        )}
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameStart: state.dataReducer.gameStart,
    playerHand: state.dataReducer.playerHand,
    gameStarting: state.dataReducer.gameStarting,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHand);

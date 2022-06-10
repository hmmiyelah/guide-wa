import React, { Component } from 'react'
import { Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import AppLovinMAX from 'react-native-applovin-max'

import { applovin } from '../utils'

export default class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      nextText: string.done,
      indicator1BgColor: '#C4C4C4FF',
      indicator2BgColor: '#C4C4C400',
    }
    this.viewPager = React.createRef()
  }

  async goToNextPage() {
    AppLovinMAX.showInterstitial(applovin.interstitial)

    this.props.navigation.navigate('Guide', {
      kind: 'newbie',
    })
  }

  setIndicatorColor() {
    if (this.state.currentPage == 0) {
      this.setState({
        nextText: string.next,
        indicator1BgColor: '#C4C4C4FF',
        indicator2BgColor: '#C4C4C400',
      })
    } else if (this.state.currentPage == 1) {
      this.setState({
        nextText: string.done,
        indicator1BgColor: '#C4C4C400',
        indicator2BgColor: '#C4C4C4FF',
      })
    }
  }

  render() {
    return (
      <>
        <Image
          source={require('../assets/images/intro.png')}
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
          }}
          resizeMode='cover'
        />

        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 4,
            right: 8,
            paddingLeft: 16,
            paddingRight: 16,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.goToNextPage()}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 15,
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            {this.state.nextText}
          </Text>
        </TouchableOpacity>
      </>
    )
  }
}

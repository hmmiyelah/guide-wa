import React, { forwardRef } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import AppLovinMAX from 'react-native-applovin-max'

import { applovin } from '../utils'

const NATIVE_AD_UNIT_ID = Platform.select({
  ios: 'ENTER_IOS_NATIVE_AD_UNIT_ID_HERE',
  android: applovin.native,
})

const ApplovinNativeSmall = forwardRef(() => {
  //   const { adUnitId } = props;
  const ref = React.useRef()

  React.useEffect(() => {
    // Native Ad Listeners
    AppLovinMAX.addEventListener('OnNativeAdLoadedEvent', (adInfo) => {
      console.log('Native ad loaded from: ' + adInfo.networkName)
    })
    AppLovinMAX.addEventListener('OnNativeAdLoadFailedEvent', (errorInfo) => {
      console.log(
        'Native ad failed to load with error code ' +
          errorInfo.code +
          ' and message: ' +
          errorInfo.message
      )
    })
    AppLovinMAX.addEventListener('OnNativeAdClickedEvent', (adInfo) => {
      console.log('Native ad clicked')
    })
    AppLovinMAX.addEventListener('OnNativeAdRevenuePaid', (adInfo) => {
      console.log('Native ad revenue paid: ' + adInfo.revenue)
    })
  }, [])

  React.useEffect(() => {
    if (AppLovinMAX.isInitialized()) {
      //   ref.current?.loadAd()
    }
  }, [AppLovinMAX])

  return (
    <AppLovinMAX.NativeAdView
      adUnitId={NATIVE_AD_UNIT_ID}
      placement='myplacement'
      customData='mycustomdata'
      extraParameters={{
        key1: 'value1',
        key2: 'value2',
      }}
      ref={ref}
      style={styles.nativead}
    >
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AppLovinMAX.NativeAdView.IconView style={styles.icon} />
          <AppLovinMAX.NativeAdView.TitleView style={styles.title} />
          <Text style={styles.admark}>AD</Text>
        </View>
        <AppLovinMAX.NativeAdView.MediaView style={styles.mediaView} />
        <AppLovinMAX.NativeAdView.CallToActionView
          style={styles.callToAction}
        />
      </View>
    </AppLovinMAX.NativeAdView>
  )
})

const styles = StyleSheet.create({
  nativead: {
    width: '90%',
    height: 120,
    backgroundColor: '#fff',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 15,
  },
  title: {
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#000',
    flex: 1,
  },
  icon: {
    marginHorizontal: 10,
    height: 30,
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  admark: {
    height: 15,
    width: 20,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  advertiser: {
    height: 15,
    marginRight: 10,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    height: 'auto',
    fontSize: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: '#fff',
  },
  mediaView: {
    flexGrow: 1,
    height: 60,
    width: '100%',
    backgroundColor: 'black',
  },
  callToAction: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlignVertical: 'center', // android only
    color: '#000',
    backgroundColor: '#fff',
  },
})

export default ApplovinNativeSmall

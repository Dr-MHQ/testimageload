import React from 'react'
import {View, Image} from 'react-native'

export const Header = (props) => {
    return(
       <View style={{flex:1, width:null,height:null,}}>
<Image source={require('../img/bg-min.png')} style={{ resizeMode: 'stretch',flex:1}} />
       </View>
    )
}

export default Header
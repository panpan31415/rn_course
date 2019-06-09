import React from 'react'
import { Image } from 'react-native'
import _1 from "./emoji/1.png";
import _2 from "./emoji/2.png";
import _3 from "./emoji/3.png";
import _4 from "./emoji/4.png";
import _5 from "./emoji/5.png";
import _6 from "./emoji/6.png";
import _7 from "./emoji/7.png";
import _8 from "./emoji/8.png";
import _9 from "./emoji/9.png";
import _10 from "./emoji/10.png";
import _11 from "./emoji/11.png";
import _12 from "./emoji/12.png";
import _13 from "./emoji/13.png";
import _14 from "./emoji/14.png";
import _15 from "./emoji/15.png";
import _16 from "./emoji/16.png";
import _17 from "./emoji/17.png";
import _18 from "./emoji/18.png";
import _19 from "./emoji/19.png";
import _20 from "./emoji/20.png";

const Emoji = ({style,index})=>{
    const images = [_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20];
    return  <Image style={style} source={images[(index - 1)%20]} resizeMode="contain" />;
}

export default Emoji;
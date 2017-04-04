/**
 * Created by jiangdikai on 2017/3/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';



var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

/**----导入外部的组件类---**/
var HomeDetail = require('./HomeDetail');

var TopView = require('./HomeTopView');
var MiddleView = require('./HomeMiddleView');
var MiddleBottomView = require('./HomeMiddleBottomView');
var ShopCenter = require('./HomeShopCenter');
var GeustYouLike = require('./HomeGeustYouLike');
var Mine = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页的导航条*/}
                {this.renderNavBar()}
                {/*首页的主要内容*/}
                <ScrollView>
                    {/*头部的View*/}
                    <TopView />
                    {/*中间的内容*/}
                    <MiddleView />
                    {/*中间下半部分的内容*/}
                    <MiddleBottomView
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView = {(url) => this.pushToShopCenterDetail(url)}
                    />
                    {/*猜你喜欢*/}
                    <GeustYouLike />
                </ScrollView>
            </View>
        );
    },
    // 首页的导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                    <Text style={{color:'white',marginLeft:10}}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder="松鼠外卖"
                    style={styles.topInputStyle}
                />
                {/*右边*/}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
    // 跳转到二级界面
    pushToDetail(){
        this.props.navigator.push(
            {
                component: HomeDetail, // 要跳转的版块
                title:'详情页'
            }
        );
    }
});


const styles = StyleSheet.create({
    navBarStyle:{ // 导航条样式
        paddingLeft:10,
        paddingRight:10,
        marginTop: Platform.OS == 'ios' ? 25 : 0,
        height: Platform.OS == 'ios' ? 45 : 45,
        backgroundColor:'#06c1ae',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',

        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    rightNavViewStyle:{

        flexDirection:'row',
        // backgroundColor:'blue',
        height:64,
        // 设置侧轴的对齐方式
        alignItems:'center'
    },

    topInputStyle:{ // 设置输入框
        width:width * 0.65,
        height:Platform.OS == 'ios' ? 28 : 35,
        backgroundColor:'white',

        justifyContent:'space-around',
        fontSize: 12,
        marginTop:8,
        marginLeft:20,
        marginRight:20,
        // 设置圆角
        borderRadius:17,

        // 内左边距
        paddingLeft:20
    },

    navRightImgStyle:{ // 设置图片的大小
        width:Platform.OS == 'ios' ? 28: 24,
        marginRight:10,
        height:Platform.OS == 'ios' ? 28: 24
    },

    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

// 输出组件类
module.exports = Mine;
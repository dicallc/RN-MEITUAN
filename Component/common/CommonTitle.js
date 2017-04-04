/**
 * Created by jiangdikai on 2017/3/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

var commonTitle = React.createClass(
    {
        getDefaultProps(){
            return{
                title: '',  // 标题
                leftImage:'',
                rightimage: ''
            }
        },
        render(){
            return (
                <View style={styles.parentStyle}>
                    {this.renderLeftImage()}


                    <Text style={styles.commonTextStyle}>{this.props.title.length > 0?this.props.title:"更多"}</Text>
                    {this.renderRightImage()}
                </View>
            );
        },
        renderLeftImage(){
            if(this.props.leftImage.length>0){
                return(
                    <TouchableOpacity onPress={() => {
                        alert('点了!')
                    }} style={styles.commonleftViewStyle}>

                        <Image source={{uri: this.props.leftImage}} style={styles.commonnavImageStyle}/>
                    </TouchableOpacity>
                )
            }
        },
        renderRightImage(){
            if(this.props.rightimage.length>0){
                return(
                    <TouchableOpacity onPress={() => {
                        alert('点了!')
                    }} style={styles.commonrightViewStyle}>

                        <Image source={{uri: this.props.rightimage}} style={styles.commonnavImageStyle}/>
                    </TouchableOpacity>
                )
            }
        },
    }
);

const styles = StyleSheet.create({
    commonTextStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    parentStyle: {
        marginTop: Platform.OS == 'ios' ? 25 : 0,
        height: Platform.OS == 'ios' ? 44 : 44,
        backgroundColor: '#06c1ae',
        // 设置主轴的方向
        flexDirection: 'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems: 'center',
        // 主轴方向居中
        justifyContent: 'center'
    },
    commonrightViewStyle: {
        // 绝对定位
        position:'absolute',
        right:10,
    },
    commonleftViewStyle: {
        // 绝对定位
        position:'absolute',
        left:10,
    },
    commonnavImageStyle: {
        width: Platform.OS == 'ios' ? 28 : 24,
        height: Platform.OS == 'ios' ? 28 : 24,
    }

});

// 输出组件类
module.exports = commonTitle;
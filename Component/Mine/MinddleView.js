/**
 * Created by jiangdikai on 2017/3/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

/**-------导入外部的json数据-------***/
var MiddleData = require('./MiddleData.json');

var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },

    renderAllItem(){
        // 定义组件数组
        var itemArr = [];
        // 遍历
        for(var i=0; i<MiddleData.length; i++){
            // 取出单独的数据
            var data = MiddleData[i];
            // 创建组件装入数组
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            );
        }
        // 返回
        return itemArr;
    }
});

// 里面的组件类
var InnerView = React.createClass({
    getDefaultProps(){
        return{
            iconName: '',
            title:''
        }
    },

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri: this.props.iconName}} style={{width:40, height:30, marginBottom:3}}/>
                    <Text style={{color:'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        // 设置主轴的方向
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    innerViewStyle:{
        width:70,
        height:70,

        // 水平和垂直居中
        justifyContent:'center',
        alignItems:'center'
    }
});

// 输出组件类
module.exports = MineMiddleView;
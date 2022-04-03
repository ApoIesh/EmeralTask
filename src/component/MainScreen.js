import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { baseUrl } from '../Config';
import { _getData } from '../actions'
import { connect } from 'react-redux';
import styles, { gray_color, hp, light_gray_color, Primary_color, white_color, wp } from './Assets/style/styles';
import StarRating from 'react-native-star-rating';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class MainScreen extends Component {
    constructor(props) {
        const { _getData } = props
        super(props);
        this.state = {
            starCount: 4,
            sec_border: 0,
            menu: false

        };
        _getData()
    }

    _render_SearchData = ({ item, index }) => {
        return (
            <View
                key={index}
                style={{
                    alignItems: "center",
                    justifyContent: 'center',
                }}>

                <Image
                    resizeMode='cover'
                    resizeMethod='scale'
                    style={{
                        width: wp(11), height: wp(11),
                        borderRadius: wp(11 / 2)
                    }}
                    source={require('./Assets/Images/head.png')}
                />

                <Text style={styles.smallredText} >{'Malika'}</Text>

            </View>
        )
    }

    render() {

        // STATE:
        const { starCount, sec_border, menu } = this.state
        // PROPS:
        const { data } = this.props
        // OTHER
        const nameList = data[0]?.title.split('', 7)

        const flatlist_data = [
            {}, {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {}, {}
        ]

        return (
            <View style={styles.container}>

                <ScrollView
                    scrollEventThrottle={16}
                >

                    <StatusBar
                        animated={true}
                        backgroundColor={white_color}
                        barStyle={'dark-content'}
                    />

                    <View style={styles.headerView}>
                        <TouchableOpacity>
                            <Feather
                                name='arrow-left-circle'
                                size={wp(7)}
                                color={Primary_color}
                            />
                        </TouchableOpacity>
                        <Text style={styles.TitleText}>{'Events'}</Text>
                        <TouchableOpacity
                            onPress={() => this.setState({ menu: !menu })}
                        >
                            <Feather
                                name='more-horizontal'
                                size={wp(7)}
                                color={Primary_color}
                            />
                        </TouchableOpacity>
                    </View>

                    <Image
                        resizeMode='cover'
                        resizeMethod='scale'
                        style={styles.imageView}
                        source={require('./Assets/Images/head.png')}
                    />

                    <View style={styles.TitelText}>
                        <Text style={styles.smallredText}>{'JULY 16TH PM UTC + 04 - JULY 19TH'}</Text>
                        <Text style={styles.boldTitle}>{'Business Development'}</Text>
                        <Text style={styles.boldTitle}>{'Confrence Expert'}</Text>
                        <Text style={styles.TitleText}>{'Online Event'}</Text>

                    </View>

                    <View
                        style={styles.stareView}
                    >
                        <StarRating
                            emptyStarColor={light_gray_color}
                            starStyle={{ color: Primary_color }}
                            starSize={wp(5.5)}
                            containerStyle={{ width: wp(33) }}
                            disabled={true}
                            maxStars={5}
                            rating={starCount}
                        />
                    </View>

                    <View style={styles.sec_view}>

                        <TouchableOpacity style={{
                            ...styles.goingView,
                            borderColor: sec_border == 0 ? Primary_color : light_gray_color,
                            borderWidth: sec_border == 0 ? wp(.7) : wp(.2)

                        }}
                            onPress={() => this.setState({ sec_border: 0 })}
                            activeOpacity={.9}>
                            <Text style={styles.subtTilte}>{'Going'}</Text>
                            <Text style={styles.HeadRedTitle}>{'2K'}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            ...styles.interestedView,
                            borderColor: sec_border == 1 ? Primary_color : light_gray_color,
                            borderWidth: sec_border == 1 ? wp(.7) : wp(.2)
                        }}

                            onPress={() => this.setState({ sec_border: 1 })}
                            activeOpacity={.9}>
                            <Text style={styles.subtTilte}>{'Interested'}</Text>
                            <Text style={styles.HeadRedTitle}>{'76K'}</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        activeOpacity={.9}
                        style={styles.qrView}>
                        <Image
                            resizeMode='cover'
                            resizeMethod='scale'
                            style={styles.qrImage}
                            source={require('./Assets/Images/head.png')}
                        />
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.TitleText}>{'Refer A Friend Via QR Code'}</Text>
                            <Text style={styles.reg_small_text}>{'Get 50% Discount Copouns'}</Text>
                        </View>
                        <Feather
                            name='arrow-right'
                            size={wp(6)}
                            color={gray_color}
                        />

                    </TouchableOpacity>

                    <View style={styles.Sec_line} />

                    <View>

                        <View style={styles.iconsLines}>
                            <MaterialCommunityIcons
                                name='bag-checked'
                                size={wp(6)}
                                color={Primary_color}
                                style={{
                                    marginHorizontal: wp(3)
                                }}
                            />
                            <Text style={styles.TitleText}>{nameList}</Text>
                        </View>

                        <View style={styles.iconsLines}>
                            <Entypo
                                name='location-pin'
                                size={wp(6)}
                                color={Primary_color}
                                style={{
                                    marginHorizontal: wp(3)
                                }}
                            />
                            <Text style={styles.TitleText}>{nameList}</Text>
                        </View>

                        <View style={styles.iconsLines}>
                            <Ionicons
                                name='time-outline'
                                size={wp(6)}
                                color={Primary_color}
                                style={{
                                    marginHorizontal: wp(3)
                                }}
                            />
                            <Text style={styles.TitleText}>{nameList}</Text>
                        </View>

                        <View style={styles.iconsLines}>
                            <FontAwesome
                                name='calendar'
                                size={wp(6)}
                                color={Primary_color}
                                style={{
                                    marginHorizontal: wp(3)
                                }}
                            />
                            <Text style={styles.TitleText}>{nameList}</Text>
                        </View>

                        <View style={styles.iconsLines}>
                            <Ionicons
                                name='pricetag-outline'
                                size={wp(6)}
                                color={Primary_color}
                                style={{
                                    marginHorizontal: wp(3)
                                }}
                            />
                            <Text style={styles.TitleText}>{nameList}</Text>
                        </View>

                        <View style={styles.iconsLines}>
                            <MaterialCommunityIcons
                                name='robot-love-outline'
                                size={wp(6)}
                                color={Primary_color}
                                style={{
                                    marginHorizontal: wp(3)
                                }}
                            />
                            <Text style={styles.TitleText}>{nameList}</Text>
                        </View>

                    </View>

                    <View style={styles.Sec_line} />

                    <View style={styles._titelData}>
                        <Text style={styles.TitleText}>{'More About Event'}</Text>
                    </View>
                    <View style={styles._getData}>
                        <Text style={styles._getDataView}>{data[0]?.body}</Text>
                    </View>

                    <View style={styles.Sec_line} />

                    <View style={styles.searchView}>
                        <Text style={styles.boldTitle_red}>{'Search Friends'}</Text>
                        <View style={styles.iconSearchView}>
                            <Feather
                                name='search'
                                size={wp(6)}
                                color={gray_color}
                                style={{
                                    marginHorizontal: wp(3)
                                }}
                            />
                            <Text style={styles.smallredText}>{'Invite Friends'}</Text>
                        </View>
                    </View>

                    <View>
                        <FlatList
                            style={{ width: wp(86), alignSelf: 'center', marginVertical: hp(2) }}
                            key={'!'}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => <View style={{ width: wp(4) }} />}
                            data={flatlist_data}
                            renderItem={this._render_SearchData}
                            keyExtractor={item => item}
                        />
                    </View>
                </ScrollView >

                {menu ?
                    <View style={styles.Sec_menu}>
                        <View style={styles.line_menu} />
                        <Text style={styles.whiteText}>{'Edit Event'}</Text>
                        <View style={styles.Sec_line_menu} />
                        <Text style={styles.whiteText}>{'Cancel Event'}</Text>
                        <View style={styles.Sec_line_menu} />
                        <Text style={styles.whiteText}>{'Delete Event'}</Text>
                    </View>
                    : null
                }
            </View >
        );
    }
}



const mapStateToProps = ({ auth }) => {
    const {
        data
    } = auth;
    return {
        data
    };
};
export default connect(mapStateToProps, {
    _getData
})(MainScreen);


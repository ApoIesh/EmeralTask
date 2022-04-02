'use strict';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';


export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

// COMMON_COLOR

export const black_color = "#000"
export const white_color = "#fff"
export const gray_color = "#8b8989"
export const light_gray_color = "#cccc"
export const Hover_color = "#efebfa"


// APP_COLOR
export const Primary_color = "#7b2831"



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitleText: {
    fontSize: wp(3.4),
    fontWeight: '700'
  },
  whiteText: {
    fontSize: wp(4),
    color: white_color

  },
  smallredText: {
    fontSize: wp(3.5),
    color: Primary_color,
    fontWeight: '600'
  },
  boldTitle: {
    fontSize: wp(4.5),

    fontWeight: '700'
  },
  subtTilte: {
    fontSize: wp(3),
    fontWeight: '700'
  },
  HeadRedTitle: {
    fontSize: wp(4.8),
    color: Primary_color,
    fontWeight: '700'
  },
  reg_small_text: {
    fontSize: wp(2.8),
    color: gray_color
  },
  Sec_line: {
    width: wp(100),
    height: 1,
    backgroundColor: light_gray_color,
    alignSelf: 'center',
    marginVertical: hp(2)
  },
  iconsLines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1)
  },
  boldTitle_red: {
    fontSize: wp(4),
    color: Primary_color,
    fontWeight: '700'
  },
  headerView: {
    width: wp(100),
    height: hp(10),
    backgroundColor: white_color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2)
  },
  imageView: {
    width: wp(100),
    height: hp(28),
    resizeMode: 'cover',
    marginBottom: hp(1.5)
  },
  TitelText: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  stareView: {
    alignSelf: "center",
    marginBottom: hp(.5),
    marginTop: hp(1.5)
  },
  sec_view: {
    width: wp(92), alignSelf: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginVertical: hp(2),
    alignItems: 'center'
  },
  goingView: {
    width: wp(44),
    height: hp(10),
    borderRadius: wp(4),
    borderWidth: wp(.2),
    backgroundColor: white_color,
    elevation: 2,
    borderColor: light_gray_color,
    alignItems: "center",
    alignContent: 'center',
    justifyContent: 'center'
  },
  interestedView: {
    width: wp(44),
    height: hp(10),
    borderRadius: wp(4),
    borderWidth: wp(.7),
    backgroundColor: white_color,
    elevation: 2,
    borderColor: Primary_color,
    alignItems: "center",
    alignContent: 'center',
    justifyContent: 'center'
  },
  qrView: {
    width: wp(92),
    height: hp(10),
    backgroundColor: light_gray_color,
    borderRadius: wp(3),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    marginVertical: hp(.8)
  },
  qrImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10 / 2)
  },
  _getDataView: {
    fontSize: wp(3.5),
    maxWidth: wp(90),
    lineHeight: hp(3),
    fontWeight: '600',
    textAlign: 'left',
    flexWrap: 'nowrap'
  },
  searchView: {
    width: wp(92), borderRadius: wp(8),
    borderWidth: 1, elevation: 2,
    backgroundColor: white_color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: hp(5.4),
    alignSelf: 'center',
    borderColor: gray_color,
    paddingHorizontal: wp(3),
    paddingVertical: hp(.4),
    marginVertical: hp(1)
  },
  _getData: {
    width: wp(92),
    alignSelf: 'center',
    justifyContent: 'center'
  },
  _titelData: {
    alignItems: 'flex-start',
    paddingHorizontal: wp(4)
  },
  iconSearchView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Sec_line_menu: {
    width: wp(64),
    height: .5,
    backgroundColor: light_gray_color,
    alignSelf: 'center',
    marginVertical: wp(2)
  },
  line_menu: {
    borderWidth: wp(.7),
    width: wp(11),
    alignSelf: 'center',
    marginVertical: wp(3),
    borderColor: light_gray_color,
    borderRadius: wp(1.5),
  },
  Sec_menu: {
    position: 'absolute',
    width: wp(64),
    height: hp(22),
    backgroundColor: Primary_color,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: wp(5),
    marginVertical: wp(13),
  }


});
export default styles;
'use strict';
import { StyleSheet, Dimensions } from 'react-native';

let ScreenWidth = Dimensions.get("window").width;
let borderRadius = 5;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 4,
  },

  input: {
    width: ScreenWidth - 25,
    margin: 5,
    borderRadius: borderRadius,
  },

  checkbox: {
    alignSelf: 'flex-start',
    marginLeft: 12,
  },

  inputErr: {
    width: ScreenWidth - 25,
    margin: 5,
    borderRadius: borderRadius,
    borderColor: 'red',
  },

  button: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
    marginRight : 8,
    marginBottom: 5,
    height: 55,
    borderRadius: borderRadius,
    padding: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#D8D8D8',
  },

  confirm: {
    marginTop: 20,
    width: ScreenWidth - 25,
    minHeight: 55,
    borderRadius: borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  logo: {
    marginTop: 20,
    height: 30,
    maxWidth: ScreenWidth,
    resizeMode: 'center'
  },

  confirmDisabled: {
    backgroundColor: '#CDCDCD'
  },

  titles: {
    paddingBottom: 20,
  },

  buttonText: {
    flex: 11,
    marginLeft: 10,
  },

  buttonLeftIcon: {
    resizeMode: "contain",
    flex: 1,
    width: 25,
    height: 25,
    tintColor: '#3366FF',
  },

  buttonRightIcon: {
    resizeMode: "contain",
    flex: 1,
    width: 25,
    height: 25,
    tintColor: '#3366FF',
  },

  buttonList: {
    borderRadius: borderRadius,
    backgroundColor: "#fff",
  },

  layout: {
    paddingTop: 10,
    paddingBottom: 20,
    flex: 1,
    alignItems: 'center'
  },

  layoutCenter: {
    paddingTop: 50,
    paddingBottom: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  deviceContainer: {
    flex: 1,
    width: ScreenWidth - 20,
    marginBottom: 20,
    borderColor: '#D8D8D8',
    borderWidth: 1,
  },

  device: {
    borderRadius: borderRadius,
    margin: 5,
  },

  paddingTop: {
    paddingTop: 40,
  },

  title: {
    textAlign: 'center',
  },

  heading: {
    marginBottom: 10,
  },

});
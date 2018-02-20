import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "inherit"
    },
    "html": {
        "color": "#555",
        "backgroundColor": "#000"
    },
    "*:before": {
        "boxSizing": "inherit"
    },
    "*:after": {
        "boxSizing": "inherit"
    },
    "section": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "paddingTop": 80,
        "paddingRight": 0,
        "paddingBottom": 80,
        "paddingLeft": 0
    },
    "section:not(patty):nth-child(even)": {
        "backgroundColor": "#f5f5f5"
    },
    "section h3": {
        "textTransform": "capitalize",
        "font": "bold 32px 'Spectral SC', serif",
        "marginBottom": 30,
        "textAlign": "center"
    },
    "section p": {
        "maxWidth": 775,
        "lineHeight": 2,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "marginBottom": 30,
        "textAlign": "center"
    },
    "nav": {
        "display": "flex",
        "justifyContent": "space-evenly",
        "alignItems": "center",
        "paddingBottom": 15,
        "animation": "1s fadein 0.5s forwards",
        "opacity": 0,
        "color": "#fff",
        "zIndex": 100
    },
    "nav a": {
        "opacity": 0.75,
        "color": "#40e0d0",
        "fontSize": 20,
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 15,
        "textDecoration": "none",
        "fontFamily": "'Spectral SC', serif",
        "borderBottom": "1px solid #52c9aa",
        "transition": "color 0.5s ease-out"
    },
    "nav a:hover": {
        "opacity": 1,
        "color": "#3498db",
        "borderBottomColor": "#3498db"
    },
    "patty": {
        "position": "relative",
        "justifyContent": "center",
        "textAlign": "center",
        "minHeight": 100 * vh,
        "color": "#fff"
    },
    "patty background-image": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundSize": "cover",
        "zIndex": -1,
        "backgroundColor": "#80a3db"
    },
    "patty h1": {
        "font": "bold 60px 'Spectral SC', serif",
        "marginBottom": 15,
        "color": "#40e0d0"
    },
    "patty h3": {
        "font": "normal 28px 'Spectral SC', serif",
        "marginBottom": 40,
        "color": "#a8360a"
    },
    "patty-content-area": {
        "opacity": 0,
        "marginTop": 100,
        "animation": "1s slidefade 1s forwards"
    },
    "pictures h2": {
        "color": "#40e0d0",
        "fontSize": 20,
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "borderBottom": "1px solid #52c9aa",
        "fontFamily": "'Spectral SC', serif"
    },
    "img": {
        "width": "100%",
        "height": "100%"
    },
    "gallery": {
        "display": "flex",
        "flexWrap": "wrap"
    },
    "gallery-item": {
        "cursor": "not-allowed",
        "width": 375,
        "height": 375,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "flex": "1 1 calc(25% - 10px)"
    },
    "container": {
        "display": "flex",
        "justifyContent": "center",
        "flexWrap": "wrap",
        "boxSizing": "inherit",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "speeches h2": {
        "textAlign": "center",
        "fontSize": 20,
        "fontFamily": "'Spectral SC', serif",
        "borderBottom": "1px solid #52c9aa",
        "color": "#40e0d0"
    },
    "speech": {
        "display": "flex",
        "flexWrap": "wrap",
        "justifyContent": "center",
        "width": "100%",
        "height": "auto"
    },
    "speech-item": {
        "display": "flex",
        "boxSizing": "border-box",
        "width": 375,
        "height": 375,
        "paddingTop": 20,
        "paddingRight": 15,
        "paddingBottom": 30,
        "paddingLeft": 15
    },
    "speech-img": {
        "width": "100%",
        "height": 0,
        "paddingBottom": "100%",
        "filter": "brightness(40%)",
        "transition": "all 1s ease"
    },
    "speech-img:hover": {
        "filter": "brightness(100%)"
    },
    "footer": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-around",
        "backgroundColor": "#40e0d0",
        "textDecoration": "none",
        "font": "normal 14px 'Spectral SC', serif",
        "color": "#a8360a"
    },
    "footer ul": {
        "display": "flex",
        "listStyle": "none"
    },
    "footer ul li": {
        "marginLeft": 16
    },
    "footer p": {
        "textTransform": "uppercase",
        "opacity": 0.6,
        "alignSelf": "center"
    }
});
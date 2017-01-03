require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BackTrack":[function(require,module,exports){
"use strict";
cc._RFpush(module, '61de9St0mBDAKTFVMeY81yw', 'BackTrack');
// JS/BackTrack.js

cc.Class({
    "extends": cc.Component,

    properties: {
        Name: {
            "default": null,
            type: cc.Node
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.a = cc.Node.getComponent("LoggingOn");
        this.b = this.a.getChildByName("name").getChildByName("EditBoxname");
        this.b.setCString("woshixiaochou");
    },

    BackTrackButton1: function BackTrackButton1() {

        if (self.Name.toString() == null) {
            cc.director.loadScene("StartScene");
            cc.log("this.name.toString()" + this.Name.toString());
        }
    },
    BackTarckButton2: function BackTarckButton2() {
        cc.director.loadScene("StartScene");
    },

    SoilButton: function SoilButton() {
        cc.director.loadScene("SoilLandScene");
    },
    NeedfireButton: function NeedfireButton() {
        cc.director.loadScene("NeedfireLandScene");
    },
    WaterButton: function WaterButton() {
        cc.director.loadScene("WaterLandScene");
    },
    TimberButton: function TimberButton() {
        cc.director.loadScene("TimberLandScene");
    },
    AurumButton: function AurumButton() {
        cc.director.loadScene("AurumLandScene");
    }

});

cc._RFpop();
},{}],"logging":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9e117I67IxF3rJAldrQCjq7', 'logging');
// JS/logging.js

cc.Class({
    "extends": cc.Component,

    properties: {},

    onLoad: function onLoad() {},
    LoggingButton: function LoggingButton() {
        cc.director.loadScene("PersonalInformation");
    }
});

cc._RFpop();
},{}]},{},["BackTrack","logging"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL0pTL0JhY2tUcmFjay5qcyIsImFzc2V0cy9KUy9sb2dnaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2MWRlOVN0MG1CREFLVEZWTWVZODF5dycsICdCYWNrVHJhY2snKTtcbi8vIEpTL0JhY2tUcmFjay5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgTmFtZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hID0gY2MuTm9kZS5nZXRDb21wb25lbnQoXCJMb2dnaW5nT25cIik7XG4gICAgICAgIHRoaXMuYiA9IHRoaXMuYS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJFZGl0Qm94bmFtZVwiKTtcbiAgICAgICAgdGhpcy5iLnNldENTdHJpbmcoXCJ3b3NoaXhpYW9jaG91XCIpO1xuICAgIH0sXG5cbiAgICBCYWNrVHJhY2tCdXR0b24xOiBmdW5jdGlvbiBCYWNrVHJhY2tCdXR0b24xKCkge1xuXG4gICAgICAgIGlmIChzZWxmLk5hbWUudG9TdHJpbmcoKSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTdGFydFNjZW5lXCIpO1xuICAgICAgICAgICAgY2MubG9nKFwidGhpcy5uYW1lLnRvU3RyaW5nKClcIiArIHRoaXMuTmFtZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgQmFja1RhcmNrQnV0dG9uMjogZnVuY3Rpb24gQmFja1RhcmNrQnV0dG9uMigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU3RhcnRTY2VuZVwiKTtcbiAgICB9LFxuXG4gICAgU29pbEJ1dHRvbjogZnVuY3Rpb24gU29pbEJ1dHRvbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU29pbExhbmRTY2VuZVwiKTtcbiAgICB9LFxuICAgIE5lZWRmaXJlQnV0dG9uOiBmdW5jdGlvbiBOZWVkZmlyZUJ1dHRvbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTmVlZGZpcmVMYW5kU2NlbmVcIik7XG4gICAgfSxcbiAgICBXYXRlckJ1dHRvbjogZnVuY3Rpb24gV2F0ZXJCdXR0b24oKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIldhdGVyTGFuZFNjZW5lXCIpO1xuICAgIH0sXG4gICAgVGltYmVyQnV0dG9uOiBmdW5jdGlvbiBUaW1iZXJCdXR0b24oKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlRpbWJlckxhbmRTY2VuZVwiKTtcbiAgICB9LFxuICAgIEF1cnVtQnV0dG9uOiBmdW5jdGlvbiBBdXJ1bUJ1dHRvbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiQXVydW1MYW5kU2NlbmVcIik7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzllMTE3STY3SXhGM3JKQWxkclFDanE3JywgJ2xvZ2dpbmcnKTtcbi8vIEpTL2xvZ2dpbmcuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG4gICAgTG9nZ2luZ0J1dHRvbjogZnVuY3Rpb24gTG9nZ2luZ0J1dHRvbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiUGVyc29uYWxJbmZvcm1hdGlvblwiKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7Il19

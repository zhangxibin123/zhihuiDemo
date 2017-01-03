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
cc.Class({
    extends: cc.Component,

    properties: {
        Name :{
            default : null,
            type : cc.Node,
        },

        
    },

    // use this for initialization
    onLoad: function () {
        this.a = cc.Node.getComponent("LoggingOn");
        this.b = this.a.getChildByName("name").getChildByName("EditBoxname");
        this.b.setCString("woshixiaochou");
    },

    BackTrackButton1 : function()
    {
      
        if(self.Name.toString()==null)
        {
            cc.director.loadScene("StartScene");
            cc.log("this.name.toString()"+this.Name.toString());
        }
            
        
    },
    BackTarckButton2 :function()
    {
        cc.director.loadScene("StartScene");
    },
    
    SoilButton :function()
    {
        cc.director.loadScene("SoilLandScene");
    },
    NeedfireButton :function()
    {
        cc.director.loadScene("NeedfireLandScene");
    },
    WaterButton :function()
    {
        cc.director.loadScene("WaterLandScene");
    },
    TimberButton :function()
    {
        cc.director.loadScene("TimberLandScene");
    },
    AurumButton :function()
    {
        cc.director.loadScene("AurumLandScene");
    },
    
});

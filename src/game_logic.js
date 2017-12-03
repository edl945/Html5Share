(function () {

    var Ease = Laya.Ease;
    var Event = Laya.Event;
    var Handler = Laya.Handler;
    var SoundManager = Laya.SoundManager;
    var Sprite = Laya.Sprite;
    var Tween = Laya.Tween;
    var playerList = null;
    var currentWord = null;

    function GameLogic() {
        var _this = this;
        GameLogic.super(_this);
        
        _this.initGame();
    }

    Laya.class(GameLogic, "GameLogic", Sprite);

    var _proto = GameLogic.prototype;

    _proto.initGame = function () {
        var _this = this;
        playerList = new LList();

        //初始化测试数据
        _this.initTestData();
    }

    _proto.initTestData = function(){
        if (playerList != null){
            playerList = null;
            playerList =new LList();
        }
                
        var testarray =  [
            "\"name\":\"小骨头\", \"words\":\"xia,li,ba,ren\", \"time\":3",
            "\"name\":\"两条老腊肉\", \"words\":\"ren,zhi,yi,jin\", \"time\":6",
            "\"name\":\"阳光下的白爷\", \"words\":\"jin,guo,ying,xiong\", \"time\":1",
            ];
        var urljson = JSON.stringify(testarray);
        console.log("urljson: " +  urljson);
        var newArr = JSON.parse(urljson);
        this.initWithJson(urljson);
    }

    _proto.initWithJson = function(jsonstr){
        var newArr = JSON.parse(jsonstr);   
        for(var i=0;i < newArr.length;i++)
        {            
            var str = "{" + newArr[i] + "}";
            var userinfo = JSON.parse(str);
            playerList.insert(userinfo.name, new player(userinfo.name,userinfo.words,userinfo.time));   
            currentWord = userinfo;//refresh everytime
        }
        console.log("initWithJson ");                    
    }

    _proto.dumpPlayerList = function(){
        playerList.dump();
        console.log("dump UserList");
    }

    _proto.getUserList = function(){
        return playerList;
    }

    _proto.currentWord = function(){
        return currentWord;
    }

})();

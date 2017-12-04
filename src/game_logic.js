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
        var Lid = LoadUrlGetValues('id');
        if (Lid != null && Lid.length > 10)
        {
            _this.genDataFromUrl(Lid);
        }  
        else
            _this.initTestData();        
    }

    _proto.initTestData = function(){
        if (playerList != null){
            playerList = null;
            playerList = new LList();
        }
        var testarray =  [
            "\"name\":\"翻腾大王\", \"words\":\"xia,li,ba,ren\", \"time\":12",
            "\"name\":\"一条成年老腊肉\", \"words\":\"ren,ru,fu,zhong\", \"time\":26",
            "\"name\":\"白影\", \"words\":\"zhong,liu,di,zhu\", \"time\":11",
            "\"name\":\"艾伦要iPhone\", \"words\":\"zhu,bao,ping,an\", \"time\":15",
            "\"name\":\"艾莲胖\", \"words\":\"an,jian,shang,ren\", \"time\":28",
            ];

        var urljson = JSON.stringify(testarray);
        console.log("urljson: " +  urljson);
        var newArr = JSON.parse(urljson);
        this.initWithJson(urljson);

        // var clipboard = new Clipboard('.js-copy', {
        //     text: function() {
        //         console.log("adfadf");
        //         return '这里被复制的内容';
        //     }
        // });
        // clipboard.on('success', function(e) {
        //     alert('复制成功');
        // });        

        // var clipboard = new Clipboard('.btn');         
        // clipboard.on('success', function(e) { 
        //     var msg = e.trigger.getAttribute('aria-label'); 
        //     alert(msg); 
        //     e.clearSelection(); 
        // }); 

        //this.genJsonStr();
    }

    _proto.genDataFromUrl = function(jsonstr)
    {
        if(jsonstr != null)
        {
            if (playerList != null){
                playerList = null;
                playerList =new LList();
            }                    
            var urljson = jsonstr;
            var newArr = JSON.parse(urljson);
            this.initWithJson(urljson);
        }
    }

    _proto.genJsonStr = function()
    {
        var arr = playerList.arr;
        var jsonstr = "";
        for (var x = 0; x < arr.length; x++) {
            console.log(arr[x].value);
            var player = arr[x].value;
            if(x == arr.length-1)
                jsonstr += "\"" + "\\\"name\\\":\\\""+ player.UserName() + "\\\", \\\"words\\\":\\\"" + player.Pinyins() + "\\\", \\\"time\\\":" + player.Time() + "\"";
            else            
                jsonstr += "\"" + "\\\"name\\\":\\\""+ player.UserName() + "\\\", \\\"words\\\":\\\"" + player.Pinyins() + "\\\", \\\"time\\\":" + player.Time() + "\",";
        }
        jsonstr = "[" + jsonstr + "]";    
        console.log("urljson: "+ jsonstr);
        return jsonstr;
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
    
    _proto.pinyinArray = function()
    {
        var arr = currentWord.words.split(",");
		return arr;
    }
})();

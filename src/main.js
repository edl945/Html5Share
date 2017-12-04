(function () {
    var Stage = Laya.Stage;
    var Handler = Laya.Handler;
    var WebGL = Laya.WebGL;
    var Loader = Laya.Loader;
    var Stat = Laya.Stat;
    var Sprite = Laya.Sprite;
    var Event = Laya.Event;
    //var Browser = Laya.utils.Browser;
    var Font = Laya.Font;

    (function () {
        Laya.init(750, 1334);

        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;

        Laya.stage.screenMode = Stage.SCREEN_NONE;
        Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
        Laya.stage.frameRate = Stage.FRAME_SLOW;

        Laya.stage.bgColor = "#232628";
        
        var txt = new Laya.Text();
        txt.text="";            
        txt.align="center";
        txt.valign="middle";
        txt.color = "#FFFFFF";
        txt.width = 750;
        txt.height = 1334;
        txt.fontSize = 40;                
        Laya.stage.addChild(txt);
        this.text_loading = txt;

        init();
    })();

    function init() {
        var res = [];
        res.push({url: "res/atlas/main_ui.atlas", type: Loader.ATLAS});
        res.push({url: "res/atlas/pic.atlas", type: Loader.ATLAS});
        res.push({url: "res/atlas/pic/letters.atlas", type: Loader.ATLAS});
        res.push({url: "res/atlas/pic/scrollbar.atlas", type: Loader.ATLAS});
        
        res.push({url: "res/atlas/pic/letters.png", type: Loader.IMAGE});
        res.push({url: "res/atlas/pic/scrollbar.png", type: Loader.IMAGE});
        res.push({url: "res/atlas/main_ui.png", type: Loader.IMAGE});
        res.push({url: "res/atlas/pic.png", type: Loader.IMAGE});
        res.push({url: "res/atlas/pic1.png", type: Loader.IMAGE});
        //res.push({url: "res/atlas/DFYuanW7-GB2312.ttf", type: Loader.FONT});
        
//      {url:"sound/enemy3_out.mp3", type:Loader.SOUND}

        //for native
        // var arr = Laya.loader.getRes("res/atlas/DFYuanW7-GB2312.ttf");
        // console.log(arr);
        // if(Browser.window.conch){
        //     Browser.window.conch.setFontFaceFromBuffer("DFYuanW7",arr);
        //     this.text_loading.font = "DFYuanW7";
        // }

        // var xhr = new XMLHttpRequest();
        // xhr.responseType = 'arraybuffer';
        // xhr.open('GET', "res/atlas/DFYuanW7-GB2312.ttf", true);
        // xhr.onload = function () 
        // {
        //     //Browser.window.conch.setFontFaceFromBuffer("DFYuanW7", xhr.response);
        //    // setInterval(onDrawFrame, 15);
        //    console.log('>>>download ttf success :');
        // };
        // xhr.onerror = function (e) 
        // {
        //     console.log('>>>download ttf error :' + e);
        // };
        // xhr.send(null);

        Laya.loader.load(res, Handler.create(this, onComplete), Handler.create(this,onProgress));
    }

    function onComplete() {
        var gameManager = new GameManager();
        Laya.stage.addChild(gameManager);
    }
    function onProgress(loadNum)
    {
        console.log(Font.defaultFont);
        Font.defaultFont = '25px DFYuanW7';
        console.log(Font.defaultFont);

        //显示加载进度
        console.log("Loading:" + loadNum);
        this.text_loading.text = "资源加载中，当前进度：" + parseInt(loadNum*100) + "%";
    }
})();

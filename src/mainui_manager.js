(function () {

    var Ease = Laya.Ease;
    var Event = Laya.Event;
    var Handler = Laya.Handler;
    var SoundManager = Laya.SoundManager;
    var Sprite = Laya.Sprite;
    var Tween = Laya.Tween;
	var Loader = laya.net.Loader;

	var _parent;
	var _gamelogic;
	var defaultFont = "DFYuanW7";

	function onListRender(item, index)
	{
		//自定义list的渲染方式
		var userlist = _gamelogic.getUserList();
		
		var userinfo = userlist.at(index);
		console.log( userinfo.UserName() + userinfo.Time());
		var boxview = item.getChildByName("boxview");
		boxview.getChildByName("playername").text = userinfo.UserName();
		boxview.getChildByName("playertime").text = userinfo.Time();

		var wordspanel = boxview.getChildByName("words");
		var words = userinfo.Words();
		wordspanel.pinyin1.text = CC2PY(words[0]);
		wordspanel.word1.text = words[0];
		wordspanel.pinyin2.text = CC2PY(words[1]);
		wordspanel.word2.text = words[1];
		wordspanel.pinyin3.text = CC2PY(words[2]);
		wordspanel.word3.text = words[2];
		wordspanel.pinyin4.text = CC2PY(words[3]);
		wordspanel.word4.text = words[3];
	}
	function main_ui()
	{
		var Event = laya.events.Event;
		main_ui.super(this);

		var btnStart = this.btnStart;
		var btnResult = this.btnResult;
		var wordspanel = this.topicpanel;
		var keyboard = this.keyboard;
		var panelSuccess =this.popup_success;
		var panelFailed = this.popup_overtime;
		var focusedPinyin = null;
		var currentFocusIndex = 0;

        var userlist = _gamelogic.getUserList();
		this.render.dataSource = {slider: 50, scroll: 80, progress: 0.2, label: {color: "#ff0000", text: "Hello LayaAir"}};
		var arr = [];		//list赋值，先获得一个数据源数组
		var listLength = userlist.count();
		for (var i = 0; i < listLength; i++) {			
			arr.push({label: "item " + i, clip: i % 9});			
		}		
		this.lst_players.array = arr;//给list赋值更改list的显示			
		this.lst_players.renderHandler = new Handler(this, onListRender);//还可以自定义list渲染方式，可以打开下面注释看一下效果

		keyboard.y = 1337;
		panelFailed.visible = false;
		panelSuccess.visible = false;
		this.result_title.font = defaultFont;

		btnResult.on(Event.CLICK, this, onBtnReadmeClick);
		btnStart.on(Event.CLICK, this, onBtnStartClick);

		registerKeyboard();

		switchToReady();
		
		function switchToReady()
		{
			wordspanel.pinyin1.text = "";
			wordspanel.word1.text = "";
			wordspanel.pinyin2.text = "";
			wordspanel.word2.text = "";
			wordspanel.pinyin3.text = "";
			wordspanel.word3.text = "";
			wordspanel.pinyin4.text = "";
			wordspanel.word4.text = "";
		}

		function activeWordIndex(flashwords, index)
		{
			var wordsArray = [wordspanel.word1,wordspanel.word2,wordspanel.word3,wordspanel.word4];
			wordspanel.flashnode.removeChildren();

			var flasharr = new Array();
			for(var i=0;i<flashwords.length;i++)
			{
				var newlabel = new Laya.Label(flashwords[i]);
				newlabel.width = wordspanel.flashnode.width;
				newlabel.height = wordspanel.flashnode.height;
				newlabel.fontSize = wordspanel.flashnode.fontSize;
				newlabel.align = wordspanel.flashnode.align;
				newlabel.valign = wordspanel.flashnode.valign;
				newlabel.color = wordspanel.flashnode.color;
				wordspanel.flashnode.addChild(newlabel);
				flasharr[i]=newlabel;
			}
			var framecount = 0;
			var flashroot = wordspanel.flashnode;
			function onLoop()
			{
				framecount++;
				var childcount = flasharr.length;
				var currentIndex = framecount%childcount;
				//console.log("frame "+ currentIndex);
				for(var i=0;i<childcount;i++)
				{
					if(i == currentIndex)
						flasharr[i].visible = true;
					else
						flasharr[i].visible = false;
				}
			}
        	//创建一个帧循环，更新容器位置
			Laya.timer.frameLoop(10, this, onLoop)
		}

		function switchToBegin(flashwords)
		{
			console.log(this.topicpanel);
			var words = _gamelogic.currentWord().words;

			//add flash effect on word1
			activeWordIndex(flashwords, 0);
			wordspanel.pinyin1.text = CC2PY(words[0]);
			wordspanel.word1.text = "";
			wordspanel.pinyin2.text = "";
			wordspanel.word2.text = "?";
			wordspanel.pinyin3.text = "";
			wordspanel.word3.text = "?";
			wordspanel.pinyin4.text = "";
			wordspanel.word4.text = "?";

			moveFocus(currentFocusIndex);
		}

		function moveFocus(index)
		{
			var pinyinarrowcells = [
				wordspanel.pinyin_arr1,
				wordspanel.pinyin_arr2,
				wordspanel.pinyin_arr3,
				wordspanel.pinyin_arr4
			];
			var pinyincells = [
				wordspanel.pinyin1,
				wordspanel.pinyin2,
				wordspanel.pinyin3,
				wordspanel.pinyin4
			];
			for(var i=0;i<pinyinarrowcells.length;i++)
			{
				pinyinarrowcells[i].visible = (i==index);
			}
			focusedPinyin = pinyincells[index];
		}

		var timeinterval = 250;
		function movePanelToGamemode()
		{
			function onTween()
			{
				console.log("tween over 1");
				var flashwords = "圆缘预案";
				switchToBegin(flashwords);
			}
			Tween.to(btnStart,{x:-150},timeinterval,Laya.Ease.cubicOut,Handler.create(this,onTween));
			Tween.to(btnResult,{x:750},timeinterval,Laya.Ease.cubicOut,Handler.create(this,null));
			Tween.to(keyboard,{y:911},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));
		}
		function movePanelToRady()
		{
			function onTween()
			{
				console.log("tween over 2");
			}
			Tween.to(btnStart,{x:235},timeinterval,Laya.Ease.cubicOut,Handler.create(this,onTween));
			Tween.to(btnResult,{x:434},timeinterval,Laya.Ease.cubicOut,Handler.create(this,null));
			Tween.to(keyboard,{y:1337},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));
		}

		function onBtnReadmeClick()
		{			
		//	Laya.stage.removeChild(this);
			_parent.showReadme();
			console.log("btn readme pressed");
		}

		function onBtnStartClick()
		{			
			//Laya.stage.removeChild(this);
			//_parent.showGameUI();
			movePanelToGamemode();
			console.log("btn start pressed");
		}

		function registerKeyboard()
		{
			function onKeyEnter(sendEvent)
			{
				console.log("Key: " + sendEvent.target.label);
				if (focusedPinyin != null)
				{
					focusedPinyin.text = focusedPinyin.text + sendEvent.target.label;
				}
			}
			function onDelWords()
			{
				console.log("Key: del");
				if (focusedPinyin != null)
				{
					var newwords ="";
					// for(var i=0;i<focusedPinyin.text.length-1;i++)
					// newwords = newwords + focusedPinyin.text[i];
					focusedPinyin.text = newwords;
				}
			}
			function onRetun()
			{
				console.log("Key: ok");
				if(currentFocusIndex < 3)
					currentFocusIndex ++;
				else
				{
					panelSuccess.visible = true;
				}
				moveFocus(currentFocusIndex);
			}
			keyboard.btn_a.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_b.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_c.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_d.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_e.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_f.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_g.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_h.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_i.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_j.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_k.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_l.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_m.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_n.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_o.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_p.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_q.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_r.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_s.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_t.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_u.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_v.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_w.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_x.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_y.on(Event.CLICK, this, onKeyEnter);
			keyboard.btn_z.on(Event.CLICK, this, onKeyEnter);

			keyboard.btn_del.on(Event.CLICK, this, onDelWords);
			keyboard.btn_ok.on(Event.CLICK, this, onRetun);
		}
	}

	Laya.class(main_ui, "main_ui", main_uiUI);

    function mainuiManager() {
        var _this = this;
        mainuiManager.super(_this);		
    }

    Laya.class(mainuiManager, "mainuiManager", Sprite);

    var _proto = mainuiManager.prototype;
    _proto.init_ui = function (parent, gamelogic)
    {
		_parent = parent;
		_gamelogic = gamelogic;
        function onAssetLoaded()
		{
			Laya.stage.addChild(new main_ui());
		}
		
		Laya.loader.load("res/atlas/pic.json", Handler.create(this, null), null, Loader.ATLAS);
		Laya.loader.load("res/atlas/main_ui.json", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
    }
})();
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
	var pinyinSize = 25;
	var chengyuSize = 45;

	function formatWordPanel(wordspanel)
	{
		formatText(wordspanel.pinyin1, pinyinSize);
		formatText(wordspanel.word1, null);
		formatText(wordspanel.pinyin2, pinyinSize);
		formatText(wordspanel.word2, null);
		formatText(wordspanel.pinyin3, pinyinSize);
		formatText(wordspanel.word3, null);
		formatText(wordspanel.pinyin4, pinyinSize);
		formatText(wordspanel.word4, null);
	}

	function onListRender(item, index)
	{
		//自定义list的渲染方式
		var userlist = _gamelogic.getUserList();
		
		var userinfo = userlist.at(index);
		console.log( userinfo.UserName() + userinfo.Time());
		var boxview = item.getChildByName("boxview");
		boxview.getChildByName("playername").text = userinfo.UserName();
		boxview.getChildByName("playertime").text = userinfo.Time();

		var wordpanel = boxview.getChildByName("words");
		var words = checkIfChengyuMatch(userinfo.Pinyins()) ;
		var pinyinarray = userinfo.PinyinArray();
		wordpanel.pinyin1.text = pinyinarray[0];
		wordpanel.word1.text = words[0];
		wordpanel.pinyin2.text = pinyinarray[1];
		wordpanel.word2.text = words[1];
		wordpanel.pinyin3.text = pinyinarray[2];
		wordpanel.word3.text = words[2];
		wordpanel.pinyin4.text = pinyinarray[3];
		wordpanel.word4.text = words[3];

		formatWordPanel(wordpanel);
	}

	function main_ui()
	{
		var Event = laya.events.Event;
		main_ui.super(this);

		var btnStart = this.btn_start;
		var btnRule = this.btn_rule_ready;
		var btnBtnPanel = this.readyPanel;
		var wordspanel = this.topicpanel;
		var mytopicpanel = this.pan_mytopic;
		var keyboard = this.keyboard;
		var panelSuccess =this.popup_success;
		var panelFailed = this.popup_overtime;
		var countDownNumber = this.countDownNumber;
		var recordPanel = this.pan_result;

		var focusedPinyin = null;
		var currentFocusIndex = 1;

        var userlist = _gamelogic.getUserList();
		this.render.dataSource = {slider: 50, scroll: 80, progress: 0.2, label: {color: "#ff0000", text: "Hello LayaAir"}};
		var arr = [];		//list赋值，先获得一个数据源数组
		var listLength = userlist.count();
		for (var i = 0; i < listLength; i++) {			
			arr.push({label: "item " + i, clip: i % 9});			
		}		
		this.lst_players.array = arr;//给list赋值更改list的显示			
		this.lst_players.renderHandler = new Handler(this, onListRender);//还可以自定义list渲染方式，可以打开下面注释看一下效果
		this.lst_players.scrollBar.value = 9999;


		keyboard.y = 1337;
		panelFailed.visible = false;
		panelSuccess.visible = false;
		countDownNumber.visible = false;
		this.result_title.font = defaultFont;

		btnRule.on(Event.CLICK, this, onBtnReadmeClick);
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
			formatWordPanel(wordspanel);
		}
		var toastpanel = this.toast;
		var toastmsg = this.toastMsg;
		function showToastMsg(msg)
		{
			toastpanel.visible = true;
			toastmsg.text = msg;
			function hideToast()
			{
				toastpanel.visible = false;
			}
			Laya.timer.once(1000,this,hideToast);
		}

		var wordsArray = [wordspanel.word1,wordspanel.word2,wordspanel.word3,wordspanel.word4];
		var loopfunc = null;
		function unflashTheWord(index)
		{
			wordspanel.flashnode.removeChildren();
			Laya.timer.clear(this, loopfunc)
		}
		function flashTheWord(flashwords, index)
		{
			wordspanel.flashnode.removeChildren();
			var flasharr = new Array();
			var framecount = 0;
			var flashroot = wordspanel.flashnode;
			for(var i=0;i<flashwords.length;i++)
			{
				var newlabel = new Laya.Label(flashwords[i]);
				formatText(wordspanel.flashnode, null);
				newlabel.width = wordspanel.flashnode.width;
				newlabel.height = wordspanel.flashnode.height;
				newlabel.fontSize = wordspanel.flashnode.fontSize;
				newlabel.align = wordspanel.flashnode.align;
				newlabel.valign = wordspanel.flashnode.valign;
				newlabel.color = wordspanel.flashnode.color;
				newlabel.visible = false;
				wordspanel.flashnode.addChild(newlabel);
				flasharr[i] = newlabel;
			}
			loopfunc = function onLoop()
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
			Laya.timer.frameLoop(10, this, loopfunc)
		}

		function switchToBegin(flashwords, lastPinyin)
		{
			console.log(this.topicpanel);

			//add flash effect on word1
			flashTheWord(flashwords, 0);
			wordspanel.pinyin1.text = lastPinyin.toUpperCase();
			wordspanel.word1.text = "";
			wordspanel.pinyin2.text = "";
			wordspanel.word2.text = "?";
			wordspanel.pinyin3.text = "";
			wordspanel.word3.text = "?";
			wordspanel.pinyin4.text = "";
			wordspanel.word4.text = "?";

			moveFocus(currentFocusIndex);
		}

		var pinyincells = [
				wordspanel.pinyin1,
				wordspanel.pinyin2,
				wordspanel.pinyin3,
				wordspanel.pinyin4
			];
		function moveFocus(index)
		{
			var pinyinarrowcells = [
				wordspanel.pinyin_arr1,
				wordspanel.pinyin_arr2,
				wordspanel.pinyin_arr3,
				wordspanel.pinyin_arr4
			];
		
			for(var i=0;i<pinyinarrowcells.length;i++)
			{
				pinyinarrowcells[i].visible = (i==index);
			}
			focusedPinyin = pinyincells[index];
		}

		var countdownleft = 30;
		var countloopfunc = null;
		function startCountDown()
		{
			countdownleft = 30;
			countDownNumber.visible = true;			
			countloopfunc = function onLoop()
			{
				countdownleft--;
				countDownNumber.text = countdownleft.toString();
				if(countdownleft == 0)
				{
					panelFailed.visible = true;
					Laya.timer.clear(this, countloopfunc)
				}
			}
        	//创建一个帧循环，更新容器位置
			Laya.timer.frameLoop(30, this, countloopfunc)
		}

		var timeinterval = 250;
		function movePanelToGamemode()
		{
			function onTween()
			{
				console.log("tween over 1");
				var words = _gamelogic.currentWord().words;
				var lastPInyin = getLastPinin(words);
				if(lastPInyin != null){
					var tempstr = checkIfChengyuMatch(lastPInyin);
 					var arr = tempstr.split(",");
					var flashwords = "";
					for(var i=0;i<arr.length;i++)
						flashwords += arr[i];
					switchToBegin(flashwords, lastPInyin);

					startCountDown();
				}
			}
			Tween.to(btnBtnPanel,{y:1337},timeinterval,Laya.Ease.cubicOut,Handler.create(this,onTween));
			Tween.to(keyboard,{y:911},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));
			Tween.to(mytopicpanel,{y:500},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));			
			Tween.to(recordPanel,{y:-100},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));						
		}
		function movePanelToRady()
		{
			function onTween()
			{
				console.log("tween over 2");
			}
			Tween.to(btnBtnPanel,{x:911},timeinterval,Laya.Ease.cubicOut,Handler.create(this,onTween));
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
					if(focusedPinyin.text.length > 5)
						showToastMsg("你不觉得这拼音太长了么");
					else
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
				if(pinyincells[currentFocusIndex].text.trim().length == 0)
				{
					console.log(currentFocusIndex + "！不能为空");			
					showToastMsg("请输入拼音后再点OK！");	
				}
				else
				{								
					var pinyinstr = "";
					for(var i=0;i<pinyincells.length;i++)
					{
						var text = pinyincells[i].text.trim();
						if (text.length > 0)
							pinyinstr += text + ",";					
					}
					if(pinyinstr[pinyinstr.length-1] == ",")
					{
						var newwords = "";
						for(var i=0;i<pinyinstr.length-1;i++)
							newwords = newwords + pinyinstr[i];
						pinyinstr = newwords;
					}

					var checkResult = checkIfChengyuMatch(pinyinstr);
					if (checkResult != null)
					{
						var resstrcount = checkResult.length; //可能这么多词
						resstrcount = Math.min(resstrcount, currentFocusIndex+1);//不能超过当前最大数字

						for(var i=0;i<resstrcount;i++)
							wordsArray[i].text = checkResult[i];

						if(currentFocusIndex < 3)
							currentFocusIndex ++;
						else
						{
							Laya.timer.clear(this, countloopfunc);
							panelSuccess.visible = true;
						}
						unflashTheWord(0);
						moveFocus(currentFocusIndex);
					}
					else
						showToastMsg("这拼音不对，删了重来！");
				}								
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
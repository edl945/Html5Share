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
		
		console.log(boxview._playericoframe);
		var icoindex = index % 9;
		boxview.getChildByName("playericoframe").getChildByName("playerico").skin = "pic/avatar/" + icoindex + ".jpg";		

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
		
		if (_gamelogic.getUserList().count() - 1 == index)
		{
			wordpanel._mask.visible = true;
		}

		formatWordPanel(wordpanel);
	}

	function main_ui()
	{
		var Event = laya.events.Event;
		main_ui.super(this);

		var btnStart = this.btn_start;
		var btnRule = this.btn_rule_ready;
		var btnRecord = this.btn_record;
		var btnCloseRecord = this.btn_record;
		var btn_enter_history = this.btn_enter_history;

		var btnBtnPanel = this.readyPanel;
		var btn_rule_success = this.btn_rule_success;
		var btn_rule_fail = this.btn_rule_fail;
		var mytopicplayerinfopanel = this.mytopicplayerinfopanel;

		var btn_share = this.btn_share;
		var btnshareUrl = this.shareUrl;

		var wordspanel = this.topicpanel;
		var mytopicpanel = this.pan_mytopic;
		var lasttopicPanelUnshown = this.lasttopicPanel_unshown;
		var lasttopicpanel = this.lasttopicpanel;
		var keyboard = this.keyboard;
		var panelSuccess =this.popup_success;
		var panelFailed = this.popup_overtime;
		var countDownNumber = this.countDownNumber;
		var recordPanel = this.pan_result;
		var shareUrl_dialog  = this.shareUrl_dialog;

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
		recordPanel.y = -1337;
		panelFailed.visible = false;
		panelSuccess.visible = false;
		countDownNumber.visible = false;
		btnCloseRecord.visible = false;

		btnRule.on(Event.CLICK, this, onBtnReadmeClick);
		btnStart.on(Event.CLICK, this, onBtnStartClick);
		btn_enter_history.on(Event.CLICK, this, onBtnShowRecord);
		btnCloseRecord.on(Event.CLICK, this, onBtnHideRecord);
		btn_rule_success.on(Event.CLICK, this, onBtnReadmeClick);
		btn_rule_fail.on(Event.CLICK, this, onBtnReadmeClick);			
		btn_share.on(Event.CLICK, this, onGenShreUrl);
		

		registerKeyboard();

		switchToReady();
					
		var toastTime = 2000;

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
		var toast_avatar_pic = this.toast_avatar_pic;
		var toastMsg_words = this.toastMsg_words;

		function showToastMsg(msg, playerinfo)
		{
			toastpanel.visible = true;
			toastmsg.text = "我已经用过了";
			toastMsg_words.text = msg;
			toast_avatar_pic.skin = "pic/avatar/" + playerinfo.index + ".jpg";
			
			SoundManager.playSound("sound/tip.mp3");
			function hideToast()
			{
				toastpanel.visible = false;
			}
			Laya.timer.once(toastTime,this,hideToast);
		}

		var chatpanel = this.chat;
		var chatMsg = this.chatMsg;
		var chatMsg_pingyin = this.chatMsg_pingyin;
		chatpanel.visible = false;
		function showChatMsg(msg, pinyin)
		{
			chatpanel.visible = true;
			chatMsg.text = msg;
			chatMsg_pingyin.text = pinyin;
			SoundManager.playSound("sound/tip.mp3");
			function hideChat()
			{
				chatpanel.visible = false;
			}
			Laya.timer.once(toastTime, this, hideChat);
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
			var flashnodearr = [
				wordspanel.flashnode1,
				wordspanel.flashnode2,
				wordspanel.flashnode3,
				wordspanel.flashnode4
			];
			var flashnode = flashnodearr[index];
			flashnode.removeChildren();
			var flasharr = new Array();
			var framecount = 0;
			var flashroot = flashnode;
			for(var i=0;i<flashwords.length;i++)
			{
				var newlabel = new Laya.Label(flashwords[i]);
				formatText(flashnode, null);
				newlabel.width = flashnode.width;
				newlabel.height = flashnode.height;
				newlabel.fontSize = flashnode.fontSize;
				newlabel.align = flashnode.align;
				newlabel.valign = flashnode.valign;
				newlabel.color = flashnode.color;
				newlabel.visible = false;
				flashnode.addChild(newlabel);
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
			btn_enter_history.visible = false;

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
		var DEF_TIME = 30;
		var countdownleft = DEF_TIME;
		var countloopfunc = null;
		function startCountDown()
		{
			countdownleft = DEF_TIME;
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
					lasttopicPanelUnshown.visible = false;			

					tempstr = checkIfChengyuMatch(words);
					lasttopicpanel.word1.text = tempstr[0];
					lasttopicpanel.word2.text = tempstr[1];
					lasttopicpanel.word3.text = tempstr[2];
					lasttopicpanel.word4.text = tempstr[3];		
					tempstr = _gamelogic.pinyinArray()
					lasttopicpanel.pinyin1.text = tempstr[0].toUpperCase();
					lasttopicpanel.pinyin2.text = tempstr[1].toUpperCase();
					lasttopicpanel.pinyin3.text = tempstr[2].toUpperCase();
					lasttopicpanel.pinyin4.text = tempstr[3].toUpperCase();
				}
			}
			Tween.to(btnBtnPanel,{y:1337},timeinterval,Laya.Ease.cubicOut,Handler.create(this,onTween));
			Tween.to(keyboard,{y:911},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));
			Tween.to(mytopicpanel,{y:100},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));			
			recordPanel.visible = false;
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
			//document.write("<button class='btn' data-clipboard-text='这里是要复制的内容' aria-label='复制成功！'>复制</button> ");
			_parent.showReadme();
			console.log("btn readme pressed");
			SoundManager.playSound("sound/click.mp3");
		}

		function onGenShreUrl()
		{			
			shareUrl_dialog.visible = true;			
			var pinyinwords = wordspanel.pinyin1.text.trim() + "," + wordspanel.pinyin2.text.trim() + "," +wordspanel.pinyin3.text.trim() + "," +wordspanel.pinyin4.text.trim();
            _gamelogic.getUserList().insert("这是一个成功者", new player("这是一个成功者", pinyinwords.toLowerCase(), 30 - countdownleft));
			btnshareUrl.text = window.location + "?id=" + _gamelogic.genJsonStr();
		}

		function onBtnStartClick()
		{			
			movePanelToGamemode();
			SoundManager.playSound("sound/click.mp3");
			console.log("btn start pressed");
		}

		function onBtnShowRecord()
		{
			btnCloseRecord.visible = true;
			btn_enter_history.visible = false;
		
			Tween.to(recordPanel,{y:0},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));
			SoundManager.playSound("sound/click.mp3");
			console.log("onBtnShowRecord");
		}
		function onBtnHideRecord()
		{
			btnCloseRecord.visible = false;
			btn_enter_history.visible = true;

			Tween.to(recordPanel,{y:-1337},timeinterval,Laya.Ease.cubicIn,Handler.create(this,null));
			SoundManager.playSound("sound/click.mp3");
			console.log("onBtnHideRecord");
		}

		function registerKeyboard()
		{
			function onKeyEnter(sendEvent)
			{
				console.log("Key: " + sendEvent.target.name);
				SoundManager.playSound("sound/click.mp3");
				if (focusedPinyin != null)
				{
					if(focusedPinyin.text.length > 5)
						showChatMsg("","你不觉得这拼音太长了么");
					else
						focusedPinyin.text = focusedPinyin.text + sendEvent.target.name.toUpperCase();
				}
			}
			function onDelWords()
			{
				console.log("Key: del");
				SoundManager.playSound("sound/click.mp3");
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
				function checkFinished()
				{
					var checkResult = checkIfChengyuMatch(pinyinstr);
					if(checkResult)
					{
						var historyRescord = _gamelogic.getUserList().Exist(pinyinstr);
						if(historyRescord)
						{
							showToastMsg(checkResult, historyRescord);
							return false;							
						}
						else
						{
							Laya.timer.clear(this, countloopfunc);
							panelSuccess.visible = true;
							shareUrl_dialog.visible = false;
							return true;	
						}						
					}
					else
					{
						showChatMsg("不是一个成语！", pinyinstr);	
						return false;							
					}			
				}

				SoundManager.playSound("sound/click.mp3");
				if(pinyincells[currentFocusIndex].text.trim().length == 0)
				{
					console.log(currentFocusIndex + "！不能为空");			
					showChatMsg("","请输入拼音后再点OK！");	
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

					var anyresult = checkIfChengyuMatch(pinyinstr);
					if(anyresult != null && anyresult.length == 4 && checkFinished())
					{
						return;
					}

					//var checkSingleResult = checkIfChengyuMatch(pinyincells[currentFocusIndex].text.trim());
					var checkSingleResult = PY2CC(pinyincells[currentFocusIndex].text.trim().toLowerCase());
					if(checkSingleResult == null)
						checkSingleResult = "这个拼音有问题";						

					var checkResult = "";//
					if (checkSingleResult != null)
					{
						var resstrcount = checkResult.length; //可能这么多词
						resstrcount = Math.min(resstrcount, currentFocusIndex+1);//不能超过当前最大数字

						for(var i=0;i<currentFocusIndex+1;i++)
						{
							//wordsArray[i].text = checkResult[i];
							wordsArray[i].text = "";
						}							
						
						if(currentFocusIndex == 3)
						{
							checkFinished();
						}
						currentFocusIndex ++;

						flashTheWord(checkSingleResult ,currentFocusIndex-1);
						moveFocus(currentFocusIndex);
						currentFocusIndex = Math.min(3, currentFocusIndex);
					}
					else
						showChatMsg("","这拼音不对，删了重来！");
				}								
			}

			function clickBack(sendEvent)
			{
				if(sendEvent.target.name == "pinyin2")
				{
					currentFocusIndex = 1;
				}
				else if(sendEvent.target.name == "pinyin3")
				{
					currentFocusIndex = 2;
				}
				else if(sendEvent.target.name == "pinyin4")
				{
					currentFocusIndex = 3;					
				}
				moveFocus(currentFocusIndex);
			}			
			wordspanel.pinyin2.on(Event.CLICK, this, clickBack);
			wordspanel.pinyin3.on(Event.CLICK, this, clickBack);
			wordspanel.pinyin4.on(Event.CLICK, this, clickBack);



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

			function initTheLastMan()
			{
				var userlist = _gamelogic.getUserList();
				var index = _gamelogic.getUserList().count();
				var userinfo = userlist.at(index-1);			
				var icoindex = index % 9;
				mytopicplayerinfopanel.player_name.text = userinfo.UserName();
				mytopicplayerinfopanel.player_no.text = index + "楼："; 
				mytopicplayerinfopanel.player_no.visible = true;
				mytopicplayerinfopanel.player_ico.skin = "pic/avatar/" + icoindex + ".jpg";		
			}
			initTheLastMan();
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
		
		Laya.loader.load("res/atlas/pic.atlas", Handler.create(this, null), null, Loader.ATLAS);
		Laya.loader.load("res/atlas/main_ui.atlas", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
    }
})();
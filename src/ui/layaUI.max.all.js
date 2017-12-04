var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var game_uiUI=(function(_super){
		function game_uiUI(){
			
		    this.keyboard=null;
		    this.keyboard_bg=null;
		    this.btn_q=null;
		    this.btn_w=null;
		    this.btn_e=null;
		    this.btn_r=null;
		    this.btn_t=null;
		    this.btn_y=null;
		    this.btn_u=null;
		    this.btn_i=null;
		    this.btn_o=null;
		    this.btn_p=null;
		    this.btn_a=null;
		    this.btn_s=null;
		    this.btn_d=null;
		    this.btn_f=null;
		    this.btn_g=null;
		    this.btn_h=null;
		    this.btn_j=null;
		    this.btn_k=null;
		    this.btn_l=null;
		    this.btn_del=null;
		    this.btn_z=null;
		    this.btn_x=null;
		    this.btn_c=null;
		    this.btn_v=null;
		    this.btn_b=null;
		    this.btn_n=null;
		    this.btn_m=null;
		    this.btn_ok=null;

			game_uiUI.__super.call(this);
		}

		CLASS$(game_uiUI,'ui.game_uiUI',_super);
		var __proto__=game_uiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(game_uiUI.uiView);

		}

		game_uiUI.uiView={"type":"View","props":{"width":750,"height":419},"child":[{"type":"View","props":{"y":0,"x":0,"width":750,"var":"keyboard","height":419},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"keyboard_bg","skin":"pic/keyboard_bg.png"}},{"type":"Button","props":{"y":10,"x":19,"width":65,"var":"btn_q","name":"q","labelSize":50,"labelFont":"Arial","labelBold":true,"labelAlign":"center","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/Q.png"}}]}]},{"type":"Button","props":{"y":10,"x":91,"width":65,"var":"btn_w","name":"w","labelSize":50,"labelBold":true,"labelAlign":"center","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/W.png"}}]}]},{"type":"Button","props":{"y":10,"x":163,"width":65,"var":"btn_e","name":"e","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/E.png"}}]}]},{"type":"Button","props":{"y":10,"x":235,"width":65,"var":"btn_r","name":"r","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/R.png"}}]}]},{"type":"Button","props":{"y":10,"x":307,"width":65,"var":"btn_t","name":"t","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/T.png"}}]}]},{"type":"Button","props":{"y":10,"x":379,"width":65,"var":"btn_y","name":"y","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/Y.png"}}]}]},{"type":"Button","props":{"y":10,"x":451,"width":65,"var":"btn_u","name":"u","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/U.png"}}]}]},{"type":"Button","props":{"y":10,"x":523,"width":65,"var":"btn_i","name":"i","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/I.png"}}]}]},{"type":"Button","props":{"y":10,"x":595,"width":65,"var":"btn_o","name":"o","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/O.png"}}]}]},{"type":"Button","props":{"y":10,"x":667,"width":65,"var":"btn_p","name":"p","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/P.png"}}]}]},{"type":"Button","props":{"y":155,"x":49,"width":65,"var":"btn_a","name":"a","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/A.png"}}]}]},{"type":"Button","props":{"y":155,"x":121,"width":65,"var":"btn_s","name":"s","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/S.png"}}]}]},{"type":"Button","props":{"y":155,"x":193,"width":65,"var":"btn_d","name":"d","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/D.png"}}]}]},{"type":"Button","props":{"y":155,"x":265,"width":65,"var":"btn_f","name":"f","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/F.png"}}]}]},{"type":"Button","props":{"y":155,"x":337,"width":65,"var":"btn_g","name":"g","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/G.png"}}]}]},{"type":"Button","props":{"y":155,"x":409,"width":65,"var":"btn_h","name":"h","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/H.png"}}]}]},{"type":"Button","props":{"y":155,"x":481,"width":65,"var":"btn_j","name":"j","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/J.png"}}]}]},{"type":"Button","props":{"y":155,"x":553,"width":65,"var":"btn_k","name":"k","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/K.png"}}]}]},{"type":"Button","props":{"y":155,"x":625,"width":65,"var":"btn_l","name":"l","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/L.png"}}]}]},{"type":"Button","props":{"y":300,"x":523,"width":76,"var":"btn_del","name":"del","labelColors":"#ff0000","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_del.png"}}]},{"type":"Button","props":{"y":300,"x":19,"width":65,"var":"btn_z","name":"z","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/Z.png"}}]}]},{"type":"Button","props":{"y":300,"x":91,"width":65,"var":"btn_x","name":"x","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/X.png"}}]}]},{"type":"Button","props":{"y":300,"x":163,"width":65,"var":"btn_c","name":"c","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/C.png"}}]}]},{"type":"Button","props":{"y":300,"x":235,"width":65,"var":"btn_v","name":"v","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/V.png"}}]}]},{"type":"Button","props":{"y":300,"x":307,"width":65,"var":"btn_b","name":"b","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/B.png"}}]}]},{"type":"Button","props":{"y":300,"x":379,"width":65,"var":"btn_n","name":"n","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/N.png"}}]}]},{"type":"Button","props":{"y":300,"x":451,"width":65,"var":"btn_m","name":"m","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/M.png"}}]}]},{"type":"Button","props":{"y":300,"x":607,"width":123,"var":"btn_ok","name":"ok","labelColors":"#0000ff","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_ok.png"},"child":[{"type":"Image","props":{"skin":"pic/letters/OK.png"}}]}]}]}]};
		return game_uiUI;
	})(View);
var main_uiUI=(function(_super){
		function main_uiUI(){
			
		    this.pan_mytopic=null;
		    this.lasttopicpanel=null;
		    this.lasttopicPanel_unshown=null;
		    this.topicpanel=null;
		    this.your_answer=null;
		    this.countdown=null;
		    this.countDownNumber=null;
		    this.keyboard=null;
		    this.popup_success=null;
		    this.shareUrl=null;
		    this.btn_share=null;
		    this.btn_rule_success=null;
		    this.popup_overtime=null;
		    this.btn_moments=null;
		    this.btn_rule_fail=null;
		    this.readyPanel=null;
		    this.btn_rule_ready=null;
		    this.btn_start=null;
		    this.pan_result=null;
		    this.lst_players=null;
		    this._boxview=null;
		    this._playerico=null;
		    this._playername=null;
		    this._playertime=null;
		    this.btn_record=null;
		    this.toast=null;
		    this.toastMsg=null;
		    this.toast_avatar_pic=null;
		    this.toastMsg_words=null;
		    this.chat=null;
		    this.chatMsg=null;
		    this.chatMsg_pingyin=null;

			main_uiUI.__super.call(this);
		}

		CLASS$(main_uiUI,'ui.main_uiUI',_super);
		var __proto__=main_uiUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.wordsUI",ui.wordsUI);
			View.regComponent("ui.playerinfoUI",ui.playerinfoUI);
			View.regComponent("ui.game_uiUI",ui.game_uiUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(main_uiUI.uiView);

		}

		main_uiUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"pic/temp_main.png"}},{"type":"Image","props":{"y":0,"x":0,"skin":"pic/background.png"}},{"type":"Panel","props":{"y":142,"x":0,"width":750,"var":"pan_mytopic","height":860},"child":[{"type":"words","props":{"y":168,"x":115,"var":"lasttopicpanel","runtime":"ui.wordsUI"}},{"type":"View","props":{"y":164,"x":109,"var":"lasttopicPanel_unshown"},"child":[{"type":"Image","props":{"skin":"pic/lasttopic_unshown.png"}},{"type":"Label","props":{"y":197,"x":154,"text":"开始答题后揭晓","fontSize":30,"color":"#5d343a","bold":true,"align":"center"}}]},{"type":"View","props":{"y":430,"x":-4,"width":750,"height":123},"child":[{"type":"words","props":{"y":204,"x":115,"var":"topicpanel","runtime":"ui.wordsUI"}},{"type":"Label","props":{"y":96,"x":57,"var":"your_answer","text":"你的答案：","fontSize":27,"font":"SimSun","color":"#a7433e","bold":true}},{"type":"Label","props":{"y":-37,"x":289,"width":108,"var":"countdown","valign":"middle","text":"倒计时：","height":62,"fontSize":30,"color":"#a7433e","bold":true,"align":"center"}},{"type":"Label","props":{"y":-44,"x":399,"width":83,"var":"countDownNumber","valign":"middle","text":"30","height":75,"fontSize":80,"font":"SimSun","color":"#a7433e","bold":true,"align":"center"}}]},{"type":"playerinfo","props":{"y":37,"x":43,"runtime":"ui.playerinfoUI"}}]},{"type":"game_ui","props":{"y":911,"x":0,"width":750,"var":"keyboard","height":419,"runtime":"ui.game_uiUI"}},{"type":"View","props":{"y":0,"x":0,"width":750,"var":"popup_success","height":1334},"child":[{"type":"TextInput","props":{"y":1016,"x":80,"wordWrap":true,"width":611,"var":"shareUrl","text":"shareUrl","multiline":true,"height":91,"fontSize":20,"editable":false}},{"type":"Image","props":{"y":58,"x":53,"skin":"pic/popup_success.png"}},{"type":"Button","props":{"y":1112,"x":71,"width":286,"var":"btn_share","labelSize":30,"labelFont":"SimSun","labelColors":"#ffffff","labelBold":true,"label":"邀请好友答题","height":99},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"pic/button_red.png"}}]},{"type":"Button","props":{"y":1112,"x":410,"width":286,"var":"btn_rule_success","labelSize":30,"labelColors":"#ffffff","labelBold":true,"label":"规则说明","height":99},"child":[{"type":"Image","props":{"skin":"pic/button_red.png"}}]}]},{"type":"View","props":{"y":0,"x":0,"width":750,"var":"popup_overtime","height":1334},"child":[{"type":"Image","props":{"y":52,"x":39,"skin":"pic/popup_overtime.png"}},{"type":"Button","props":{"y":1112,"x":71,"width":286,"var":"btn_moments","labelSize":30,"labelFont":"SimSun","labelColors":"#ffffff","labelBold":true,"label":"    向朋友求助","height":99},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"pic/button_red.png"}},{"type":"Image","props":{"y":21,"x":24,"width":49,"skin":"pic/icon_monents.png","height":49}}]},{"type":"Button","props":{"y":1112,"x":410,"width":286,"var":"btn_rule_fail","labelSize":30,"labelColors":"#ffffff","labelBold":true,"label":"规则说明","height":99},"child":[{"type":"Image","props":{"skin":"pic/button_red.png"}}]}]},{"type":"View","props":{"y":917,"x":0,"width":750,"var":"readyPanel","height":419},"child":[{"type":"Button","props":{"y":211,"x":417,"width":286,"var":"btn_rule_ready","labelSize":30,"labelColors":"#ffffff","labelBold":true,"label":"规则说明","height":99},"child":[{"type":"Image","props":{"skin":"pic/button_red.png"}}]},{"type":"Button","props":{"y":211,"x":78,"width":286,"var":"btn_start","labelSize":30,"labelFont":"SimSun","labelColors":"#ffffff","labelBold":true,"label":"开始答题（限时30秒）","height":99},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"pic/button_red.png"}}]}]},{"type":"Panel","props":{"y":0,"x":0,"width":750,"var":"pan_result","height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"pic/background.png","sizeGrid":"5,5,5,5","height":1334}},{"type":"List","props":{"y":77,"x":0,"width":750,"var":"lst_players","vScrollBarSkin":"pic/scrollbar/1p_trans.png","repeatY":10,"repeatX":1,"height":1179},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"name":"render","height":305},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"pic/temp_listbox.png"}},{"type":"View","props":{"y":13,"x":117,"var":"_boxview","name":"boxview"},"child":[{"type":"words","props":{"y":104,"x":44,"name":"words","runtime":"ui.wordsUI"}},{"type":"Image","props":{"y":10,"x":14,"skin":"pic/player_avatar_bg.png"},"child":[{"type":"Image","props":{"y":2,"x":2,"width":64,"var":"_playerico","name":"playerico","height":64}}]},{"type":"Label","props":{"y":28,"x":102,"var":"_playername","text":"这是一个人的名字","name":"playername","fontSize":30,"font":"SimSun","color":"#533c3b","bold":true}},{"type":"Label","props":{"y":30,"x":513,"width":36,"var":"_playertime","text":"30","name":"playertime","height":34,"fontSize":27,"font":"SimSun","color":"#533c3b","bold":true,"align":"right"},"child":[{"type":"Label","props":{"y":1,"x":34,"text":"s","fontSize":27,"font":"SimSun","color":"#533c3b","bold":true}}]}]},{"type":"Image","props":{"skin":"pic/list_scrollbar.png"}}]}]},{"type":"Button","props":{"y":1254,"x":0,"width":750,"var":"btn_record","skin":"main_ui/btn_ok.png","sizeGrid":"3,3,3,3","labelSize":50,"labelAlign":"center","label":"^","height":80}}]},{"type":"View","props":{"y":394,"x":0,"width":372,"visible":false,"var":"toast","height":141},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"pic/tip_warning_bg.png"}},{"type":"Label","props":{"y":50,"x":106,"width":233,"var":"toastMsg","valign":"middle","text":"已经被我使用过啦！","height":59,"fontSize":25,"font":"SimSun","color":"#5d343a","bold":true,"align":"left"}},{"type":"Image","props":{"y":31,"x":30,"width":64,"var":"toast_avatar_pic","height":64}},{"type":"Label","props":{"y":15,"x":106,"width":233,"var":"toastMsg_words","valign":"middle","text":"“呼风唤雨”","height":59,"fontSize":25,"font":"SimSun","color":"#a7433e","bold":true,"align":"left"}}]},{"type":"View","props":{"y":232,"x":172,"width":421,"var":"chat","height":141},"child":[{"type":"Image","props":{"skin":"pic/tip_chat_bg.png"}},{"type":"Label","props":{"y":50,"x":60,"width":344,"var":"chatMsg","valign":"middle","text":"不是成语哦！","height":59,"fontSize":25,"font":"SimSun","color":"#5d343a","bold":true,"align":"center"}},{"type":"Label","props":{"y":11,"x":61,"width":344,"var":"chatMsg_pingyin","valign":"middle","text":"\"HU HA HU HA\"","height":59,"fontSize":25,"font":"SimSun","color":"#a7433e","bold":true,"align":"center"}}]}]};
		return main_uiUI;
	})(View);
var playerinfoUI=(function(_super){
		function playerinfoUI(){
			
		    this.player_name=null;
		    this.player_no=null;
		    this.player_ico=null;

			playerinfoUI.__super.call(this);
		}

		CLASS$(playerinfoUI,'ui.playerinfoUI',_super);
		var __proto__=playerinfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(playerinfoUI.uiView);
		}

		STATICATTR$(playerinfoUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":480,"height":80},"child":[{"type":"Label","props":{"y":26,"x":182,"var":"player_name","text":"这是一个人的名字","fontSize":30,"color":"#5d343a","bold":true}},{"type":"Label","props":{"y":26,"x":4,"visible":false,"var":"player_no","text":"1楼","fontSize":30,"color":"#a7433e","bold":true}},{"type":"Image","props":{"y":7,"x":73,"skin":"pic/player_avatar_bg.png"},"child":[{"type":"Image","props":{"y":2,"x":2,"width":64,"var":"player_ico","height":64}}]}]};}
		]);
		return playerinfoUI;
	})(View);
var readme_uiUI=(function(_super){
		function readme_uiUI(){
			
		    this.btn_iknow=null;

			readme_uiUI.__super.call(this);
		}

		CLASS$(readme_uiUI,'ui.readme_uiUI',_super);
		var __proto__=readme_uiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(readme_uiUI.uiView);
		}

		STATICATTR$(readme_uiUI,
		['uiView',function(){return this.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"pic/blackmask.png","sizeGrid":"2,2,2,2","height":1334,"alpha":0.8}},{"type":"Image","props":{"y":305,"x":84,"width":595,"skin":"pic/rule.png","height":719,"alpha":0.9}},{"type":"View","props":{"y":649,"x":84,"width":480,"visible":false,"height":93},"child":[{"type":"Image","props":{"y":-272,"x":218,"skin":"pic/rule_title.png"},"child":[{"type":"Image","props":{"y":213,"x":-115,"skin":"pic/rule_underline.png"}},{"type":"Image","props":{"y":303,"x":-115,"skin":"pic/rule_underline.png"}},{"type":"Image","props":{"y":401,"x":-115,"skin":"pic/rule_underline.png"}},{"type":"Image","props":{"y":517,"x":-115,"skin":"pic/rule_underline.png"}}]}]},{"type":"Button","props":{"y":1043,"x":264,"width":232,"var":"btn_iknow","height":56},"child":[{"type":"Image","props":{"skin":"pic/rule_iknow.png"}}]}]};}
		]);
		return readme_uiUI;
	})(Dialog);
var wordsUI=(function(_super){
		function wordsUI(){
			
		    this.bg_unlock=null;
		    this.bg_locked=null;
		    this.pinyin1=null;
		    this.pinyin_arr1=null;
		    this.pinyin2=null;
		    this.pinyin_arr2=null;
		    this.pinyin3=null;
		    this.pinyin_arr3=null;
		    this.pinyin4=null;
		    this.pinyin_arr4=null;
		    this.word1=null;
		    this.flashnode=null;
		    this.word2=null;
		    this.word3=null;
		    this.word4=null;

			wordsUI.__super.call(this);
		}

		CLASS$(wordsUI,'ui.wordsUI',_super);
		var __proto__=wordsUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(wordsUI.uiView);
		}

		STATICATTR$(wordsUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":525,"height":170},"child":[{"type":"View","props":{"y":0,"x":0,"width":525,"height":170},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg_unlock","skin":"pic/words_bg_unlock.png"}},{"type":"Image","props":{"var":"bg_locked","skin":"pic/words_bg_locked.png"}},{"type":"Label","props":{"y":0,"x":5,"width":104,"var":"pinyin1","valign":"middle","text":"REN","height":43,"fontSize":30,"font":"SimSun","color":"#a7433e","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-18,"x":26,"visible":false,"var":"pinyin_arr1","skin":"pic/list_scrollbar_pointer.png"}}]},{"type":"Label","props":{"y":0,"x":142,"width":104,"var":"pinyin2","valign":"middle","text":"REN","height":43,"fontSize":30,"font":"SimSun","color":"#a7433e","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-18,"x":26,"visible":false,"var":"pinyin_arr2","skin":"pic/list_scrollbar_pointer.png"}}]},{"type":"Label","props":{"y":0,"x":279,"width":104,"var":"pinyin3","valign":"middle","text":"REN","height":43,"fontSize":30,"font":"SimSun","color":"#a7433e","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-18,"x":26,"visible":false,"var":"pinyin_arr3","skin":"pic/list_scrollbar_pointer.png"}}]},{"type":"Label","props":{"y":0,"x":416,"width":104,"var":"pinyin4","valign":"middle","text":"REN","height":43,"fontSize":30,"font":"SimSun","color":"#a7433e","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-18,"x":26,"visible":false,"var":"pinyin_arr4","skin":"pic/list_scrollbar_pointer.png"}}]},{"type":"Label","props":{"y":62,"x":5,"width":103,"var":"word1","valign":"middle","text":"人","height":103,"fontSize":55,"font":"SimSun","color":"#FFFCDD","bold":true,"align":"center"},"child":[{"type":"Label","props":{"y":0,"x":206,"width":103,"var":"flashnode","valign":"middle","height":103,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Label","props":{"y":62,"x":142,"width":103,"var":"word2","valign":"middle","text":"？","height":103,"fontSize":55,"font":"SimSun","color":"#FFFCDD","bold":true,"align":"center"}},{"type":"Label","props":{"y":62,"x":279,"width":103,"var":"word3","valign":"middle","text":"？","height":103,"fontSize":55,"font":"SimSun","color":"#FFFCDD","bold":true,"align":"center"}},{"type":"Label","props":{"y":62,"x":416,"width":103,"var":"word4","valign":"middle","text":"？","height":103,"fontSize":55,"font":"SimSun","color":"#FFFCDD","bold":true,"align":"center"}}]}]};}
		]);
		return wordsUI;
	})(View);
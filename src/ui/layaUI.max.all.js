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

		game_uiUI.uiView={"type":"View","props":{"width":750,"height":419},"child":[{"type":"View","props":{"y":0,"x":0,"width":750,"var":"keyboard","height":419},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"keyboard_bg","skin":"pic/keyboard_bg.png"}},{"type":"Button","props":{"y":10,"x":19,"width":65,"var":"btn_q","labelSize":50,"labelFont":"Arial","labelBold":true,"labelAlign":"center","label":" Q","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":91,"width":65,"var":"btn_w","labelSize":50,"labelBold":true,"labelAlign":"center","label":" W","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":163,"width":65,"var":"btn_e","label":"E","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":235,"width":65,"var":"btn_r","label":"R","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":307,"width":65,"var":"btn_t","label":"T","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":379,"width":65,"var":"btn_y","label":"Y","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":451,"width":65,"var":"btn_u","label":"U","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":523,"width":65,"var":"btn_i","label":"I","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":595,"width":65,"var":"btn_o","label":"O","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":10,"x":667,"width":65,"var":"btn_p","label":"P","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":49,"width":65,"var":"btn_a","label":"A","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":121,"width":65,"var":"btn_s","label":"S","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":193,"width":65,"var":"btn_d","label":"D","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":265,"width":65,"var":"btn_f","label":"F","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":337,"width":65,"var":"btn_g","label":"G","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":409,"width":65,"var":"btn_h","label":"H","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":481,"width":65,"var":"btn_j","label":"J","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":553,"width":65,"var":"btn_k","label":"K","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":155,"x":625,"width":65,"var":"btn_l","label":"L","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":300,"x":523,"width":76,"var":"btn_del","labelColors":"#ff0000","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_del.png"}}]},{"type":"Button","props":{"y":300,"x":19,"width":65,"var":"btn_z","label":"Z","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":300,"x":91,"width":65,"var":"btn_x","label":"X","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":300,"x":163,"width":65,"var":"btn_c","label":"C","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":300,"x":235,"width":65,"var":"btn_v","label":"Ü","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":300,"x":307,"width":65,"var":"btn_b","label":"B","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":300,"x":379,"width":65,"var":"btn_n","label":"N","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":300,"x":451,"width":65,"var":"btn_m","label":"M","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_letter.png"}}]},{"type":"Button","props":{"y":300,"x":607,"width":123,"var":"btn_ok","labelColors":"#0000ff","label":"OK","height":112},"child":[{"type":"Image","props":{"skin":"pic/keyboard_key_ok.png"}}]}]}]};
		return game_uiUI;
	})(View);
var main_uiUI=(function(_super){
		function main_uiUI(){
			
		    this.pan_mytopic=null;
		    this.lasttopicpanel=null;
		    this.topicpanel=null;
		    this.countDownNumber=null;
		    this.keyboard=null;
		    this.popup_success=null;
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

		main_uiUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"pic/background.png"}},{"type":"Panel","props":{"y":142,"x":0,"width":750,"var":"pan_mytopic","height":860},"child":[{"type":"words","props":{"y":106,"x":123,"var":"lasttopicpanel","runtime":"ui.wordsUI"}},{"type":"Image","props":{"y":429,"x":-4,"width":750,"height":381}},{"type":"View","props":{"y":430,"x":-4,"width":750,"height":123},"child":[{"type":"Image","props":{"y":131,"x":171,"skin":"pic/progress_bg.png"}},{"type":"words","props":{"y":164,"x":124,"var":"topicpanel","runtime":"ui.wordsUI"}},{"type":"Image","props":{"y":5,"x":48,"width":23,"height":23},"child":[{"type":"Label","props":{"y":43,"x":-21,"text":"你的答案：","fontSize":35,"color":"#4e0100"}},{"type":"Label","props":{"y":-3,"x":355,"width":66,"var":"countDownNumber","valign":"middle","text":"30","height":62,"fontSize":45,"color":"#4e0100","align":"center"},"child":[{"type":"Label","props":{"y":-2,"x":-148,"width":66,"valign":"middle","text":"倒计时：","height":62,"fontSize":45,"color":"#4e0100","align":"center"}}]}]}]},{"type":"playerinfo","props":{"y":-11,"x":17,"runtime":"ui.playerinfoUI"}}]},{"type":"game_ui","props":{"y":911,"x":0,"width":750,"var":"keyboard","height":419,"runtime":"ui.game_uiUI"}},{"type":"View","props":{"y":0,"x":0,"width":750,"var":"popup_success","height":1334},"child":[{"type":"Image","props":{"y":58,"x":53,"skin":"pic/popup_success.png"}},{"type":"Button","props":{"y":1112,"x":71,"width":286,"var":"btn_share","labelSize":30,"labelFont":"SimSun","labelColors":"#ffffff","labelBold":true,"label":"邀请好友答题","height":99},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"pic/button_red.png"}}]},{"type":"Button","props":{"y":1112,"x":410,"width":286,"var":"btn_rule_success","labelSize":30,"labelColors":"#ffffff","labelBold":true,"label":"规则说明","height":99},"child":[{"type":"Image","props":{"skin":"pic/button_red.png"}}]}]},{"type":"View","props":{"y":0,"x":0,"width":750,"var":"popup_overtime","height":1334},"child":[{"type":"Image","props":{"y":52,"x":39,"skin":"pic/popup_overtime.png"}},{"type":"Button","props":{"y":1112,"x":71,"width":286,"var":"btn_moments","labelSize":30,"labelFont":"SimSun","labelColors":"#ffffff","labelBold":true,"label":"    向朋友求助","height":99},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"pic/button_red.png"}},{"type":"Image","props":{"y":21,"x":24,"width":49,"skin":"pic/icon_monents.png","height":49}}]},{"type":"Button","props":{"y":1112,"x":410,"width":286,"var":"btn_rule_fail","labelSize":30,"labelColors":"#ffffff","labelBold":true,"label":"规则说明","height":99},"child":[{"type":"Image","props":{"skin":"pic/button_red.png"}}]}]},{"type":"View","props":{"y":917,"x":0,"width":750,"var":"readyPanel","height":419},"child":[{"type":"Button","props":{"y":211,"x":417,"width":286,"var":"btn_rule_ready","labelSize":30,"labelColors":"#ffffff","labelBold":true,"label":"规则说明","height":99},"child":[{"type":"Image","props":{"skin":"pic/button_red.png"}}]},{"type":"Button","props":{"y":211,"x":78,"width":286,"var":"btn_start","labelSize":30,"labelFont":"SimSun","labelColors":"#ffffff","labelBold":true,"label":"开始答题（限时30秒）","height":99},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"pic/button_red.png"}}]}]},{"type":"Panel","props":{"y":0,"x":0,"width":750,"var":"pan_result","height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"main_ui/btn_cancel.png","sizeGrid":"5,5,5,5","height":1334}},{"type":"List","props":{"y":77,"x":0,"width":750,"var":"lst_players","vScrollBarSkin":"pic/list_scrollbar.png","repeatY":10,"repeatX":1,"height":1179},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"name":"render","height":243},"child":[{"type":"View","props":{"y":13,"x":117,"var":"_boxview","name":"boxview"},"child":[{"type":"words","props":{"y":45,"x":63,"name":"words","runtime":"ui.wordsUI"}},{"type":"Image","props":{"y":3,"x":-38,"var":"_playerico","skin":"main_ui/btn_key.png","name":"playerico"}},{"type":"Label","props":{"y":6,"x":16,"var":"_playername","text":"这是一个人的名字","name":"playername","fontSize":30}},{"type":"Label","props":{"y":6,"x":531,"width":36,"var":"_playertime","text":"30","name":"playertime","height":34,"fontSize":30,"color":"#3e0100","align":"right"},"child":[{"type":"Label","props":{"y":1,"x":34,"text":"秒","fontSize":30}}]}]}]}]},{"type":"Button","props":{"y":1254,"x":0,"width":750,"var":"btn_record","skin":"main_ui/btn_ok.png","sizeGrid":"3,3,3,3","labelSize":50,"labelAlign":"center","label":"^","height":80}}]},{"type":"View","props":{"y":394,"x":0,"width":750,"visible":false,"var":"toast","height":500},"child":[{"type":"Image","props":{"y":133,"x":0,"width":747,"skin":"pic/blackmask.png","height":211},"child":[{"type":"Label","props":{"y":0,"x":0,"width":750,"var":"toastMsg","valign":"middle","text":"这是一个提示","height":210,"fontSize":35,"color":"#ffffff","align":"center"}}]}]}]};
		return main_uiUI;
	})(View);
var playerinfoUI=(function(_super){
		function playerinfoUI(){
			
		    this.player_ico=null;
		    this.player_name=null;
		    this.player_no=null;

			playerinfoUI.__super.call(this);
		}

		CLASS$(playerinfoUI,'ui.playerinfoUI',_super);
		var __proto__=playerinfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(playerinfoUI.uiView);

		}

		playerinfoUI.uiView={"type":"View","props":{"width":480,"height":80},"child":[{"type":"Image","props":{"y":9,"x":75,"var":"player_ico","skin":"main_ui/lilith_logo.png"}},{"type":"Label","props":{"y":26,"x":201,"var":"player_name","text":"这是一个人的名字","fontSize":30,"color":"#ffffff"}},{"type":"Label","props":{"y":26,"x":4,"visible":false,"var":"player_no","text":"1楼","fontSize":30,"color":"#ffffff"}}]};
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

		readme_uiUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"pic/blackmask.png","sizeGrid":"2,2,2,2","height":1334,"alpha":0.8}},{"type":"Image","props":{"y":305,"x":84,"width":595,"skin":"pic/rule_bg.png","height":719,"alpha":0.9}},{"type":"View","props":{"y":649,"x":84,"width":480,"height":93},"child":[{"type":"Image","props":{"y":-272,"x":218,"skin":"pic/rule_title.png"},"child":[{"type":"Image","props":{"y":213,"x":-115,"skin":"pic/rule_underline.png"}},{"type":"Image","props":{"y":303,"x":-115,"skin":"pic/rule_underline.png"}},{"type":"Image","props":{"y":401,"x":-115,"skin":"pic/rule_underline.png"}},{"type":"Image","props":{"y":517,"x":-115,"skin":"pic/rule_underline.png"}}]}]},{"type":"Button","props":{"y":1043,"x":264,"width":232,"var":"btn_iknow","height":56},"child":[{"type":"Image","props":{"skin":"pic/rule_iknow.png"}}]}]};
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

		wordsUI.uiView={"type":"View","props":{"width":525,"height":170},"child":[{"type":"View","props":{"y":0,"x":0,"width":525,"height":170},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg_unlock","skin":"pic/words_bg_unlock.png"}},{"type":"Image","props":{"var":"bg_locked","skin":"pic/words_bg_locked.png"}},{"type":"Label","props":{"y":-5,"x":5,"width":104,"var":"pinyin1","valign":"middle","text":"ren","height":43,"fontSize":30,"color":"#a7433e","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-18,"x":26,"visible":false,"var":"pinyin_arr1","skin":"pic/list_scrollbar_pointer.png"}}]},{"type":"Label","props":{"y":-5,"x":142,"width":104,"var":"pinyin2","valign":"middle","text":"ren","height":43,"fontSize":30,"color":"#a7433e","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-18,"x":26,"visible":false,"var":"pinyin_arr2","skin":"pic/list_scrollbar_pointer.png"}}]},{"type":"Label","props":{"y":-5,"x":279,"width":104,"var":"pinyin3","valign":"middle","text":"ren","height":43,"fontSize":30,"color":"#a7433e","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-18,"x":26,"visible":false,"var":"pinyin_arr3","skin":"pic/list_scrollbar_pointer.png"}}]},{"type":"Label","props":{"y":-5,"x":416,"width":104,"var":"pinyin4","valign":"middle","text":"ren","height":43,"fontSize":30,"color":"#a7433e","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-18,"x":26,"visible":false,"var":"pinyin_arr4","skin":"pic/list_scrollbar_pointer.png"}}]},{"type":"Label","props":{"y":62,"x":5,"width":103,"var":"word1","valign":"middle","text":"人","height":103,"fontSize":55,"font":"SimSun","color":"#FFFCDD","bold":true,"align":"center"},"child":[{"type":"Label","props":{"y":0,"x":206,"width":103,"var":"flashnode","valign":"middle","height":103,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Label","props":{"y":62,"x":142,"width":103,"var":"word2","valign":"middle","text":"？","height":103,"fontSize":55,"font":"SimSun","color":"#FFFCDD","bold":true,"align":"center"}},{"type":"Label","props":{"y":62,"x":279,"width":103,"var":"word3","valign":"middle","text":"？","height":103,"fontSize":55,"font":"SimSun","color":"#FFFCDD","bold":true,"align":"center"}},{"type":"Label","props":{"y":62,"x":416,"width":103,"var":"word4","valign":"middle","text":"？","height":103,"fontSize":55,"font":"SimSun","color":"#FFFCDD","bold":true,"align":"center"}}]}]};
		return wordsUI;
	})(View);
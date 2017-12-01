var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var game_uiUI=(function(_super){
		function game_uiUI(){
			
		    this.keyboard=null;
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
		    this.btn_N=null;
		    this.btn_M=null;
		    this.btn_ok=null;

			game_uiUI.__super.call(this);
		}

		CLASS$(game_uiUI,'ui.game_uiUI',_super);
		var __proto__=game_uiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(game_uiUI.uiView);

		}

		game_uiUI.uiView={"type":"View","props":{"width":750,"height":300},"child":[{"type":"View","props":{"y":0,"x":0,"width":750,"var":"keyboard","height":300},"child":[{"type":"Button","props":{"y":70,"x":132,"width":36,"var":"btn_q","skin":"main_ui/btn_key.png","label":"Q","height":50}},{"type":"Button","props":{"y":70,"x":179,"width":36,"var":"btn_w","skin":"main_ui/btn_key.png","label":"W","height":50}},{"type":"Button","props":{"y":70,"x":226,"width":36,"var":"btn_e","skin":"main_ui/btn_key.png","label":"E","height":50}},{"type":"Button","props":{"y":70,"x":273,"width":36,"var":"btn_r","skin":"main_ui/btn_key.png","label":"R","height":50}},{"type":"Button","props":{"y":70,"x":320,"width":36,"var":"btn_t","skin":"main_ui/btn_key.png","label":"T","height":50}},{"type":"Button","props":{"y":70,"x":367,"width":36,"var":"btn_y","skin":"main_ui/btn_key.png","label":"Y","height":50}},{"type":"Button","props":{"y":70,"x":414,"width":36,"var":"btn_u","skin":"main_ui/btn_key.png","label":"U","height":50}},{"type":"Button","props":{"y":70,"x":461,"width":36,"var":"btn_i","skin":"main_ui/btn_key.png","label":"I","height":50}},{"type":"Button","props":{"y":70,"x":508,"width":36,"var":"btn_o","skin":"main_ui/btn_key.png","label":"O","height":50}},{"type":"Button","props":{"y":70,"x":555,"width":36,"var":"btn_p","skin":"main_ui/btn_key.png","label":"P","height":50}},{"type":"Button","props":{"y":130,"x":145,"width":36,"var":"btn_a","skin":"main_ui/btn_key.png","label":"A","height":50}},{"type":"Button","props":{"y":130,"x":192,"width":36,"var":"btn_s","skin":"main_ui/btn_key.png","label":"S","height":50}},{"type":"Button","props":{"y":130,"x":239,"width":36,"var":"btn_d","skin":"main_ui/btn_key.png","label":"D","height":50}},{"type":"Button","props":{"y":130,"x":286,"width":36,"var":"btn_f","skin":"main_ui/btn_key.png","label":"F","height":50}},{"type":"Button","props":{"y":130,"x":333,"width":36,"var":"btn_g","skin":"main_ui/btn_key.png","label":"G","height":50}},{"type":"Button","props":{"y":130,"x":380,"width":36,"var":"btn_h","skin":"main_ui/btn_key.png","label":"H","height":50}},{"type":"Button","props":{"y":130,"x":427,"width":36,"var":"btn_j","skin":"main_ui/btn_key.png","label":"J","height":50}},{"type":"Button","props":{"y":130,"x":474,"width":36,"var":"btn_k","skin":"main_ui/btn_key.png","label":"K","height":50}},{"type":"Button","props":{"y":130,"x":521,"width":36,"var":"btn_l","skin":"main_ui/btn_key.png","label":"L","height":50}},{"type":"Button","props":{"y":190,"x":482,"width":49,"var":"btn_del","skin":"main_ui/btn_key.png","labelColors":"#ff0000","label":"DEL","height":49}},{"type":"Button","props":{"y":190,"x":153,"width":36,"var":"btn_z","skin":"main_ui/btn_key.png","label":"Z","height":50}},{"type":"Button","props":{"y":190,"x":200,"width":36,"var":"btn_x","skin":"main_ui/btn_key.png","label":"X","height":50}},{"type":"Button","props":{"y":190,"x":247,"width":36,"var":"btn_c","skin":"main_ui/btn_key.png","label":"C","height":50}},{"type":"Button","props":{"y":190,"x":294,"width":36,"var":"btn_v","skin":"main_ui/btn_key.png","label":"Ü","height":50}},{"type":"Button","props":{"y":190,"x":341,"width":36,"var":"btn_b","skin":"main_ui/btn_key.png","label":"B","height":50}},{"type":"Button","props":{"y":190,"x":388,"width":36,"var":"btn_N","skin":"main_ui/btn_key.png","label":"N","height":50}},{"type":"Button","props":{"y":190,"x":435,"width":36,"var":"btn_M","skin":"main_ui/btn_key.png","label":"M","height":50}},{"type":"Button","props":{"y":190,"x":542,"width":49,"var":"btn_ok","skin":"main_ui/btn_key.png","labelColors":"#0000ff","label":"OK","height":50}}]}]};
		return game_uiUI;
	})(View);
var main_uiUI=(function(_super){
		function main_uiUI(){
			
		    this.pan_mytopic=null;
		    this.btnResult=null;
		    this.btnStart=null;
		    this.topicpanel=null;
		    this.lst_players=null;
		    this._boxview=null;
		    this._playerico=null;
		    this._playername=null;
		    this._playertime=null;
		    this.keyboard=null;

			main_uiUI.__super.call(this);
		}

		CLASS$(main_uiUI,'ui.main_uiUI',_super);
		var __proto__=main_uiUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.wordsUI",ui.wordsUI);
			View.regComponent("ui.game_uiUI",ui.game_uiUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(main_uiUI.uiView);

		}

		main_uiUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Panel","props":{"y":705,"x":1,"width":750,"var":"pan_mytopic","height":635},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"main_ui/panel_bg.png","height":381}},{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"main_ui/panel_title.png","sizeGrid":"10,10,10,10","height":24}},{"type":"Button","props":{"y":300,"x":434,"width":128,"var":"btnResult","skin":"main_ui/btn_ok.png","label":"规则","height":35}},{"type":"Button","props":{"y":300,"x":235,"width":128,"var":"btnStart","skin":"main_ui/btn_cancel.png","label":"开  始","height":35}},{"type":"View","props":{"y":86,"x":1,"width":746,"height":165},"child":[{"type":"Image","props":{"y":14,"x":16,"width":23,"skin":"main_ui/arrow.png","height":23},"child":[{"type":"Label","props":{"y":4,"x":27,"text":"你的答案","fontSize":16,"color":"#ffffff"}}]}]},{"type":"View","props":{"y":24,"x":167,"width":400,"height":71},"child":[{"type":"words","props":{"y":98,"x":2,"var":"topicpanel","runtime":"ui.wordsUI"}},{"type":"Image","props":{"y":5,"x":16,"skin":"main_ui/lilith_logo.png"}},{"type":"Label","props":{"y":7,"x":83,"text":"烟花开过要吃甜甜圈","fontSize":25,"color":"#ffffff"}},{"type":"Label","props":{"y":40,"x":84,"text":"题目：？？？圈","fontSize":25,"color":"#ffffff"}}]}]},{"type":"Panel","props":{"y":9,"x":0,"width":750,"name":"pan_result","height":684},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"main_ui/panel_bg.png","height":814}},{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"main_ui/panel_title.png","height":30}},{"type":"List","props":{"y":30,"x":2,"width":750,"var":"lst_players","vScrollBarSkin":"main_ui/vscroll.png","repeatY":4,"repeatX":1,"height":789},"child":[{"type":"Box","props":{"y":1,"x":45,"name":"render"},"child":[{"type":"View","props":{"var":"_boxview","name":"boxview"},"child":[{"type":"Image","props":{"var":"_playerico","skin":"main_ui/btn_key.png","name":"playerico"}},{"type":"Label","props":{"y":5,"x":45,"var":"_playername","text":"这是一个人的名字","name":"playername"}},{"type":"Label","props":{"y":5,"x":373,"var":"_playertime","text":"6s","name":"playertime"}},{"type":"words","props":{"y":37,"x":-2,"name":"words","runtime":"ui.wordsUI"}}]}]}]}]},{"type":"Image","props":{"y":54,"x":303,"width":157,"skin":"main_ui/lilith_logo.png","height":45},"child":[{"type":"Label","props":{"y":7,"x":47,"text":"记录","fontSize":30,"color":"#d6ff00"}}]},{"type":"game_ui","props":{"y":1027,"x":-2,"var":"keyboard","runtime":"ui.game_uiUI"}}]};
		return main_uiUI;
	})(View);
var readme_uiUI=(function(_super){
		function readme_uiUI(){
			
		    this.btn_ok=null;

			readme_uiUI.__super.call(this);
		}

		CLASS$(readme_uiUI,'ui.readme_uiUI',_super);
		var __proto__=readme_uiUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("HTMLDivElement",laya.html.dom.HTMLDivElement);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(readme_uiUI.uiView);

		}

		readme_uiUI.uiView={"type":"Dialog","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"main_ui/panel_title.png","height":800,"alpha":0.9}},{"type":"View","props":{"y":344,"x":0,"width":480,"height":93},"child":[{"type":"Image","props":{"y":-181,"x":0,"width":480,"skin":"main_ui/panel_bg.png","height":447},"child":[{"type":"HTMLDivElement","props":{"y":94,"x":5,"width":476,"name":"txthtml_rules","innerHTML":"1、对方公司圣诞风格的。 <br> 2、大发发大发发安抚安抚 <br> 3、啊给我二哥哥我二哥","height":242}},{"type":"Button","props":{"y":389,"x":189,"width":128,"var":"btn_ok","skin":"main_ui/btn_ok.png","label":"返回","height":31}}]}]}]};
		return readme_uiUI;
	})(Dialog);
var wordsUI=(function(_super){
		function wordsUI(){
			
		    this._pinyin1=null;
		    this.pinyin1=null;
		    this._word1=null;
		    this.word1=null;
		    this.flashnode=null;
		    this._pinyin2=null;
		    this.pinyin2=null;
		    this._word2=null;
		    this.word2=null;
		    this._pinyin3=null;
		    this.pinyin3=null;
		    this._word3=null;
		    this.word3=null;
		    this._pinyin4=null;
		    this.pinyin4=null;
		    this._word4=null;
		    this.word4=null;

			wordsUI.__super.call(this);
		}

		CLASS$(wordsUI,'ui.wordsUI',_super);
		var __proto__=wordsUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(wordsUI.uiView);

		}

		wordsUI.uiView={"type":"View","props":{"width":400,"height":134},"child":[{"type":"View","props":{"y":0,"x":0,"width":400,"height":134},"child":[{"type":"Image","props":{"y":9,"x":14,"width":69,"var":"_pinyin1","skin":"main_ui/lilith_logo.png","name":"pinyin1","height":29},"child":[{"type":"Label","props":{"y":2,"width":62,"var":"pinyin1","valign":"middle","text":"ren","height":26,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":51,"x":14,"width":68,"var":"_word1","skin":"main_ui/lilith_logo.png","name":"word1","height":74},"child":[{"type":"Label","props":{"width":62,"var":"word1","valign":"middle","text":"人","height":64,"fontSize":25,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}},{"type":"Label","props":{"y":10,"x":10,"width":62,"var":"flashnode","valign":"middle","height":64,"fontSize":25,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":9,"x":116,"width":69,"var":"_pinyin2","skin":"main_ui/lilith_logo.png","name":"pinyin2","height":29},"child":[{"type":"Label","props":{"y":2,"width":62,"var":"pinyin2","valign":"middle","text":"ren","height":26,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":51,"x":116,"width":68,"var":"_word2","skin":"main_ui/lilith_logo.png","name":"word1","height":74},"child":[{"type":"Label","props":{"y":5,"width":62,"var":"word2","valign":"middle","text":"？","height":64,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":9,"x":217,"width":69,"var":"_pinyin3","skin":"main_ui/lilith_logo.png","name":"pinyin3","height":29},"child":[{"type":"Label","props":{"y":2,"width":62,"var":"pinyin3","valign":"middle","text":"ren","height":26,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":51,"x":218,"width":68,"var":"_word3","skin":"main_ui/lilith_logo.png","name":"_word3","height":74},"child":[{"type":"Label","props":{"y":5,"width":62,"var":"word3","valign":"middle","text":"？","height":64,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":9,"x":319,"width":69,"var":"_pinyin4","skin":"main_ui/lilith_logo.png","name":"pinyin4","height":29},"child":[{"type":"Label","props":{"y":2,"width":62,"var":"pinyin4","valign":"middle","text":"ren","height":26,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":51,"x":320,"width":68,"var":"_word4","skin":"main_ui/lilith_logo.png","name":"word4","height":74},"child":[{"type":"Label","props":{"y":5,"width":62,"var":"word4","valign":"middle","text":"？","height":64,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}}]}]}]};
		return wordsUI;
	})(View);
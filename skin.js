// Garden Gnome Software - Skin
// Pano2VR 7.1.9/20995
// Filename: forceone-academia-teste.ggsk
// Generated 2025-07-05T17:35:47

function pano2vrSkin(player,base) {
	player.addVariable('var_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('var_telacheia', 2, false, { ignoreInState: 0  });
	player.addVariable('var_respphone', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('var_loc', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_inicial', 2, false, { ignoreInState: 0  });
	player.addVariable('var_audio', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_loader', 2, true, { ignoreInState: 0  });
	player.addVariable('var_ajuda', 2, false, { ignoreInState: 0  });
	player.addVariable('var_inicio', 2, false, { ignoreInState: 0  });
	player.addVariable('var_carrousel', 1, 0, { ignoreInState: 0  });
	player.addVariable('var_carrou_bt', 2, false, { ignoreInState: 0  });
	player.addVariable('var_hide', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_var_respphone = {};
		me._variable_var_respphone.ggCurrentLogicState = -1;
		me._variable_var_respphone.logicBlock = function() {
			var newLogicState_var_respphone;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicState_var_respphone = 0;
			}
			else {
				newLogicState_var_respphone = -1;
			}
			if (me._variable_var_respphone.ggCurrentLogicState != newLogicState_var_respphone) {
				me._variable_var_respphone.ggCurrentLogicState = newLogicState_var_respphone;
				if (me._variable_var_respphone.ggCurrentLogicState == 0) {
					player.setVariableValue('var_respphone', true);
				}
				else {
					player.setVariableValue('var_respphone', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me.__10menu_principal_desk=document.createElement('div');
		el.ggId="1.0-MENU_PRINCIPAL_DESK";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 494px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10menu_principal_desk.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__10menu_principal_desk.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10menu_principal_desk.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10menu_principal_desk.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10menu_principal_desk.style.transition='opacity 1000ms ease 0ms';
				if (me.__10menu_principal_desk.ggCurrentLogicStateVisible == 0) {
					me.__10menu_principal_desk.style.visibility="hidden";
					me.__10menu_principal_desk.ggVisible=false;
				}
				else {
					me.__10menu_principal_desk.style.visibility=(Number(me.__10menu_principal_desk.style.opacity)>0||!me.__10menu_principal_desk.style.opacity)?'inherit':'hidden';
					me.__10menu_principal_desk.ggVisible=true;
				}
			}
		}
		me.__10menu_principal_desk.logicBlock_visible();
		me.__10menu_principal_desk.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__10menu_principal_desk.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__10menu_principal_desk.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__10menu_principal_desk.style.transition='opacity 1000ms ease 0ms';
				if (me.__10menu_principal_desk.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__10menu_principal_desk.style.opacity == 0.0) { me.__10menu_principal_desk.style.visibility="hidden"; } }, 1005);
					me.__10menu_principal_desk.style.opacity=0;
				}
				else {
					me.__10menu_principal_desk.style.visibility=me.__10menu_principal_desk.ggVisible?'inherit':'hidden';
					me.__10menu_principal_desk.style.opacity=1;
				}
			}
		}
		me.__10menu_principal_desk.logicBlock_alpha();
		me.__10menu_principal_desk.ggUpdatePosition=function (useTransition) {
		}
		el=me.__101fundo=document.createElement('div');
		el.ggId="1.0.1-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 40px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__101fundo);
		el=me.__1031linha=document.createElement('div');
		el.ggId="1.0.3.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1031linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1031linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__1031linha);
		el=me.__10311bt_fachada=document.createElement('div');
		el.ggId="1.0.3.1.1-BT_FACHADA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10311bt_fachada.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10311bt_fachada.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me.__10311bt_fachada.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__103117image.style.transition='none';
			} else {
				me.__103117image.style.transition='all 1000ms ease 0ms';
			}
			me.__103117image.style.opacity='0.5';
			me.__103117image.style.visibility=me.__103117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10311bt_fachada']=true;
			me.__103112fachada.logicBlock_visible();
			me.__103111rec_roxo.logicBlock_size();
			me.__103111rec_roxo.logicBlock_backgroundcolor();
			me.__103113ic_amarelo.logicBlock_position();
			me.__103113ic_amarelo.logicBlock_alpha();
			me.__103114rec_amarelo.logicBlock_size();
			me.__103114rec_amarelo.logicBlock_alpha();
			me.__103115ic_roxo.logicBlock_alpha();
			me.__103115ic_roxo.logicBlock_position();
			me.__103115ic_roxo.logicBlock_size();
		}
		me.__10311bt_fachada.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__103117image.style.transition='none';
			} else {
				me.__103117image.style.transition='all 0ms ease 0ms';
			}
			me.__103117image.style.opacity='0';
			me.__103117image.style.visibility='hidden';
			me.elementMouseOver['_10311bt_fachada']=false;
			me.__103112fachada.logicBlock_visible();
			me.__103111rec_roxo.logicBlock_size();
			me.__103111rec_roxo.logicBlock_backgroundcolor();
			me.__103113ic_amarelo.logicBlock_position();
			me.__103113ic_amarelo.logicBlock_alpha();
			me.__103114rec_amarelo.logicBlock_size();
			me.__103114rec_amarelo.logicBlock_alpha();
			me.__103115ic_roxo.logicBlock_alpha();
			me.__103115ic_roxo.logicBlock_position();
			me.__103115ic_roxo.logicBlock_size();
		}
		me.__10311bt_fachada.ggUpdatePosition=function (useTransition) {
		}
		el=me.__103110fundo=document.createElement('div');
		el.ggId="1.0.3.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("FACHADA") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__103110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__103110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__103110fundo.style.transition='';
				if (me.__103110fundo.ggCurrentLogicStateVisible == 0) {
					me.__103110fundo.style.visibility=(Number(me.__103110fundo.style.opacity)>0||!me.__103110fundo.style.opacity)?'inherit':'hidden';
					me.__103110fundo.ggVisible=true;
				}
				else {
					me.__103110fundo.style.visibility="hidden";
					me.__103110fundo.ggVisible=false;
				}
			}
		}
		me.__103110fundo.logicBlock_visible();
		me.__103110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada.appendChild(me.__103110fundo);
		el=me.__103112fachada=document.createElement('div');
		els=me.__103112fachada__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.3.1.1.2-FACHADA";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__103112fachada.ggUpdateText=function() {
			var params = [];
			var hs = player._("FACHADA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__103112fachada.ggUpdateText();
		el.appendChild(els);
		me.__103112fachada.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103112fachada.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__103112fachada.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__103112fachada.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__103112fachada.style.transition='';
				if (me.__103112fachada.ggCurrentLogicStateVisible == 0) {
					me.__103112fachada.style.visibility="hidden";
					me.__103112fachada.ggVisible=false;
				}
				else {
					me.__103112fachada.style.visibility=(Number(me.__103112fachada.style.opacity)>0||!me.__103112fachada.style.opacity)?'inherit':'hidden';
					me.__103112fachada.ggVisible=true;
				}
			}
		}
		me.__103112fachada.logicBlock_visible();
		me.__103112fachada.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada.appendChild(me.__103112fachada);
		el=me.__103111rec_roxo=document.createElement('div');
		el.ggId="1.0.3.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__103111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__103111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__103111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__103111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__103111rec_roxo.style.width='325px';
					me.__103111rec_roxo.style.height='100%';
					me.__103111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__103111rec_roxo);}, 1050);
				}
				else {
					me.__103111rec_roxo.style.width='10px';
					me.__103111rec_roxo.style.height='100%';
					me.__103111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__103111rec_roxo);}, 1050);
				}
			}
		}
		me.__103111rec_roxo.logicBlock_size();
		me.__103111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__103111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__103111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__103111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__103111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__103111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__103111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__103111rec_roxo.logicBlock_backgroundcolor();
		me.__103111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__103117image=document.createElement('div');
		els=me.__103117image__img=document.createElement('img');
		els.className='ggskin ggskin__103117image';
		hs=basePath + 'images/_103117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.3.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103117image.ggUpdatePosition=function (useTransition) {
		}
		me.__103111rec_roxo.appendChild(me.__103117image);
		me.__10311bt_fachada.appendChild(me.__103111rec_roxo);
		el=me.__103113ic_amarelo=document.createElement('div');
		els=me.__103113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__103113ic_amarelo';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.3.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__103113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__103113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__103113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__103113ic_amarelo.style.left='314px';
					me.__103113ic_amarelo.style.top = 'calc(50% - (19px / 2))';
				}
				else {
					me.__103113ic_amarelo.style.left='25px';
					me.__103113ic_amarelo.style.top='calc(50% - ((19px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__103113ic_amarelo.logicBlock_position();
		me.__103113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__103113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__103113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__103113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__103113ic_amarelo.style.opacity == 0.0) { me.__103113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__103113ic_amarelo.style.opacity=0;
				}
				else {
					me.__103113ic_amarelo.style.visibility=me.__103113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__103113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__103113ic_amarelo.logicBlock_alpha();
		me.__103113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada.appendChild(me.__103113ic_amarelo);
		el=me.__103114rec_amarelo=document.createElement('div');
		el.ggId="1.0.3.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__103114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__103114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__103114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__103114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__103114rec_amarelo.style.width='34px';
					me.__103114rec_amarelo.style.height='100%';
					me.__103114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__103114rec_amarelo);}, 1050);
				}
				else {
					me.__103114rec_amarelo.style.width='340px';
					me.__103114rec_amarelo.style.height='100%';
					me.__103114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__103114rec_amarelo);}, 1050);
				}
			}
		}
		me.__103114rec_amarelo.logicBlock_size();
		me.__103114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__103114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__103114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__103114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__103114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__103114rec_amarelo.style.visibility=me.__103114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__103114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__103114rec_amarelo.style.opacity == 0.0) { me.__103114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__103114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__103114rec_amarelo.logicBlock_alpha();
		me.__103114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada.appendChild(me.__103114rec_amarelo);
		el=me.__103115ic_roxo=document.createElement('div');
		els=me.__103115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__103115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAADeCAYAAACAN7TvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMTowNjo1'+
			'NC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjE6MDc6MjgtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjE6MDc6MjgtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwYmRiYTE4LWNhYzUtMzE0Yi1hYzcwLWVlYjhiZTdlYTAzZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMGJkYmExOC1jYWM1LTMxNGItYWM3MC1lZWI4YmU3ZWEwM2YiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMGJkYmExOC1jYWM1LTMxNGItYWM3MC1lZWI4YmU3ZW'+
			'EwM2YiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwYmRiYTE4LWNhYzUtMzE0Yi1hYzcwLWVlYjhiZTdlYTAzZiIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMTowNjo1NC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PieRwV0AABJjSURBVHic7Z15tGVFdYe/lgYF'+
			't4KAkASDgIwCIS6MAVlCZGrDbBiCoB1KFooYmUwYIhqMoCyEkE5CCAqrZBDsMDbQ0NgKNLPKSlSgBUkYIjLZKoTdDS0NL3+c28mzef363Hurzq5z7v7+Ya337q36rdXvR+3atWvXlLGxMZx2E0W3Bh4IKv6POQRvsBbgDEcU/Q5woBtheKZaC3AGI4quA3wb2AY4xFhOJ3AztJAouinwXeAdwM1B5TljSZ3Aw6SWEUUPAu6nMgLAvxnK6RRuhhYRRb8KzARWGffjWUZyOoeHSS0gim4GnA/stMyvbgkqvzSQ1El8ZSicKPoF4CFebwSArzcsp9P4ylAwUfQc4Njl/HoxcF1zarqPm6FAoujaVHuDnSf52JygsqghSSOBh0mFEUV3BuYzuREAbm1AzkjhZiiIKHoC1fnB22t8/P7MckYOD5MKIIquBHwLOKDmVxYB9+'+
			'RTNJr4ymBMFN0B+CH1jQAwM6i8lEfR6OJmMCSKHgfcCWzV51e/kV6N42GSAVF0KnAx8JEBvr4AuCOtIgfcDI3Tu3swE9hiwCFmebl2HjxMapAoOh34MYMbAeCaRHKcZXAzNEQUPRq4aMhhFgJzE8hxJsDDpMxE0bWAM4GPJxju2qDymwTjOBPgZshIFD0U+BfgrYmG9MK8jEzxhgB5iKIzgKMTDrkgqNQ5mXYGxFeGxETRNYHrgfcnHto3zplxMyQkir6LaoO7YYbhr8owpjMOzyYlIooeADxIHiO8SFXA52TEzZCAKHoGcAXwxkxTzA4qSzKN7fTwMGkIouguwJeA7TNPdUHm8R08mzQwUfQk4CsNTPVcUFm3gXlGHl8ZBiCKfgU4qaHpvBVMQ7gZ+iCKvg24HJjW4LSeRWoIN0NNouiOVLfRfrfBaRfhd50bw7NJ'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.3.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__103115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__103115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__103115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__103115ic_roxo.style.left='314px';
					me.__103115ic_roxo.style.top = 'calc(50% - (19px / 2))';
				}
				else {
					me.__103115ic_roxo.style.left='25px';
					me.__103115ic_roxo.style.top='calc(50% - ((19px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__103115ic_roxo.logicBlock_position();
		me.__103115ic_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__103115ic_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__103115ic_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__103115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103115ic_roxo.ggCurrentLogicStateSize == 0) {
					me.__103115ic_roxo.style.width='19px';
					me.__103115ic_roxo.style.height='20px';
					me.__103115ic_roxo.style.top = 'calc(50% - (20px / 2))';
					setTimeout(function() {skin.updateSize(me.__103115ic_roxo);}, 1050);
				}
				else {
					me.__103115ic_roxo.style.width='17px';
					me.__103115ic_roxo.style.height='19px';
					me.__103115ic_roxo.style.top = 'calc(50% - (19px / 2))';
					setTimeout(function() {skin.updateSize(me.__103115ic_roxo);}, 1050);
				}
			}
		}
		me.__103115ic_roxo.logicBlock_size();
		me.__103115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10311bt_fachada'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__103115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__103115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__103115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__103115ic_roxo.style.visibility=me.__103115ic_roxo.ggVisible?'inherit':'hidden';
					me.__103115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__103115ic_roxo.style.opacity == 0.0) { me.__103115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__103115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__103115ic_roxo.logicBlock_alpha();
		me.__103115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada.appendChild(me.__103115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__10311bt_fachada);
		el=me.__1041linha=document.createElement('div');
		el.ggId="1.0.4.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 194px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1041linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1041linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__1041linha);
		el=me.__10411bt_recepcao=document.createElement('div');
		el.ggId="1.0.4.1.1-BT_RECEPCAO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 198px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10411bt_recepcao.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10411bt_recepcao.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me.__10411bt_recepcao.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__104117image.style.transition='none';
			} else {
				me.__104117image.style.transition='all 1000ms ease 0ms';
			}
			me.__104117image.style.opacity='0.5';
			me.__104117image.style.visibility=me.__104117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10411bt_recepcao']=true;
			me.__104112recepcao.logicBlock_visible();
			me.__104111rec_roxo.logicBlock_size();
			me.__104111rec_roxo.logicBlock_backgroundcolor();
			me.__104113ic_amarelo.logicBlock_position();
			me.__104113ic_amarelo.logicBlock_alpha();
			me.__104114rec_amarelo.logicBlock_size();
			me.__104114rec_amarelo.logicBlock_alpha();
			me.__104115ic_roxo.logicBlock_alpha();
			me.__104115ic_roxo.logicBlock_size();
			me.__104115ic_roxo.logicBlock_position();
		}
		me.__10411bt_recepcao.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__104117image.style.transition='none';
			} else {
				me.__104117image.style.transition='all 0ms ease 0ms';
			}
			me.__104117image.style.opacity='0';
			me.__104117image.style.visibility='hidden';
			me.elementMouseOver['_10411bt_recepcao']=false;
			me.__104112recepcao.logicBlock_visible();
			me.__104111rec_roxo.logicBlock_size();
			me.__104111rec_roxo.logicBlock_backgroundcolor();
			me.__104113ic_amarelo.logicBlock_position();
			me.__104113ic_amarelo.logicBlock_alpha();
			me.__104114rec_amarelo.logicBlock_size();
			me.__104114rec_amarelo.logicBlock_alpha();
			me.__104115ic_roxo.logicBlock_alpha();
			me.__104115ic_roxo.logicBlock_size();
			me.__104115ic_roxo.logicBlock_position();
		}
		me.__10411bt_recepcao.ggUpdatePosition=function (useTransition) {
		}
		el=me.__104110fundo=document.createElement('div');
		el.ggId="1.0.4.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("RECEPCAO") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__104110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__104110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__104110fundo.style.transition='';
				if (me.__104110fundo.ggCurrentLogicStateVisible == 0) {
					me.__104110fundo.style.visibility=(Number(me.__104110fundo.style.opacity)>0||!me.__104110fundo.style.opacity)?'inherit':'hidden';
					me.__104110fundo.ggVisible=true;
				}
				else {
					me.__104110fundo.style.visibility="hidden";
					me.__104110fundo.ggVisible=false;
				}
			}
		}
		me.__104110fundo.logicBlock_visible();
		me.__104110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao.appendChild(me.__104110fundo);
		el=me.__104112recepcao=document.createElement('div');
		els=me.__104112recepcao__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.4.1.1.2-RECEPCAO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__104112recepcao.ggUpdateText=function() {
			var params = [];
			var hs = player._("RECEP\xc7\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__104112recepcao.ggUpdateText();
		el.appendChild(els);
		me.__104112recepcao.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104112recepcao.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__104112recepcao.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__104112recepcao.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__104112recepcao.style.transition='';
				if (me.__104112recepcao.ggCurrentLogicStateVisible == 0) {
					me.__104112recepcao.style.visibility="hidden";
					me.__104112recepcao.ggVisible=false;
				}
				else {
					me.__104112recepcao.style.visibility=(Number(me.__104112recepcao.style.opacity)>0||!me.__104112recepcao.style.opacity)?'inherit':'hidden';
					me.__104112recepcao.ggVisible=true;
				}
			}
		}
		me.__104112recepcao.logicBlock_visible();
		me.__104112recepcao.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao.appendChild(me.__104112recepcao);
		el=me.__104111rec_roxo=document.createElement('div');
		el.ggId="1.0.4.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__104111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__104111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__104111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__104111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__104111rec_roxo.style.width='325px';
					me.__104111rec_roxo.style.height='100%';
					me.__104111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__104111rec_roxo);}, 1050);
				}
				else {
					me.__104111rec_roxo.style.width='10px';
					me.__104111rec_roxo.style.height='100%';
					me.__104111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__104111rec_roxo);}, 1050);
				}
			}
		}
		me.__104111rec_roxo.logicBlock_size();
		me.__104111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__104111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__104111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__104111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__104111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__104111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__104111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__104111rec_roxo.logicBlock_backgroundcolor();
		me.__104111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__104117image=document.createElement('div');
		els=me.__104117image__img=document.createElement('img');
		els.className='ggskin ggskin__104117image';
		hs=basePath + 'images/_104117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.4.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104117image.ggUpdatePosition=function (useTransition) {
		}
		me.__104111rec_roxo.appendChild(me.__104117image);
		me.__10411bt_recepcao.appendChild(me.__104111rec_roxo);
		el=me.__104113ic_amarelo=document.createElement('div');
		els=me.__104113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__104113ic_amarelo';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.4.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__104113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__104113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__104113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__104113ic_amarelo.style.left='314px';
					me.__104113ic_amarelo.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me.__104113ic_amarelo.style.left='24px';
					me.__104113ic_amarelo.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__104113ic_amarelo.logicBlock_position();
		me.__104113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__104113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__104113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__104113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__104113ic_amarelo.style.opacity == 0.0) { me.__104113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__104113ic_amarelo.style.opacity=0;
				}
				else {
					me.__104113ic_amarelo.style.visibility=me.__104113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__104113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__104113ic_amarelo.logicBlock_alpha();
		me.__104113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao.appendChild(me.__104113ic_amarelo);
		el=me.__104114rec_amarelo=document.createElement('div');
		el.ggId="1.0.4.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__104114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__104114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__104114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__104114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__104114rec_amarelo.style.width='34px';
					me.__104114rec_amarelo.style.height='100%';
					me.__104114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__104114rec_amarelo);}, 1050);
				}
				else {
					me.__104114rec_amarelo.style.width='340px';
					me.__104114rec_amarelo.style.height='100%';
					me.__104114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__104114rec_amarelo);}, 1050);
				}
			}
		}
		me.__104114rec_amarelo.logicBlock_size();
		me.__104114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__104114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__104114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__104114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__104114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__104114rec_amarelo.style.visibility=me.__104114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__104114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__104114rec_amarelo.style.opacity == 0.0) { me.__104114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__104114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__104114rec_amarelo.logicBlock_alpha();
		me.__104114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao.appendChild(me.__104114rec_amarelo);
		el=me.__104115ic_roxo=document.createElement('div');
		els=me.__104115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__104115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACyCAYAAADS81R0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMjoy'+
			'MS0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTI6MzgtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTI6MzgtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmI5MDEyZmEzLThiYjUtYzE0OC04ZWQ2LWQ3ZDllMzU5Njk0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiOTAxMmZhMy04YmI1LWMxNDgtOGVkNi1kN2Q5ZTM1OTY5NDAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiOTAxMmZhMy04YmI1LWMxNDgtOGVkNi1kN2Q5ZTM1OT'+
			'Y5NDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5MDEyZmEzLThiYjUtYzE0OC04ZWQ2LWQ3ZDllMzU5Njk0MCIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMjoyMS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvVAIeIAAAw2SURBVHic7d15rF1VFcfx73st'+
			'CO1CkFEKtsigTDIo0UIVBEERQlQsEDUim0FEIIIlQUoRBCkgKBgxwSHdiaBhSPAPQRQssZWARaWAQgEZFai0laFdLcTSPv/Y59HH7X3Dveecu/e+d32Sl+YNd5/V11/PsO8e+gYGBjD58KLTgF2BKcDGwEDxkYt+YC3wKvAUsNCp/HO0F/VZUNPnRfuBk4AvANOADeNWVKkXgDuBOU7lnuF+yIKaOC96NHAp4Sza7X4NnO1Unmv8hgU1YV70SuCc2HV02GvAcU7l90O/aEFNlBf9GXBy7Doi+rRT+d3gJxbUBHnR84DZseuIbADY2ak8DeEJzCTEi+6JhRSgD7hp8BMLanqujV1AQvbzosdAl176vejGwFbANoAQ/kOuBJYBS5zK8ojlDcuL7g48EruOxDzgVD7UNUH1ogcDhwEfBPYmhLSvyY++CjwKPAj8AZjnVF'+
			'7uTJUj86KzgfNi15GgXbMOqhfdFjgd+Dzt9zMuBW4ldDjfX1Vt7fCi84GPxawhUadlGVQvKsAs4AxgYoVN3wrMciqLKmxzTLzohoS3FLfv9LEzcE12D1NedDqwCDiXakMKcDTwkBedVXG7Y7EZsEmE4+Zg86yC6kWvBm6h3rPOBsAlXvQuL7pNjcdpNB7rhRnO+Cx+MV6034veBpzVwcMeCtzvRXfu0PFyGwXVSQPjY1cwRn8kzkPGZGCBF93fqTwR4fjtWEXohhtH816PsVhLOLtPqqqospIPanEmjfkkvDkw34vunko31gjOAW4GFhP+bdsN6hpC0PclvEt2UCXVlZB0UL3o5cCRsesg9MneBhwQu5ARnOhU/JDP36ygzXuBj3vRvwN7VtBe25K9Ry068M+NXccQ+3vRS2MXMYxFDSGt2mU1tj0mSQa1GNF+Q+w6'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.4.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 24px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__104115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__104115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__104115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__104115ic_roxo.style.left='313px';
					me.__104115ic_roxo.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me.__104115ic_roxo.style.left='24px';
					me.__104115ic_roxo.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__104115ic_roxo.logicBlock_position();
		me.__104115ic_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__104115ic_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__104115ic_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__104115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104115ic_roxo.ggCurrentLogicStateSize == 0) {
					me.__104115ic_roxo.style.width='20px';
					me.__104115ic_roxo.style.height='20px';
					me.__104115ic_roxo.style.top = 'calc(50% - (20px / 2))';
					setTimeout(function() {skin.updateSize(me.__104115ic_roxo);}, 1050);
				}
				else {
					me.__104115ic_roxo.style.width='18px';
					me.__104115ic_roxo.style.height='18px';
					me.__104115ic_roxo.style.top = 'calc(50% - (18px / 2))';
					setTimeout(function() {skin.updateSize(me.__104115ic_roxo);}, 1050);
				}
			}
		}
		me.__104115ic_roxo.logicBlock_size();
		me.__104115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10411bt_recepcao'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__104115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__104115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__104115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__104115ic_roxo.style.visibility=me.__104115ic_roxo.ggVisible?'inherit':'hidden';
					me.__104115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__104115ic_roxo.style.opacity == 0.0) { me.__104115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__104115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__104115ic_roxo.logicBlock_alpha();
		me.__104115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao.appendChild(me.__104115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__10411bt_recepcao);
		el=me.__1051linha=document.createElement('div');
		el.ggId="1.0.5.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 228px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1051linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1051linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__1051linha);
		el=me.__10511bt_musculacao=document.createElement('div');
		el.ggId="1.0.5.1.1-BT_MUSCULACAO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 232px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10511bt_musculacao.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10511bt_musculacao.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me.__10511bt_musculacao.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__105117image.style.transition='none';
			} else {
				me.__105117image.style.transition='all 1000ms ease 0ms';
			}
			me.__105117image.style.opacity='0.5';
			me.__105117image.style.visibility=me.__105117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10511bt_musculacao']=true;
			me.__105112musculacao.logicBlock_visible();
			me.__105111rec_roxo.logicBlock_size();
			me.__105111rec_roxo.logicBlock_backgroundcolor();
			me.__105113ic_amarelo.logicBlock_position();
			me.__105113ic_amarelo.logicBlock_alpha();
			me.__105114rec_amarelo.logicBlock_size();
			me.__105114rec_amarelo.logicBlock_alpha();
			me.__105115ic_roxo.logicBlock_alpha();
			me.__105115ic_roxo.logicBlock_position();
		}
		me.__10511bt_musculacao.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__105117image.style.transition='none';
			} else {
				me.__105117image.style.transition='all 0ms ease 0ms';
			}
			me.__105117image.style.opacity='0';
			me.__105117image.style.visibility='hidden';
			me.elementMouseOver['_10511bt_musculacao']=false;
			me.__105112musculacao.logicBlock_visible();
			me.__105111rec_roxo.logicBlock_size();
			me.__105111rec_roxo.logicBlock_backgroundcolor();
			me.__105113ic_amarelo.logicBlock_position();
			me.__105113ic_amarelo.logicBlock_alpha();
			me.__105114rec_amarelo.logicBlock_size();
			me.__105114rec_amarelo.logicBlock_alpha();
			me.__105115ic_roxo.logicBlock_alpha();
			me.__105115ic_roxo.logicBlock_position();
		}
		me.__10511bt_musculacao.ggUpdatePosition=function (useTransition) {
		}
		el=me.__105110fundo=document.createElement('div');
		el.ggId="1.0.5.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("MUSCULACAO") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__105110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__105110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__105110fundo.style.transition='';
				if (me.__105110fundo.ggCurrentLogicStateVisible == 0) {
					me.__105110fundo.style.visibility=(Number(me.__105110fundo.style.opacity)>0||!me.__105110fundo.style.opacity)?'inherit':'hidden';
					me.__105110fundo.ggVisible=true;
				}
				else {
					me.__105110fundo.style.visibility="hidden";
					me.__105110fundo.ggVisible=false;
				}
			}
		}
		me.__105110fundo.logicBlock_visible();
		me.__105110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao.appendChild(me.__105110fundo);
		el=me.__105112musculacao=document.createElement('div');
		els=me.__105112musculacao__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.5.1.1.2-MUSCULACAO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__105112musculacao.ggUpdateText=function() {
			var params = [];
			var hs = player._("MUSCULA\xc7\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__105112musculacao.ggUpdateText();
		el.appendChild(els);
		me.__105112musculacao.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105112musculacao.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__105112musculacao.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__105112musculacao.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__105112musculacao.style.transition='';
				if (me.__105112musculacao.ggCurrentLogicStateVisible == 0) {
					me.__105112musculacao.style.visibility="hidden";
					me.__105112musculacao.ggVisible=false;
				}
				else {
					me.__105112musculacao.style.visibility=(Number(me.__105112musculacao.style.opacity)>0||!me.__105112musculacao.style.opacity)?'inherit':'hidden';
					me.__105112musculacao.ggVisible=true;
				}
			}
		}
		me.__105112musculacao.logicBlock_visible();
		me.__105112musculacao.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao.appendChild(me.__105112musculacao);
		el=me.__105111rec_roxo=document.createElement('div');
		el.ggId="1.0.5.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__105111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__105111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__105111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__105111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__105111rec_roxo.style.width='325px';
					me.__105111rec_roxo.style.height='100%';
					me.__105111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__105111rec_roxo);}, 1050);
				}
				else {
					me.__105111rec_roxo.style.width='10px';
					me.__105111rec_roxo.style.height='100%';
					me.__105111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__105111rec_roxo);}, 1050);
				}
			}
		}
		me.__105111rec_roxo.logicBlock_size();
		me.__105111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__105111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__105111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__105111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__105111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__105111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__105111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__105111rec_roxo.logicBlock_backgroundcolor();
		me.__105111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__105117image=document.createElement('div');
		els=me.__105117image__img=document.createElement('img');
		els.className='ggskin ggskin__105117image';
		hs=basePath + 'images/_105117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.5.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105117image.ggUpdatePosition=function (useTransition) {
		}
		me.__105111rec_roxo.appendChild(me.__105117image);
		me.__10511bt_musculacao.appendChild(me.__105111rec_roxo);
		el=me.__105113ic_amarelo=document.createElement('div');
		els=me.__105113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__105113ic_amarelo';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.5.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__105113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__105113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__105113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__105113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__105113ic_amarelo.style.left='314px';
					me.__105113ic_amarelo.style.top = 'calc(50% - (14px / 2))';
				}
				else {
					me.__105113ic_amarelo.style.left='22px';
					me.__105113ic_amarelo.style.top='calc(50% - ((14px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__105113ic_amarelo.logicBlock_position();
		me.__105113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__105113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__105113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__105113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__105113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__105113ic_amarelo.style.opacity == 0.0) { me.__105113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__105113ic_amarelo.style.opacity=0;
				}
				else {
					me.__105113ic_amarelo.style.visibility=me.__105113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__105113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__105113ic_amarelo.logicBlock_alpha();
		me.__105113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao.appendChild(me.__105113ic_amarelo);
		el=me.__105114rec_amarelo=document.createElement('div');
		el.ggId="1.0.5.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__105114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__105114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__105114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__105114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__105114rec_amarelo.style.width='34px';
					me.__105114rec_amarelo.style.height='100%';
					me.__105114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__105114rec_amarelo);}, 1050);
				}
				else {
					me.__105114rec_amarelo.style.width='340px';
					me.__105114rec_amarelo.style.height='100%';
					me.__105114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__105114rec_amarelo);}, 1050);
				}
			}
		}
		me.__105114rec_amarelo.logicBlock_size();
		me.__105114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__105114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__105114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__105114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__105114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__105114rec_amarelo.style.visibility=me.__105114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__105114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__105114rec_amarelo.style.opacity == 0.0) { me.__105114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__105114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__105114rec_amarelo.logicBlock_alpha();
		me.__105114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao.appendChild(me.__105114rec_amarelo);
		el=me.__105115ic_roxo=document.createElement('div');
		els=me.__105115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__105115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAACeCAYAAAA40kakAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMzo0'+
			'Mi0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTM6NTYtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTM6NTYtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwNTg5NmYzLTg3NDMtN2I0MS1hOWQ0LTRlOTQxMDQ5NThjZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMDU4OTZmMy04NzQzLTdiNDEtYTlkNC00ZTk0MTA0OTU4Y2QiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMDU4OTZmMy04NzQzLTdiNDEtYTlkNC00ZTk0MTA0OT'+
			'U4Y2QiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwNTg5NmYzLTg3NDMtN2I0MS1hOWQ0LTRlOTQxMDQ5NThjZCIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMzo0Mi0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmM7bsQAAAcxSURBVHic7dxPiF1XHcDx74wj'+
			'jcmhaaFNFypECo0IgULFUgcLgjtRozTJQik90qZCF6Uo/llURAWzaHHdpvRCEWmaaiuCq6JgiaU2glLBRigW6h+aFGPLmRhJzbh4t2WU1pn73n33/N7c7weye/eeH/PON3PnTXKW1tfXGaMmlQRk4ACwH7i6p1v/GzgDPAM8DpzIJb3R071DaVJZAQ4CtwA3AXuAd/V0+7PA88CTQJNLKj3dd6EsjTHQJpVbgfvoL8r/5wXgSC7p6QHWGkyTyseAB4EPDrDcWeAruaRHBlgrlNEF2qTyPeDrAy97Ebgtl/TDgdediyaVzwMN8O6Blz6aS/rGwGtWNapAm1RuB45VWv4isJpLeq7S+r1oUrkReJrh43zTHbmkhyqtPbjRBNqkciXwInBlxTFOAR/JJS3kF71JZQl4Drih4hjngGtzSecqzjCY5doDDOhO6sYJ8GHg45'+
			'VnmMUnqBsnTN7DI5VnGMyYAv107QFan6s9wAw+W3uA1mdqDzCUMQX6odoDtK6rPcAMosw+xCfHIYwi0CaV9wC7a8/R2lN7gBlcVXuAVu0fVQYzikCBy2oPIE1jLIFKC8lApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwFb6uEmTyg5gFfgAkPq4J1CAPwEnc0kXerqn9JZF2LczBdqk8l7gXuALwK5Zh3kH55tUfgB8O5f0lzmtoRFp9+03mezbnXNappd9O/UjbpPKLUyOlLyT+cUJky/gEeB0k8rBOa6jEWj30Gkme2pecUJP+3aqQJtUDgHH6e+xYCt2AY+2a0udtXvnUeb7DeV/7QKON6kcnubizoE2qbyfyZmoNT5gWgaadgZpyyrv2yXg4Wn27TTDfof5PhpsZmc7g9RFhH373a4XdQq0'+
			'SWUnMNW36p4dbmeRNtWeSRVh3x5qUun0eN31O+hHgR0dr5mHHUxmkbZilQXdt10DjfSzX6RZFNv7ag+wQad92zXQKEdXQqxZFNsVtQfY4PIuL/af+kmBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoGtADSp7AJWgZ2bvH7/3Cfa/nY3qRyoPcSUdtceYBvYv4X3/zxwMpe0ttKkcgPwM2DP3EcTwF7gidpDqJovtn82c6ZJ5ZPLwEMYpxTNHuDYMnB95UEkvb3r/ZBICsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwA'+
			'xUCsxApcAMVArMQKXADFQKbBn4be0hJL2t3y0DdwCv1J5E0n85A9y+kks61aRyLXATkDa56FNs7UQyvbOXgHtqDzGl7zM5lVDTexj46SavKcAzuaS1FYBc0hrw1GZ3blLZO/N4ei2X9GTtIabRpPKt2jNsA893ef/9kEgKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVAqsa6CvzWWK6USaRbH9o/YAG7ze5cVdA3254+vnKdIsiu3PtQfYoNO+7Rror4ALHa+ZhwtMZpG24iQLum87BZpLOg8c73LNnBxvZ5E2lUv6J3H27VqXC6b5kOheoGYc'+
			'59sZpC4Wct92DjSX9DJwG3Cp67U9uATkdgZpyxZ13071a5Zc0gngEFCmuX5KBTicS3pswDW1jbT79jALtG+n/j1oLulHwHXAA0Cn5+qO1to19uWSHp/jOhqBdg/tY0H27cosE+SS/gZ8qUnlbmAV2AtcPss9N3gdeAk4mUv6V0/3lMgl/ZUF2bczBfqmdpCf93EvaSiLsG/9p35SYAYqBWagUmAGKgVmoFJgBioFZqBSYAYqBWagUmAGKgVmoFJgBioFNpZA/d8wWkijCLQ9kybKMZ1naw8wg1drD9A6V3uAoYwi0NYfag/QOl17gBn8sfYArRdqDzCUMQX6k9oDtH5ce4AZPFF7gFaU93LuxhTog9Q/YfwU8IvKM8ziKeA3lWc4x+S9HIXRBJpL+jvw1YojXATuyiWtV5xhJu3sdwFvVBzja7kkfwbdjnJJx4CjFZ'+
			'a+yOTYxV9XWLtXuaRnmRxfWSPSo+17OBpL6+sL+xf61JpUbgXuB64aYLnTwJFc0i8HWGswTSo3M3nU3DfAcq8CX84lPTLAWqGMMlCAJpUEZOAAsB+4uqdbXwJeAZ4FTgCP5ZJqPhLOTZPKCpPzkQ8CNwLX0N9T2Vng90w+mGpySUOeZRvGfwDoT4Z49TxZZgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.5.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 22px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__105115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__105115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__105115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__105115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__105115ic_roxo.style.left='311px';
					me.__105115ic_roxo.style.top = 'calc(50% - (16px / 2))';
				}
				else {
					me.__105115ic_roxo.style.left='22px';
					me.__105115ic_roxo.style.top='calc(50% - ((16px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__105115ic_roxo.logicBlock_position();
		me.__105115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10511bt_musculacao'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__105115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__105115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__105115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__105115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__105115ic_roxo.style.visibility=me.__105115ic_roxo.ggVisible?'inherit':'hidden';
					me.__105115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__105115ic_roxo.style.opacity == 0.0) { me.__105115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__105115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__105115ic_roxo.logicBlock_alpha();
		me.__105115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao.appendChild(me.__105115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__10511bt_musculacao);
		el=me.__1061linha=document.createElement('div');
		el.ggId="1.0.6.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 262px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1061linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1061linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__1061linha);
		el=me.__10611bt_blackhiit=document.createElement('div');
		el.ggId="1.0.6.1.1-BT_BLACKHIIT";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 266px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10611bt_blackhiit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10611bt_blackhiit.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me.__10611bt_blackhiit.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__106117image.style.transition='none';
			} else {
				me.__106117image.style.transition='all 1000ms ease 0ms';
			}
			me.__106117image.style.opacity='0.5';
			me.__106117image.style.visibility=me.__106117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10611bt_blackhiit']=true;
			me.__106112blackhiit.logicBlock_visible();
			me.__106111rec_roxo.logicBlock_size();
			me.__106111rec_roxo.logicBlock_backgroundcolor();
			me.__106113ic_amarelo.logicBlock_position();
			me.__106113ic_amarelo.logicBlock_alpha();
			me.__106114rec_amarelo.logicBlock_size();
			me.__106114rec_amarelo.logicBlock_alpha();
			me.__106115ic_roxo.logicBlock_alpha();
			me.__106115ic_roxo.logicBlock_size();
			me.__106115ic_roxo.logicBlock_position();
		}
		me.__10611bt_blackhiit.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__106117image.style.transition='none';
			} else {
				me.__106117image.style.transition='all 0ms ease 0ms';
			}
			me.__106117image.style.opacity='0';
			me.__106117image.style.visibility='hidden';
			me.elementMouseOver['_10611bt_blackhiit']=false;
			me.__106112blackhiit.logicBlock_visible();
			me.__106111rec_roxo.logicBlock_size();
			me.__106111rec_roxo.logicBlock_backgroundcolor();
			me.__106113ic_amarelo.logicBlock_position();
			me.__106113ic_amarelo.logicBlock_alpha();
			me.__106114rec_amarelo.logicBlock_size();
			me.__106114rec_amarelo.logicBlock_alpha();
			me.__106115ic_roxo.logicBlock_alpha();
			me.__106115ic_roxo.logicBlock_size();
			me.__106115ic_roxo.logicBlock_position();
		}
		me.__10611bt_blackhiit.ggUpdatePosition=function (useTransition) {
		}
		el=me.__106110fundo=document.createElement('div');
		el.ggId="1.0.6.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("BLACKHIIT") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__106110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__106110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__106110fundo.style.transition='';
				if (me.__106110fundo.ggCurrentLogicStateVisible == 0) {
					me.__106110fundo.style.visibility=(Number(me.__106110fundo.style.opacity)>0||!me.__106110fundo.style.opacity)?'inherit':'hidden';
					me.__106110fundo.ggVisible=true;
				}
				else {
					me.__106110fundo.style.visibility="hidden";
					me.__106110fundo.ggVisible=false;
				}
			}
		}
		me.__106110fundo.logicBlock_visible();
		me.__106110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit.appendChild(me.__106110fundo);
		el=me.__106112blackhiit=document.createElement('div');
		els=me.__106112blackhiit__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.6.1.1.2-BLACKHIIT";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__106112blackhiit.ggUpdateText=function() {
			var params = [];
			var hs = player._("BLACK HIIT", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__106112blackhiit.ggUpdateText();
		el.appendChild(els);
		me.__106112blackhiit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106112blackhiit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__106112blackhiit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__106112blackhiit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__106112blackhiit.style.transition='';
				if (me.__106112blackhiit.ggCurrentLogicStateVisible == 0) {
					me.__106112blackhiit.style.visibility="hidden";
					me.__106112blackhiit.ggVisible=false;
				}
				else {
					me.__106112blackhiit.style.visibility=(Number(me.__106112blackhiit.style.opacity)>0||!me.__106112blackhiit.style.opacity)?'inherit':'hidden';
					me.__106112blackhiit.ggVisible=true;
				}
			}
		}
		me.__106112blackhiit.logicBlock_visible();
		me.__106112blackhiit.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit.appendChild(me.__106112blackhiit);
		el=me.__106111rec_roxo=document.createElement('div');
		el.ggId="1.0.6.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__106111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__106111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__106111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__106111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__106111rec_roxo.style.width='325px';
					me.__106111rec_roxo.style.height='100%';
					me.__106111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__106111rec_roxo);}, 1050);
				}
				else {
					me.__106111rec_roxo.style.width='10px';
					me.__106111rec_roxo.style.height='100%';
					me.__106111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__106111rec_roxo);}, 1050);
				}
			}
		}
		me.__106111rec_roxo.logicBlock_size();
		me.__106111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__106111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__106111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__106111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__106111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__106111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__106111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__106111rec_roxo.logicBlock_backgroundcolor();
		me.__106111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__106117image=document.createElement('div');
		els=me.__106117image__img=document.createElement('img');
		els.className='ggskin ggskin__106117image';
		hs=basePath + 'images/_106117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.6.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106117image.ggUpdatePosition=function (useTransition) {
		}
		me.__106111rec_roxo.appendChild(me.__106117image);
		me.__10611bt_blackhiit.appendChild(me.__106111rec_roxo);
		el=me.__106113ic_amarelo=document.createElement('div');
		els=me.__106113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__106113ic_amarelo';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.6.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__106113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__106113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__106113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__106113ic_amarelo.style.left='314px';
					me.__106113ic_amarelo.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__106113ic_amarelo.style.left='25px';
					me.__106113ic_amarelo.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__106113ic_amarelo.logicBlock_position();
		me.__106113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__106113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__106113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__106113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__106113ic_amarelo.style.opacity == 0.0) { me.__106113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__106113ic_amarelo.style.opacity=0;
				}
				else {
					me.__106113ic_amarelo.style.visibility=me.__106113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__106113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__106113ic_amarelo.logicBlock_alpha();
		me.__106113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit.appendChild(me.__106113ic_amarelo);
		el=me.__106114rec_amarelo=document.createElement('div');
		el.ggId="1.0.6.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__106114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__106114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__106114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__106114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__106114rec_amarelo.style.width='34px';
					me.__106114rec_amarelo.style.height='100%';
					me.__106114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__106114rec_amarelo);}, 1050);
				}
				else {
					me.__106114rec_amarelo.style.width='340px';
					me.__106114rec_amarelo.style.height='100%';
					me.__106114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__106114rec_amarelo);}, 1050);
				}
			}
		}
		me.__106114rec_amarelo.logicBlock_size();
		me.__106114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__106114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__106114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__106114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__106114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__106114rec_amarelo.style.visibility=me.__106114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__106114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__106114rec_amarelo.style.opacity == 0.0) { me.__106114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__106114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__106114rec_amarelo.logicBlock_alpha();
		me.__106114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit.appendChild(me.__106114rec_amarelo);
		el=me.__106115ic_roxo=document.createElement('div');
		els=me.__106115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__106115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAADBCAYAAADCSCKTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxNDoz'+
			'OC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6NTItMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6NTItMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3Mzg5MTk2LTFlZDUtNGU0ZC04MjlkLWNkZWIwYzA4NzkyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNzM4OTE5Ni0xZWQ1LTRlNGQtODI5ZC1jZGViMGMwODc5MjkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNzM4OTE5Ni0xZWQ1LTRlNGQtODI5ZC1jZGViMGMwOD'+
			'c5MjkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3Mzg5MTk2LTFlZDUtNGU0ZC04MjlkLWNkZWIwYzA4NzkyOSIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxNDozOC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv2GJEoAAA69SURBVHic7d17sBxlmcfx75kk'+
			'BJeHQMAlXgrBWIhhiaSC4hJFRXGDFxBZWEsXCl5KwUUx6Loi3hUsF6MWglRRoHnRQBBUJK4lF8tddFVQTIAFYgQMEdyV4EJC8oRLbsc/3j6HOZOemb5Nd0+f51N1qs6Z6cuTml/e7ul++31HRkdHqZIXnQkcCswF5gD7A/sCewN7AVMqK67+dgCPRT8PA2uB1cDdwAqn8nh1pcFI2eHyos8B3gj8A3AU8DJgpNQiJo/VwE+Bm4GfOJWnytx5KeHyoi3gTcCpwDHAbgPfqem0GfgR8C3gJqeyY9A7HGi4vOiewHuB9wP7DWxHJq0/AV8HLnMq6we1k4GEKwrV2dHPHoXvwBRlM3AR8CWnsqHojRcaLi86FTgT+AzhZNwMh/XA54FLnMrWojZaWLi86GHANwjf+sxwugc43ancWsTGcofLi04DPgecA7SKKMpUagewGP'+
			'i0U9mSZ0O5wuVFXwR8D3hlniJMLf0WONGprM26gczh8qKvA67Dzq2abD3wj07lv7KsnOkw5kVPAX6CBavpZgI3edHTsqycOlxedBFwBTAtyw7N0JkGfNOLfjjtiqnC5UX/Fbgw7U5MI3zFi34szQqJz7m86HuAy7NUZRrldKeSKAeJwuVF3wYsxy41mHCp4jin8h/9FuwbLi96EPBrQIqpzTSAAq9yKqt6LdQzXF5UgBXAS4utzTTA/cB8p6LdFuh3mPs6FiwT7wDgkl4LdG25vOhxwA+Kr8k0zDucyvVxb8SGy4vuQejF+LzB1mUaYB1woFN5ovONbofFz2LBMsnMIuRlJzu1XF70AOB32IMRJrntwByncn/7i3Et13lYsEw6Uwi5mWBCy+VFXwaswp7GMemNAgc5ldVjL3S2XB/BgmWyGSHk59kXxlouL7oX8H/A'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.6.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__106115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__106115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__106115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__106115ic_roxo.style.left='314px';
					me.__106115ic_roxo.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__106115ic_roxo.style.left='25px';
					me.__106115ic_roxo.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__106115ic_roxo.logicBlock_position();
		me.__106115ic_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__106115ic_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__106115ic_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__106115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106115ic_roxo.ggCurrentLogicStateSize == 0) {
					me.__106115ic_roxo.style.width='18px';
					me.__106115ic_roxo.style.height='22px';
					me.__106115ic_roxo.style.top = 'calc(50% - (22px / 2))';
					setTimeout(function() {skin.updateSize(me.__106115ic_roxo);}, 1050);
				}
				else {
					me.__106115ic_roxo.style.width='16px';
					me.__106115ic_roxo.style.height='20px';
					me.__106115ic_roxo.style.top = 'calc(50% - (20px / 2))';
					setTimeout(function() {skin.updateSize(me.__106115ic_roxo);}, 1050);
				}
			}
		}
		me.__106115ic_roxo.logicBlock_size();
		me.__106115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10611bt_blackhiit'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__106115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__106115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__106115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__106115ic_roxo.style.visibility=me.__106115ic_roxo.ggVisible?'inherit':'hidden';
					me.__106115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__106115ic_roxo.style.opacity == 0.0) { me.__106115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__106115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__106115ic_roxo.logicBlock_alpha();
		me.__106115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit.appendChild(me.__106115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__10611bt_blackhiit);
		el=me.__1071linha=document.createElement('div');
		el.ggId="1.0.7.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 296px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1071linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1071linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__1071linha);
		el=me.__10711bt_cardio=document.createElement('div');
		el.ggId="1.0.7.1.1-BT_CARDIO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10711bt_cardio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10711bt_cardio.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me.__10711bt_cardio.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__107117image.style.transition='none';
			} else {
				me.__107117image.style.transition='all 1000ms ease 0ms';
			}
			me.__107117image.style.opacity='0.5';
			me.__107117image.style.visibility=me.__107117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10711bt_cardio']=true;
			me.__107112cardio.logicBlock_visible();
			me.__107111rec_roxo.logicBlock_size();
			me.__107111rec_roxo.logicBlock_backgroundcolor();
			me.__107113ic_amarelo.logicBlock_position();
			me.__107113ic_amarelo.logicBlock_alpha();
			me.__107114rec_amarelo.logicBlock_size();
			me.__107114rec_amarelo.logicBlock_alpha();
			me.__107115ic_roxo.logicBlock_alpha();
			me.__107115ic_roxo.logicBlock_size();
			me.__107115ic_roxo.logicBlock_position();
		}
		me.__10711bt_cardio.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__107117image.style.transition='none';
			} else {
				me.__107117image.style.transition='all 0ms ease 0ms';
			}
			me.__107117image.style.opacity='0';
			me.__107117image.style.visibility='hidden';
			me.elementMouseOver['_10711bt_cardio']=false;
			me.__107112cardio.logicBlock_visible();
			me.__107111rec_roxo.logicBlock_size();
			me.__107111rec_roxo.logicBlock_backgroundcolor();
			me.__107113ic_amarelo.logicBlock_position();
			me.__107113ic_amarelo.logicBlock_alpha();
			me.__107114rec_amarelo.logicBlock_size();
			me.__107114rec_amarelo.logicBlock_alpha();
			me.__107115ic_roxo.logicBlock_alpha();
			me.__107115ic_roxo.logicBlock_size();
			me.__107115ic_roxo.logicBlock_position();
		}
		me.__10711bt_cardio.ggUpdatePosition=function (useTransition) {
		}
		el=me.__107110fundo=document.createElement('div');
		el.ggId="1.0.7.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("CARDIO") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__107110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__107110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__107110fundo.style.transition='';
				if (me.__107110fundo.ggCurrentLogicStateVisible == 0) {
					me.__107110fundo.style.visibility=(Number(me.__107110fundo.style.opacity)>0||!me.__107110fundo.style.opacity)?'inherit':'hidden';
					me.__107110fundo.ggVisible=true;
				}
				else {
					me.__107110fundo.style.visibility="hidden";
					me.__107110fundo.ggVisible=false;
				}
			}
		}
		me.__107110fundo.logicBlock_visible();
		me.__107110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio.appendChild(me.__107110fundo);
		el=me.__107112cardio=document.createElement('div');
		els=me.__107112cardio__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.7.1.1.2-CARDIO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__107112cardio.ggUpdateText=function() {
			var params = [];
			var hs = player._("CARDIO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__107112cardio.ggUpdateText();
		el.appendChild(els);
		me.__107112cardio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107112cardio.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__107112cardio.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__107112cardio.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__107112cardio.style.transition='';
				if (me.__107112cardio.ggCurrentLogicStateVisible == 0) {
					me.__107112cardio.style.visibility="hidden";
					me.__107112cardio.ggVisible=false;
				}
				else {
					me.__107112cardio.style.visibility=(Number(me.__107112cardio.style.opacity)>0||!me.__107112cardio.style.opacity)?'inherit':'hidden';
					me.__107112cardio.ggVisible=true;
				}
			}
		}
		me.__107112cardio.logicBlock_visible();
		me.__107112cardio.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio.appendChild(me.__107112cardio);
		el=me.__107111rec_roxo=document.createElement('div');
		el.ggId="1.0.7.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__107111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__107111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__107111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__107111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__107111rec_roxo.style.width='325px';
					me.__107111rec_roxo.style.height='100%';
					me.__107111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__107111rec_roxo);}, 1050);
				}
				else {
					me.__107111rec_roxo.style.width='10px';
					me.__107111rec_roxo.style.height='100%';
					me.__107111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__107111rec_roxo);}, 1050);
				}
			}
		}
		me.__107111rec_roxo.logicBlock_size();
		me.__107111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__107111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__107111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__107111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__107111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__107111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__107111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__107111rec_roxo.logicBlock_backgroundcolor();
		me.__107111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__107117image=document.createElement('div');
		els=me.__107117image__img=document.createElement('img');
		els.className='ggskin ggskin__107117image';
		hs=basePath + 'images/_107117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.7.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107117image.ggUpdatePosition=function (useTransition) {
		}
		me.__107111rec_roxo.appendChild(me.__107117image);
		me.__10711bt_cardio.appendChild(me.__107111rec_roxo);
		el=me.__107113ic_amarelo=document.createElement('div');
		els=me.__107113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__107113ic_amarelo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACACAYAAACSqlKoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKsUlEQVR4nO2dz7NcRRXHPxlefolWoi+BqEneSwwkEhQKhA1YSiEllAsXWpYLFxYuxHJr+WOhVuGPKvUPcGOpG4HSUhdW+asiRSlCKaIIlErIj0lCIg+BhxJ+VUziouf65k3m9unT3TN3bt/z2eS+uT19+2W+0+/c7zndd82ZQ9swsrMLePfg+LdAv7mhlMlc0wMokI8B3wDeMvj5JPBZ4K7GRlQga2zGzcrNwAHPuXunOJai6TU9gML4WuQ5Q4kJNx8bgP2e8/uA9VMaS/GYcPOxA3i95/wmYH5KYykeE24+dgnn1wBbpzGQLmDCzcfugDZ2J5wJE24+QoR76cRH0RFMuPl4W0AbE24mTLj5WAxo8+ZJD6IrmH'+
			'DzsIEw4VqMmwkTbh62A28KaGfCzYQJNw8hN2YAWyY6ig5hws2D5OFWXIJlz7Jgws1D6Iy7FcueZcGEm4cQKwzc/7dlzzJgws1DaKgA5uVmwYSbzgZgQdHenIUMmHDT2YEubrUZNwMm3HQ0YQLYjJsFE246oY5ChaV9M2DCTUcrXAsVMmDCTSfUCqu4ZCKj6Bgm3HS0Me5WLHuWjAk3Da0VBq5ewWoWEjHhphFaFTbMRZhwkzHhpqENEyrMEkvEhJuG1lGoMGchERNuGrHCtRk3ERNuGlorrMKEm4gJNw2LcRvChBtPjBVWYcJNxIQbz3biVzNY9iwRE248iwnvnceyZ0mYcOOJvTEDW3uWjG2lH0+sFQYr2bNTEe+9GPg0cC2wDPyQDu50bsKNxzfjnsdtK+pjG/Co8poLwP24+Lrik8CXgK8o+2o1FirE47PCloCH'+
			'hffHOAs/YbVoK+4Ebojor7WYcONYj98KOwX8XuhDm/bdB1zjOX+7sr9WY8KNQ1og2QceEfrQzrhXCOf3KvtrNSbcOBaF88eAx4U2WuFK19yDu+nrBCbcOCQr7GngSaGNdtGkdM1LSfOWW4UJNw7JCjsBvCC00WbPFgPaXK7ss7WYcOOQhFv5s//2tNFmz0J847cr+ms1Jtw4JBGdHPz7jKeNZu3ZJmBnQLt9gf21HhOunvX4RfQy8NTg2CfcOcKFuxt4XUC7zjgLJlw9O/AL7jjw6uDYJ1wI93JDZltwMW4nnAUTrh6pBvfo0PHTQttQSyy0LmIbHXEWTLh6JFtqEsLVVKJdpmjbWky4eiQRHRk6ziVczRKhTjgLJlw9kogODx1Lwg2NcRcD20FHnAUTrh4p3jw2dPwvoW1I9mwTJtwLMOHqWI9fRC+zOsaVXIWQ7N'+
			'kuwqywisvpwOda/C+YmZ34q8KOszrVu4Q/e7YFWCdcU7uSuBPOgglXh+SnHh35+TT+WXce+fFRMUuEik9ElCrcO4AHgYPAz4H3ZepXY4VVLHnah2TP9gjnx1F8nFvimrPvAJ8Y+vky4DbgI8CPEvuWhHt4zGvSDZrkLMTsllO8cEubcd/LatEOcw9uhWwK0p/tccJNtcRidsuxUKFlfNhzrgfcmti/xgqrkITrs8Q2ETfj7qW8z3YVpf1y7xTOpwh3Hf7Zb9QKq0jJnu0GNgrvr+szZd+Hmack4W4ErhbavD+h/wX8VtgJxltfKaFC7KZ6UHjNQknCvQp4g9BmB/KsXIckoiM1r0tJCN+MG7uNKRR+g1aScH17DgwTGy5If3rHhQngXIXznvf5ZtwYK6yi6GKbkoR7bWC72yL7l4RbN+MuAf/xvG+e+uxZyoxb9MLJ'+
			'koQbOuPegLtb1yIJ91DN66fxe7lbqM+epcS4eyl4NUQpwp0Hrgxsuxa4OeIaMVZYRUz2TKoKex5/HcQ20mbsmaYU4V6DLguojXPXIleF9T3nY6rEpKqwPwK/Efot1lkoSbgatLbYIrIV9oLnvG/GhfHOwqLwnodx9Rg+inUWShHuu5TtdwLvULb3UecoVPxTOD9OuNKf+SeRtzI14c442hkXdO5CrKNQEZM9k6ywU8g7QhZbs1CCcBeIS29q4lzNAslxxMy40u+0hNtK3+cRF1uzUMIvFerfjnIj4bZYTFXYMDGljVJ4UvV53NOmWGehy8LV2GLSh98XzkvZs9EZV6oKWwaeHRwfFK5dZLjQZeFCWLiwjjQrDFyMK+3cOJw9W8RfFXYMODM4/rtwbRPuDHIRcTdmFSG22AL+5TUhe+G+hD9cGF17pqmLeEJoW2TNQt'+
			'uFewX+xYavAf/1nA+xxTR7hfnweblrWf3l0Gw6Is24RdYstF24UphwF/BjoY1ki6VaYRWa7JnmmgeRnYXiahZKF+7PgB8IbaQ4N9UKq9BkzzTCPUkHnYXShXsQOCC0kWyxVCusQrP2bFFoOxqedM5ZaLNwL8atevBxAniFla3txyHZYtJsFRrjhiYhNuMX7jLu9xrmH0LfJtwZ4ir81VNPsFLA/Wuhrzp3QbLCXsFfzjhM6Nqz7fitsP7gusNIwi3OWWizcKUP489Dx78U2tYJdwO6vcJ8hG6rL2XM+mNek4SbsgRoJhmuYe0B1+H+BPsspFngHP49FAD+NHR8ADhL/d31AvBx3CqG6st8DrheuEZfOD/Ms/ifqh4q3HExdeUs1PV9JXAT7nOVnuo+i8zhvPCHcJ/L/4X7UeCr6LZsn3WGZ9zncbWrN3rafy/iGqGO'+
			'AqxkzzbXnK9m9h0R13wKF/fWiX4LcK/Qbxs4BHwRuKcH3ALcTVmifQ34y8hrUrgQg0a4L7FSXzCOzYN/3yr0U3czKDkLJbAHp9VbesC3Gh7MJHiMC2sDJiHcUCuswuflbsRluaS9xOq+LFIGrSS+2UN+nHwbGZ1twa0WkCwpLX1leykJcTX+DULGWWEV0kOvS2J/D3ix6VFMgIdqXpcWF2o4T/2S9Dok4V6Hv/aiz4VWWMUjyrG0mRd7xN2UzDo/rXn92xmvcTf6L73k5b6H+ps38HvGD+BPtJTEd3vA54H7Gh5ITj5I/U3QA8CXM1zjUeBTEe/zhSrncYs+fXv4+mLqs8AHcOFEydwHfGEO5+3dBNyOs4veyOz7uMP0cN7eYdxfD6k+9U7gfuBDuPqAc/irqyrmcDPsg8TP3L4ZN8RflW4G/4q7wbsD592uwwm67c'+
			'zhvpC/YxAhrDlzKPThhkYGrgf+kPD+W4FfZRpLq2lzyreNPEfY7F5HaEFP8Zhwp4v03DMfPiusc5hwp8tp/NkzH0ept8I6hwl3+khebh39nINoOybc6RMrXE1dRPGYcKdPrHC1dRFFY8KdPlL2rA5zFIYw4U6fWOH2cw6i7Zhwp09Mhdoy/iXoncOEO31iYlyzwkYw4U6fGB83dCVxZzDhTp9nCF8ZXGGOwggm3OkTkz0z4Y5gwm0GbZzbn8Qg2owJtxm0wjUPdwQTbjNovNxl7ObsAky4zaAR7hHg1UkNpK2YcJtBI1ybbcdgwm0G7YxrjGDCbQaNcM0KG4MJtxmeU7Q1R2EMJtxm0GTP+pMbRnsx4TZDaPbMrLAaTLjNIe1QDmaF1WLCbY6QGzSbbWsw4TZHiHDNCqvBhNscIfUKZoXVYMJtjpAZ16ywGky4zRGy'+
			'9qw/6UG0FRNuc0iuwjIm3FpMuM0hxbgncU8PMsZgwm2OE/hn3XEPYDEGmHCb4yzwOc/5r09rIG3EhNss3wc+w+o9c/+Ge7SB9HzeTmNb6c8G+3EPLjkL/AJd9Vgn+R+kop1jt07ywQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.7.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__107113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__107113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__107113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__107113ic_amarelo.style.left='314px';
					me.__107113ic_amarelo.style.top = 'calc(50% - (17px / 2))';
				}
				else {
					me.__107113ic_amarelo.style.left='21px';
					me.__107113ic_amarelo.style.top='calc(50% - ((17px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__107113ic_amarelo.logicBlock_position();
		me.__107113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__107113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__107113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__107113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__107113ic_amarelo.style.opacity == 0.0) { me.__107113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__107113ic_amarelo.style.opacity=0;
				}
				else {
					me.__107113ic_amarelo.style.visibility=me.__107113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__107113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__107113ic_amarelo.logicBlock_alpha();
		me.__107113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio.appendChild(me.__107113ic_amarelo);
		el=me.__107114rec_amarelo=document.createElement('div');
		el.ggId="1.0.7.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__107114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__107114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__107114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__107114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__107114rec_amarelo.style.width='34px';
					me.__107114rec_amarelo.style.height='100%';
					me.__107114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__107114rec_amarelo);}, 1050);
				}
				else {
					me.__107114rec_amarelo.style.width='340px';
					me.__107114rec_amarelo.style.height='100%';
					me.__107114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__107114rec_amarelo);}, 1050);
				}
			}
		}
		me.__107114rec_amarelo.logicBlock_size();
		me.__107114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__107114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__107114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__107114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__107114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__107114rec_amarelo.style.visibility=me.__107114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__107114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__107114rec_amarelo.style.opacity == 0.0) { me.__107114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__107114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__107114rec_amarelo.logicBlock_alpha();
		me.__107114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio.appendChild(me.__107114rec_amarelo);
		el=me.__107115ic_roxo=document.createElement('div');
		els=me.__107115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__107115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACACAYAAACSqlKoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxNDoy'+
			'MC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6MzQtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6MzQtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZhOTc4ZDNmLTZiYTYtZDk0Ny1iMDg4LTlkM2E4M2M2OTliYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmYTk3OGQzZi02YmE2LWQ5NDctYjA4OC05ZDNhODNjNjk5YmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYTk3OGQzZi02YmE2LWQ5NDctYjA4OC05ZDNhODNjNj'+
			'k5YmEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZhOTc4ZDNmLTZiYTYtZDk0Ny1iMDg4LTlkM2E4M2M2OTliYSIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxNDoyMC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsRAMm4AAAtsSURBVHic7Z1drB1VFcd/vbRI'+
			'ZRuqbaFqP05rbaugJSLEBIwiIUCM8cGP+GCigw+ivho/HoiJURM18ZUX4/giJSZqog/4UQjRSKNYJWoUSltOe2nlQuFW2Xw02l4fzkx7ejiz19575pw5s8/6vXSYWbNnX+7/rLvnv/beZ9XKygpKs+TGbgfeW/znbzNr+i12J0lWqXCbJTf2k8C3gTcVp04AX8qsube9XqWHCrdBcmNvAfZXXL4ls+bBafYnZRba7kBifDPymhKIZtyGyI29DHgWMBUhp4FNmTVnptaphNGM2xxbqBYtwBXA+in1JXlUuM2xXbi+Ctg4jY7MAyrc5tjhEbNp4r2YE1S4zeEj3Ksm3os5QYXbHG/xiFHhNoQKtzl6HjFvnHQn5gUVbgMUVljPI1THuA2hwm2GzcAbPOJUuA2hwm0GnxczgA0T7cUcocJtBsnDLbkyN/Y1E+3JnKDCbQ'+
			'bfjLsRrZ41ggq3GXysMBj8/9bqWQOocJvBd6gA6uU2ggq3JoUVti3gFnUWGkCFW58thI1bNeM2gAq3PiHDBNCM2wgq3Pr4OgolWvZtABVufUKFq0OFBlDh1sfXCiu5ciK9mDNUuPUJHeNu1OpZfVS4NYiwwmAwX0HnLNREhVsP31lhw1yCCrc2Ktx6hA4TStQSq4kKtx6hjkKJOgs1UeHWI1a4mnFrosKtR6gVVqLCrYkKtx46xm0JFW4kkVZYiQq3JirceDYTv5pBq2c1UeHG06tx73qtntVDhRtP7IsZ6Nqz2qxuuwMdJtYKgwvVs5OhN+bGXg58AbgOWAZ+PI87nWvGjceVcX12yw5+QcuN3QY8xuA7Jj4OfBZ4IDf27tC2uo4KNx6XFbYEHBTuj3EWfsrgpXCUr+fG3hjRXmdR4UZQvFi5rLCTwO+FZoLKvrmx'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.7.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 21px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__107115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__107115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__107115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__107115ic_roxo.style.left='309px';
					me.__107115ic_roxo.style.top = 'calc(50% - (17px / 2))';
				}
				else {
					me.__107115ic_roxo.style.left='21px';
					me.__107115ic_roxo.style.top='calc(50% - ((17px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__107115ic_roxo.logicBlock_position();
		me.__107115ic_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__107115ic_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__107115ic_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__107115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107115ic_roxo.ggCurrentLogicStateSize == 0) {
					me.__107115ic_roxo.style.width='27px';
					me.__107115ic_roxo.style.height='19px';
					me.__107115ic_roxo.style.top = 'calc(50% - (19px / 2))';
					setTimeout(function() {skin.updateSize(me.__107115ic_roxo);}, 1050);
				}
				else {
					me.__107115ic_roxo.style.width='24px';
					me.__107115ic_roxo.style.height='17px';
					me.__107115ic_roxo.style.top = 'calc(50% - (17px / 2))';
					setTimeout(function() {skin.updateSize(me.__107115ic_roxo);}, 1050);
				}
			}
		}
		me.__107115ic_roxo.logicBlock_size();
		me.__107115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10711bt_cardio'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__107115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__107115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__107115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__107115ic_roxo.style.visibility=me.__107115ic_roxo.ggVisible?'inherit':'hidden';
					me.__107115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__107115ic_roxo.style.opacity == 0.0) { me.__107115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__107115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__107115ic_roxo.logicBlock_alpha();
		me.__107115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio.appendChild(me.__107115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__10711bt_cardio);
		el=me.__1081linha=document.createElement('div');
		el.ggId="1.0.8.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 330px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1081linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1081linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__1081linha);
		el=me.__10811bt_sala_spinning=document.createElement('div');
		el.ggId="1.0.8.1.1-BT_SALA_SPINNING";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 334px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10811bt_sala_spinning.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10811bt_sala_spinning.onclick=function (e) {
			player.openNext("{node33}","");
		}
		me.__10811bt_sala_spinning.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__108117image.style.transition='none';
			} else {
				me.__108117image.style.transition='all 1000ms ease 0ms';
			}
			me.__108117image.style.opacity='0.5';
			me.__108117image.style.visibility=me.__108117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10811bt_sala_spinning']=true;
			me.__108112sala_spinning.logicBlock_visible();
			me.__108111rec_roxo.logicBlock_size();
			me.__108111rec_roxo.logicBlock_backgroundcolor();
			me.__108113ic_amarelo.logicBlock_position();
			me.__108113ic_amarelo.logicBlock_alpha();
			me.__108114rec_amarelo.logicBlock_size();
			me.__108114rec_amarelo.logicBlock_alpha();
			me.__108115ic_roxo.logicBlock_alpha();
			me.__108115ic_roxo.logicBlock_position();
			me.__108115ic_roxo.logicBlock_size();
		}
		me.__10811bt_sala_spinning.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__108117image.style.transition='none';
			} else {
				me.__108117image.style.transition='all 0ms ease 0ms';
			}
			me.__108117image.style.opacity='0';
			me.__108117image.style.visibility='hidden';
			me.elementMouseOver['_10811bt_sala_spinning']=false;
			me.__108112sala_spinning.logicBlock_visible();
			me.__108111rec_roxo.logicBlock_size();
			me.__108111rec_roxo.logicBlock_backgroundcolor();
			me.__108113ic_amarelo.logicBlock_position();
			me.__108113ic_amarelo.logicBlock_alpha();
			me.__108114rec_amarelo.logicBlock_size();
			me.__108114rec_amarelo.logicBlock_alpha();
			me.__108115ic_roxo.logicBlock_alpha();
			me.__108115ic_roxo.logicBlock_position();
			me.__108115ic_roxo.logicBlock_size();
		}
		me.__10811bt_sala_spinning.ggUpdatePosition=function (useTransition) {
		}
		el=me.__108110fundo=document.createElement('div');
		el.ggId="1.0.8.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("SPINNING") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__108110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__108110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__108110fundo.style.transition='';
				if (me.__108110fundo.ggCurrentLogicStateVisible == 0) {
					me.__108110fundo.style.visibility=(Number(me.__108110fundo.style.opacity)>0||!me.__108110fundo.style.opacity)?'inherit':'hidden';
					me.__108110fundo.ggVisible=true;
				}
				else {
					me.__108110fundo.style.visibility="hidden";
					me.__108110fundo.ggVisible=false;
				}
			}
		}
		me.__108110fundo.logicBlock_visible();
		me.__108110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning.appendChild(me.__108110fundo);
		el=me.__108112sala_spinning=document.createElement('div');
		els=me.__108112sala_spinning__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.8.1.1.2-SALA_SPINNING";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__108112sala_spinning.ggUpdateText=function() {
			var params = [];
			var hs = player._("SALA SPINNING", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__108112sala_spinning.ggUpdateText();
		el.appendChild(els);
		me.__108112sala_spinning.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108112sala_spinning.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__108112sala_spinning.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__108112sala_spinning.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__108112sala_spinning.style.transition='';
				if (me.__108112sala_spinning.ggCurrentLogicStateVisible == 0) {
					me.__108112sala_spinning.style.visibility="hidden";
					me.__108112sala_spinning.ggVisible=false;
				}
				else {
					me.__108112sala_spinning.style.visibility=(Number(me.__108112sala_spinning.style.opacity)>0||!me.__108112sala_spinning.style.opacity)?'inherit':'hidden';
					me.__108112sala_spinning.ggVisible=true;
				}
			}
		}
		me.__108112sala_spinning.logicBlock_visible();
		me.__108112sala_spinning.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning.appendChild(me.__108112sala_spinning);
		el=me.__108111rec_roxo=document.createElement('div');
		el.ggId="1.0.8.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__108111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__108111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__108111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__108111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__108111rec_roxo.style.width='325px';
					me.__108111rec_roxo.style.height='100%';
					me.__108111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__108111rec_roxo);}, 1050);
				}
				else {
					me.__108111rec_roxo.style.width='10px';
					me.__108111rec_roxo.style.height='100%';
					me.__108111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__108111rec_roxo);}, 1050);
				}
			}
		}
		me.__108111rec_roxo.logicBlock_size();
		me.__108111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__108111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__108111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__108111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__108111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__108111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__108111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__108111rec_roxo.logicBlock_backgroundcolor();
		me.__108111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__108117image=document.createElement('div');
		els=me.__108117image__img=document.createElement('img');
		els.className='ggskin ggskin__108117image';
		hs=basePath + 'images/_108117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.8.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108117image.ggUpdatePosition=function (useTransition) {
		}
		me.__108111rec_roxo.appendChild(me.__108117image);
		me.__10811bt_sala_spinning.appendChild(me.__108111rec_roxo);
		el=me.__108113ic_amarelo=document.createElement('div');
		els=me.__108113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__108113ic_amarelo';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.8.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__108113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__108113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__108113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__108113ic_amarelo.style.left='314px';
					me.__108113ic_amarelo.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me.__108113ic_amarelo.style.left='21px';
					me.__108113ic_amarelo.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__108113ic_amarelo.logicBlock_position();
		me.__108113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__108113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__108113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__108113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__108113ic_amarelo.style.opacity == 0.0) { me.__108113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__108113ic_amarelo.style.opacity=0;
				}
				else {
					me.__108113ic_amarelo.style.visibility=me.__108113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__108113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__108113ic_amarelo.logicBlock_alpha();
		me.__108113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning.appendChild(me.__108113ic_amarelo);
		el=me.__108114rec_amarelo=document.createElement('div');
		el.ggId="1.0.8.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__108114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__108114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__108114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__108114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__108114rec_amarelo.style.width='34px';
					me.__108114rec_amarelo.style.height='100%';
					me.__108114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__108114rec_amarelo);}, 1050);
				}
				else {
					me.__108114rec_amarelo.style.width='340px';
					me.__108114rec_amarelo.style.height='100%';
					me.__108114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__108114rec_amarelo);}, 1050);
				}
			}
		}
		me.__108114rec_amarelo.logicBlock_size();
		me.__108114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__108114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__108114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__108114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__108114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__108114rec_amarelo.style.visibility=me.__108114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__108114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__108114rec_amarelo.style.opacity == 0.0) { me.__108114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__108114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__108114rec_amarelo.logicBlock_alpha();
		me.__108114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning.appendChild(me.__108114rec_amarelo);
		el=me.__108115ic_roxo=document.createElement('div');
		els=me.__108115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__108115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACQCAYAAACh8EESAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMzoy'+
			'MS0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTM6MzctMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTM6MzctMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZlYTBmYTU0LWJmODgtN2U0Ni05OTJmLTcxYjMxNWE1OWRiNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2ZWEwZmE1NC1iZjg4LTdlNDYtOTkyZi03MWIzMTVhNTlkYjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZWEwZmE1NC1iZjg4LTdlNDYtOTkyZi03MWIzMTVhNT'+
			'lkYjYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZlYTBmYTU0LWJmODgtN2U0Ni05OTJmLTcxYjMxNWE1OWRiNiIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMzoyMS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnQgM+cAABGYSURBVHic7Z15tOXTlcc/76Xo'+
			'wqZEzCIEjcQqtCEVRRBDJ8RUJSvSRHME6W4RHQmyzKHEEBIksZahHFMiNI2FbpSpUU1MQYLQiHlKhSq2VEVRr/84p+R59e579/x+v/P7/c51PmvVWrXq/s4+u+793nPPsPc+fQMDA2QyTWFF1weOA7YGFgYeBS4CzjIqc0Lt9WVBZ5rCik4CLgMWGublp4FJRuV3ITazoDONYEU3BKYDfzfCY38C1jUqr3Zrt7+sY5lMKFZ0DDCVkcUMsAxwWIjtLOhMExhgvS6f3SrEcBZ0plas6GK4RWC3jA2xnwWdqZuDgeUDnn8yxHgWdKY2rOiywKGBza4PeTgLOlMnRwMS8PxM4JKQDrKgM7VgRf8e+FZgs1ONioY0yILO1MWJwJiA518DzgjtJAs6Ex0rOgHYNbDZCaGjM2RBZ+phSuDzzwFnF+koCzoTFSu6JbBNYLNjjc'+
			'q7RfrLgs7E5oTA5x/HRdsVIgs6Ew0r+iVgYmCzI4zKvKJ9ZkFnYnJI4PP3AVeX6TCHj2ai4AP3fxvYbFujcnOZfvMInYnF9wOfv62smCELOhMBK/opYLfAZodX0XcWdCYGhxF2KniNUbmnio6zoDOV4ufO+wc0GQCOqqr/LOhMZVjRZYBfETY6Xx6aCDsSWdCZSrCiawPTgM8ENHsfOLJKP0K+SZkW4xNPPw4sNuSlxYGPdWg2/7W5wDvDvK7+tVnAXKPyoWf8iLwR8DXgnxg96XUoFxuVpwLbjEjeh04UK7oIsBcwGdgYWLKmrmcD7wKLMnw9jW6ZC6xhVJ6vxCtPHqETxIquBfwXsFoD3S/i/5TlnKrFDHkOnRxWtB+4kmbEXBVzCA9a6oos6PSYAKzTtBMl+ZlReSWG4Szo9FixaQdKosApsYx3nENb0U8C5wCf'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.8.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 21px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__108115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__108115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__108115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__108115ic_roxo.style.left='309px';
					me.__108115ic_roxo.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me.__108115ic_roxo.style.left='21px';
					me.__108115ic_roxo.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__108115ic_roxo.logicBlock_position();
		me.__108115ic_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__108115ic_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__108115ic_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__108115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108115ic_roxo.ggCurrentLogicStateSize == 0) {
					me.__108115ic_roxo.style.width='25px';
					me.__108115ic_roxo.style.height='19px';
					me.__108115ic_roxo.style.top = 'calc(50% - (19px / 2))';
					setTimeout(function() {skin.updateSize(me.__108115ic_roxo);}, 1050);
				}
				else {
					me.__108115ic_roxo.style.width='23px';
					me.__108115ic_roxo.style.height='18px';
					me.__108115ic_roxo.style.top = 'calc(50% - (18px / 2))';
					setTimeout(function() {skin.updateSize(me.__108115ic_roxo);}, 1050);
				}
			}
		}
		me.__108115ic_roxo.logicBlock_size();
		me.__108115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__108115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__108115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__108115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__108115ic_roxo.style.visibility=me.__108115ic_roxo.ggVisible?'inherit':'hidden';
					me.__108115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__108115ic_roxo.style.opacity == 0.0) { me.__108115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__108115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__108115ic_roxo.logicBlock_alpha();
		me.__108115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning.appendChild(me.__108115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__10811bt_sala_spinning);
		el=me.__1091linha=document.createElement('div');
		el.ggId="1.0.9.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 364px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1091linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1091linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__1091linha);
		el=me.__10911bt_sala_multi=document.createElement('div');
		el.ggId="1.0.9.1.1-BT_SALA_MULTI";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 368px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10911bt_sala_multi.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10911bt_sala_multi.onclick=function (e) {
			player.openNext("{node32}","");
		}
		me.__10911bt_sala_multi.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__109117image.style.transition='none';
			} else {
				me.__109117image.style.transition='all 1000ms ease 0ms';
			}
			me.__109117image.style.opacity='0.5';
			me.__109117image.style.visibility=me.__109117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10911bt_sala_multi']=true;
			me.__109112sala_multi.logicBlock_visible();
			me.__109111rec_roxo.logicBlock_size();
			me.__109111rec_roxo.logicBlock_backgroundcolor();
			me.__109113ic_amarelo.logicBlock_position();
			me.__109113ic_amarelo.logicBlock_alpha();
			me.__109114rec_amarelo.logicBlock_size();
			me.__109114rec_amarelo.logicBlock_alpha();
			me.__109115ic_roxo.logicBlock_alpha();
			me.__109115ic_roxo.logicBlock_position();
		}
		me.__10911bt_sala_multi.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__109117image.style.transition='none';
			} else {
				me.__109117image.style.transition='all 0ms ease 0ms';
			}
			me.__109117image.style.opacity='0';
			me.__109117image.style.visibility='hidden';
			me.elementMouseOver['_10911bt_sala_multi']=false;
			me.__109112sala_multi.logicBlock_visible();
			me.__109111rec_roxo.logicBlock_size();
			me.__109111rec_roxo.logicBlock_backgroundcolor();
			me.__109113ic_amarelo.logicBlock_position();
			me.__109113ic_amarelo.logicBlock_alpha();
			me.__109114rec_amarelo.logicBlock_size();
			me.__109114rec_amarelo.logicBlock_alpha();
			me.__109115ic_roxo.logicBlock_alpha();
			me.__109115ic_roxo.logicBlock_position();
		}
		me.__10911bt_sala_multi.ggUpdatePosition=function (useTransition) {
		}
		el=me.__109110fundo=document.createElement('div');
		el.ggId="1.0.9.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("SALAMULTIFUNCIONAL") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__109110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__109110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__109110fundo.style.transition='';
				if (me.__109110fundo.ggCurrentLogicStateVisible == 0) {
					me.__109110fundo.style.visibility=(Number(me.__109110fundo.style.opacity)>0||!me.__109110fundo.style.opacity)?'inherit':'hidden';
					me.__109110fundo.ggVisible=true;
				}
				else {
					me.__109110fundo.style.visibility="hidden";
					me.__109110fundo.ggVisible=false;
				}
			}
		}
		me.__109110fundo.logicBlock_visible();
		me.__109110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi.appendChild(me.__109110fundo);
		el=me.__109112sala_multi=document.createElement('div');
		els=me.__109112sala_multi__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.9.1.1.2-SALA_MULTI";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__109112sala_multi.ggUpdateText=function() {
			var params = [];
			var hs = player._("SALA MULTIFUNCIONAL", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__109112sala_multi.ggUpdateText();
		el.appendChild(els);
		me.__109112sala_multi.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109112sala_multi.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__109112sala_multi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__109112sala_multi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__109112sala_multi.style.transition='';
				if (me.__109112sala_multi.ggCurrentLogicStateVisible == 0) {
					me.__109112sala_multi.style.visibility="hidden";
					me.__109112sala_multi.ggVisible=false;
				}
				else {
					me.__109112sala_multi.style.visibility=(Number(me.__109112sala_multi.style.opacity)>0||!me.__109112sala_multi.style.opacity)?'inherit':'hidden';
					me.__109112sala_multi.ggVisible=true;
				}
			}
		}
		me.__109112sala_multi.logicBlock_visible();
		me.__109112sala_multi.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi.appendChild(me.__109112sala_multi);
		el=me.__109111rec_roxo=document.createElement('div');
		el.ggId="1.0.9.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__109111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__109111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__109111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__109111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__109111rec_roxo.style.width='325px';
					me.__109111rec_roxo.style.height='100%';
					me.__109111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__109111rec_roxo);}, 1050);
				}
				else {
					me.__109111rec_roxo.style.width='10px';
					me.__109111rec_roxo.style.height='100%';
					me.__109111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__109111rec_roxo);}, 1050);
				}
			}
		}
		me.__109111rec_roxo.logicBlock_size();
		me.__109111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__109111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__109111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__109111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__109111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__109111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__109111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__109111rec_roxo.logicBlock_backgroundcolor();
		me.__109111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__109117image=document.createElement('div');
		els=me.__109117image__img=document.createElement('img');
		els.className='ggskin ggskin__109117image';
		hs=basePath + 'images/_109117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.9.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109117image.ggUpdatePosition=function (useTransition) {
		}
		me.__109111rec_roxo.appendChild(me.__109117image);
		me.__10911bt_sala_multi.appendChild(me.__109111rec_roxo);
		el=me.__109113ic_amarelo=document.createElement('div');
		els=me.__109113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__109113ic_amarelo';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.9.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__109113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__109113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__109113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__109113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__109113ic_amarelo.style.left='314px';
					me.__109113ic_amarelo.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__109113ic_amarelo.style.left='25px';
					me.__109113ic_amarelo.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__109113ic_amarelo.logicBlock_position();
		me.__109113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__109113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__109113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__109113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__109113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__109113ic_amarelo.style.opacity == 0.0) { me.__109113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__109113ic_amarelo.style.opacity=0;
				}
				else {
					me.__109113ic_amarelo.style.visibility=me.__109113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__109113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__109113ic_amarelo.logicBlock_alpha();
		me.__109113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi.appendChild(me.__109113ic_amarelo);
		el=me.__109114rec_amarelo=document.createElement('div');
		el.ggId="1.0.9.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__109114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__109114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__109114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__109114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__109114rec_amarelo.style.width='34px';
					me.__109114rec_amarelo.style.height='100%';
					me.__109114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__109114rec_amarelo);}, 1050);
				}
				else {
					me.__109114rec_amarelo.style.width='340px';
					me.__109114rec_amarelo.style.height='100%';
					me.__109114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__109114rec_amarelo);}, 1050);
				}
			}
		}
		me.__109114rec_amarelo.logicBlock_size();
		me.__109114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__109114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__109114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__109114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__109114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__109114rec_amarelo.style.visibility=me.__109114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__109114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__109114rec_amarelo.style.opacity == 0.0) { me.__109114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__109114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__109114rec_amarelo.logicBlock_alpha();
		me.__109114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi.appendChild(me.__109114rec_amarelo);
		el=me.__109115ic_roxo=document.createElement('div');
		els=me.__109115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__109115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAADDCAYAAAC/DJK5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMzow'+
			'NC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTM6MTctMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTM6MTctMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmNkMzJhZjQ5LTRmNWItODA0Zi05NmFmLWQ4NzAwNDU5OTg2ZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpjZDMyYWY0OS00ZjViLTgwNGYtOTZhZi1kODcwMDQ1OTk4NmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZDMyYWY0OS00ZjViLTgwNGYtOTZhZi1kODcwMDQ1OT'+
			'k4NmQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNkMzJhZjQ5LTRmNWItODA0Zi05NmFmLWQ4NzAwNDU5OTg2ZCIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMzowNC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiHUvawAAA86SURBVHic7Z15kFxFHcc/G2IE'+
			'9hdASIgcBvDiiIgYVETRIIVa4VRAwyHSiKWUeKEIHhRe3IpQiqDItlUcQRSVGBU1Kho8QAWiCAkQoiIhBoKQ/SVgQrL+0W90s0lmpmdfv+4305+qVKpm3/z6uzPfff26+9e/7hsaGqJbsKLPBl4DvAHYG9gd2BboLy5ZCTwK3AvMA+YAvzEqT1Wvtr70dYNprOgewKnAMcBWnm9fDnwL+KpRuatcZd1JrU1jRZ8PnAu8DegrIeRNwBlGZUEJsbqWWprGio4BTgfOBjYrOfwq4BzgHKOypuTYXUHtTGNFtwGuAd4cuKlbgBlG5V+B26kdtTKNFd0RuBmYUlGTC4GDjMqiitqrBbUxjRXdFvgt8IKKm34Y2Neo/LPidpNlTGwB7WBFNwd+RPWGAdgBuNmKjo/QdpLUwjTAJcDUiO1PAb4Wsf2kSL57sqKHArNi6yg4zq'+
			'hcF1tEbJI2jRXdDLgH2DmylAaPALsalcHYQmKSevf0HtIxDMB2wIdii4hNsncaKzoON+TdMbaWESwDJhuVlbGFxCLlO83BpGcYgG2Ao2KLiEnKpjkutoAmpKwtOEl2T1Z0LPAE/09pSI3VwFa92kWleqfZh3QNA/AsYL/YImKRqmleFltAG+wVW0AsUjXNrrEFtMFusQXEIlXTPDe2gDaYFFtALFI1jcQW0AZbxBYQi1RNMy62gDZI9bMLTqq/uMYW0AY9OdyGdE2zLLaANvh3bAGxSNU0D8QW0Ab3xxYQi1RNc29sAW1QB41BSNU0vwHSW99Yl7mxBcQiSdMYlceBO2LraMKCXk40T9I0Bd+KLaAJ18cWEJOUTXMtbjU5NYZwm/V6lmRNY1QW44yTGjcalTqM7oKRrGkKziOtu81a4POxRcQmadMYlfuAi2PrGMYV'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.9.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__109115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__109115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__109115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__109115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__109115ic_roxo.style.left='313px';
					me.__109115ic_roxo.style.top = 'calc(50% - (23px / 2))';
				}
				else {
					me.__109115ic_roxo.style.left='25px';
					me.__109115ic_roxo.style.top='calc(50% - ((23px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__109115ic_roxo.logicBlock_position();
		me.__109115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10911bt_sala_multi'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__109115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__109115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__109115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__109115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__109115ic_roxo.style.visibility=me.__109115ic_roxo.ggVisible?'inherit':'hidden';
					me.__109115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__109115ic_roxo.style.opacity == 0.0) { me.__109115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__109115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__109115ic_roxo.logicBlock_alpha();
		me.__109115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi.appendChild(me.__109115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__10911bt_sala_multi);
		el=me.__10101linha=document.createElement('div');
		el.ggId="1.0.10.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 398px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10101linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10101linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__10101linha);
		el=me.__101011bt_vestiarios=document.createElement('div');
		el.ggId="1.0.10.1.1-BT_VESTIARIOS";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 402px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101011bt_vestiarios.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101011bt_vestiarios.onclick=function (e) {
			player.openNext("{node34}","");
		}
		me.__101011bt_vestiarios.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__1010117image.style.transition='none';
			} else {
				me.__1010117image.style.transition='all 1000ms ease 0ms';
			}
			me.__1010117image.style.opacity='0.5';
			me.__1010117image.style.visibility=me.__1010117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_101011bt_vestiarios']=true;
			me.__1010112vestiarios.logicBlock_visible();
			me.__1010111rec_roxo.logicBlock_size();
			me.__1010111rec_roxo.logicBlock_backgroundcolor();
			me.__1010113ic_amarelo.logicBlock_alpha();
			me.__1010113ic_amarelo.logicBlock_position();
			me.__1010114rec_amarelo.logicBlock_size();
			me.__1010114rec_amarelo.logicBlock_alpha();
			me.__1010115ic_roxo.logicBlock_alpha();
			me.__1010115ic_roxo.logicBlock_position();
		}
		me.__101011bt_vestiarios.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__1010117image.style.transition='none';
			} else {
				me.__1010117image.style.transition='all 0ms ease 0ms';
			}
			me.__1010117image.style.opacity='0';
			me.__1010117image.style.visibility='hidden';
			me.elementMouseOver['_101011bt_vestiarios']=false;
			me.__1010112vestiarios.logicBlock_visible();
			me.__1010111rec_roxo.logicBlock_size();
			me.__1010111rec_roxo.logicBlock_backgroundcolor();
			me.__1010113ic_amarelo.logicBlock_alpha();
			me.__1010113ic_amarelo.logicBlock_position();
			me.__1010114rec_amarelo.logicBlock_size();
			me.__1010114rec_amarelo.logicBlock_alpha();
			me.__1010115ic_roxo.logicBlock_alpha();
			me.__1010115ic_roxo.logicBlock_position();
		}
		me.__101011bt_vestiarios.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1010110fundo=document.createElement('div');
		el.ggId="1.0.10.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("VESTIARIOS") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1010110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1010110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1010110fundo.style.transition='';
				if (me.__1010110fundo.ggCurrentLogicStateVisible == 0) {
					me.__1010110fundo.style.visibility=(Number(me.__1010110fundo.style.opacity)>0||!me.__1010110fundo.style.opacity)?'inherit':'hidden';
					me.__1010110fundo.ggVisible=true;
				}
				else {
					me.__1010110fundo.style.visibility="hidden";
					me.__1010110fundo.ggVisible=false;
				}
			}
		}
		me.__1010110fundo.logicBlock_visible();
		me.__1010110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios.appendChild(me.__1010110fundo);
		el=me.__1010112vestiarios=document.createElement('div');
		els=me.__1010112vestiarios__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.10.1.1.2-VESTIARIOS";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1010112vestiarios.ggUpdateText=function() {
			var params = [];
			var hs = player._("VESTI\xc1RIOS", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1010112vestiarios.ggUpdateText();
		el.appendChild(els);
		me.__1010112vestiarios.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010112vestiarios.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1010112vestiarios.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1010112vestiarios.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1010112vestiarios.style.transition='';
				if (me.__1010112vestiarios.ggCurrentLogicStateVisible == 0) {
					me.__1010112vestiarios.style.visibility="hidden";
					me.__1010112vestiarios.ggVisible=false;
				}
				else {
					me.__1010112vestiarios.style.visibility=(Number(me.__1010112vestiarios.style.opacity)>0||!me.__1010112vestiarios.style.opacity)?'inherit':'hidden';
					me.__1010112vestiarios.ggVisible=true;
				}
			}
		}
		me.__1010112vestiarios.logicBlock_visible();
		me.__1010112vestiarios.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios.appendChild(me.__1010112vestiarios);
		el=me.__1010111rec_roxo=document.createElement('div');
		el.ggId="1.0.10.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1010111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1010111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1010111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__1010111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__1010111rec_roxo.style.width='325px';
					me.__1010111rec_roxo.style.height='100%';
					me.__1010111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1010111rec_roxo);}, 1050);
				}
				else {
					me.__1010111rec_roxo.style.width='10px';
					me.__1010111rec_roxo.style.height='100%';
					me.__1010111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1010111rec_roxo);}, 1050);
				}
			}
		}
		me.__1010111rec_roxo.logicBlock_size();
		me.__1010111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1010111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1010111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1010111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__1010111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1010111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__1010111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__1010111rec_roxo.logicBlock_backgroundcolor();
		me.__1010111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1010117image=document.createElement('div');
		els=me.__1010117image__img=document.createElement('img');
		els.className='ggskin ggskin__1010117image';
		hs=basePath + 'images/_1010117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.10.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010117image.ggUpdatePosition=function (useTransition) {
		}
		me.__1010111rec_roxo.appendChild(me.__1010117image);
		me.__101011bt_vestiarios.appendChild(me.__1010111rec_roxo);
		el=me.__1010113ic_amarelo=document.createElement('div');
		els=me.__1010113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__1010113ic_amarelo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACaCAYAAAD4i5mDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgklEQVR4nO3bv2skZRzH8XfCkSqEQyEcWoiVV6iNcIjdiYUgiAhWhyaIhTabAxUES8UmhSYgXplcY2djJRz4Fxy2KvFHJSIWV9iYg2CxO9ywbrj82OzzzPN5v+DYuZmd3Bfy3ucm2dml+wdXGLirwJvAaulBwvwE3AKOSg9yVpdKD3AO14Abk+1RyUGCPTV53Co6xRktDXTl3wZWMPoa7E4evwXulBzktIYW/xrwyWTb8OuyCxwCH5Ye5KSGFv8ORl+z7n+BQVwGLZce4BR2Sg+gh+oWpu2iU5zQUOLvwnfVr9+I8c9jrxWe46GGEP87k0fDH44RcJ3xz2jVGsKvOp/B8Ieo+55Ve/1f+8r/VukBdG7Vrv61x/'+
			'8crvpDNgLeLj3EcWqOf730AJqLJ0sPcJya438BV31doJrjf7b0AGpbzfE/WnoAzU2VnVU5lJrSvelVHePXIhi/Yh2WHmAW49dF6251ro7xaxGq/Kij8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SvWpdIDaKH2e9sbxaaohPG3rwv+S+AucARcBr4Hrk+ORb4QjL9dXfQ3gXtTx+5Nju8Dr/f2R70IvOZv0z7wA7DJ/8Of9s3ked15MYy/PfvAAbBzyvM25z9K3Yy/TZ+e8bzvCFr9jb8t+8BH5zj/63kN'+
			'MgTG354/z3n+Z4Ss/savaT+XHmBRjL8tf5ceYEiMvy3/lh5gSIy/LY+XHmBIjF/Tni49wKIYf3sun/P8Dwi5zcF7e9rSRbt5xvNfmdMcg+DK36Z3z3jeG4Ss+uDK36J+vLdOcd7enOeonit/mzaA5zlZ0E/0nhez6oMrf8s2GN+msMf4za894BfG7wWsAS8Cr/aeG8f429aP+v1iU1TKyx7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn4tQpWdVTmUmnNUeoBZjF+xjF+xjF+xjF+xjF+xao1/vfQAmqubpQeYZen+wZVZ+9eBR3p/P5z8mZeVqa/7V+'+
			'/YNeAGMJrjv6eydoHfgC+m9q8Dq8y3rc4KsDb5+gB/AL/2n9CPfxn4vHdsUfHtzthn+O2Z9X2GxXf2D/AxPIj/KvDeAgeRSuleBFvdNb/hK0XX+UuXgO2Sk0gFjGB8nb+Cq74C1fqrTunCGb9iGb9iGb9iGb9iGb9iGb9iGb9iGb9iGb9iGb9iLQN3Of5ea6lZy8DtybYvAKXYBb7qLnu2ejulVu3y4COVP05/hncZeBl4jPGtzvP+7K60SKu97UPgd+BOt+M/xrV1XWXQLxcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.10.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1010113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1010113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1010113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1010113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__1010113ic_amarelo.style.left='314px';
					me.__1010113ic_amarelo.style.top = 'calc(50% - (17px / 2))';
				}
				else {
					me.__1010113ic_amarelo.style.left='22px';
					me.__1010113ic_amarelo.style.top='calc(50% - ((17px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1010113ic_amarelo.logicBlock_position();
		me.__1010113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1010113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1010113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1010113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1010113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__1010113ic_amarelo.style.opacity == 0.0) { me.__1010113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__1010113ic_amarelo.style.opacity=0;
				}
				else {
					me.__1010113ic_amarelo.style.visibility=me.__1010113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__1010113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__1010113ic_amarelo.logicBlock_alpha();
		me.__1010113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios.appendChild(me.__1010113ic_amarelo);
		el=me.__1010114rec_amarelo=document.createElement('div');
		el.ggId="1.0.10.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1010114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1010114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1010114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__1010114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__1010114rec_amarelo.style.width='34px';
					me.__1010114rec_amarelo.style.height='100%';
					me.__1010114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1010114rec_amarelo);}, 1050);
				}
				else {
					me.__1010114rec_amarelo.style.width='340px';
					me.__1010114rec_amarelo.style.height='100%';
					me.__1010114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1010114rec_amarelo);}, 1050);
				}
			}
		}
		me.__1010114rec_amarelo.logicBlock_size();
		me.__1010114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1010114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1010114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1010114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__1010114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__1010114rec_amarelo.style.visibility=me.__1010114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__1010114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1010114rec_amarelo.style.opacity == 0.0) { me.__1010114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__1010114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__1010114rec_amarelo.logicBlock_alpha();
		me.__1010114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios.appendChild(me.__1010114rec_amarelo);
		el=me.__1010115ic_roxo=document.createElement('div');
		els=me.__1010115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__1010115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACaCAYAAAD4i5mDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMjo0'+
			'MS0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTI6NTktMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTI6NTktMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZkNmQ4MDVkLTFhNTEtOTI0OC1iNmU1LTMxMjkzOTE3NTYzMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2ZDZkODA1ZC0xYTUxLTkyNDgtYjZlNS0zMTI5MzkxNzU2MzEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZDZkODA1ZC0xYTUxLTkyNDgtYjZlNS0zMTI5MzkxNz'+
			'U2MzEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZkNmQ4MDVkLTFhNTEtOTI0OC1iNmU1LTMxMjkzOTE3NTYzMSIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMjo0MS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr3jAaYAAATQSURBVHic7du/a2RVGMbxJyGk'+
			'ellEYQstxG4LtREWsVuxEAQRwWrR5IiFNrMLKgiWis0WbgZEu5vY2NlYCQv+BYu1oq6ViFhYnMYUicXcWW7WhE0mkznnnuf7gZD5dScv5HsPN5l71w4PDzVmXeQrkt6UFKVnMfOTpK9SjoPSgyxqbazxd5GvSrre352UnMXYVJJSjhulB1nEKOPvIt+StCmir8G0//5dynGn6CRnNKr4u8iXJH3S3yX8ukwl7accH5Ye5LTGFv+OiL5mozoMWi89wGn14aNuE+n+YWn1RhH/IHxW/fpNJG12kV8rPcjDVB9/F/md/ibhj8dE0rX+b7RqbZQe4BSeEeGP0fx3Vu3xf9Urfxf5rdIz4HxqXv2rjl/Sc2LVH7OJpLdLD3GSauPvIl8uPQOW4qnSA5yk2vglvSBWfVygmuN/tvQAaFvN8T9WegAsRxe5ys6qHApNmWh2Em'+
			'J1iB+rQPywtV96gOMQPy7aVMQPV7Ve6kj8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sLVRegCs1N7g9laxKSpB/O2bB/+FpLspx0EX+RFJP0i61j9nuSMQf7vm0d9MOf4ZPtHf35O010V+ffCU1U7AMX+b9iT9mHJsPxj+g1KOb1OO7cF2Noi/PXuSfkk5ds6y0WAHsEH8DUo5Pl1w0+9ltPoTf1v2JH206MYpxzdLnKV6xN+YlOPPc77FZzJZ/YkfR6QcP5eeYVWIvy1/lx5gTIi/Lf+WHmBMiL8tT5Qe'+
			'YEyIH0d0kZ8uPcOqEH9j+vN2zuMDmZzmwLk9bZlHu73Ixl3kV5Y3Sv1Y+RvURX53wU3fkMmqLxF/i7YkPX/WHaCLvHsx49SL+Ns03wF2H/bCLvKTg9fZrPoSx/wt29LsfP1dzT782pX0q2afBVyS9KKkVwevtUP8bRtG/X6xKSrFYQ9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET8uXBe5ys6qHAptSTkOSs9wHOKHLeKHLeKHLeKHLeKHrSrj7yJfLj0DlqeLfLP0DMdZOzw8/N+DfXyPDh7a77+WZXP4vinHX4OffVXSdUmTJf48lDWVdC/luD18sO'+
			'8stNy25jYlXerfX5L+SDl+G77gfvz9BxGfD55bVXzTYx4j/PYc93uWVt9ZTjk+lvr4u8hXJL23wkGAUqaSlHLcmB/zEz5cTCSpi/zSRhf5VulpgBWbSLP/9myKVR+GqvxXJ7AKxA9bxA9bxA9bxA9bxA9bxA9bxA9bxA9bxA9bxA9b65Lu6uRzrYFmraccX/e32QHgYirpy+GVXDv9E5zhiVbNF/h7KcftI9fw9pcyvizpcc1OdV72tbvAKsXg9r6k31OOO/MH/gNt7uktVFUtDAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.10.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 22px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1010115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1010115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1010115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1010115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__1010115ic_roxo.style.left='310px';
					me.__1010115ic_roxo.style.top = 'calc(50% - (19px / 2))';
				}
				else {
					me.__1010115ic_roxo.style.left='22px';
					me.__1010115ic_roxo.style.top='calc(50% - ((19px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1010115ic_roxo.logicBlock_position();
		me.__1010115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101011bt_vestiarios'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1010115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1010115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1010115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1010115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__1010115ic_roxo.style.visibility=me.__1010115ic_roxo.ggVisible?'inherit':'hidden';
					me.__1010115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1010115ic_roxo.style.opacity == 0.0) { me.__1010115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__1010115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__1010115ic_roxo.logicBlock_alpha();
		me.__1010115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios.appendChild(me.__1010115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__101011bt_vestiarios);
		el=me.__10111linha=document.createElement('div');
		el.ggId="1.0.11.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 432px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10111linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10111linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__10111linha);
		el=me.__101111bt_estacionamento=document.createElement('div');
		el.ggId="1.0.11.1.1-BT_ESTACIONAMENTO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 436px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101111bt_estacionamento.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101111bt_estacionamento.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__101111bt_estacionamento.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__1011117image.style.transition='none';
			} else {
				me.__1011117image.style.transition='all 1000ms ease 0ms';
			}
			me.__1011117image.style.opacity='0.5';
			me.__1011117image.style.visibility=me.__1011117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_101111bt_estacionamento']=true;
			me.__1011112estacionamento.logicBlock_visible();
			me.__1011111rec_roxo.logicBlock_size();
			me.__1011111rec_roxo.logicBlock_backgroundcolor();
			me.__1011113ic_amarelo.logicBlock_alpha();
			me.__1011113ic_amarelo.logicBlock_position();
			me.__1011114rec_amarelo.logicBlock_size();
			me.__1011114rec_amarelo.logicBlock_alpha();
			me.__1011115ic_roxo.logicBlock_alpha();
			me.__1011115ic_roxo.logicBlock_position();
		}
		me.__101111bt_estacionamento.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__1011117image.style.transition='none';
			} else {
				me.__1011117image.style.transition='all 0ms ease 0ms';
			}
			me.__1011117image.style.opacity='0';
			me.__1011117image.style.visibility='hidden';
			me.elementMouseOver['_101111bt_estacionamento']=false;
			me.__1011112estacionamento.logicBlock_visible();
			me.__1011111rec_roxo.logicBlock_size();
			me.__1011111rec_roxo.logicBlock_backgroundcolor();
			me.__1011113ic_amarelo.logicBlock_alpha();
			me.__1011113ic_amarelo.logicBlock_position();
			me.__1011114rec_amarelo.logicBlock_size();
			me.__1011114rec_amarelo.logicBlock_alpha();
			me.__1011115ic_roxo.logicBlock_alpha();
			me.__1011115ic_roxo.logicBlock_position();
		}
		me.__101111bt_estacionamento.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1011110fundo=document.createElement('div');
		el.ggId="1.0.11.1.1.0-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011110fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011110fundo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("ESTACIONAMENTO") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1011110fundo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1011110fundo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1011110fundo.style.transition='';
				if (me.__1011110fundo.ggCurrentLogicStateVisible == 0) {
					me.__1011110fundo.style.visibility=(Number(me.__1011110fundo.style.opacity)>0||!me.__1011110fundo.style.opacity)?'inherit':'hidden';
					me.__1011110fundo.ggVisible=true;
				}
				else {
					me.__1011110fundo.style.visibility="hidden";
					me.__1011110fundo.ggVisible=false;
				}
			}
		}
		me.__1011110fundo.logicBlock_visible();
		me.__1011110fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento.appendChild(me.__1011110fundo);
		el=me.__1011112estacionamento=document.createElement('div');
		els=me.__1011112estacionamento__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.11.1.1.2-ESTACIONAMENTO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1011112estacionamento.ggUpdateText=function() {
			var params = [];
			var hs = player._("ESTACIONAMENTO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1011112estacionamento.ggUpdateText();
		el.appendChild(els);
		me.__1011112estacionamento.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011112estacionamento.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1011112estacionamento.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1011112estacionamento.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1011112estacionamento.style.transition='';
				if (me.__1011112estacionamento.ggCurrentLogicStateVisible == 0) {
					me.__1011112estacionamento.style.visibility="hidden";
					me.__1011112estacionamento.ggVisible=false;
				}
				else {
					me.__1011112estacionamento.style.visibility=(Number(me.__1011112estacionamento.style.opacity)>0||!me.__1011112estacionamento.style.opacity)?'inherit':'hidden';
					me.__1011112estacionamento.ggVisible=true;
				}
			}
		}
		me.__1011112estacionamento.logicBlock_visible();
		me.__1011112estacionamento.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento.appendChild(me.__1011112estacionamento);
		el=me.__1011111rec_roxo=document.createElement('div');
		el.ggId="1.0.11.1.1.1-REC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011111rec_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011111rec_roxo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1011111rec_roxo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1011111rec_roxo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1011111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__1011111rec_roxo.ggCurrentLogicStateSize == 0) {
					me.__1011111rec_roxo.style.width='325px';
					me.__1011111rec_roxo.style.height='100%';
					me.__1011111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1011111rec_roxo);}, 1050);
				}
				else {
					me.__1011111rec_roxo.style.width='10px';
					me.__1011111rec_roxo.style.height='100%';
					me.__1011111rec_roxo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1011111rec_roxo);}, 1050);
				}
			}
		}
		me.__1011111rec_roxo.logicBlock_size();
		me.__1011111rec_roxo.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1011111rec_roxo.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1011111rec_roxo.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1011111rec_roxo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__1011111rec_roxo.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1011111rec_roxo.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__1011111rec_roxo.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__1011111rec_roxo.logicBlock_backgroundcolor();
		me.__1011111rec_roxo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1011117image=document.createElement('div');
		els=me.__1011117image__img=document.createElement('img');
		els.className='ggskin ggskin__1011117image';
		hs=basePath + 'images/_1011117image.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.11.1.1.7-IMAGE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011117image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011117image.ggUpdatePosition=function (useTransition) {
		}
		me.__1011111rec_roxo.appendChild(me.__1011117image);
		me.__101111bt_estacionamento.appendChild(me.__1011111rec_roxo);
		el=me.__1011113ic_amarelo=document.createElement('div');
		els=me.__1011113ic_amarelo__img=document.createElement('img');
		els.className='ggskin ggskin__1011113ic_amarelo';
		hs='data:image/png;base64,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'+
			'tGl5XVVLGtYlO5k8HIobe5i9MRQ4yuK6up0QYeoZmtoqWD20cdqWH/Xw+HdBqrmnouzUyk/T/dHDOIQLh+1JEawZdHiSXGCUwXoImCzGWNGxdcQ/Ny2AZ+EcNxzOeMDwP/pjnJbJPnGjd1eAZ3Y49ToI2ZGRRlqZHYD/1X0gxBWiG6WFUvN+4BHqIZOXwSWBMrgNhihPwF2casMTuIQrTcRt5V8jZmMWGX060qk4IYobutdG7JtEJcHzuQBLge8wedYw6fo1jVOyYprVY2BowUx6mvYG3/4C7GrAwuDKsx95GQfg7B5PF23M3XrEVKYgQzMr68iFWKCbVCHKSqaRU2svPzuZRzeD4eF5iqSuixqVXwOY61H2wCn6O7J4mYnQvpjiFNIY82h+8CP4kZyHSkLEYwA4LPKY5jJrNNognMhBQurMn3aFIXo+U8YGFxHDKh'+
			'NoEq0tTnZOLsajVl67VUyUWMlqXsvAamj6SWq4HJ3Nw3iOOBL5fe+85hNhfS3MRY5lTgkOK4bkLLyVtHsyYEp8wI3a0bXIjS5vF+AiyT4ZqcxWhZAHwOswTHwjnOnY4nMTMsvK78JWZlF8wGvYdhJi5XZTPdHCZTHa3K/wBT0UdEmkaVwQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.11.1.1.3-IC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011113ic_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011113ic_amarelo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1011113ic_amarelo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1011113ic_amarelo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1011113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1011113ic_amarelo.ggCurrentLogicStatePosition == 0) {
					me.__1011113ic_amarelo.style.left='314px';
					me.__1011113ic_amarelo.style.top = 'calc(50% - (17px / 2))';
				}
				else {
					me.__1011113ic_amarelo.style.left='22px';
					me.__1011113ic_amarelo.style.top='calc(50% - ((17px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1011113ic_amarelo.logicBlock_position();
		me.__1011113ic_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1011113ic_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1011113ic_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1011113ic_amarelo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1011113ic_amarelo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__1011113ic_amarelo.style.opacity == 0.0) { me.__1011113ic_amarelo.style.visibility="hidden"; } }, 1005);
					me.__1011113ic_amarelo.style.opacity=0;
				}
				else {
					me.__1011113ic_amarelo.style.visibility=me.__1011113ic_amarelo.ggVisible?'inherit':'hidden';
					me.__1011113ic_amarelo.style.opacity=1;
				}
			}
		}
		me.__1011113ic_amarelo.logicBlock_alpha();
		me.__1011113ic_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento.appendChild(me.__1011113ic_amarelo);
		el=me.__1011114rec_amarelo=document.createElement('div');
		el.ggId="1.0.11.1.1.4-REC_AMARELO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011114rec_amarelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011114rec_amarelo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1011114rec_amarelo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1011114rec_amarelo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1011114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__1011114rec_amarelo.ggCurrentLogicStateSize == 0) {
					me.__1011114rec_amarelo.style.width='34px';
					me.__1011114rec_amarelo.style.height='100%';
					me.__1011114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1011114rec_amarelo);}, 1050);
				}
				else {
					me.__1011114rec_amarelo.style.width='340px';
					me.__1011114rec_amarelo.style.height='100%';
					me.__1011114rec_amarelo.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1011114rec_amarelo);}, 1050);
				}
			}
		}
		me.__1011114rec_amarelo.logicBlock_size();
		me.__1011114rec_amarelo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1011114rec_amarelo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1011114rec_amarelo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1011114rec_amarelo.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__1011114rec_amarelo.ggCurrentLogicStateAlpha == 0) {
					me.__1011114rec_amarelo.style.visibility=me.__1011114rec_amarelo.ggVisible?'inherit':'hidden';
					me.__1011114rec_amarelo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1011114rec_amarelo.style.opacity == 0.0) { me.__1011114rec_amarelo.style.visibility="hidden"; } }, 505);
					me.__1011114rec_amarelo.style.opacity=0;
				}
			}
		}
		me.__1011114rec_amarelo.logicBlock_alpha();
		me.__1011114rec_amarelo.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento.appendChild(me.__1011114rec_amarelo);
		el=me.__1011115ic_roxo=document.createElement('div');
		els=me.__1011115ic_roxo__img=document.createElement('img');
		els.className='ggskin ggskin__1011115ic_roxo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAACeCAYAAADAMr1TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxNDow'+
			'MC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6MTUtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6MTUtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NGZiNmEyLTVjZjQtOTA0NS05NzE5LTM1MmFiNTZjYzA2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjRmYjZhMi01Y2Y0LTkwNDUtOTcxOS0zNTJhYjU2Y2MwNjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNjRmYjZhMi01Y2Y0LTkwNDUtOTcxOS0zNTJhYjU2Y2'+
			'MwNjYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NGZiNmEyLTVjZjQtOTA0NS05NzE5LTM1MmFiNTZjYzA2NiIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxNDowMC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu3vOXcAAA6rSURBVHic7Z1/jKVldcc/TMdk'+
			'Iwc1QosJYMUIKpFaSCTZ+qPFVDRIdBNJUWkLT7GZVbaD8kMCdjVI1Ej9xY1EJxEeiJDUBONq0HaBDC20YNkU42pUMIZG0IIiohxwTTfZ/nHfd/fdmdmZ++P5+d7zSSa57917zzk7Z77v8+s8z3vYvn376ANe9DTgDcBxuWPpEY8AdzuV+3MHMgscVrMYveifABd03lrMFUuPGXRe3+RUHsgWSc+pUoxedBtwQnNpAkxHK8xHnMqnskbSQ6oSoxd9J7C5uTQR5qMV5fecypeyRtIjqhGjF70aeB4mwpIYAHudyiW5A+kDxYvRi74IuKK5NCGWR9tKfsKpPJY1ksopWoxe9M+AczAR1sAAuN6p7M4dSK3M5Q7gUHjRozAh1sQicIEXfUHuQGqlWDEC2zEh1sYicJUXldyB1Mh87gDWwotemzsGY2LaG+hFWaOokOJaRi'+
			'/6wealtYoVYzfU8SlOjMAxmBBrZxHAi/517kBqoigxetErc8dgBGMReI0XPSN3ILVQzJjRi54IHI21in2izeXtWaOohJJaxgsxIfYSGz+ORkliNPpJO340QW5AEWK0cUXvaQV5ae5ASqYIMQJvxbqofWcROK6ZGzDWoBQxGrPBInChFz02dyAlkn021YtuzR2DkRSr0DkEJbSMr8S6qDOHTeisJqsYO6VvxmzRTuhYkUeHrPsZm7tj7FZxObL9ljcGsnNDIDuT8HeJ/Q2Au5zKjsR+iyT7mDEyy8C9TmV7TCde9CXA9UwvyBsY/nHePHVQY+JFj+hcphJl20Le6VQ0kc9iydZN9aJbIrtYBu6MLUQAp/I/wOcD2UouxMbv007lAmAvaVvnReBjCf0VS84x4+lE7qI6lU/EtL+CXtRfOpWFHH5tQieTGJuzbWKyDPjI'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.11.1.1.5-IC_ROXO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 22px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011115ic_roxo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011115ic_roxo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1011115ic_roxo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1011115ic_roxo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1011115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1011115ic_roxo.ggCurrentLogicStatePosition == 0) {
					me.__1011115ic_roxo.style.left='310px';
					me.__1011115ic_roxo.style.top = 'calc(50% - (19px / 2))';
				}
				else {
					me.__1011115ic_roxo.style.left='22px';
					me.__1011115ic_roxo.style.top='calc(50% - ((19px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1011115ic_roxo.logicBlock_position();
		me.__1011115ic_roxo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101111bt_estacionamento'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1011115ic_roxo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1011115ic_roxo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1011115ic_roxo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1011115ic_roxo.ggCurrentLogicStateAlpha == 0) {
					me.__1011115ic_roxo.style.visibility=me.__1011115ic_roxo.ggVisible?'inherit':'hidden';
					me.__1011115ic_roxo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1011115ic_roxo.style.opacity == 0.0) { me.__1011115ic_roxo.style.visibility="hidden"; } }, 1005);
					me.__1011115ic_roxo.style.opacity=0;
				}
			}
		}
		me.__1011115ic_roxo.logicBlock_alpha();
		me.__1011115ic_roxo.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento.appendChild(me.__1011115ic_roxo);
		me.__10menu_principal_desk.appendChild(me.__101111bt_estacionamento);
		el=me.__10121linha=document.createElement('div');
		el.ggId="1.0.12.1-LINHA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 466px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10121linha.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10121linha.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_desk.appendChild(me.__10121linha);
		me.divSkin.appendChild(me.__10menu_principal_desk);
		el=me.__10menu_principal_mobile=document.createElement('div');
		el.ggId="1.0-MENU_PRINCIPAL_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 494px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__10menu_principal_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__10menu_principal_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10menu_principal_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10menu_principal_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10menu_principal_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__10menu_principal_mobile.ggCurrentLogicStateVisible == 0) {
					me.__10menu_principal_mobile.style.visibility=(Number(me.__10menu_principal_mobile.style.opacity)>0||!me.__10menu_principal_mobile.style.opacity)?'inherit':'hidden';
					me.__10menu_principal_mobile.ggVisible=true;
				}
				else {
					me.__10menu_principal_mobile.style.visibility="hidden";
					me.__10menu_principal_mobile.ggVisible=false;
				}
			}
		}
		me.__10menu_principal_mobile.logicBlock_visible();
		me.__10menu_principal_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__10menu_principal_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__10menu_principal_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__10menu_principal_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__10menu_principal_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__10menu_principal_mobile.style.opacity == 0.0) { me.__10menu_principal_mobile.style.visibility="hidden"; } }, 1005);
					me.__10menu_principal_mobile.style.opacity=0;
				}
				else {
					me.__10menu_principal_mobile.style.visibility=me.__10menu_principal_mobile.ggVisible?'inherit':'hidden';
					me.__10menu_principal_mobile.style.opacity=1;
				}
			}
		}
		me.__10menu_principal_mobile.logicBlock_alpha();
		me.__10menu_principal_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__101fundo_mobile=document.createElement('div');
		el.ggId="1.0.1-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 40px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 310px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__101fundo_mobile);
		el=me.__1031linha_mobile=document.createElement('div');
		el.ggId="1.0.3.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1031linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1031linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__1031linha_mobile);
		el=me.__10311bt_fachada_mobile=document.createElement('div');
		el.ggId="1.0.3.1.1-BT_FACHADA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10311bt_fachada_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10311bt_fachada_mobile.onclick=function (e) {
			player.openNext("{node2}","");
			player.setVariableValue('var_menu', true);
		}
		me.__10311bt_fachada_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__103117image.style.transition='none';
			} else {
				me.__103117image.style.transition='all 1000ms ease 0ms';
			}
			me.__103117image.style.opacity='0.5';
			me.__103117image.style.visibility=me.__103117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10311bt_fachada_mobile']=true;
			me.__103112fachada_mobile.logicBlock_visible();
			me.__103111rec_roxo_mobile.logicBlock_size();
			me.__103111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__103113ic_amarelo_mobile.logicBlock_position();
			me.__103113ic_amarelo_mobile.logicBlock_alpha();
			me.__103114rec_amarelo_mobile.logicBlock_size();
			me.__103114rec_amarelo_mobile.logicBlock_alpha();
			me.__103115ic_roxo_mobile.logicBlock_alpha();
			me.__103115ic_roxo_mobile.logicBlock_position();
			me.__103115ic_roxo_mobile.logicBlock_size();
		}
		me.__10311bt_fachada_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__103117image.style.transition='none';
			} else {
				me.__103117image.style.transition='all 0ms ease 0ms';
			}
			me.__103117image.style.opacity='0';
			me.__103117image.style.visibility='hidden';
			me.elementMouseOver['_10311bt_fachada_mobile']=false;
			me.__103112fachada_mobile.logicBlock_visible();
			me.__103111rec_roxo_mobile.logicBlock_size();
			me.__103111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__103113ic_amarelo_mobile.logicBlock_position();
			me.__103113ic_amarelo_mobile.logicBlock_alpha();
			me.__103114rec_amarelo_mobile.logicBlock_size();
			me.__103114rec_amarelo_mobile.logicBlock_alpha();
			me.__103115ic_roxo_mobile.logicBlock_alpha();
			me.__103115ic_roxo_mobile.logicBlock_position();
			me.__103115ic_roxo_mobile.logicBlock_size();
		}
		me.__10311bt_fachada_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__103110fundo_mobile=document.createElement('div');
		el.ggId="1.0.3.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("FACHADA") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__103110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__103110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__103110fundo_mobile.style.transition='';
				if (me.__103110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__103110fundo_mobile.style.visibility=(Number(me.__103110fundo_mobile.style.opacity)>0||!me.__103110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__103110fundo_mobile.ggVisible=true;
				}
				else {
					me.__103110fundo_mobile.style.visibility="hidden";
					me.__103110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__103110fundo_mobile.logicBlock_visible();
		me.__103110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada_mobile.appendChild(me.__103110fundo_mobile);
		el=me.__103112fachada_mobile=document.createElement('div');
		els=me.__103112fachada_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.3.1.1.2-FACHADA_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__103112fachada_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("FACHADA", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__103112fachada_mobile.ggUpdateText();
		el.appendChild(els);
		me.__103112fachada_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103112fachada_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__103112fachada_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__103112fachada_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__103112fachada_mobile.style.transition='';
				if (me.__103112fachada_mobile.ggCurrentLogicStateVisible == 0) {
					me.__103112fachada_mobile.style.visibility="hidden";
					me.__103112fachada_mobile.ggVisible=false;
				}
				else {
					me.__103112fachada_mobile.style.visibility=(Number(me.__103112fachada_mobile.style.opacity)>0||!me.__103112fachada_mobile.style.opacity)?'inherit':'hidden';
					me.__103112fachada_mobile.ggVisible=true;
				}
			}
		}
		me.__103112fachada_mobile.logicBlock_visible();
		me.__103112fachada_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada_mobile.appendChild(me.__103112fachada_mobile);
		el=me.__103111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.3.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__103111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__103111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__103111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__103111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__103111rec_roxo_mobile.style.width='325px';
					me.__103111rec_roxo_mobile.style.height='100%';
					me.__103111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__103111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__103111rec_roxo_mobile.style.width='10px';
					me.__103111rec_roxo_mobile.style.height='100%';
					me.__103111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__103111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__103111rec_roxo_mobile.logicBlock_size();
		me.__103111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__103111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__103111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__103111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__103111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__103111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__103111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__103111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__103111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__103117image_mobile=document.createElement('div');
		els=me.__103117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__103117image_mobile';
		hs=basePath + 'images/_103117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.3.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__103111rec_roxo_mobile.appendChild(me.__103117image_mobile);
		me.__10311bt_fachada_mobile.appendChild(me.__103111rec_roxo_mobile);
		el=me.__103113ic_amarelo_mobile=document.createElement('div');
		els=me.__103113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__103113ic_amarelo_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.3.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__103113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__103113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__103113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__103113ic_amarelo_mobile.style.left='314px';
					me.__103113ic_amarelo_mobile.style.top = 'calc(50% - (19px / 2))';
				}
				else {
					me.__103113ic_amarelo_mobile.style.left='25px';
					me.__103113ic_amarelo_mobile.style.top='calc(50% - ((19px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__103113ic_amarelo_mobile.logicBlock_position();
		me.__103113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__103113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__103113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__103113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__103113ic_amarelo_mobile.style.opacity == 0.0) { me.__103113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__103113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__103113ic_amarelo_mobile.style.visibility=me.__103113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__103113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__103113ic_amarelo_mobile.logicBlock_alpha();
		me.__103113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada_mobile.appendChild(me.__103113ic_amarelo_mobile);
		el=me.__103114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.3.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__103114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__103114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__103114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__103114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__103114rec_amarelo_mobile.style.width='34px';
					me.__103114rec_amarelo_mobile.style.height='100%';
					me.__103114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__103114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__103114rec_amarelo_mobile.style.width='340px';
					me.__103114rec_amarelo_mobile.style.height='100%';
					me.__103114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__103114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__103114rec_amarelo_mobile.logicBlock_size();
		me.__103114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__103114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__103114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__103114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__103114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__103114rec_amarelo_mobile.style.visibility=me.__103114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__103114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__103114rec_amarelo_mobile.style.opacity == 0.0) { me.__103114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__103114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__103114rec_amarelo_mobile.logicBlock_alpha();
		me.__103114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada_mobile.appendChild(me.__103114rec_amarelo_mobile);
		el=me.__103115ic_roxo_mobile=document.createElement('div');
		els=me.__103115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__103115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAADeCAYAAACAN7TvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMTowNjo1'+
			'NC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjE6MDc6MjgtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjE6MDc6MjgtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwYmRiYTE4LWNhYzUtMzE0Yi1hYzcwLWVlYjhiZTdlYTAzZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMGJkYmExOC1jYWM1LTMxNGItYWM3MC1lZWI4YmU3ZWEwM2YiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMGJkYmExOC1jYWM1LTMxNGItYWM3MC1lZWI4YmU3ZW'+
			'EwM2YiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwYmRiYTE4LWNhYzUtMzE0Yi1hYzcwLWVlYjhiZTdlYTAzZiIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMTowNjo1NC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PieRwV0AABJjSURBVHic7Z15tGVFdYe/lgYF'+
			't4KAkASDgIwCIS6MAVlCZGrDbBiCoB1KFooYmUwYIhqMoCyEkE5CCAqrZBDsMDbQ0NgKNLPKSlSgBUkYIjLZKoTdDS0NL3+c28mzef363Hurzq5z7v7+Ya337q36rdXvR+3atWvXlLGxMZx2E0W3Bh4IKv6POQRvsBbgDEcU/Q5woBtheKZaC3AGI4quA3wb2AY4xFhOJ3AztJAouinwXeAdwM1B5TljSZ3Aw6SWEUUPAu6nMgLAvxnK6RRuhhYRRb8KzARWGffjWUZyOoeHSS0gim4GnA/stMyvbgkqvzSQ1El8ZSicKPoF4CFebwSArzcsp9P4ylAwUfQc4Njl/HoxcF1zarqPm6FAoujaVHuDnSf52JygsqghSSOBh0mFEUV3BuYzuREAbm1AzkjhZiiIKHoC1fnB22t8/P7MckYOD5MKIIquBHwLOKDmVxYB9+'+
			'RTNJr4ymBMFN0B+CH1jQAwM6i8lEfR6OJmMCSKHgfcCWzV51e/kV6N42GSAVF0KnAx8JEBvr4AuCOtIgfcDI3Tu3swE9hiwCFmebl2HjxMapAoOh34MYMbAeCaRHKcZXAzNEQUPRq4aMhhFgJzE8hxJsDDpMxE0bWAM4GPJxju2qDymwTjOBPgZshIFD0U+BfgrYmG9MK8jEzxhgB5iKIzgKMTDrkgqNQ5mXYGxFeGxETRNYHrgfcnHto3zplxMyQkir6LaoO7YYbhr8owpjMOzyYlIooeADxIHiO8SFXA52TEzZCAKHoGcAXwxkxTzA4qSzKN7fTwMGkIouguwJeA7TNPdUHm8R08mzQwUfQk4CsNTPVcUFm3gXlGHl8ZBiCKfgU4qaHpvBVMQ7gZ+iCKvg24HJjW4LSeRWoIN0NNouiOVLfRfrfBaRfhd50bw7NJ'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.3.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__103115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__103115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__103115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__103115ic_roxo_mobile.style.left='314px';
					me.__103115ic_roxo_mobile.style.top = 'calc(50% - (19px / 2))';
				}
				else {
					me.__103115ic_roxo_mobile.style.left='25px';
					me.__103115ic_roxo_mobile.style.top='calc(50% - ((19px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__103115ic_roxo_mobile.logicBlock_position();
		me.__103115ic_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__103115ic_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__103115ic_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__103115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103115ic_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__103115ic_roxo_mobile.style.width='19px';
					me.__103115ic_roxo_mobile.style.height='20px';
					me.__103115ic_roxo_mobile.style.top = 'calc(50% - (20px / 2))';
					setTimeout(function() {skin.updateSize(me.__103115ic_roxo_mobile);}, 1050);
				}
				else {
					me.__103115ic_roxo_mobile.style.width='17px';
					me.__103115ic_roxo_mobile.style.height='19px';
					me.__103115ic_roxo_mobile.style.top = 'calc(50% - (19px / 2))';
					setTimeout(function() {skin.updateSize(me.__103115ic_roxo_mobile);}, 1050);
				}
			}
		}
		me.__103115ic_roxo_mobile.logicBlock_size();
		me.__103115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10311bt_fachada_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__103115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__103115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__103115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__103115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__103115ic_roxo_mobile.style.visibility=me.__103115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__103115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__103115ic_roxo_mobile.style.opacity == 0.0) { me.__103115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__103115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__103115ic_roxo_mobile.logicBlock_alpha();
		me.__103115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10311bt_fachada_mobile.appendChild(me.__103115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__10311bt_fachada_mobile);
		el=me.__1041linha_mobile=document.createElement('div');
		el.ggId="1.0.4.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 194px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1041linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1041linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__1041linha_mobile);
		el=me.__10411bt_recepcao_mobile=document.createElement('div');
		el.ggId="1.0.4.1.1-BT_RECEPCAO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 198px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10411bt_recepcao_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10411bt_recepcao_mobile.onclick=function (e) {
			player.openNext("{node3}","");
			player.setVariableValue('var_menu', true);
		}
		me.__10411bt_recepcao_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__104117image.style.transition='none';
			} else {
				me.__104117image.style.transition='all 1000ms ease 0ms';
			}
			me.__104117image.style.opacity='0.5';
			me.__104117image.style.visibility=me.__104117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10411bt_recepcao_mobile']=true;
			me.__104112recepcao_mobile.logicBlock_visible();
			me.__104111rec_roxo_mobile.logicBlock_size();
			me.__104111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__104113ic_amarelo_mobile.logicBlock_position();
			me.__104113ic_amarelo_mobile.logicBlock_alpha();
			me.__104114rec_amarelo_mobile.logicBlock_size();
			me.__104114rec_amarelo_mobile.logicBlock_alpha();
			me.__104115ic_roxo_mobile.logicBlock_alpha();
			me.__104115ic_roxo_mobile.logicBlock_size();
			me.__104115ic_roxo_mobile.logicBlock_position();
		}
		me.__10411bt_recepcao_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__104117image.style.transition='none';
			} else {
				me.__104117image.style.transition='all 0ms ease 0ms';
			}
			me.__104117image.style.opacity='0';
			me.__104117image.style.visibility='hidden';
			me.elementMouseOver['_10411bt_recepcao_mobile']=false;
			me.__104112recepcao_mobile.logicBlock_visible();
			me.__104111rec_roxo_mobile.logicBlock_size();
			me.__104111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__104113ic_amarelo_mobile.logicBlock_position();
			me.__104113ic_amarelo_mobile.logicBlock_alpha();
			me.__104114rec_amarelo_mobile.logicBlock_size();
			me.__104114rec_amarelo_mobile.logicBlock_alpha();
			me.__104115ic_roxo_mobile.logicBlock_alpha();
			me.__104115ic_roxo_mobile.logicBlock_size();
			me.__104115ic_roxo_mobile.logicBlock_position();
		}
		me.__10411bt_recepcao_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__104110fundo_mobile=document.createElement('div');
		el.ggId="1.0.4.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("RECEPCAO") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__104110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__104110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__104110fundo_mobile.style.transition='';
				if (me.__104110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__104110fundo_mobile.style.visibility=(Number(me.__104110fundo_mobile.style.opacity)>0||!me.__104110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__104110fundo_mobile.ggVisible=true;
				}
				else {
					me.__104110fundo_mobile.style.visibility="hidden";
					me.__104110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__104110fundo_mobile.logicBlock_visible();
		me.__104110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao_mobile.appendChild(me.__104110fundo_mobile);
		el=me.__104112recepcao_mobile=document.createElement('div');
		els=me.__104112recepcao_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.4.1.1.2-RECEPCAO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__104112recepcao_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("RECEP\xc7\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__104112recepcao_mobile.ggUpdateText();
		el.appendChild(els);
		me.__104112recepcao_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104112recepcao_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__104112recepcao_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__104112recepcao_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__104112recepcao_mobile.style.transition='';
				if (me.__104112recepcao_mobile.ggCurrentLogicStateVisible == 0) {
					me.__104112recepcao_mobile.style.visibility="hidden";
					me.__104112recepcao_mobile.ggVisible=false;
				}
				else {
					me.__104112recepcao_mobile.style.visibility=(Number(me.__104112recepcao_mobile.style.opacity)>0||!me.__104112recepcao_mobile.style.opacity)?'inherit':'hidden';
					me.__104112recepcao_mobile.ggVisible=true;
				}
			}
		}
		me.__104112recepcao_mobile.logicBlock_visible();
		me.__104112recepcao_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao_mobile.appendChild(me.__104112recepcao_mobile);
		el=me.__104111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.4.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__104111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__104111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__104111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__104111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__104111rec_roxo_mobile.style.width='325px';
					me.__104111rec_roxo_mobile.style.height='100%';
					me.__104111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__104111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__104111rec_roxo_mobile.style.width='10px';
					me.__104111rec_roxo_mobile.style.height='100%';
					me.__104111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__104111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__104111rec_roxo_mobile.logicBlock_size();
		me.__104111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__104111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__104111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__104111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__104111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__104111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__104111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__104111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__104111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__104117image_mobile=document.createElement('div');
		els=me.__104117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__104117image_mobile';
		hs=basePath + 'images/_104117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.4.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__104111rec_roxo_mobile.appendChild(me.__104117image_mobile);
		me.__10411bt_recepcao_mobile.appendChild(me.__104111rec_roxo_mobile);
		el=me.__104113ic_amarelo_mobile=document.createElement('div');
		els=me.__104113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__104113ic_amarelo_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.4.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__104113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__104113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__104113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__104113ic_amarelo_mobile.style.left='314px';
					me.__104113ic_amarelo_mobile.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me.__104113ic_amarelo_mobile.style.left='24px';
					me.__104113ic_amarelo_mobile.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__104113ic_amarelo_mobile.logicBlock_position();
		me.__104113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__104113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__104113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__104113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__104113ic_amarelo_mobile.style.opacity == 0.0) { me.__104113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__104113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__104113ic_amarelo_mobile.style.visibility=me.__104113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__104113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__104113ic_amarelo_mobile.logicBlock_alpha();
		me.__104113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao_mobile.appendChild(me.__104113ic_amarelo_mobile);
		el=me.__104114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.4.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__104114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__104114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__104114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__104114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__104114rec_amarelo_mobile.style.width='34px';
					me.__104114rec_amarelo_mobile.style.height='100%';
					me.__104114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__104114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__104114rec_amarelo_mobile.style.width='340px';
					me.__104114rec_amarelo_mobile.style.height='100%';
					me.__104114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__104114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__104114rec_amarelo_mobile.logicBlock_size();
		me.__104114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__104114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__104114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__104114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__104114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__104114rec_amarelo_mobile.style.visibility=me.__104114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__104114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__104114rec_amarelo_mobile.style.opacity == 0.0) { me.__104114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__104114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__104114rec_amarelo_mobile.logicBlock_alpha();
		me.__104114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao_mobile.appendChild(me.__104114rec_amarelo_mobile);
		el=me.__104115ic_roxo_mobile=document.createElement('div');
		els=me.__104115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__104115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACyCAYAAADS81R0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMjoy'+
			'MS0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTI6MzgtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTI6MzgtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmI5MDEyZmEzLThiYjUtYzE0OC04ZWQ2LWQ3ZDllMzU5Njk0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiOTAxMmZhMy04YmI1LWMxNDgtOGVkNi1kN2Q5ZTM1OTY5NDAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiOTAxMmZhMy04YmI1LWMxNDgtOGVkNi1kN2Q5ZTM1OT'+
			'Y5NDAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5MDEyZmEzLThiYjUtYzE0OC04ZWQ2LWQ3ZDllMzU5Njk0MCIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMjoyMS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvVAIeIAAAw2SURBVHic7d15rF1VFcfx73st'+
			'CO1CkFEKtsigTDIo0UIVBEERQlQsEDUim0FEIIIlQUoRBCkgKBgxwSHdiaBhSPAPQRQssZWARaWAQgEZFai0laFdLcTSPv/Y59HH7X3Dveecu/e+d32Sl+YNd5/V11/PsO8e+gYGBjD58KLTgF2BKcDGwEDxkYt+YC3wKvAUsNCp/HO0F/VZUNPnRfuBk4AvANOADeNWVKkXgDuBOU7lnuF+yIKaOC96NHAp4Sza7X4NnO1Unmv8hgU1YV70SuCc2HV02GvAcU7l90O/aEFNlBf9GXBy7Doi+rRT+d3gJxbUBHnR84DZseuIbADY2ak8DeEJzCTEi+6JhRSgD7hp8BMLanqujV1AQvbzosdAl176vejGwFbANoAQ/kOuBJYBS5zK8ojlDcuL7g48EruOxDzgVD7UNUH1ogcDhwEfBPYmhLSvyY++CjwKPAj8AZjnVF'+
			'7uTJUj86KzgfNi15GgXbMOqhfdFjgd+Dzt9zMuBW4ldDjfX1Vt7fCi84GPxawhUadlGVQvKsAs4AxgYoVN3wrMciqLKmxzTLzohoS3FLfv9LEzcE12D1NedDqwCDiXakMKcDTwkBedVXG7Y7EZsEmE4+Zg86yC6kWvBm6h3rPOBsAlXvQuL7pNjcdpNB7rhRnO+Cx+MV6034veBpzVwcMeCtzvRXfu0PFyGwXVSQPjY1cwRn8kzkPGZGCBF93fqTwR4fjtWEXohhtH816PsVhLOLtPqqqospIPanEmjfkkvDkw34vunko31gjOAW4GFhP+bdsN6hpC0PclvEt2UCXVlZB0UL3o5cCRsesg9MneBhwQu5ARnOhU/JDP36ygzXuBj3vRvwN7VtBe25K9Ry068M+NXccQ+3vRS2MXMYxFDSGt2mU1tj0mSQa1GNF+Q+w6'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.4.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 24px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__104115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__104115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__104115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__104115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__104115ic_roxo_mobile.style.left='313px';
					me.__104115ic_roxo_mobile.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me.__104115ic_roxo_mobile.style.left='24px';
					me.__104115ic_roxo_mobile.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__104115ic_roxo_mobile.logicBlock_position();
		me.__104115ic_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__104115ic_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__104115ic_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__104115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104115ic_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__104115ic_roxo_mobile.style.width='20px';
					me.__104115ic_roxo_mobile.style.height='20px';
					me.__104115ic_roxo_mobile.style.top = 'calc(50% - (20px / 2))';
					setTimeout(function() {skin.updateSize(me.__104115ic_roxo_mobile);}, 1050);
				}
				else {
					me.__104115ic_roxo_mobile.style.width='18px';
					me.__104115ic_roxo_mobile.style.height='18px';
					me.__104115ic_roxo_mobile.style.top = 'calc(50% - (18px / 2))';
					setTimeout(function() {skin.updateSize(me.__104115ic_roxo_mobile);}, 1050);
				}
			}
		}
		me.__104115ic_roxo_mobile.logicBlock_size();
		me.__104115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10411bt_recepcao_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__104115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__104115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__104115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__104115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__104115ic_roxo_mobile.style.visibility=me.__104115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__104115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__104115ic_roxo_mobile.style.opacity == 0.0) { me.__104115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__104115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__104115ic_roxo_mobile.logicBlock_alpha();
		me.__104115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10411bt_recepcao_mobile.appendChild(me.__104115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__10411bt_recepcao_mobile);
		el=me.__1051linha_mobile=document.createElement('div');
		el.ggId="1.0.5.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 228px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1051linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1051linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__1051linha_mobile);
		el=me.__10511bt_musculacao_mobile=document.createElement('div');
		el.ggId="1.0.5.1.1-BT_MUSCULACAO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 232px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10511bt_musculacao_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10511bt_musculacao_mobile.onclick=function (e) {
			player.openNext("{node13}","");
			player.setVariableValue('var_menu', true);
		}
		me.__10511bt_musculacao_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__105117image.style.transition='none';
			} else {
				me.__105117image.style.transition='all 1000ms ease 0ms';
			}
			me.__105117image.style.opacity='0.5';
			me.__105117image.style.visibility=me.__105117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10511bt_musculacao_mobile']=true;
			me.__105112musculacao_mobile.logicBlock_visible();
			me.__105111rec_roxo_mobile.logicBlock_size();
			me.__105111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__105113ic_amarelo_mobile.logicBlock_position();
			me.__105113ic_amarelo_mobile.logicBlock_alpha();
			me.__105114rec_amarelo_mobile.logicBlock_size();
			me.__105114rec_amarelo_mobile.logicBlock_alpha();
			me.__105115ic_roxo_mobile.logicBlock_alpha();
			me.__105115ic_roxo_mobile.logicBlock_position();
		}
		me.__10511bt_musculacao_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__105117image.style.transition='none';
			} else {
				me.__105117image.style.transition='all 0ms ease 0ms';
			}
			me.__105117image.style.opacity='0';
			me.__105117image.style.visibility='hidden';
			me.elementMouseOver['_10511bt_musculacao_mobile']=false;
			me.__105112musculacao_mobile.logicBlock_visible();
			me.__105111rec_roxo_mobile.logicBlock_size();
			me.__105111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__105113ic_amarelo_mobile.logicBlock_position();
			me.__105113ic_amarelo_mobile.logicBlock_alpha();
			me.__105114rec_amarelo_mobile.logicBlock_size();
			me.__105114rec_amarelo_mobile.logicBlock_alpha();
			me.__105115ic_roxo_mobile.logicBlock_alpha();
			me.__105115ic_roxo_mobile.logicBlock_position();
		}
		me.__10511bt_musculacao_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__105110fundo_mobile=document.createElement('div');
		el.ggId="1.0.5.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("MUSCULACAO") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__105110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__105110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__105110fundo_mobile.style.transition='';
				if (me.__105110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__105110fundo_mobile.style.visibility=(Number(me.__105110fundo_mobile.style.opacity)>0||!me.__105110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__105110fundo_mobile.ggVisible=true;
				}
				else {
					me.__105110fundo_mobile.style.visibility="hidden";
					me.__105110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__105110fundo_mobile.logicBlock_visible();
		me.__105110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao_mobile.appendChild(me.__105110fundo_mobile);
		el=me.__105112musculacao_mobile=document.createElement('div');
		els=me.__105112musculacao_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.5.1.1.2-MUSCULACAO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__105112musculacao_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("MUSCULA\xc7\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__105112musculacao_mobile.ggUpdateText();
		el.appendChild(els);
		me.__105112musculacao_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105112musculacao_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__105112musculacao_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__105112musculacao_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__105112musculacao_mobile.style.transition='';
				if (me.__105112musculacao_mobile.ggCurrentLogicStateVisible == 0) {
					me.__105112musculacao_mobile.style.visibility="hidden";
					me.__105112musculacao_mobile.ggVisible=false;
				}
				else {
					me.__105112musculacao_mobile.style.visibility=(Number(me.__105112musculacao_mobile.style.opacity)>0||!me.__105112musculacao_mobile.style.opacity)?'inherit':'hidden';
					me.__105112musculacao_mobile.ggVisible=true;
				}
			}
		}
		me.__105112musculacao_mobile.logicBlock_visible();
		me.__105112musculacao_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao_mobile.appendChild(me.__105112musculacao_mobile);
		el=me.__105111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.5.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__105111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__105111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__105111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__105111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__105111rec_roxo_mobile.style.width='325px';
					me.__105111rec_roxo_mobile.style.height='100%';
					me.__105111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__105111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__105111rec_roxo_mobile.style.width='10px';
					me.__105111rec_roxo_mobile.style.height='100%';
					me.__105111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__105111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__105111rec_roxo_mobile.logicBlock_size();
		me.__105111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__105111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__105111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__105111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__105111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__105111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__105111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__105111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__105111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__105117image_mobile=document.createElement('div');
		els=me.__105117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__105117image_mobile';
		hs=basePath + 'images/_105117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.5.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__105111rec_roxo_mobile.appendChild(me.__105117image_mobile);
		me.__10511bt_musculacao_mobile.appendChild(me.__105111rec_roxo_mobile);
		el=me.__105113ic_amarelo_mobile=document.createElement('div');
		els=me.__105113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__105113ic_amarelo_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.5.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__105113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__105113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__105113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__105113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__105113ic_amarelo_mobile.style.left='314px';
					me.__105113ic_amarelo_mobile.style.top = 'calc(50% - (14px / 2))';
				}
				else {
					me.__105113ic_amarelo_mobile.style.left='22px';
					me.__105113ic_amarelo_mobile.style.top='calc(50% - ((14px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__105113ic_amarelo_mobile.logicBlock_position();
		me.__105113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__105113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__105113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__105113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__105113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__105113ic_amarelo_mobile.style.opacity == 0.0) { me.__105113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__105113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__105113ic_amarelo_mobile.style.visibility=me.__105113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__105113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__105113ic_amarelo_mobile.logicBlock_alpha();
		me.__105113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao_mobile.appendChild(me.__105113ic_amarelo_mobile);
		el=me.__105114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.5.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__105114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__105114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__105114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__105114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__105114rec_amarelo_mobile.style.width='34px';
					me.__105114rec_amarelo_mobile.style.height='100%';
					me.__105114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__105114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__105114rec_amarelo_mobile.style.width='340px';
					me.__105114rec_amarelo_mobile.style.height='100%';
					me.__105114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__105114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__105114rec_amarelo_mobile.logicBlock_size();
		me.__105114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__105114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__105114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__105114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__105114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__105114rec_amarelo_mobile.style.visibility=me.__105114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__105114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__105114rec_amarelo_mobile.style.opacity == 0.0) { me.__105114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__105114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__105114rec_amarelo_mobile.logicBlock_alpha();
		me.__105114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao_mobile.appendChild(me.__105114rec_amarelo_mobile);
		el=me.__105115ic_roxo_mobile=document.createElement('div');
		els=me.__105115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__105115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAACeCAYAAAA40kakAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMzo0'+
			'Mi0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTM6NTYtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTM6NTYtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwNTg5NmYzLTg3NDMtN2I0MS1hOWQ0LTRlOTQxMDQ5NThjZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMDU4OTZmMy04NzQzLTdiNDEtYTlkNC00ZTk0MTA0OTU4Y2QiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMDU4OTZmMy04NzQzLTdiNDEtYTlkNC00ZTk0MTA0OT'+
			'U4Y2QiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwNTg5NmYzLTg3NDMtN2I0MS1hOWQ0LTRlOTQxMDQ5NThjZCIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMzo0Mi0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmM7bsQAAAcxSURBVHic7dxPiF1XHcDx74wj'+
			'jcmhaaFNFypECo0IgULFUgcLgjtRozTJQik90qZCF6Uo/llURAWzaHHdpvRCEWmaaiuCq6JgiaU2glLBRigW6h+aFGPLmRhJzbh4t2WU1pn73n33/N7c7weye/eeH/PON3PnTXKW1tfXGaMmlQRk4ACwH7i6p1v/GzgDPAM8DpzIJb3R071DaVJZAQ4CtwA3AXuAd/V0+7PA88CTQJNLKj3dd6EsjTHQJpVbgfvoL8r/5wXgSC7p6QHWGkyTyseAB4EPDrDcWeAruaRHBlgrlNEF2qTyPeDrAy97Ebgtl/TDgdediyaVzwMN8O6Blz6aS/rGwGtWNapAm1RuB45VWv4isJpLeq7S+r1oUrkReJrh43zTHbmkhyqtPbjRBNqkciXwInBlxTFOAR/JJS3kF71JZQl4Drih4hjngGtzSecqzjCY5doDDOhO6sYJ8GHg45'+
			'VnmMUnqBsnTN7DI5VnGMyYAv107QFan6s9wAw+W3uA1mdqDzCUMQX6odoDtK6rPcAMosw+xCfHIYwi0CaV9wC7a8/R2lN7gBlcVXuAVu0fVQYzikCBy2oPIE1jLIFKC8lApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwFb6uEmTyg5gFfgAkPq4J1CAPwEnc0kXerqn9JZF2LczBdqk8l7gXuALwK5Zh3kH55tUfgB8O5f0lzmtoRFp9+03mezbnXNappd9O/UjbpPKLUyOlLyT+cUJky/gEeB0k8rBOa6jEWj30Gkme2pecUJP+3aqQJtUDgHH6e+xYCt2AY+2a0udtXvnUeb7DeV/7QKON6kcnubizoE2qbyfyZmoNT5gWgaadgZpyyrv2yXg4Wn27TTDfof5PhpsZmc7g9RFhH373a4XdQq0'+
			'SWUnMNW36p4dbmeRNtWeSRVh3x5qUun0eN31O+hHgR0dr5mHHUxmkbZilQXdt10DjfSzX6RZFNv7ag+wQad92zXQKEdXQqxZFNsVtQfY4PIuL/af+kmBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoEZqBSYgUqBGagUmIFKgRmoFJiBSoGtADSp7AJWgZ2bvH7/3Cfa/nY3qRyoPcSUdtceYBvYv4X3/zxwMpe0ttKkcgPwM2DP3EcTwF7gidpDqJovtn82c6ZJ5ZPLwEMYpxTNHuDYMnB95UEkvb3r/ZBICsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwA'+
			'xUCsxApcAMVArMQKXADFQKbBn4be0hJL2t3y0DdwCv1J5E0n85A9y+kks61aRyLXATkDa56FNs7UQyvbOXgHtqDzGl7zM5lVDTexj46SavKcAzuaS1FYBc0hrw1GZ3blLZO/N4ei2X9GTtIabRpPKt2jNsA893ef/9kEgKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVArMQKXADFQKzEClwAxUCsxApcAMVAqsa6CvzWWK6USaRbH9o/YAG7ze5cVdA3254+vnKdIsiu3PtQfYoNO+7Rror4ALHa+ZhwtMZpG24iQLum87BZpLOg8c73LNnBxvZ5E2lUv6J3H27VqXC6b5kOheoGYc'+
			'59sZpC4Wct92DjSX9DJwG3Cp67U9uATkdgZpyxZ13071a5Zc0gngEFCmuX5KBTicS3pswDW1jbT79jALtG+n/j1oLulHwHXAA0Cn5+qO1to19uWSHp/jOhqBdg/tY0H27cosE+SS/gZ8qUnlbmAV2AtcPss9N3gdeAk4mUv6V0/3lMgl/ZUF2bczBfqmdpCf93EvaSiLsG/9p35SYAYqBWagUmAGKgVmoFJgBioFZqBSYAYqBWagUmAGKgVmoFJgBioFNpZA/d8wWkijCLQ9kybKMZ1naw8wg1drD9A6V3uAoYwi0NYfag/QOl17gBn8sfYArRdqDzCUMQX6k9oDtH5ce4AZPFF7gFaU93LuxhTog9Q/YfwU8IvKM8ziKeA3lWc4x+S9HIXRBJpL+jvw1YojXATuyiWtV5xhJu3sdwFvVBzja7kkfwbdjnJJx4CjFZ'+
			'a+yOTYxV9XWLtXuaRnmRxfWSPSo+17OBpL6+sL+xf61JpUbgXuB64aYLnTwJFc0i8HWGswTSo3M3nU3DfAcq8CX84lPTLAWqGMMlCAJpUEZOAAsB+4uqdbXwJeAZ4FTgCP5ZJqPhLOTZPKCpPzkQ8CNwLX0N9T2Vng90w+mGpySUOeZRvGfwDoT4Z49TxZZgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.5.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 22px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__105115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__105115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__105115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__105115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__105115ic_roxo_mobile.style.left='311px';
					me.__105115ic_roxo_mobile.style.top = 'calc(50% - (16px / 2))';
				}
				else {
					me.__105115ic_roxo_mobile.style.left='22px';
					me.__105115ic_roxo_mobile.style.top='calc(50% - ((16px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__105115ic_roxo_mobile.logicBlock_position();
		me.__105115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10511bt_musculacao_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__105115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__105115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__105115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__105115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__105115ic_roxo_mobile.style.visibility=me.__105115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__105115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__105115ic_roxo_mobile.style.opacity == 0.0) { me.__105115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__105115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__105115ic_roxo_mobile.logicBlock_alpha();
		me.__105115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10511bt_musculacao_mobile.appendChild(me.__105115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__10511bt_musculacao_mobile);
		el=me.__1061linha_mobile=document.createElement('div');
		el.ggId="1.0.6.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 262px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1061linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1061linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__1061linha_mobile);
		el=me.__10611bt_blackhiit_mobile=document.createElement('div');
		el.ggId="1.0.6.1.1-BT_BLACKHIIT_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 266px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10611bt_blackhiit_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10611bt_blackhiit_mobile.onclick=function (e) {
			player.openNext("{node5}","");
			player.setVariableValue('var_menu', true);
		}
		me.__10611bt_blackhiit_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__106117image.style.transition='none';
			} else {
				me.__106117image.style.transition='all 1000ms ease 0ms';
			}
			me.__106117image.style.opacity='0.5';
			me.__106117image.style.visibility=me.__106117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10611bt_blackhiit_mobile']=true;
			me.__106112blackhiit_mobile.logicBlock_visible();
			me.__106111rec_roxo_mobile.logicBlock_size();
			me.__106111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__106113ic_amarelo_mobile.logicBlock_position();
			me.__106113ic_amarelo_mobile.logicBlock_alpha();
			me.__106114rec_amarelo_mobile.logicBlock_size();
			me.__106114rec_amarelo_mobile.logicBlock_alpha();
			me.__106115ic_roxo_mobile.logicBlock_alpha();
			me.__106115ic_roxo_mobile.logicBlock_size();
			me.__106115ic_roxo_mobile.logicBlock_position();
		}
		me.__10611bt_blackhiit_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__106117image.style.transition='none';
			} else {
				me.__106117image.style.transition='all 0ms ease 0ms';
			}
			me.__106117image.style.opacity='0';
			me.__106117image.style.visibility='hidden';
			me.elementMouseOver['_10611bt_blackhiit_mobile']=false;
			me.__106112blackhiit_mobile.logicBlock_visible();
			me.__106111rec_roxo_mobile.logicBlock_size();
			me.__106111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__106113ic_amarelo_mobile.logicBlock_position();
			me.__106113ic_amarelo_mobile.logicBlock_alpha();
			me.__106114rec_amarelo_mobile.logicBlock_size();
			me.__106114rec_amarelo_mobile.logicBlock_alpha();
			me.__106115ic_roxo_mobile.logicBlock_alpha();
			me.__106115ic_roxo_mobile.logicBlock_size();
			me.__106115ic_roxo_mobile.logicBlock_position();
		}
		me.__10611bt_blackhiit_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__106110fundo_mobile=document.createElement('div');
		el.ggId="1.0.6.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("BLACKHIIT") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__106110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__106110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__106110fundo_mobile.style.transition='';
				if (me.__106110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__106110fundo_mobile.style.visibility=(Number(me.__106110fundo_mobile.style.opacity)>0||!me.__106110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__106110fundo_mobile.ggVisible=true;
				}
				else {
					me.__106110fundo_mobile.style.visibility="hidden";
					me.__106110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__106110fundo_mobile.logicBlock_visible();
		me.__106110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit_mobile.appendChild(me.__106110fundo_mobile);
		el=me.__106112blackhiit_mobile=document.createElement('div');
		els=me.__106112blackhiit_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.6.1.1.2-BLACKHIIT_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__106112blackhiit_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("BLACK HIIT", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__106112blackhiit_mobile.ggUpdateText();
		el.appendChild(els);
		me.__106112blackhiit_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106112blackhiit_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__106112blackhiit_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__106112blackhiit_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__106112blackhiit_mobile.style.transition='';
				if (me.__106112blackhiit_mobile.ggCurrentLogicStateVisible == 0) {
					me.__106112blackhiit_mobile.style.visibility="hidden";
					me.__106112blackhiit_mobile.ggVisible=false;
				}
				else {
					me.__106112blackhiit_mobile.style.visibility=(Number(me.__106112blackhiit_mobile.style.opacity)>0||!me.__106112blackhiit_mobile.style.opacity)?'inherit':'hidden';
					me.__106112blackhiit_mobile.ggVisible=true;
				}
			}
		}
		me.__106112blackhiit_mobile.logicBlock_visible();
		me.__106112blackhiit_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit_mobile.appendChild(me.__106112blackhiit_mobile);
		el=me.__106111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.6.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__106111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__106111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__106111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__106111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__106111rec_roxo_mobile.style.width='325px';
					me.__106111rec_roxo_mobile.style.height='100%';
					me.__106111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__106111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__106111rec_roxo_mobile.style.width='10px';
					me.__106111rec_roxo_mobile.style.height='100%';
					me.__106111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__106111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__106111rec_roxo_mobile.logicBlock_size();
		me.__106111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__106111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__106111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__106111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__106111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__106111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__106111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__106111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__106111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__106117image_mobile=document.createElement('div');
		els=me.__106117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__106117image_mobile';
		hs=basePath + 'images/_106117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.6.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__106111rec_roxo_mobile.appendChild(me.__106117image_mobile);
		me.__10611bt_blackhiit_mobile.appendChild(me.__106111rec_roxo_mobile);
		el=me.__106113ic_amarelo_mobile=document.createElement('div');
		els=me.__106113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__106113ic_amarelo_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.6.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__106113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__106113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__106113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__106113ic_amarelo_mobile.style.left='314px';
					me.__106113ic_amarelo_mobile.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__106113ic_amarelo_mobile.style.left='25px';
					me.__106113ic_amarelo_mobile.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__106113ic_amarelo_mobile.logicBlock_position();
		me.__106113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__106113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__106113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__106113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__106113ic_amarelo_mobile.style.opacity == 0.0) { me.__106113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__106113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__106113ic_amarelo_mobile.style.visibility=me.__106113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__106113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__106113ic_amarelo_mobile.logicBlock_alpha();
		me.__106113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit_mobile.appendChild(me.__106113ic_amarelo_mobile);
		el=me.__106114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.6.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__106114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__106114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__106114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__106114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__106114rec_amarelo_mobile.style.width='34px';
					me.__106114rec_amarelo_mobile.style.height='100%';
					me.__106114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__106114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__106114rec_amarelo_mobile.style.width='340px';
					me.__106114rec_amarelo_mobile.style.height='100%';
					me.__106114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__106114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__106114rec_amarelo_mobile.logicBlock_size();
		me.__106114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__106114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__106114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__106114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__106114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__106114rec_amarelo_mobile.style.visibility=me.__106114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__106114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__106114rec_amarelo_mobile.style.opacity == 0.0) { me.__106114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__106114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__106114rec_amarelo_mobile.logicBlock_alpha();
		me.__106114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit_mobile.appendChild(me.__106114rec_amarelo_mobile);
		el=me.__106115ic_roxo_mobile=document.createElement('div');
		els=me.__106115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__106115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAADBCAYAAADCSCKTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxNDoz'+
			'OC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6NTItMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6NTItMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3Mzg5MTk2LTFlZDUtNGU0ZC04MjlkLWNkZWIwYzA4NzkyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNzM4OTE5Ni0xZWQ1LTRlNGQtODI5ZC1jZGViMGMwODc5MjkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNzM4OTE5Ni0xZWQ1LTRlNGQtODI5ZC1jZGViMGMwOD'+
			'c5MjkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3Mzg5MTk2LTFlZDUtNGU0ZC04MjlkLWNkZWIwYzA4NzkyOSIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxNDozOC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv2GJEoAAA69SURBVHic7d17sBxlmcfx75kk'+
			'BJeHQMAlXgrBWIhhiaSC4hJFRXGDFxBZWEsXCl5KwUUx6Loi3hUsF6MWglRRoHnRQBBUJK4lF8tddFVQTIAFYgQMEdyV4EJC8oRLbsc/3j6HOZOemb5Nd0+f51N1qs6Z6cuTml/e7ul++31HRkdHqZIXnQkcCswF5gD7A/sCewN7AVMqK67+dgCPRT8PA2uB1cDdwAqn8nh1pcFI2eHyos8B3gj8A3AU8DJgpNQiJo/VwE+Bm4GfOJWnytx5KeHyoi3gTcCpwDHAbgPfqem0GfgR8C3gJqeyY9A7HGi4vOiewHuB9wP7DWxHJq0/AV8HLnMq6we1k4GEKwrV2dHPHoXvwBRlM3AR8CWnsqHojRcaLi86FTgT+AzhZNwMh/XA54FLnMrWojZaWLi86GHANwjf+sxwugc43ancWsTGcofLi04DPgecA7SKKMpUagewGP'+
			'i0U9mSZ0O5wuVFXwR8D3hlniJMLf0WONGprM26gczh8qKvA67Dzq2abD3wj07lv7KsnOkw5kVPAX6CBavpZgI3edHTsqycOlxedBFwBTAtyw7N0JkGfNOLfjjtiqnC5UX/Fbgw7U5MI3zFi34szQqJz7m86HuAy7NUZRrldKeSKAeJwuVF3wYsxy41mHCp4jin8h/9FuwbLi96EPBrQIqpzTSAAq9yKqt6LdQzXF5UgBXAS4utzTTA/cB8p6LdFuh3mPs6FiwT7wDgkl4LdG25vOhxwA+Kr8k0zDucyvVxb8SGy4vuQejF+LzB1mUaYB1woFN5ovONbofFz2LBMsnMIuRlJzu1XF70AOB32IMRJrntwByncn/7i3Et13lYsEw6Uwi5mWBCy+VFXwaswp7GMemNAgc5ldVjL3S2XB/BgmWyGSHk59kXxlouL7oX8H/A'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.6.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__106115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__106115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__106115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__106115ic_roxo_mobile.style.left='314px';
					me.__106115ic_roxo_mobile.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__106115ic_roxo_mobile.style.left='25px';
					me.__106115ic_roxo_mobile.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__106115ic_roxo_mobile.logicBlock_position();
		me.__106115ic_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__106115ic_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__106115ic_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__106115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106115ic_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__106115ic_roxo_mobile.style.width='18px';
					me.__106115ic_roxo_mobile.style.height='22px';
					me.__106115ic_roxo_mobile.style.top = 'calc(50% - (22px / 2))';
					setTimeout(function() {skin.updateSize(me.__106115ic_roxo_mobile);}, 1050);
				}
				else {
					me.__106115ic_roxo_mobile.style.width='16px';
					me.__106115ic_roxo_mobile.style.height='20px';
					me.__106115ic_roxo_mobile.style.top = 'calc(50% - (20px / 2))';
					setTimeout(function() {skin.updateSize(me.__106115ic_roxo_mobile);}, 1050);
				}
			}
		}
		me.__106115ic_roxo_mobile.logicBlock_size();
		me.__106115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10611bt_blackhiit_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__106115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__106115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__106115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__106115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__106115ic_roxo_mobile.style.visibility=me.__106115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__106115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__106115ic_roxo_mobile.style.opacity == 0.0) { me.__106115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__106115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__106115ic_roxo_mobile.logicBlock_alpha();
		me.__106115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10611bt_blackhiit_mobile.appendChild(me.__106115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__10611bt_blackhiit_mobile);
		el=me.__1071linha_mobile=document.createElement('div');
		el.ggId="1.0.7.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 296px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1071linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1071linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__1071linha_mobile);
		el=me.__10711bt_cardio_mobile=document.createElement('div');
		el.ggId="1.0.7.1.1-BT_CARDIO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10711bt_cardio_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10711bt_cardio_mobile.onclick=function (e) {
			player.openNext("{node6}","");
			player.setVariableValue('var_menu', true);
		}
		me.__10711bt_cardio_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__107117image.style.transition='none';
			} else {
				me.__107117image.style.transition='all 1000ms ease 0ms';
			}
			me.__107117image.style.opacity='0.5';
			me.__107117image.style.visibility=me.__107117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10711bt_cardio_mobile']=true;
			me.__107112cardio_mobile.logicBlock_visible();
			me.__107111rec_roxo_mobile.logicBlock_size();
			me.__107111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__107113ic_amarelo_mobile.logicBlock_position();
			me.__107113ic_amarelo_mobile.logicBlock_alpha();
			me.__107114rec_amarelo_mobile.logicBlock_size();
			me.__107114rec_amarelo_mobile.logicBlock_alpha();
			me.__107115ic_roxo_mobile.logicBlock_alpha();
			me.__107115ic_roxo_mobile.logicBlock_size();
			me.__107115ic_roxo_mobile.logicBlock_position();
		}
		me.__10711bt_cardio_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__107117image.style.transition='none';
			} else {
				me.__107117image.style.transition='all 0ms ease 0ms';
			}
			me.__107117image.style.opacity='0';
			me.__107117image.style.visibility='hidden';
			me.elementMouseOver['_10711bt_cardio_mobile']=false;
			me.__107112cardio_mobile.logicBlock_visible();
			me.__107111rec_roxo_mobile.logicBlock_size();
			me.__107111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__107113ic_amarelo_mobile.logicBlock_position();
			me.__107113ic_amarelo_mobile.logicBlock_alpha();
			me.__107114rec_amarelo_mobile.logicBlock_size();
			me.__107114rec_amarelo_mobile.logicBlock_alpha();
			me.__107115ic_roxo_mobile.logicBlock_alpha();
			me.__107115ic_roxo_mobile.logicBlock_size();
			me.__107115ic_roxo_mobile.logicBlock_position();
		}
		me.__10711bt_cardio_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__107110fundo_mobile=document.createElement('div');
		el.ggId="1.0.7.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("CARDIO") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__107110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__107110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__107110fundo_mobile.style.transition='';
				if (me.__107110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__107110fundo_mobile.style.visibility=(Number(me.__107110fundo_mobile.style.opacity)>0||!me.__107110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__107110fundo_mobile.ggVisible=true;
				}
				else {
					me.__107110fundo_mobile.style.visibility="hidden";
					me.__107110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__107110fundo_mobile.logicBlock_visible();
		me.__107110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio_mobile.appendChild(me.__107110fundo_mobile);
		el=me.__107112cardio_mobile=document.createElement('div');
		els=me.__107112cardio_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.7.1.1.2-CARDIO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__107112cardio_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("CARDIO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__107112cardio_mobile.ggUpdateText();
		el.appendChild(els);
		me.__107112cardio_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107112cardio_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__107112cardio_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__107112cardio_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__107112cardio_mobile.style.transition='';
				if (me.__107112cardio_mobile.ggCurrentLogicStateVisible == 0) {
					me.__107112cardio_mobile.style.visibility="hidden";
					me.__107112cardio_mobile.ggVisible=false;
				}
				else {
					me.__107112cardio_mobile.style.visibility=(Number(me.__107112cardio_mobile.style.opacity)>0||!me.__107112cardio_mobile.style.opacity)?'inherit':'hidden';
					me.__107112cardio_mobile.ggVisible=true;
				}
			}
		}
		me.__107112cardio_mobile.logicBlock_visible();
		me.__107112cardio_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio_mobile.appendChild(me.__107112cardio_mobile);
		el=me.__107111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.7.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__107111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__107111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__107111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__107111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__107111rec_roxo_mobile.style.width='325px';
					me.__107111rec_roxo_mobile.style.height='100%';
					me.__107111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__107111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__107111rec_roxo_mobile.style.width='10px';
					me.__107111rec_roxo_mobile.style.height='100%';
					me.__107111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__107111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__107111rec_roxo_mobile.logicBlock_size();
		me.__107111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__107111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__107111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__107111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__107111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__107111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__107111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__107111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__107111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__107117image_mobile=document.createElement('div');
		els=me.__107117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__107117image_mobile';
		hs=basePath + 'images/_107117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.7.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__107111rec_roxo_mobile.appendChild(me.__107117image_mobile);
		me.__10711bt_cardio_mobile.appendChild(me.__107111rec_roxo_mobile);
		el=me.__107113ic_amarelo_mobile=document.createElement('div');
		els=me.__107113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__107113ic_amarelo_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.7.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__107113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__107113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__107113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__107113ic_amarelo_mobile.style.left='314px';
					me.__107113ic_amarelo_mobile.style.top = 'calc(50% - (17px / 2))';
				}
				else {
					me.__107113ic_amarelo_mobile.style.left='21px';
					me.__107113ic_amarelo_mobile.style.top='calc(50% - ((17px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__107113ic_amarelo_mobile.logicBlock_position();
		me.__107113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__107113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__107113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__107113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__107113ic_amarelo_mobile.style.opacity == 0.0) { me.__107113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__107113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__107113ic_amarelo_mobile.style.visibility=me.__107113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__107113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__107113ic_amarelo_mobile.logicBlock_alpha();
		me.__107113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio_mobile.appendChild(me.__107113ic_amarelo_mobile);
		el=me.__107114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.7.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__107114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__107114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__107114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__107114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__107114rec_amarelo_mobile.style.width='34px';
					me.__107114rec_amarelo_mobile.style.height='100%';
					me.__107114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__107114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__107114rec_amarelo_mobile.style.width='340px';
					me.__107114rec_amarelo_mobile.style.height='100%';
					me.__107114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__107114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__107114rec_amarelo_mobile.logicBlock_size();
		me.__107114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__107114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__107114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__107114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__107114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__107114rec_amarelo_mobile.style.visibility=me.__107114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__107114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__107114rec_amarelo_mobile.style.opacity == 0.0) { me.__107114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__107114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__107114rec_amarelo_mobile.logicBlock_alpha();
		me.__107114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio_mobile.appendChild(me.__107114rec_amarelo_mobile);
		el=me.__107115ic_roxo_mobile=document.createElement('div');
		els=me.__107115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__107115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACACAYAAACSqlKoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxNDoy'+
			'MC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6MzQtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6MzQtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZhOTc4ZDNmLTZiYTYtZDk0Ny1iMDg4LTlkM2E4M2M2OTliYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmYTk3OGQzZi02YmE2LWQ5NDctYjA4OC05ZDNhODNjNjk5YmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYTk3OGQzZi02YmE2LWQ5NDctYjA4OC05ZDNhODNjNj'+
			'k5YmEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZhOTc4ZDNmLTZiYTYtZDk0Ny1iMDg4LTlkM2E4M2M2OTliYSIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxNDoyMC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsRAMm4AAAtsSURBVHic7Z1drB1VFcd/vbRI'+
			'ZRuqbaFqP05rbaugJSLEBIwiIUCM8cGP+GCigw+ivho/HoiJURM18ZUX4/giJSZqog/4UQjRSKNYJWoUSltOe2nlQuFW2Xw02l4fzkx7ejiz19575pw5s8/6vXSYWbNnX+7/rLvnv/beZ9XKygpKs+TGbgfeW/znbzNr+i12J0lWqXCbJTf2k8C3gTcVp04AX8qsube9XqWHCrdBcmNvAfZXXL4ls+bBafYnZRba7kBifDPymhKIZtyGyI29DHgWMBUhp4FNmTVnptaphNGM2xxbqBYtwBXA+in1JXlUuM2xXbi+Ctg4jY7MAyrc5tjhEbNp4r2YE1S4zeEj3Ksm3os5QYXbHG/xiFHhNoQKtzl6HjFvnHQn5gUVbgMUVljPI1THuA2hwm2GzcAbPOJUuA2hwm0GnxczgA0T7cUcocJtBsnDLbkyN/Y1E+3JnKDCbQ'+
			'bfjLsRrZ41ggq3GXysMBj8/9bqWQOocJvBd6gA6uU2ggq3JoUVti3gFnUWGkCFW58thI1bNeM2gAq3PiHDBNCM2wgq3Pr4OgolWvZtABVufUKFq0OFBlDh1sfXCiu5ciK9mDNUuPUJHeNu1OpZfVS4NYiwwmAwX0HnLNREhVsP31lhw1yCCrc2Ktx6hA4TStQSq4kKtx6hjkKJOgs1UeHWI1a4mnFrosKtR6gVVqLCrYkKtx46xm0JFW4kkVZYiQq3JirceDYTv5pBq2c1UeHG06tx73qtntVDhRtP7IsZ6Nqz2qxuuwMdJtYKgwvVs5OhN+bGXg58AbgOWAZ+PI87nWvGjceVcX12yw5+QcuN3QY8xuA7Jj4OfBZ4IDf27tC2uo4KNx6XFbYEHBTuj3EWfsrgpXCUr+fG3hjRXmdR4UZQvFi5rLCTwO+FZoLKvrmx'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.7.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 21px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__107115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__107115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__107115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__107115ic_roxo_mobile.style.left='309px';
					me.__107115ic_roxo_mobile.style.top = 'calc(50% - (17px / 2))';
				}
				else {
					me.__107115ic_roxo_mobile.style.left='21px';
					me.__107115ic_roxo_mobile.style.top='calc(50% - ((17px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__107115ic_roxo_mobile.logicBlock_position();
		me.__107115ic_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__107115ic_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__107115ic_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__107115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107115ic_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__107115ic_roxo_mobile.style.width='27px';
					me.__107115ic_roxo_mobile.style.height='19px';
					me.__107115ic_roxo_mobile.style.top = 'calc(50% - (19px / 2))';
					setTimeout(function() {skin.updateSize(me.__107115ic_roxo_mobile);}, 1050);
				}
				else {
					me.__107115ic_roxo_mobile.style.width='24px';
					me.__107115ic_roxo_mobile.style.height='17px';
					me.__107115ic_roxo_mobile.style.top = 'calc(50% - (17px / 2))';
					setTimeout(function() {skin.updateSize(me.__107115ic_roxo_mobile);}, 1050);
				}
			}
		}
		me.__107115ic_roxo_mobile.logicBlock_size();
		me.__107115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10711bt_cardio_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__107115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__107115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__107115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__107115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__107115ic_roxo_mobile.style.visibility=me.__107115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__107115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__107115ic_roxo_mobile.style.opacity == 0.0) { me.__107115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__107115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__107115ic_roxo_mobile.logicBlock_alpha();
		me.__107115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10711bt_cardio_mobile.appendChild(me.__107115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__10711bt_cardio_mobile);
		el=me.__1081linha_mobile=document.createElement('div');
		el.ggId="1.0.8.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 330px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1081linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1081linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__1081linha_mobile);
		el=me.__10811bt_sala_spinning_mobile=document.createElement('div');
		el.ggId="1.0.8.1.1-BT_SALA_SPINNING_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 334px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10811bt_sala_spinning_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10811bt_sala_spinning_mobile.onclick=function (e) {
			player.openNext("{node33}","");
			player.setVariableValue('var_menu', true);
		}
		me.__10811bt_sala_spinning_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__108117image.style.transition='none';
			} else {
				me.__108117image.style.transition='all 1000ms ease 0ms';
			}
			me.__108117image.style.opacity='0.5';
			me.__108117image.style.visibility=me.__108117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10811bt_sala_spinning_mobile']=true;
			me.__108112sala_spinning_mobile.logicBlock_visible();
			me.__108111rec_roxo_mobile.logicBlock_size();
			me.__108111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__108113ic_amarelo_mobile.logicBlock_position();
			me.__108113ic_amarelo_mobile.logicBlock_alpha();
			me.__108114rec_amarelo_mobile.logicBlock_size();
			me.__108114rec_amarelo_mobile.logicBlock_alpha();
			me.__108115ic_roxo_mobile.logicBlock_alpha();
			me.__108115ic_roxo_mobile.logicBlock_position();
			me.__108115ic_roxo_mobile.logicBlock_size();
		}
		me.__10811bt_sala_spinning_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__108117image.style.transition='none';
			} else {
				me.__108117image.style.transition='all 0ms ease 0ms';
			}
			me.__108117image.style.opacity='0';
			me.__108117image.style.visibility='hidden';
			me.elementMouseOver['_10811bt_sala_spinning_mobile']=false;
			me.__108112sala_spinning_mobile.logicBlock_visible();
			me.__108111rec_roxo_mobile.logicBlock_size();
			me.__108111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__108113ic_amarelo_mobile.logicBlock_position();
			me.__108113ic_amarelo_mobile.logicBlock_alpha();
			me.__108114rec_amarelo_mobile.logicBlock_size();
			me.__108114rec_amarelo_mobile.logicBlock_alpha();
			me.__108115ic_roxo_mobile.logicBlock_alpha();
			me.__108115ic_roxo_mobile.logicBlock_position();
			me.__108115ic_roxo_mobile.logicBlock_size();
		}
		me.__10811bt_sala_spinning_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__108110fundo_mobile=document.createElement('div');
		el.ggId="1.0.8.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("SPINNING") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__108110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__108110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__108110fundo_mobile.style.transition='';
				if (me.__108110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__108110fundo_mobile.style.visibility=(Number(me.__108110fundo_mobile.style.opacity)>0||!me.__108110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__108110fundo_mobile.ggVisible=true;
				}
				else {
					me.__108110fundo_mobile.style.visibility="hidden";
					me.__108110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__108110fundo_mobile.logicBlock_visible();
		me.__108110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning_mobile.appendChild(me.__108110fundo_mobile);
		el=me.__108112sala_spinning_mobile=document.createElement('div');
		els=me.__108112sala_spinning_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.8.1.1.2-SALA_SPINNING_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__108112sala_spinning_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("SALA SPINNING", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__108112sala_spinning_mobile.ggUpdateText();
		el.appendChild(els);
		me.__108112sala_spinning_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108112sala_spinning_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__108112sala_spinning_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__108112sala_spinning_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__108112sala_spinning_mobile.style.transition='';
				if (me.__108112sala_spinning_mobile.ggCurrentLogicStateVisible == 0) {
					me.__108112sala_spinning_mobile.style.visibility="hidden";
					me.__108112sala_spinning_mobile.ggVisible=false;
				}
				else {
					me.__108112sala_spinning_mobile.style.visibility=(Number(me.__108112sala_spinning_mobile.style.opacity)>0||!me.__108112sala_spinning_mobile.style.opacity)?'inherit':'hidden';
					me.__108112sala_spinning_mobile.ggVisible=true;
				}
			}
		}
		me.__108112sala_spinning_mobile.logicBlock_visible();
		me.__108112sala_spinning_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning_mobile.appendChild(me.__108112sala_spinning_mobile);
		el=me.__108111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.8.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__108111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__108111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__108111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__108111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__108111rec_roxo_mobile.style.width='325px';
					me.__108111rec_roxo_mobile.style.height='100%';
					me.__108111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__108111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__108111rec_roxo_mobile.style.width='10px';
					me.__108111rec_roxo_mobile.style.height='100%';
					me.__108111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__108111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__108111rec_roxo_mobile.logicBlock_size();
		me.__108111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__108111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__108111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__108111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__108111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__108111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__108111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__108111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__108111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__108117image_mobile=document.createElement('div');
		els=me.__108117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__108117image_mobile';
		hs=basePath + 'images/_108117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.8.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__108111rec_roxo_mobile.appendChild(me.__108117image_mobile);
		me.__10811bt_sala_spinning_mobile.appendChild(me.__108111rec_roxo_mobile);
		el=me.__108113ic_amarelo_mobile=document.createElement('div');
		els=me.__108113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__108113ic_amarelo_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.8.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__108113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__108113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__108113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__108113ic_amarelo_mobile.style.left='314px';
					me.__108113ic_amarelo_mobile.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me.__108113ic_amarelo_mobile.style.left='21px';
					me.__108113ic_amarelo_mobile.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__108113ic_amarelo_mobile.logicBlock_position();
		me.__108113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__108113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__108113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__108113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__108113ic_amarelo_mobile.style.opacity == 0.0) { me.__108113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__108113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__108113ic_amarelo_mobile.style.visibility=me.__108113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__108113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__108113ic_amarelo_mobile.logicBlock_alpha();
		me.__108113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning_mobile.appendChild(me.__108113ic_amarelo_mobile);
		el=me.__108114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.8.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__108114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__108114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__108114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__108114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__108114rec_amarelo_mobile.style.width='34px';
					me.__108114rec_amarelo_mobile.style.height='100%';
					me.__108114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__108114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__108114rec_amarelo_mobile.style.width='340px';
					me.__108114rec_amarelo_mobile.style.height='100%';
					me.__108114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__108114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__108114rec_amarelo_mobile.logicBlock_size();
		me.__108114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__108114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__108114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__108114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__108114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__108114rec_amarelo_mobile.style.visibility=me.__108114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__108114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__108114rec_amarelo_mobile.style.opacity == 0.0) { me.__108114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__108114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__108114rec_amarelo_mobile.logicBlock_alpha();
		me.__108114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning_mobile.appendChild(me.__108114rec_amarelo_mobile);
		el=me.__108115ic_roxo_mobile=document.createElement('div');
		els=me.__108115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__108115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACQCAYAAACh8EESAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMzoy'+
			'MS0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTM6MzctMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTM6MzctMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZlYTBmYTU0LWJmODgtN2U0Ni05OTJmLTcxYjMxNWE1OWRiNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2ZWEwZmE1NC1iZjg4LTdlNDYtOTkyZi03MWIzMTVhNTlkYjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZWEwZmE1NC1iZjg4LTdlNDYtOTkyZi03MWIzMTVhNT'+
			'lkYjYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZlYTBmYTU0LWJmODgtN2U0Ni05OTJmLTcxYjMxNWE1OWRiNiIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMzoyMS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnQgM+cAABGYSURBVHic7Z15tOXTlcc/76Xo'+
			'wqZEzCIEjcQqtCEVRRBDJ8RUJSvSRHME6W4RHQmyzKHEEBIksZahHFMiNI2FbpSpUU1MQYLQiHlKhSq2VEVRr/84p+R59e579/x+v/P7/c51PmvVWrXq/s4+u+793nPPsPc+fQMDA2QyTWFF1weOA7YGFgYeBS4CzjIqc0Lt9WVBZ5rCik4CLgMWGublp4FJRuV3ITazoDONYEU3BKYDfzfCY38C1jUqr3Zrt7+sY5lMKFZ0DDCVkcUMsAxwWIjtLOhMExhgvS6f3SrEcBZ0plas6GK4RWC3jA2xnwWdqZuDgeUDnn8yxHgWdKY2rOiywKGBza4PeTgLOlMnRwMS8PxM4JKQDrKgM7VgRf8e+FZgs1ONioY0yILO1MWJwJiA518DzgjtJAs6Ex0rOgHYNbDZCaGjM2RBZ+phSuDzzwFnF+koCzoTFSu6JbBNYLNjjc'+
			'q7RfrLgs7E5oTA5x/HRdsVIgs6Ew0r+iVgYmCzI4zKvKJ9ZkFnYnJI4PP3AVeX6TCHj2ai4AP3fxvYbFujcnOZfvMInYnF9wOfv62smCELOhMBK/opYLfAZodX0XcWdCYGhxF2KniNUbmnio6zoDOV4ufO+wc0GQCOqqr/LOhMZVjRZYBfETY6Xx6aCDsSWdCZSrCiawPTgM8ENHsfOLJKP0K+SZkW4xNPPw4sNuSlxYGPdWg2/7W5wDvDvK7+tVnAXKPyoWf8iLwR8DXgnxg96XUoFxuVpwLbjEjeh04UK7oIsBcwGdgYWLKmrmcD7wKLMnw9jW6ZC6xhVJ6vxCtPHqETxIquBfwXsFoD3S/i/5TlnKrFDHkOnRxWtB+4kmbEXBVzCA9a6oos6PSYAKzTtBMl+ZlReSWG4Szo9FixaQdKosApsYx3nENb0U8C5wCf'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.8.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 21px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__108115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__108115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__108115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__108115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__108115ic_roxo_mobile.style.left='309px';
					me.__108115ic_roxo_mobile.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me.__108115ic_roxo_mobile.style.left='21px';
					me.__108115ic_roxo_mobile.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__108115ic_roxo_mobile.logicBlock_position();
		me.__108115ic_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__108115ic_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__108115ic_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__108115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108115ic_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__108115ic_roxo_mobile.style.width='25px';
					me.__108115ic_roxo_mobile.style.height='19px';
					me.__108115ic_roxo_mobile.style.top = 'calc(50% - (19px / 2))';
					setTimeout(function() {skin.updateSize(me.__108115ic_roxo_mobile);}, 1050);
				}
				else {
					me.__108115ic_roxo_mobile.style.width='23px';
					me.__108115ic_roxo_mobile.style.height='18px';
					me.__108115ic_roxo_mobile.style.top = 'calc(50% - (18px / 2))';
					setTimeout(function() {skin.updateSize(me.__108115ic_roxo_mobile);}, 1050);
				}
			}
		}
		me.__108115ic_roxo_mobile.logicBlock_size();
		me.__108115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10811bt_sala_spinning_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__108115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__108115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__108115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__108115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__108115ic_roxo_mobile.style.visibility=me.__108115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__108115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__108115ic_roxo_mobile.style.opacity == 0.0) { me.__108115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__108115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__108115ic_roxo_mobile.logicBlock_alpha();
		me.__108115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10811bt_sala_spinning_mobile.appendChild(me.__108115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__10811bt_sala_spinning_mobile);
		el=me.__1091linha_mobile=document.createElement('div');
		el.ggId="1.0.9.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 364px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1091linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1091linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__1091linha_mobile);
		el=me.__10911bt_sala_multi_mobile=document.createElement('div');
		el.ggId="1.0.9.1.1-BT_SALA_MULTI_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 368px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10911bt_sala_multi_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10911bt_sala_multi_mobile.onclick=function (e) {
			player.openNext("{node32}","");
			player.setVariableValue('var_menu', true);
		}
		me.__10911bt_sala_multi_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__109117image.style.transition='none';
			} else {
				me.__109117image.style.transition='all 1000ms ease 0ms';
			}
			me.__109117image.style.opacity='0.5';
			me.__109117image.style.visibility=me.__109117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_10911bt_sala_multi_mobile']=true;
			me.__109112sala_multi_mobile.logicBlock_visible();
			me.__109111rec_roxo_mobile.logicBlock_size();
			me.__109111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__109113ic_amarelo_mobile.logicBlock_position();
			me.__109113ic_amarelo_mobile.logicBlock_alpha();
			me.__109114rec_amarelo_mobile.logicBlock_size();
			me.__109114rec_amarelo_mobile.logicBlock_alpha();
			me.__109115ic_roxo_mobile.logicBlock_alpha();
			me.__109115ic_roxo_mobile.logicBlock_position();
		}
		me.__10911bt_sala_multi_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__109117image.style.transition='none';
			} else {
				me.__109117image.style.transition='all 0ms ease 0ms';
			}
			me.__109117image.style.opacity='0';
			me.__109117image.style.visibility='hidden';
			me.elementMouseOver['_10911bt_sala_multi_mobile']=false;
			me.__109112sala_multi_mobile.logicBlock_visible();
			me.__109111rec_roxo_mobile.logicBlock_size();
			me.__109111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__109113ic_amarelo_mobile.logicBlock_position();
			me.__109113ic_amarelo_mobile.logicBlock_alpha();
			me.__109114rec_amarelo_mobile.logicBlock_size();
			me.__109114rec_amarelo_mobile.logicBlock_alpha();
			me.__109115ic_roxo_mobile.logicBlock_alpha();
			me.__109115ic_roxo_mobile.logicBlock_position();
		}
		me.__10911bt_sala_multi_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__109110fundo_mobile=document.createElement('div');
		el.ggId="1.0.9.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("SALAMULTIFUNCIONAL") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__109110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__109110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__109110fundo_mobile.style.transition='';
				if (me.__109110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__109110fundo_mobile.style.visibility=(Number(me.__109110fundo_mobile.style.opacity)>0||!me.__109110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__109110fundo_mobile.ggVisible=true;
				}
				else {
					me.__109110fundo_mobile.style.visibility="hidden";
					me.__109110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__109110fundo_mobile.logicBlock_visible();
		me.__109110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi_mobile.appendChild(me.__109110fundo_mobile);
		el=me.__109112sala_multi_mobile=document.createElement('div');
		els=me.__109112sala_multi_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.9.1.1.2-SALA_MULTI_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__109112sala_multi_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("SALA MULTIFUNCIONAL", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__109112sala_multi_mobile.ggUpdateText();
		el.appendChild(els);
		me.__109112sala_multi_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109112sala_multi_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__109112sala_multi_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__109112sala_multi_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__109112sala_multi_mobile.style.transition='';
				if (me.__109112sala_multi_mobile.ggCurrentLogicStateVisible == 0) {
					me.__109112sala_multi_mobile.style.visibility="hidden";
					me.__109112sala_multi_mobile.ggVisible=false;
				}
				else {
					me.__109112sala_multi_mobile.style.visibility=(Number(me.__109112sala_multi_mobile.style.opacity)>0||!me.__109112sala_multi_mobile.style.opacity)?'inherit':'hidden';
					me.__109112sala_multi_mobile.ggVisible=true;
				}
			}
		}
		me.__109112sala_multi_mobile.logicBlock_visible();
		me.__109112sala_multi_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi_mobile.appendChild(me.__109112sala_multi_mobile);
		el=me.__109111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.9.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__109111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__109111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__109111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__109111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__109111rec_roxo_mobile.style.width='325px';
					me.__109111rec_roxo_mobile.style.height='100%';
					me.__109111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__109111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__109111rec_roxo_mobile.style.width='10px';
					me.__109111rec_roxo_mobile.style.height='100%';
					me.__109111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__109111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__109111rec_roxo_mobile.logicBlock_size();
		me.__109111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__109111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__109111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__109111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__109111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__109111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__109111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__109111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__109111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__109117image_mobile=document.createElement('div');
		els=me.__109117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__109117image_mobile';
		hs=basePath + 'images/_109117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.9.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__109111rec_roxo_mobile.appendChild(me.__109117image_mobile);
		me.__10911bt_sala_multi_mobile.appendChild(me.__109111rec_roxo_mobile);
		el=me.__109113ic_amarelo_mobile=document.createElement('div');
		els=me.__109113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__109113ic_amarelo_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.9.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__109113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__109113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__109113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__109113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__109113ic_amarelo_mobile.style.left='314px';
					me.__109113ic_amarelo_mobile.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__109113ic_amarelo_mobile.style.left='25px';
					me.__109113ic_amarelo_mobile.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__109113ic_amarelo_mobile.logicBlock_position();
		me.__109113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__109113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__109113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__109113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__109113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__109113ic_amarelo_mobile.style.opacity == 0.0) { me.__109113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__109113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__109113ic_amarelo_mobile.style.visibility=me.__109113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__109113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__109113ic_amarelo_mobile.logicBlock_alpha();
		me.__109113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi_mobile.appendChild(me.__109113ic_amarelo_mobile);
		el=me.__109114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.9.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__109114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__109114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__109114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__109114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__109114rec_amarelo_mobile.style.width='34px';
					me.__109114rec_amarelo_mobile.style.height='100%';
					me.__109114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__109114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__109114rec_amarelo_mobile.style.width='340px';
					me.__109114rec_amarelo_mobile.style.height='100%';
					me.__109114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__109114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__109114rec_amarelo_mobile.logicBlock_size();
		me.__109114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__109114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__109114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__109114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__109114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__109114rec_amarelo_mobile.style.visibility=me.__109114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__109114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__109114rec_amarelo_mobile.style.opacity == 0.0) { me.__109114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__109114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__109114rec_amarelo_mobile.logicBlock_alpha();
		me.__109114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi_mobile.appendChild(me.__109114rec_amarelo_mobile);
		el=me.__109115ic_roxo_mobile=document.createElement('div');
		els=me.__109115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__109115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAADDCAYAAAC/DJK5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMzow'+
			'NC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTM6MTctMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTM6MTctMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmNkMzJhZjQ5LTRmNWItODA0Zi05NmFmLWQ4NzAwNDU5OTg2ZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpjZDMyYWY0OS00ZjViLTgwNGYtOTZhZi1kODcwMDQ1OTk4NmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZDMyYWY0OS00ZjViLTgwNGYtOTZhZi1kODcwMDQ1OT'+
			'k4NmQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNkMzJhZjQ5LTRmNWItODA0Zi05NmFmLWQ4NzAwNDU5OTg2ZCIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMzowNC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiHUvawAAA86SURBVHic7Z15kFxFHcc/G2IE'+
			'9hdASIgcBvDiiIgYVETRIIVa4VRAwyHSiKWUeKEIHhRe3IpQiqDItlUcQRSVGBU1Kho8QAWiCAkQoiIhBoKQ/SVgQrL+0W90s0lmpmdfv+4305+qVKpm3/z6uzPfff26+9e/7hsaGqJbsKLPBl4DvAHYG9gd2BboLy5ZCTwK3AvMA+YAvzEqT1Wvtr70dYNprOgewKnAMcBWnm9fDnwL+KpRuatcZd1JrU1jRZ8PnAu8DegrIeRNwBlGZUEJsbqWWprGio4BTgfOBjYrOfwq4BzgHKOypuTYXUHtTGNFtwGuAd4cuKlbgBlG5V+B26kdtTKNFd0RuBmYUlGTC4GDjMqiitqrBbUxjRXdFvgt8IKKm34Y2Neo/LPidpNlTGwB7WBFNwd+RPWGAdgBuNmKjo/QdpLUwjTAJcDUiO1PAb4Wsf2kSL57sqKHArNi6yg4zq'+
			'hcF1tEbJI2jRXdDLgH2DmylAaPALsalcHYQmKSevf0HtIxDMB2wIdii4hNsncaKzoON+TdMbaWESwDJhuVlbGFxCLlO83BpGcYgG2Ao2KLiEnKpjkutoAmpKwtOEl2T1Z0LPAE/09pSI3VwFa92kWleqfZh3QNA/AsYL/YImKRqmleFltAG+wVW0AsUjXNrrEFtMFusQXEIlXTPDe2gDaYFFtALFI1jcQW0AZbxBYQi1RNMy62gDZI9bMLTqq/uMYW0AY9OdyGdE2zLLaANvh3bAGxSNU0D8QW0Ab3xxYQi1RNc29sAW1QB41BSNU0vwHSW99Yl7mxBcQiSdMYlceBO2LraMKCXk40T9I0Bd+KLaAJ18cWEJOUTXMtbjU5NYZwm/V6lmRNY1QW44yTGjcalTqM7oKRrGkKziOtu81a4POxRcQmadMYlfuAi2PrGMYV'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.9.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__109115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__109115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__109115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__109115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__109115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__109115ic_roxo_mobile.style.left='313px';
					me.__109115ic_roxo_mobile.style.top = 'calc(50% - (23px / 2))';
				}
				else {
					me.__109115ic_roxo_mobile.style.left='25px';
					me.__109115ic_roxo_mobile.style.top='calc(50% - ((23px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__109115ic_roxo_mobile.logicBlock_position();
		me.__109115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_10911bt_sala_multi_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__109115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__109115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__109115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__109115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__109115ic_roxo_mobile.style.visibility=me.__109115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__109115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__109115ic_roxo_mobile.style.opacity == 0.0) { me.__109115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__109115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__109115ic_roxo_mobile.logicBlock_alpha();
		me.__109115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10911bt_sala_multi_mobile.appendChild(me.__109115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__10911bt_sala_multi_mobile);
		el=me.__10101linha_mobile=document.createElement('div');
		el.ggId="1.0.10.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 398px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10101linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10101linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__10101linha_mobile);
		el=me.__101011bt_vestiarios_mobile=document.createElement('div');
		el.ggId="1.0.10.1.1-BT_VESTIARIOS_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 402px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101011bt_vestiarios_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101011bt_vestiarios_mobile.onclick=function (e) {
			player.openNext("{node34}","");
			player.setVariableValue('var_menu', true);
		}
		me.__101011bt_vestiarios_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__1010117image.style.transition='none';
			} else {
				me.__1010117image.style.transition='all 1000ms ease 0ms';
			}
			me.__1010117image.style.opacity='0.5';
			me.__1010117image.style.visibility=me.__1010117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_101011bt_vestiarios_mobile']=true;
			me.__1010112vestiarios_mobile.logicBlock_visible();
			me.__1010111rec_roxo_mobile.logicBlock_size();
			me.__1010111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__1010113ic_amarelo_mobile.logicBlock_alpha();
			me.__1010113ic_amarelo_mobile.logicBlock_position();
			me.__1010114rec_amarelo_mobile.logicBlock_size();
			me.__1010114rec_amarelo_mobile.logicBlock_alpha();
			me.__1010115ic_roxo_mobile.logicBlock_alpha();
			me.__1010115ic_roxo_mobile.logicBlock_position();
		}
		me.__101011bt_vestiarios_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__1010117image.style.transition='none';
			} else {
				me.__1010117image.style.transition='all 0ms ease 0ms';
			}
			me.__1010117image.style.opacity='0';
			me.__1010117image.style.visibility='hidden';
			me.elementMouseOver['_101011bt_vestiarios_mobile']=false;
			me.__1010112vestiarios_mobile.logicBlock_visible();
			me.__1010111rec_roxo_mobile.logicBlock_size();
			me.__1010111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__1010113ic_amarelo_mobile.logicBlock_alpha();
			me.__1010113ic_amarelo_mobile.logicBlock_position();
			me.__1010114rec_amarelo_mobile.logicBlock_size();
			me.__1010114rec_amarelo_mobile.logicBlock_alpha();
			me.__1010115ic_roxo_mobile.logicBlock_alpha();
			me.__1010115ic_roxo_mobile.logicBlock_position();
		}
		me.__101011bt_vestiarios_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1010110fundo_mobile=document.createElement('div');
		el.ggId="1.0.10.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("VESTIARIOS") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1010110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1010110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1010110fundo_mobile.style.transition='';
				if (me.__1010110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__1010110fundo_mobile.style.visibility=(Number(me.__1010110fundo_mobile.style.opacity)>0||!me.__1010110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__1010110fundo_mobile.ggVisible=true;
				}
				else {
					me.__1010110fundo_mobile.style.visibility="hidden";
					me.__1010110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__1010110fundo_mobile.logicBlock_visible();
		me.__1010110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios_mobile.appendChild(me.__1010110fundo_mobile);
		el=me.__1010112vestiarios_mobile=document.createElement('div');
		els=me.__1010112vestiarios_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.10.1.1.2-VESTIARIOS_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1010112vestiarios_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("VESTI\xc1RIOS", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1010112vestiarios_mobile.ggUpdateText();
		el.appendChild(els);
		me.__1010112vestiarios_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010112vestiarios_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1010112vestiarios_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1010112vestiarios_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1010112vestiarios_mobile.style.transition='';
				if (me.__1010112vestiarios_mobile.ggCurrentLogicStateVisible == 0) {
					me.__1010112vestiarios_mobile.style.visibility="hidden";
					me.__1010112vestiarios_mobile.ggVisible=false;
				}
				else {
					me.__1010112vestiarios_mobile.style.visibility=(Number(me.__1010112vestiarios_mobile.style.opacity)>0||!me.__1010112vestiarios_mobile.style.opacity)?'inherit':'hidden';
					me.__1010112vestiarios_mobile.ggVisible=true;
				}
			}
		}
		me.__1010112vestiarios_mobile.logicBlock_visible();
		me.__1010112vestiarios_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios_mobile.appendChild(me.__1010112vestiarios_mobile);
		el=me.__1010111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.10.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1010111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1010111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1010111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__1010111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__1010111rec_roxo_mobile.style.width='325px';
					me.__1010111rec_roxo_mobile.style.height='100%';
					me.__1010111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1010111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__1010111rec_roxo_mobile.style.width='10px';
					me.__1010111rec_roxo_mobile.style.height='100%';
					me.__1010111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1010111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__1010111rec_roxo_mobile.logicBlock_size();
		me.__1010111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1010111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1010111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1010111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__1010111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1010111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__1010111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__1010111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__1010111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1010117image_mobile=document.createElement('div');
		els=me.__1010117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__1010117image_mobile';
		hs=basePath + 'images/_1010117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.10.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__1010111rec_roxo_mobile.appendChild(me.__1010117image_mobile);
		me.__101011bt_vestiarios_mobile.appendChild(me.__1010111rec_roxo_mobile);
		el=me.__1010113ic_amarelo_mobile=document.createElement('div');
		els=me.__1010113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__1010113ic_amarelo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACaCAYAAAD4i5mDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgklEQVR4nO3bv2skZRzH8XfCkSqEQyEcWoiVV6iNcIjdiYUgiAhWhyaIhTabAxUES8UmhSYgXplcY2djJRz4Fxy2KvFHJSIWV9iYg2CxO9ywbrj82OzzzPN5v+DYuZmd3Bfy3ucm2dml+wdXGLirwJvAaulBwvwE3AKOSg9yVpdKD3AO14Abk+1RyUGCPTV53Co6xRktDXTl3wZWMPoa7E4evwXulBzktIYW/xrwyWTb8OuyCxwCH5Ye5KSGFv8ORl+z7n+BQVwGLZce4BR2Sg+gh+oWpu2iU5zQUOLvwnfVr9+I8c9jrxWe46GGEP87k0fDH44RcJ3xz2jVGsKvOp/B8Ieo+55Ve/1f+8r/VukBdG7Vrv61x/'+
			'8crvpDNgLeLj3EcWqOf730AJqLJ0sPcJya438BV31doJrjf7b0AGpbzfE/WnoAzU2VnVU5lJrSvelVHePXIhi/Yh2WHmAW49dF6251ro7xaxGq/Kij8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SuW8SvWpdIDaKH2e9sbxaaohPG3rwv+S+AucARcBr4Hrk+ORb4QjL9dXfQ3gXtTx+5Nju8Dr/f2R70IvOZv0z7wA7DJ/8Of9s3ked15MYy/PfvAAbBzyvM25z9K3Yy/TZ+e8bzvCFr9jb8t+8BH5zj/63kN'+
			'MgTG354/z3n+Z4Ss/savaT+XHmBRjL8tf5ceYEiMvy3/lh5gSIy/LY+XHmBIjF/Tni49wKIYf3sun/P8Dwi5zcF7e9rSRbt5xvNfmdMcg+DK36Z3z3jeG4Ss+uDK36J+vLdOcd7enOeonit/mzaA5zlZ0E/0nhez6oMrf8s2GN+msMf4za894BfG7wWsAS8Cr/aeG8f429aP+v1iU1TKyx7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn7FMn4tQpWdVTmUmnNUeoBZjF+xjF+xjF+xjF+xjF+xao1/vfQAmqubpQeYZen+wZVZ+9eBR3p/P5z8mZeVqa/7V+'+
			'/YNeAGMJrjv6eydoHfgC+m9q8Dq8y3rc4KsDb5+gB/AL/2n9CPfxn4vHdsUfHtzthn+O2Z9X2GxXf2D/AxPIj/KvDeAgeRSuleBFvdNb/hK0XX+UuXgO2Sk0gFjGB8nb+Cq74C1fqrTunCGb9iGb9iGb9iGb9iGb9iGb9iGb9iGb9iGb9iGb9iLQN3Of5ea6lZy8DtybYvAKXYBb7qLnu2ejulVu3y4COVP05/hncZeBl4jPGtzvP+7K60SKu97UPgd+BOt+M/xrV1XWXQLxcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.10.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1010113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1010113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1010113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1010113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__1010113ic_amarelo_mobile.style.left='314px';
					me.__1010113ic_amarelo_mobile.style.top = 'calc(50% - (17px / 2))';
				}
				else {
					me.__1010113ic_amarelo_mobile.style.left='22px';
					me.__1010113ic_amarelo_mobile.style.top='calc(50% - ((17px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1010113ic_amarelo_mobile.logicBlock_position();
		me.__1010113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1010113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1010113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1010113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1010113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__1010113ic_amarelo_mobile.style.opacity == 0.0) { me.__1010113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__1010113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__1010113ic_amarelo_mobile.style.visibility=me.__1010113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__1010113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__1010113ic_amarelo_mobile.logicBlock_alpha();
		me.__1010113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios_mobile.appendChild(me.__1010113ic_amarelo_mobile);
		el=me.__1010114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.10.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1010114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1010114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1010114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__1010114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__1010114rec_amarelo_mobile.style.width='34px';
					me.__1010114rec_amarelo_mobile.style.height='100%';
					me.__1010114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1010114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__1010114rec_amarelo_mobile.style.width='340px';
					me.__1010114rec_amarelo_mobile.style.height='100%';
					me.__1010114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1010114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__1010114rec_amarelo_mobile.logicBlock_size();
		me.__1010114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1010114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1010114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1010114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__1010114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__1010114rec_amarelo_mobile.style.visibility=me.__1010114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__1010114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1010114rec_amarelo_mobile.style.opacity == 0.0) { me.__1010114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__1010114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__1010114rec_amarelo_mobile.logicBlock_alpha();
		me.__1010114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios_mobile.appendChild(me.__1010114rec_amarelo_mobile);
		el=me.__1010115ic_roxo_mobile=document.createElement('div');
		els=me.__1010115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__1010115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACaCAYAAAD4i5mDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxMjo0'+
			'MS0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTI6NTktMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTI6NTktMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZkNmQ4MDVkLTFhNTEtOTI0OC1iNmU1LTMxMjkzOTE3NTYzMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2ZDZkODA1ZC0xYTUxLTkyNDgtYjZlNS0zMTI5MzkxNzU2MzEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZDZkODA1ZC0xYTUxLTkyNDgtYjZlNS0zMTI5MzkxNz'+
			'U2MzEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZkNmQ4MDVkLTFhNTEtOTI0OC1iNmU1LTMxMjkzOTE3NTYzMSIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxMjo0MS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr3jAaYAAATQSURBVHic7du/a2RVGMbxJyGk'+
			'ellEYQstxG4LtREWsVuxEAQRwWrR5IiFNrMLKgiWis0WbgZEu5vY2NlYCQv+BYu1oq6ViFhYnMYUicXcWW7WhE0mkznnnuf7gZD5dScv5HsPN5l71w4PDzVmXeQrkt6UFKVnMfOTpK9SjoPSgyxqbazxd5GvSrre352UnMXYVJJSjhulB1nEKOPvIt+StCmir8G0//5dynGn6CRnNKr4u8iXJH3S3yX8ukwl7accH5Ye5LTGFv+OiL5mozoMWi89wGn14aNuE+n+YWn1RhH/IHxW/fpNJG12kV8rPcjDVB9/F/md/ibhj8dE0rX+b7RqbZQe4BSeEeGP0fx3Vu3xf9Urfxf5rdIz4HxqXv2rjl/Sc2LVH7OJpLdLD3GSauPvIl8uPQOW4qnSA5yk2vglvSBWfVygmuN/tvQAaFvN8T9WegAsRxe5ys6qHApNmWh2Em'+
			'J1iB+rQPywtV96gOMQPy7aVMQPV7Ve6kj8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sEX8sLVRegCs1N7g9laxKSpB/O2bB/+FpLspx0EX+RFJP0i61j9nuSMQf7vm0d9MOf4ZPtHf35O010V+ffCU1U7AMX+b9iT9mHJsPxj+g1KOb1OO7cF2Noi/PXuSfkk5ds6y0WAHsEH8DUo5Pl1w0+9ltPoTf1v2JH206MYpxzdLnKV6xN+YlOPPc77FZzJZ/YkfR6QcP5eeYVWIvy1/lx5gTIi/Lf+WHmBMiL8tT5Qe'+
			'YEyIH0d0kZ8uPcOqEH9j+vN2zuMDmZzmwLk9bZlHu73Ixl3kV5Y3Sv1Y+RvURX53wU3fkMmqLxF/i7YkPX/WHaCLvHsx49SL+Ns03wF2H/bCLvKTg9fZrPoSx/wt29LsfP1dzT782pX0q2afBVyS9KKkVwevtUP8bRtG/X6xKSrFYQ9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET9sET8uXBe5ys6qHAptSTkOSs9wHOKHLeKHLeKHLeKHLeKHrSrj7yJfLj0DlqeLfLP0DMdZOzw8/N+DfXyPDh7a77+WZXP4vinHX4OffVXSdUmTJf48lDWVdC/luD18sO'+
			'8stNy25jYlXerfX5L+SDl+G77gfvz9BxGfD55bVXzTYx4j/PYc93uWVt9ZTjk+lvr4u8hXJL23wkGAUqaSlHLcmB/zEz5cTCSpi/zSRhf5VulpgBWbSLP/9myKVR+GqvxXJ7AKxA9bxA9bxA9bxA9bxA9bxA9bxA9bxA9bxA9bxA9b65Lu6uRzrYFmraccX/e32QHgYirpy+GVXDv9E5zhiVbNF/h7KcftI9fw9pcyvizpcc1OdV72tbvAKsXg9r6k31OOO/MH/gNt7uktVFUtDAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.10.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 22px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1010115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1010115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1010115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1010115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1010115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__1010115ic_roxo_mobile.style.left='310px';
					me.__1010115ic_roxo_mobile.style.top = 'calc(50% - (19px / 2))';
				}
				else {
					me.__1010115ic_roxo_mobile.style.left='22px';
					me.__1010115ic_roxo_mobile.style.top='calc(50% - ((19px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1010115ic_roxo_mobile.logicBlock_position();
		me.__1010115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101011bt_vestiarios_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1010115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1010115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1010115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1010115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__1010115ic_roxo_mobile.style.visibility=me.__1010115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__1010115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1010115ic_roxo_mobile.style.opacity == 0.0) { me.__1010115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__1010115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__1010115ic_roxo_mobile.logicBlock_alpha();
		me.__1010115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101011bt_vestiarios_mobile.appendChild(me.__1010115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__101011bt_vestiarios_mobile);
		el=me.__10111linha_mobile=document.createElement('div');
		el.ggId="1.0.11.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 432px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10111linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10111linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__10111linha_mobile);
		el=me.__101111bt_estacionamento_mobile=document.createElement('div');
		el.ggId="1.0.11.1.1-BT_ESTACIONAMENTO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 436px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101111bt_estacionamento_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101111bt_estacionamento_mobile.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('var_menu', true);
		}
		me.__101111bt_estacionamento_mobile.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__1011117image.style.transition='none';
			} else {
				me.__1011117image.style.transition='all 1000ms ease 0ms';
			}
			me.__1011117image.style.opacity='0.5';
			me.__1011117image.style.visibility=me.__1011117image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['_101111bt_estacionamento_mobile']=true;
			me.__1011112estacionamento_mobile.logicBlock_visible();
			me.__1011111rec_roxo_mobile.logicBlock_size();
			me.__1011111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__1011113ic_amarelo_mobile.logicBlock_alpha();
			me.__1011113ic_amarelo_mobile.logicBlock_position();
			me.__1011114rec_amarelo_mobile.logicBlock_size();
			me.__1011114rec_amarelo_mobile.logicBlock_alpha();
			me.__1011115ic_roxo_mobile.logicBlock_alpha();
			me.__1011115ic_roxo_mobile.logicBlock_position();
		}
		me.__101111bt_estacionamento_mobile.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me.__1011117image.style.transition='none';
			} else {
				me.__1011117image.style.transition='all 0ms ease 0ms';
			}
			me.__1011117image.style.opacity='0';
			me.__1011117image.style.visibility='hidden';
			me.elementMouseOver['_101111bt_estacionamento_mobile']=false;
			me.__1011112estacionamento_mobile.logicBlock_visible();
			me.__1011111rec_roxo_mobile.logicBlock_size();
			me.__1011111rec_roxo_mobile.logicBlock_backgroundcolor();
			me.__1011113ic_amarelo_mobile.logicBlock_alpha();
			me.__1011113ic_amarelo_mobile.logicBlock_position();
			me.__1011114rec_amarelo_mobile.logicBlock_size();
			me.__1011114rec_amarelo_mobile.logicBlock_alpha();
			me.__1011115ic_roxo_mobile.logicBlock_alpha();
			me.__1011115ic_roxo_mobile.logicBlock_position();
		}
		me.__101111bt_estacionamento_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1011110fundo_mobile=document.createElement('div');
		el.ggId="1.0.11.1.1.0-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011110fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011110fundo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("ESTACIONAMENTO") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1011110fundo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1011110fundo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1011110fundo_mobile.style.transition='';
				if (me.__1011110fundo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__1011110fundo_mobile.style.visibility=(Number(me.__1011110fundo_mobile.style.opacity)>0||!me.__1011110fundo_mobile.style.opacity)?'inherit':'hidden';
					me.__1011110fundo_mobile.ggVisible=true;
				}
				else {
					me.__1011110fundo_mobile.style.visibility="hidden";
					me.__1011110fundo_mobile.ggVisible=false;
				}
			}
		}
		me.__1011110fundo_mobile.logicBlock_visible();
		me.__1011110fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento_mobile.appendChild(me.__1011110fundo_mobile);
		el=me.__1011112estacionamento_mobile=document.createElement('div');
		els=me.__1011112estacionamento_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1.0.11.1.1.2-ESTACIONAMENTO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.941176);';
		hs+='height : 26px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1011112estacionamento_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("ESTACIONAMENTO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1011112estacionamento_mobile.ggUpdateText();
		el.appendChild(els);
		me.__1011112estacionamento_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011112estacionamento_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1011112estacionamento_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1011112estacionamento_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1011112estacionamento_mobile.style.transition='';
				if (me.__1011112estacionamento_mobile.ggCurrentLogicStateVisible == 0) {
					me.__1011112estacionamento_mobile.style.visibility="hidden";
					me.__1011112estacionamento_mobile.ggVisible=false;
				}
				else {
					me.__1011112estacionamento_mobile.style.visibility=(Number(me.__1011112estacionamento_mobile.style.opacity)>0||!me.__1011112estacionamento_mobile.style.opacity)?'inherit':'hidden';
					me.__1011112estacionamento_mobile.ggVisible=true;
				}
			}
		}
		me.__1011112estacionamento_mobile.logicBlock_visible();
		me.__1011112estacionamento_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento_mobile.appendChild(me.__1011112estacionamento_mobile);
		el=me.__1011111rec_roxo_mobile=document.createElement('div');
		el.ggId="1.0.11.1.1.1-REC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='overflow: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011111rec_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011111rec_roxo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1011111rec_roxo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1011111rec_roxo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1011111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__1011111rec_roxo_mobile.ggCurrentLogicStateSize == 0) {
					me.__1011111rec_roxo_mobile.style.width='325px';
					me.__1011111rec_roxo_mobile.style.height='100%';
					me.__1011111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1011111rec_roxo_mobile);}, 1050);
				}
				else {
					me.__1011111rec_roxo_mobile.style.width='10px';
					me.__1011111rec_roxo_mobile.style.height='100%';
					me.__1011111rec_roxo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1011111rec_roxo_mobile);}, 1050);
				}
			}
		}
		me.__1011111rec_roxo_mobile.logicBlock_size();
		me.__1011111rec_roxo_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1011111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1011111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1011111rec_roxo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, background-color 0s';
				if (me.__1011111rec_roxo_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1011111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,0.784314)";
				}
				else {
					me.__1011111rec_roxo_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__1011111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__1011111rec_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1011117image_mobile=document.createElement('div');
		els=me.__1011117image_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__1011117image_mobile';
		hs=basePath + 'images/_1011117image_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.11.1.1.7-IMAGE_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011117image_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011117image_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__1011111rec_roxo_mobile.appendChild(me.__1011117image_mobile);
		me.__101111bt_estacionamento_mobile.appendChild(me.__1011111rec_roxo_mobile);
		el=me.__1011113ic_amarelo_mobile=document.createElement('div');
		els=me.__1011113ic_amarelo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__1011113ic_amarelo_mobile';
		hs='data:image/png;base64,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'+
			'tGl5XVVLGtYlO5k8HIobe5i9MRQ4yuK6up0QYeoZmtoqWD20cdqWH/Xw+HdBqrmnouzUyk/T/dHDOIQLh+1JEawZdHiSXGCUwXoImCzGWNGxdcQ/Ny2AZ+EcNxzOeMDwP/pjnJbJPnGjd1eAZ3Y49ToI2ZGRRlqZHYD/1X0gxBWiG6WFUvN+4BHqIZOXwSWBMrgNhihPwF2casMTuIQrTcRt5V8jZmMWGX060qk4IYobutdG7JtEJcHzuQBLge8wedYw6fo1jVOyYprVY2BowUx6mvYG3/4C7GrAwuDKsx95GQfg7B5PF23M3XrEVKYgQzMr68iFWKCbVCHKSqaRU2svPzuZRzeD4eF5iqSuixqVXwOY61H2wCn6O7J4mYnQvpjiFNIY82h+8CP4kZyHSkLEYwA4LPKY5jJrNNognMhBQurMn3aFIXo+U8YGFxHDKh'+
			'NoEq0tTnZOLsajVl67VUyUWMlqXsvAamj6SWq4HJ3Nw3iOOBL5fe+85hNhfS3MRY5lTgkOK4bkLLyVtHsyYEp8wI3a0bXIjS5vF+AiyT4ZqcxWhZAHwOswTHwjnOnY4nMTMsvK78JWZlF8wGvYdhJi5XZTPdHCZTHa3K/wBT0UdEmkaVwQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.11.1.1.3-IC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 17px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011113ic_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011113ic_amarelo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1011113ic_amarelo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1011113ic_amarelo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1011113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1011113ic_amarelo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__1011113ic_amarelo_mobile.style.left='314px';
					me.__1011113ic_amarelo_mobile.style.top = 'calc(50% - (17px / 2))';
				}
				else {
					me.__1011113ic_amarelo_mobile.style.left='22px';
					me.__1011113ic_amarelo_mobile.style.top='calc(50% - ((17px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1011113ic_amarelo_mobile.logicBlock_position();
		me.__1011113ic_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1011113ic_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1011113ic_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1011113ic_amarelo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1011113ic_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__1011113ic_amarelo_mobile.style.opacity == 0.0) { me.__1011113ic_amarelo_mobile.style.visibility="hidden"; } }, 1005);
					me.__1011113ic_amarelo_mobile.style.opacity=0;
				}
				else {
					me.__1011113ic_amarelo_mobile.style.visibility=me.__1011113ic_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__1011113ic_amarelo_mobile.style.opacity=1;
				}
			}
		}
		me.__1011113ic_amarelo_mobile.logicBlock_alpha();
		me.__1011113ic_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento_mobile.appendChild(me.__1011113ic_amarelo_mobile);
		el=me.__1011114rec_amarelo_mobile=document.createElement('div');
		el.ggId="1.0.11.1.1.4-REC_AMARELO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffe000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011114rec_amarelo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011114rec_amarelo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1011114rec_amarelo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1011114rec_amarelo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1011114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__1011114rec_amarelo_mobile.ggCurrentLogicStateSize == 0) {
					me.__1011114rec_amarelo_mobile.style.width='34px';
					me.__1011114rec_amarelo_mobile.style.height='100%';
					me.__1011114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1011114rec_amarelo_mobile);}, 1050);
				}
				else {
					me.__1011114rec_amarelo_mobile.style.width='340px';
					me.__1011114rec_amarelo_mobile.style.height='100%';
					me.__1011114rec_amarelo_mobile.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me.__1011114rec_amarelo_mobile);}, 1050);
				}
			}
		}
		me.__1011114rec_amarelo_mobile.logicBlock_size();
		me.__1011114rec_amarelo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1011114rec_amarelo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1011114rec_amarelo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1011114rec_amarelo_mobile.style.transition='width 1000ms ease 0ms, height 1000ms ease 0ms, top 1000ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__1011114rec_amarelo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__1011114rec_amarelo_mobile.style.visibility=me.__1011114rec_amarelo_mobile.ggVisible?'inherit':'hidden';
					me.__1011114rec_amarelo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1011114rec_amarelo_mobile.style.opacity == 0.0) { me.__1011114rec_amarelo_mobile.style.visibility="hidden"; } }, 505);
					me.__1011114rec_amarelo_mobile.style.opacity=0;
				}
			}
		}
		me.__1011114rec_amarelo_mobile.logicBlock_alpha();
		me.__1011114rec_amarelo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento_mobile.appendChild(me.__1011114rec_amarelo_mobile);
		el=me.__1011115ic_roxo_mobile=document.createElement('div');
		els=me.__1011115ic_roxo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__1011115ic_roxo_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAACeCAYAAADAMr1TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wNy0wMlQyMjoxNDow'+
			'MC0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6MTUtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDctMDJUMjI6MTQ6MTUtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NGZiNmEyLTVjZjQtOTA0NS05NzE5LTM1MmFiNTZjYzA2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjRmYjZhMi01Y2Y0LTkwNDUtOTcxOS0zNTJhYjU2Y2MwNjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNjRmYjZhMi01Y2Y0LTkwNDUtOTcxOS0zNTJhYjU2Y2'+
			'MwNjYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NGZiNmEyLTVjZjQtOTA0NS05NzE5LTM1MmFiNTZjYzA2NiIgc3RFdnQ6d2hlbj0iMjAyNS0wNy0wMlQyMjoxNDowMC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI2LjggKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu3vOXcAAA6rSURBVHic7Z1/jKVldcc/TMdk'+
			'Iwc1QosJYMUIKpFaSCTZ+qPFVDRIdBNJUWkLT7GZVbaD8kMCdjVI1Ej9xY1EJxEeiJDUBONq0HaBDC20YNkU42pUMIZG0IIiohxwTTfZ/nHfd/fdmdmZ++P5+d7zSSa57917zzk7Z77v8+s8z3vYvn376ANe9DTgDcBxuWPpEY8AdzuV+3MHMgscVrMYveifABd03lrMFUuPGXRe3+RUHsgWSc+pUoxedBtwQnNpAkxHK8xHnMqnskbSQ6oSoxd9J7C5uTQR5qMV5fecypeyRtIjqhGjF70aeB4mwpIYAHudyiW5A+kDxYvRi74IuKK5NCGWR9tKfsKpPJY1ksopWoxe9M+AczAR1sAAuN6p7M4dSK3M5Q7gUHjRozAh1sQicIEXfUHuQGqlWDEC2zEh1sYicJUXldyB1Mh87gDWwotemzsGY2LaG+hFWaOokOJaRi'+
			'/6wealtYoVYzfU8SlOjMAxmBBrZxHAi/517kBqoigxetErc8dgBGMReI0XPSN3ILVQzJjRi54IHI21in2izeXtWaOohJJaxgsxIfYSGz+ORkliNPpJO340QW5AEWK0cUXvaQV5ae5ASqYIMQJvxbqofWcROK6ZGzDWoBQxGrPBInChFz02dyAlkn021YtuzR2DkRSr0DkEJbSMr8S6qDOHTeisJqsYO6VvxmzRTuhYkUeHrPsZm7tj7FZxObL9ljcGsnNDIDuT8HeJ/Q2Au5zKjsR+iyT7mDEyy8C9TmV7TCde9CXA9UwvyBsY/nHePHVQY+JFj+hcphJl20Le6VQ0kc9iydZN9aJbIrtYBu6MLUQAp/I/wOcD2UouxMbv007lAmAvaVvnReBjCf0VS84x4+lE7qI6lU/EtL+CXtRfOpWFHH5tQieTGJuzbWKyDPjI'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.11.1.1.5-IC_ROXO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 22px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011115ic_roxo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011115ic_roxo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1011115ic_roxo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1011115ic_roxo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1011115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1011115ic_roxo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__1011115ic_roxo_mobile.style.left='310px';
					me.__1011115ic_roxo_mobile.style.top = 'calc(50% - (19px / 2))';
				}
				else {
					me.__1011115ic_roxo_mobile.style.left='22px';
					me.__1011115ic_roxo_mobile.style.top='calc(50% - ((19px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1011115ic_roxo_mobile.logicBlock_position();
		me.__1011115ic_roxo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_101111bt_estacionamento_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1011115ic_roxo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1011115ic_roxo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1011115ic_roxo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__1011115ic_roxo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__1011115ic_roxo_mobile.style.visibility=me.__1011115ic_roxo_mobile.ggVisible?'inherit':'hidden';
					me.__1011115ic_roxo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1011115ic_roxo_mobile.style.opacity == 0.0) { me.__1011115ic_roxo_mobile.style.visibility="hidden"; } }, 1005);
					me.__1011115ic_roxo_mobile.style.opacity=0;
				}
			}
		}
		me.__1011115ic_roxo_mobile.logicBlock_alpha();
		me.__1011115ic_roxo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__101111bt_estacionamento_mobile.appendChild(me.__1011115ic_roxo_mobile);
		me.__10menu_principal_mobile.appendChild(me.__101111bt_estacionamento_mobile);
		el=me.__10121linha_mobile=document.createElement('div');
		el.ggId="1.0.12.1-LINHA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 466px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10121linha_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10121linha_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__10menu_principal_mobile.appendChild(me.__10121linha_mobile);
		me.divSkin.appendChild(me.__10menu_principal_mobile);
		el=me.__102logo=document.createElement('div');
		els=me.__102logo__img=document.createElement('img');
		els.className='ggskin ggskin__102logo';
		hs=basePath + 'images/_102logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.2-LOGO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 82px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__102logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__102logo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__102logo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__102logo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__102logo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me.__102logo.ggCurrentLogicStatePosition == 0) {
					me.__102logo.style.left='25px';
					me.__102logo.style.top='10px';
				}
				else {
					me.__102logo.style.left='50px';
					me.__102logo.style.top='41px';
				}
			}
		}
		me.__102logo.logicBlock_position();
		me.__102logo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__102logo.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__102logo.ggCurrentLogicStateSize = newLogicStateSize;
				me.__102logo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me.__102logo.ggCurrentLogicStateSize == 0) {
					me.__102logo.style.width='240px';
					me.__102logo.style.height='93px';
					setTimeout(function() {skin.updateSize(me.__102logo);}, 1050);
				}
				else {
					me.__102logo.style.width='210px';
					me.__102logo.style.height='82px';
					setTimeout(function() {skin.updateSize(me.__102logo);}, 1050);
				}
			}
		}
		me.__102logo.logicBlock_size();
		me.__102logo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__102logo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__102logo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__102logo.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me.__102logo.ggCurrentLogicStateVisible == 0) {
					me.__102logo.style.visibility="hidden";
					me.__102logo.ggVisible=false;
				}
				else {
					me.__102logo.style.visibility=(Number(me.__102logo.style.opacity)>0||!me.__102logo.style.opacity)?'inherit':'hidden';
					me.__102logo.ggVisible=true;
				}
			}
		}
		me.__102logo.logicBlock_visible();
		me.__102logo.onclick=function (e) {
			player.setVariableValue('var_menu', !player.getVariableValue('var_menu'));
			player.setVariableValue('var_hide', !player.getVariableValue('var_hide'));
		}
		me.__102logo.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__102logo);
		el=me.__102logo_mobile=document.createElement('div');
		els=me.__102logo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__102logo_mobile';
		hs=basePath + 'images/_102logo_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1.0.2-LOGO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 82px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__102logo_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__102logo_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__102logo_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__102logo_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__102logo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me.__102logo_mobile.ggCurrentLogicStatePosition == 0) {
					me.__102logo_mobile.style.left='15px';
					me.__102logo_mobile.style.top='10px';
				}
				else {
					me.__102logo_mobile.style.left='39px';
					me.__102logo_mobile.style.top='32px';
				}
			}
		}
		me.__102logo_mobile.logicBlock_position();
		me.__102logo_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__102logo_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__102logo_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__102logo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me.__102logo_mobile.ggCurrentLogicStateSize == 0) {
					me.__102logo_mobile.style.width='240px';
					me.__102logo_mobile.style.height='93px';
					setTimeout(function() {skin.updateSize(me.__102logo_mobile);}, 1050);
				}
				else {
					me.__102logo_mobile.style.width='210px';
					me.__102logo_mobile.style.height='82px';
					setTimeout(function() {skin.updateSize(me.__102logo_mobile);}, 1050);
				}
			}
		}
		me.__102logo_mobile.logicBlock_size();
		me.__102logo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__102logo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__102logo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__102logo_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, width 1000ms ease 0ms, height 1000ms ease 0ms';
				if (me.__102logo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__102logo_mobile.style.visibility=(Number(me.__102logo_mobile.style.opacity)>0||!me.__102logo_mobile.style.opacity)?'inherit':'hidden';
					me.__102logo_mobile.ggVisible=true;
				}
				else {
					me.__102logo_mobile.style.visibility="hidden";
					me.__102logo_mobile.ggVisible=false;
				}
			}
		}
		me.__102logo_mobile.logicBlock_visible();
		me.__102logo_mobile.onclick=function (e) {
			player.setVariableValue('var_menu', !player.getVariableValue('var_menu'));
			player.setVariableValue('var_hide', !player.getVariableValue('var_hide'));
		}
		me.__102logo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__102logo_mobile);
		el=me.__20bt_tela_cheia=document.createElement('div');
		el.ggId="2.0-BT_TELA_CHEIA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20bt_tela_cheia.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__20bt_tela_cheia.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__20bt_tela_cheia.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__20bt_tela_cheia.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__20bt_tela_cheia.style.transition='';
				if (me.__20bt_tela_cheia.ggCurrentLogicStateVisible == 0) {
					me.__20bt_tela_cheia.style.visibility="hidden";
					me.__20bt_tela_cheia.ggVisible=false;
				}
				else if (me.__20bt_tela_cheia.ggCurrentLogicStateVisible == 1) {
					me.__20bt_tela_cheia.style.visibility="hidden";
					me.__20bt_tela_cheia.ggVisible=false;
				}
				else {
					me.__20bt_tela_cheia.style.visibility=(Number(me.__20bt_tela_cheia.style.opacity)>0||!me.__20bt_tela_cheia.style.opacity)?'inherit':'hidden';
					me.__20bt_tela_cheia.ggVisible=true;
				}
			}
		}
		me.__20bt_tela_cheia.logicBlock_visible();
		me.__20bt_tela_cheia.onclick=function (e) {
			player.setVariableValue('var_telacheia', !player.getVariableValue('var_telacheia'));
			player.toggleFullscreen();
		}
		me.__20bt_tela_cheia.ggUpdatePosition=function (useTransition) {
		}
		el=me.__201fundo=document.createElement('div');
		el.ggId="2.0.1-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #9900ff;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 25px 5px 25px 5px;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__201fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__201fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__20bt_tela_cheia.appendChild(me.__201fundo);
		el=me.__202texto=document.createElement('div');
		els=me.__202texto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.2-TEXTO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 22px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__202texto.ggUpdateText=function() {
			var params = [];
			var hs = player._("FULLSCREEN", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__202texto.ggUpdateText();
		el.appendChild(els);
		me.__202texto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__202texto.ggUpdatePosition=function (useTransition) {
		}
		me.__20bt_tela_cheia.appendChild(me.__202texto);
		el=me.__203fullscreen_on=document.createElement('div');
		els=me.__203fullscreen_on__img=document.createElement('img');
		els.className='ggskin ggskin__203fullscreen_on';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOWSURBVHgB7d3hTeNAEIbhz1RwJYQOQgVnKoAOEJUBHUAFCRUkHcQdHB3s7cQOyg9OB5c9Z4Z5H2kVFCXRaj5b2ay9S6cPlFL6+nBXmz0uNL/t1F66rntWQKFqWDu7qG1VfNnVtlAQJUgNu6MOL+vDqrYf8uettut65G7lWKQa7oOfjoaNfHb4wDp+VTs+yKFoNbyYnvB6lB6z/j3Ir1A1vKhH6q3OM/j4F30ZB02uRKyhnfE3iuVO/oSroQW/VCy9/AlXw87G+gqmDk46ORKxhhdCShGD9/hbflAwBN/GWsFEDN7j3P2Tgok2uBvquO5SDtUy2gROryAinf'+
			'H7uWb5da+xjyFECf5wgWGQU1Pf7MAMEX6E4NcaLyy4vjJnpj5eKcAo3+t3/KAx8MdazFcFVMtq07g2h7+Uw5m9ZsF7m037rlrlxcxdUgSfFMEnRfBJEXxSBJ8UwSdF8EkRfFIEnxTBJ0XwSRF8UgSfFMEnRfBJEXxSBJ+UBT/odO5vhPxGBp1ua8GvdTqCn89ap9sH32L5T8gtyYJql1c5bXuunTCrZnmVcW+2X+Xr7D0LYVZN86pPLMvXPsxeG20LkG+jaV5lPJJ2n/iQVeFMP7vmedUX3dT2UNvm6M276bmfgivkBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIr5TSTxvn7I4209lMz90Krpyc17R91qr83a6w3dnZNcmrsMFhKE3yKmxpGkqzvMrndkf8k5UwqyZ51T9uy+l6YRat8rL96m90ujthLk3ysuBb'+
			'DNB6YS5N8ursvFcDXSX8d63y4r9QJUXwSRF8UgSfFMEnRfBJEXxSBJ8UwSdF8EkRfFIEnxTBJ0XwSRF8UgSfFMEnRfBJNbv1qrHt1F66rntWQNOdx3YTqj0u5IzX4I8NtV3XA2BQAGVcsPAg5zegRgjevGkMfyvHyrhEyRYs/JBzUYI3Fv6V1zN/OtM3ChC6iTS4s4I+yK8QZ/pBtFF973G5VhnXoC8USMSfcx6Xa7VY1jSriMH38ifcPgGRBnfvvC3XilhDZu6SsuAHxeLxt/ygWLYW/FqxeAx+rVj2wT8pFo9z9+FquB8klXFflF7+DXVcdymHotXwMLi71zgl6tl+vl5+harhPvhp/vtafjt+uEgzyKloNXz/OTdd+bqSvxHqWuPFGddX5kykGn44EVK/r2wK0uaflzrPrNSgsbOPtbOvCsh7DX8Dv9So9SQb32'+
			'oAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.3-FULLSCREEN_ON";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__203fullscreen_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__203fullscreen_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_telacheia') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__203fullscreen_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__203fullscreen_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__203fullscreen_on.style.transition='';
				if (me.__203fullscreen_on.ggCurrentLogicStateVisible == 0) {
					me.__203fullscreen_on.style.visibility="hidden";
					me.__203fullscreen_on.ggVisible=false;
				}
				else {
					me.__203fullscreen_on.style.visibility=(Number(me.__203fullscreen_on.style.opacity)>0||!me.__203fullscreen_on.style.opacity)?'inherit':'hidden';
					me.__203fullscreen_on.ggVisible=true;
				}
			}
		}
		me.__203fullscreen_on.logicBlock_visible();
		me.__203fullscreen_on.ggUpdatePosition=function (useTransition) {
		}
		me.__20bt_tela_cheia.appendChild(me.__203fullscreen_on);
		el=me.__203fullscreen_off=document.createElement('div');
		els=me.__203fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin__203fullscreen_off';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAYAAADC8hYbAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPQSURBVHgB7d2LUeNWFAbgIyaFeDtwB5utAKgAb2feCnA62FSAO7A6Ua5skxAGS8b2Sucm3zdzBxDMIJ/zWw/rFTGzruseynguY9f9Y3ec9hTchDqfUF788l1RTun/ZhlcRJ0HlBe86j7P0vGT1HlAd3iHXur34CzqPKI7bzVxyi44izoP6C5bVbxnFT2ixjrfxbTu43oPwZjq6jx1EG+xV2YPelx1dW5iQv3yPm6gKYKTaqzz1EtE+JAgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgksJvH03suq6/cKa/iqu/bm'+
			'ER/C/d6pKDo7aMbRmbpml+vP9l8+4f98F7juThc83KsBsH6Fdoy3gsbdy+Tvh71dxfC1u+vIQlIL/eooyXt9dO75csxyXhS1TCEnFYBUvEt76Vdv58DWJ/i4lFVEIQh1UWxLa088vdcZW8CJjHomTwvt9GvMXtKeAaqz6IbuHB3JZNZdsTe7YRh9XYU0dWSKEPYht1aYMxbdSl7YO4jbrUNr9zqK6nfRDXUZdNMGYdddnU9oH2/sPPYFRtPX3dWXmMOtQynxlU1dN9EI9nQXyP3FZvz9ZgWNU97c5/StGUdmV8DS7SVdLT5sTMr+Jw6G+uE2PbOOz5rcs75o/gaol6+uGJsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxrPprYdd1D+fJUxrKMRUyvLWNbxqZpmh/B1arqaZnZ'+
			'ZRm7LpddGcvgIl1tPS2/WHW5PQWf0lXU0+Y4w306XyK/b2Wx/jMYVVtPX4O4i3m2Gz6rLTP9JRhVW0/vygyvoo4Z7i3K/N4Hg2rs6V35prbGroIx1fW0D2Jte6T2oMdV19Om33WJypRtiiY4qcae3gUk0AexDZhX2wdxGzCvbR/EdcC8NrV9oL1nZ2VYZTsrhw+0jz88Bsxjn719EEsi++3E7wHTWh2z9+/zEY8Hyp8j+WraqnlYBavmNg4h/PN1wqkTY1dxOEw010mUgwRxWNIgtjFwYuykDb1VgQRxWI11dmSFFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFKYOYhvXa4MxbVyvjQlNHcRb3N7ELVLGVVfnqYO4juttgjHruN5/u87ddY9a2AVnUecR3eG5H5dyt9'+
			'gzqfMZusue/+E5K5+kzmcoL7i/m/zujML0f/M1uIg6n+n4rn1+V6zdcZpHWdxI9jr/BYbtGccDB1IqAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.3-FULLSCREEN_OFF";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : calc(50% - ((24px + 0px) / 2) - 1px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__203fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__203fullscreen_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_telacheia') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__203fullscreen_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__203fullscreen_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__203fullscreen_off.style.transition='';
				if (me.__203fullscreen_off.ggCurrentLogicStateVisible == 0) {
					me.__203fullscreen_off.style.visibility=(Number(me.__203fullscreen_off.style.opacity)>0||!me.__203fullscreen_off.style.opacity)?'inherit':'hidden';
					me.__203fullscreen_off.ggVisible=true;
				}
				else {
					me.__203fullscreen_off.style.visibility="hidden";
					me.__203fullscreen_off.ggVisible=false;
				}
			}
		}
		me.__203fullscreen_off.logicBlock_visible();
		me.__203fullscreen_off.ggUpdatePosition=function (useTransition) {
		}
		me.__20bt_tela_cheia.appendChild(me.__203fullscreen_off);
		me.divSkin.appendChild(me.__20bt_tela_cheia);
		el=me.__20bt_tela_cheia_mobile=document.createElement('div');
		el.ggId="2.0-BT_TELA_CHEIA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20bt_tela_cheia_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__20bt_tela_cheia_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__20bt_tela_cheia_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__20bt_tela_cheia_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__20bt_tela_cheia_mobile.style.transition='';
				if (me.__20bt_tela_cheia_mobile.ggCurrentLogicStateVisible == 0) {
					me.__20bt_tela_cheia_mobile.style.visibility="hidden";
					me.__20bt_tela_cheia_mobile.ggVisible=false;
				}
				else if (me.__20bt_tela_cheia_mobile.ggCurrentLogicStateVisible == 1) {
					me.__20bt_tela_cheia_mobile.style.visibility=(Number(me.__20bt_tela_cheia_mobile.style.opacity)>0||!me.__20bt_tela_cheia_mobile.style.opacity)?'inherit':'hidden';
					me.__20bt_tela_cheia_mobile.ggVisible=true;
				}
				else {
					me.__20bt_tela_cheia_mobile.style.visibility="hidden";
					me.__20bt_tela_cheia_mobile.ggVisible=false;
				}
			}
		}
		me.__20bt_tela_cheia_mobile.logicBlock_visible();
		me.__20bt_tela_cheia_mobile.onclick=function (e) {
			player.setVariableValue('var_telacheia', !player.getVariableValue('var_telacheia'));
			player.toggleFullscreen();
		}
		me.__20bt_tela_cheia_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__201fundo_mobile=document.createElement('div');
		el.ggId="2.0.1-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #9900ff;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__201fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__201fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__20bt_tela_cheia_mobile.appendChild(me.__201fundo_mobile);
		el=me.__202texto_mobile=document.createElement('div');
		els=me.__202texto_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.2-TEXTO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 22px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__202texto_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__202texto_mobile.ggUpdateText();
		el.appendChild(els);
		me.__202texto_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__202texto_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__20bt_tela_cheia_mobile.appendChild(me.__202texto_mobile);
		el=me.__203fullscreen_on_mobile=document.createElement('div');
		els=me.__203fullscreen_on_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__203fullscreen_on_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOWSURBVHgB7d3hTeNAEIbhz1RwJYQOQgVnKoAOEJUBHUAFCRUkHcQdHB3s7cQOyg9OB5c9Z4Z5H2kVFCXRaj5b2ay9S6cPlFL6+nBXmz0uNL/t1F66rntWQKFqWDu7qG1VfNnVtlAQJUgNu6MOL+vDqrYf8uettut65G7lWKQa7oOfjoaNfHb4wDp+VTs+yKFoNbyYnvB6lB6z/j3Ir1A1vKhH6q3OM/j4F30ZB02uRKyhnfE3iuVO/oSroQW/VCy9/AlXw87G+gqmDk46ORKxhhdCShGD9/hbflAwBN/GWsFEDN7j3P2Tgok2uBvquO5SDtUy2gROryAinf'+
			'H7uWb5da+xjyFECf5wgWGQU1Pf7MAMEX6E4NcaLyy4vjJnpj5eKcAo3+t3/KAx8MdazFcFVMtq07g2h7+Uw5m9ZsF7m037rlrlxcxdUgSfFMEnRfBJEXxSBJ8UwSdF8EkRfFIEnxTBJ0XwSRF8UgSfFMEnRfBJEXxSBJ+UBT/odO5vhPxGBp1ua8GvdTqCn89ap9sH32L5T8gtyYJql1c5bXuunTCrZnmVcW+2X+Xr7D0LYVZN86pPLMvXPsxeG20LkG+jaV5lPJJ2n/iQVeFMP7vmedUX3dT2UNvm6M276bmfgivkBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIr5TSTxvn7I4209lMz90Krpyc17R91qr83a6w3dnZNcmrsMFhKE3yKmxpGkqzvMrndkf8k5UwqyZ51T9uy+l6YRat8rL96m90ujthLk3ysuBb'+
			'DNB6YS5N8ursvFcDXSX8d63y4r9QJUXwSRF8UgSfFMEnRfBJEXxSBJ8UwSdF8EkRfFIEnxTBJ0XwSRF8UgSfFMEnRfBJNbv1qrHt1F66rntWQNOdx3YTqj0u5IzX4I8NtV3XA2BQAGVcsPAg5zegRgjevGkMfyvHyrhEyRYs/JBzUYI3Fv6V1zN/OtM3ChC6iTS4s4I+yK8QZ/pBtFF973G5VhnXoC8USMSfcx6Xa7VY1jSriMH38ifcPgGRBnfvvC3XilhDZu6SsuAHxeLxt/ygWLYW/FqxeAx+rVj2wT8pFo9z9+FquB8klXFflF7+DXVcdymHotXwMLi71zgl6tl+vl5+harhPvhp/vtafjt+uEgzyKloNXz/OTdd+bqSvxHqWuPFGddX5kykGn44EVK/r2wK0uaflzrPrNSgsbOPtbOvCsh7DX8Dv9So9SQb32'+
			'oAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.3-FULLSCREEN_ON_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__203fullscreen_on_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__203fullscreen_on_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_telacheia') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__203fullscreen_on_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__203fullscreen_on_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__203fullscreen_on_mobile.style.transition='';
				if (me.__203fullscreen_on_mobile.ggCurrentLogicStateVisible == 0) {
					me.__203fullscreen_on_mobile.style.visibility="hidden";
					me.__203fullscreen_on_mobile.ggVisible=false;
				}
				else {
					me.__203fullscreen_on_mobile.style.visibility=(Number(me.__203fullscreen_on_mobile.style.opacity)>0||!me.__203fullscreen_on_mobile.style.opacity)?'inherit':'hidden';
					me.__203fullscreen_on_mobile.ggVisible=true;
				}
			}
		}
		me.__203fullscreen_on_mobile.logicBlock_visible();
		me.__203fullscreen_on_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__20bt_tela_cheia_mobile.appendChild(me.__203fullscreen_on_mobile);
		el=me.__203fullscreen_off_mobile=document.createElement('div');
		els=me.__203fullscreen_off_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__203fullscreen_off_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAYAAADC8hYbAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPQSURBVHgB7d2LUeNWFAbgIyaFeDtwB5utAKgAb2feCnA62FSAO7A6Ua5skxAGS8b2Sucm3zdzBxDMIJ/zWw/rFTGzruseynguY9f9Y3ec9hTchDqfUF788l1RTun/ZhlcRJ0HlBe86j7P0vGT1HlAd3iHXur34CzqPKI7bzVxyi44izoP6C5bVbxnFT2ixjrfxbTu43oPwZjq6jx1EG+xV2YPelx1dW5iQv3yPm6gKYKTaqzz1EtE+JAgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgkoIgksJvH03suq6/cKa/iqu/bm'+
			'ER/C/d6pKDo7aMbRmbpml+vP9l8+4f98F7juThc83KsBsH6Fdoy3gsbdy+Tvh71dxfC1u+vIQlIL/eooyXt9dO75csxyXhS1TCEnFYBUvEt76Vdv58DWJ/i4lFVEIQh1UWxLa088vdcZW8CJjHomTwvt9GvMXtKeAaqz6IbuHB3JZNZdsTe7YRh9XYU0dWSKEPYht1aYMxbdSl7YO4jbrUNr9zqK6nfRDXUZdNMGYdddnU9oH2/sPPYFRtPX3dWXmMOtQynxlU1dN9EI9nQXyP3FZvz9ZgWNU97c5/StGUdmV8DS7SVdLT5sTMr+Jw6G+uE2PbOOz5rcs75o/gaol6+uGJsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxrPprYdd1D+fJUxrKMRUyvLWNbxqZpmh/B1arqaZnZ'+
			'ZRm7LpddGcvgIl1tPS2/WHW5PQWf0lXU0+Y4w306XyK/b2Wx/jMYVVtPX4O4i3m2Gz6rLTP9JRhVW0/vygyvoo4Z7i3K/N4Hg2rs6V35prbGroIx1fW0D2Jte6T2oMdV19Om33WJypRtiiY4qcae3gUk0AexDZhX2wdxGzCvbR/EdcC8NrV9oL1nZ2VYZTsrhw+0jz88Bsxjn719EEsi++3E7wHTWh2z9+/zEY8Hyp8j+WraqnlYBavmNg4h/PN1wqkTY1dxOEw010mUgwRxWNIgtjFwYuykDb1VgQRxWI11dmSFFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFASRFKYOYhvXa4MxbVyvjQlNHcRb3N7ELVLGVVfnqYO4juttgjHruN5/u87ddY9a2AVnUecR3eG5H5dyt9'+
			'gzqfMZusue/+E5K5+kzmcoL7i/m/zujML0f/M1uIg6n+n4rn1+V6zdcZpHWdxI9jr/BYbtGccDB1IqAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.3-FULLSCREEN_OFF_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__203fullscreen_off_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__203fullscreen_off_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_telacheia') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__203fullscreen_off_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__203fullscreen_off_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__203fullscreen_off_mobile.style.transition='';
				if (me.__203fullscreen_off_mobile.ggCurrentLogicStateVisible == 0) {
					me.__203fullscreen_off_mobile.style.visibility=(Number(me.__203fullscreen_off_mobile.style.opacity)>0||!me.__203fullscreen_off_mobile.style.opacity)?'inherit':'hidden';
					me.__203fullscreen_off_mobile.ggVisible=true;
				}
				else {
					me.__203fullscreen_off_mobile.style.visibility="hidden";
					me.__203fullscreen_off_mobile.ggVisible=false;
				}
			}
		}
		me.__203fullscreen_off_mobile.logicBlock_visible();
		me.__203fullscreen_off_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__20bt_tela_cheia_mobile.appendChild(me.__203fullscreen_off_mobile);
		me.divSkin.appendChild(me.__20bt_tela_cheia_mobile);
		el=me.__60bt_ajuda=document.createElement('div');
		el.ggId="6.0-BT_AJUDA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 246px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60bt_ajuda.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__60bt_ajuda.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 2))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__60bt_ajuda.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60bt_ajuda.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60bt_ajuda.style.transition='';
				if (me.__60bt_ajuda.ggCurrentLogicStateVisible == 0) {
					me.__60bt_ajuda.style.visibility="hidden";
					me.__60bt_ajuda.ggVisible=false;
				}
				else if (me.__60bt_ajuda.ggCurrentLogicStateVisible == 1) {
					me.__60bt_ajuda.style.visibility="hidden";
					me.__60bt_ajuda.ggVisible=false;
				}
				else {
					me.__60bt_ajuda.style.visibility=(Number(me.__60bt_ajuda.style.opacity)>0||!me.__60bt_ajuda.style.opacity)?'inherit':'hidden';
					me.__60bt_ajuda.ggVisible=true;
				}
			}
		}
		me.__60bt_ajuda.logicBlock_visible();
		me.__60bt_ajuda.onclick=function (e) {
			player.setVariableValue('var_ajuda', true);
		}
		me.__60bt_ajuda.ggUpdatePosition=function (useTransition) {
		}
		el=me.__601fundo=document.createElement('div');
		el.ggId="6.0.1-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #9900ff;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__601fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__601fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__60bt_ajuda.appendChild(me.__601fundo);
		el=me.__603fullscreen_on=document.createElement('div');
		els=me.__603fullscreen_on__img=document.createElement('img');
		els.className='ggskin ggskin__603fullscreen_on';
		hs='data:image/png;base64,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'+
			'kFMPkrrsrgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="6.0.3-FULLSCREEN_ON";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__603fullscreen_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__603fullscreen_on.ggUpdatePosition=function (useTransition) {
		}
		me.__60bt_ajuda.appendChild(me.__603fullscreen_on);
		me.divSkin.appendChild(me.__60bt_ajuda);
		el=me.__60bt_ajuda_mobile=document.createElement('div');
		el.ggId="6.0-BT_AJUDA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60bt_ajuda_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__60bt_ajuda_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getOS() == 4))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__60bt_ajuda_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__60bt_ajuda_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__60bt_ajuda_mobile.style.transition='right 0s, top 0s';
				if (me.__60bt_ajuda_mobile.ggCurrentLogicStatePosition == 0) {
					me.__60bt_ajuda_mobile.style.right='15px';
					me.__60bt_ajuda_mobile.style.top='15px';
				}
				else {
					me.__60bt_ajuda_mobile.style.right='15px';
					me.__60bt_ajuda_mobile.style.top='60px';
				}
			}
		}
		me.__60bt_ajuda_mobile.logicBlock_position();
		me.__60bt_ajuda_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__60bt_ajuda_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60bt_ajuda_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60bt_ajuda_mobile.style.transition='right 0s, top 0s';
				if (me.__60bt_ajuda_mobile.ggCurrentLogicStateVisible == 0) {
					me.__60bt_ajuda_mobile.style.visibility=(Number(me.__60bt_ajuda_mobile.style.opacity)>0||!me.__60bt_ajuda_mobile.style.opacity)?'inherit':'hidden';
					me.__60bt_ajuda_mobile.ggVisible=true;
				}
				else {
					me.__60bt_ajuda_mobile.style.visibility="hidden";
					me.__60bt_ajuda_mobile.ggVisible=false;
				}
			}
		}
		me.__60bt_ajuda_mobile.logicBlock_visible();
		me.__60bt_ajuda_mobile.onclick=function (e) {
			player.setVariableValue('var_ajuda', true);
			player.setVariableValue('var_carrousel', Number("0.00"));
		}
		me.__60bt_ajuda_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__601fundo_mobile=document.createElement('div');
		el.ggId="6.0.1-FUNDO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #9900ff;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__601fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__601fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__60bt_ajuda_mobile.appendChild(me.__601fundo_mobile);
		el=me.__603ajuda_mobile=document.createElement('div');
		els=me.__603ajuda_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__603ajuda_mobile';
		hs='data:image/png;base64,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'+
			'kFMPkrrsrgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="6.0.3-AJUDA_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__603ajuda_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__603ajuda_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__60bt_ajuda_mobile.appendChild(me.__603ajuda_mobile);
		me.divSkin.appendChild(me.__60bt_ajuda_mobile);
		el=me._fonts=document.createElement('div');
		el.ggId="Fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._fonts);
		el=me.__30ct_localizacao=document.createElement('div');
		el.ggId="3.0-CT_LOCALIZACAO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 45px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30ct_localizacao.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__30ct_localizacao.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30ct_localizacao.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30ct_localizacao.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30ct_localizacao.style.transition='opacity 1000ms ease 0ms';
				if (me.__30ct_localizacao.ggCurrentLogicStateVisible == 0) {
					me.__30ct_localizacao.style.visibility="hidden";
					me.__30ct_localizacao.ggVisible=false;
				}
				else {
					me.__30ct_localizacao.style.visibility=(Number(me.__30ct_localizacao.style.opacity)>0||!me.__30ct_localizacao.style.opacity)?'inherit':'hidden';
					me.__30ct_localizacao.ggVisible=true;
				}
			}
		}
		me.__30ct_localizacao.logicBlock_visible();
		me.__30ct_localizacao.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__30ct_localizacao.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__30ct_localizacao.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__30ct_localizacao.style.transition='opacity 1000ms ease 0ms';
				if (me.__30ct_localizacao.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__30ct_localizacao.style.opacity == 0.0) { me.__30ct_localizacao.style.visibility="hidden"; } }, 1005);
					me.__30ct_localizacao.style.opacity=0;
				}
				else {
					me.__30ct_localizacao.style.visibility=me.__30ct_localizacao.ggVisible?'inherit':'hidden';
					me.__30ct_localizacao.style.opacity=1;
				}
			}
		}
		me.__30ct_localizacao.logicBlock_alpha();
		me.__30ct_localizacao.onclick=function (e) {
			player.setVariableValue('var_loc', !player.getVariableValue('var_loc'));
		}
		me.__30ct_localizacao.onmouseenter=function (e) {
			me.elementMouseOver['_30ct_localizacao']=true;
			me.__301bt_localizacao.logicBlock_backgroundcolor();
		}
		me.__30ct_localizacao.onmouseleave=function (e) {
			me.elementMouseOver['_30ct_localizacao']=false;
			me.__301bt_localizacao.logicBlock_backgroundcolor();
		}
		me.__30ct_localizacao.ggUpdatePosition=function (useTransition) {
		}
		el=me.__301bt_localizacao=document.createElement('div');
		els=me.__301bt_localizacao__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="3.0.1-BT_LOCALIZACAO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px 0px 35px 0px;';
		hs+='font-size: 23px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 15px 26px 15px 63px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__301bt_localizacao.ggUpdateText=function() {
			var params = [];
			var hs = player._("UNIDADE - CIANORTE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__301bt_localizacao.ggUpdateText();
		el.appendChild(els);
		me.__301bt_localizacao.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__301bt_localizacao.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_30ct_localizacao'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__301bt_localizacao.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__301bt_localizacao.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__301bt_localizacao__text.style.transition='background-color 500ms ease 0ms';
				if (me.__301bt_localizacao.ggCurrentLogicStateBackgroundColor == 0) {
					me.__301bt_localizacao__text.style.backgroundColor="rgba(153,0,255,1)";
				}
				else {
					me.__301bt_localizacao__text.style.backgroundColor="rgba(55,55,55,1)";
				}
			}
		}
		me.__301bt_localizacao.logicBlock_backgroundcolor();
		me.__301bt_localizacao.ggUpdatePosition=function (useTransition) {
		}
		me.__30ct_localizacao.appendChild(me.__301bt_localizacao);
		el=me.__302ic_loc=document.createElement('div');
		els=me.__302ic_loc__img=document.createElement('img');
		els.className='ggskin ggskin__302ic_loc';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAC0CAYAAABSUJhaAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAp2SURBVHgB7Z3tcdw2EIZfnDP5ff6fjOkKIlcQuYIkFUSpIHYFliuwXYHPFUSuwJcKLFdguIKoAI8YLAieqBPvjh8AuQvuM8PR5+ioe7mL3QWwMMiM8isK9+EMKzxxHwuUWPuP1UWsw7WPddfN7jL+a4tbfKGvzVNcIyMMBONEJgHPnci/OoHPAH+tkQZ6IK7dO3btHoZ/3edb9zDcQCjihHdin4PENk5s+M/nhB6ErXsQPrqHYAtBiBDei73Cb86qL5DOosdi3bV19/hBwkPAVvjgxl+4O/wNlQuXhHX3fUlDgnsILBjCTngnOAVmfzK37j5s3P/ymtsDwE'+
			'Z4784NXmH+cTsVrB6A2YX36ZfBe+Qr+D4sHoDZhG+M4a+wRAzeuhjg3VwPwCzCO9Ev3Cu/QR5j+Bh8EGie4AMmZlLhF+jWuzK5+19hIoKVf4aK3ga9N5/Kby6bmYjkFh/G8kv3Sn9DOU019r9OXQ5OKnxw7Z9wN0GidMM61/88petP5upDXk6uvYDSF28wYV4iCUmEdzf8Ilj60qP2MdTiv0ACogvvbvQypGpKDNx76d/T6H82IkH0ZRZkUlOle5eIRDThVfQJiCh+FOFV9AmJJP5o4VX0GYgg/ijhVfQZKfHSif8WAxksfMjTP0GZj6rIs8UABgmvFTk23Djxnw2p8PUW3tfetSLHCRvE71XbH1LAuYSKzonCqdg7zupl8WFq9T0Ufhhc9FnQ0Vl4HdfZ02u87+7qq7StgMKVdR9v3El47+LhL4U3511X8Zx09eri'+
			'xUEu/+mpKL+LxdN8cAFFCmun6sllbkctPlj7VyjyqKzeHvrxcYvXOrxcTgR6By1erT0DjtTyD1u8Wrt8jmjYavFq7RlRFXUe9O9pt3i19nxYtef1DyxerT07WvP6Nos/h5ITrXn9Q4u33toL5Ac98RZVp6q6nx2xdhZRoNr8kbJd2pxcmwLPmt+4J3yGy6m27v+5Ck2IOjUoDD14qG/e78jJ++2ldj/c+6GZbptuYjZ4hI352Tci7EV4QOh6F+IdCnQvIJ2V7x62rb+8b/Hy3fxVWH1qEZFMHoAbU+Bx/cVOeOFu3joLvxhi4X0IK5DkrktouPu7qL5yBRK59v9QYtEJ96ZRy5LngNCGxivfBjZ8WlOKDGQ2qRsI7EOvZShCLqdvWDSahsbe1Ycl0/9BFhtT4C/MiHvfNuIC4hKPqZhTW/w5ZEF56ayiB2iRiiy3/6'+
			'hy95XwDd8vANpA8AcY4Mug1b1YSCG4+1X4Qk53aGoIyKghsL+XkoX36UbQunb1UoTfzNEF8hQhRbqCDLzWxpcoq71w/DmxjmxORM1q/oiCLF7KpMSGq+hEuLcNJPAdZyvn7H+BBEq8Bnek5PZlZfEF+LPlbO01Yazfgj9O+FKA8EZM4CTjXkusZYzxt+nr8NGQca8igjtRpzyGe+V+EKEI4SXOhFkwR0Jwx9162uD+sK4nO6FiMEZQHbzGsH9YBQgv0+LZ37ME4ZUESBBe4jp39vdMwvN2S6VA4fkXxW74Cy/vJGmCfW1EgqsvIA/uD6sX3oI3a79mQAjhXkVYvAV3JK0JlHGvdiWiQFJtYJSBhHs1JPwtvoE/5ykP34uFX34lY6m6JVcvYxJEwsYFKS1kVrBG1C4aXWwZhxKPV6E3ioUEOJ9gKadh1E1zC5WUOe/f'+
			'OY71wrp7e60r4SVNfRq8D0EUCxpNE2RgmvvjJa1pg3+j//GxCQfcvUBSdXF1vzHCFrI44zDe+23S0uYSvuMLffDCiwrw7rgo7TwHI5G3Ebk3nraXh0aHd5M0ktau30Hif55yzN+d2CGzQ9guiL8TXtY434Tc/qeuZ7GModEgSuJUMam9M+5m1yuJ7VD22YSTli0iEqycYgo5cwZthDYo9OnO4sM3tpANtSP7SmN/DPdPFu7jiKoiJ1v0av/hbtHNfmfLK6Hdr/ahB4DG/622NA3sxXD7vWzl1Jv7Q097tb2pKlg1mxjXDYwL5NnE+MGBBUvqXr1krCnwtPmNh2vujJCuDkp3WlL1h8LLTeuUQ9w+7NRh2n5P3X1WWLPn5olDhxFtoOSBwdv2b7eQSTFHIQ6sWmq1+EyKOcqRplHHTpqUOGmjNDkyZJtDPwjunoK8PA'+
			'sa+XPvKJJ9Dlq8d/ca5EnmqMc+vmnyFh+hyOREJ9Cjwgvq1KjcZ3tqavr0NulVex6oMKbDEG3QAVfJo5xegzwZWNNSqdunW2MEo1YvBoPLLr/WTfhbvIPMtmPLo+MkWyfhQ2qnVs+fzoc5dBrjicxX5+RBj93EnZsfiTp6Y5l0tnaiX9cricdqLoWeR7f0El4LOmzpZe1E/z53Eg4FWhoDNOktvFo9O3pbOzGss6VaPR8GajFIeLV6NgyydmJ4L1u1+vkZocFg4YPVb6DMxWBrJzpX7trQat6MjOz5N6ptuX/hjrNBSlRGWTsxyuIJXZQ5OdZZ+/Oxwo8+qEBn7ibGxDlOfbTFE8HqP0P326XGmg6ra7oQ5WgSb/Wa3qUnYjwVxeJrSus7Qp1DSYE1kaydiHsYkVp9On6I23wpqvChqKN77uKzMT9VrUhjEdXVE6Go'+
			'Q4GepndxuAmNiywiEtfVY1fU0fQuFu69jC169WcToOldNKyJGNA1iW7xREjv/oIyjoTl8CTCExrojWZjnqRb3JrE1ddooDeYJAFdk2QWT/gb19y+P87FpxS9eokJoMMEILXH+/RYkyiga5LU4neUeAmlG27KFRMwifA+0NPc/jSJcvb2l5oIze1PYkNAN8l29GlcPTS3P0kV0E3Wg2Ay4Ql1+QdJmrO3MZmrr1GX/4Aoa+j6MqnFE8Hla5RfM0HO3sbkwhPuH6VSrpZzZ3DxNZO7+hpdlj2Pi6+ZxeKJ4PL/wFKZycXXzCY8seAofzYXXzObq69ZYJQ/q4uvmdXiicUVdh7hYm7RidmFJxbj8mlc/5nH8W6zu/qaBbh8ayaYbu0KC4snso/yJ5pu7Qob4Ql/6G2OVb2ZU7c22Lj6Jpntwduagpe1E6wsfkcV5efQJt'+
			'1yzVhYCh8WacpP8Ri6+BqeFo8wkSM5xaNlVE/4Nn1mOcbXhBSPxntpK3StYZS6tcHW4olGiidpvL/hlrq1wVp4QtymDMbjehP2whPujXwrYryvxvV3EADrMb6JgJLupMujxyJGeILxJszkmxxjI8LV17Ad74WM601ECU+wG+8FjetNRLn6Gkb5vTXM8/VDiLN4gkl+byXk64cQKTwxez3fTR9LG9ebiBWeCPX8S0xNFcyJ3hAicozfZ+L5+ytTyF8pJNrid1TjvUV6bC4rhLKweMJF+mch0k9V3BFXpDlGHhaPCdbrCSzSHCMb4QknzCZJcYdEF1ikOUY2rr5J5GAvi2Bun6wsfke8YC+bYG6fLC2eiDCTl1Uwt0+eFo9dZW+4i3ZVwVxFJ7IVnvCbMYe46gwqc6fI1tU3Kb/hjXsAXnT65WqaNfvmTIsQnugY6V+b'+
			'As+wALJ29fc4HemPiwmEsRjhwxw+zZ/blh+zaE8yJYtx9TWtNf0qbbuGkjdO/As35pf++oY/oSwHJ/grurBQ/gdfB1+iC923+gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.2-IC_LOC";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__302ic_loc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__302ic_loc.ggUpdatePosition=function (useTransition) {
		}
		me.__30ct_localizacao.appendChild(me.__302ic_loc);
		me.divSkin.appendChild(me.__30ct_localizacao);
		el=me.__30ct_localizacao_mobile=document.createElement('div');
		el.ggId="3.0-CT_LOCALIZACAO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 18px;';
		hs+='height : 33px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30ct_localizacao_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__30ct_localizacao_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30ct_localizacao_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30ct_localizacao_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30ct_localizacao_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__30ct_localizacao_mobile.ggCurrentLogicStateVisible == 0) {
					me.__30ct_localizacao_mobile.style.visibility=(Number(me.__30ct_localizacao_mobile.style.opacity)>0||!me.__30ct_localizacao_mobile.style.opacity)?'inherit':'hidden';
					me.__30ct_localizacao_mobile.ggVisible=true;
				}
				else {
					me.__30ct_localizacao_mobile.style.visibility="hidden";
					me.__30ct_localizacao_mobile.ggVisible=false;
				}
			}
		}
		me.__30ct_localizacao_mobile.logicBlock_visible();
		me.__30ct_localizacao_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__30ct_localizacao_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__30ct_localizacao_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__30ct_localizacao_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__30ct_localizacao_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__30ct_localizacao_mobile.style.opacity == 0.0) { me.__30ct_localizacao_mobile.style.visibility="hidden"; } }, 1005);
					me.__30ct_localizacao_mobile.style.opacity=0;
				}
				else {
					me.__30ct_localizacao_mobile.style.visibility=me.__30ct_localizacao_mobile.ggVisible?'inherit':'hidden';
					me.__30ct_localizacao_mobile.style.opacity=1;
				}
			}
		}
		me.__30ct_localizacao_mobile.logicBlock_alpha();
		me.__30ct_localizacao_mobile.onclick=function (e) {
			player.setVariableValue('var_loc', !player.getVariableValue('var_loc'));
		}
		me.__30ct_localizacao_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_30ct_localizacao_mobile']=true;
			me.__301bt_localizacao_mobile.logicBlock_backgroundcolor();
		}
		me.__30ct_localizacao_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_30ct_localizacao_mobile']=false;
			me.__301bt_localizacao_mobile.logicBlock_backgroundcolor();
		}
		me.__30ct_localizacao_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__301bt_localizacao_mobile=document.createElement('div');
		els=me.__301bt_localizacao_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="3.0.1-BT_LOCALIZACAO_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 0px 20px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 12px 23px 12px 35px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__301bt_localizacao_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("UNIDADE - CIANORTE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__301bt_localizacao_mobile.ggUpdateText();
		el.appendChild(els);
		me.__301bt_localizacao_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__301bt_localizacao_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_30ct_localizacao_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__301bt_localizacao_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__301bt_localizacao_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__301bt_localizacao_mobile.style.transition='background-color 500ms ease 0ms';
				if (me.__301bt_localizacao_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__301bt_localizacao_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
				else {
					me.__301bt_localizacao_mobile.style.backgroundColor="rgba(55,55,55,1)";
				}
			}
		}
		me.__301bt_localizacao_mobile.logicBlock_backgroundcolor();
		me.__301bt_localizacao_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__30ct_localizacao_mobile.appendChild(me.__301bt_localizacao_mobile);
		el=me.__302ic_loc_mobile=document.createElement('div');
		els=me.__302ic_loc_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__302ic_loc_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.2-IC_LOC_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__302ic_loc_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__302ic_loc_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__30ct_localizacao_mobile.appendChild(me.__302ic_loc_mobile);
		me.divSkin.appendChild(me.__30ct_localizacao_mobile);
		el=me.__30ct_sociais=document.createElement('div');
		el.ggId="3.0-CT_SOCIAIS";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 82px;';
		hs+='height : 50px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30ct_sociais.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__30ct_sociais.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30ct_sociais.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30ct_sociais.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30ct_sociais.style.transition='opacity 1000ms ease 0ms';
				if (me.__30ct_sociais.ggCurrentLogicStateVisible == 0) {
					me.__30ct_sociais.style.visibility="hidden";
					me.__30ct_sociais.ggVisible=false;
				}
				else {
					me.__30ct_sociais.style.visibility=(Number(me.__30ct_sociais.style.opacity)>0||!me.__30ct_sociais.style.opacity)?'inherit':'hidden';
					me.__30ct_sociais.ggVisible=true;
				}
			}
		}
		me.__30ct_sociais.logicBlock_visible();
		me.__30ct_sociais.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__30ct_sociais.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__30ct_sociais.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__30ct_sociais.style.transition='opacity 1000ms ease 0ms';
				if (me.__30ct_sociais.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__30ct_sociais.style.opacity == 0.0) { me.__30ct_sociais.style.visibility="hidden"; } }, 1005);
					me.__30ct_sociais.style.opacity=0;
				}
				else {
					me.__30ct_sociais.style.visibility=me.__30ct_sociais.ggVisible?'inherit':'hidden';
					me.__30ct_sociais.style.opacity=1;
				}
			}
		}
		me.__30ct_sociais.logicBlock_alpha();
		me.__30ct_sociais.ggUpdatePosition=function (useTransition) {
		}
		el=me.__301face=document.createElement('div');
		el.ggId="3.0.1-FACE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__301face.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__301face.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_301face'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__301face.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__301face.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__301face.style.transition='background-color 500ms ease 0ms';
				if (me.__301face.ggCurrentLogicStateBackgroundColor == 0) {
					me.__301face.style.backgroundColor="rgba(153,0,255,1)";
				}
				else {
					me.__301face.style.backgroundColor="rgba(55,55,55,1)";
				}
			}
		}
		me.__301face.logicBlock_backgroundcolor();
		me.__301face.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/forceoneacademia","_blank");
		}
		me.__301face.onmouseenter=function (e) {
			me.elementMouseOver['_301face']=true;
			me.__3011.logicBlock_size();
			me.__301face.logicBlock_backgroundcolor();
		}
		me.__301face.onmouseleave=function (e) {
			me.elementMouseOver['_301face']=false;
			me.__3011.logicBlock_size();
			me.__301face.logicBlock_backgroundcolor();
		}
		me.__301face.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3011=document.createElement('div');
		els=me.__3011__img=document.createElement('img');
		els.className='ggskin ggskin__3011';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAACrCAYAAADvjSvEAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPjSURBVHgB7d3hbdNAGMbx5xIG4DMSwmzQDegGsEHLBHSDthPQDSgTMAKwQZmg7gYdABHuHDtN0lZIpXfP2f7/JNpEfPvr1Wu7sZWgGVhd62X8daiF3milg/g6vW/638O/ki5faIL60B8U9E4p+Dpy/A9VYzLhu9gLHcW4H7SOXbXRh4/BD+NkHylN+Kr4yniy0Ybvg59qBNP9kNGFH3vwwWjCdzs86HN8eawJWGgEYvSTGP1aE4meVD3x/ZR/kbozlUmpNnyMfhCjf9NwDj4xVa6aGP04Rv+uiUZPqgsfo5/162U05+RPUVX4PvqpZqCa8HOKnlQRfm7RE3'+
			'v4OUZPrOG3Lv9nxxY+Rm/6s5dZ8k38xM/T/8USvtvrM46eFA/fr5hZ7vVt5Sd+vWJmr2j47m8wM18xg2LhWTG7Sk78sZj2jSLh+2k/EjZKTfyhmPYdZcKz2+/JHj6umfR5aSPsyD/x7PYHZQ2/uXkU9+SeeKI/Im/4oPfCg3JP/KHwoGzhuxuSJn6Lxv/IN/GL7mkMPCLfLXyr6tfMbTwGXcQB+aHf+hXexvcF5bx3slGtUvA/Og9N2djb5hc+6Di80VeZZdnx/YVTfQfWoLMaoie5Dq4Hqs9VjH6uSoziiZBnsdSJKpIrfKO6tOG1fqoic5n4K1VmLuFtp42Pmc+OrwzhTQhvQngTwpsQ3oTwJoQ3IbwJ4U0Ib0J4E8KbEN6E8CaENyG8CeFNwvab1Y0+afUsn8bXdl/NrWr6+C/oYv9OskbTfF6puhusdlfNiofE'+
			'ighq93c897OXEHS7H74R8luq3T24tjV9mcN0hUZhM/H9Hb7Irzu72l41jVBCm35sh2fiy2DiTdr04y58+nIq5BdYNS57q4ar1jKYeJPAwdVjuZ74zZUrV61lhGbdvJt4rlqL2XwmMKyaRiihHV4M4Zn4Mph4k3Z4seh/ctVaQmDVuOytGq5ay2DiTQIHV4/l3cR3V1FctZYRmru/FCy4ai1m5062tGoaoYR2+00Kz8SXwcSbtNtvFly1FhJYNS57q4ar1jKYeJPAwdVjuTvxwxMhrZ4Xj+LsCa90s/NeGXRfpljXtxNfhkYfVRGe+jMhvAnhTQhvQngTwpsQ3oTwJoQ3IbwJ4U0Ib0J4E8KbEN6E8CaENyG8CeFNCG9CeBPCmxDehPAmhDchvAnhTQhvQngTwpsQ3oTwJoQ3IbwJ4U0Ib0J4E8KbEN6E8CaENyG8Ce'+
			'FNCG9CeBPCmxDehPAmhDchvAnhTQhvQngTwpsQ3oTwJoQ3IbwJ4U0Ib0J4E8KbEN6E8CaENyG8CeFNCG9CeBPCmxDe5C/GF6S4rCASTAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.1.1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3011.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3011.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_301face'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3011.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3011.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3011.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__3011.ggCurrentLogicStateSize == 0) {
					me.__3011.style.width='18px';
					me.__3011.style.height='32px';
					me.__3011.style.left = 'calc(50% - (18px / 2))';
					me.__3011.style.top = 'calc(50% - (32px / 2))';
					setTimeout(function() {skin.updateSize(me.__3011);}, 550);
				}
				else {
					me.__3011.style.width='13px';
					me.__3011.style.height='23px';
					me.__3011.style.left = 'calc(50% - (13px / 2))';
					me.__3011.style.top = 'calc(50% - (23px / 2))';
					setTimeout(function() {skin.updateSize(me.__3011);}, 550);
				}
			}
		}
		me.__3011.logicBlock_size();
		me.__3011.ggUpdatePosition=function (useTransition) {
		}
		me.__301face.appendChild(me.__3011);
		me.__30ct_sociais.appendChild(me.__301face);
		el=me.__302insta=document.createElement('div');
		el.ggId="3.0.2-INSTA";
		el.ggDx=-58;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) - 58px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__302insta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__302insta.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_302insta'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__302insta.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__302insta.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__302insta.style.transition='background-color 500ms ease 0ms';
				if (me.__302insta.ggCurrentLogicStateBackgroundColor == 0) {
					me.__302insta.style.backgroundColor="rgba(153,0,255,1)";
				}
				else {
					me.__302insta.style.backgroundColor="rgba(55,55,55,1)";
				}
			}
		}
		me.__302insta.logicBlock_backgroundcolor();
		me.__302insta.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/forceoneacademia","_blank");
		}
		me.__302insta.onmouseenter=function (e) {
			me.elementMouseOver['_302insta']=true;
			me.__3021.logicBlock_size();
			me.__302insta.logicBlock_backgroundcolor();
		}
		me.__302insta.onmouseleave=function (e) {
			me.elementMouseOver['_302insta']=false;
			me.__3021.logicBlock_size();
			me.__302insta.logicBlock_backgroundcolor();
		}
		me.__302insta.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3021=document.createElement('div');
		els=me.__3021__img=document.createElement('img');
		els.className='ggskin ggskin__3021';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.2.1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3021.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3021.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_302insta'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3021.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3021.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3021.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__3021.ggCurrentLogicStateSize == 0) {
					me.__3021.style.width='28px';
					me.__3021.style.height='28px';
					me.__3021.style.left = 'calc(50% - (28px / 2))';
					me.__3021.style.top = 'calc(50% - (28px / 2))';
					setTimeout(function() {skin.updateSize(me.__3021);}, 550);
				}
				else {
					me.__3021.style.width='22px';
					me.__3021.style.height='22px';
					me.__3021.style.left = 'calc(50% - (22px / 2))';
					me.__3021.style.top = 'calc(50% - (22px / 2))';
					setTimeout(function() {skin.updateSize(me.__3021);}, 550);
				}
			}
		}
		me.__3021.logicBlock_size();
		me.__3021.ggUpdatePosition=function (useTransition) {
		}
		me.__302insta.appendChild(me.__3021);
		me.__30ct_sociais.appendChild(me.__302insta);
		el=me.__303mail=document.createElement('div');
		el.ggId="3.0.3-MAIL";
		el.ggDx=58;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 58px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__303mail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__303mail.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_303mail'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__303mail.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__303mail.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__303mail.style.transition='background-color 500ms ease 0ms';
				if (me.__303mail.ggCurrentLogicStateBackgroundColor == 0) {
					me.__303mail.style.backgroundColor="rgba(153,0,255,1)";
				}
				else {
					me.__303mail.style.backgroundColor="rgba(55,55,55,1)";
				}
			}
		}
		me.__303mail.logicBlock_backgroundcolor();
		me.__303mail.onclick=function (e) {
			player.openUrl("mailto:sac@forceoneacademia.com.br","_blank");
		}
		me.__303mail.onmouseenter=function (e) {
			me.elementMouseOver['_303mail']=true;
			me.__3031.logicBlock_size();
			me.__303mail.logicBlock_backgroundcolor();
		}
		me.__303mail.onmouseleave=function (e) {
			me.elementMouseOver['_303mail']=false;
			me.__3031.logicBlock_size();
			me.__303mail.logicBlock_backgroundcolor();
		}
		me.__303mail.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3031=document.createElement('div');
		els=me.__3031__img=document.createElement('img');
		els.className='ggskin ggskin__3031';
		hs='data:image/png;base64,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'+
			'6D/wGdUFOJIxFzjQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.3.1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3031.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3031.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_303mail'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3031.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3031.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3031.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__3031.ggCurrentLogicStateSize == 0) {
					me.__3031.style.width='30px';
					me.__3031.style.height='24px';
					me.__3031.style.left = 'calc(50% - (30px / 2))';
					me.__3031.style.top = 'calc(50% - (24px / 2))';
					setTimeout(function() {skin.updateSize(me.__3031);}, 550);
				}
				else {
					me.__3031.style.width='23px';
					me.__3031.style.height='18px';
					me.__3031.style.left = 'calc(50% - (23px / 2))';
					me.__3031.style.top = 'calc(50% - (18px / 2))';
					setTimeout(function() {skin.updateSize(me.__3031);}, 550);
				}
			}
		}
		me.__3031.logicBlock_size();
		me.__3031.ggUpdatePosition=function (useTransition) {
		}
		me.__303mail.appendChild(me.__3031);
		me.__30ct_sociais.appendChild(me.__303mail);
		me.divSkin.appendChild(me.__30ct_sociais);
		el=me.__30ct_sociais_mobile=document.createElement('div');
		el.ggId="3.0-CT_SOCIAIS_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 58px;';
		hs+='height : 50px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__30ct_sociais_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__30ct_sociais_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30ct_sociais_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30ct_sociais_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30ct_sociais_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__30ct_sociais_mobile.ggCurrentLogicStateVisible == 0) {
					me.__30ct_sociais_mobile.style.visibility=(Number(me.__30ct_sociais_mobile.style.opacity)>0||!me.__30ct_sociais_mobile.style.opacity)?'inherit':'hidden';
					me.__30ct_sociais_mobile.ggVisible=true;
				}
				else {
					me.__30ct_sociais_mobile.style.visibility="hidden";
					me.__30ct_sociais_mobile.ggVisible=false;
				}
			}
		}
		me.__30ct_sociais_mobile.logicBlock_visible();
		me.__30ct_sociais_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true)) || 
				((player.getVariableValue('var_loc') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__30ct_sociais_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__30ct_sociais_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__30ct_sociais_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__30ct_sociais_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__30ct_sociais_mobile.style.opacity == 0.0) { me.__30ct_sociais_mobile.style.visibility="hidden"; } }, 1005);
					me.__30ct_sociais_mobile.style.opacity=0;
				}
				else {
					me.__30ct_sociais_mobile.style.visibility=me.__30ct_sociais_mobile.ggVisible?'inherit':'hidden';
					me.__30ct_sociais_mobile.style.opacity=1;
				}
			}
		}
		me.__30ct_sociais_mobile.logicBlock_alpha();
		me.__30ct_sociais_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__301face_mobile=document.createElement('div');
		el.ggId="3.0.1-FACE_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__301face_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__301face_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_301face_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__301face_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__301face_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__301face_mobile.style.transition='background-color 500ms ease 0ms';
				if (me.__301face_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__301face_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
				else {
					me.__301face_mobile.style.backgroundColor="rgba(55,55,55,1)";
				}
			}
		}
		me.__301face_mobile.logicBlock_backgroundcolor();
		me.__301face_mobile.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/forceoneacademia","_blank");
		}
		me.__301face_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_301face_mobile']=true;
			me.__3011_mobile.logicBlock_size();
			me.__301face_mobile.logicBlock_backgroundcolor();
		}
		me.__301face_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_301face_mobile']=false;
			me.__3011_mobile.logicBlock_size();
			me.__301face_mobile.logicBlock_backgroundcolor();
		}
		me.__301face_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3011_mobile=document.createElement('div');
		els=me.__3011_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__3011_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAACrCAYAAADvjSvEAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPjSURBVHgB7d3hbdNAGMbx5xIG4DMSwmzQDegGsEHLBHSDthPQDSgTMAKwQZmg7gYdABHuHDtN0lZIpXfP2f7/JNpEfPvr1Wu7sZWgGVhd62X8daiF3milg/g6vW/638O/ki5faIL60B8U9E4p+Dpy/A9VYzLhu9gLHcW4H7SOXbXRh4/BD+NkHylN+Kr4yniy0Ybvg59qBNP9kNGFH3vwwWjCdzs86HN8eawJWGgEYvSTGP1aE4meVD3x/ZR/kbozlUmpNnyMfhCjf9NwDj4xVa6aGP04Rv+uiUZPqgsfo5/162U05+RPUVX4PvqpZqCa8HOKnlQRfm7RE3'+
			'v4OUZPrOG3Lv9nxxY+Rm/6s5dZ8k38xM/T/8USvtvrM46eFA/fr5hZ7vVt5Sd+vWJmr2j47m8wM18xg2LhWTG7Sk78sZj2jSLh+2k/EjZKTfyhmPYdZcKz2+/JHj6umfR5aSPsyD/x7PYHZQ2/uXkU9+SeeKI/Im/4oPfCg3JP/KHwoGzhuxuSJn6Lxv/IN/GL7mkMPCLfLXyr6tfMbTwGXcQB+aHf+hXexvcF5bx3slGtUvA/Og9N2djb5hc+6Di80VeZZdnx/YVTfQfWoLMaoie5Dq4Hqs9VjH6uSoziiZBnsdSJKpIrfKO6tOG1fqoic5n4K1VmLuFtp42Pmc+OrwzhTQhvQngTwpsQ3oTwJoQ3IbwJ4U0Ib0J4E8KbEN6E8CaENyG8CeFNwvab1Y0+afUsn8bXdl/NrWr6+C/oYv9OskbTfF6puhusdlfNiofE'+
			'ighq93c897OXEHS7H74R8luq3T24tjV9mcN0hUZhM/H9Hb7Irzu72l41jVBCm35sh2fiy2DiTdr04y58+nIq5BdYNS57q4ar1jKYeJPAwdVjuZ74zZUrV61lhGbdvJt4rlqL2XwmMKyaRiihHV4M4Zn4Mph4k3Z4seh/ctVaQmDVuOytGq5ay2DiTQIHV4/l3cR3V1FctZYRmru/FCy4ai1m5062tGoaoYR2+00Kz8SXwcSbtNtvFly1FhJYNS57q4ar1jKYeJPAwdVjuTvxwxMhrZ4Xj+LsCa90s/NeGXRfpljXtxNfhkYfVRGe+jMhvAnhTQhvQngTwpsQ3oTwJoQ3IbwJ4U0Ib0J4E8KbEN6E8CaENyG8CeFNCG9CeBPCmxDehPAmhDchvAnhTQhvQngTwpsQ3oTwJoQ3IbwJ4U0Ib0J4E8KbEN6E8CaENyG8Ce'+
			'FNCG9CeBPCmxDehPAmhDchvAnhTQhvQngTwpsQ3oTwJoQ3IbwJ4U0Ib0J4E8KbEN6E8CaENyG8CeFNCG9CeBPCmxDe5C/GF6S4rCASTAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.1.1_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3011_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3011_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_301face_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3011_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3011_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3011_mobile.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__3011_mobile.ggCurrentLogicStateSize == 0) {
					me.__3011_mobile.style.width='18px';
					me.__3011_mobile.style.height='32px';
					me.__3011_mobile.style.left = 'calc(50% - (18px / 2))';
					me.__3011_mobile.style.top = 'calc(50% - (32px / 2))';
					setTimeout(function() {skin.updateSize(me.__3011_mobile);}, 550);
				}
				else {
					me.__3011_mobile.style.width='13px';
					me.__3011_mobile.style.height='23px';
					me.__3011_mobile.style.left = 'calc(50% - (13px / 2))';
					me.__3011_mobile.style.top = 'calc(50% - (23px / 2))';
					setTimeout(function() {skin.updateSize(me.__3011_mobile);}, 550);
				}
			}
		}
		me.__3011_mobile.logicBlock_size();
		me.__3011_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__301face_mobile.appendChild(me.__3011_mobile);
		me.__30ct_sociais_mobile.appendChild(me.__301face_mobile);
		el=me.__302insta_mobile=document.createElement('div');
		el.ggId="3.0.2-INSTA_MOBILE";
		el.ggDx=-58;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) - 58px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__302insta_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__302insta_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_302insta_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__302insta_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__302insta_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__302insta_mobile.style.transition='background-color 500ms ease 0ms';
				if (me.__302insta_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__302insta_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
				else {
					me.__302insta_mobile.style.backgroundColor="rgba(55,55,55,1)";
				}
			}
		}
		me.__302insta_mobile.logicBlock_backgroundcolor();
		me.__302insta_mobile.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/forceoneacademia","_blank");
		}
		me.__302insta_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_302insta_mobile']=true;
			me.__3021_mobile.logicBlock_size();
			me.__302insta_mobile.logicBlock_backgroundcolor();
		}
		me.__302insta_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_302insta_mobile']=false;
			me.__3021_mobile.logicBlock_size();
			me.__302insta_mobile.logicBlock_backgroundcolor();
		}
		me.__302insta_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3021_mobile=document.createElement('div');
		els=me.__3021_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__3021_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.2.1_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3021_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3021_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_302insta_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3021_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3021_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3021_mobile.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__3021_mobile.ggCurrentLogicStateSize == 0) {
					me.__3021_mobile.style.width='28px';
					me.__3021_mobile.style.height='28px';
					me.__3021_mobile.style.left = 'calc(50% - (28px / 2))';
					me.__3021_mobile.style.top = 'calc(50% - (28px / 2))';
					setTimeout(function() {skin.updateSize(me.__3021_mobile);}, 550);
				}
				else {
					me.__3021_mobile.style.width='22px';
					me.__3021_mobile.style.height='22px';
					me.__3021_mobile.style.left = 'calc(50% - (22px / 2))';
					me.__3021_mobile.style.top = 'calc(50% - (22px / 2))';
					setTimeout(function() {skin.updateSize(me.__3021_mobile);}, 550);
				}
			}
		}
		me.__3021_mobile.logicBlock_size();
		me.__3021_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__302insta_mobile.appendChild(me.__3021_mobile);
		me.__30ct_sociais_mobile.appendChild(me.__302insta_mobile);
		el=me.__303mail_mobile=document.createElement('div');
		el.ggId="3.0.3-MAIL_MOBILE";
		el.ggDx=58;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 5px 15px 5px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 58px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__303mail_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__303mail_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_303mail_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__303mail_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__303mail_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__303mail_mobile.style.transition='background-color 500ms ease 0ms';
				if (me.__303mail_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__303mail_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
				else {
					me.__303mail_mobile.style.backgroundColor="rgba(55,55,55,1)";
				}
			}
		}
		me.__303mail_mobile.logicBlock_backgroundcolor();
		me.__303mail_mobile.onclick=function (e) {
			player.openUrl("mailto:sac@forceoneacademia.com.br","_blank");
		}
		me.__303mail_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_303mail_mobile']=true;
			me.__3031_mobile.logicBlock_size();
			me.__303mail_mobile.logicBlock_backgroundcolor();
		}
		me.__303mail_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_303mail_mobile']=false;
			me.__3031_mobile.logicBlock_size();
			me.__303mail_mobile.logicBlock_backgroundcolor();
		}
		me.__303mail_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3031_mobile=document.createElement('div');
		els=me.__3031_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__3031_mobile';
		hs='data:image/png;base64,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'+
			'6D/wGdUFOJIxFzjQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.3.1_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3031_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3031_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['_303mail_mobile'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__3031_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__3031_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me.__3031_mobile.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me.__3031_mobile.ggCurrentLogicStateSize == 0) {
					me.__3031_mobile.style.width='30px';
					me.__3031_mobile.style.height='24px';
					me.__3031_mobile.style.left = 'calc(50% - (30px / 2))';
					me.__3031_mobile.style.top = 'calc(50% - (24px / 2))';
					setTimeout(function() {skin.updateSize(me.__3031_mobile);}, 550);
				}
				else {
					me.__3031_mobile.style.width='23px';
					me.__3031_mobile.style.height='18px';
					me.__3031_mobile.style.left = 'calc(50% - (23px / 2))';
					me.__3031_mobile.style.top = 'calc(50% - (18px / 2))';
					setTimeout(function() {skin.updateSize(me.__3031_mobile);}, 550);
				}
			}
		}
		me.__3031_mobile.logicBlock_size();
		me.__3031_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__303mail_mobile.appendChild(me.__3031_mobile);
		me.__30ct_sociais_mobile.appendChild(me.__303mail_mobile);
		me.divSkin.appendChild(me.__30ct_sociais_mobile);
		el=me.__40whatsapp=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/_40whatsapp.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="4.0-WHATSAPP";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40whatsapp.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__40whatsapp.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40whatsapp.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40whatsapp.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40whatsapp.style.transition='';
				if (me.__40whatsapp.ggCurrentLogicStateVisible == 0) {
					me.__40whatsapp.style.visibility="hidden";
					me.__40whatsapp.ggVisible=false;
				}
				else {
					me.__40whatsapp.style.visibility=(Number(me.__40whatsapp.style.opacity)>0||!me.__40whatsapp.style.opacity)?'inherit':'hidden';
					me.__40whatsapp.ggVisible=true;
				}
			}
		}
		me.__40whatsapp.logicBlock_visible();
		me.__40whatsapp.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__40whatsapp);
		el=me.__40whatsapp_mobile=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/_40whatsapp_mobile.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="4.0-WHATSAPP_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40whatsapp_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__40whatsapp_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40whatsapp_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40whatsapp_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40whatsapp_mobile.style.transition='';
				if (me.__40whatsapp_mobile.ggCurrentLogicStateVisible == 0) {
					me.__40whatsapp_mobile.style.visibility=(Number(me.__40whatsapp_mobile.style.opacity)>0||!me.__40whatsapp_mobile.style.opacity)?'inherit':'hidden';
					me.__40whatsapp_mobile.ggVisible=true;
				}
				else {
					me.__40whatsapp_mobile.style.visibility="hidden";
					me.__40whatsapp_mobile.ggVisible=false;
				}
			}
		}
		me.__40whatsapp_mobile.logicBlock_visible();
		me.__40whatsapp_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__40whatsapp_mobile);
		el=me.__40localizacao=document.createElement('div');
		el.ggId="4.0-LOCALIZACAO";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -300px;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((500px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40localizacao.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__40localizacao.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_loc') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__40localizacao.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__40localizacao.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__40localizacao.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__40localizacao.ggCurrentLogicStatePosition == 0) {
					me.__40localizacao.style.left = 'calc(50% - (500px / 2))';
					me.__40localizacao.style.bottom='0px';
				}
				else {
					me.__40localizacao.style.left='calc(50% - ((500px + 0px) / 2) + 0px)';
					me.__40localizacao.style.bottom='-300px';
				}
			}
		}
		me.__40localizacao.logicBlock_position();
		me.__40localizacao.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40localizacao.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40localizacao.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40localizacao.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__40localizacao.ggCurrentLogicStateVisible == 0) {
					me.__40localizacao.style.visibility="hidden";
					me.__40localizacao.ggVisible=false;
				}
				else {
					me.__40localizacao.style.visibility=(Number(me.__40localizacao.style.opacity)>0||!me.__40localizacao.style.opacity)?'inherit':'hidden';
					me.__40localizacao.ggVisible=true;
				}
			}
		}
		me.__40localizacao.logicBlock_visible();
		me.__40localizacao.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_loc') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40localizacao.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40localizacao.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40localizacao.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__40localizacao.ggCurrentLogicStateAlpha == 0) {
					me.__40localizacao.style.visibility=me.__40localizacao.ggVisible?'inherit':'hidden';
					me.__40localizacao.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__40localizacao.style.opacity == 0.0) { me.__40localizacao.style.visibility="hidden"; } }, 1005);
					me.__40localizacao.style.opacity=0;
				}
			}
		}
		me.__40localizacao.logicBlock_alpha();
		me.__40localizacao.ggUpdatePosition=function (useTransition) {
		}
		el=me.__401fundo=document.createElement('div');
		els=me.__401fundo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="4.0.1-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px 25px 0px 0px;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__401fundo.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d4844.249289331369!2d-52.609765100000004!3d-23.6544651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed5a0414c07f4d%3A0x183d3fc9945483e6!2sForce%20One%20Academia%20-%20Cianorte!5e1!3m2!1spt-BR!2sbr!4v1751552892387!5m2!1spt-BR!2sbr\" width=\"500px\" height=\"450\" style=\"border-radius: 50px\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"><\/iframe>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__401fundo.ggUpdateText();
		el.appendChild(els);
		me.__401fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__401fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__40localizacao.appendChild(me.__401fundo);
		el=me.__402close=document.createElement('div');
		els=me.__402close__img=document.createElement('img');
		els.className='ggskin ggskin__402close';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAYAAAA5Od+KAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATmSURBVHgB7Z2BkdM6EIZXeQ1cA+8ROoAOjgoeVMB1AlRCrgKgAkIF0AEZGiAVYPTH8SWTXC6yrZVW0v/N3MUTx7K1X9Z2ZFtycoXupyyHafdcNkKyE+rEXVj41s955ydf+L+bk9lrP2/lnsm9kGR4J3c+7m/95O3JrK3ASSf3XvTn4xnupIAb/86nRwp4jI0v8BWzWZddlvZOXgR8fOWdfBicuJNCvvrJpYRDwYrMcPLSO9kuHt7qd8NLGcdu5cfHABKHiWJF5CHT+8z1Bb0e3pgIMzgiM8QeFSKv+sztD9RzYAZHIopY4PfEfeZu5LecnxVPgRk8g2hie7'+
			'aLfbbFEAuYwROJLBbcLCQ+FDwSBbE7NOQCCg5ESywYjrmd6MBj8BNoigVD5q5FB2bwBbTFeta93E61nZiCT0ggVnbt/w8r3Mh3CWu/nAp30ZJIrI+1W8rzwwlVJ2/wpujRfAanEoskwoTLtfLWMjhHbJ2FjaidXDF1YmhjaiRnLJ0Y3KhayB1D99RSFDwdC7Fz15am4PFYidlVuYCCw7EUqyC5gIKvYy1GwXIBBV/GYmxGyQUUfI7VmIyWCyj4gOVYTJILKNh+DCbLBS0LLqHus+SCFgWXUufZckFLgkuqaxS5oAXBpdUxmlxQs+AS6xZVLqhRcKl1ii4X1CS45LqoyAU1CC69DmpyQcnBqeHLqSoXlBikWg4r6nJBScGq6XwhiVxQQtBqO9NPJhdYDl6NP+GSygUWg1hr40tyucBSMGtuVcsiF1gIau3t4dnkgpzB'+
			'beFCR1a5IEeQW7lEmV0uSP1oYwtigQm5IJngnqXoYUIsMCMXJBKsiRmxwJRcULBgU2KBObmgQMHmxAKTckFBgk2KBWblggIEmxULTMsFhgWbFgvMywUGBZsXC4qQCwwJLkIsKEYuMCC4GLGgKLkgo+CixILi5IIMgosTC4qUCxIKLlIs0OopnRiAu+UwuFtOAU+owuFPoXHwp5AGbMQYD5sfp8HmxxjwwsF0eMlvHrzkNwVerJ8Pb7OJA2+zCYE3yMWDt7bGhbe2PgZvSo8PHydRXFfzj5PwQTA9+AhnxYL58DUfvo4Lu01IQ3K57PCk0g5P2FVRpV0VsZOxB+rqZIzdA55RR/eA7NjzIuqCVeWyS96rqApWk8vOtINRq4OKXHaDPxqVukSXywEsJhO9TlHlcuiZ2UStWzS5HDQqGtHqGEVuK5fQQFPDvbUkdqCJgR'+
			'pbFDtQ9RCrLYsdqHJwZIo9UNWw5hR7jtWYjJJLsZexGJtguRR7HWsxCpJLseFYitVVuRQ7Hisxe1IuxU7HQuwuyqXY+eSOobO4UTWRM5bO0sbUSq6YOgsb0QI5Yutyrrw1Usf40LEnxaqzq3v/jPBG9MAX6NNuffjnv1F3fuqj6NG82GOSZLCTu8V+4q3oQbEnJMngTu76zMWqdKDYJ9DO4MVuBTpQ7BW0M1irp3SKDURTsIZcih2JluDhmPvbv9zIfCh2BpGPwdshc3/IfCh2JpEzeN3L7eSDzINiIxFN8EJWi32Ba/+ylmlQbGQiCF65/+TL4YSqkzcTCqNYJWYI3gx74sVRYdt9YavAQn5QrC4TBK/951+eXRU6pvsl/8sf394scivnZ9Frv9TKPZN7IcnYt/+jmfj2ZNZWkGj/yHv3r3w7nvEXCJSPGCz5kQkA'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.2-CLOSE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__402close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__402close.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_402close'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__402close.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__402close.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__402close.style.transition='transform 500ms ease 0ms';
				if (me.__402close.ggCurrentLogicStateAngle == 0) {
					me.__402close.ggParameter.a = 45;
					me.__402close.style.transform=parameterToTransform(me.__402close.ggParameter);
				}
				else {
					me.__402close.ggParameter.a = 0;
					me.__402close.style.transform=parameterToTransform(me.__402close.ggParameter);
				}
			}
		}
		me.__402close.logicBlock_angle();
		me.__402close.onclick=function (e) {
			player.setVariableValue('var_loc', false);
		}
		me.__402close.onmouseenter=function (e) {
			me.elementMouseOver['_402close']=true;
			me.__402close.logicBlock_angle();
		}
		me.__402close.onmouseleave=function (e) {
			me.elementMouseOver['_402close']=false;
			me.__402close.logicBlock_angle();
		}
		me.__402close.ggUpdatePosition=function (useTransition) {
		}
		me.__40localizacao.appendChild(me.__402close);
		me.divSkin.appendChild(me.__40localizacao);
		el=me.__40localizacao_mob=document.createElement('div');
		el.ggId="4.0-LOCALIZACAO_MOB";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -350px;';
		hs+='height : 350px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40localizacao_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__40localizacao_mob.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_loc') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__40localizacao_mob.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__40localizacao_mob.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__40localizacao_mob.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__40localizacao_mob.ggCurrentLogicStatePosition == 0) {
					me.__40localizacao_mob.style.left = 'calc(50% - (100% / 2))';
					me.__40localizacao_mob.style.bottom='0px';
				}
				else {
					me.__40localizacao_mob.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__40localizacao_mob.style.bottom='-350px';
				}
			}
		}
		me.__40localizacao_mob.logicBlock_position();
		me.__40localizacao_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40localizacao_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40localizacao_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40localizacao_mob.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__40localizacao_mob.ggCurrentLogicStateVisible == 0) {
					me.__40localizacao_mob.style.visibility=(Number(me.__40localizacao_mob.style.opacity)>0||!me.__40localizacao_mob.style.opacity)?'inherit':'hidden';
					me.__40localizacao_mob.ggVisible=true;
				}
				else {
					me.__40localizacao_mob.style.visibility="hidden";
					me.__40localizacao_mob.ggVisible=false;
				}
			}
		}
		me.__40localizacao_mob.logicBlock_visible();
		me.__40localizacao_mob.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_loc') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40localizacao_mob.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40localizacao_mob.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40localizacao_mob.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me.__40localizacao_mob.ggCurrentLogicStateAlpha == 0) {
					me.__40localizacao_mob.style.visibility=me.__40localizacao_mob.ggVisible?'inherit':'hidden';
					me.__40localizacao_mob.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__40localizacao_mob.style.opacity == 0.0) { me.__40localizacao_mob.style.visibility="hidden"; } }, 1005);
					me.__40localizacao_mob.style.opacity=0;
				}
			}
		}
		me.__40localizacao_mob.logicBlock_alpha();
		me.__40localizacao_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me.__401fundo_mob=document.createElement('div');
		els=me.__401fundo_mob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="4.0.1-FUNDO_MOB";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='height : 350px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__401fundo_mob.ggUpdateText=function() {
			var params = [];
			var hs = player._("<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d4844.249289331369!2d-52.609765100000004!3d-23.6544651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed5a0414c07f4d%3A0x183d3fc9945483e6!2sForce%20One%20Academia%20-%20Cianorte!5e1!3m2!1spt-BR!2sbr!4v1751552892387!5m2!1spt-BR!2sbr\" width=\"100%\" height=\"450\" style=\"border-radius: 25px\" border=\"0px\"; allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"><\/iframe>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__401fundo_mob.ggUpdateText();
		el.appendChild(els);
		me.__401fundo_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__401fundo_mob.ggUpdatePosition=function (useTransition) {
		}
		me.__40localizacao_mob.appendChild(me.__401fundo_mob);
		el=me.__402close_mob=document.createElement('div');
		els=me.__402close_mob__img=document.createElement('img');
		els.className='ggskin ggskin__402close_mob';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAYAAAA5Od+KAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATmSURBVHgB7Z2BkdM6EIZXeQ1cA+8ROoAOjgoeVMB1AlRCrgKgAkIF0AEZGiAVYPTH8SWTXC6yrZVW0v/N3MUTx7K1X9Z2ZFtycoXupyyHafdcNkKyE+rEXVj41s955ydf+L+bk9lrP2/lnsm9kGR4J3c+7m/95O3JrK3ASSf3XvTn4xnupIAb/86nRwp4jI0v8BWzWZddlvZOXgR8fOWdfBicuJNCvvrJpYRDwYrMcPLSO9kuHt7qd8NLGcdu5cfHABKHiWJF5CHT+8z1Bb0e3pgIMzgiM8QeFSKv+sztD9RzYAZHIopY4PfEfeZu5LecnxVPgRk8g2hie7'+
			'aLfbbFEAuYwROJLBbcLCQ+FDwSBbE7NOQCCg5ESywYjrmd6MBj8BNoigVD5q5FB2bwBbTFeta93E61nZiCT0ggVnbt/w8r3Mh3CWu/nAp30ZJIrI+1W8rzwwlVJ2/wpujRfAanEoskwoTLtfLWMjhHbJ2FjaidXDF1YmhjaiRnLJ0Y3KhayB1D99RSFDwdC7Fz15am4PFYidlVuYCCw7EUqyC5gIKvYy1GwXIBBV/GYmxGyQUUfI7VmIyWCyj4gOVYTJILKNh+DCbLBS0LLqHus+SCFgWXUufZckFLgkuqaxS5oAXBpdUxmlxQs+AS6xZVLqhRcKl1ii4X1CS45LqoyAU1CC69DmpyQcnBqeHLqSoXlBikWg4r6nJBScGq6XwhiVxQQtBqO9NPJhdYDl6NP+GSygUWg1hr40tyucBSMGtuVcsiF1gIau3t4dnkgpzB'+
			'beFCR1a5IEeQW7lEmV0uSP1oYwtigQm5IJngnqXoYUIsMCMXJBKsiRmxwJRcULBgU2KBObmgQMHmxAKTckFBgk2KBWblggIEmxULTMsFhgWbFgvMywUGBZsXC4qQCwwJLkIsKEYuMCC4GLGgKLkgo+CixILi5IIMgosTC4qUCxIKLlIs0OopnRiAu+UwuFtOAU+owuFPoXHwp5AGbMQYD5sfp8HmxxjwwsF0eMlvHrzkNwVerJ8Pb7OJA2+zCYE3yMWDt7bGhbe2PgZvSo8PHydRXFfzj5PwQTA9+AhnxYL58DUfvo4Lu01IQ3K57PCk0g5P2FVRpV0VsZOxB+rqZIzdA55RR/eA7NjzIuqCVeWyS96rqApWk8vOtINRq4OKXHaDPxqVukSXywEsJhO9TlHlcuiZ2UStWzS5HDQqGtHqGEVuK5fQQFPDvbUkdqCJgR'+
			'pbFDtQ9RCrLYsdqHJwZIo9UNWw5hR7jtWYjJJLsZexGJtguRR7HWsxCpJLseFYitVVuRQ7Hisxe1IuxU7HQuwuyqXY+eSOobO4UTWRM5bO0sbUSq6YOgsb0QI5Yutyrrw1Usf40LEnxaqzq3v/jPBG9MAX6NNuffjnv1F3fuqj6NG82GOSZLCTu8V+4q3oQbEnJMngTu76zMWqdKDYJ9DO4MVuBTpQ7BW0M1irp3SKDURTsIZcih2JluDhmPvbv9zIfCh2BpGPwdshc3/IfCh2JpEzeN3L7eSDzINiIxFN8EJWi32Ba/+ylmlQbGQiCF65/+TL4YSqkzcTCqNYJWYI3gx74sVRYdt9YavAQn5QrC4TBK/951+eXRU6pvsl/8sf394scivnZ9Frv9TKPZN7IcnYt/+jmfj2ZNZWkGj/yHv3r3w7nvEXCJSPGCz5kQkA'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.2-CLOSE_MOB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__402close_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__402close_mob.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_402close_mob'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__402close_mob.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__402close_mob.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__402close_mob.style.transition='transform 500ms ease 0ms';
				if (me.__402close_mob.ggCurrentLogicStateAngle == 0) {
					me.__402close_mob.ggParameter.a = 45;
					me.__402close_mob.style.transform=parameterToTransform(me.__402close_mob.ggParameter);
				}
				else {
					me.__402close_mob.ggParameter.a = 0;
					me.__402close_mob.style.transform=parameterToTransform(me.__402close_mob.ggParameter);
				}
			}
		}
		me.__402close_mob.logicBlock_angle();
		me.__402close_mob.onclick=function (e) {
			player.setVariableValue('var_loc', false);
		}
		me.__402close_mob.onmouseenter=function (e) {
			me.elementMouseOver['_402close_mob']=true;
			me.__402close_mob.logicBlock_angle();
		}
		me.__402close_mob.onmouseleave=function (e) {
			me.elementMouseOver['_402close_mob']=false;
			me.__402close_mob.logicBlock_angle();
		}
		me.__402close_mob.ggUpdatePosition=function (useTransition) {
		}
		me.__40localizacao_mob.appendChild(me.__402close_mob);
		me.divSkin.appendChild(me.__40localizacao_mob);
		el=me.__50menu_ajuda_desk=document.createElement('div');
		el.ggId="5.0-MENU_AJUDA_DESK";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50menu_ajuda_desk.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__50menu_ajuda_desk.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50menu_ajuda_desk.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50menu_ajuda_desk.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50menu_ajuda_desk.style.transition='opacity 0s';
				if (me.__50menu_ajuda_desk.ggCurrentLogicStateVisible == 0) {
					me.__50menu_ajuda_desk.style.visibility="hidden";
					me.__50menu_ajuda_desk.ggVisible=false;
				}
				else {
					me.__50menu_ajuda_desk.style.visibility=(Number(me.__50menu_ajuda_desk.style.opacity)>0||!me.__50menu_ajuda_desk.style.opacity)?'inherit':'hidden';
					me.__50menu_ajuda_desk.ggVisible=true;
				}
			}
		}
		me.__50menu_ajuda_desk.logicBlock_visible();
		me.__50menu_ajuda_desk.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_ajuda') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__50menu_ajuda_desk.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__50menu_ajuda_desk.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__50menu_ajuda_desk.style.transition='opacity 0s';
				if (me.__50menu_ajuda_desk.ggCurrentLogicStateAlpha == 0) {
					me.__50menu_ajuda_desk.style.visibility=me.__50menu_ajuda_desk.ggVisible?'inherit':'hidden';
					me.__50menu_ajuda_desk.style.opacity=1;
				}
				else {
					me.__50menu_ajuda_desk.style.visibility="hidden";
					me.__50menu_ajuda_desk.style.opacity=0;
				}
			}
		}
		me.__50menu_ajuda_desk.logicBlock_alpha();
		me.__50menu_ajuda_desk.ggUpdatePosition=function (useTransition) {
		}
		el=me.__501fundo=document.createElement('div');
		el.ggId="5.0.1-FUNDO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(55,55,55,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__501fundo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__501fundo.ggUpdatePosition=function (useTransition) {
		}
		me.__50menu_ajuda_desk.appendChild(me.__501fundo);
		el=me.__502fundo_menu=document.createElement('div');
		el.ggId="5.0.2-FUNDO_MENU";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 500px;';
		hs+='left : calc(50% - ((1100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((500px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502fundo_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502fundo_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5021linha1=document.createElement('div');
		el.ggId="5.0.2.1-LINHA1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 440px;';
		hs+='left : 305px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((440px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5021linha1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5021linha1.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu.appendChild(me.__5021linha1);
		el=me.__5022linha2=document.createElement('div');
		el.ggId="5.0.2.2-LINHA2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 440px;';
		hs+='left : 880px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((440px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5022linha2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5022linha2.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu.appendChild(me.__5022linha2);
		el=me.__5023logo=document.createElement('div');
		els=me.__5023logo__img=document.createElement('img');
		els.className='ggskin ggskin__5023logo';
		hs=basePath + 'images/_5023logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.3-LOGO";
		el.ggDy=-109;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((97px + 0px) / 2) - 109px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5023logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5023logo.onclick=function (e) {
			player.setVariableValue('var_menu', !player.getVariableValue('var_menu'));
		}
		me.__5023logo.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu.appendChild(me.__5023logo);
		el=me.__5024tourvirtual=document.createElement('div');
		els=me.__5024tourvirtual__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.4-TOURVIRTUAL";
		el.ggDy=-45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : 20px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) - 45px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5024tourvirtual.ggUpdateText=function() {
			var params = [];
			var hs = player._("TOUR VIRTUAL 360\xba", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5024tourvirtual.ggUpdateText();
		el.appendChild(els);
		me.__5024tourvirtual.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5024tourvirtual.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu.appendChild(me.__5024tourvirtual);
		el=me.__5025instrucoes=document.createElement('div');
		els=me.__5025instrucoes__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.5-INSTRUCOES";
		el.ggDy=117;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : 96px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((96px + 0px) / 2) + 117px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5025instrucoes.ggUpdateText=function() {
			var params = [];
			var hs = player._("INSTRU\xc7\xd5ES\nDE USO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5025instrucoes.ggUpdateText();
		el.appendChild(els);
		me.__5025instrucoes.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5025instrucoes.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu.appendChild(me.__5025instrucoes);
		el=me.__5026ct_meio=document.createElement('div');
		el.ggId="5.0.2.6-CT_MEIO";
		el.ggDx=43;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 440px;';
		hs+='left : calc(50% - ((530px + 0px) / 2) + 43px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((440px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 530px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5026ct_meio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5026ct_meio.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50261ct_1_up=document.createElement('div');
		el.ggId="5.0.2.6.1-CT_1_UP";
		el.ggDx=-136;
		el.ggDy=-95;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 170px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) - 136px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((170px + 0px) / 2) - 95px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50261ct_1_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50261ct_1_up.ggUpdatePosition=function (useTransition) {
		}
		el=me.__502611clickearrasta=document.createElement('div');
		els=me.__502611clickearrasta__img=document.createElement('img');
		els.className='ggskin ggskin__502611clickearrasta';
		hs=basePath + 'images/_502611clickearrasta.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 25px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.6.1.1-CLICKEARRASTA";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 125px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='opacity : 0.80003;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502611clickearrasta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502611clickearrasta.ggUpdatePosition=function (useTransition) {
		}
		me.__50261ct_1_up.appendChild(me.__502611clickearrasta);
		el=me.__502612texto=document.createElement('div');
		els=me.__502612texto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.6.1.2-TEXTO";
		el.ggDx=0;
		el.ggDy=65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 65px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__502612texto.ggUpdateText=function() {
			var params = [];
			var hs = player._("Clique, segure e arraste para navegar", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__502612texto.ggUpdateText();
		el.appendChild(els);
		me.__502612texto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502612texto.ggUpdatePosition=function (useTransition) {
		}
		me.__50261ct_1_up.appendChild(me.__502612texto);
		me.__5026ct_meio.appendChild(me.__50261ct_1_up);
		el=me.__50262ct_1_down=document.createElement('div');
		el.ggId="5.0.2.6.2-CT_1_DOWN";
		el.ggDx=-136;
		el.ggDy=95;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 170px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) - 136px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((170px + 0px) / 2) + 95px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50262ct_1_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50262ct_1_down.ggUpdatePosition=function (useTransition) {
		}
		el=me.__502621hotspots=document.createElement('div');
		els=me.__502621hotspots__img=document.createElement('img');
		els.className='ggskin ggskin__502621hotspots';
		hs=basePath + 'images/_502621hotspots.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 25px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.6.2.1-HOTSPOTS";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 125px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='opacity : 0.80003;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502621hotspots.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502621hotspots.ggUpdatePosition=function (useTransition) {
		}
		me.__50262ct_1_down.appendChild(me.__502621hotspots);
		el=me.__502622texto=document.createElement('div');
		els=me.__502622texto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.6.2.2-TEXTO";
		el.ggDx=0;
		el.ggDy=65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 65px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__502622texto.ggUpdateText=function() {
			var params = [];
			var hs = player._("Clique nos Hotspots para navegar entre os espa\xe7os", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__502622texto.ggUpdateText();
		el.appendChild(els);
		me.__502622texto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502622texto.ggUpdatePosition=function (useTransition) {
		}
		me.__50262ct_1_down.appendChild(me.__502622texto);
		me.__5026ct_meio.appendChild(me.__50262ct_1_down);
		el=me.__50263ct_2_up=document.createElement('div');
		el.ggId="5.0.2.6.3-CT_2_UP";
		el.ggDx=136;
		el.ggDy=-95;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 170px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 136px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((170px + 0px) / 2) - 95px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50263ct_2_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50263ct_2_up.ggUpdatePosition=function (useTransition) {
		}
		el=me.__502631menu=document.createElement('div');
		els=me.__502631menu__img=document.createElement('img');
		els.className='ggskin ggskin__502631menu';
		hs=basePath + 'images/_502631menu.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 25px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.6.3.1-MENU";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 125px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='opacity : 0.80003;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502631menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502631menu.ggUpdatePosition=function (useTransition) {
		}
		me.__50263ct_2_up.appendChild(me.__502631menu);
		el=me.__502632texto=document.createElement('div');
		els=me.__502632texto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.6.3.2-TEXTO";
		el.ggDx=0;
		el.ggDy=65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 65px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__502632texto.ggUpdateText=function() {
			var params = [];
			var hs = player._("Clique no logo para esconder ou revelar o Menu", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__502632texto.ggUpdateText();
		el.appendChild(els);
		me.__502632texto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502632texto.ggUpdatePosition=function (useTransition) {
		}
		me.__50263ct_2_up.appendChild(me.__502632texto);
		me.__5026ct_meio.appendChild(me.__50263ct_2_up);
		el=me.__50264ct_2_down=document.createElement('div');
		el.ggId="5.0.2.6.4-CT_2_DOWN";
		el.ggDx=136;
		el.ggDy=95;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 170px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 136px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((170px + 0px) / 2) + 95px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50264ct_2_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50264ct_2_down.ggUpdatePosition=function (useTransition) {
		}
		el=me.__502641nav_item=document.createElement('div');
		els=me.__502641nav_item__img=document.createElement('img');
		els.className='ggskin ggskin__502641nav_item';
		hs=basePath + 'images/_502641nav_item.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 25px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.6.4.1-NAV_ITEM";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 125px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='opacity : 0.80003;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502641nav_item.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502641nav_item.ggUpdatePosition=function (useTransition) {
		}
		me.__50264ct_2_down.appendChild(me.__502641nav_item);
		el=me.__502642texto=document.createElement('div');
		els=me.__502642texto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.6.4.2-TEXTO";
		el.ggDx=0;
		el.ggDy=65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 65px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__502642texto.ggUpdateText=function() {
			var params = [];
			var hs = player._("Clique nos itens do Menu para navegar pelos espa\xe7os da academia", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__502642texto.ggUpdateText();
		el.appendChild(els);
		me.__502642texto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502642texto.ggUpdatePosition=function (useTransition) {
		}
		me.__50264ct_2_down.appendChild(me.__502642texto);
		me.__5026ct_meio.appendChild(me.__50264ct_2_down);
		me.__502fundo_menu.appendChild(me.__5026ct_meio);
		el=me.__2027bt_iniciartour=document.createElement('div');
		els=me.__2027bt_iniciartour__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.2.7-BT_INICIARTOUR";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text semibold";
		el.ggType='text';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 57px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : calc(50% - ((57px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2027bt_iniciartour.ggUpdateText=function() {
			var params = [];
			var hs = player._("INICIAR O TOUR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2027bt_iniciartour.ggUpdateText();
		el.appendChild(els);
		me.__2027bt_iniciartour.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2027bt_iniciartour.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_ajuda') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2027bt_iniciartour.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2027bt_iniciartour.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2027bt_iniciartour.style.transition='background-color 1000ms ease 0ms';
				if (me.__2027bt_iniciartour.ggCurrentLogicStateVisible == 0) {
					me.__2027bt_iniciartour.style.visibility="hidden";
					me.__2027bt_iniciartour.ggVisible=false;
				}
				else {
					me.__2027bt_iniciartour.style.visibility=(Number(me.__2027bt_iniciartour.style.opacity)>0||!me.__2027bt_iniciartour.style.opacity)?'inherit':'hidden';
					me.__2027bt_iniciartour.ggVisible=true;
				}
			}
		}
		me.__2027bt_iniciartour.logicBlock_visible();
		me.__2027bt_iniciartour.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2027bt_iniciartour'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2027bt_iniciartour.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2027bt_iniciartour.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2027bt_iniciartour.style.transition='background-color 1000ms ease 0ms';
				if (me.__2027bt_iniciartour.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2027bt_iniciartour.style.backgroundColor="rgba(178,0,255,1)";
				}
				else {
					me.__2027bt_iniciartour.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__2027bt_iniciartour.logicBlock_backgroundcolor();
		me.__2027bt_iniciartour.onclick=function (e) {
			if (player.transitionsDisabled) {
				me.__50menu_ajuda_desk.style.transition='none';
			} else {
				me.__50menu_ajuda_desk.style.transition='all 0ms ease 0ms';
			}
			me.__50menu_ajuda_desk.style.opacity='0';
			me.__50menu_ajuda_desk.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me.__2027bt_iniciartour.style.transition='none';
			} else {
				me.__2027bt_iniciartour.style.transition='all 500ms ease 1000ms';
			}
			me.__2027bt_iniciartour.style.opacity='0';
			me.__2027bt_iniciartour.style.visibility='hidden';
		}
		me.__2027bt_iniciartour.onmouseenter=function (e) {
			me.elementMouseOver['_2027bt_iniciartour']=true;
			me.__2027bt_iniciartour.logicBlock_backgroundcolor();
		}
		me.__2027bt_iniciartour.onmouseleave=function (e) {
			me.elementMouseOver['_2027bt_iniciartour']=false;
			me.__2027bt_iniciartour.logicBlock_backgroundcolor();
		}
		me.__2027bt_iniciartour.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu.appendChild(me.__2027bt_iniciartour);
		el=me.__2028bt_voltaraotour=document.createElement('div');
		els=me.__2028bt_voltaraotour__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.2.8-BT_VOLTARAOTOUR";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text semibold";
		el.ggType='text';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 57px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : calc(50% - ((57px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2028bt_voltaraotour.ggUpdateText=function() {
			var params = [];
			var hs = player._("VOLTAR AO TOUR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2028bt_voltaraotour.ggUpdateText();
		el.appendChild(els);
		me.__2028bt_voltaraotour.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2028bt_voltaraotour.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_ajuda') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__2028bt_voltaraotour.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__2028bt_voltaraotour.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__2028bt_voltaraotour.style.transition='opacity 0s, background-color 1000ms ease 0ms';
				if (me.__2028bt_voltaraotour.ggCurrentLogicStateAlpha == 0) {
					me.__2028bt_voltaraotour.style.visibility=me.__2028bt_voltaraotour.ggVisible?'inherit':'hidden';
					me.__2028bt_voltaraotour.style.opacity=1;
				}
				else {
					me.__2028bt_voltaraotour.style.visibility="hidden";
					me.__2028bt_voltaraotour.style.opacity=0;
				}
			}
		}
		me.__2028bt_voltaraotour.logicBlock_alpha();
		me.__2028bt_voltaraotour.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2028bt_voltaraotour'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2028bt_voltaraotour.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2028bt_voltaraotour.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2028bt_voltaraotour.style.transition='opacity 0s, background-color 1000ms ease 0ms';
				if (me.__2028bt_voltaraotour.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2028bt_voltaraotour.style.backgroundColor="rgba(178,0,255,1)";
				}
				else {
					me.__2028bt_voltaraotour.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__2028bt_voltaraotour.logicBlock_backgroundcolor();
		me.__2028bt_voltaraotour.onclick=function (e) {
			player.setVariableValue('var_ajuda', false);
		}
		me.__2028bt_voltaraotour.onmouseenter=function (e) {
			me.elementMouseOver['_2028bt_voltaraotour']=true;
			me.__2028bt_voltaraotour.logicBlock_backgroundcolor();
		}
		me.__2028bt_voltaraotour.onmouseleave=function (e) {
			me.elementMouseOver['_2028bt_voltaraotour']=false;
			me.__2028bt_voltaraotour.logicBlock_backgroundcolor();
		}
		me.__2028bt_voltaraotour.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu.appendChild(me.__2028bt_voltaraotour);
		me.__50menu_ajuda_desk.appendChild(me.__502fundo_menu);
		me.divSkin.appendChild(me.__50menu_ajuda_desk);
		el=me.__50menu_ajuda_mobile=document.createElement('div');
		el.ggId="5.0-MENU_AJUDA_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50menu_ajuda_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__50menu_ajuda_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50menu_ajuda_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50menu_ajuda_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50menu_ajuda_mobile.style.transition='opacity 0s';
				if (me.__50menu_ajuda_mobile.ggCurrentLogicStateVisible == 0) {
					me.__50menu_ajuda_mobile.style.visibility=(Number(me.__50menu_ajuda_mobile.style.opacity)>0||!me.__50menu_ajuda_mobile.style.opacity)?'inherit':'hidden';
					me.__50menu_ajuda_mobile.ggVisible=true;
				}
				else {
					me.__50menu_ajuda_mobile.style.visibility="hidden";
					me.__50menu_ajuda_mobile.ggVisible=false;
				}
			}
		}
		me.__50menu_ajuda_mobile.logicBlock_visible();
		me.__50menu_ajuda_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_ajuda') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__50menu_ajuda_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__50menu_ajuda_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__50menu_ajuda_mobile.style.transition='opacity 0s';
				if (me.__50menu_ajuda_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__50menu_ajuda_mobile.style.visibility=me.__50menu_ajuda_mobile.ggVisible?'inherit':'hidden';
					me.__50menu_ajuda_mobile.style.opacity=1;
				}
				else {
					me.__50menu_ajuda_mobile.style.visibility="hidden";
					me.__50menu_ajuda_mobile.style.opacity=0;
				}
			}
		}
		me.__50menu_ajuda_mobile.logicBlock_alpha();
		me.__50menu_ajuda_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__501fundo_mobile=document.createElement('div');
		el.ggId="5.0.1-FUNDO_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(55,55,55,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__501fundo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__501fundo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50menu_ajuda_mobile.appendChild(me.__501fundo_mobile);
		el=me.__502fundo_menu_mobile=document.createElement('div');
		el.ggId="5.0.2-FUNDO_MENU_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #373737;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 580px;';
		hs+='left : calc(50% - ((340px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((580px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 340px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502fundo_menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502fundo_menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5021linha1_mobile=document.createElement('div');
		el.ggId="5.0.2.1-LINHA1_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 137px;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5021linha1_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5021linha1_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__5021linha1_mobile);
		el=me.__5022linha2_mobile=document.createElement('div');
		el.ggId="5.0.2.2-LINHA2_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 83px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5022linha2_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5022linha2_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__5022linha2_mobile);
		el=me.__5023logo_mobile=document.createElement('div');
		els=me.__5023logo_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__5023logo_mobile';
		hs=basePath + 'images/_5023logo_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.3-LOGO_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5023logo_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5023logo_mobile.onclick=function (e) {
			player.setVariableValue('var_menu', !player.getVariableValue('var_menu'));
		}
		me.__5023logo_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__5023logo_mobile);
		el=me.__5024tourvirtual_mobile=document.createElement('div');
		els=me.__5024tourvirtual_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.4-TOURVIRTUAL_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 108px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5024tourvirtual_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("TOUR VIRTUAL 360\xba", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5024tourvirtual_mobile.ggUpdateText();
		el.appendChild(els);
		me.__5024tourvirtual_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5024tourvirtual_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__5024tourvirtual_mobile);
		el=me.__5025instrucoes_mobile=document.createElement('div');
		els=me.__5025instrucoes_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.5-INSTRUCOES_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 13px;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : 60px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5025instrucoes_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("INSTRU\xc7\xd5ES\nDE USO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5025instrucoes_mobile.ggUpdateText();
		el.appendChild(els);
		me.__5025instrucoes_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5025instrucoes_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__5025instrucoes_mobile);
		el=me.__50261ct_menu_mobile=document.createElement('div');
		el.ggId="5.0.2.6.1-CT_MENU_MOBILE";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 358px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((358px + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50261ct_menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50261ct_menu_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_carrousel') == Number("0")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__50261ct_menu_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__50261ct_menu_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__50261ct_menu_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__50261ct_menu_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__50261ct_menu_mobile.style.visibility=me.__50261ct_menu_mobile.ggVisible?'inherit':'hidden';
					me.__50261ct_menu_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__50261ct_menu_mobile.style.opacity == 0.0) { me.__50261ct_menu_mobile.style.visibility="hidden"; } }, 1005);
					me.__50261ct_menu_mobile.style.opacity=0;
				}
			}
		}
		me.__50261ct_menu_mobile.logicBlock_alpha();
		me.__50261ct_menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__502612texto_mobile=document.createElement('div');
		els=me.__502612texto_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.6.1.2-TEXTO_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='bottom : 12px;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__502612texto_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("Clique no logo para esconder ou \nmostrar o Menu", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__502612texto_mobile.ggUpdateText();
		el.appendChild(els);
		me.__502612texto_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502612texto_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50261ct_menu_mobile.appendChild(me.__502612texto_mobile);
		el=me.__502611menu_mobile=document.createElement('div');
		els=me.__502611menu_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__502611menu_mobile';
		hs=basePath + 'images/_502611menu_mobile.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 25px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.6.1.1-MENU_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 290px;';
		hs+='left : calc(50% - ((190px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502611menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502611menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50261ct_menu_mobile.appendChild(me.__502611menu_mobile);
		me.__502fundo_menu_mobile.appendChild(me.__50261ct_menu_mobile);
		el=me.__50262ct_arrasta_mobile=document.createElement('div');
		el.ggId="5.0.2.6.2-CT_ARRASTA_MOBILE";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 358px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((358px + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50262ct_arrasta_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50262ct_arrasta_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_carrousel') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__50262ct_arrasta_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__50262ct_arrasta_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__50262ct_arrasta_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__50262ct_arrasta_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__50262ct_arrasta_mobile.style.visibility=me.__50262ct_arrasta_mobile.ggVisible?'inherit':'hidden';
					me.__50262ct_arrasta_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__50262ct_arrasta_mobile.style.opacity == 0.0) { me.__50262ct_arrasta_mobile.style.visibility="hidden"; } }, 1005);
					me.__50262ct_arrasta_mobile.style.opacity=0;
				}
			}
		}
		me.__50262ct_arrasta_mobile.logicBlock_alpha();
		me.__50262ct_arrasta_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__502622texto_mobile=document.createElement('div');
		els=me.__502622texto_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.6.2.2-TEXTO_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='bottom : 12px;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__502622texto_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("Toque na tela, segure e arraste \npara olhar ao redor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__502622texto_mobile.ggUpdateText();
		el.appendChild(els);
		me.__502622texto_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502622texto_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50262ct_arrasta_mobile.appendChild(me.__502622texto_mobile);
		el=me.__502621arrasta_mobile=document.createElement('div');
		els=me.__502621arrasta_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__502621arrasta_mobile';
		hs=basePath + 'images/_502621arrasta_mobile.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 25px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.6.2.1-ARRASTA_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 290px;';
		hs+='left : calc(50% - ((190px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502621arrasta_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502621arrasta_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50262ct_arrasta_mobile.appendChild(me.__502621arrasta_mobile);
		me.__502fundo_menu_mobile.appendChild(me.__50262ct_arrasta_mobile);
		el=me.__50263ct_nav_menu_mobile=document.createElement('div');
		el.ggId="5.0.2.6.3-CT_NAV_MENU_MOBILE";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 358px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((358px + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50263ct_nav_menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50263ct_nav_menu_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_carrousel') == Number("2")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__50263ct_nav_menu_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__50263ct_nav_menu_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__50263ct_nav_menu_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__50263ct_nav_menu_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__50263ct_nav_menu_mobile.style.visibility=me.__50263ct_nav_menu_mobile.ggVisible?'inherit':'hidden';
					me.__50263ct_nav_menu_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__50263ct_nav_menu_mobile.style.opacity == 0.0) { me.__50263ct_nav_menu_mobile.style.visibility="hidden"; } }, 1005);
					me.__50263ct_nav_menu_mobile.style.opacity=0;
				}
			}
		}
		me.__50263ct_nav_menu_mobile.logicBlock_alpha();
		me.__50263ct_nav_menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__502632texto_mobile=document.createElement('div');
		els=me.__502632texto_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.6.3.2-TEXTO_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='bottom : 12px;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__502632texto_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("Clique nos itens do Menu para navegar \npelos espa\xe7os da academia", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__502632texto_mobile.ggUpdateText();
		el.appendChild(els);
		me.__502632texto_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502632texto_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50263ct_nav_menu_mobile.appendChild(me.__502632texto_mobile);
		el=me.__502631nav_menu_mobile=document.createElement('div');
		els=me.__502631nav_menu_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__502631nav_menu_mobile';
		hs=basePath + 'images/_502631nav_menu_mobile.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 25px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.6.3.1-NAV_MENU_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 290px;';
		hs+='left : calc(50% - ((190px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502631nav_menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502631nav_menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50263ct_nav_menu_mobile.appendChild(me.__502631nav_menu_mobile);
		me.__502fundo_menu_mobile.appendChild(me.__50263ct_nav_menu_mobile);
		el=me.__50264ct_hotspot_mobile=document.createElement('div');
		el.ggId="5.0.2.6.4-CT_HOTSPOT_MOBILE";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 358px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((358px + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50264ct_hotspot_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50264ct_hotspot_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_carrousel') == Number("3")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__50264ct_hotspot_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__50264ct_hotspot_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__50264ct_hotspot_mobile.style.transition='opacity 1000ms ease 0ms';
				if (me.__50264ct_hotspot_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__50264ct_hotspot_mobile.style.visibility=me.__50264ct_hotspot_mobile.ggVisible?'inherit':'hidden';
					me.__50264ct_hotspot_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__50264ct_hotspot_mobile.style.opacity == 0.0) { me.__50264ct_hotspot_mobile.style.visibility="hidden"; } }, 1005);
					me.__50264ct_hotspot_mobile.style.opacity=0;
				}
			}
		}
		me.__50264ct_hotspot_mobile.logicBlock_alpha();
		me.__50264ct_hotspot_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__502642texto_mobile=document.createElement('div');
		els=me.__502642texto_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.2.6.4.2-TEXTO_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text regular";
		el.ggType='text';
		hs ='';
		hs+='bottom : 12px;';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__502642texto_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("Clique nos Hotspots para navegar \npor entre os espa\xe7os", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__502642texto_mobile.ggUpdateText();
		el.appendChild(els);
		me.__502642texto_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502642texto_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50264ct_hotspot_mobile.appendChild(me.__502642texto_mobile);
		el=me.__502641hotspot_mobile=document.createElement('div');
		els=me.__502641hotspot_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__502641hotspot_mobile';
		hs=basePath + 'images/_502641hotspot_mobile.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 25px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.2.6.4.1-HOTSPOT_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 290px;';
		hs+='left : calc(50% - ((190px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__502641hotspot_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__502641hotspot_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__50264ct_hotspot_mobile.appendChild(me.__502641hotspot_mobile);
		me.__502fundo_menu_mobile.appendChild(me.__50264ct_hotspot_mobile);
		el=me.__2027bt_iniciartour_mobile=document.createElement('div');
		els=me.__2027bt_iniciartour_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.2.7-BT_INICIARTOUR_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text semibold";
		el.ggType='text';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='bottom : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2027bt_iniciartour_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("INICIAR O TOUR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2027bt_iniciartour_mobile.ggUpdateText();
		el.appendChild(els);
		me.__2027bt_iniciartour_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2027bt_iniciartour_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_ajuda') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2027bt_iniciartour_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2027bt_iniciartour_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2027bt_iniciartour_mobile.style.transition='opacity 1000ms ease 0ms, background-color 1000ms ease 0ms';
				if (me.__2027bt_iniciartour_mobile.ggCurrentLogicStateVisible == 0) {
					me.__2027bt_iniciartour_mobile.style.visibility="hidden";
					me.__2027bt_iniciartour_mobile.ggVisible=false;
				}
				else {
					me.__2027bt_iniciartour_mobile.style.visibility=(Number(me.__2027bt_iniciartour_mobile.style.opacity)>0||!me.__2027bt_iniciartour_mobile.style.opacity)?'inherit':'hidden';
					me.__2027bt_iniciartour_mobile.ggVisible=true;
				}
			}
		}
		me.__2027bt_iniciartour_mobile.logicBlock_visible();
		me.__2027bt_iniciartour_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_carrou_bt') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__2027bt_iniciartour_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__2027bt_iniciartour_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__2027bt_iniciartour_mobile.style.transition='opacity 1000ms ease 0ms, background-color 1000ms ease 0ms';
				if (me.__2027bt_iniciartour_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__2027bt_iniciartour_mobile.style.visibility=me.__2027bt_iniciartour_mobile.ggVisible?'inherit':'hidden';
					me.__2027bt_iniciartour_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__2027bt_iniciartour_mobile.style.opacity == 0.0) { me.__2027bt_iniciartour_mobile.style.visibility="hidden"; } }, 1005);
					me.__2027bt_iniciartour_mobile.style.opacity=0;
				}
			}
		}
		me.__2027bt_iniciartour_mobile.logicBlock_alpha();
		me.__2027bt_iniciartour_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2027bt_iniciartour_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2027bt_iniciartour_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2027bt_iniciartour_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2027bt_iniciartour_mobile.style.transition='opacity 1000ms ease 0ms, background-color 1000ms ease 0ms';
				if (me.__2027bt_iniciartour_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2027bt_iniciartour_mobile.style.backgroundColor="rgba(178,0,255,1)";
				}
				else {
					me.__2027bt_iniciartour_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__2027bt_iniciartour_mobile.logicBlock_backgroundcolor();
		me.__2027bt_iniciartour_mobile.onclick=function (e) {
			if (player.transitionsDisabled) {
				me.__50menu_ajuda_mobile.style.transition='none';
			} else {
				me.__50menu_ajuda_mobile.style.transition='all 0ms ease 0ms';
			}
			me.__50menu_ajuda_mobile.style.opacity='0';
			me.__50menu_ajuda_mobile.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me.__2027bt_iniciartour_mobile.style.transition='none';
			} else {
				me.__2027bt_iniciartour_mobile.style.transition='all 500ms ease 1000ms';
			}
			me.__2027bt_iniciartour_mobile.style.opacity='0';
			me.__2027bt_iniciartour_mobile.style.visibility='hidden';
			player.setVariableValue('var_inicio', true);
		}
		me.__2027bt_iniciartour_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_2027bt_iniciartour_mobile']=true;
			me.__2027bt_iniciartour_mobile.logicBlock_backgroundcolor();
		}
		me.__2027bt_iniciartour_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_2027bt_iniciartour_mobile']=false;
			me.__2027bt_iniciartour_mobile.logicBlock_backgroundcolor();
		}
		me.__2027bt_iniciartour_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__2027bt_iniciartour_mobile);
		el=me.__2028bt_voltaraotour_mobile=document.createElement('div');
		els=me.__2028bt_voltaraotour_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.2.8-BT_VOLTARAOTOUR_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text semibold";
		el.ggType='text';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='bottom : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2028bt_voltaraotour_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("VOLTAR AO TOUR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2028bt_voltaraotour_mobile.ggUpdateText();
		el.appendChild(els);
		me.__2028bt_voltaraotour_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2028bt_voltaraotour_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_ajuda') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__2028bt_voltaraotour_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__2028bt_voltaraotour_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__2028bt_voltaraotour_mobile.style.transition='opacity 0s, background-color 1000ms ease 0ms';
				if (me.__2028bt_voltaraotour_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__2028bt_voltaraotour_mobile.style.visibility=me.__2028bt_voltaraotour_mobile.ggVisible?'inherit':'hidden';
					me.__2028bt_voltaraotour_mobile.style.opacity=1;
				}
				else {
					me.__2028bt_voltaraotour_mobile.style.visibility="hidden";
					me.__2028bt_voltaraotour_mobile.style.opacity=0;
				}
			}
		}
		me.__2028bt_voltaraotour_mobile.logicBlock_alpha();
		me.__2028bt_voltaraotour_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2028bt_voltaraotour_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2028bt_voltaraotour_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2028bt_voltaraotour_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2028bt_voltaraotour_mobile.style.transition='opacity 0s, background-color 1000ms ease 0ms';
				if (me.__2028bt_voltaraotour_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2028bt_voltaraotour_mobile.style.backgroundColor="rgba(178,0,255,1)";
				}
				else {
					me.__2028bt_voltaraotour_mobile.style.backgroundColor="rgba(153,0,255,1)";
				}
			}
		}
		me.__2028bt_voltaraotour_mobile.logicBlock_backgroundcolor();
		me.__2028bt_voltaraotour_mobile.onclick=function (e) {
			player.setVariableValue('var_ajuda', false);
		}
		me.__2028bt_voltaraotour_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_2028bt_voltaraotour_mobile']=true;
			me.__2028bt_voltaraotour_mobile.logicBlock_backgroundcolor();
		}
		me.__2028bt_voltaraotour_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_2028bt_voltaraotour_mobile']=false;
			me.__2028bt_voltaraotour_mobile.logicBlock_backgroundcolor();
		}
		me.__2028bt_voltaraotour_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__2028bt_voltaraotour_mobile);
		el=me.__503seta_direita=document.createElement('div');
		els=me.__503seta_direita__img=document.createElement('img');
		els.className='ggskin ggskin__503seta_direita';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAABICAYAAACA/2cKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJMSURBVHgB5ZrfTQJBEIdnic/YgFZgBVZgA0oBhgJOLUAsAORd4rtoAdqAYgFKAWoDNIDzM0dyEoTbuZnZJX7JZOFuge8m3J+dXaKS+Xy+z9HjmHJ8cUw4rjn2KBdYplMRXA5sP6HEBGSS20mNvkUI4Z4S0eI4r9l3mDKzyOiU23bEZ5JkFhmNkQRJMgvRT4rHXRaidyTDVRaiI5JlFUC2Sw60+MSYcXtKctkrlr0gY8LiRXk9feCQ3okGfNB9MiJU3+QsG5Y35CobVm3MUTb8tSM32bBuZ06yYVOHXGQ3ioIcZGuJgtSytUVBStkoUZBKNloUpJAViQJvWb'+
			'Eo8JRtJAq8ZBuLAg9ZFVFgLasmChRkRyx7uWpHixThH/ng5pjjjWR0Ue9a+d1kAP8YagXI7AHJGPNBn1U3mIgCbVkzUaApayoKtGTNRYGCbOEiChrKvriJggayM9Xr6CbK8tE7xdP2zuiQG0kF8Nktow0kwXiHjCn/l7cchyTjCaV404xWTh6p5JijwIv/fQvdiocSC0mg/eBsIgk0hyJmkkBrcGcqCTSGy+aSoNF1tDKYM5UEKUs6NyzZq9s5VZGsz5KDmA+kKDtGSwLvQq5IEniWxsWSwGuyoZEk8Ji+aSwJrCfEVCSB5RSjmiSwmrRVlQQW0+DqkkB7YYGJJNBcqmEmCX5Ec5cEYRskAZ5HjyhzSQDRDslwkwQQ3aV4XCWBZCjiLgkg+hjRv0ghCRaLCGc1+qZdOlyZbVsnm1TyF+Xydixnf62sFh9wSIfCqnwD'+
			'UCGSC+2mOF0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.3-SETA_DIREITA";
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 18px;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 20px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__503seta_direita.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__503seta_direita.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_carrousel') < Number("3")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__503seta_direita.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__503seta_direita.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__503seta_direita.style.transition='opacity 0s';
				if (me.__503seta_direita.ggCurrentLogicStateAlpha == 0) {
					me.__503seta_direita.style.visibility=me.__503seta_direita.ggVisible?'inherit':'hidden';
					me.__503seta_direita.style.opacity=1;
				}
				else {
					me.__503seta_direita.style.visibility="hidden";
					me.__503seta_direita.style.opacity=0;
				}
			}
		}
		me.__503seta_direita.logicBlock_alpha();
		me.__503seta_direita.onclick=function (e) {
			player.setVariableValue('var_carrousel', player.getVariableValue('var_carrousel') + Number("1.00"));
			if (
				(
					((player.getVariableValue('var_carrousel') == Number("3")))
				)
			) {
				player.setVariableValue('var_carrou_bt', true);
			}
		}
		me.__503seta_direita.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__503seta_direita);
		el=me.__503seta_esquerda=document.createElement('div');
		els=me.__503seta_esquerda__img=document.createElement('img');
		els.className='ggskin ggskin__503seta_esquerda';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAABICAYAAACA/2cKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgB1drbUTJBEIbhXrzwzgggAgIwAjUBIQA1AJQEJADEACwDQAMgAksDoAwATYAEsD/ctVBAdnq6e4a3av4t/xNPjcftHaIMWiwWbV4jXu+8Pnm9lm83q79TUOIY0+XLaMsfz3mdF0UxTQrdgawC9uSAElUTiQ7xS5IdZWSfLzcB/2TWIOcEyGWuUCmSm7tBI5Bo7AKNRM54Tcw/mRSQ+Dr6YQrVQuINM6gmEplAtZFIHWqBRKpQKyRSg1oikQrUGomioR5IFAX1QiIx1BOJRFBvJAqGpkCiICgjB3y5IlliJKoNZeQ9Xzoka8rrQopEtaAKSOzknC'+
			'LaCc0Bif6F5oJEW6E5IdFGaG5ItAbNEYl+QXNFouXtMgOPckai5Y4y8pEvZyTrhdelJRI1yqmaFDlmYMcaifCu75IsIK/JqQKjaArPFYmwo5J3G2buR+QYoFMKr83r2RML6JhkuWIb/LEG6BPJcsP+fGfaiy/4VTlj9+aHkrXROL9Ij+I/Zpuk3MYZfol9IFkm2F23Irh/75OsqNvjv9W5ucsCW/d2OTk2ZACRFBs60kmGlQzJkmClY0d3bMwg1xUbOxp3w2o8bHDBaj2+McdqPhAzxWo/YjTDWjy0NcFaPQZXx1oeLFDFWh/VUMOantLhF7njy5Bktej7TqG9/L/IIX4xPEQbkCzs7Knb2byAQ4ObGroeIozAztxPO0qxqY5lhmLn7scyUTmYCxkET5LsaFXAzh4n2dGqlZ3dNqvC7/e0hhjR8c62yuPsb+Xxdhxz'+
			'v10dC30B3auyiPdihwEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.3-SETA_ESQUERDA";
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 18px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 20px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__503seta_esquerda.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__503seta_esquerda.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_carrousel') > Number("0")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__503seta_esquerda.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__503seta_esquerda.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__503seta_esquerda.style.transition='opacity 1000ms ease 0ms';
				if (me.__503seta_esquerda.ggCurrentLogicStateAlpha == 0) {
					me.__503seta_esquerda.style.visibility=me.__503seta_esquerda.ggVisible?'inherit':'hidden';
					me.__503seta_esquerda.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__503seta_esquerda.style.opacity == 0.0) { me.__503seta_esquerda.style.visibility="hidden"; } }, 1005);
					me.__503seta_esquerda.style.opacity=0;
				}
			}
		}
		me.__503seta_esquerda.logicBlock_alpha();
		me.__503seta_esquerda.onclick=function (e) {
			player.setVariableValue('var_carrousel', player.getVariableValue('var_carrousel') - Number("1.00"));
		}
		me.__503seta_esquerda.ggUpdatePosition=function (useTransition) {
		}
		me.__502fundo_menu_mobile.appendChild(me.__503seta_esquerda);
		me.__50menu_ajuda_mobile.appendChild(me.__502fundo_menu_mobile);
		el=me.__504seta_esquerda=document.createElement('div');
		els=me.__504seta_esquerda__img=document.createElement('img');
		els.className='ggskin ggskin__504seta_esquerda';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAABICAYAAACA/2cKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgB1drbUTJBEIbhXrzwzgggAgIwAjUBIQA1AJQEJADEACwDQAMgAksDoAwATYAEsD/ctVBAdnq6e4a3av4t/xNPjcftHaIMWiwWbV4jXu+8Pnm9lm83q79TUOIY0+XLaMsfz3mdF0UxTQrdgawC9uSAElUTiQ7xS5IdZWSfLzcB/2TWIOcEyGWuUCmSm7tBI5Bo7AKNRM54Tcw/mRSQ+Dr6YQrVQuINM6gmEplAtZFIHWqBRKpQKyRSg1oikQrUGomioR5IFAX1QiIx1BOJRFBvJAqGpkCiICgjB3y5IlliJKoNZeQ9Xzoka8rrQopEtaAKSOzknC'+
			'LaCc0Bif6F5oJEW6E5IdFGaG5ItAbNEYl+QXNFouXtMgOPckai5Y4y8pEvZyTrhdelJRI1yqmaFDlmYMcaifCu75IsIK/JqQKjaArPFYmwo5J3G2buR+QYoFMKr83r2RML6JhkuWIb/LEG6BPJcsP+fGfaiy/4VTlj9+aHkrXROL9Ij+I/Zpuk3MYZfol9IFkm2F23Irh/75OsqNvjv9W5ucsCW/d2OTk2ZACRFBs60kmGlQzJkmClY0d3bMwg1xUbOxp3w2o8bHDBaj2+McdqPhAzxWo/YjTDWjy0NcFaPQZXx1oeLFDFWh/VUMOantLhF7njy5Bktej7TqG9/L/IIX4xPEQbkCzs7Knb2byAQ4ObGroeIozAztxPO0qxqY5lhmLn7scyUTmYCxkET5LsaFXAzh4n2dGqlZ3dNqvC7/e0hhjR8c62yuPsb+Xxdhxz'+
			'v10dC30B3auyiPdihwEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.4-SETA_ESQUERDA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 72px;';
		hs+='left : 12px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 274px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__504seta_esquerda.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__504seta_esquerda.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_carrousel') > Number("0")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__504seta_esquerda.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__504seta_esquerda.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__504seta_esquerda.style.transition='opacity 1000ms ease 0ms';
				if (me.__504seta_esquerda.ggCurrentLogicStateAlpha == 0) {
					me.__504seta_esquerda.style.visibility=me.__504seta_esquerda.ggVisible?'inherit':'hidden';
					me.__504seta_esquerda.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__504seta_esquerda.style.opacity == 0.0) { me.__504seta_esquerda.style.visibility="hidden"; } }, 1005);
					me.__504seta_esquerda.style.opacity=0;
				}
			}
		}
		me.__504seta_esquerda.logicBlock_alpha();
		me.__504seta_esquerda.onclick=function (e) {
			player.setVariableValue('var_carrousel', player.getVariableValue('var_carrousel') - Number("1.00"));
		}
		me.__504seta_esquerda.ggUpdatePosition=function (useTransition) {
		}
		me.__50menu_ajuda_mobile.appendChild(me.__504seta_esquerda);
		me.divSkin.appendChild(me.__50menu_ajuda_mobile);
		el=me._telainicial=document.createElement('div');
		el.ggId="telainicial";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._telainicial.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._telainicial.ggUpdatePosition=function (useTransition) {
		}
		el=me._timeranimation=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=false;
		el.ggTimeout=3600000;
		el.ggId="timer-animation";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 299px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timeranimation.ggIsActive=function() {
			return (me._timeranimation.ggTimestamp + me._timeranimation.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timeranimation.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timeranimation.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timeranimation.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timeranimation.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timeranimation.style.transition='opacity 1000ms ease 0ms';
				if (me._timeranimation.ggCurrentLogicStateVisible == 0) {
					me._timeranimation.style.visibility="hidden";
					me._timeranimation.ggVisible=false;
				}
				else {
					me._timeranimation.style.visibility="hidden";
					me._timeranimation.ggVisible=false;
				}
			}
		}
		me._timeranimation.logicBlock_visible();
		me._timeranimation.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getProjection() == 4))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._timeranimation.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._timeranimation.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._timeranimation.style.transition='opacity 1000ms ease 0ms';
				if (me._timeranimation.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._timeranimation.style.opacity == 0.0) { me._timeranimation.style.visibility="hidden"; } }, 1005);
					me._timeranimation.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._timeranimation.style.opacity == 0.0) { me._timeranimation.style.visibility="hidden"; } }, 1005);
					me._timeranimation.style.opacity=0;
				}
			}
		}
		me._timeranimation.logicBlock_alpha();
		me._timeranimation.ggDeactivate=function () {
			if (
				(
					((player.nodeVisited(me._timeranimation.ggElementNodeId()) == false))
				)
			) {
				me._loading.style.transition='none';
				me._loading.style.visibility='hidden';
				me._loading.ggVisible=false;
			}
			if (player.transitionsDisabled) {
				me._timeranimation.style.transition='none';
			} else {
				me._timeranimation.style.transition='all 1000ms ease 0ms';
			}
			me._timeranimation.style.opacity='0';
			me._timeranimation.style.visibility='hidden';
		}
		me._timeranimation.ggCurrentLogicStateVisible = -1;
		me._timeranimation.ggCurrentLogicStateAlpha = -1;
		me._timeranimation.ggUpdateConditionTimer=function () {
			me._timeranimation.logicBlock_visible();
		}
		me._timeranimation.ggUpdatePosition=function (useTransition) {
		}
		me._telainicial.appendChild(me._timeranimation);
		el=me._blackscreentint=document.createElement('div');
		el.ggId="black-screen-tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: rgba(33, 33, 33, 0.89); backdrop-filter: blur(13.8px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._blackscreentint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._blackscreentint.ggUpdatePosition=function (useTransition) {
		}
		me._telainicial.appendChild(me._blackscreentint);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 80px);';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._loading.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._loading.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._loading.style.transition='left 0s, top 0s';
				if (me._loading.ggCurrentLogicStatePosition == 0) {
					me._loading.style.left = 'calc(50% - (210px / 2))';
					me._loading.style.top = 'calc(50% - (60px / 2) - (0px / 2) + 40px)';
				}
				else {
					me._loading.style.left='calc(50% - ((210px + 0px) / 2) + 0px)';
					me._loading.style.top='calc(50% - ((60px + 0px) / 2) + 80px)';
				}
			}
		}
		me._loading.logicBlock_position();
		me._loading.ggUpdatePosition=function (useTransition) {
		}
		me._telainicial.appendChild(me._loading);
		el=me._ativar_musica=document.createElement('div');
		el.ggId="ativar_musica";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 108px;';
		hs+='left : calc(50% - ((270px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((108px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 270px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ativar_musica.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ativar_musica.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ativar_musica.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ativar_musica.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ativar_musica.style.transition='opacity 1000ms ease 3000ms';
				if (me._ativar_musica.ggCurrentLogicStateAlpha == 0) {
					me._ativar_musica.style.visibility=me._ativar_musica.ggVisible?'inherit':'hidden';
					me._ativar_musica.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ativar_musica.style.opacity == 0.0) { me._ativar_musica.style.visibility="hidden"; } }, 4005);
					me._ativar_musica.style.opacity=0;
				}
			}
		}
		me._ativar_musica.logicBlock_alpha();
		me._ativar_musica.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_ativar=document.createElement('div');
		els=me._texto_ativar__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TEXTO ATIVAR";
		el.ggDx=0;
		el.ggDy=-24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_bold";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 24px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 2px 3px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 24px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._texto_ativar.ggUpdateText=function() {
			var params = [];
			var hs = player._("ATIVAR SOM?", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._texto_ativar.ggUpdateText();
		el.appendChild(els);
		me._texto_ativar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_ativar.ggUpdatePosition=function (useTransition) {
		}
		me._ativar_musica.appendChild(me._texto_ativar);
		el=me._bt_sim=document.createElement('div');
		els=me._bt_sim__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bt_sim";
		el.ggDx=-56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(136,136,136,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95px + 0px) / 2) - 56px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 95px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._bt_sim.ggUpdateText=function() {
			var params = [];
			var hs = player._("SIM", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._bt_sim.ggUpdateText();
		el.appendChild(els);
		me._bt_sim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bt_sim.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bt_sim'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bt_sim.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bt_sim.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bt_sim.style.transition='background-color 500ms ease 0ms';
				if (me._bt_sim.ggCurrentLogicStateBackgroundColor == 0) {
					me._bt_sim.style.backgroundColor="rgba(89,89,89,0.784314)";
				}
				else {
					me._bt_sim.style.backgroundColor="rgba(136,136,136,0.784314)";
				}
			}
		}
		me._bt_sim.logicBlock_backgroundcolor();
		me._bt_sim.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._blackscreentint.style.transition='none';
			} else {
				me._blackscreentint.style.transition='all 4000ms ease 0ms';
			}
			me._blackscreentint.style.opacity='0';
			me._blackscreentint.style.visibility='hidden';
			player.moveToDefaultViewEx(2.5,0);
			if (player.transitionsDisabled) {
				me._bt_sim.style.transition='none';
			} else {
				me._bt_sim.style.transition='all 1000ms ease 0ms';
			}
			me._bt_sim.style.opacity='0';
			me._bt_sim.style.visibility='hidden';
			player.setVariableValue('vis_inicial', true);
				player.playSound("locucao","1");
				player.playSound("backgroundmusic","5");
			me._ativar_musica.style.transition='none';
			me._ativar_musica.style.visibility='hidden';
			me._ativar_musica.ggVisible=false;
			player.setVariableValue('var_audio', true);
		}
		me._bt_sim.onmouseenter=function (e) {
			me.elementMouseOver['bt_sim']=true;
			me._bt_sim.logicBlock_backgroundcolor();
		}
		me._bt_sim.onmouseleave=function (e) {
			me.elementMouseOver['bt_sim']=false;
			me._bt_sim.logicBlock_backgroundcolor();
		}
		me._bt_sim.ggUpdatePosition=function (useTransition) {
		}
		me._ativar_musica.appendChild(me._bt_sim);
		el=me._bt_no=document.createElement('div');
		els=me._bt_no__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bt_n\xe3o";
		el.ggDx=56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(136,136,136,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95px + 0px) / 2) + 56px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 95px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._bt_no.ggUpdateText=function() {
			var params = [];
			var hs = player._("N\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._bt_no.ggUpdateText();
		el.appendChild(els);
		me._bt_no.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bt_no.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bt_no'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bt_no.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bt_no.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bt_no.style.transition='background-color 500ms ease 0ms';
				if (me._bt_no.ggCurrentLogicStateBackgroundColor == 0) {
					me._bt_no.style.backgroundColor="rgba(89,89,89,0.784314)";
				}
				else {
					me._bt_no.style.backgroundColor="rgba(136,136,136,0.784314)";
				}
			}
		}
		me._bt_no.logicBlock_backgroundcolor();
		me._bt_no.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._blackscreentint.style.transition='none';
			} else {
				me._blackscreentint.style.transition='all 4000ms ease 0ms';
			}
			me._blackscreentint.style.opacity='0';
			me._blackscreentint.style.visibility='hidden';
			player.moveToDefaultViewEx(2.5,0);
			if (player.transitionsDisabled) {
				me._bt_no.style.transition='none';
			} else {
				me._bt_no.style.transition='all 1000ms ease 0ms';
			}
			me._bt_no.style.opacity='0';
			me._bt_no.style.visibility='hidden';
			player.setVariableValue('vis_inicial', true);
				player.playSound("locucao","1");
				player.playSound("backgroundmusic","5");
			player.setVolume("_main",0);
			me._ativar_musica.style.transition='none';
			me._ativar_musica.style.visibility='hidden';
			me._ativar_musica.ggVisible=false;
			player.setVariableValue('var_audio', false);
		}
		me._bt_no.onmouseenter=function (e) {
			me.elementMouseOver['bt_no']=true;
			me._bt_no.logicBlock_backgroundcolor();
		}
		me._bt_no.onmouseleave=function (e) {
			me.elementMouseOver['bt_no']=false;
			me._bt_no.logicBlock_backgroundcolor();
		}
		me._bt_no.ggUpdatePosition=function (useTransition) {
		}
		me._ativar_musica.appendChild(me._bt_no);
		me._telainicial.appendChild(me._ativar_musica);
		me.divSkin.appendChild(me._telainicial);
		el=me._hidemenu=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=2000;
		el.ggId="hide-menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 287px;';
		hs+='position : absolute;';
		hs+='top : 127px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hidemenu.ggIsActive=function() {
			return (me._hidemenu.ggTimestamp + me._hidemenu.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hidemenu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hidemenu.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hidemenu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hidemenu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hidemenu.style.transition='';
				if (me._hidemenu.ggCurrentLogicStateVisible == 0) {
					me._hidemenu.style.visibility="hidden";
					me._hidemenu.ggVisible=false;
				}
				else {
					me._hidemenu.style.visibility=(Number(me._hidemenu.style.opacity)>0||!me._hidemenu.style.opacity)?'inherit':'hidden';
					me._hidemenu.ggVisible=true;
				}
			}
		}
		me._hidemenu.logicBlock_visible();
		me._hidemenu.ggActivate=function () {
			if (
				(
					((player.getVariableValue('var_hide') == false))
				)
			) {
				player.setVariableValue('var_menu', true);
			}
		}
		me._hidemenu.ggDeactivate=function () {
			if (
				(
					((player.getVariableValue('var_hide') == false))
				)
			) {
				player.setVariableValue('var_menu', false);
			}
		}
		me._hidemenu.ggCurrentLogicStateVisible = -1;
		me._hidemenu.ggUpdateConditionTimer=function () {
			me._hidemenu.logicBlock_visible();
		}
		me._hidemenu.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._hidemenu);
		me.__10menu_principal_desk.logicBlock_visible();
		me.__10menu_principal_desk.logicBlock_alpha();
		me.elementMouseOver['_10311bt_fachada']=false;
		me.__103110fundo.logicBlock_visible();
		me.__103112fachada.logicBlock_visible();
		me.__103111rec_roxo.logicBlock_size();
		me.__103111rec_roxo.logicBlock_backgroundcolor();
		me.__103113ic_amarelo.logicBlock_position();
		me.__103113ic_amarelo.logicBlock_alpha();
		me.__103114rec_amarelo.logicBlock_size();
		me.__103114rec_amarelo.logicBlock_alpha();
		me.__103115ic_roxo.logicBlock_position();
		me.__103115ic_roxo.logicBlock_size();
		me.__103115ic_roxo.logicBlock_alpha();
		me.elementMouseOver['_10411bt_recepcao']=false;
		me.__104110fundo.logicBlock_visible();
		me.__104112recepcao.logicBlock_visible();
		me.__104111rec_roxo.logicBlock_size();
		me.__104111rec_roxo.logicBlock_backgroundcolor();
		me.__104113ic_amarelo.logicBlock_position();
		me.__104113ic_amarelo.logicBlock_alpha();
		me.__104114rec_amarelo.logicBlock_size();
		me.__104114rec_amarelo.logicBlock_alpha();
		me.__104115ic_roxo.logicBlock_position();
		me.__104115ic_roxo.logicBlock_size();
		me.__104115ic_roxo.logicBlock_alpha();
		me.elementMouseOver['_10511bt_musculacao']=false;
		me.__105110fundo.logicBlock_visible();
		me.__105112musculacao.logicBlock_visible();
		me.__105111rec_roxo.logicBlock_size();
		me.__105111rec_roxo.logicBlock_backgroundcolor();
		me.__105113ic_amarelo.logicBlock_position();
		me.__105113ic_amarelo.logicBlock_alpha();
		me.__105114rec_amarelo.logicBlock_size();
		me.__105114rec_amarelo.logicBlock_alpha();
		me.__105115ic_roxo.logicBlock_position();
		me.__105115ic_roxo.logicBlock_alpha();
		me.elementMouseOver['_10611bt_blackhiit']=false;
		me.__106110fundo.logicBlock_visible();
		me.__106112blackhiit.logicBlock_visible();
		me.__106111rec_roxo.logicBlock_size();
		me.__106111rec_roxo.logicBlock_backgroundcolor();
		me.__106113ic_amarelo.logicBlock_position();
		me.__106113ic_amarelo.logicBlock_alpha();
		me.__106114rec_amarelo.logicBlock_size();
		me.__106114rec_amarelo.logicBlock_alpha();
		me.__106115ic_roxo.logicBlock_position();
		me.__106115ic_roxo.logicBlock_size();
		me.__106115ic_roxo.logicBlock_alpha();
		me.elementMouseOver['_10711bt_cardio']=false;
		me.__107110fundo.logicBlock_visible();
		me.__107112cardio.logicBlock_visible();
		me.__107111rec_roxo.logicBlock_size();
		me.__107111rec_roxo.logicBlock_backgroundcolor();
		me.__107113ic_amarelo.logicBlock_position();
		me.__107113ic_amarelo.logicBlock_alpha();
		me.__107114rec_amarelo.logicBlock_size();
		me.__107114rec_amarelo.logicBlock_alpha();
		me.__107115ic_roxo.logicBlock_position();
		me.__107115ic_roxo.logicBlock_size();
		me.__107115ic_roxo.logicBlock_alpha();
		me.elementMouseOver['_10811bt_sala_spinning']=false;
		me.__108110fundo.logicBlock_visible();
		me.__108112sala_spinning.logicBlock_visible();
		me.__108111rec_roxo.logicBlock_size();
		me.__108111rec_roxo.logicBlock_backgroundcolor();
		me.__108113ic_amarelo.logicBlock_position();
		me.__108113ic_amarelo.logicBlock_alpha();
		me.__108114rec_amarelo.logicBlock_size();
		me.__108114rec_amarelo.logicBlock_alpha();
		me.__108115ic_roxo.logicBlock_position();
		me.__108115ic_roxo.logicBlock_size();
		me.__108115ic_roxo.logicBlock_alpha();
		me.elementMouseOver['_10911bt_sala_multi']=false;
		me.__109110fundo.logicBlock_visible();
		me.__109112sala_multi.logicBlock_visible();
		me.__109111rec_roxo.logicBlock_size();
		me.__109111rec_roxo.logicBlock_backgroundcolor();
		me.__109113ic_amarelo.logicBlock_position();
		me.__109113ic_amarelo.logicBlock_alpha();
		me.__109114rec_amarelo.logicBlock_size();
		me.__109114rec_amarelo.logicBlock_alpha();
		me.__109115ic_roxo.logicBlock_position();
		me.__109115ic_roxo.logicBlock_alpha();
		me.elementMouseOver['_101011bt_vestiarios']=false;
		me.__1010110fundo.logicBlock_visible();
		me.__1010112vestiarios.logicBlock_visible();
		me.__1010111rec_roxo.logicBlock_size();
		me.__1010111rec_roxo.logicBlock_backgroundcolor();
		me.__1010113ic_amarelo.logicBlock_position();
		me.__1010113ic_amarelo.logicBlock_alpha();
		me.__1010114rec_amarelo.logicBlock_size();
		me.__1010114rec_amarelo.logicBlock_alpha();
		me.__1010115ic_roxo.logicBlock_position();
		me.__1010115ic_roxo.logicBlock_alpha();
		me.elementMouseOver['_101111bt_estacionamento']=false;
		me.__1011110fundo.logicBlock_visible();
		me.__1011112estacionamento.logicBlock_visible();
		me.__1011111rec_roxo.logicBlock_size();
		me.__1011111rec_roxo.logicBlock_backgroundcolor();
		me.__1011113ic_amarelo.logicBlock_position();
		me.__1011113ic_amarelo.logicBlock_alpha();
		me.__1011114rec_amarelo.logicBlock_size();
		me.__1011114rec_amarelo.logicBlock_alpha();
		me.__1011115ic_roxo.logicBlock_position();
		me.__1011115ic_roxo.logicBlock_alpha();
		me.__10menu_principal_mobile.logicBlock_visible();
		me.__10menu_principal_mobile.logicBlock_alpha();
		me.elementMouseOver['_10311bt_fachada_mobile']=false;
		me.__103110fundo_mobile.logicBlock_visible();
		me.__103112fachada_mobile.logicBlock_visible();
		me.__103111rec_roxo_mobile.logicBlock_size();
		me.__103111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__103113ic_amarelo_mobile.logicBlock_position();
		me.__103113ic_amarelo_mobile.logicBlock_alpha();
		me.__103114rec_amarelo_mobile.logicBlock_size();
		me.__103114rec_amarelo_mobile.logicBlock_alpha();
		me.__103115ic_roxo_mobile.logicBlock_position();
		me.__103115ic_roxo_mobile.logicBlock_size();
		me.__103115ic_roxo_mobile.logicBlock_alpha();
		me.elementMouseOver['_10411bt_recepcao_mobile']=false;
		me.__104110fundo_mobile.logicBlock_visible();
		me.__104112recepcao_mobile.logicBlock_visible();
		me.__104111rec_roxo_mobile.logicBlock_size();
		me.__104111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__104113ic_amarelo_mobile.logicBlock_position();
		me.__104113ic_amarelo_mobile.logicBlock_alpha();
		me.__104114rec_amarelo_mobile.logicBlock_size();
		me.__104114rec_amarelo_mobile.logicBlock_alpha();
		me.__104115ic_roxo_mobile.logicBlock_position();
		me.__104115ic_roxo_mobile.logicBlock_size();
		me.__104115ic_roxo_mobile.logicBlock_alpha();
		me.elementMouseOver['_10511bt_musculacao_mobile']=false;
		me.__105110fundo_mobile.logicBlock_visible();
		me.__105112musculacao_mobile.logicBlock_visible();
		me.__105111rec_roxo_mobile.logicBlock_size();
		me.__105111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__105113ic_amarelo_mobile.logicBlock_position();
		me.__105113ic_amarelo_mobile.logicBlock_alpha();
		me.__105114rec_amarelo_mobile.logicBlock_size();
		me.__105114rec_amarelo_mobile.logicBlock_alpha();
		me.__105115ic_roxo_mobile.logicBlock_position();
		me.__105115ic_roxo_mobile.logicBlock_alpha();
		me.elementMouseOver['_10611bt_blackhiit_mobile']=false;
		me.__106110fundo_mobile.logicBlock_visible();
		me.__106112blackhiit_mobile.logicBlock_visible();
		me.__106111rec_roxo_mobile.logicBlock_size();
		me.__106111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__106113ic_amarelo_mobile.logicBlock_position();
		me.__106113ic_amarelo_mobile.logicBlock_alpha();
		me.__106114rec_amarelo_mobile.logicBlock_size();
		me.__106114rec_amarelo_mobile.logicBlock_alpha();
		me.__106115ic_roxo_mobile.logicBlock_position();
		me.__106115ic_roxo_mobile.logicBlock_size();
		me.__106115ic_roxo_mobile.logicBlock_alpha();
		me.elementMouseOver['_10711bt_cardio_mobile']=false;
		me.__107110fundo_mobile.logicBlock_visible();
		me.__107112cardio_mobile.logicBlock_visible();
		me.__107111rec_roxo_mobile.logicBlock_size();
		me.__107111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__107113ic_amarelo_mobile.logicBlock_position();
		me.__107113ic_amarelo_mobile.logicBlock_alpha();
		me.__107114rec_amarelo_mobile.logicBlock_size();
		me.__107114rec_amarelo_mobile.logicBlock_alpha();
		me.__107115ic_roxo_mobile.logicBlock_position();
		me.__107115ic_roxo_mobile.logicBlock_size();
		me.__107115ic_roxo_mobile.logicBlock_alpha();
		me.elementMouseOver['_10811bt_sala_spinning_mobile']=false;
		me.__108110fundo_mobile.logicBlock_visible();
		me.__108112sala_spinning_mobile.logicBlock_visible();
		me.__108111rec_roxo_mobile.logicBlock_size();
		me.__108111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__108113ic_amarelo_mobile.logicBlock_position();
		me.__108113ic_amarelo_mobile.logicBlock_alpha();
		me.__108114rec_amarelo_mobile.logicBlock_size();
		me.__108114rec_amarelo_mobile.logicBlock_alpha();
		me.__108115ic_roxo_mobile.logicBlock_position();
		me.__108115ic_roxo_mobile.logicBlock_size();
		me.__108115ic_roxo_mobile.logicBlock_alpha();
		me.elementMouseOver['_10911bt_sala_multi_mobile']=false;
		me.__109110fundo_mobile.logicBlock_visible();
		me.__109112sala_multi_mobile.logicBlock_visible();
		me.__109111rec_roxo_mobile.logicBlock_size();
		me.__109111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__109113ic_amarelo_mobile.logicBlock_position();
		me.__109113ic_amarelo_mobile.logicBlock_alpha();
		me.__109114rec_amarelo_mobile.logicBlock_size();
		me.__109114rec_amarelo_mobile.logicBlock_alpha();
		me.__109115ic_roxo_mobile.logicBlock_position();
		me.__109115ic_roxo_mobile.logicBlock_alpha();
		me.elementMouseOver['_101011bt_vestiarios_mobile']=false;
		me.__1010110fundo_mobile.logicBlock_visible();
		me.__1010112vestiarios_mobile.logicBlock_visible();
		me.__1010111rec_roxo_mobile.logicBlock_size();
		me.__1010111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__1010113ic_amarelo_mobile.logicBlock_position();
		me.__1010113ic_amarelo_mobile.logicBlock_alpha();
		me.__1010114rec_amarelo_mobile.logicBlock_size();
		me.__1010114rec_amarelo_mobile.logicBlock_alpha();
		me.__1010115ic_roxo_mobile.logicBlock_position();
		me.__1010115ic_roxo_mobile.logicBlock_alpha();
		me.elementMouseOver['_101111bt_estacionamento_mobile']=false;
		me.__1011110fundo_mobile.logicBlock_visible();
		me.__1011112estacionamento_mobile.logicBlock_visible();
		me.__1011111rec_roxo_mobile.logicBlock_size();
		me.__1011111rec_roxo_mobile.logicBlock_backgroundcolor();
		me.__1011113ic_amarelo_mobile.logicBlock_position();
		me.__1011113ic_amarelo_mobile.logicBlock_alpha();
		me.__1011114rec_amarelo_mobile.logicBlock_size();
		me.__1011114rec_amarelo_mobile.logicBlock_alpha();
		me.__1011115ic_roxo_mobile.logicBlock_position();
		me.__1011115ic_roxo_mobile.logicBlock_alpha();
		me.__102logo.logicBlock_position();
		me.__102logo.logicBlock_size();
		me.__102logo.logicBlock_visible();
		me.__102logo_mobile.logicBlock_position();
		me.__102logo_mobile.logicBlock_size();
		me.__102logo_mobile.logicBlock_visible();
		me.__20bt_tela_cheia.logicBlock_visible();
		me.__203fullscreen_on.logicBlock_visible();
		me.__203fullscreen_off.logicBlock_visible();
		me.__20bt_tela_cheia_mobile.logicBlock_visible();
		me.__203fullscreen_on_mobile.logicBlock_visible();
		me.__203fullscreen_off_mobile.logicBlock_visible();
		me.__60bt_ajuda.logicBlock_visible();
		me.__60bt_ajuda_mobile.logicBlock_position();
		me.__60bt_ajuda_mobile.logicBlock_visible();
		el = me._fonts;
		;
		me.__30ct_localizacao.logicBlock_visible();
		me.__30ct_localizacao.logicBlock_alpha();
		me.elementMouseOver['_30ct_localizacao']=false;
		me.__301bt_localizacao.logicBlock_backgroundcolor();
		me.__30ct_localizacao_mobile.logicBlock_visible();
		me.__30ct_localizacao_mobile.logicBlock_alpha();
		me.elementMouseOver['_30ct_localizacao_mobile']=false;
		me.__301bt_localizacao_mobile.logicBlock_backgroundcolor();
		me.__30ct_sociais.logicBlock_visible();
		me.__30ct_sociais.logicBlock_alpha();
		me.__301face.logicBlock_backgroundcolor();
		me.elementMouseOver['_301face']=false;
		me.__3011.logicBlock_size();
		me.__302insta.logicBlock_backgroundcolor();
		me.elementMouseOver['_302insta']=false;
		me.__3021.logicBlock_size();
		me.__303mail.logicBlock_backgroundcolor();
		me.elementMouseOver['_303mail']=false;
		me.__3031.logicBlock_size();
		me.__30ct_sociais_mobile.logicBlock_visible();
		me.__30ct_sociais_mobile.logicBlock_alpha();
		me.__301face_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_301face_mobile']=false;
		me.__3011_mobile.logicBlock_size();
		me.__302insta_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_302insta_mobile']=false;
		me.__3021_mobile.logicBlock_size();
		me.__303mail_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_303mail_mobile']=false;
		me.__3031_mobile.logicBlock_size();
		me.__40whatsapp.logicBlock_visible();
		me.__40whatsapp_mobile.logicBlock_visible();
		me.__40localizacao.logicBlock_position();
		me.__40localizacao.logicBlock_visible();
		me.__40localizacao.logicBlock_alpha();
		me.__402close.logicBlock_angle();
		me.elementMouseOver['_402close']=false;
		me.__40localizacao_mob.logicBlock_position();
		me.__40localizacao_mob.logicBlock_visible();
		me.__40localizacao_mob.logicBlock_alpha();
		me.__402close_mob.logicBlock_angle();
		me.elementMouseOver['_402close_mob']=false;
		me.__50menu_ajuda_desk.logicBlock_visible();
		me.__50menu_ajuda_desk.logicBlock_alpha();
		me.__2027bt_iniciartour.logicBlock_visible();
		me.__2027bt_iniciartour.logicBlock_backgroundcolor();
		me.elementMouseOver['_2027bt_iniciartour']=false;
		me.__2028bt_voltaraotour.logicBlock_alpha();
		me.__2028bt_voltaraotour.logicBlock_backgroundcolor();
		me.elementMouseOver['_2028bt_voltaraotour']=false;
		me.__50menu_ajuda_mobile.logicBlock_visible();
		me.__50menu_ajuda_mobile.logicBlock_alpha();
		me.__50261ct_menu_mobile.logicBlock_alpha();
		me.__50262ct_arrasta_mobile.logicBlock_alpha();
		me.__50263ct_nav_menu_mobile.logicBlock_alpha();
		me.__50264ct_hotspot_mobile.logicBlock_alpha();
		me.__2027bt_iniciartour_mobile.logicBlock_visible();
		me.__2027bt_iniciartour_mobile.logicBlock_alpha();
		me.__2027bt_iniciartour_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_2027bt_iniciartour_mobile']=false;
		me.__2028bt_voltaraotour_mobile.logicBlock_alpha();
		me.__2028bt_voltaraotour_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_2028bt_voltaraotour_mobile']=false;
		me.__503seta_direita.logicBlock_alpha();
		me.__503seta_esquerda.logicBlock_alpha();
		me.__504seta_esquerda.logicBlock_alpha();
		me._timeranimation.logicBlock_visible();
		me._timeranimation.logicBlock_alpha();
		me._loading.logicBlock_position();
		me._ativar_musica.logicBlock_alpha();
		me._bt_sim.logicBlock_backgroundcolor();
		me.elementMouseOver['bt_sim']=false;
		me._bt_no.logicBlock_backgroundcolor();
		me.elementMouseOver['bt_no']=false;
		me._hidemenu.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__10menu_principal_desk.logicBlock_visible();
			me.__10menu_principal_desk.logicBlock_alpha();
			me.__103110fundo.logicBlock_visible();
			me.__104110fundo.logicBlock_visible();
			me.__105110fundo.logicBlock_visible();
			me.__106110fundo.logicBlock_visible();
			me.__107110fundo.logicBlock_visible();
			me.__108110fundo.logicBlock_visible();
			me.__109110fundo.logicBlock_visible();
			me.__1010110fundo.logicBlock_visible();
			me.__1011110fundo.logicBlock_visible();
			me.__10menu_principal_mobile.logicBlock_visible();
			me.__10menu_principal_mobile.logicBlock_alpha();
			me.__103110fundo_mobile.logicBlock_visible();
			me.__104110fundo_mobile.logicBlock_visible();
			me.__105110fundo_mobile.logicBlock_visible();
			me.__106110fundo_mobile.logicBlock_visible();
			me.__107110fundo_mobile.logicBlock_visible();
			me.__108110fundo_mobile.logicBlock_visible();
			me.__109110fundo_mobile.logicBlock_visible();
			me.__1010110fundo_mobile.logicBlock_visible();
			me.__1011110fundo_mobile.logicBlock_visible();
			me.__102logo.logicBlock_position();
			me.__102logo.logicBlock_size();
			me.__102logo.logicBlock_visible();
			me.__102logo_mobile.logicBlock_position();
			me.__102logo_mobile.logicBlock_size();
			me.__102logo_mobile.logicBlock_visible();
			me.__20bt_tela_cheia.logicBlock_visible();
			me.__203fullscreen_on.logicBlock_visible();
			me.__203fullscreen_off.logicBlock_visible();
			me.__20bt_tela_cheia_mobile.logicBlock_visible();
			me.__203fullscreen_on_mobile.logicBlock_visible();
			me.__203fullscreen_off_mobile.logicBlock_visible();
			me.__60bt_ajuda.logicBlock_visible();
			me.__60bt_ajuda_mobile.logicBlock_visible();
			me.__30ct_localizacao.logicBlock_visible();
			me.__30ct_localizacao.logicBlock_alpha();
			me.__30ct_localizacao_mobile.logicBlock_visible();
			me.__30ct_localizacao_mobile.logicBlock_alpha();
			me.__30ct_sociais.logicBlock_visible();
			me.__30ct_sociais.logicBlock_alpha();
			me.__30ct_sociais_mobile.logicBlock_visible();
			me.__30ct_sociais_mobile.logicBlock_alpha();
			me.__40whatsapp.logicBlock_visible();
			me.__40whatsapp_mobile.logicBlock_visible();
			me.__40localizacao.logicBlock_position();
			me.__40localizacao.logicBlock_visible();
			me.__40localizacao.logicBlock_alpha();
			me.__40localizacao_mob.logicBlock_position();
			me.__40localizacao_mob.logicBlock_visible();
			me.__40localizacao_mob.logicBlock_alpha();
			me.__50menu_ajuda_desk.logicBlock_visible();
			me.__50menu_ajuda_desk.logicBlock_alpha();
			me.__2027bt_iniciartour.logicBlock_visible();
			me.__2028bt_voltaraotour.logicBlock_alpha();
			me.__50menu_ajuda_mobile.logicBlock_visible();
			me.__50menu_ajuda_mobile.logicBlock_alpha();
			me.__50261ct_menu_mobile.logicBlock_alpha();
			me.__50262ct_arrasta_mobile.logicBlock_alpha();
			me.__50263ct_nav_menu_mobile.logicBlock_alpha();
			me.__50264ct_hotspot_mobile.logicBlock_alpha();
			me.__2027bt_iniciartour_mobile.logicBlock_visible();
			me.__2027bt_iniciartour_mobile.logicBlock_alpha();
			me.__2028bt_voltaraotour_mobile.logicBlock_alpha();
			me.__503seta_direita.logicBlock_alpha();
			me.__503seta_esquerda.logicBlock_alpha();
			me.__504seta_esquerda.logicBlock_alpha();
			me._timeranimation.logicBlock_visible();
			me._loading.logicBlock_position();
			me._ativar_musica.logicBlock_alpha();
			me._hidemenu.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__10menu_principal_desk.logicBlock_visible();
			me.__10menu_principal_desk.logicBlock_alpha();
			me.__10menu_principal_mobile.logicBlock_visible();
			me.__10menu_principal_mobile.logicBlock_alpha();
			me.__102logo.logicBlock_position();
			me.__102logo.logicBlock_size();
			me.__102logo.logicBlock_visible();
			me.__102logo_mobile.logicBlock_position();
			me.__102logo_mobile.logicBlock_size();
			me.__102logo_mobile.logicBlock_visible();
			me.__20bt_tela_cheia.logicBlock_visible();
			me.__203fullscreen_on.logicBlock_visible();
			me.__203fullscreen_off.logicBlock_visible();
			me.__20bt_tela_cheia_mobile.logicBlock_visible();
			me.__203fullscreen_on_mobile.logicBlock_visible();
			me.__203fullscreen_off_mobile.logicBlock_visible();
			me.__60bt_ajuda.logicBlock_visible();
			me.__60bt_ajuda_mobile.logicBlock_position();
			me.__60bt_ajuda_mobile.logicBlock_visible();
			me.__30ct_localizacao.logicBlock_visible();
			me.__30ct_localizacao.logicBlock_alpha();
			me.__30ct_localizacao_mobile.logicBlock_visible();
			me.__30ct_localizacao_mobile.logicBlock_alpha();
			me.__30ct_sociais.logicBlock_visible();
			me.__30ct_sociais.logicBlock_alpha();
			me.__30ct_sociais_mobile.logicBlock_visible();
			me.__30ct_sociais_mobile.logicBlock_alpha();
			me.__40whatsapp.logicBlock_visible();
			me.__40whatsapp_mobile.logicBlock_visible();
			me.__40localizacao.logicBlock_position();
			me.__40localizacao.logicBlock_visible();
			me.__40localizacao.logicBlock_alpha();
			me.__40localizacao_mob.logicBlock_position();
			me.__40localizacao_mob.logicBlock_visible();
			me.__40localizacao_mob.logicBlock_alpha();
			me.__50menu_ajuda_desk.logicBlock_visible();
			me.__50menu_ajuda_desk.logicBlock_alpha();
			me.__2027bt_iniciartour.logicBlock_visible();
			me.__2028bt_voltaraotour.logicBlock_alpha();
			me.__50menu_ajuda_mobile.logicBlock_visible();
			me.__50menu_ajuda_mobile.logicBlock_alpha();
			me.__50261ct_menu_mobile.logicBlock_alpha();
			me.__50262ct_arrasta_mobile.logicBlock_alpha();
			me.__50263ct_nav_menu_mobile.logicBlock_alpha();
			me.__50264ct_hotspot_mobile.logicBlock_alpha();
			me.__2027bt_iniciartour_mobile.logicBlock_visible();
			me.__2027bt_iniciartour_mobile.logicBlock_alpha();
			me.__2028bt_voltaraotour_mobile.logicBlock_alpha();
			me.__503seta_direita.logicBlock_alpha();
			me.__503seta_esquerda.logicBlock_alpha();
			me.__504seta_esquerda.logicBlock_alpha();
			me._timeranimation.ggTimestamp=skin.ggCurrentTime;
			me._timeranimation.ggTimeout=2000;
			me._loading.logicBlock_position();
			me._ativar_musica.logicBlock_alpha();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('projectionchanged', function(event) {
			me._timeranimation.logicBlock_alpha();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_var_respphone.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('tilesrequested', function(event) {
			player.setVariableValue('vis_loader', false);
		});
		player.addListener('varchanged_resp_phone', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_resp_phone();
				}
			}
			me.__10menu_principal_desk.logicBlock_visible();
			me.__10menu_principal_mobile.logicBlock_visible();
			me.__102logo.logicBlock_visible();
			me.__102logo_mobile.logicBlock_visible();
			me.__20bt_tela_cheia.logicBlock_visible();
			me.__20bt_tela_cheia_mobile.logicBlock_visible();
			me.__60bt_ajuda.logicBlock_visible();
			me.__60bt_ajuda_mobile.logicBlock_visible();
			me.__30ct_localizacao.logicBlock_visible();
			me.__30ct_localizacao_mobile.logicBlock_visible();
			me.__30ct_sociais.logicBlock_visible();
			me.__30ct_sociais_mobile.logicBlock_visible();
			me.__40whatsapp.logicBlock_visible();
			me.__40whatsapp_mobile.logicBlock_visible();
			me.__40localizacao.logicBlock_visible();
			me.__50menu_ajuda_desk.logicBlock_visible();
		});
		player.addListener('varchanged_var_ajuda', function(event) {
			me.__50menu_ajuda_desk.logicBlock_alpha();
			me.__2027bt_iniciartour.logicBlock_visible();
			me.__2028bt_voltaraotour.logicBlock_alpha();
			me.__50menu_ajuda_mobile.logicBlock_alpha();
			me.__2027bt_iniciartour_mobile.logicBlock_visible();
			me.__2028bt_voltaraotour_mobile.logicBlock_alpha();
		});
		player.addListener('varchanged_var_carrou_bt', function(event) {
			me.__2027bt_iniciartour_mobile.logicBlock_alpha();
		});
		player.addListener('varchanged_var_carrousel', function(event) {
			me.__50261ct_menu_mobile.logicBlock_alpha();
			me.__50262ct_arrasta_mobile.logicBlock_alpha();
			me.__50263ct_nav_menu_mobile.logicBlock_alpha();
			me.__50264ct_hotspot_mobile.logicBlock_alpha();
			me.__503seta_direita.logicBlock_alpha();
			me.__503seta_esquerda.logicBlock_alpha();
			me.__504seta_esquerda.logicBlock_alpha();
		});
		player.addListener('varchanged_var_loc', function(event) {
			me.__30ct_sociais_mobile.logicBlock_alpha();
			me.__40localizacao.logicBlock_position();
			me.__40localizacao.logicBlock_alpha();
			me.__40localizacao_mob.logicBlock_position();
			me.__40localizacao_mob.logicBlock_alpha();
		});
		player.addListener('varchanged_var_menu', function(event) {
			me.__10menu_principal_desk.logicBlock_alpha();
			me.__10menu_principal_mobile.logicBlock_alpha();
			me.__102logo.logicBlock_position();
			me.__102logo.logicBlock_size();
			me.__102logo_mobile.logicBlock_position();
			me.__102logo_mobile.logicBlock_size();
			me.__30ct_localizacao.logicBlock_alpha();
			me.__30ct_localizacao_mobile.logicBlock_alpha();
			me.__30ct_sociais.logicBlock_alpha();
			me.__30ct_sociais_mobile.logicBlock_alpha();
		});
		player.addListener('varchanged_var_respphone', function(event) {
			me.__40localizacao_mob.logicBlock_visible();
			me.__50menu_ajuda_mobile.logicBlock_visible();
			me._loading.logicBlock_position();
		});
		player.addListener('varchanged_var_telacheia', function(event) {
			me.__203fullscreen_on.logicBlock_visible();
			me.__203fullscreen_off.logicBlock_visible();
			me.__203fullscreen_on_mobile.logicBlock_visible();
			me.__203fullscreen_off_mobile.logicBlock_visible();
		});
		player.addListener('varchanged_vis_inicial', function(event) {
			me._ativar_musica.logicBlock_alpha();
		});
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node.style.transition='transform 0s';
				if (me._ht_node.ggCurrentLogicStateScaling == 0) {
					me._ht_node.ggParameter.sx = 0.72;
					me._ht_node.ggParameter.sy = 0.72;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
				else {
					me._ht_node.ggParameter.sx = 1;
					me._ht_node.ggParameter.sy = 1;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
			}
		}
		me._ht_node.logicBlock_scaling();
		me._ht_node.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		el=me._hotspot=document.createElement('div');
		el.ggId="hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : calc(50% - ((54px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((54px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 54px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot.style.transition='';
				if (me._hotspot.ggCurrentLogicStateVisible == 0) {
					me._hotspot.style.visibility=(Number(me._hotspot.style.opacity)>0||!me._hotspot.style.opacity)?'inherit':'hidden';
					me._hotspot.ggVisible=true;
				}
				else {
					me._hotspot.style.visibility="hidden";
					me._hotspot.ggVisible=false;
				}
			}
		}
		me._hotspot.logicBlock_visible();
		me._hotspot.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1_1=document.createElement('div');
		el.ggId="Rectangle 1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle pulse";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 4px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((44px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 40))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_1_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_1_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_1_1.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._rectangle_1_1.ggCurrentLogicStateSize == 0) {
					me._rectangle_1_1.style.width='90px';
					me._rectangle_1_1.style.height='90px';
					me._rectangle_1_1.style.left = 'calc(50% - (90px / 2) - (8px / 2))';
					me._rectangle_1_1.style.top = 'calc(50% - (90px / 2) - (8px / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_1_1);}, 550);
				}
				else {
					me._rectangle_1_1.style.width='44px';
					me._rectangle_1_1.style.height='44px';
					me._rectangle_1_1.style.left = 'calc(50% - (44px / 2) - (8px / 2))';
					me._rectangle_1_1.style.top = 'calc(50% - (44px / 2) - (8px / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_1_1);}, 550);
				}
			}
		}
		me._rectangle_1_1.logicBlock_size();
		me._rectangle_1_1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._rectangle_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot.appendChild(me._rectangle_1_1);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABRCAYAAACT6PttAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL4SURBVHgB7duNcdNAEIbhzx4KSAdQQjpIKIEKMB1ABTEVECqwqYBQgU0FcQeICgIVHHvWneMIy5Jud6WTvO+MJn9jSfeMZJ8cGbCmk3PuipYlLU+uzH9d+d/Dqi/APbrTPRpgTQ1wBlhXSzgDrNYRzgBjiXAGyIS7XEAhuMsDFIa7HEAluOkDKsNNF7AnuOkB9gw3HcCB4HoDnEGpsOMbWq4xXDta3s5msz9QSAUvE7iYGqA4XmZwMRVAUbxM4WLigGJ4mcPFRAFF8EYCFxMDZOONDC4mAsjCGylcjA2YjDdyuBgLMAlvInCxZMA5OqYAt0VaftASr5p+HJ'+
			'uUS7lOeApwC1oKpLU/YjAgYGs8DTg6Vb6BET3eA36ATJ0BW+EpwH3kwsVoPQ8YCLARTwFuSQP+CsFofWsMAHgWTwnuMxQKgEvI1AqwFm9McLGw/iVkagQ8iTdGuFifgP/hKcDd9wUX6wvwBZ4C3JoG8gkD1AfgAU8JTuoVMKkAKDIlwgnAPZ4C3G5ouBjtxwJKgPHI+wJBOJSXTdkUAB8gk3f67r+Zk6L/YQGZRN/mFs6fCTvIdEtut/7Iu4FMBS3vMoVD2C9/RkgB3ni8v+BXoDziCmTcEWABgTzeFrwKjAAuJgi4nYdB3yOtAiOCi4X95QD6if/Pw0/0BLh23fpFyxswc+Wne1JagZnf/zCOpO0eJskd50P7Q39sR1y1hCPwxcR/XlnZAs2Ak4CLHQE2zRLaXTG586ew1GQ6bmvl0mKftpX9uHbPHxbkbYsecFdZ'+
			'2UYaLmxn5TLAC/vinwOPb8b0479DavTg136BUjnhHe3TVRj32XeSX6EhOs9/48IKc8HGK6XO//S2njM8RobHyPAYGR4jw2NkeIwMj5HhMTI8RobHyPAYGR4jw2NkeIwMj5HhMTI8RobHyPAYGR4jw2NkeIwMj5HhMTI8RobHKAe81LvnB7/rPge8H0hL6kMp486V9wJ2Kf2euSlGIAtX3kBZd3fmU/j7e2TSP7bfWH7g+euxAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 21px;';
		hs+='left : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_4.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot.appendChild(me._image_4);
		el=me._preview_nodeimage_1=document.createElement('div');
		els=me._preview_nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_1_" + player.getCurrentNode() + "_" + me.hotspot.id + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._preview_nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 40))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._preview_nodeimage_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._preview_nodeimage_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._preview_nodeimage_1.style.transition='transform 500ms ease 0ms';
				if (me._preview_nodeimage_1.ggCurrentLogicStateScaling == 0) {
					me._preview_nodeimage_1.ggParameter.sx = 1;
					me._preview_nodeimage_1.ggParameter.sy = 1;
					me._preview_nodeimage_1.style.transform=parameterToTransform(me._preview_nodeimage_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_1);}, 550);
				}
				else {
					me._preview_nodeimage_1.ggParameter.sx = 0;
					me._preview_nodeimage_1.ggParameter.sy = 0;
					me._preview_nodeimage_1.style.transform=parameterToTransform(me._preview_nodeimage_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_1);}, 550);
				}
			}
		}
		me._preview_nodeimage_1.logicBlock_scaling();
		me._preview_nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot.appendChild(me._preview_nodeimage_1);
		el=me._rectangle_1_1_2=document.createElement('div');
		el.ggId="Rectangle 1_1_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1_1_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 40))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_1_1_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_1_1_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_1_1_2.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._rectangle_1_1_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_1_1_2.style.width='90px';
					me._rectangle_1_1_2.style.height='90px';
					me._rectangle_1_1_2.style.left = 'calc(50% - (90px / 2))';
					me._rectangle_1_1_2.style.top = 'calc(50% - (90px / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_1_1_2);}, 550);
				}
				else {
					me._rectangle_1_1_2.style.width='48px';
					me._rectangle_1_1_2.style.height='48px';
					me._rectangle_1_1_2.style.left = 'calc(50% - (48px / 2))';
					me._rectangle_1_1_2.style.top = 'calc(50% - (48px / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_1_1_2);}, 550);
				}
			}
		}
		me._rectangle_1_1_2.logicBlock_size();
		me._rectangle_1_1_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 40))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_1_1_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_1_1_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_1_1_2.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._rectangle_1_1_2.ggCurrentLogicStateVisible == 0) {
					me._rectangle_1_1_2.style.visibility=(Number(me._rectangle_1_1_2.style.opacity)>0||!me._rectangle_1_1_2.style.opacity)?'inherit':'hidden';
					me._rectangle_1_1_2.ggVisible=true;
				}
				else {
					me._rectangle_1_1_2.style.visibility="hidden";
					me._rectangle_1_1_2.ggVisible=false;
				}
			}
		}
		me._rectangle_1_1_2.logicBlock_visible();
		me._rectangle_1_1_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._rectangle_1_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot.appendChild(me._rectangle_1_1_2);
		me._ht_node.appendChild(me._hotspot);
		el=me._hotspot_mobile=document.createElement('div');
		el.ggId="hotspot_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_mobile.style.transition='';
				if (me._hotspot_mobile.ggCurrentLogicStateVisible == 0) {
					me._hotspot_mobile.style.visibility=(Number(me._hotspot_mobile.style.opacity)>0||!me._hotspot_mobile.style.opacity)?'inherit':'hidden';
					me._hotspot_mobile.ggVisible=true;
				}
				else {
					me._hotspot_mobile.style.visibility="hidden";
					me._hotspot_mobile.ggVisible=false;
				}
			}
		}
		me._hotspot_mobile.logicBlock_visible();
		me._hotspot_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1_mobile=document.createElement('div');
		el.ggId="Rectangle 1_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle pulse";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9900ff;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 30))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_1_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_1_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_1_mobile.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._rectangle_1_mobile.ggCurrentLogicStateSize == 0) {
					me._rectangle_1_mobile.style.width='110px';
					me._rectangle_1_mobile.style.height='110px';
					me._rectangle_1_mobile.style.left = 'calc(50% - (110px / 2) - (6px / 2))';
					me._rectangle_1_mobile.style.top = 'calc(50% - (110px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_1_mobile);}, 550);
				}
				else {
					me._rectangle_1_mobile.style.width='48px';
					me._rectangle_1_mobile.style.height='48px';
					me._rectangle_1_mobile.style.left = 'calc(50% - (48px / 2) - (6px / 2))';
					me._rectangle_1_mobile.style.top = 'calc(50% - (48px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_1_mobile);}, 550);
				}
			}
		}
		me._rectangle_1_mobile.logicBlock_size();
		me._rectangle_1_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_mobile.appendChild(me._rectangle_1_mobile);
		el=me._image_4_mobile=document.createElement('div');
		els=me._image_4_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_image_4_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABRCAYAAACT6PttAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL4SURBVHgB7duNcdNAEIbhzx4KSAdQQjpIKIEKMB1ABTEVECqwqYBQgU0FcQeICgIVHHvWneMIy5Jud6WTvO+MJn9jSfeMZJ8cGbCmk3PuipYlLU+uzH9d+d/Dqi/APbrTPRpgTQ1wBlhXSzgDrNYRzgBjiXAGyIS7XEAhuMsDFIa7HEAluOkDKsNNF7AnuOkB9gw3HcCB4HoDnEGpsOMbWq4xXDta3s5msz9QSAUvE7iYGqA4XmZwMRVAUbxM4WLigGJ4mcPFRAFF8EYCFxMDZOONDC4mAsjCGylcjA2YjDdyuBgLMAlvInCxZMA5OqYAt0VaftASr5p+HJ'+
			'uUS7lOeApwC1oKpLU/YjAgYGs8DTg6Vb6BET3eA36ATJ0BW+EpwH3kwsVoPQ8YCLARTwFuSQP+CsFofWsMAHgWTwnuMxQKgEvI1AqwFm9McLGw/iVkagQ8iTdGuFifgP/hKcDd9wUX6wvwBZ4C3JoG8gkD1AfgAU8JTuoVMKkAKDIlwgnAPZ4C3G5ouBjtxwJKgPHI+wJBOJSXTdkUAB8gk3f67r+Zk6L/YQGZRN/mFs6fCTvIdEtut/7Iu4FMBS3vMoVD2C9/RkgB3ni8v+BXoDziCmTcEWABgTzeFrwKjAAuJgi4nYdB3yOtAiOCi4X95QD6if/Pw0/0BLh23fpFyxswc+Wne1JagZnf/zCOpO0eJskd50P7Q39sR1y1hCPwxcR/XlnZAs2Ak4CLHQE2zRLaXTG586ew1GQ6bmvl0mKftpX9uHbPHxbkbYsecFdZ'+
			'2UYaLmxn5TLAC/vinwOPb8b0479DavTg136BUjnhHe3TVRj32XeSX6EhOs9/48IKc8HGK6XO//S2njM8RobHyPAYGR4jw2NkeIwMj5HhMTI8RobHyPAYGR4jw2NkeIwMj5HhMTI8RobHyPAYGR4jw2NkeIwMj5HhMTI8RobHKAe81LvnB7/rPge8H0hL6kMp486V9wJ2Kf2euSlGIAtX3kBZd3fmU/j7e2TSP7bfWH7g+euxAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_4_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 30))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 30))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_4_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_4_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_4_mobile.style.transition='opacity 500ms ease 0ms';
				if (me._image_4_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._image_4_mobile.style.opacity == 0.0) { me._image_4_mobile.style.visibility="hidden"; } }, 505);
					me._image_4_mobile.style.opacity=0;
				}
				else if (me._image_4_mobile.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._image_4_mobile.style.opacity == 0.0) { me._image_4_mobile.style.visibility="hidden"; } }, 505);
					me._image_4_mobile.style.opacity=0;
				}
				else {
					me._image_4_mobile.style.visibility=me._image_4_mobile.ggVisible?'inherit':'hidden';
					me._image_4_mobile.style.opacity=1;
				}
			}
		}
		me._image_4_mobile.logicBlock_alpha();
		me._image_4_mobile.onclick=function (e) {
			if (
				(
					((player.getHasTouch() == true))
				)
			) {
				player.moveTo(me.hotspot.pan,me.hotspot.tilt,"cur","4.0000");
			}
		}
		me._image_4_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_mobile.appendChild(me._image_4_mobile);
		el=me._preview_nodeimage_mobile_=document.createElement('div');
		els=me._preview_nodeimage_mobile___img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_mobile__" + player.getCurrentNode() + "_" + me.hotspot.id + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage_mobile__";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((110px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((110px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._preview_nodeimage_mobile_.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage_mobile_.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 30))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 30))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._preview_nodeimage_mobile_.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._preview_nodeimage_mobile_.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._preview_nodeimage_mobile_.style.transition='transform 400ms ease 0ms';
				if (me._preview_nodeimage_mobile_.ggCurrentLogicStateScaling == 0) {
					me._preview_nodeimage_mobile_.ggParameter.sx = 1;
					me._preview_nodeimage_mobile_.ggParameter.sy = 1;
					me._preview_nodeimage_mobile_.style.transform=parameterToTransform(me._preview_nodeimage_mobile_.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_mobile_);}, 450);
				}
				else if (me._preview_nodeimage_mobile_.ggCurrentLogicStateScaling == 1) {
					me._preview_nodeimage_mobile_.ggParameter.sx = 1;
					me._preview_nodeimage_mobile_.ggParameter.sy = 1;
					me._preview_nodeimage_mobile_.style.transform=parameterToTransform(me._preview_nodeimage_mobile_.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_mobile_);}, 450);
				}
				else {
					me._preview_nodeimage_mobile_.ggParameter.sx = 0;
					me._preview_nodeimage_mobile_.ggParameter.sy = 0;
					me._preview_nodeimage_mobile_.style.transform=parameterToTransform(me._preview_nodeimage_mobile_.ggParameter);
					setTimeout(function() {skin.updateSize(me._preview_nodeimage_mobile_);}, 450);
				}
			}
		}
		me._preview_nodeimage_mobile_.logicBlock_scaling();
		me._preview_nodeimage_mobile_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_mobile.appendChild(me._preview_nodeimage_mobile_);
		el=me._rectangle_1_mobile_1_=document.createElement('div');
		el.ggId="Rectangle 1_mobile_1_";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1_mobile_1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1_mobile_1_.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 30))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_1_mobile_1_.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_1_mobile_1_.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_1_mobile_1_.style.transition='width 0s, height 0s';
				if (me._rectangle_1_mobile_1_.ggCurrentLogicStateSize == 0) {
					me._rectangle_1_mobile_1_.style.width='110px';
					me._rectangle_1_mobile_1_.style.height='110px';
					me._rectangle_1_mobile_1_.style.left = 'calc(50% - (110px / 2))';
					me._rectangle_1_mobile_1_.style.top = 'calc(50% - (110px / 2))';
					skin.updateSize(me._rectangle_1_mobile_1_);
				}
				else {
					me._rectangle_1_mobile_1_.style.width='48px';
					me._rectangle_1_mobile_1_.style.height='48px';
					me._rectangle_1_mobile_1_.style.left = 'calc(50% - (48px / 2))';
					me._rectangle_1_mobile_1_.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me._rectangle_1_mobile_1_);
				}
			}
		}
		me._rectangle_1_mobile_1_.logicBlock_size();
		me._rectangle_1_mobile_1_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) > 30))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_1_mobile_1_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_1_mobile_1_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_1_mobile_1_.style.transition='width 0s, height 0s';
				if (me._rectangle_1_mobile_1_.ggCurrentLogicStateVisible == 0) {
					me._rectangle_1_mobile_1_.style.visibility=(Number(me._rectangle_1_mobile_1_.style.opacity)>0||!me._rectangle_1_mobile_1_.style.opacity)?'inherit':'hidden';
					me._rectangle_1_mobile_1_.ggVisible=true;
				}
				else {
					me._rectangle_1_mobile_1_.style.visibility="hidden";
					me._rectangle_1_mobile_1_.ggVisible=false;
				}
			}
		}
		me._rectangle_1_mobile_1_.logicBlock_visible();
		me._rectangle_1_mobile_1_.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._rectangle_1_mobile_1_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_mobile.appendChild(me._rectangle_1_mobile_1_);
		me._ht_node.appendChild(me._hotspot_mobile);
		me._ht_node.logicBlock_scaling();
		me.elementMouseOver['ht_node']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
		me._hotspot.logicBlock_visible();
		me._rectangle_1_1.logicBlock_size();
		me._preview_nodeimage_1.logicBlock_scaling();
		me._rectangle_1_1_2.logicBlock_size();
		me._rectangle_1_1_2.logicBlock_visible();
		me._hotspot_mobile.logicBlock_visible();
		me._rectangle_1_mobile.logicBlock_size();
		me._image_4_mobile.logicBlock_alpha();
		me._preview_nodeimage_mobile_.logicBlock_scaling();
		me._rectangle_1_mobile_1_.logicBlock_size();
		me._rectangle_1_mobile_1_.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_scaling();
				me._ht_node_customimage.logicBlock_visible();
				me._hotspot.logicBlock_visible();
				me._hotspot_mobile.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_scaling();
				me._ht_node_customimage.logicBlock_visible();
				me._hotspot.logicBlock_visible();
				me._hotspot_mobile.logicBlock_visible();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._rectangle_1_1.logicBlock_size();
				me._preview_nodeimage_1.logicBlock_scaling();
				me._rectangle_1_1_2.logicBlock_size();
				me._rectangle_1_1_2.logicBlock_visible();
				me._rectangle_1_mobile.logicBlock_size();
				me._image_4_mobile.logicBlock_alpha();
				me._preview_nodeimage_mobile_.logicBlock_scaling();
				me._rectangle_1_mobile_1_.logicBlock_size();
				me._rectangle_1_mobile_1_.logicBlock_visible();
			};
			me.ggEvent_varchanged_resp_phone=function() {
				me._ht_node.logicBlock_scaling();
				me._hotspot.logicBlock_visible();
				me._hotspot_mobile.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._timeranimation.ggUpdateConditionTimer();
		if (me._timeranimation.ggLastIsActive!=me._timeranimation.ggIsActive()) {
			me._timeranimation.ggLastIsActive=me._timeranimation.ggIsActive();
			if (me._timeranimation.ggLastIsActive) {
			} else {
				if (
					(
						((player.nodeVisited(me._timeranimation.ggElementNodeId()) == false))
					)
				) {
					me._loading.style.transition='none';
					me._loading.style.visibility='hidden';
					me._loading.ggVisible=false;
				}
				if (player.transitionsDisabled) {
					me._timeranimation.style.transition='none';
				} else {
					me._timeranimation.style.transition='all 1000ms ease 0ms';
				}
				me._timeranimation.style.opacity='0';
				me._timeranimation.style.visibility='hidden';
			}
		}
		me._hidemenu.ggUpdateConditionTimer();
		me._hidemenu.ggTimestamp=player.getLastActivity();
		if (me._hidemenu.ggLastIsActive!=me._hidemenu.ggIsActive()) {
			me._hidemenu.ggLastIsActive=me._hidemenu.ggIsActive();
			if (me._hidemenu.ggLastIsActive) {
				if (
					(
						((player.getVariableValue('var_hide') == false))
					)
				) {
					player.setVariableValue('var_menu', true);
				}
			} else {
				if (
					(
						((player.getVariableValue('var_hide') == false))
					)
				) {
					player.setVariableValue('var_menu', false);
				}
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }@font-face { font-display: swap; font-family: "exo2_regular"; src: url("$(skinbase)fonts/exo-2-v25-latin-regular.woff2") format("woff2"), url("$(skinbase)fonts/exo-2-v25-latin-regular.ttf") format("truetype"); } @font-face { font-display: swap; font-family: "exo2_medium"; src: url("$(skinbase)fonts/exo-2-v25-latin-500.woff2") format("woff2"), url("$(skinbase)fonts/exo-2-v25-latin-500.ttf") format("truetype"); } @font-face { font-display: swap; font-family: "exo2_semibold"; src: url("$(skinbase)fonts/exo-2-v25-latin-600.woff2") format("woff2"), url("$(skinbase)fonts/exo-2-v25-latin-600.ttf") format("truetype"); } .regular { font-family: "exo2_regular"; } .medium { font-family: "exo2_medium"; } .semibold { font-family: "exo2_semibold"; } .pulse { animation: pulse-animation 3s infinite; } @keyframes pulse-animation { 0% { box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.7); } 100% { box-shadow: 0 0 0 30px rgba(255, 255, 255, 0); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[187],{45187:function(pe,ee,g){"use strict";g.d(ee,{Z:function(){return s}});var J=g(19273),Q=g(11849),G=g(34792),M=g(48086),k=g(3182),O=g(2824),B=g(94043),S=g.n(B),H=g(64322),F=g(72504),X=g(16130),te=g(258),le=g(32779),ae=g(80068),ne=g(22699),de=g(99165),ue=g(73171),z=g(15938),oe=g(9504),ke=g(94727),Ee=g(83775),A=g(67294),se={activity:{normal:{body:{rx:6,ry:6,stroke:"#91d5ff",fill:"#e6f7ff",strokeWidth:1},label:{fontSize:12,fill:"#262626"}}}},K={circle:{r:6,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden",transition:"all 1s"}}},q={groups:{top:{position:"top",attrs:K,tooltip:"",label:{position:{name:"top"}}},bottom:{position:"bottom",attrs:K,tooltip:"",label:{position:{name:"bottom"}}},left:{position:"left",attrs:K,tooltip:"",label:{position:{name:"left"}}},right:{position:"right",attrs:K,tooltip:"",label:{position:{name:"right"}}}},items:[{id:"top",group:"top"},{id:"bottom",group:"bottom"},{id:"left",group:"left"},{id:"right",group:"right"}]},_={event:{inherit:"circle",width:60,height:60,ports:q,attrs:{body:{strokeWidth:2,stroke:"#5F95FF",fill:"#FFF"}}},activity:{inherit:"rect",width:100,height:60,ports:q,markup:[{tagName:"rect",selector:"body"},{tagName:"image",selector:"img"},{tagName:"text",selector:"label"}],attrs:se.activity.normal},gateway:{inherit:"polygon",width:60,height:60,ports:q,attrs:{body:{refPoints:"0,10 10,0 20,10 10,20",strokeWidth:2,stroke:"#5F95FF",fill:"#EFF4FF"},label:{text:"+",fontSize:40,fill:"#5F95FF"}}}},ce=function(){z.kJ.registerNode("event",_.event,!0),z.kJ.registerNode("activity",_.activity,!0),z.kJ.registerNode("gateway",_.gateway,!0),z.kJ.registerEdge("bpmn-edge",{inherit:"edge",attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,targetMarker:{name:"block",width:12,height:8}}},zIndex:0},!0),z.kS.config({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,targetMarker:{name:"block",width:12,height:8}}},zIndex:0})},ye=g(7359),re=g(27279),p=g(87831),t=g(85893),f=function(n){var C=A.useState([]),h=(0,O.Z)(C,2),E=h[0],w=h[1],T=function(j){var P=j.currentTarget,L=P.getAttribute("data-type");return n==null||n.onDrag(L,j),j.preventDefault()},R=function(){var x=(0,k.Z)(S().mark(function j(){var P;return S().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,(0,p.pR)();case 2:P=V.sent,w(P);case 4:case"end":return V.stop()}},j)}));return function(){return x.apply(this,arguments)}}();return(0,A.useEffect)(function(){R()},[]),(0,t.jsxs)("div",{className:"dnd-box",children:[(0,t.jsx)("div",{className:"dnd-header",children:"\u7EC4\u4EF6\u5217\u8868"}),(0,t.jsx)(re.Z,{collapsible:"header",ghost:!0,className:"dnd-body",children:E.map(function(x,j){return(0,t.jsx)(re.Z.Panel,{header:x.name,children:(0,t.jsx)("ul",{children:x.children.map(function(P,L){return(0,t.jsx)("li",{"data-type":P.type,onMouseDown:T,children:(0,t.jsx)("div",{className:"dnd-rect",children:P.label})},L)})})},j)})},"groups")]})},u=f,o=["normal","default","success","error","processing","warning"],d=function(n){var C,h,E,w,T,R,x,j=n.actionRef,P=n.graphData,L=A.useState(),V=(0,O.Z)(L,2),i=V[0],we=V[1],De=A.useState([]),he=(0,O.Z)(De,2),Te=he[0],be=he[1],xe=A.useState(),Ne=(0,O.Z)(xe,2),ve=Ne[0],Pe=Ne[1];(0,A.useImperativeHandle)(j,function(){return{getGraphData:function(){var D=(0,k.Z)(S().mark(function a(){var l,m,r;return S().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return l=i==null?void 0:i.toJSON().cells,m=l==null?void 0:l.filter(function(I){return I.shape=="edge"||I.shape=="bpmn-edge"}),r=l==null?void 0:l.filter(function(I){return I.shape!="edge"&&I.shape!="bpmn-edge"}),Z.abrupt("return",{nodes:r,edges:m});case 4:case"end":return Z.stop()}},a)}));function e(){return D.apply(this,arguments)}return e}(),updateNodeProperties:function(e,a){var l=i==null?void 0:i.getNodes().find(function(b){return b.id==e});if(!l){M.default.error("node id '".concat(e,"' not found"));return}if(l){var m;l.attr("label",{text:a.displayName}),l.prop("name",a.name),l.prop("displayName",a.displayName),l.prop("description",a.description),l.prop("outcomes",a.outcomes),l.prop("properties",a.properties),l.updateData(a.attribtues);var r=(0,p.NQ)(l,a.outcomes,(m=i==null?void 0:i.getOutgoingEdges(l))!==null&&m!==void 0?m:[]);r.forEach(function(b){i==null||i.removeEdge(b)})}},updateNodeOutPorts:function(e,a){var l=i==null?void 0:i.getNodes().find(function(r){return r.id==e});if(!l){M.default.error("node id '".concat(e,"' not found"));return}var m=(a??[]).map(function(r){return r.toString()});l.prop("outcomes",m)},setAllNodesStyle:function(e){var a,l=(a=i==null?void 0:i.getNodes())!==null&&a!==void 0?a:[];l.forEach(function(m){var r=i==null?void 0:i.findViewByCell(m);r==null||r.removeClass(o),r==null||r.addClass(e)})},setNodeStyle:function(e,a){var l=i==null?void 0:i.getNodes().find(function(r){return r.id==e});if(l){var m=l.findView(i);m==null||m.removeClass(o),m==null||m.addClass(a)}},setAllEdgesStyle:function(e){var a,l=(a=i==null?void 0:i.getEdges())!==null&&a!==void 0?a:[];l.forEach(function(m){var r=i==null?void 0:i.findViewByCell(m);r==null||r.removeClass(o),r==null||r.addClass(e)})},setEdgeStyle:function(e,a){var l=i==null?void 0:i.getEdges().find(function(r){return r.id==e});if(l){var m=l.findView(i);m==null||m.removeClass(o),m==null||m.addClass(a)}},setNodeIncomingEdgesStyle:function(e,a){var l=i==null?void 0:i.getNodes().find(function(r){return r.id==e});if(l){var m=i==null?void 0:i.getIncomingEdges(l);m==null||m.forEach(function(r){var b=r.findView(i);b==null||b.removeClass(o),b==null||b.addClass(a)})}},setNodeOutgoingEdgesStyle:function(e,a){var l=i==null?void 0:i.getNodes().find(function(r){return r.id==e});if(l){var m=i==null?void 0:i.getOutgoingEdges(l);m==null||m.forEach(function(r){var b=r.findView(i);b==null||b.removeClass(o),b==null||b.addClass(a)})}}}});var U=function(e,a,l){switch(a){case"zoomIn":{var m,r,b,Z,I,N=(m=e==null?void 0:e.zoom())!==null&&m!==void 0?m:1;if(e!=null&&(r=e.options)!==null&&r!==void 0&&(b=r.mousewheel)!==null&&b!==void 0&&b.maxScale&&N>=(e==null||(Z=e.options)===null||Z===void 0||(I=Z.mousewheel)===null||I===void 0?void 0:I.maxScale))return;e==null||e.zoom(.1,{absolute:!1})}break;case"zoomOut":{var c,v,$,W,Y,je=(c=e==null?void 0:e.zoom())!==null&&c!==void 0?c:1;if(e!=null&&(v=e.options)!==null&&v!==void 0&&($=v.mousewheel)!==null&&$!==void 0&&$.minScale&&je<=(e==null||(W=e.options)===null||W===void 0||(Y=W.mousewheel)===null||Y===void 0?void 0:Y.minScale))return;e==null||e.zoom(-.1,{absolute:!1})}break;case"redo":e!=null&&e.canRedo()?e==null||e.redo():M.default.info("Nothing to redo");break;case"undo":e!=null&&e.canUndo()?e==null||e.undo():M.default.info("Nothing to undo");break;case"center":e==null||e.zoom(1,{absolute:!0}),e==null||e.centerContent({padding:50});break;case"compress":e==null||e.scaleContentToFit(),e==null||e.centerContent({padding:50});break;case"delete":{var me,Ce=(me=e==null?void 0:e.getSelectedCells())!==null&&me!==void 0?me:[];Ce.length>0&&e.removeCells(Ce)}break;case"copy":{var ge,ie=(ge=e==null?void 0:e.getSelectedCells())!==null&&ge!==void 0?ge:[];if((ie==null?void 0:ie.length)==0){M.default.info("No node selected.");return}if(e.cleanSelection(),e==null||e.copy(ie,{deep:!1}),!(e!=null&&e.isClipboardEmpty())){var Se=e==null?void 0:e.paste({offset:80,nodeProps:{name:(0,H.CY)()}});Se&&e.select(Se)}}break}},Ie=function(e){var a;i==null||i.fromJSON(e),i==null||i.centerContent({padding:50}),n==null||(a=n.onDataUpdate)===null||a===void 0||a.call(n,i)},Oe=function(){var D=(0,k.Z)(S().mark(function e(a,l){var m,r,b,Z,I,N;return S().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(i){v.next=2;break}return v.abrupt("return");case 2:return v.next=4,(0,p.Qr)();case 4:if(b=v.sent,Z=b==null||(m=b.items)===null||m===void 0?void 0:m.find(function($){return $.type==a}),Z){v.next=9;break}return M.default.error("Node type ".concat(a," not exists.")),v.abrupt("return");case 9:I=(0,p.Xn)({type:a,id:"",outcomes:(r=Z.outcomes)!==null&&r!==void 0?r:[],displayName:Z.displayName,label:Z.displayName,typeDescriptor:a}),N=i.createNode(I),N&&(ve==null||ve.start(N,l));case 12:case"end":return v.stop()}},e)}));return function(a,l){return D.apply(this,arguments)}}(),Ze=function(){var D=(0,k.Z)(S().mark(function e(){var a,l,m,r,b;return S().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:l=(a=n.readonly)!==null&&a!==void 0?a:!1,i||(console.debug("graph initial..."),ce(),r=new z.kJ((0,Q.Z)({container:document.getElementById("container"),autoResize:!0,grid:{size:10,visible:!0},history:{enabled:!0,beforeAddCommand:function(c,v){return(v==null?void 0:v.key)!="tools"}},mousewheel:{enabled:!0,zoomAtMousePosition:!0,modifiers:["ctrl"],minScale:.5,maxScale:1.5},scroller:{padding:40},panning:{enabled:!0},minimap:{enabled:!0,container:document.getElementById("minimap"),width:230,height:180},snapline:!0,keyboard:!0,selecting:{enabled:!0,showNodeSelectionBox:!1},clipboard:{enabled:!0,useLocalStorage:!0},translating:{restrict:!0},connecting:{router:{name:"manhattan",args:{step:10}},connector:{name:"rounded",args:{radius:10}},anchor:"center",connectionPoint:"anchor",allowBlank:!1,allowMulti:"withPort",snap:!0,highlight:!0,allowLoop:!1,allowEdge:!1,validateMagnet:function(c){var v,$=c.cell,W=c.view,Y=c.magnet;return Y?$.isNode()&&!(0,p.hD)($,(v=r.getOutgoingEdges($))!==null&&v!==void 0?v:[])?(M.default.error("No more outcomes."),!1):!0:!1},validateConnection:function(c){var v=c.sourceCell,$=c.targetMagnet;return!!$},validateEdge:function(c){var v=c.edge,$=c.type;return console.log(v,$),v.getProp("shape")=="bpmn-edge"},createEdge:function(c){var v=c.sourceCell,$=c.sourceMagnet;if(v.isNode()){var W,Y=(0,p.lu)(v,(W=r.getOutgoingEdges(v))!==null&&W!==void 0?W:[]);return Y?new z.bn.kS((0,p.wH)({id:"",label:Y})):(M.default.error("No more outcomes."),null)}else return null}},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#fff",stroke:"#47C769","stroke-width":2}}},magnetAvailable:{name:"stroke",args:{attrs:{fill:"#fff",stroke:"#47C769","stroke-width":1}}}}},(0,p.n2)())),we(r),n==null||(m=n.onGraphInitial)===null||m===void 0||m.call(n,r),l&&(r.disableClipboard(),r.disableHistory(),r.disableSnapline(),r.disableSelection(),r.disableRubberband(),r.options.interacting.nodeMovable=!1),b=new z.e9.q6({target:r,scaled:!1,animation:!0}),Pe(b),r.on("node:click",function(N){var c,v=N.node;console.debug(v),v.toFront(),(c=n.onNodeClick)===null||c===void 0||c.call(n,v.getProp(),v)}),r.on("node:dblclick",function(N){var c,v=N.node;(c=n.onNodeDoubleClick)===null||c===void 0||c.call(n,v.getProp(),v)}),r.on("edge:click",function(N){var c,v=N.edge;console.debug(v),v.toFront(),(c=n.onEdgeClick)===null||c===void 0||c.call(n,(0,Q.Z)({},v))}),r.on("edge:dblclick",function(N){var c,v=N.edge;(c=n.onEdgeDoubleClick)===null||c===void 0||c.call(n,(0,Q.Z)({},v))}),r.on("node:mouseenter",function(N){var c=N.node;l||(c.addTools([{name:"button-remove",args:{x:98,y:6}}]),(0,p.fH)(c,!0))}),r.on("node:mouseleave",function(N){var c=N.node;c.removeTools(),(0,p.fH)(c,!1)}),r.on("edge:mouseenter",function(N){var c=N.edge;l||(c.toFront(),c.addTools([{name:"button-remove",args:{distance:-40}}]))}),r.on("edge:mouseleave",function(N){var c=N.edge;c.removeTools(),c.setZIndex(-1)}),r.on("blank:click",function(N){var c;(0,J.Z)(N),((c=r.getCells())!==null&&c!==void 0?c:[]).forEach(function(v){v.isNode()&&(0,p.fH)(v,!1),v.isEdge()&&(v.setZIndex(-1),v.removeTools())})}));case 2:case"end":return I.stop()}},e)}));return function(){return D.apply(this,arguments)}}();(0,A.useEffect)(function(){P&&i&&(console.debug("graph load: ",P),Ie(P))},[P,i]),(0,A.useEffect)(function(){return Ze(),function(){i&&i.dispose()}},[]),(0,A.useEffect)(function(){if(n.toolbars){var e;be((e=n.toolbars)!==null&&e!==void 0?e:[])}else{var D=[{group:"1",items:[{name:"zoomIn",tooltip:"Zoom In",icon:(0,t.jsx)(F.Z,{}),onClick:function(l){U(l,"zoomIn")}},{name:"zoomOut",tooltip:"Zoom Out",icon:(0,t.jsx)(X.Z,{}),onClick:function(l){U(l,"zoomOut")}}]},{group:"2",items:[{name:"undo",tooltip:"Undo",icon:(0,t.jsx)(te.Z,{}),onClick:function(l){U(l,"undo")}},{name:"redo",tooltip:"Redo",icon:(0,t.jsx)(le.Z,{}),onClick:function(l){U(l,"redo")}}]},{group:"3",items:[{name:"center",tooltip:"Center",icon:(0,t.jsx)(ae.Z,{}),onClick:function(l){U(l,"center")}},{name:"compress",tooltip:"Auto Size",icon:(0,t.jsx)(ne.Z,{}),onClick:function(l){U(l,"compress")}}]},{group:"4",items:[{name:"copy",tooltip:"Copy Selected",icon:(0,t.jsx)(de.Z,{}),onClick:function(l){U(l,"copy")}},{name:"delete",tooltip:"Delete Selected",icon:(0,t.jsx)(ue.Z,{}),onClick:function(l){U(l,"delete")}}]}];be(D)}},[]);var fe=(C=n.height)!==null&&C!==void 0?C:600;return(0,t.jsxs)("div",{className:"flow-container",style:{height:fe+"px"},children:[((h=n.showNodeTypes)!==null&&h!==void 0?h:!0)&&(0,t.jsx)(u,{onDrag:Oe},"types"),(0,t.jsx)("div",{id:"container",className:"graph-container",style:{marginTop:((E=n.showToolbar)!==null&&E!==void 0?E:!0)?40:0,height:((w=n.showToolbar)!==null&&w!==void 0?w:!0)?fe-40+"px":fe+"px"}}),((T=n.showMiniMap)!==null&&T!==void 0?T:!0)&&(0,t.jsx)("div",{id:"minimap",className:"minimap-container"}),((R=n.showToolbar)!==null&&R!==void 0?R:!0)&&(0,t.jsx)("div",{id:"toolbar",className:"toolbar-container",style:{left:((x=n.showNodeTypes)!==null&&x!==void 0?x:!0)?260:0},children:(0,t.jsx)(oe.o,{hoverEffect:!0,size:"big",children:Te.map(function(D,e){return(0,t.jsx)(oe.o.Group,{children:D.items.map(function(a,l){return(0,t.jsx)(oe.o.Item,{name:a.name,tooltip:a.tooltip,icon:a.icon,onClick:function(){var r;(r=a.onClick)===null||r===void 0||r.call(a,i)}},a.name)})},D.group)})})})]})},s=d},87831:function(pe,ee,g){"use strict";g.d(ee,{hD:function(){return A},NQ:function(){return K},MI:function(){return ye},me:function(){return ce},wH:function(){return _},Xn:function(){return q},dv:function(){return ue},tm:function(){return re},n2:function(){return le},lu:function(){return se},pR:function(){return de},Qr:function(){return ne},Oq:function(){return z},fH:function(){return ae}});var J=g(11849),Q=g(86582),G=g(3182),M=g(94043),k=g.n(M),O=g(21010);function B(p){return S.apply(this,arguments)}function S(){return S=(0,G.Z)(k().mark(function p(t){return k().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,O.WY)("/api/designer/activity-types",(0,J.Z)({method:"GET"},t||{})));case 1:case"end":return u.stop()}},p)})),S.apply(this,arguments)}function H(p,t){return F.apply(this,arguments)}function F(){return F=(0,G.Z)(k().mark(function p(t,f){return k().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,O.WY)("/api/designer/script-type-definitions/".concat(t),(0,J.Z)({method:"GET",getResponse:!0},f||{})));case 1:case"end":return o.stop()}},p)})),F.apply(this,arguments)}var X=g(64322),te=g(29616),le=function(){return{}},ae=function(t,f){t.getPorts().forEach(function(u){t.setPortProp(u.id,"attrs/circle",{style:{visibility:f?"visible":"hidden"}})})},ne=function(){var p=(0,G.Z)(k().mark(function t(){var f,u,o,d,s=arguments;return k().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(u=s.length>0&&s[0]!==void 0?s[0]:!1,o=localStorage.getItem("nodeType")?JSON.parse((f=localStorage.getItem("nodeType"))!==null&&f!==void 0?f:"{}"):null,!(!o||u)){n.next=10;break}return n.next=5,B();case 5:return d=n.sent,localStorage.setItem("nodeType",JSON.stringify(d)),n.abrupt("return",d);case 10:return n.abrupt("return",o);case 11:case"end":return n.stop()}},t)}));return function(){return p.apply(this,arguments)}}(),de=function(){var p=(0,G.Z)(k().mark(function t(){var f,u,o,d,s;return k().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ne(!0);case 2:if(d=n.sent,(d==null||(f=d.items)===null||f===void 0?void 0:f.length)!=0){n.next=5;break}return n.abrupt("return",[]);case 5:return s=((u=d==null?void 0:d.categories)!==null&&u!==void 0?u:[]).map(function(C){return{id:C,name:C,children:[]}}),d==null||(o=d.items)===null||o===void 0||o.forEach(function(C){var h,E,w=s.find(function(T){return T.id===C.category});w==null||(h=w.children)===null||h===void 0||h.push({label:C.displayName,type:C.type,outcomes:(E=C.outcomes)!==null&&E!==void 0?E:[]})}),n.abrupt("return",s);case 8:case"end":return n.stop()}},t)}));return function(){return p.apply(this,arguments)}}(),ue=function(t){switch(t){case"JavaScript":return"javascript";case"Json":return"json";case"Liquid":return"handlebars";case"Literal":default:return"plaintext"}},z=function(t){var f,u,o,d=((f=t.supportedSyntaxes)!==null&&f!==void 0?f:[]).map(function(C){return C}),s=(u=t.defaultSyntax)!==null&&u!==void 0?u:void 0,y="";if(s&&d.length==0&&d.push(s),s=="Switch"&&d.push("Json"),(o=t.options)!==null&&o!==void 0&&o.syntax){var n;d=[],s="Literal",y=(n=t.options)===null||n===void 0?void 0:n.syntax}return(t.uiHint==="single-line"||t.uiHint==="multi-line"||t.uiHint==="dropdown"||t.uiHint==="checkbox")&&d.indexOf("Literal")==-1&&(d=["Literal"].concat((0,Q.Z)(d))),d.length>0&&(s=d[0]),{supports:d,default:s,editor:y}},oe=function(){},ke=function(t,f){var u=t.getPortsByGroup("bottom");t.removePorts(u,{silent:!0})},Ee=function(t){var f,u=t.getPortsByGroup("bottom");t.removePorts(u,{silent:!0});var o=(f=t.getProp("outcomes"))!==null&&f!==void 0?f:[];t.addPorts(o.map(function(d){return{id:uuid(),group:"bottom",label:d,outcome:d}}))},A=function(t,f){var u,o=(f??[]).map(function(s){var y;return(y=s.getProp("name"))!==null&&y!==void 0?y:""}).filter(function(s){return s}),d=((u=t.getProp("outcomes"))!==null&&u!==void 0?u:[]).map(function(s){return s.toString()});return d.length>o.length},se=function(t,f){var u,o=(f??[]).map(function(y){var n;return(n=y.getProp("name"))!==null&&n!==void 0?n:""}).filter(function(y){return y}),d=((u=t.getProp("outcomes"))!==null&&u!==void 0?u:[]).map(function(y){return y.toString()}),s=d.filter(function(y){return o.indexOf(y)==-1});return s.length>0?s[0].toString():null},K=function(t,f,u){var o=(u??[]).map(function(s){var y;return(y=s.getProp("name"))!==null&&y!==void 0?y:""}),d=o.filter(function(s){return f.indexOf(s)==-1});return d},q=function(t){var f=t.id,u=t.label,o=t.name,d=t.type,s=t.displayName,y=f||(0,te.V)(),n=u??d;return(0,J.Z)((0,J.Z)({shape:"activity"},t),{},{id:y,label:n,displayName:s??n,name:o??(0,X.CY)(d)})},_=function(t){var f,u=t.id,o=t.label,d=t.name,s=u??(0,te.V)(),y=(f=o??d)!==null&&f!==void 0?f:"Done";return(0,J.Z)((0,J.Z)({shape:"bpmn-edge",attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,targetMarker:{name:"block",width:12,height:8}}},zIndex:0},t),{},{id:s,name:y,label:y,outcome:y})},ce=function(t){console.debug(t);var f=t.edges.map(function(o){var d,s;return{sourceId:o.source.cell,targetId:o.target.cell,outcome:(d=(s=o.name)!==null&&s!==void 0?s:o.outcome)!==null&&d!==void 0?d:"Done",arrtibutes:{sourcePort:o.source.port,targetPort:o.target.port}}}),u=t.nodes.map(function(o){var d,s,y,n,C,h,E,w=(d=o.outcomes)!==null&&d!==void 0?d:[];return w.length||(w=f.filter(function(T){return T.sourceId==o.id}).map(function(T){return T.outcome})),{activityId:o.id,type:o.type,name:(s=o.name)!==null&&s!==void 0?s:(0,X.CY)(o.type),displayName:(y=o.label)!==null&&y!==void 0?y:o.displayName,description:o.description,properties:o.properties,arrtibutes:{x:Math.round((n=(C=o.position)===null||C===void 0?void 0:C.x)!==null&&n!==void 0?n:0),y:Math.round((h=(E=o.position)===null||E===void 0?void 0:E.y)!==null&&h!==void 0?h:0),outcomes:w}}});return{activities:u,connections:f}},ye=function(){var p=(0,G.Z)(k().mark(function t(f,u){var o,d;return k().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return o=[],f.forEach(function(){var n=(0,G.Z)(k().mark(function C(h){var E,w,T,R,x,j,P,L;return k().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:o.push(q({shape:"activity",id:(E=h.activityId)===null||E===void 0?void 0:E.toString(),x:parseInt((w=(T=h.arrtibutes)===null||T===void 0?void 0:T.x)!==null&&w!==void 0?w:0),y:parseInt((R=(x=h.arrtibutes)===null||x===void 0?void 0:x.y)!==null&&R!==void 0?R:0),outcomes:(j=(P=h.arrtibutes)===null||P===void 0?void 0:P.outcomes)!==null&&j!==void 0?j:[],label:(L=h.displayName)!==null&&L!==void 0?L:h.type,name:h.name,type:h.type,displayName:h.displayName,description:h.description,properties:h.properties}));case 1:case"end":return i.stop()}},C)}));return function(C){return n.apply(this,arguments)}}()),d=[],u.forEach(function(n){var C,h=n.sourceId,E=n.targetId,w=(C=n.arrtibutes)!==null&&C!==void 0?C:{};if(h&&o.findIndex(function(x){return x.id==h})>=0&&E&&o.findIndex(function(x){return x.id==E})>=0){var T,R;d.push(_({id:(0,te.V)(),label:n.outcome,outcome:n.outcome,source:{cell:h,port:(T=w.sourcePort)!==null&&T!==void 0?T:"bottom"},target:{cell:E,port:(R=w.targetPort)!==null&&R!==void 0?R:"top"}}))}else console.debug("edge source id ".concat(h," or target id ").concat(E," not found"))}),y.abrupt("return",{nodes:o,edges:d});case 5:case"end":return y.stop()}},t)}));return function(f,u){return p.apply(this,arguments)}}(),re=function(){var p=(0,G.Z)(k().mark(function t(f){var u,o;return k().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,H(f);case 2:return o=s.sent,s.next=5,o==null||(u=o.response)===null||u===void 0?void 0:u.text();case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},t)}));return function(f){return p.apply(this,arguments)}}()},64322:function(pe,ee,g){"use strict";g.d(ee,{CY:function(){return Q},RY:function(){return G}});var J=g(25286),Q=function(){for(var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,S="",H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",F=H.length,X=0;X<B;X++)S+=H.charAt(Math.floor(Math.random()*F));return O?"".concat(O,"_").concat(S):S},G=function(O,B){var S=new Blob([B],{type:"application/json"}),H=window.URL.createObjectURL(S),F=document.createElement("a");F.href=H,F.download=O,document.body.appendChild(F),F.click(),document.body.removeChild(F),window.URL.revokeObjectURL(H)},M=function(O){var B=Object.keys(O).filter(function(S){return isInteger(S)}).forEach(function(S){return _defineProperty({},S,{text:O[S]})});return B}}}]);

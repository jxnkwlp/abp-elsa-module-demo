(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[604],{11974:function(Q,$,r){"use strict";r.r($);var E=r(11849),I=r(34792),c=r(48086),u=r(3182),P=r(71194),k=r(50146),D=r(2824),H=r(94043),y=r.n(H),A=r(90774),S=r(67265),K=r(10926),d=r(67294),F=r(51615),B=r(73727),g=r(85893),N=function(){var Z=(0,d.useRef)(),t=(0,F.k6)(),a=(0,d.useState)(!1),i=(0,D.Z)(a,2),T=i[0],e=i[1],n=(0,d.useState)(""),s=(0,D.Z)(n,2),o=s[0],w=s[1],m=(0,d.useState)(),l=(0,D.Z)(m,2),b=l[0],L=l[1],f=(0,d.useState)(),W=(0,D.Z)(f,2),V=W[0],G=W[1],Y=[{dataIndex:"name",title:"Name",render:function(C,_){return(0,g.jsx)(B.rU,{to:{pathname:"/instance/".concat(_.id),state:{id:_.id}},children:C})}},{dataIndex:"version",title:"Version",valueType:"digit"},{dataIndex:"workflowStatus",title:"Status"},{title:"Creation Time",dataIndex:"creationTime",valueType:"dateTime",search:!1},{title:"Finished Time",dataIndex:"finishedTime",valueType:"dateTime",search:!1},{title:"Last Executed Time",dataIndex:"lastExecutedTime",valueType:"dateTime",search:!1},{title:"Faulted Time",dataIndex:"faultedTime",valueType:"dateTime",search:!1},{title:"CorrelationId",dataIndex:"correlationId"},{title:"Action",valueType:"option",width:200,align:"center",render:function(C,_,z,p){return[(0,g.jsx)("a",{onClick:function(){k.Z.confirm({title:"Are you sure to cancel this instance?",content:"This operation will cancel the instance and all the tasks in it.",onOk:function(){var O=(0,u.Z)(y().mark(function h(){var M,R;return y().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,A.aT)(_.id);case 2:R=v.sent,R!=null&&(M=R.response)!==null&&M!==void 0&&M.ok&&(c.default.success("Canceled successfully"),p==null||p.reload());case 4:case"end":return v.stop()}},h)}));function x(){return O.apply(this,arguments)}return x}()})},children:(_.workflowStatus=="Idle"||_.workflowStatus=="Running"||_.workflowStatus=="Suspended")&&(0,g.jsx)("span",{children:"Cancel"})},"cancel"),(0,g.jsx)("a",{onClick:function(){k.Z.confirm({title:"Are you sure to retry this instance?",content:"This operation will retry the instance.",onOk:function(){var O=(0,u.Z)(y().mark(function h(){var M,R;return y().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,A.C4)(_.id,{});case 2:R=v.sent,R!=null&&(M=R.response)!==null&&M!==void 0&&M.ok&&(c.default.success("Retried successfully"),p==null||p.reload());case 4:case"end":return v.stop()}},h)}));function x(){return O.apply(this,arguments)}return x}()})},children:_.workflowStatus=="Faulted"&&(0,g.jsx)("span",{children:"Retry"})},"retry")]}}];return(0,g.jsx)(S.ZP,{children:(0,g.jsx)(K.ZP,{columns:Y,actionRef:Z,rowKey:"id",request:function(){var U=(0,u.Z)(y().mark(function C(_){var z,p,j,O;return y().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return z=_.current,p=_.pageSize,delete _.current,delete _.pageSize,j=(z-1)*p,h.next=6,(0,A.qd)((0,E.Z)((0,E.Z)({},_),{},{skipCount:j,maxResultCount:p}));case 6:if(O=h.sent,!O){h.next=11;break}return h.abrupt("return",{success:!0,data:O.items,total:O.totalCount});case 11:return h.abrupt("return",{success:!1});case 12:case"end":return h.stop()}},C)}));return function(C){return U.apply(this,arguments)}}()})})};$.default=N},90774:function(Q,$,r){"use strict";r.d($,{aT:function(){return k},mV:function(){return K},jP:function(){return F},qd:function(){return g},C4:function(){return X}});var E=r(11849),I=r(3182),c=r(94043),u=r.n(c),P=r(21010);function k(t,a){return D.apply(this,arguments)}function D(){return D=(0,I.Z)(u().mark(function t(a,i){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,P.WY)("/api/workflow-instances/".concat(a,"/cancel"),(0,E.Z)({method:"POST",getResponse:!0},i||{})));case 1:case"end":return e.stop()}},t)})),D.apply(this,arguments)}function H(t,a,i){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime.mark(function t(a,i,T){return _regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/workflow-instances/".concat(a,"/dispatch"),_objectSpread({method:"POST",data:i,getResponse:!0},T||{})));case 1:case"end":return n.stop()}},t)})),y.apply(this,arguments)}function A(t,a,i){return S.apply(this,arguments)}function S(){return S=_asyncToGenerator(_regeneratorRuntime.mark(function t(a,i,T){return _regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/workflow-instances/".concat(a,"/execute"),_objectSpread({method:"POST",data:i,getResponse:!0},T||{})));case 1:case"end":return n.stop()}},t)})),S.apply(this,arguments)}function K(t,a){return d.apply(this,arguments)}function d(){return d=(0,I.Z)(u().mark(function t(a,i){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,P.WY)("/api/workflow-instances/".concat(a),(0,E.Z)({method:"GET"},i||{})));case 1:case"end":return e.stop()}},t)})),d.apply(this,arguments)}function F(t,a){return B.apply(this,arguments)}function B(){return B=(0,I.Z)(u().mark(function t(a,i){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,P.WY)("/api/workflow-instances/".concat(a,"/execution-logs"),(0,E.Z)({method:"GET"},i||{})));case 1:case"end":return e.stop()}},t)})),B.apply(this,arguments)}function g(t,a){return N.apply(this,arguments)}function N(){return N=(0,I.Z)(u().mark(function t(a,i){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,P.WY)("/api/workflow-instances",(0,E.Z)({method:"GET",params:a},i||{})));case 1:case"end":return e.stop()}},t)})),N.apply(this,arguments)}function X(t,a,i){return Z.apply(this,arguments)}function Z(){return Z=(0,I.Z)(u().mark(function t(a,i,T){return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,P.WY)("/api/workflow-instances/".concat(a,"/retry"),(0,E.Z)({method:"POST",data:i,getResponse:!0},T||{})));case 1:case"end":return n.stop()}},t)})),Z.apply(this,arguments)}},73727:function(Q,$,r){"use strict";r.d($,{rU:function(){return g}});var E=r(51615),I=r(41788),c=r(67294),u=r(97175),P=r(22122),k=r(19756),D=r(2177),H=function(e){(0,I.Z)(n,e);function n(){for(var o,w=arguments.length,m=new Array(w),l=0;l<w;l++)m[l]=arguments[l];return o=e.call.apply(e,[this].concat(m))||this,o.history=(0,u.lX)(o.props),o}var s=n.prototype;return s.render=function(){return c.createElement(E.F0,{history:this.history,children:this.props.children})},n}(c.Component),y=function(e){(0,I.Z)(n,e);function n(){for(var o,w=arguments.length,m=new Array(w),l=0;l<w;l++)m[l]=arguments[l];return o=e.call.apply(e,[this].concat(m))||this,o.history=(0,u.q_)(o.props),o}var s=n.prototype;return s.render=function(){return c.createElement(E.F0,{history:this.history,children:this.props.children})},n}(c.Component),A=function(n,s){return typeof n=="function"?n(s):n},S=function(n,s){return typeof n=="string"?(0,u.ob)(n,null,null,s):n},K=function(n){return n},d=c.forwardRef;typeof d=="undefined"&&(d=K);function F(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var B=d(function(e,n){var s=e.innerRef,o=e.navigate,w=e.onClick,m=(0,k.Z)(e,["innerRef","navigate","onClick"]),l=m.target,b=(0,P.Z)({},m,{onClick:function(f){try{w&&w(f)}catch(W){throw f.preventDefault(),W}!f.defaultPrevented&&f.button===0&&(!l||l==="_self")&&!F(f)&&(f.preventDefault(),o())}});return K!==d?b.ref=n||s:b.ref=s,c.createElement("a",b)}),g=d(function(e,n){var s=e.component,o=s===void 0?B:s,w=e.replace,m=e.to,l=e.innerRef,b=(0,k.Z)(e,["component","replace","to","innerRef"]);return c.createElement(E.s6.Consumer,null,function(L){L||(0,D.Z)(!1);var f=L.history,W=S(A(m,L.location),L.location),V=W?f.createHref(W):"",G=(0,P.Z)({},b,{href:V,navigate:function(){var U=A(m,L.location),C=w?f.replace:f.push;C(U)}});return K!==d?G.ref=n||l:G.innerRef=l,c.createElement(o,G)})});if(!1)var N,X;var Z=function(n){return n},t=c.forwardRef;typeof t=="undefined"&&(t=Z);function a(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return n.filter(function(o){return o}).join(" ")}var i=t(function(e,n){var s=e["aria-current"],o=s===void 0?"page":s,w=e.activeClassName,m=w===void 0?"active":w,l=e.activeStyle,b=e.className,L=e.exact,f=e.isActive,W=e.location,V=e.sensitive,G=e.strict,Y=e.style,U=e.to,C=e.innerRef,_=(0,k.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(E.s6.Consumer,null,function(z){z||(0,D.Z)(!1);var p=W||z.location,j=S(A(U,p),p),O=j.pathname,x=O&&O.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),h=x?(0,E.LX)(p.pathname,{path:x,exact:L,sensitive:V,strict:G}):null,M=!!(f?f(h,p):h),R=M?a(b,m):b,J=M?(0,P.Z)({},Y,{},l):Y,v=(0,P.Z)({"aria-current":M&&o||null,className:R,style:J,to:j},_);return Z!==t?v.ref=n||C:v.innerRef=C,c.createElement(g,v)})});if(!1)var T}}]);

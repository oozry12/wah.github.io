var Tie=window.Tie||{};!function(t){function e(t,e){var i,o,r,a,s,c,l,u,d,h,p,f,m=[],g=t.split(S),y=[e];for(r=0,a=g.length;r<a;r++){for(o=(i=g[r]).replace(N,""),s=0,c=y.length;s<c;s++)e=y[s],I.test(i)?(p=I.exec(o),l=p[1],(f=document.getElementById(l))&&v.contains(e,f)&&m.push(f)):j.test(i)&&(p=j.exec(o),u=p[1],m=m.concat(n(u,e))),N.test(i)&&(p=N.exec(i),d=p[1],h=p[2],m=v.map(m,function(t){return t[d]===h?t:null}));r!==a-1&&(y=m,m=[])}return m}function n(t,e,n){for(var i=[],o=e.getElementsByTagName(n||"*"),r=o.length,a=new RegExp("(^|\\s)"+t+"(\\s|$)"),s=0,c=0;s<r;s++)a.test(o[s].className)&&(i[c]=o[s],c++);return i}function i(t){return t.replace(/-(\w+?)/g,function(t){return t.toUpperCase()})}function o(t,e){return window.getComputedStyle?window.getComputedStyle(t).getPropertyValue(e):t.currentStyle.getAttribute(i(e))}function r(t){return E.indexOf(t.nodeName.toLowerCase())>0?"block":"inline"}function a(t){var e="length"in t&&t.length,n=typeof t;return"function"!==n&&!v.isWindow(t)&&(!(1!==t.nodeType||!e)||"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function s(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function c(t,e){for(var n,i=0;i<t.length;i++)if(v.contains(t[i],e)){n=t[i];break}return n}function l(t){return"mouseover, mouseout, click, keydown, keypress, touchstart, touchend, touchmove".indexOf(t)>-1}function u(t,e,n,i){M[e]?M[e](t,n):document.addEventListener?t.addEventListener(e,n,i):(e=D[e]?D[e].delegateType:e,t.attachEvent("on"+e,function(){n.call(t,arguments[0])}))}function d(t){return(t=t||window.event).target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),t}function h(t,e,n){var i,o=t.status;if(o>=200&&o<300){switch(e.dataType){case"text":i=t.responseText;break;case"json":i=function(n){try{return JSON.parse(n)}catch(i){try{return new Function("return "+n)()}catch(n){e.failure(t)}}}(t.responseText);break;case"xml":i=t.responseXML;break;default:i=t}void 0!==i&&"function"==typeof n&&n(i)}t=null}function p(t,e,n){var i=new XMLHttpRequest,o=t.data,r=t.type,a=t.url;if(o&&"object"==typeof o&&(o=v.serialize(o)),"GET"===r&&o&&(a+=(z.test(a)?"&":"?")+o,o=null),a+=(z.test(a)?"&":"?")+"_="+H++,i.open(r,a,t.async),i.timeout=t.timeout,"POST"===r&&i.setRequestHeader("Content-type",t.contentType),n)for(var s in n)i.setRequestHeader(s,n[s]);return void 0===t.withCredentials?i.withCredentials=!0:i.withCredentials=t.withCredentials,i.send(o),i.onreadystatechange=function(){4===i.readyState&&h(i,t,e)},i}function f(t,e){function n(){i=void 0,a.onload=a.onreadystatechange=null,q.removeChild(a),a=void 0}var i,o=t.data,r=t.url,a=document.createElement("script");t.jsonpCallback=t.jsonpCallback||v.expando+"_"+H++,o&&(o="object"==typeof o?v.serialize(o):o,r+=(z.test(r)?"&":"?")+o,o=null),r+=(z.test(r)?"&":"?")+t.jsonp+"="+t.jsonpCallback,r+=(z.test(r)?"&":"?")+"_="+H++,a.src=r,a.setAttribute("async",!0),a.charset=t.scriptCharset,q.appendChild(a),window[t.jsonpCallback]=function(){i=arguments},a.onload=a.onreadystatechange=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(e&&e(i&&i[0]),n())},a.onerror=function(){e(null),n()}}function m(t,e){function n(t){var n,i,o;try{i=(n=a.contentDocument).location,o=n.body.innerHTML}catch(t){}e&&e(o,i,n)}var i,o,r,a,s="",c=t.data,l=document.charset;0===v("#tie_sdk_util_frame").length&&(r=v(document.body),i='<iframe src="javascript:false;" name="tie_sdk_util_frame" id="tie_sdk_util_frame" border="no" style="display: none;"></iframe>',r.append(i),o='<form id="tie_sdk_util_form" method="post" action="" target="tie_sdk_util_frame" accept-charset="'+t.scriptCharset+'" onsubmit="document.charset=\''+t.scriptCharset+'\';" style="display: none;"></form>',r.append(o)),i=v("#tie_sdk_util_frame"),o=v("#tie_sdk_util_form").empty(),(a=i[0]).attachEvent?a.attachEvent("onload",n):a.onload=n,o.attr("action",t.url);for(var u in t.data)s+='<input type="hidden" name="'+u+'" value="'+c[u]+'">';o.append(s);try{document.charset=t.scriptCharset}catch(t){}o[0].submit();try{document.charset=l}catch(t){}t.removeIframe&&(i.remove(),o.remove())}function g(t){var e=!1,n=[],i=/(^http(s)?:\/\/[A-Za-z0-9_\.]+)\/?/;if(A.test(t)){try{n=A.exec(t.toLowerCase())}catch(e){n=i.exec(t.toLowerCase())}n[0]===R[0]&&n[1]===R[0]||(e=!0)}return e}var v=function(t,e){return new v.fn.init(t,e)},y=[],b=y.splice,w=y.slice,T=y.concat,C=Array.isArray||function(t){return t instanceof Array},x=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,k=/checked/gi,S=/\s+/,L=/[\t\r\n]/g;v.fn=v.prototype={tool:"1.0",constructor:v,length:0,push:y.push,sort:y.sort,splice:b,size:function(){return this.length},pushStack:function(t){var e=v.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t){for(var e=0;e<this.length;e++)t.call(this[e],e,this[e])},slice:function(){return this.pushStack(w.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},find:function(t){var e,n,i=this.length,o=[];for(e=0;e<i;e++)n=v(t,this[e]),v.each(n,function(t,e){o.push(e)});return o=this.pushStack(i>1?v.unique(o):o)},html:function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;for(;n<i;n++)1===(e=this[n]).nodeType&&(e.innerHTML=t);return this},val:function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.value;for(;n<i;n++)1===(e=this[n]).nodeType&&(e.value=t);return this},attr:function(t,e){var n=this[0]||{},i=0,o=this.length;if(void 0===e&&1===n.nodeType)return k.test(t)?n[t]:n.getAttribute(t);if("string"==typeof e){for(;i<o;i++)1===(n=this[i]).nodeType&&(k.test(t)?n[t]=e:n.setAttribute(t,e));return this}},addCls:function(t){var e,n,i=0,o=this.length;if(t)for(;i<o;i++)1===(e=this[i]).nodeType&&(e.classList?e.classList.add(t):(n=" "+e.className+" ").indexOf(" "+t+" ")<0&&(n+=t+" ",e.className=v.trim(n)));return this},delCls:function(t){var e,n,i=0,o=this.length;if(t)for(;i<o;i++)1===(e=this[i]).nodeType&&(e.classList?e.classList.remove(t):((n=(" "+e.className+" ").replace(L," ")).indexOf(" "+t+" ")>=0&&(n=n.replace(" "+t+" "," ")),e.className=v.trim(n)));return this},tglCls:function(t){var e,n,i=0,o=this.length;if(t)for(;i<o;i++)1===(e=this[i]).nodeType&&(e.classList?e.classList.toggle(t):(n=this.eq(i)).hasCls(t)?n.delCls(t):n.addCls(t));return this},hasCls:function(t){var e,n=0,i=this.length;if(t)for(;n<i;n++)if(1===(e=this[n]).nodeType)if(e.classList){if(e.classList.contains(t))return!0}else if((" "+e.className+" ").replace(L," ").indexOf(t)>=0)return!0;return!1},show:function(){for(var t,e,n,i=0,a=this.length;i<a;i++)t=this[i],(e=t.getAttribute("data-display"))&&"none"!==e?n=e:"none"!==(n=o(t,"display"))||(n=r(t)),t.style.display=n;return this},hide:function(){for(var t,e=0,n=this.length;e<n;e++)(t=this[e]).setAttribute("data-display",o(t,"display")),t.style.display="none";return this},position:function(){var t=this[0].getBoundingClientRect(),e=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),n=Math.max(document.documentElement.scrollTop,document.body.scrollTop);return{left:t.left+e,top:t.top+n}},offset:function(){var t=this[0].getBoundingClientRect();return{left:t.left,top:t.top}},css:function(){var t,e,n=0,i=arguments[0];if(arguments.length>1||"object"==typeof i){for(;null!=(t=this[n]);n++)if(1===t.nodeType||11===t.nodeType||9===t.nodeType)for(e in i)t.style[e]=i[e];return this}return t=this[0],o(t,i)},width:function(t){var e,n,i,o=0;if(t&&"number"==typeof t){for(;null!=(e=this[o]);o++)1===e.nodeType&&(e.style.width=t+"px");return this}return e=this[0],v.isWindow(e)?n=e.document.documentElement.clientWidth:9===e.nodeType?(i=e.documentElement,n=Math.max(e.body.scrollWidth,i.scrollWidth,e.body.offsetWidth,i.offsetWidth,i.clientWidth)):n=e.offsetWidth,n},height:function(t){var e,n,i,o=0;if(t&&"number"==typeof t){for(;null!=(e=this[o]);o++)1===e.nodeType&&(e.style.height=t+"px");return this}return e=this[0],v.isWindow(e)?n=window.innerHeight||e.document.documentElement.clientHeight:9===e.nodeType?(i=e.documentElement,n=Math.max(e.body.scrollHeight,i.scrollHeight,e.body.offsetHeight,i.offsetHeight,i.clientHeight)):n=e.offsetHeight,n},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(t.textContent="");return this},remove:function(){for(var t,e=0;null!=(t=this[e]);e++)t.parentNode&&t.parentNode.removeChild(t);return this},append:function(){for(var t,e=0,n=v.parseDom(arguments[0]);null!=(t=this[e]);e++)1!==t.nodeType&&11!==t.nodeType&&9!==t.nodeType||t.appendChild(n.cloneNode(!0));return this},prepend:function(){for(var t,e=0,n=v.parseDom(arguments[0]);null!=(t=this[e]);e++)1!==t.nodeType&&11!==t.nodeType&&9!==t.nodeType||t.insertBefore(n.cloneNode(!0),t.firstChild);return this},before:function(){for(var t,e=0,n=v.parseDom(arguments[0]);null!=(t=this[e]);e++)t.parentNode&&t.parentNode.insertBefore(n.cloneNode(!0),t);return this},after:function(){for(var t,e=0,n=v.parseDom(arguments[0]);null!=(t=this[e]);e++)t.parentNode&&t.parentNode.insertBefore(n.cloneNode(!0),t.nextSibling);return this}},(v.fn.init=function(t,n){var i,n=n||document;if(!t)return this;if("string"==typeof t){t=v.trim(t),i=document.querySelectorAll?n.querySelectorAll(t):e(t,n);for(var o=0;o<i.length;o++)this[o]=i[o];this.length=i.length}else(t.nodeType||t.window)&&(this[0]=t,this.length=1);return this.context=n,this.selector=t,this}).prototype=v.fn;var I=/^#(\S+)/,j=/^\.(\S+)/,N=/\[(\S+)=(\S+)\]$/,E="body|div|h1|h2|h3|h4|h5|h6|ul|li|p|dl|ol|form|table|hr|dir|center|menu|pre|address|blockquote";v.extend=v.fn.extend=function(){var t,e,n,i=arguments[0]||{},o=1,r=arguments.length;for(o===r&&(i=this,o--);o<r;o++)if(null!=(t=arguments[o]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i},v.extend({expando:"tool"+("1.0"+Math.random()).replace(/\D/g,""),isArray:C,isWindow:function(t){return null!=t&&t===t.window},contains:function(t,e){return t!==document||document.contains||(t=document.documentElement||document.body),t.contains(e)},trim:function(t){return null==t?"":(t+"").replace(x,"")},parseDom:function(t){var e,n,i,o=document.createDocumentFragment(),r=0,a=[];if("string"==typeof t){for((e=document.createElement("div")).innerHTML=t,n=(i=e.childNodes).length;r<n;++r)a.push(i[r]);for(r=0;r<n;r++)o.appendChild(a[r])}else if("object"==typeof t&&t.nodeType)o.appendChild(t);else if(t instanceof v)for(r=0;r<t.length;r++)o.appendChild(t[r]);else v.log("传递的参数非法!");return o},each:function(t,e){var n=0,i=t.length;if(a(t))for(;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break},map:function(t,e){var n,i=0,o=t.length,r=[];if(a(t))for(;i<o;i++)null!=(n=e(t[i],i))&&r.push(n);else for(i in t)null!=(n=e(t[i],i))&&r.push(n);return T.apply([],r)},proxy:function(t,e){var n;return n=w.call(arguments,2),function(){return t.apply(e||this,n.concat(w.call(arguments)))}},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;i<n;i++)t[o++]=e[i];return t.length=o,t},unique:function(t){if(document.documentElement.compareDocumentPosition){var e=function(t,e){return t===e?0:t.compareDocumentPosition&&e.compareDocumentPosition?4&t.compareDocumentPosition(e)?-1:1:t.compareDocumentPosition?-1:1};t.sort(e);for(var n=1;n<t.length;n++)t[n]===t[n-1]&&t.splice(n--,1)}return t},dir:function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o)break;i.push(t)}return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},now:Date.now?Date.now:function(){return(new Date).getTime()}}),v.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return v.dir(t,"parentNode")},children:function(t){return v.sibling(t.firstChild)},siblings:function(t){return v.sibling((t.parentNode||{}).firstChild,t)},next:function(t){return s(t,"nextSibling")},prev:function(t){return s(t,"previousSibling")}},function(t,e){v.fn[t]=function(){var t=v.map(this,e);return this.length>1&&v.unique(t),this.pushStack(t)}}),v.fn.extend({parentToLevel:function(t){var e=t||1,n=0,i=v.map(this,function(t){for(var i=t;(i=i.parentNode)&&11!==i.nodeType&&++n<e;);return i});return this.length>1&&v.unique(i),this.pushStack(i)},child:function(t){return this.children().eq(t)}});var D={focus:{delegateType:"focusin"},blur:{delegateType:"focusout"}},M={tap:function(t,e){var n="touchstart",i="touchend";u(t,n,function(t){var e=v(t.target);e.attr("data-start-X",t.changedTouches[0].screenX+""),e.attr("data-start-Y",t.changedTouches[0].screenY+"")},!l(n)),u(t,i,function(t){var n=v(t.target),i=v.event.set.tapRange,o=t.changedTouches[0].screenX,r=parseInt(n.attr("data-start-X")),a=t.changedTouches[0].screenY,s=parseInt(n.attr("data-start-Y"));n.attr("data-end-X",o+""),n.attr("data-end-Y",a+""),Math.abs(o-r)<=i&&Math.abs(a-s)<=i&&e(t)},!l(i))}};v.event={add:function(t,e,n,i){var o=t.events||[];i=a(i=i||t)?i:[i],o.push({type:e,target:i,handler:n}),t.events=o,t.events[e]||(u(t,e,function(n){var i,n=d(n);v.each(t.events,function(o,r){var a,s;r.type===e&&(i=r.target,v.each(i,function(e,i){"string"==typeof i&&(a=v(i,t),(s=c(a,n.target))&&r.handler.call(s,n)),"object"==typeof i&&v.contains(i,n.target)&&r.handler.call(i,n)}))})},!l(e)),t.events[e]=!0)},del:function(t,e,n,i){var o=arguments,r=t.events;r&&r.length>0&&(r=1===o.length?[]:2===o.length?v.map(r,function(t){return t.type===e?null:t}):3===o.length?v.map(r,function(t){return t.type===e&&t.handler===n?null:t}):v.map(r,function(t){var o=t;return t.type===e&&t.handler===n&&i&&(o.target=v.map(t.target,function(t){var e=!1;for(var n in i)if(i[n]===t){e=!0;break}return e?null:t})),o})),t.events=r},trigger:function(t,e){},set:{tapRange:10}},v.fn.extend({on:function(t,e,n){for(var i,o=arguments,r=t.split(/\s+/),a=0;a<r.length;a++)t=r[a],v.each(this,function(r,a){2===o.length?(i=o[1],v.event.add(a,t,i)):(i=n,v.event.add(a,t,i,[e]))});return this},off:function(t,e,n){var i,o=arguments;return v.each(this,function(r,a){var s;0===o.length?v.event.del(a):1===o.length?v.event.del(a,t):2===o.length?(i=o[1],v.event.del(a,t,i)):(i=n,s=v(e,a),s=0===s.length?[e]:s,v.event.del(a,t,i,v(e)))}),this},trigger:function(t){v.each(this,function(e,n){v.event.trigger(n,t)})},bind:function(t,e){v.each(this,function(n,i){u(i,t,e,!l(t))})},unBind:function(t,e){v.each(this,function(n,i){i.removeEventListener?i.removeEventListener(t,e,!l(t)):i.detachEvent("on"+t,e)})}});var H=v.now(),z=/\?/,q=document.head||document.getElementsByTagName("head")[0],A=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,R=[],_=window.location.href.toLowerCase();try{0===(R=A.exec(_)).length&&(R=_.match(A))}catch(t){0===R.length&&(R=[location.protocol+"//"+location.host])}var O={url:"",type:"GET",async:!0,data:null,dataType:"text",jsonp:"callback",contentType:"application/x-www-form-urlencoded; charset=UTF-8",timeout:0,scriptCharset:"UTF-8",crossDomain:null,supportCORS:"withCredentials"in new XMLHttpRequest,removeIframe:!0};v.extend({serialize:function(t){var e=[];for(var n in t){var i=t[n];if(null!==i&&void 0!==i||(i=""),i.constructor==Array)for(var o=0,r=i.length;o<r;o++)e.push(n+"="+encodeURIComponent(i[o]));else e.push(n+"="+encodeURIComponent(i))}return e.join("&")},getData:function(t,e,n){(t=v.extend({},O,t)).type=t.type.toUpperCase(),null===t.crossDomain&&(t.crossDomain=g(t.url)),t.crossDomain?("GET"===t.type&&f(t,e),"POST"===t.type&&(t.supportCORS?p(t,e,n):m(t,e))):p(t,e,n)},getFormData:function(t){var e,n,i,o,r=t.find("input, textarea"),a={},s=[];if(0===r.length){for(i=t[0].getElementsByTagName("input"),o=t[0].getElementsByTagName("textarea"),e=0,n=i.length;e<n;e++)s.push(i[e]);for(e=0,n=o.length;e<n;e++)s.push(o[e]);r=s}return v.each(r,function(t,e){("checkbox"!==(e=v(e)).attr("type")||"checkbox"===e.attr("type")&&e.attr("checked"))&&(a[e.attr("name")]=e.val())}),a},parseJSON:function(t){return window.JSON?JSON.parse(t):new Function("return "+t)()},stringify:function(t){var e="";return window.JSON?e=JSON.stringify(t):(v.each(t,function(t,n){e+=","+t+":"+n}),""!=e&&(e=e.substring(1))),e},loadCSS:function(t){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,q.appendChild(e)}}),Tie.tool=v}(),function(t){function e(e,n){t.isNative(window.scrollTo)?window.scrollTo(e,n):document.documentElement&&document.documentElement.scrollTop?(document.documentElement.scrollLeft=e,document.documentElement.scrollTop=n):document.body&&(document.body.scrollLeft=e,document.body.scrollTop=n)}var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);t.extend({log:function(t){"undefined"!=typeof console&&console.log&&console.log(t)},render:function(t,e){t=t||"",e=e||[""];for(var n,i=/<%((?:(?!%>).)+)?%>/g,o=/(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,r="var r=[];\n",a=0,s=function(t,e){return r+=e?t.match(o)?t:"r.push("+t+");\n":""!==t?'r.push("'+t.replace(/"/g,'\\"')+'");\n':"",s};n=i.exec(t);)s(t.slice(a,n.index))(n[1],!0),a=n.index+n[0].length;s(t.substr(a,t.length-a)),r+='return r.join("");';for(var c="",l=0,u=(e=isNaN(e.length)?[e]:e).length;l<u;l++)c+=new Function(r.replace(/[\r\t\n]/g,"")).apply(e[l]);return c},dataReplace:function(t,e){t=t||"",e=e||[""];for(var n,i=/{{((?:(?!}}).)+)?}}/g,o="return ",r=0,a=function(t,e){return o+=e?"+this."+t+"+":'"'+t+'"',a};n=i.exec(t);)a(t.slice(r,n.index))(n[1],!0),r=n.index+n[0].length;return a(t.substr(r,t.length-r)),new Function(o).apply(e)},cookie:{EXPIRESWITHUNIT:/[smhdMy]$/,TIMEUNITS:{s:1,m:60,h:3600,d:86400,M:2592e3,y:31536e3},encoder:window.encodeURIComponent,decoder:window.decodeURIComponent,get:function(t,e){var n=this;t=n.encoder(t)+"=";var i,o=document.cookie,r=o.indexOf(t);return-1===r?e?void 0:"":(r+=t.length,-1===(i=o.indexOf(";",r))&&(i=o.length),n.decoder(o.substring(r,i)))},set:function(t,e,n,i,o,r){var a=this,s=[a.encoder(t)+"="+a.encoder(e)];if(n){var c,l;n instanceof Date?c=n:("string"==typeof n&&this.EXPIRESWITHUNIT.test(n)&&(n=n.substring(0,n.length-1),l=RegExp.lastMatch),isNaN(n)||(c=new Date).setTime(c.getTime()+n*this.TIMEUNITS[l||"m"]*1e3)),c&&s.push("expires="+c.toUTCString())}o&&s.push("path="+o),i&&s.push("domain="+i),r&&s.push("secure"),document.cookie=s.join(";")},del:function(t,e,n){document.cookie=this.encoder(t)+"="+(n?";path="+n:"")+(e?";domain="+e:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT"}},formatDate:function(t,e){var e=e||"yyyy-MM-dd hh:mm:ss",t=t||new Date;return Date.prototype.formatDt=Date.prototype.formatDt||function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},t.formatDt(e)},subChineseStr:function(t,e,n){e*=2;for(var i="",o=0,r=0;r<t.length;r++){if(t.charCodeAt(r)>255?o+=2:o++,o>=e)return n?i+"...":i;i+=t.charAt(r)}return t},scrollY:function(t,e){var e=e||0;window.scrollTo(0,t.position().top+e)},scrollTo:function(t,n,i){var o,r,a,s,c;i?(o=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),r=Math.max(document.documentElement.scrollTop,document.body.scrollTop),s=(t-o)/(i/50),c=(n-r)/(i/50),a=setInterval(function(){o+=s,r+=c,s>0&&o>t||c>0&&r>n||s<0&&o<t||c<0&&r<n?clearInterval(a):e(o,r)},50),setTimeout(function(){e(t,n)},i)):e(t,n)},isNative:function(t){return!!t&&(/\{\s*\[native code\]\s*\}/.test(t+"")||/\{\s*\/\* source code not available \*\/\s*\}/.test(t+""))},base64Encode:function(t){var e,i,o,r,a,s;for(o=t.length,i=0,e="";i<o;){if(r=255&t.charCodeAt(i++),i==o){e+=n.charAt(r>>2),e+=n.charAt((3&r)<<4),e+="==";break}if(a=t.charCodeAt(i++),i==o){e+=n.charAt(r>>2),e+=n.charAt((3&r)<<4|(240&a)>>4),e+=n.charAt((15&a)<<2),e+="=";break}s=t.charCodeAt(i++),e+=n.charAt(r>>2),e+=n.charAt((3&r)<<4|(240&a)>>4),e+=n.charAt((15&a)<<2|(192&s)>>6),e+=n.charAt(63&s)}return e},base64Decode:function(t){var e,n,o,r,a,s,c;for(s=t.length,a=0,c="";a<s;){do{e=i[255&t.charCodeAt(a++)]}while(a<s&&-1==e);if(-1==e)break;do{n=i[255&t.charCodeAt(a++)]}while(a<s&&-1==n);if(-1==n)break;c+=String.fromCharCode(e<<2|(48&n)>>4);do{if(61==(o=255&t.charCodeAt(a++)))return c;o=i[o]}while(a<s&&-1==o);if(-1==o)break;c+=String.fromCharCode((15&n)<<4|(60&o)>>2);do{if(61==(r=255&t.charCodeAt(a++)))return c;r=i[r]}while(a<s&&-1==r);if(-1==r)break;c+=String.fromCharCode((3&o)<<6|r)}return c},isMobileDevice:function(){var t=navigator.userAgent.toLowerCase(),e="ipad"==t.match(/ipad/i),n="iphone os"==t.match(/iphone os/i),i="midp"==t.match(/midp/i),o="rv:1.2.3.4"==t.match(/rv:1.2.3.4/i),r="ucweb"==t.match(/ucweb/i),a="android"==t.match(/android/i),s="windows ce"==t.match(/windows ce/i),c="windows mobile"==t.match(/windows mobile/i);return e||n||i||o||r||a||s||c},isIE:function(){var t=navigator.userAgent;return t.indexOf("MSIE")>=0&&t.indexOf("Opera")<0},clone:function(e){return t.parseJSON(t.stringify(e))},refresh:function(e,n){(n=n||Tie.view.wrapper).find("[ne-id='"+e+"']").each(function(e){var n,i=t(this),o=i.attr("ne-tmpl"),r=i.attr("ne-data");r&&(n=Tie.getByUID(r)),o&&(/^\>/.test(o)?i.html(t.render(Tie.tpl[o.substring(1)],n)):(i.after(t.render(Tie.tpl[o],n)),i.remove()))})}})}(Tie.tool),function(t){function e(){}var n=t.tool,i=/<(iframe|script|form|embed|video|h1)[\s\S]*?<\/\1>|<(link|embed) .*?>/gi,o=/end\-?text|content\-?text/i,r=/copyright|siteinfo|biaoti|shmbody|head|foot|about|more|^wen$/i,a=function(t){return t&&t.tagName?t.tagName.toLowerCase():""};e.prototype={parse:function(t,e,i){this.maxP=0,this.maxH=0,"function"==typeof t&&(i=e,e=t,t=null),t=t||document.body;var o=n(-1==location.host.indexOf("blog.")?"h1":"h2");o[0]||(o=n(".title,h1,h2"));var r,a=document.title.replace(/\s/g,"");o.each(function(t,e){var n=e.innerHTML.replace(/<.*?>/g,"").replace(/\s|&nbsp;?/gi,"");n&&n.length<90&&(!a||~a.indexOf(n.substr(0,5)))&&(r=e)}),r||n("h3").each(function(t,e){var n=e.innerHTML.replace(/<.*?>/g,"").replace(/\s|&nbsp;?/gi,"");n&&n.length<90&&~a.indexOf(n.substr(0,6))&&(r=e)});var s=r?r.innerHTML.replace(/<.*?>/g,"").trim():"";/\u52a0\u8f7d\u4e2d|loading|^\s+$/i.test(s)&&(s=""),this.state={title:s||document.title},this.detectByHost(t)||this.detectByP(t),"function"==typeof e&&(i||(this.state.content=this.state.content.replace(/<img .*?>/gi,"")),e(this.state))},detectByHost:function(t){var e=!1,o=location.host.replace(/.*?\.([^\s\.]+\.[^\s\.]+)$/,"$1"),r=location.host.replace(/.*?\.([^\s\.]+\.[^\s\.]+\.[^\s\.]+)$/,"$1"),a={"cfi.cn":function(){var e="";return n("#tdcontent",t).each(function(t,n){var o=n.innerHTML.replace(i,"").replace(/<table[\s\S]*?<\/table>/gi,"");e+=o}),e},"sohu.com":function(){var e="";return n("[itemprop=articleBody],#contentText",t).each(function(t,n){var o=n.innerHTML.replace(i,"");e+=o}),e},"blog.sina.com.cn":function(){var e="";return n(".articalContent",t).each(function(t,n){var o=n.innerHTML.replace(i,"");e+=o}),e},"blog.163.com":function(){var e="";return n(".nbw-blog",t).each(function(t,n){var o=n.innerHTML.replace(i,"");e+=o}),e},"k618.cn":function(){var e="";return n("#photoContainer .fenshuwz",t).each(function(t){var n=t.innerHTML?t.innerHTML.replace(i,""):"";e+=n}),e}},s=a[location.host]||a[r]||a[o];return s&&(e=s())&&(this.state.content=e),e},detectByP:function(t){var e="",i=this,o=[],s=document.body.offsetHeight;n("p,div>br",t).each(function(t,c){if(!r.test(c.className)&&("p"!=a(c)||c.innerHTML.replace(/\s|&nbsp;/gi,""))){var l=c.parentNode;i.query="",/^(i|font|b|em|strong|center)$/i.test(l.tagName)&&(i.query=RegExp.$1,l=l.parentNode),-1==o.indexOf(l)&&(!i.detect(l)&&n(c).position().top<.8*s&&(e+=c.outerHTML),o.push(l))}}),this.state.content||(this.state.content=e)},getContent:function(t){var e="",i=".rdtj";if(n("li a",t).length<3)if(n(i,t)[0]){var o=t.cloneNode(!0);n(i,o).remove(),e=o.innerHTML}else e=t.innerHTML;else n("p",t).each(function(t,n){e+=n.outerHTML});return e},detect:function(t){var e=t.className||"",a=t.id||"";if(t==document.body||r.test(e)||r.test(a))return!1;var s=Math.min(document.body.offsetWidth,980),c=this.getContent(t).replace(i,"");if((t.offsetWidth>s/2||/allContent/i.test(a))&&n(t).position().top<.6*document.body.offsetHeight&&(o.test(e)||o.test(a)||c.replace(/<(?!img).*?>/g,"").replace(/\s/g,"").length>60)){var l=n(this.query+" p",t).length,u=t.offsetHeight;if(l>this.maxP||u>this.maxH)return this.maxP=l,this.maxH=u,this.state.contentNode=t,this.state.content=c,!0}return!1}};var s=new e;t.third=t.third||{},t.third.extractor=s}(window.Tie),(Tie=window.Tie||{}).convertPath=function(t){var e;return"~"===t[0]?(e=location.href.indexOf(/mobile/),location.href.substring(0,e)+t.substring(1)):t},Tie.set={cntRowH:.48,limitCntH:0,tabItemCls:"js-tab-item-index",wrapperId:"js-tie-sdk-wrapper",loginBtnCls:{mail:"js-mail-login",weibo:"js-weibo-login",qq:"js-qq-login"},floorCls:{trunk:"js-single-tie",middle:"js-expand-floor",operateRow:"js-operate-row",arrow:"arrow",foldFlr:" z-fold-floor",cnt:"js-tie-cnt"},barCls:{title:"js-tie-title-bar",panel:"js-tie-panel-bar",input:"js-tie-input-bar",login:"js-tie-login-bar"},maskCls:"js-tie-mask",panelCls:{list:"js-tie-list",empty:"js-tie-empty-tip",load:"js-tie-load-more",hotList:"js-hot-list",newList:"js-new-list",noMore:"js-tie-no-more"},barId:{shareWin:"shareListWin"},stateCls:{visited:"z-visited",parallelFlr:" z-parallel-floor",visible:"z-visible",hidden:"z-hidden",visibleShare:"z-visible-share",inputR:"z-read",inputW:"z-write",enabled:"z-enabled",lock:"z-lock",hideTpl:"z-hide-lower"},inputCls:{submitBtn:"js-tie-submit-btn",parentPostIdInpt:"js-tie-parent-id",boxWrapper:"js-postinput",userBox:"js-username",pwdBox:"js-password",cntInput:"js-tie-content-input",parentIdInput:"js-quote-tie-id",joinNumLabel:"js-tie-join-count",tipTxt:"js-tip-txt"},dataAtr:{postId:"data-post-id",postUp:"data-post-up",tab:"data-tab",loginType:"data-login-type","最热":"hot","最新":"new"},iconBasePath:Tie.convertPath("https://img1.cache.netease.com/f2e/tie/yun/sdk/mobile/icons"),baseDataHost:/^http:\/\/(dev\.f2e|qa\.developer)\./.test(document.location.href)?"http://qaapi.gentie.163.com":"https://"+window.location.hostname,baseDataURL:"/products/<% this.productKey %>",thumbnailURL:"/webshot/cloudgentie",defaultUserTitleLink:"http://tie.163.com/gt/14/0226/12/9M0QKRDU00304IK1.html",cookie:{toCommentPage:"toMain",domain:".163.com"},storage:{unloginInput:"UNloginInput",prevLoginURL:"prevLoginURL"},thirdOauth:{base:"https://reg.163.com/outerLogin/oauth2/connect.do",target:{qzone:1,weibo:3},product:"gentie",url:Tie.convertPath("https://api.gentie.163.com/mobile/refresh.html"),mail:Tie.convertPath("https://api.gentie.163.com/mobile/login.html")},refreshIframeInterval:100,defaultConfig:{nestedHierarchy:6,startHideMdl:7,maxFloor:70,operators:["up","reply","share"],domContainer:"#cloud-tie-area"}},function(t){var e=t.tool;t.controller={create:function(t){var n=function(){this.init.apply(this,arguments)};return n.fn=n.prototype,n.fn.init=function(){},n.fn.eventSplitter=/^(\w+)\s*(.*)$/,n.fn.delegateEvents=function(t){function n(t){var n=[];return t&&e.each(t.split(/,/),function(t,e){r.test(e)&&(e=new Function("return "+e.replace(r,"this.")+";").call(i)),n.push(e)}),n}var i=this,o={stat:"click"},r=/^scope\./;e.each(t,function(t,r){var a,s,c="ne-"+r;r=o[r]||r,i.el.on(r,"["+c+"]",function(t){for(var o=e(this).attr(c).split(/\s+/),r=0;r<o.length;r++)a=o[r].match(/(\S+)\((\S+)?\)/),s=[t,i].concat(n(a[2])),i[a[1]].apply(this,s)})}),this.el.on("keyup blur","input,textarea",function(t){var n=e(this).attr("ne-model");i.temp=e.trim(e(this).val()),new Function("this."+n+"= this.temp;").call(i)})},n.fn.$=function(t){return e(t,this.el[0])},n.include=function(t){e.extend(this.fn,t)},t&&n.include(t),n}}}(window.Tie),function(t){function e(t){E.postMessage(t,"*")}function n(t){return t&&t.toString().split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/\,$/,"").split("").reverse().join("")||0}function i(){var t=C.position().top;v.scrollTo(0,t,200)}function o(t){var e=t.activeNum;e>1e4&&("0"===(e=(e/1e4).toFixed(1))[e.length-1]&&(e=e.substring(0,e.length-2)),e+="W"),R.html(e),!t.enterSwitch&&M.remove(),v(".cloud-tie-join-count .join-count").html(n(t.activeNum)),v(".cloud-tie-join-count .icon-comment").html("&#xe614;"),v(".cloud-tie-join-count").bind("tap",function(t){i()}),1===t.wapCFSId&&M.delCls("z-hidden").addCls("z-visible"),x.append(v.render(b.loginPopup))}function r(){i()}function a(){O.delCls("z-load").addCls("z-fcs").addCls("z-ok").child(1).html("发布成功"),setTimeout(function(){O.delCls("z-fcs").delCls("z-ok"),z.val(""),q.val(""),l(),r(),sessionStorage.removeItem(y.storage.unloginInput),p(),z[0].blur()},2e3)}function s(){e({action:"loadData"}),P=!0}function c(t){z[0].blur();var e,n=!1;return(t=v.trim(t)).length<2?e="文字不能少于2个字":t.length>1e3?e="文字不能超过1000个字":n=!0,n||(O.addCls("z-fcs").child(1).html(e),setTimeout(function(){O.delCls("z-fcs")},2e3)),n}function l(){var e=y.stateCls,n=e.inputR,i=e.inputW;e.visible,z[0].blur(),M.addCls(n).delCls(i),1!==t.config.wapCFSId&&M.delCls("z-visible").addCls("z-hidden"),setTimeout(function(){H.hide()},500),F&&clearInterval(F),w.unBind("touchmove",f),T.delCls("z-ygt-lock")}function u(t){var e=y.stateCls,n=e.inputR,i=e.inputW,o=e.visible,r=e.hidden;M.delCls(n).addCls(i).delCls(r).addCls(o),A.html(t?"回复跟贴":"写跟贴"),q.val(t||""),H.show(),F=setInterval(function(){v.scrollTo(0,0)},300),w.bind("touchmove",f),T.addCls("z-ygt-lock"),z[0].focus()}function d(){j||(j=v("#ygt-login-popup-1415")),D.show(),j.addCls("z-show"),w.bind("touchmove",f),M.addCls("z-hidden")}function h(){j.delCls("z-show"),w.unBind("touchmove",f),setTimeout(function(){D.hide(),1!==t.config.wapCFSId?M.addCls("z-hidden"):M.delCls("z-hidden")},500)}function p(){var t=v.trim(z.val());t?_.html(v.subChineseStr(t,12,!0)):_.html("写跟贴")}function f(t){return t.preventDefault(),!1}var m,g,v=t.tool,y=t.set,b={indexpage:'<iframe src="<% this.src %>" id="tie-js-sdk-ifr" scrolling="yes" frameborder="0"></iframe>',inputBar:['<div id="ygt-input-mask-1415" class="tie-input-mask"></div>','<div id="ygt-input-bar-1415" class="tie-input-bar z-read <% Tie.set.barCls.input %> z-hidden">','<div class="input-read">','<div class="read-box">','<div class="box-shape" ne-touchend="changeInput()" ne-stat="stat(type-input|area-3)">','<img src="<% Tie.set.iconBasePath %>/write_tie_27.png" class="i-write-tie"><span class="<% Tie.set.inputCls.tipTxt %>">写跟贴</span>',"</div>","</div>",'<div class="read-total" ne-touchend="toTop()">','<div class="total-box">','<span class="total-num <% Tie.set.inputCls.joinNumLabel %>"></span>','<span class="total-txt">人参与</span>',"</div>","</div>","</div>",'<div class="input-write">','<div class="submit-row">','<span class="row-title">写跟贴</span>','<span class="submit-cancel" ne-touchend="cancelSubmit()">取消</span>','<span class="submit-ok <% Tie.set.inputCls.submitBtn %>" ne-touchend="doSubmit()">发布</span>',"</div>",'<div class="input-row">','<textarea name="content" class="input-txt <% Tie.set.inputCls.cntInput %>" placeholder=""></textarea>','<input type="hidden" name="parentId" class="<% Tie.set.inputCls.parentIdInput %>">',"</div>","</div>","</div>",'<div id="ygt-tip-box" class="tip-box"><i class="icon"></i><span></span></div>'].join(""),loginPopup:['<div id="ygt-login-popup-1415" class="login-popup <% Tie.set.barCls.login %>">','<div class="login-wrap">','<div class="login-title">快速登录</div>',"<% if (Tie.config.ssoIcon) { %>",'<div class="login-item" ne-touchend="toLoginPage(SSO)" ne-stat="stat(type-singleLogin|area-2)">','<div class="item item-sso" style="background-image: url(<% Tie.config.sso.wapIcon %>);">','<span class="item-txt"><% Tie.config.sso.wapShowTitle %></span>',"</div>","</div>","<% } %>",'<div class="login-item item-mail" ne-touchstart="toLoginPage(mail)" ne-stat="stat(type-163Login|area-2)">','<div class="item item-mail">','<span class="item-txt">网易通行证登录</span>',"</div>","</div>",'<div class="login-item" ne-touchstart="toLoginPage(qq)" ne-stat="stat(type-qqLogin|area-2)">','<div class="item item-qq">','<span class="item-txt">QQ登录</span>',"</div>","</div>",'<div class="login-item" ne-touchstart="toLoginPage(weibo)" ne-stat="stat(type-sinaLogin|area-2)">','<div class="item item-weibo">','<span class="item-txt">新浪微博账号登录</span>',"</div>","</div>","</div>",'<div class="login-item item-close-btn" ne-touchstart="closeLoginPop()">取消</div>',"</div>"].join(""),mask:'<div id="ygt-g-mask-1415" class="g-mask <% Tie.set.maskCls %>" style="display:none;"></div>'},w=v(document.documentElement),T=v(document.body).append('<div id="ygt-fix-wrap-1415"></div>'),C=v("#"+window.cloudTieConfig.target),x=v("#ygt-fix-wrap-1415");x.append(v.render(b.inputBar+b.mask));var k=/(\?|&)debug=([a-zA-Z0-9]+)(&)?/,S="",L=window.location.href,I="https://api.gentie.163.com/mobile/index.html";k.test(L)&&("qa"===(S=L.match(k)[2])&&(S="qaapi"),I="https://"+S+".gentie.163.com/mobile/index.html","local"===S&&(I="https://qaapi.gentie.163.com/mobile/index.html")),cloudTieConfig.dataApi&&(I=cloudTieConfig.dataApi+"/mobile/inner.html"),C.append(v.render(b.indexpage,{src:I}));var j,N=v("#tie-js-sdk-ifr"),E=N[0].contentWindow,D=v("#ygt-g-mask-1415"),M=v("#ygt-input-bar-1415"),H=v("#ygt-input-mask-1415"),z=M.find("."+y.inputCls.cntInput),q=M.find("."+y.inputCls.parentIdInput),A=(M.find("."+y.inputCls.submitBtn),M.find(".row-title")),R=M.find("."+y.inputCls.joinNumLabel),_=M.find("."+y.inputCls.tipTxt),O=v("#ygt-tip-box");N.bind("load",function(t){e({action:"initTiePage",url:window.location.href,title:document.title,config:window.cloudTieConfig})}),D.bind("touchend",h),v(window).bind("message",function(n){var i=n.data,r=i.action;n.source===E&&("refreshIframeHeight"===r&&N.height()!==i.ifrmHeight&&N.height(i.ifrmHeight),"exitUser"===r&&(m=void 0),"replyTie"===r&&(P=!1,m||g.anonymousSwitch?u(i.parentId):d()),"writeTie"===r&&(P=!1,m||g.anonymousSwitch?u():d()),"submitOK"===r&&a(),"showLoginPopup"===r&&(d(),i.postData&&sessionStorage.setItem(y.storage.unloginInput,i.postData)),"getUserInfo"===r&&(m=t.user=i.userData),"getGlobalConfig"===r&&(g=t.config=i.config,o(g)),"showSharePopup"===r&&t.share.show(i.post),"extractEssayContent"===r&&t.third.extractor.parse(function(t){e({action:"getEssayContent",title:t.title,content:t.content},"*")}),"exitSSOUser"===r&&v.getData({url:i.url,jsonpCallback:"callback"},function(t){e({action:"exitAllUser"})}))}),history.pushState({yunTie:1},"page 2",""),v(window).bind("popstate",function(t){t.state.yunTie&&window.location.reload()});var P=!0;window.onscroll=function(t){y.stateCls,(window.scrollY+v(window).height()+10>=v(document.body).height()||C.offset().top<0)&&P?(s(),P=!1):setTimeout(function(){P=!0},1e3)},t.stat=function(t){e({action:"stat",ext:t})};var U={};U.indexCtrl=t.controller.create({init:function(t){this.el=t,this.delegateEvents(["touchstart","touchend","tap","stat"])},changeInput:function(e){P=!1,m||g.anonymousSwitch?u():d(),t.stat({type:"input",area:3}),e.preventDefault()},cancelSubmit:function(t){z[0].blur(),l(),p()},toLoginPage:function(t,n,i){"local"===S&&(y.thirdOauth.url="http://dev.f2e.gentie.163.com/tie/yun/sdk_dev/mobile/refresh.html");var o,r=y.thirdOauth,a=r.url,s=r.base+"?product="+r.product+"&url="+a+"&url2="+a+"&target=",c=s+r.target.qzone,l=s+r.target.weibo,u=r.mail+"?frompage="+window.location.href;e({action:"setPrevLoginURL",prevLoginUrl:encodeURI(window.location.href)}),"qq"===i?o=c:"weibo"===i?o=l:"mail"===i?o=u:"SSO"===i&&(o=g.sso.wapStyle),setTimeout(function(){window.location.href=o},500)},doSubmit:function(t){t.preventDefault(),c(z.val())&&(e({action:"doSubmit",postData:{content:z.val(),parentId:q.val()}}),O.addCls("z-load").child(1).html("正在提交"))},toTop:function(e){r(),t.stat({type:"jcount",area:3})},closeLoginPop:function(t){h()},stat:function(e,n,i){i&&t.stat(i)}}),new U.indexCtrl(w);var B,W;!function(t){B||(0===(B=v(document.head).find("meta[name='viewport']")).length&&B.append('<meta name="viewport" content="">'),W=B.attr("content")),t?B.attr("content",t):B.attr("content",W)}("width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no");var F;t.view={wrapper:C,rootNode:w}}(window.Tie),function(t){function e(t,e){var n,i=document.location.href,o=i,r=e.content,a={};return r=r.replace(/<[^>]+>/g,"").replace(/"/g,"“"),n=r,r.length>32&&(r=r.substr(0,32)+"..."),n.length>16&&(n=n.substr(0,16)+"..."),a.url=encodeURIComponent(i),a.title=encodeURIComponent("『"+n+"』-- 来自文章《"+document.title+"》"),a.digest=encodeURIComponent(r),a.image="",a.url3g=encodeURIComponent(o),a}var n,i=t.tool,o=(t.set,[{id:"yixin",name:"易信",url:"https://open.yixin.im/share?appkey=yxbf8731c27ff84214994b25be3a4ef1ac&type=image&title=<% this.title %>&pic=<% this.image %>&desc=<% this.digest %>&url=",icon:"share_yixin_74.png",stat:"type-shareYixin,area-2,commentId-"},{id:"qzone",name:"QQ空间",url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=<% this.image %>&title=<% this.title %>&pics=<% this.image %>&summary=<% this.digest %>",icon:"share_qzone_74.png",stat:"type-shareQzone,area-2,commentId-"},{id:"weibo",name:"新浪微博",url:"http://service.weibo.com/share/share.php?appkey=1755601839&title=<% this.title %>&url=<% this.url %>&pic=<% this.image %>&searchPic=false&source="+encodeURIComponent("网易云跟贴")+"sourceUrlhttp://tie.163.com/plaza/recommend.html",icon:"share_weibo_74.png",stat:"type-shareWeibo,area-2,commentId-"}]),r=['<div id="sharePopup" class="share-popup">','<h3 class="share-title">分享到</h3>','<div class="share-links">',"<% for (var i = 0, l = Tie.share.types.length; i < l; i++) { %>",'<a href="" class="link" target="_blank" data-share="<% Tie.share.types[i].id %>" stat="<% Tie.share.types[i].stat %><% this.commentId %>">','<img src="<% Tie.set.iconBasePath %>/<% Tie.share.types[i].icon %>" class="link-icon">','<span class="link-txt"><% Tie.share.types[i].name %></span>',"</a>","<% } %>","</div>",'<div class="share-close"><img src="<% Tie.set.iconBasePath %>/share_cls_70.png" class="cls-btn"></div>',"</div>"].join("");t.share={types:o,template:r,show:function(a){var s,c=t.config;n||(t.view.wrapper.append(i.render(r,i.extend({},c,a))),(n=i("#sharePopup")).find(".cls-btn").bind("click",function(e){t.share.hide()}),n.on("click","a",function(e){t.stat(i(this).attr("stat"))})),(s=e(0,a)).image=a.thumbnailImage,i.each(n.child(1).children(),function(t,e){i(e).attr("data-share")&&i(e).attr("href",i.render(o[t].url,s))}),n.show(),t.view.mask.show()},hide:function(){t.view.mask.hide(),n.hide()}}}(window.Tie),function(t){function e(){r?r=!0:(i||(i=t.view.wrapper.child(-1),i=i&&i[0].contentWindow),i||(i=t.view.wrapper.child(0),i=i&&i[0].contentWindow),i=i||o("#yun-tie-data-ifrm-923")[0].contentWindow)}function n(t){e(),i.postMessage(o.stringify(t),"*")}var i,o=t.tool,r=!1;o(window).bind("message",function(t){var r;e(),t.source===i&&("string"==typeof(r=t.data)&&(r=o.parseJSON(r)),"getSSOUserInfo"===r.action&&o.getData({url:r.url,jsonpCallback:"callback",crossDomain:!0},function(t){n({action:"SSO_check",result:t})}),"wakeupSSOStatus"===r.action&&o.getData({url:r.url,data:r.param,jsonpCallback:"callback",crossDomain:!0},function(t){n({action:"SSO_wakeup",result:t})}))}),t.open={ssoLogined:function(){n({action:"SSO_login"})},ssoExited:function(){n({action:"SSO_exit"})}}}(window.Tie);
"use strict";geotab.customButtons.engineDataButton=function(e,t,n){e.preventDefault();var o,i,a,r,l,d,c,s,g,u=(o=n.getState())&&o.id&&o.id.length?o.id:null,f=null!==u&&Array.isArray(u),p=(i=new Date,{startDate:new Date(i.getTime()-864e5).toISOString(),endDate:i.toISOString()}),v=(c=function(e,t,n,o){var i=document.createElement(e);return t&&function(e,t){for(var n in t)t.hasOwnProperty(n)&&e.setAttribute(n,t[n])}(i,t),n&&function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n])}(i,n),o&&o.appendChild(i),i},s=function e(){a&&(clearInterval(a),a=void 0),d&&d.removeEventListener("click",e,!1),r&&r.parentNode&&r.parentNode.removeChild(r),d=l=r=void 0},g=function(){return document.querySelector("#engineDataButton-addin")},{showMessage:function(e){(r=g())||((r=c("div",{id:"engineDataButton-addin"},{border:"1px solid #ffeb94","background-color":"#fffcdd",color:"#222",margin:"0 auto 0 auto",position:"relative",width:"600px",top:0,right:"0","z-index":"10004","table-layout":"fixed",opacity:.9,"text-align":"center"},document.body)).destroy=s,l=c("h2",null,{display:"inline-block",margin:"5px 0","word-wrap":"break-word","font-weight":"normal","font-size":"1.5em",color:"#222","text-align":"center"},r),(d=c("span",null,{float:"right","margin-top":"9px","font-size":"20px",width:"30px",position:"relative",top:"-0.1em",left:"-0.1em","font-family":"arial","font-style":"normal","font-weight":"bold",cursor:"pointer",display:"inline-block","text-decoration":"none","text-align":"center","vertical-align":"middle",overflow:"hidden","font-variant":"normal","text-transform":"none",color:"#222"},r)).innerHTML="x",d.addEventListener("click",s,!1),a=setInterval(s,5e3)),l.textContent=e},destroy:function(){(r=r||g())&&r.destroy()}});u&&"all"!==u&&!f?(v.destroy(),n.gotoPage("engineDataProfile",{dateRange:p,device:[u],diagnostic:["DiagnosticEngineSpeedId","DiagnosticGoDeviceVoltageId","DiagnosticDeviceTotalFuelId"]})):v.showMessage(f?"Graph cannot be opened for multiple devices":"Select any vehicle first")};
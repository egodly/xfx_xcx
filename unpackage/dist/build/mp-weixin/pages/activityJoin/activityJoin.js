(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activityJoin/activityJoin"],{4946:function(t,e,n){},"6e57":function(t,e,n){"use strict";var a=n("4946"),o=n.n(a);o.a},8236:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){return t.Utils.stopMultiClick(t.submit)})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},b313:function(t,e,n){"use strict";(function(t){n("10a4"),n("921b");a(n("66fd"));var e=a(n("d0eb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d0eb:function(t,e,n){"use strict";n.r(e);var a=n("8236"),o=n("e8ae");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("6e57");var s=n("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},e8ae:function(t,e,n){"use strict";n.r(e);var a=n("fc2c"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},fc2c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{Router:this.$Router,Utils:this.$Utils,submitData:{title:"",phone:"",description:"",content:"",relation_table:"article",relation_id:"",type:3,code:""},mainData:{},currentTime:61,text:"获取验证码",hasSend:!1}},onLoad:function(e){var n=this;t.setStorageSync("canClick",!0),n.submitData.relation_id=e.id,n.$Utils.loadAll(["getMainData"],n)},methods:{sendCode:function(){var t=this;if(console.log(111),!t.hasSend){var e=t.submitData.phone;if(11==e.trim().length&&/^1[3|4|5|6|7|8|9]\d{9}$/.test(e)){var n={data:{phone:t.submitData.phone}},a=function(e){if(1e5==e.solely_code){t.hasSend=!0;var n=setInterval(function(){t.currentTime--,t.text=t.currentTime+"s",t.currentTime<=0&&(clearInterval(n),t.hasSend=!1,t.text="重新发送",t.currentTime=61)},1e3)}else t.$Utils.showToast("发送失败","none")};t.$apis.codeGet(n,a)}else t.$Utils.showToast("请输入正确的手机号","none")}},formIdAdd:function(t){var e=this;console.log(t),e.$apis.WxFormIdAdd(t.detail.formId,Date.parse(new Date)/1e3+604800)},getMainData:function(){var e=this;console.log("852369");var n={tokenFuncName:"getProjectToken"};n.searchItem={user_no:t.getStorageSync("user_info").user_no};var a=function(t){1e5==t.solely_code&&t.info.data[0]?e.mainData=t.info.data[0]:e.$Utils.showToast(t.msg,"none"),e.$Utils.finishFunc("getMainData")};e.$apis.userInfoGet(n,a)},submit:function(){var e=this;t.setStorageSync("canClick",!1);var n=e.$Utils.cloneForm(e.submitData);delete n.content;var a=e.$Utils.checkComplete(n);if(a){var o=function(t,n){e.messageAdd()};e.$Utils.getAuthSetting(o)}else t.setStorageSync("canClick",!0),e.$Utils.showToast("请补全信息","none"),console.log(e.submitData)},messageAdd:function(){var e=this,n={tokenFuncName:"getProjectToken"};wx.getStorageSync("user_info")&&wx.getStorageSync("user_info").headImgUrl||(n.refreshToken=!0),n.data={},n.data=e.$Utils.cloneForm(e.submitData),n.smsAuth={phone:e.submitData.phone,code:e.submitData.code},console.log("postData",n);var a=function(n){1e5==n.solely_code?(e.$Utils.showToast("提交成功","none"),setTimeout(function(){t.navigateBack({delta:1})},800)):(t.setStorageSync("canClick",!0),e.$Utils.showToast(n.msg,"none",1e3))};e.$apis.messageAdd(n,a)}}};e.default=n}).call(this,n("543d")["default"])}},[["b313","common/runtime","common/vendor"]]]);
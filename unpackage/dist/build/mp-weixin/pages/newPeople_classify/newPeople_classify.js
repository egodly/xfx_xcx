(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/newPeople_classify/newPeople_classify"],{"0961":function(t,a,n){"use strict";n.r(a);var e=n("cd25"),o=n("6a0f");for(var i in o)"default"!==i&&function(t){n.d(a,t,function(){return o[t]})}(i);n("194c");var c=n("2877"),r=Object(c["a"])(o["default"],e["a"],e["b"],!1,null,null,null);a["default"]=r.exports},"194c":function(t,a,n){"use strict";var e=n("9114"),o=n.n(e);o.a},"6a0f":function(t,a,n){"use strict";n.r(a);var e=n("dc05"),o=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,function(){return e[t]})}(i);a["default"]=o.a},9114:function(t,a,n){},cd25:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;t._isMounted||(t.e0=function(a){return t.Router.navigateTo({route:{path:"/pages/goodsJoinDetail/goodsJoinDetail"}})})},o=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return o})},ceae:function(t,a,n){"use strict";(function(t){n("10a4"),n("921b");e(n("66fd"));var a=e(n("0961"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("543d")["createPage"])},dc05:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{Router:this.$Router,mainData:[],indProDate:[{},{},{},{},{}]}},onLoad:function(t){var a=this;a.paginate=a.$Utils.cloneForm(a.$AssetsConfig.paginate),a.category_id=t.id,a.$Utils.loadAll(["getMainData"],a)},onReachBottom:function(){console.log("onReachBottom");var a=this;!a.isLoadAll&&t.getStorageSync("loadAllArray")&&(a.paginate.currentPage++,a.getMainData())},methods:{getMainData:function(t){var a=this;t&&(a.mainData=[],a.paginate={count:0,currentPage:1,is_page:!0,pagesize:5});var n={};n.paginate=a.$Utils.cloneForm(a.paginate),n.searchItem={thirdapp_id:2,type:1,category_id:a.category_id,level:0};var e=function(t){t.info.data.length>0?a.mainData.push.apply(a.mainData,t.info.data):a.$Utils.showToast("没有更多了","none"),console.log("self.mainData",a.mainData),a.$Utils.finishFunc("getMainData")};a.$apis.productGet(n,e)}}};a.default=n}).call(this,n("543d")["default"])}},[["ceae","common/runtime","common/vendor"]]]);
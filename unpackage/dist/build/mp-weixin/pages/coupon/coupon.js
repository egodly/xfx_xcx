(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/coupon/coupon"],{"1d40":function(t,a,e){"use strict";e.r(a);var n=e("6035"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a},"39e2":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;t._isMounted||(t.e0=function(a){return t.Router.navigateTo({route:{path:"/pages/coupon_rule/coupon_rule"}})})},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},6035:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{Router:this.$Router,swiperData:{},mainData:[],cuponList:[{},{}],freeList:[{},{}],current:1,getBefore:{caseData:{tableName:"Label",searchItem:{title:["=",["积分兑换"]]},middleKey:"category_id",key:"id",condition:"in"}},is_show:!1,is_blackAlert:!1}},onLoad:function(){var t=this;t.paginate=t.$Utils.cloneForm(t.$AssetsConfig.paginate),t.$Utils.loadAll(["getSliderData","getMainData","getUserInfoData"],t)},onReachBottom:function(){console.log("onReachBottom");var a=this;!a.isLoadAll&&t.getStorageSync("loadAllArray")&&(a.paginate.currentPage++,a.getMainData())},methods:{getUserInfoData:function(){var a=this,e={};e.searchItem={user_no:t.getStorageSync("user_info").user_no},e.tokenFuncName="getProjectToken";var n=function(t){t.info.data.length>0?a.userInfoData=t.info.data[0]:a.$Utils.showToast(t.msg,"none"),a.$Utils.finishFunc("getUserInfoData")};a.$apis.userInfoGet(e,n)},couponAdd:function(a){var e=this,n=(new Date).getTime(),i={tokenFuncName:"getProjectToken",coupon_id:e.mainData[a].id,data:{invalid_time:n+e.mainData[a].valid_time}};1==e.current?i.pay={score:e.mainData[a].price}:i.pay={score:0},1==e.current&&(i.saveFunction=[{FuncName:"wxTemplate",searchItem:{user_no:t.getStorageSync("user_info").user_no},template:"使用积分提醒",data_arr:{keyword1:{value:e.mainData[a].price+"分"},keyword2:{value:parseFloat(e.userInfoData.score)-parseFloat(e.totalScore)+"分"}},thirdapp_id:2}]),console.log("postData",i);var o=function(t){t&&1e5==t.solely_code?e.$Utils.showToast("领取成功","none"):e.$Utils.showToast(t.msg,"none")};e.$apis.couponAdd(i,o)},userCouponAdd:function(t){var a=this,e=(new Date).getTime(),n={tokenFuncName:"getProjectToken",data:{invalid_time:e+a.mainData[t].valid_time,condition:a.mainData[t].condition,coupon_no:a.mainData[t].coupon_no,discount:a.mainData[t].discount,price:a.mainData[t].price,type:a.mainData[t].type,use_limit:a.mainData[t].use_limit,value:a.mainData[t].value,pay_status:1,status:1,use_step:1,snap_coupon:a.mainData[t]}};console.log("postData",n);var i=function(t){t&&1e5==t.solely_code?a.$Utils.showToast("领取成功","none"):a.$Utils.showToast(t.msg,"none")};a.$apis.userCouponAdd(n,i)},change:function(t){var a=this;t!=a.current&&(a.current=t,1==a.current?a.getBefore={caseData:{tableName:"Label",searchItem:{title:["=",["积分兑换"]]},middleKey:"category_id",key:"id",condition:"in"}}:a.getBefore={caseData:{tableName:"Label",searchItem:{title:["=",["免费领取"]]},middleKey:"category_id",key:"id",condition:"in"}},a.getMainData(!0))},chageSelt:function(t){var a=this;t!=a.selt&&(a.selt=t)},deltAlert:function(){var t=this;t.is_show=!t.is_show},blackAlert:function(){var t=this;t.is_blackAlert=!t.is_blackAlert},getMainData:function(t){var a=this,e=Date.parse(new Date);t&&(a.mainData=[],a.paginate={count:0,currentPage:1,is_page:!0,pagesize:5});var n={};n.paginate=a.$Utils.cloneForm(a.paginate),n.searchItem={thirdapp_id:2,start_time:["<",e],end_time:[">",e]},n.getBefore=a.$Utils.cloneForm(a.getBefore);var i=function(t){if(t.info.data.length>0){a.mainData.push.apply(a.mainData,t.info.data);for(var e=0;e<a.mainData.length;e++)a.mainData[e].startTime=a.$Utils.timeto(a.mainData[e].start_time,"ymd"),a.mainData[e].endTime=a.$Utils.timeto(a.mainData[e].end_time,"ymd")}else a.$Utils.showToast("没有更多了","none");console.log("self.mainData",a.mainData),a.$Utils.finishFunc("getMainData")};a.$apis.couponGet(n,i)},getSliderData:function(){var t=this,a={searchItem:{thirdapp_id:2,title:"优惠券轮播"}},e=function(a){a.info.data.length>0&&(t.swiperData=a.info.data[0]),console.log("self.swiperData",t.swiperData),t.$Utils.finishFunc("getSliderData")};t.$apis.labelGet(a,e)}}};a.default=e}).call(this,e("543d")["default"])},7015:function(t,a,e){"use strict";e.r(a);var n=e("39e2"),i=e("1d40");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("f2ea");var s=e("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=r.exports},bc0e:function(t,a,e){"use strict";(function(t){e("10a4"),e("921b");n(e("66fd"));var a=n(e("7015"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},f2ea:function(t,a,e){"use strict";var n=e("f8a2"),i=e.n(n);i.a},f8a2:function(t,a,e){}},[["bc0e","common/runtime","common/vendor"]]]);
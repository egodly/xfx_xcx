(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myOrder/myOrder"],{"1b2e":function(t,a,e){"use strict";var n=e("7f0b"),r=e.n(n);r.a},"233e":function(t,a,e){"use strict";e.r(a);var n=e("c36e"),r=e("5dea");for(var o in r)"default"!==o&&function(t){e.d(a,t,function(){return r[t]})}(o);e("1b2e");var s=e("2877"),c=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);a["default"]=c.exports},"5dea":function(t,a,e){"use strict";e.r(a);var n=e("f7f0"),r=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=r.a},"7f0b":function(t,a,e){},c36e:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;t._isMounted||(t.e0=function(a){return t.Router.navigateTo({route:{path:"/pages/myOrder_hexiao/myOrder_hexiao?id="+a.currentTarget.dataset.id}})})},r=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return r})},ccd7:function(t,a,e){"use strict";(function(t){e("10a4"),e("921b");n(e("66fd"));var a=n(e("233e"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},f7f0:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{Router:this.$Router,mainData:[],searchItem:{transport_type:2},currentStatus:1,currentType:2}},onLoad:function(t){var a=this;a.paginate=a.$Utils.cloneForm(a.$AssetsConfig.paginate)},onShow:function(){var t=this;t.mainData=[],t.getMainData(!0)},onReachBottom:function(){console.log("onReachBottom");var a=this;!a.isLoadAll&&t.getStorageSync("loadAllArray")&&(a.paginate.currentPage++,a.getMainData())},methods:{onShareAppMessage:function(a){console.log(a);var e=this,n=a.target.dataset.index;return"button"===a.from?{title:e.mainData[n].products[0].snap_product.product.title?e.mainData[n].products[0].snap_product.product.title:"",imageUrl:e.mainData[n].products[0].snap_product.product.mainImg[0]&&e.mainData[n].products[0].snap_product.product.mainImg[0].url?e.mainData[n].products[0].snap_product.product.mainImg[0].url:"",desc:t.getStorageSync("user_info").nickname+"邀请您参与团购",path:"/pages/goodsJoinDetail/goodsJoinDetail?id="+e.mainData[n].products[0].snap_product.product.id+"&order_id="+e.mainData[n].id,success:function(t){console.log("转发成功:"+JSON.stringify(t))},fail:function(t){console.log("转发失败:"+JSON.stringify(t))}}:{title:e.mainData[n].products[0].snap_product.product.title,imageUrl:e.mainData[n].products[0].snap_product.product.mainImg[0].url,desc:"小蜂拼拼社区团购",path:"/pages/goodsJoinDetail/goodsJoinDetail?id="+e.mainData[n].products[0].snap_product.product.id,success:function(t){console.log("转发成功:"+JSON.stringify(t))},fail:function(t){console.log("转发失败:"+JSON.stringify(t))}}},change:function(t){var a=this;2==a.currentType?t!=a.currentStatus&&(a.currentStatus=t,1==a.currentStatus?delete a.searchItem.check_status:2==a.currentStatus?a.searchItem.check_status=0:3==a.currentStatus&&(a.searchItem.check_status=1),a.getMainData(!0)):(a.currentStatus=t,1==a.currentStatus?delete a.searchItem.transport_status:2==a.currentStatus?a.searchItem.transport_status=0:3==a.currentStatus?a.searchItem.transport_status=1:4==a.currentStatus&&(a.searchItem.transport_status=2),a.getMainData(!0))},changeone:function(t){var a=this;t!=a.currentType&&(delete a.searchItem.transport_status,a.currentStatus=1,a.currentType=t,a.searchItem.transport_type=a.currentType,a.searchItem.check_status&&delete a.searchItem.check_status,a.getMainData(!0))},getMainData:function(a){var e=this;a&&(e.mainData=[],e.paginate={count:0,currentPage:1,pagesize:5,is_page:!0});var n={};n.paginate=e.$Utils.cloneForm(e.paginate),n.searchItem=e.$Utils.cloneForm(e.searchItem),n.searchItem.user_no=t.getStorageSync("user_info").user_no,n.searchItem.pay_status=1,n.tokenFuncName="getProjectToken",n.getAfter={shop:{tableName:"UserInfo",middleKey:"shop_no",key:"user_no",searchItem:{status:1},condition:"=",info:["shop_name"]}};var r=function(t){t.info.data.length>0&&e.mainData.push.apply(e.mainData,t.info.data),console.log(e.mainData),e.$Utils.finishFunc("getMainData")};e.$apis.orderGet(n,r)},orderUpdate:function(t,a){var e=this,n={data:{}};n.searchItem={id:e.mainData[t].id},3==a&&(n.data.transport_status=2),5!=e.mainData[t].order_step&&(n.data.order_step=a),n.tokenFuncName="getProjectToken",console.log("postData",n);var r=function(t){1e5==t.solely_code?(e.$Utils.showToast("操作成功","none"),setTimeout(function(){e.getMainData(!0)},1e3)):e.$Utils.showToast(t.msg,"none")};e.$apis.orderUpdate(n,r)}}};a.default=e}).call(this,e("543d")["default"])}},[["ccd7","common/runtime","common/vendor"]]]);
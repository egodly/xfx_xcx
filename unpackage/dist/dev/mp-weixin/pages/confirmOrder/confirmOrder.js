(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/confirmOrder/confirmOrder"],{

/***/ 123:
/*!*****************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/main.js?{"page":"pages%2FconfirmOrder%2FconfirmOrder"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _confirmOrder = _interopRequireDefault(__webpack_require__(/*! ./pages/confirmOrder/confirmOrder.vue */ 124));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_confirmOrder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 124:
/*!**********************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/confirmOrder/confirmOrder.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirmOrder_vue_vue_type_template_id_b3721984___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmOrder.vue?vue&type=template&id=b3721984& */ 125);
/* harmony import */ var _confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmOrder.vue?vue&type=script&lang=js& */ 127);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _confirmOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmOrder.vue?vue&type=style&index=0&lang=css& */ 129);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 19);






/* normalize component */

var component = Object(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _confirmOrder_vue_vue_type_template_id_b3721984___WEBPACK_IMPORTED_MODULE_0__["render"],
  _confirmOrder_vue_vue_type_template_id_b3721984___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "XiaoFengXia_MiniProgram/pages/confirmOrder/confirmOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 125:
/*!*****************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/confirmOrder/confirmOrder.vue?vue&type=template&id=b3721984& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_template_id_b3721984___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirmOrder.vue?vue&type=template&id=b3721984& */ 126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_template_id_b3721984___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_template_id_b3721984___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 126:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/confirmOrder/confirmOrder.vue?vue&type=template&id=b3721984& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      return _vm.Router.navigateTo({
        route: {
          path: "/pages/myZiTiAddress/myZiTiAddress"
        }
      })
    }

    _vm.e1 = function($event) {
      return _vm.Router.navigateTo({
        route: {
          path: "/pages/myAddress/myAddress"
        }
      })
    }

    _vm.e2 = function($event) {
      return _vm.Utils.stopMultiClick(_vm.submit)
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 127:
/*!***********************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/confirmOrder/confirmOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirmOrder.vue?vue&type=script&lang=js& */ 128);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 128:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/confirmOrder/confirmOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      Router: this.$Router,
      Utils: this.$Utils,
      addressData: {},
      mainData: [],
      totalPrice: 0,
      userInfoData: {},
      transportFee: 0,
      specialProvince: [],
      type: '',
      num: 1,
      shopData: {},
      pay: {
        coupon: [] },

      array: [],
      couponData: [],
      couponIndex: -1,
      showCoupon: false,
      group_no: '',
      leader_no: '',
      chooseCoupon: [],
      isBargain: false };

  },

  onLoad: function onLoad(options) {
    var self = this;
    uni.setStorageSync('canClick', true);

    var zeroNum = 1;
    var oneNum = parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.two);
    var twoNum = uni.getStorageSync('user_info').thirdApp.custom_rule.three - uni.getStorageSync('user_info').thirdApp.custom_rule.two;
    var threeNum = uni.getStorageSync('user_info').thirdApp.custom_rule.four - uni.getStorageSync('user_info').thirdApp.custom_rule.three;
    var fourNum = uni.getStorageSync('user_info').thirdApp.custom_rule.five - uni.getStorageSync('user_info').thirdApp.custom_rule.four;
    var fiveNum = uni.getStorageSync('user_info').thirdApp.custom_rule.six - uni.getStorageSync('user_info').thirdApp.custom_rule.five;
    self.mainData = uni.getStorageSync('payPro');
    console.log('self.data.mainData', self.mainData);
    self.type = options.type;
    console.log('self.type', self.type);
    self.array = [
    zeroNum,
    oneNum,
    twoNum,
    threeNum,
    fourNum,
    fiveNum];

    if (options.leader_no) {
      self.leader_no = options.leader_no;
    };
    if (uni.getStorageSync('group_no')) {
      self.group_no = uni.getStorageSync('group_no');
    };
    if (options.order_id) {
      self.orderId = options.order_id;
      self.price = options.price;
      self.isBargain = true;
    };
    console.log('self.array', self.array);

    self.specialProvince = uni.getStorageSync('user_info').thirdApp.codeName.split('-');
    console.log('self.specialProvince', self.specialProvince);
    self.$Utils.loadAll(['getUserInfoData', 'getUserCouponData'], self);
  },

  onShow: function onShow() {
    var self = this;
    if (uni.getStorageSync('chooseShopData')) {
      self.shopData = uni.getStorageSync('chooseShopData');
    };
    if (uni.getStorageSync('choosedAddressData')) {
      self.addressData = uni.getStorageSync('choosedAddressData');
      if (self.specialProvince.indexOf(self.addressData.province) >= 0) {
        self.transportFee = uni.getStorageSync('user_info').thirdApp.custom_rule.special;
      } else {
        self.transportFee = uni.getStorageSync('user_info').thirdApp.custom_rule.freight;
      }

    } else {
      self.getAddressData();
    };
    if (self.specialProvince.indexOf(self.addressData.province) >= 0) {
      console.log(21321);
      self.transportFee = uni.getStorageSync('user_info').thirdApp.custom_rule.special;
    } else {
      self.transportFee = uni.getStorageSync('user_info').thirdApp.custom_rule.freight;
    }
    self.countTotalPrice();
    console.log('self.shopData', self.shopData);
  },

  methods: {

    formIdAdd: function formIdAdd(e) {
      var self = this;
      console.log(e);
      self.$apis.WxFormIdAdd(e.detail.formId, Date.parse(new Date()) / 1000 + 7 * 86400);
    },

    isShowCoupon: function isShowCoupon() {
      var self = this;
      self.showCoupon = !self.showCoupon;
    },

    useCoupon: function useCoupon(index) {
      var self = this;
      console.log(index);
      var id = self.couponData[index].id;
      self.couponIndex = -1;
      var findCoupon = self.$Utils.findItemInArray(self.couponData, 'id', id);
      var findItem = self.$Utils.findItemInArray(self.pay.coupon, 'id', id);
      console.log('findCoupon', findCoupon);
      self.showCoupon = false;
      if (self.pay.coupon.length >= 1) {
        self.pay.coupon = [];
        self.chooseCoupon = [];
      };
      if (findCoupon) {
        findCoupon = findCoupon[1];
        var findSameCoupon = self.$Utils.findItemsInArray(self.pay.coupon, 'product_id', id);
      } else {
        self.$Utils.showToast('优惠券错误', 'none');
        return;
      };
      if (findItem) {
        self.pay.coupon.splice(findItem[0], 1);
        self.chooseCoupon = [];
      } else {
        console.log('self.data.price - self.data.couponTotalPrice', self.totalPrice - self.couponTotalPrice);
        console.log('findCoupon.condition', findCoupon.condition);
        if (self.totalPrice - self.couponTotalPrice < findCoupon.condition) {
          self.$Utils.showToast('未达满减标准', 'none');
          return;
        };
        console.log('findSameCoupon.length', findSameCoupon.length);
        if (self.pay.coupon.length >= 1) {
          self.$Utils.showToast('叠加使用超限', 'none');

          return;
        };
        if (findCoupon.type == 1) {
          var couponPrice = findCoupon.value;
          console.log('findCoupon.discount', findCoupon.discount);
        } else if (findCoupon.type == 2) {

          var couponPrice = parseFloat(self.totalPrice).toFixed(2) - parseFloat(findCoupon.discount / 100 * self.totalPrice).
          toFixed(2);
        };
        if (parseFloat(couponPrice) + parseFloat(self.couponTotalPrice) > parseFloat(self.totalPrice)) {
          couponPrice = parseFloat(self.totalPrice).toFixed(2) - parseFloat(self.couponTotalPrice).toFixed(2);
        };
        self.pay.coupon.push({
          id: id,
          price: couponPrice.toFixed(2) });

        self.chooseCoupon.push({
          id: id,
          price: couponPrice });

        self.showCoupon = false;
        self.couponIndex = index;
      };
      self.countTotalPrice();
    },

    getUserCouponData: function getUserCouponData() {
      var self = this;
      var now = Date.parse(new Date());
      var postData = {};
      postData.tokenFuncName = 'getProjectToken';
      postData.searchItem = {
        use_step: 1,
        type: ['in', [1, 2]] };

      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.couponData.push.apply(self.couponData, res.info.data);
        }
        if (!self.orderId) {
          self.getProductCouponData();
        } else {
          self.$Utils.finishFunc('getUserCouponData');
        }
      };
      self.$apis.userCouponGet(postData, callback);
    },

    getProductCouponData: function getProductCouponData() {
      var self = this;
      var now = Date.parse(new Date());
      var postData = {};
      postData.tokenFuncName = 'getProjectToken';
      postData.searchItem = {
        use_step: 1,
        type: ['in', [1, 2]] };

      postData.getBefore = {
        coupon: {
          tableName: 'CouponRelation',
          searchItem: {
            product_no: ['in', [self.mainData.sku[0].sku.product.product_no]] },

          middleKey: 'coupon_no',
          key: 'coupon_no ',
          condition: 'in' } };


      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.couponData.push.apply(self.couponData, res.info.data);
        }
        self.$Utils.finishFunc('getUserCouponData');
      };
      self.$apis.userCouponGet(postData, callback);
    },

    getUserInfoData: function getUserInfoData() {
      var self = this;
      console.log('852369');

      var nowTime = Date.parse(new Date()) / 1000;
      var postData = {};
      postData.tokenFuncName = 'getProjectToken';
      postData.searchItem = {
        user_no: uni.getStorageSync('user_info').user_no };

      postData.getAfter = {
        orderCount: {
          tableName: 'Order',
          searchItem: {
            create_time: ['between', [uni.getStorageSync('user_info').info.vip_time, nowTime]],
            status: 1,
            type: 1,
            pay_status: 1 },

          middleKey: 'user_no',
          key: 'user_no',
          condition: 'in',
          compute: {
            count: [
            'count',
            'count',
            {
              create_time: ['between', [uni.getStorageSync('user_info').info.vip_time, nowTime]],
              status: 1,
              type: 1,
              pay_status: 1 }] } } };





      var callback = function callback(res) {
        if (res.solely_code == 100000 && res.info.data[0]) {
          self.userInfoData = res.info.data[0];
        } else {
          self.$Utils.showToast(res.msg, 'none');
        };
        self.$Utils.finishFunc('getUserInfoData');
      };
      self.$apis.userInfoGet(postData, callback);
    },

    changeType: function changeType(num) {
      var self = this;
      if (self.num != num) {
        self.num = num;
        self.countTotalPrice();
      }
    },

    submit: function submit() {
      var self = this;
      uni.setStorageSync('canClick', false);
      if (self.num == 1) {
        if (JSON.stringify(self.shopData) == '{}') {
          uni.setStorageSync('canClick', true);
          self.$Utils.showToast('请选择自提门店', 'none');
        } else {
          if (self.orderId) {
            var callback = function callback(user, res) {
              self.updateOrder();
            };
            self.$Utils.getAuthSetting(callback);
          } else {
            var _callback = function _callback(user, res) {
              self.addOrder();
            };
            self.$Utils.getAuthSetting(_callback);
          }
        }
      } else {
        if (JSON.stringify(self.addressData) == '{}') {
          uni.setStorageSync('canClick', true);
          self.$Utils.showToast('请选择收货地址', 'none');
        } else {
          if (self.orderId) {
            var _callback2 = function _callback2(user, res) {
              self.updateOrder();
            };
            self.$Utils.getAuthSetting(_callback2);
          } else {
            var _callback3 = function _callback3(user, res) {
              self.addOrder();
            };
            self.$Utils.getAuthSetting(_callback3);
          }
        }
      }

    },

    updateOrder: function updateOrder() {
      var self = this;
      var now = Date.parse(new Date());
      var postData = {};
      postData.tokenFuncName = 'getProjectToken';
      if (!wx.getStorageSync('user_info') || !wx.getStorageSync('user_info').headImgUrl) {
        postData.refreshToken = true;
      };
      postData.data = {};
      postData.searchItem = {
        id: self.orderId };

      if (self.num == 1) {
        postData.data.transport_type = 2;
        postData.data.shop_no = self.shopData.user_no;
      } else {
        postData.data.transport_type = 1;
        postData.data.transport_fee = self.transportFee;
        postData.snap_address = self.addressData;
      };
      var callback = function callback(res) {
        if (res && res.solely_code == 100000) {
          self.payNow();
        } else {
          uni.setStorageSync('canClick', true);
          uni.showToast({
            title: res.msg,
            duration: 2000 });

        };
      };
      self.$apis.orderUpdate(postData, callback);
    },



    addOrder: function addOrder() {
      var self = this;
      var now = Date.parse(new Date());
      var postData = self.$Utils.cloneForm(self.mainData);
      postData.tokenFuncName = 'getProjectToken';

      if (!wx.getStorageSync('user_info') || !wx.getStorageSync('user_info').headImgUrl) {
        postData.refreshToken = true;
      };
      postData.data = {};
      if (self.num == 1) {
        postData.data.transport_type = 2;
        postData.data.shop_no = self.shopData.user_no;
      } else {
        postData.data.transport_type = 1;
        postData.data.transport_fee = self.transportFee;
        postData.snap_address = self.addressData;
      };
      if (self.type == 2) {
        postData.isGroup = true;
        postData.data.standard = self.mainData.sku[0].sku.product.standard;
        console.log(self.mainData.sku[0].sku.product.duration);
        console.log(now);
        postData.data.invalid_time = parseFloat(self.mainData.sku[0].sku.product.duration) + parseFloat(now);
      };
      if (self.leader_no != '') {
        postData.data.leader_no = self.leader_no;
      };
      if (self.group_no != '') {
        postData.group_no = self.group_no;
      };
      var callback = function callback(res) {
        if (res && res.solely_code == 100000) {
          self.orderId = res.info.id;
          self.payNow();
        } else {
          uni.setStorageSync('canClick', true);
          uni.showToast({
            title: res.msg,
            duration: 2000 });

        };
      };
      self.$apis.addOrder(postData, callback);
    },

    payNow: function payNow(order_id) {
      var self = this;
      var postData = self.$Utils.cloneForm(self.pay);
      /* postData.wxPay = {
                                                      	price: self.totalPrice
                                                      };
                                                      postData.score = {
                                                      	price:self.totalScore
                                                      }; */
      postData.tokenFuncName = 'getProjectToken',
      postData.searchItem = {
        id: self.orderId };

      for (var i = 0; i < self.array.length; i++) {
        if (i == parseInt(self.userInfoData.level) && parseInt(self.array[i]) - parseInt(self.userInfoData.orderCount.count) <= 1) {
          postData.payAfter = [
          {
            tableName: 'UserInfo',
            FuncName: 'update',
            data: {
              level: self.userInfoData.level + 1,
              vip_time: Date.parse(new Date()) / 1000 },

            searchItem: {
              user_no: uni.getStorageSync('user_info').user_no } }];



        }
      };
      var callback = function callback(res) {
        if (res.solely_code == 100000) {
          uni.setStorageSync('canClick', true);
          uni.removeStorageSync('group_no');
          if (res.info) {
            var payCallback = function payCallback(payData) {
              console.log('payData', payData);
              if (payData == 1) {
                uni.showToast({
                  title: '支付成功',
                  duration: 1000,
                  success: function success() {

                  } });

                setTimeout(function () {
                  self.$Router.redirectTo({ route: { path: '/pages/myOrder/myOrder' } });
                }, 1000);
              } else {
                uni.setStorageSync('canClick', true);
                uni.showToast({
                  title: '支付失败',
                  duration: 2000 });

              };
            };
            self.$Utils.realPay(res.info, payCallback);
          } else {

            uni.showToast({
              title: '支付成功',
              duration: 1000,
              success: function success() {

              } });

            setTimeout(function () {
              self.$Router.redirectTo({ route: { path: '/pages/myOrder/myOrder' } });
            }, 1000);
          };
        } else {
          uni.setStorageSync('canClick', true);
          uni.showToast({
            title: res.msg,
            duration: 2000 });

        };
      };
      self.$apis.pay(postData, callback);
    },

    getAddressData: function getAddressData() {
      var self = this;
      var postData = {};
      postData.tokenFuncName = 'getProjectToken';
      postData.searchItem = {
        isdefault: 1 };

      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.addressData = res.info.data[0];
          if (self.specialProvince.indexOf(self.addressData.province) >= 0) {
            console.log(21321);
            self.transportFee = uni.getStorageSync('user_info').thirdApp.custom_rule.special;
          } else {
            self.transportFee = uni.getStorageSync('user_info').thirdApp.custom_rule.freight;
          }
        }
      };
      self.$apis.addressGet(postData, callback);
    },

    counter: function counter(index, type) {
      var self = this;
      if (type == '+') {
        self.mainData.sku[index].count++;
      } else {
        if (self.mainData.sku[index].count > 1) {
          self.mainData.sku[index].count--;
        }
      };
      self.countTotalPrice();
    },

    countTotalPrice: function countTotalPrice() {
      var self = this;
      self.totalPrice = 0;
      self.couponTotalPrice = self.$Utils.addItemInArray(self.pay.coupon, 'price');
      if (self.orderId) {
        self.totalPrice = self.price;
      } else {
        for (var i = 0; i < self.mainData.sku.length; i++) {
          if (self.type == 1) {
            self.totalPrice += self.mainData.sku[i].sku.price * self.mainData.sku[i].count;
          } else if (self.type == 2) {
            self.totalPrice += self.mainData.sku[i].sku.group_price * self.mainData.sku[i].count;
          }


          console.log('self.pay', self.pay);
        };
      }
      var wxPay = parseFloat(self.totalPrice) - parseFloat(self.couponTotalPrice);
      if (wxPay > 0) {
        self.pay.wxPay = {
          price: wxPay.toFixed(2) };

      } else {
        delete self.pay.wxPay;
      };
      if (self.num == 2) {
        self.pay.wxPay.price = parseFloat(self.pay.wxPay.price) + parseFloat(self.transportFee);
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 129:
/*!*******************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/confirmOrder/confirmOrder.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./confirmOrder.vue?vue&type=style&index=0&lang=css& */ 130);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_confirmOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 130:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/confirmOrder/confirmOrder.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[123,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/confirmOrder/confirmOrder.js.map
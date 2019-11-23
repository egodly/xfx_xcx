(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/fengxiangba_plDetail/fengxiangba_plDetail"],{

/***/ 242:
/*!*********************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/main.js?{"page":"pages%2Ffengxiangba_plDetail%2Ffengxiangba_plDetail"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _fengxiangba_plDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/fengxiangba_plDetail/fengxiangba_plDetail.vue */ 243));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_fengxiangba_plDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 243:
/*!**************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/fengxiangba_plDetail/fengxiangba_plDetail.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fengxiangba_plDetail_vue_vue_type_template_id_9a2bbe04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fengxiangba_plDetail.vue?vue&type=template&id=9a2bbe04& */ 244);
/* harmony import */ var _fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fengxiangba_plDetail.vue?vue&type=script&lang=js& */ 246);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _fengxiangba_plDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fengxiangba_plDetail.vue?vue&type=style&index=0&lang=css& */ 248);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 19);






/* normalize component */

var component = Object(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fengxiangba_plDetail_vue_vue_type_template_id_9a2bbe04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fengxiangba_plDetail_vue_vue_type_template_id_9a2bbe04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "XiaoFengXia_MiniProgram/pages/fengxiangba_plDetail/fengxiangba_plDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 244:
/*!*********************************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/fengxiangba_plDetail/fengxiangba_plDetail.vue?vue&type=template&id=9a2bbe04& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_template_id_9a2bbe04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fengxiangba_plDetail.vue?vue&type=template&id=9a2bbe04& */ 245);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_template_id_9a2bbe04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_template_id_9a2bbe04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 245:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/fengxiangba_plDetail/fengxiangba_plDetail.vue?vue&type=template&id=9a2bbe04& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      return _vm.Utils.stopMultiClick(_vm.clickGood)
    }

    _vm.e1 = function($event) {
      return _vm.Utils.stopMultiClick(_vm.submit)
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 246:
/*!***************************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/fengxiangba_plDetail/fengxiangba_plDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fengxiangba_plDetail.vue?vue&type=script&lang=js& */ 247);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 247:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/fengxiangba_plDetail/fengxiangba_plDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _default =

{
  data: function data() {

    return {
      Router: this.$Router,
      mainData: [],
      originData: {},
      Utils: this.$Utils,
      content: '' };

  },

  onLoad: function onLoad(options) {
    var self = this;
    self.id = options.id;
    self.paginate = self.$Utils.cloneForm(self.$AssetsConfig.paginate);
    self.$Utils.loadAll(['getOriginData', 'getUserInfoData'], self);
  },

  onReachBottom: function onReachBottom() {
    console.log('onReachBottom');
    var self = this;
    if (!self.isLoadAll && uni.getStorageSync('loadAllArray')) {
      self.paginate.currentPage++;
      self.getMainData();
    };
  },

  methods: {

    formIdAdd: function formIdAdd(e) {
      var self = this;
      console.log(e);
      self.$apis.WxFormIdAdd(e.detail.formId, Date.parse(new Date()) / 1000 + 7 * 86400);
    },

    getUserInfoData: function getUserInfoData() {
      var self = this;
      var dayStart = new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000;
      var nowTime = Date.parse(new Date()) / 1000;
      var postData = {};
      postData.tokenFuncName = 'getProjectToken';
      postData.searchItem = {
        user_no: uni.getStorageSync('user_info').user_no };

      postData.getAfter = {
        todayScore: {
          tableName: 'FlowLog',
          searchItem: {
            create_time: ['between', [dayStart, nowTime]],
            status: 1,
            type: 3,
            user_no: wx.getStorageSync('user_info').user_no,
            relation_table: 'message' },

          middleKey: 'user_no',
          key: 'user_no',
          condition: 'in',
          compute: {
            count: [
            'sum',
            'count',
            {
              create_time: ['between', [dayStart, nowTime]],
              status: 1,
              type: 3,
              user_no: wx.getStorageSync('user_info').user_no,
              relation_table: 'message',
              count: ['>', 0] }] } } };





      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.userInfoData = res.info.data[0];

        } else {
          self.$Utils.showToast('没有更多了', 'none');
        };
        console.log('self.getUserInfoData', self.getUserInfoData);
        self.$Utils.finishFunc('getUserInfoData');
      };
      self.$apis.userInfoGet(postData, callback);
    },

    getOriginData: function getOriginData() {
      var self = this;
      var postData = {};
      postData.tokenFuncName = 'getProjectToken';
      postData.searchItem = {
        id: self.id };

      postData.getAfter = {
        followMe: {
          tableName: 'Log',
          searchItem: {
            status: ['in', [1, -1]],
            type: 3,
            user_no: wx.getStorageSync('user_info').user_no },

          middleKey: 'id',
          key: 'relation_id',
          condition: 'in' },

        likeMe: {
          tableName: 'Log',
          searchItem: {
            status: ['in', [1, -1]],
            type: 1,
            user_no: wx.getStorageSync('user_info').user_no },

          middleKey: 'id',
          key: 'relation_id',
          condition: 'in' },

        collectMe: {
          tableName: 'Log',
          searchItem: {
            status: ['in', [1, -1]],
            type: 2,
            user_no: wx.getStorageSync('user_info').user_no },

          middleKey: 'id',
          key: 'relation_id',
          condition: 'in' },

        like: {
          tableName: 'Log',
          searchItem: {
            status: 1,
            type: 1,
            relation_table: 'message' },

          middleKey: 'id',
          key: 'relation_id',
          condition: 'in',
          compute: {

            count: [
            'count',
            'count',
            {
              status: 1 }] } },




        collect: {
          tableName: 'Log',
          searchItem: {
            status: 1,
            type: 2,
            relation_table: 'message' },

          middleKey: 'id',
          key: 'relation_id',
          condition: 'in',
          compute: {

            count: [
            'count',
            'count',
            {
              status: 1 }] } },




        reply: {
          tableName: 'Message',
          searchItem: {
            status: 1,
            type: 2 },

          middleKey: 'id',
          key: 'message_id',
          condition: 'in',
          compute: {

            count: [
            'count',
            'count',
            {
              status: 1 }] } } };





      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.originData = res.info.data[0];
          self.getMainData(true);
        }
        console.log('self.originData', self.originData);
        self.$Utils.finishFunc('getOriginData');
      };
      self.$apis.messageGet(postData, callback);
    },



    getMainData: function getMainData(isNew) {
      var self = this;
      if (isNew) {
        self.mainData = [];
        self.paginate = {
          count: 0,
          currentPage: 1,
          is_page: true,
          pagesize: 5 };

      };
      var postData = {};
      postData.paginate = self.$Utils.cloneForm(self.paginate);
      postData.tokenFuncName = 'getProjectToken';
      postData.searchItem = {
        thirdapp_id: 2,
        user_type: 0,
        type: 2,
        message_id: self.originData.id,
        relation_table: 'message' };

      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.mainData.push.apply(self.mainData, res.info.data);
        }
        console.log('self.mainData', self.mainData);
        self.$Utils.finishFunc('getMainData');
      };
      self.$apis.messageGet(postData, callback);
    },

    submit: function submit() {
      var self = this;
      uni.setStorageSync('canClick', false);
      if (self.content != '') {
        var pass = true;
      };
      if (pass) {
        var callback = function callback(user, res) {
          self.mainImg = [];
          self.description = user.nickName;
          self.mainImg.push(user.avatarUrl);
          self.messageAdd();
          console.log('user', user);
          console.log('res', res);
        };
        self.$Utils.getAuthSetting(callback);
      } else {
        uni.setStorageSync('canClick', true);
        self.$Utils.showToast('评论不能为空', 'none');
      };
    },

    messageAdd: function messageAdd() {
      var self = this;
      var now = Date.parse(new Date());
      now = self.$Utils.timeto(now, "ymd-hms");
      var postData = {};
      postData.tokenFuncName = 'getProjectToken';
      if (!wx.getStorageSync('user_info') || !wx.getStorageSync('user_info').headImgUrl) {
        postData.refreshToken = true;
      };
      postData.data = {
        type: 2,
        relation_id: self.originData.relation_id,
        title: self.description,
        mainImg: self.mainImg,
        content: self.content,
        relation_table: 'message',
        message_id: self.originData.id };

      console.log('postData', postData);
      if (parseInt(self.userInfoData.todayScore.count) < parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit)) {
        postData.saveAfter = [
        {
          tableName: 'FlowLog',
          FuncName: 'add',
          data: {
            type: 3,
            relation_id: self.originData.relation_id,
            relation_table: 'message',
            trade_info: '评论奖励积分',
            user_no: uni.getStorageSync('user_info').user_no,
            thirdapp_id: 2,
            count: uni.getStorageSync('user_info').thirdApp.custom_rule.favor } }];




        if (parseInt(self.userInfoData.todayScore.count) + parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.favor) >
        parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit)) {
          postData.saveAfter[0].data.count = uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit - self.userInfoData.todayScore.count;
        };
        postData.saveFunction = [{
          FuncName: 'wxTemplate',
          searchItem: {
            user_no: uni.getStorageSync('user_info').user_no },

          template: '获得积分提醒',
          data_arr: {
            keyword1: {
              value: '评论奖励积分' },

            keyword2: {
              value: uni.getStorageSync('user_info').thirdApp.custom_rule.favor },

            keyword3: {
              value: now } },



          thirdapp_id: 2 }];

      };

      console.log('232', self.userInfoData.todayScore.count + uni.getStorageSync('user_info').thirdApp.custom_rule.favor);
      console.log('211', uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit);

      var callback = function callback(data) {
        if (data.solely_code == 100000) {
          self.$Utils.showToast('评论成功', 'none');
          self.content = '';
          setTimeout(function () {
            self.getOriginData();
            self.getUserInfoData();
          }, 1000);
        } else {
          uni.setStorageSync('canClick', true);
          self.$Utils.showToast(data.msg, 'none', 1000);
        }
      };
      self.$apis.messageAdd(postData, callback);
    },

    clickGood: function clickGood(e) {
      var self = this;
      uni.setStorageSync('canClick', false);
      if (self.originData.likeMe.length == 0) {
        self.addGoodLog();
      } else {
        self.updateGoodLog();
      };
    },

    addGoodLog: function addGoodLog() {
      var self = this;
      var now = Date.parse(new Date());
      now = self.$Utils.timeto(now, "ymd-hms");
      var postData = {};
      postData.data = {
        type: 1,
        title: '点赞成功',
        relation_id: self.id,
        relation_table: 'Message',
        user_no: uni.getStorageSync('user_info').user_no };

      postData.tokenFuncName = 'getProjectToken';
      if (parseInt(self.userInfoData.todayScore.count) < parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit)) {
        postData.saveAfter = [
        {
          tableName: 'FlowLog',
          FuncName: 'add',
          data: {
            type: 3,
            relation_id: self.originData.id,
            relation_table: 'message',
            trade_info: '点赞奖励积分',
            user_no: uni.getStorageSync('user_info').user_no,
            thirdapp_id: 2,
            count: uni.getStorageSync('user_info').thirdApp.custom_rule.favor } }];



        if (parseInt(self.userInfoData.todayScore.count) + parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.favor) >
        parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit)) {
          postData.saveAfter[0].data.count = uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit - self.userInfoData.todayScore.count;
        }
        postData.saveFunction = [{
          FuncName: 'wxTemplate',
          searchItem: {
            user_no: uni.getStorageSync('user_info').user_no },

          template: '获得积分提醒',
          data_arr: {
            keyword1: {
              value: '点赞奖励积分' },

            keyword2: {
              value: uni.getStorageSync('user_info').thirdApp.custom_rule.favor },

            keyword3: {
              value: now } },



          thirdapp_id: 2 }];

      }
      if (parseInt(self.userInfoData.todayScore.count) + parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.favor) >
      parseInt(uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit)) {
        postData.saveAfter[0].data.count = uni.getStorageSync('user_info').thirdApp.custom_rule.score_limit - uni.getStorageSync('user_info').thirdApp.custom_rule.favor;
      }
      var callback = function callback(res) {
        if (res.solely_code == 100000) {
          self.originData.likeMe.push({
            status: 1,
            id: res.info.id });

          self.originData.like.count = self.originData.like.count + 1;
          self.$Utils.showToast('点赞成功', 'none', 1000);
          console.log('self.originData', self.originData);
          setTimeout(function () {
            self.getUserInfoData();
          }, 1000);
        } else {
          self.$Utils.showToast('点赞失败', 'none', 1000);
        };
        uni.setStorageSync('canClick', true);
      };
      self.$apis.logAdd(postData, callback);
    },


    updateGoodLog: function updateGoodLog() {
      var self = this;

      var postData = {
        searchItem: {
          id: self.originData.likeMe[0].id },


        data: {
          status: -self.originData.likeMe[0].status } };


      postData.tokenFuncName = 'getProjectToken';
      var callback = function callback(res) {
        uni.setStorageSync('canClick', true);
        if (res.solely_code == 100000) {
          self.originData.likeMe[0].status = -self.originData.likeMe[0].status;
          if (self.originData.likeMe[0].status == 1) {
            self.originData.like.count = self.originData.like.count + 1;
            self.$Utils.showToast('点赞成功', 'none', 1000);
          } else {
            self.originData.like.count = self.originData.like.count - 1;
            self.$Utils.showToast('取消成功', 'none', 1000);
          }
        } else {
          self.$Utils.showToast(res.msg, 'none', 1000);
        };
      };
      self.$apis.logUpdate(postData, callback);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 248:
/*!***********************************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/fengxiangba_plDetail/fengxiangba_plDetail.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fengxiangba_plDetail.vue?vue&type=style&index=0&lang=css& */ 249);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fengxiangba_plDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 249:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/fengxiangba_plDetail/fengxiangba_plDetail.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[242,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/fengxiangba_plDetail/fengxiangba_plDetail.js.map
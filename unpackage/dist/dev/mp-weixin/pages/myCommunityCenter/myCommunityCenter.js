(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/myCommunityCenter/myCommunityCenter"],{

/***/ 390:
/*!***************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/main.js?{"page":"pages%2FmyCommunityCenter%2FmyCommunityCenter"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _myCommunityCenter = _interopRequireDefault(__webpack_require__(/*! ./pages/myCommunityCenter/myCommunityCenter.vue */ 391));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_myCommunityCenter.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 391:
/*!********************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/myCommunityCenter/myCommunityCenter.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myCommunityCenter_vue_vue_type_template_id_15688a38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myCommunityCenter.vue?vue&type=template&id=15688a38& */ 392);
/* harmony import */ var _myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myCommunityCenter.vue?vue&type=script&lang=js& */ 394);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _myCommunityCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myCommunityCenter.vue?vue&type=style&index=0&lang=css& */ 396);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 19);






/* normalize component */

var component = Object(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _myCommunityCenter_vue_vue_type_template_id_15688a38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _myCommunityCenter_vue_vue_type_template_id_15688a38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "XiaoFengXia_MiniProgram/pages/myCommunityCenter/myCommunityCenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 392:
/*!***************************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/myCommunityCenter/myCommunityCenter.vue?vue&type=template&id=15688a38& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_template_id_15688a38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./myCommunityCenter.vue?vue&type=template&id=15688a38& */ 393);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_template_id_15688a38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_template_id_15688a38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 393:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/myCommunityCenter/myCommunityCenter.vue?vue&type=template&id=15688a38& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          path: "/pages/fengxiangba_pl/fengxiangba_pl"
        }
      })
    }

    _vm.e1 = function($event) {
      return _vm.Router.navigateTo({
        route: {
          path: "/pages/fengxiangba_pl/fengxiangba_pl"
        }
      })
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 394:
/*!*********************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/myCommunityCenter/myCommunityCenter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./myCommunityCenter.vue?vue&type=script&lang=js& */ 395);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 395:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/myCommunityCenter/myCommunityCenter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _default =
{
  data: function data() {
    return {
      Router: this.$Router,
      current: 1,
      shimgData: [{}, {}],
      followDate: [{}, {}, {}, {}, {}],
      mainData: [],
      searchItem: {
        type: 1,
        behavior: 0 } };


  },


  onLoad: function onLoad() {
    var self = this;
    self.paginate = self.$Utils.cloneForm(self.$AssetsConfig.paginate);
    self.$Utils.loadAll(['getMainData'], self);
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

    change: function change(current) {
      var self = this;
      if (current != self.current) {
        self.current = current;
        if (self.current == 1) {
          self.searchItem = {
            type: 1,
            behavior: 0,
            user_no: uni.getStorageSync('user_info').user_no };

          self.getMainData(true);
        } else if (self.current == 2) {
          self.searchItem = {
            type: 1,
            behavior: 1,
            user_no: uni.getStorageSync('user_info').user_no };

          self.getMainData(true);
        } else if (self.current == 3) {
          self.getFollowData(true);
        } else if (self.current == 4) {
          self.getCollectData(true);
        } else if (self.current == 5) {
          self.getReplyData(true);
        }
      }
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
      postData.tokenFuncName = 'getProjectToken';
      postData.paginate = self.$Utils.cloneForm(self.paginate);
      postData.searchItem = self.$Utils.cloneForm(self.searchItem);
      postData.searchItem.user_no = uni.getStorageSync('user_info').user_no;
      postData.getAfter = {
        follow: {
          tableName: 'Log',
          searchItem: {
            status: ['in', [1, -1]],
            type: 3,
            relation_table: 'user',
            user_no: uni.getStorageSync('user_info').user_no },

          middleKey: 'user_no',
          key: 'relation_user',
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
          key: 'relation_id',
          condition: 'in',
          compute: {

            count: [
            'count',
            'count',
            {
              status: 1 }] } } };





      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.mainData.push.apply(self.mainData, res.info.data);
        } else {
          self.$Utils.showToast('没有更多了', 'none');
        };
        console.log('self.mainData', self.mainData);
        self.$Utils.finishFunc('getMainData');
      };
      self.$apis.messageGet(postData, callback);
    },

    getFollowData: function getFollowData(isNew) {
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
      postData.tokenFuncName = 'getProjectToken';
      postData.paginate = self.$Utils.cloneForm(self.paginate);
      postData.searchItem = {
        type: 3,
        user_no: uni.getStorageSync('user_info').user_no };

      postData.getAfter = {
        user: {
          tableName: 'User',
          searchItem: {
            status: 1 },

          middleKey: 'relation_user',
          key: 'user_no',
          condition: 'in' } };


      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.mainData.push.apply(self.mainData, res.info.data);
        } else {
          self.$Utils.showToast('没有更多了', 'none');
        };
        console.log('self.mainData', self.mainData);
        self.$Utils.finishFunc('getMainData');
      };
      self.$apis.logGet(postData, callback);
    },

    updateFollowLog: function updateFollowLog(index) {
      var self = this;
      var now = Date.parse(new Date());
      now = self.$Utils.timeto(now, "ymd-hms");
      var postData = {
        searchItem: {
          id: self.mainData[index].id },

        data: {
          status: -self.mainData[index].status } };


      postData.tokenFuncName = 'getProjectToken';
      var callback = function callback(res) {
        self.canClick = true;
        if (res.solely_code == 100000) {
          self.$Utils.showToast('取消成功', 'none', 1000);
          setTimeout(function () {
            self.getFollowData(true);
          }, 1000);
        } else {
          self.$Utils.showToast(res.msg, 'none', 1000);
        };
      };
      self.$apis.logUpdate(postData, callback);
    },

    getCollectData: function getCollectData(isNew) {
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
      postData.tokenFuncName = 'getProjectToken';
      postData.paginate = self.$Utils.cloneForm(self.paginate);
      postData.searchItem = {
        type: 2,
        user_no: uni.getStorageSync('user_info').user_no };

      postData.getAfter = {
        message: {
          tableName: 'Message',
          searchItem: {
            status: 1 },

          middleKey: 'relation_id',
          key: 'id',
          condition: 'in' },

        like: {
          tableName: 'Log',
          searchItem: {
            status: 1,
            type: 1,
            relation_table: 'message' },

          middleKey: ['message', 0, 'id'],
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

          middleKey: ['message', 0, 'id'],
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

          middleKey: ['message', 0, 'id'],
          key: 'relation_id',
          condition: 'in',
          compute: {

            count: [
            'count',
            'count',
            {
              status: 1 }] } } };






      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.mainData.push.apply(self.mainData, res.info.data);
        } else {
          self.$Utils.showToast('没有更多了', 'none');
        };
        console.log('self.mainData', self.mainData);
        self.$Utils.finishFunc('getMainData');
      };
      self.$apis.logGet(postData, callback);
    },

    getReplyData: function getReplyData(isNew) {
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
      postData.tokenFuncName = 'getProjectToken';
      postData.paginate = self.$Utils.cloneForm(self.paginate);
      postData.searchItem = {
        type: 2,
        user_no: uni.getStorageSync('user_info').user_no };

      postData.getAfter = {
        message: {
          tableName: 'Message',
          searchItem: {
            status: 1 },

          middleKey: 'relation_id',
          key: 'id',
          condition: 'in' },

        like: {
          tableName: 'Log',
          searchItem: {
            status: 1,
            type: 1,
            relation_table: 'message' },

          middleKey: ['message', 0, 'id'],
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

          middleKey: ['message', 0, 'id'],
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

          middleKey: ['message', 0, 'id'],
          key: 'relation_id',
          condition: 'in',
          compute: {

            count: [
            'count',
            'count',
            {
              status: 1 }] } } };





      var callback = function callback(res) {
        if (res.info.data.length > 0) {
          self.mainData.push.apply(self.mainData, res.info.data);
        } else {
          self.$Utils.showToast('没有更多了', 'none');
        };
        console.log('self.mainData', self.mainData);
        self.$Utils.finishFunc('getMainData');
      };
      self.$apis.messageGet(postData, callback);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 396:
/*!*****************************************************************************************************************!*\
  !*** C:/XiaoFengXia_MiniProgram/pages/myCommunityCenter/myCommunityCenter.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../HBuilderX.2.3.7.20191024/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./myCommunityCenter.vue?vue&type=style&index=0&lang=css& */ 397);
/* harmony import */ var _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_7_20191024_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_myCommunityCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 397:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/XiaoFengXia_MiniProgram/pages/myCommunityCenter/myCommunityCenter.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[390,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/myCommunityCenter/myCommunityCenter.js.map
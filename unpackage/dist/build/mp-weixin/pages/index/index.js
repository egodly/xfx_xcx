(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"], {
    "0eb0": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("8ab5"),
        o = a.n(n);
      for (var i in n) "default" !== i && function(t) {
        a.d(e, t, function() {
          return n[t]
        })
      }(i);
      e["default"] = o.a
    },
    "686d": function(t, e, a) {
      "use strict";
      var n = a("d60e"),
        o = a.n(n);
      o.a
    },
    "8ab5": function(t, e, a) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          data: function() {
            return {
              Router: this.$Router,
              indProDate: [{}, {}, {}, {}],
              swiperData: [],
              mainData: [],
              labelData: {},
              city: "",
              labelTwoData: {},
              userInfoData: {}
            }
          },
          onLoad: function() {
            var t = this;
            t.paginate = t.$Utils.cloneForm(t.$AssetsConfig.paginate);
            var e = function(e) {
              t.$Utils.loadAll(["getSliderData", "getLabelData", "getLocation", "getLabelTwoData"], t)
            };
            t.$Token.getProjectToken(e, {
              refreshToken: !0
            })
          },
          onReachBottom: function() {
            console.log("onReachBottom");
            var e = this;
            !e.isLoadAll && t.getStorageSync("loadAllArray") && (e.paginate.currentPage++, e.getMainData())
          },
          onPullDownRefresh: function() {
            console.log("refresh");
            var e = this;
            e.$Utils.loadAll(["getSliderData", "getLabelData", "getLocation", "getLabelTwoData"], e), setTimeout(function() {
              t.stopPullDownRefresh()
            }, 1e3)
          },
          onShow: function() {
            var e = this;
            t.getStorageSync("city") && (e.mainData = [], e.city = t.getStorageSync("city"), e.getCityData(), t.removeStorageSync("city")), e.getUserInfoData()
          },
          methods: {
            toTab: function() {
              var e = this;
              t.setStorageSync("index", 2), e.Router.switchTab({
                route: {
                  path: "/pages/fengxiangba/fengxiangba"
                }
              })
            },
            getUserInfoData: function() {
              var e = this,
                a = {
                  tokenFuncName: "getProjectToken"
                };
              a.searchItem = {
                user_no: t.getStorageSync("user_info").user_no
              };
              var n = function(t) {
                t.info.data.length > 0 && (e.userInfoData = t.info.data[0])
              };
              e.$apis.userInfoGet(a, n)
            },
            formIdAdd: function(t) {
              var e = this;
              console.log(t), e.$apis.WxFormIdAdd(t.detail.formId, Date.parse(new Date) / 1e3 + 604800)
            },
            getLocation: function() {
              var t = this,
                e = function(e) {
                  if (e) {
                    if (console.log("res", e), e.authSetting) return void console.log(232);
                    t.city = e.address_component.city, t.getCityData()
                  }
                };
              t.$Utils.getLocation("reverseGeocoder", e)
            },
            getCityData: function() {
              var e = this,
                a = {};
              a.searchItem = {
                thirdapp_id: 2,
                title: e.city
              };
              var n = function(a) {
                a.info.data.length > 0 ? (e.cityData = a.info.data[0], e.city_id = e.cityData && e.cityData.id ? e.cityData.id : 24, e.getMainData(!0)) : t.showModal({
                  title: "提示",
                  content: "当前城市未开通，是否切换为默认城市西安",
                  success: function(t) {
                    t.confirm ? (e.city_id = e.cityData && e.cityData.id ? e.cityData.id : 24, e.city = "西安市", e.getMainData(!0)) : t.cancel && console.log("用户点击取消")
                  }
                })
              };
              e.$apis.labelGet(a, n)
            },
            getLabelData: function() {
              var t = this,
                e = {
                  searchItem: {
                    thirdapp_id: 2,
                    title: "首页推荐位"
                  }
                },
                a = function(e) {
                  e.info.data.length > 0 && (t.labelData = e.info.data[0]), console.log("self.swiperData", t.swiperData), t.$Utils.finishFunc("getLabelData")
                };
              t.$apis.labelGet(e, a)
            },
            getLabelTwoData: function() {
              var t = this,
                e = {
                  searchItem: {
                    thirdapp_id: 2,
                    title: "常规团推荐位"
                  }
                },
                a = function(e) {
                  e.info.data.length > 0 && (t.labelTwoData = e.info.data[0]), console.log("self.swiperData", t.swiperData), t.$Utils.finishFunc("getLabelTwoData")
                };
              t.$apis.labelGet(e, a)
            },
            intoStore: function() {
              var t = this;
              0 == t.userInfoData.check_status ? t.Router.navigateTo({
                route: {
                  path: "/pages/myShopApply/myShopApply"
                }
              }) : 1 == t.userInfoData.check_status ? t.$Utils.showToast("您的资料审核中", "none") : 2 == t.userInfoData.check_status && t.userInfoData.level >= 3 && t.Router.navigateTo({
                route: {
                  path: "/pages/myShop/myShop"
                }
              })
            },
            intoNew: function() {
              var t = this;
              0 == t.userInfoData.level ? t.Router.navigateTo({
                route: {
                  path: "/pages/newPeople/newPeople"
                }
              }) : t.$Utils.showToast("您已不是新人身份", "none")
            },
            getMainData: function(e) {
              var a = this;
              e && (a.mainData = [], a.paginate = {
                count: 0,
                currentPage: 1,
                is_page: !0,
                pagesize: 5
              });
              var n = {};
              n.paginate = a.$Utils.cloneForm(a.paginate), n.searchItem = {
                thirdapp_id: 2,
                type: 1,
                level: [">", 0],
                category_id: ["not in", [57]],
                area_id: a.city_id
              }, n.getAfter = {
                order: {
                  token: t.getStorageSync("user_token"),
                  tableName: "Order",
                  middleKey: "product_no",
                  key: "product_no",
                  searchItem: {
                    status: 1,
                    order_step: 4,
                    pay_status: 1
                  },
                  condition: "="
                }
              };
              var o = function(t) {
                t.info.data.length > 0 && a.mainData.push.apply(a.mainData, t.info.data), console.log("self.mainData", a.mainData), a.$Utils.finishFunc("getLocation")
              };
              a.$apis.productGet(n, o)
            },
            getSliderData: function() {
              var t = this,
                e = {
                  searchItem: {
                    thirdapp_id: 2
                  },
                  getBefore: {
                    caseData: {
                      tableName: "Label",
                      searchItem: {
                        title: ["=", ["首页轮播图"]]
                      },
                      middleKey: "parentid",
                      key: "id",
                      condition: "in"
                    }
                  },
                  getAfter: {
                    Article: {
                      tableName: "Article",
                      searchItem: {
                        status: 1
                      },
                      middleKey: "id",
                      key: "menu_id",
                      condition: "in",
                      info: ["id"]
                    }
                  }
                },
                a = function(e) {
                  e.info.data.length > 0 && t.swiperData.push.apply(t.swiperData, e.info.data), console.log("self.swiperData", t.swiperData), t.$Utils.finishFunc("getSliderData")
                };
              t.$apis.labelGet(e, a)
            }
          }
        };
        e.default = a
      }).call(this, a("543d")["default"])
    },
    b84c: function(t, e, a) {
      "use strict";
      (function(t) {
        a("10a4"), a("921b");
        n(a("66fd"));
        var e = n(a("e7c1"));

        function n(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, a("543d")["createPage"])
    },
    d60e: function(t, e, a) {},
    deb4: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          t._isMounted || (t.e0 = function(e) {
            return t.Router.navigateTo({
              route: {
                path: "/pages/goodsOpenDetailTwo/goodsOpenDetailTwo?city=" + t.city
              }
            })
          }, t.e1 = function(e) {
            return t.Router.navigateTo({
              route: {
                path: e.currentTarget.dataset.url
              }
            })
          }, t.e2 = function(e) {
            return t.Router.navigateTo({
              route: {
                path: t.labelData.url
              }
            })
          }, t.e3 = function(e) {
            return t.Router.navigateTo({
              route: {
                path: "/pages/coupon/coupon"
              }
            })
          }, t.e4 = function(e) {
            return t.Router.navigateTo({
              route: {
                path: "/pages/goodsJoinDetail/goodsJoinDetail?id=" + e.currentTarget.dataset.id
              }
            })
          }, t.e5 = function(e) {
            return t.Router.navigateTo({
              route: {
                path: t.labelTwoData.url
              }
            })
          })
        },
        o = [];
      a.d(e, "a", function() {
        return n
      }), a.d(e, "b", function() {
        return o
      })
    },
    e7c1: function(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("deb4"),
        o = a("0eb0");
      for (var i in o) "default" !== i && function(t) {
        a.d(e, t, function() {
          return o[t]
        })
      }(i);
      a("686d");
      var r = a("2877"),
        c = Object(r["a"])(o["default"], n["a"], n["b"], !1, null, null, null);
      e["default"] = c.exports
    }
  },
  [
    ["b84c", "common/runtime", "common/vendor"]
  ]
]);
import { _ as _asyncToGenerator, r as regenerator, a as _inherits, b as _getPrototypeOf, c as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, S as SvelteComponentDev, v as validate_slots, g as element, t as text, h as claim_element, j as children, k as claim_text, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, q as noop } from './client.6d55d2e0.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var article;
  var h1;
  var t;
  var block = {
    c: function create() {
      article = element("article");
      h1 = element("h1");
      t = text("/");
      this.h();
    },
    l: function claim(nodes) {
      article = claim_element(nodes, "ARTICLE", {});
      var article_nodes = children(article);
      h1 = claim_element(article_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t = claim_text(h1_nodes, "/");
      h1_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "text-xs");
      add_location(h1, file, 6, 2, 115);
      add_location(article, file, 5, 0, 103);
    },
    m: function mount(target, anchor) {
      insert_dev(target, article, anchor);
      append_dev(article, h1);
      append_dev(h1, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(article);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x, _x2) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(page, session) {
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              page: page
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  $$self.$capture_state = function () {
    return {
      preload: preload
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
export { preload };

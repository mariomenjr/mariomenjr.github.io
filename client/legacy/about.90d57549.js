import { a as _inherits, b as _getPrototypeOf, c as _possibleConstructorReturn, d as _classCallCheck, i as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, u as _createClass, S as SvelteComponentDev, v as validate_slots, g as element, t as text, w as space, h as claim_element, j as children, k as claim_text, l as detach_dev, x as claim_space, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, q as noop } from './client.6d55d2e0.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/about.svelte";

function create_fragment(ctx) {
  var article;
  var h5;
  var t0;
  var t1_value =
  /*today*/
  ctx[1].toLocaleString() + "";
  var t1;
  var t2;
  var p0;
  var t3;
  var b0;
  var t4;
  var t5;
  var t6;
  var t7;
  var t8;
  var p1;
  var b1;
  var t9;
  var t10;
  var t11;
  var p2;
  var b2;
  var t12;
  var t13;
  var b3;
  var t14;
  var t15;
  var b4;
  var t16;
  var t17;
  var t18;
  var p3;
  var t19;
  var b5;
  var t20;
  var t21;
  var i;
  var t22;
  var t23;
  var t24;
  var p4;
  var t25;
  var a0;
  var t26;
  var t27;
  var a1;
  var t28;
  var t29;
  var t30;
  var p5;
  var t31;
  var block = {
    c: function create() {
      article = element("article");
      h5 = element("h5");
      t0 = text("Last updated on ");
      t1 = text(t1_value);
      t2 = space();
      p0 = element("p");
      t3 = text("¡Hola! como seguro lo notaste mi nombre es\n    ");
      b0 = element("b");
      t4 = text("Mario Menjívar");
      t5 = text(". Soy un Ingeniero de Software, originario de El Salvador, viviendo en el\n    Sur de California. Tengo ");
      t6 = text(
      /*experienceYears*/
      ctx[0]);
      t7 = text(" años de experiencia desarrollando\n    aplicaciones para la industria mercantil, agilizando procesos, con enfoque\n    en rastreabilidad, a la vez que se reducen costos y tiempos. Actualmente soy\n    parte del equipo de desarrollo de software de Rapid Manufacturing, principal\n    encargado de la arquitectura Front-end.");
      t8 = space();
      p1 = element("p");
      b1 = element("b");
      t9 = text("A lo largo de mi carrera");
      t10 = text(", he trabajado con una variedad de lenguajes y herramientas, tales como:\n    PHP, ActionScript, MySQL, NodeJS, Mongo DB, ReactJS, React-Native, .NET\n    Core, Microsoft SQL y Python.");
      t11 = space();
      p2 = element("p");
      b2 = element("b");
      t12 = text("Javascript");
      t13 = text(", uno de mis fuertes, es un lenguaje fantástico y vérsatil, que se ha ganado\n    su lugar en ambientes de producción alrededor del mundo. En combinación con\n    la solidez de\n    ");
      b3 = element("b");
      t14 = text("C#");
      t15 = text("\n    y el\n    ");
      b4 = element("b");
      t16 = text(".NET Core Framework");
      t17 = text(", hacen de mi experiencia de desarrollo increíble. Sin mencionar el\n    talentoso equipo al que pertenezco.");
      t18 = space();
      p3 = element("p");
      t19 = text("Entre\n    ");
      b5 = element("b");
      t20 = text("las cosas que me gustan");
      t21 = text("\n    están leer, actualmente estoy inmerso en la novela\n    ");
      i = element("i");
      t22 = text("The Project Phoenix");
      t23 = text(", la cuál recomiendo muchísimo; ver documentales, en especial si hablan de\n    historia y humanidades; y también me gusta conocer nuevos lugares junto a mi\n    novia, hemos visitado ya varias ciudades de la unión americana.");
      t24 = space();
      p4 = element("p");
      t25 = text("Para contactarme, mi cuenta de twitter\n    ");
      a0 = element("a");
      t26 = text("@mariomenjr");
      t27 = text("\n    es una buena opción. También puedes escribirme un e-mail\n    ");
      a1 = element("a");
      t28 = text("aquí");
      t29 = text(".");
      t30 = space();
      p5 = element("p");
      t31 = text("Happy coding!");
      this.h();
    },
    l: function claim(nodes) {
      article = claim_element(nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      h5 = claim_element(article_nodes, "H5", {
        class: true
      });
      var h5_nodes = children(h5);
      t0 = claim_text(h5_nodes, "Last updated on ");
      t1 = claim_text(h5_nodes, t1_value);
      h5_nodes.forEach(detach_dev);
      t2 = claim_space(article_nodes);
      p0 = claim_element(article_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "¡Hola! como seguro lo notaste mi nombre es\n    ");
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t4 = claim_text(b0_nodes, "Mario Menjívar");
      b0_nodes.forEach(detach_dev);
      t5 = claim_text(p0_nodes, ". Soy un Ingeniero de Software, originario de El Salvador, viviendo en el\n    Sur de California. Tengo ");
      t6 = claim_text(p0_nodes,
      /*experienceYears*/
      ctx[0]);
      t7 = claim_text(p0_nodes, " años de experiencia desarrollando\n    aplicaciones para la industria mercantil, agilizando procesos, con enfoque\n    en rastreabilidad, a la vez que se reducen costos y tiempos. Actualmente soy\n    parte del equipo de desarrollo de software de Rapid Manufacturing, principal\n    encargado de la arquitectura Front-end.");
      p0_nodes.forEach(detach_dev);
      t8 = claim_space(article_nodes);
      p1 = claim_element(article_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      b1 = claim_element(p1_nodes, "B", {});
      var b1_nodes = children(b1);
      t9 = claim_text(b1_nodes, "A lo largo de mi carrera");
      b1_nodes.forEach(detach_dev);
      t10 = claim_text(p1_nodes, ", he trabajado con una variedad de lenguajes y herramientas, tales como:\n    PHP, ActionScript, MySQL, NodeJS, Mongo DB, ReactJS, React-Native, .NET\n    Core, Microsoft SQL y Python.");
      p1_nodes.forEach(detach_dev);
      t11 = claim_space(article_nodes);
      p2 = claim_element(article_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      b2 = claim_element(p2_nodes, "B", {});
      var b2_nodes = children(b2);
      t12 = claim_text(b2_nodes, "Javascript");
      b2_nodes.forEach(detach_dev);
      t13 = claim_text(p2_nodes, ", uno de mis fuertes, es un lenguaje fantástico y vérsatil, que se ha ganado\n    su lugar en ambientes de producción alrededor del mundo. En combinación con\n    la solidez de\n    ");
      b3 = claim_element(p2_nodes, "B", {});
      var b3_nodes = children(b3);
      t14 = claim_text(b3_nodes, "C#");
      b3_nodes.forEach(detach_dev);
      t15 = claim_text(p2_nodes, "\n    y el\n    ");
      b4 = claim_element(p2_nodes, "B", {});
      var b4_nodes = children(b4);
      t16 = claim_text(b4_nodes, ".NET Core Framework");
      b4_nodes.forEach(detach_dev);
      t17 = claim_text(p2_nodes, ", hacen de mi experiencia de desarrollo increíble. Sin mencionar el\n    talentoso equipo al que pertenezco.");
      p2_nodes.forEach(detach_dev);
      t18 = claim_space(article_nodes);
      p3 = claim_element(article_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t19 = claim_text(p3_nodes, "Entre\n    ");
      b5 = claim_element(p3_nodes, "B", {});
      var b5_nodes = children(b5);
      t20 = claim_text(b5_nodes, "las cosas que me gustan");
      b5_nodes.forEach(detach_dev);
      t21 = claim_text(p3_nodes, "\n    están leer, actualmente estoy inmerso en la novela\n    ");
      i = claim_element(p3_nodes, "I", {});
      var i_nodes = children(i);
      t22 = claim_text(i_nodes, "The Project Phoenix");
      i_nodes.forEach(detach_dev);
      t23 = claim_text(p3_nodes, ", la cuál recomiendo muchísimo; ver documentales, en especial si hablan de\n    historia y humanidades; y también me gusta conocer nuevos lugares junto a mi\n    novia, hemos visitado ya varias ciudades de la unión americana.");
      p3_nodes.forEach(detach_dev);
      t24 = claim_space(article_nodes);
      p4 = claim_element(article_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t25 = claim_text(p4_nodes, "Para contactarme, mi cuenta de twitter\n    ");
      a0 = claim_element(p4_nodes, "A", {
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t26 = claim_text(a0_nodes, "@mariomenjr");
      a0_nodes.forEach(detach_dev);
      t27 = claim_text(p4_nodes, "\n    es una buena opción. También puedes escribirme un e-mail\n    ");
      a1 = claim_element(p4_nodes, "A", {
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t28 = claim_text(a1_nodes, "aquí");
      a1_nodes.forEach(detach_dev);
      t29 = claim_text(p4_nodes, ".");
      p4_nodes.forEach(detach_dev);
      t30 = claim_space(article_nodes);
      p5 = claim_element(article_nodes, "P", {});
      var p5_nodes = children(p5);
      t31 = claim_text(p5_nodes, "Happy coding!");
      p5_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h5, "class", "text-xs text-gray-500 mb-5");
      add_location(h5, file, 6, 2, 138);
      add_location(b0, file, 11, 4, 301);
      attr_dev(p0, "class", "mb-5");
      add_location(p0, file, 9, 2, 233);
      add_location(b1, file, 19, 4, 794);
      attr_dev(p1, "class", "mb-5");
      add_location(p1, file, 18, 2, 773);
      add_location(b2, file, 24, 4, 1038);
      add_location(b3, file, 27, 4, 1234);
      add_location(b4, file, 29, 4, 1257);
      attr_dev(p2, "class", "mb-5");
      add_location(p2, file, 23, 2, 1017);
      add_location(b5, file, 34, 4, 1431);
      add_location(i, file, 36, 4, 1521);
      attr_dev(p3, "class", "mb-5");
      add_location(p3, file, 32, 2, 1400);
      attr_dev(a0, "href", "https://twitter.com/mariomenjr");
      attr_dev(a0, "class", "text-blue-500");
      add_location(a0, file, 42, 4, 1844);
      attr_dev(a1, "href", "mailto:mariomenjr@gmail.com");
      attr_dev(a1, "class", "text-blue-500");
      add_location(a1, file, 46, 4, 2000);
      attr_dev(p4, "class", "mb-5");
      add_location(p4, file, 40, 2, 1780);
      add_location(p5, file, 48, 2, 2079);
      attr_dev(article, "class", "text-justify");
      add_location(article, file, 5, 0, 105);
    },
    m: function mount(target, anchor) {
      insert_dev(target, article, anchor);
      append_dev(article, h5);
      append_dev(h5, t0);
      append_dev(h5, t1);
      append_dev(article, t2);
      append_dev(article, p0);
      append_dev(p0, t3);
      append_dev(p0, b0);
      append_dev(b0, t4);
      append_dev(p0, t5);
      append_dev(p0, t6);
      append_dev(p0, t7);
      append_dev(article, t8);
      append_dev(article, p1);
      append_dev(p1, b1);
      append_dev(b1, t9);
      append_dev(p1, t10);
      append_dev(article, t11);
      append_dev(article, p2);
      append_dev(p2, b2);
      append_dev(b2, t12);
      append_dev(p2, t13);
      append_dev(p2, b3);
      append_dev(b3, t14);
      append_dev(p2, t15);
      append_dev(p2, b4);
      append_dev(b4, t16);
      append_dev(p2, t17);
      append_dev(article, t18);
      append_dev(article, p3);
      append_dev(p3, t19);
      append_dev(p3, b5);
      append_dev(b5, t20);
      append_dev(p3, t21);
      append_dev(p3, i);
      append_dev(i, t22);
      append_dev(p3, t23);
      append_dev(article, t24);
      append_dev(article, p4);
      append_dev(p4, t25);
      append_dev(p4, a0);
      append_dev(a0, t26);
      append_dev(p4, t27);
      append_dev(p4, a1);
      append_dev(a1, t28);
      append_dev(p4, t29);
      append_dev(article, t30);
      append_dev(article, p5);
      append_dev(p5, t31);
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

function instance($$self, $$props, $$invalidate) {
  var today = new Date();
  var experienceYears = today.getFullYear() - 2014;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("About", $$slots, []);

  $$self.$capture_state = function () {
    return {
      today: today,
      experienceYears: experienceYears
    };
  };

  return [experienceYears, today];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      experienceYears: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(About, [{
    key: "experienceYears",
    get: function get() {
      return this.$$.ctx[0];
    },
    set: function set(value) {
      throw new Error("<About>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return About;
}(SvelteComponentDev);

export default About;

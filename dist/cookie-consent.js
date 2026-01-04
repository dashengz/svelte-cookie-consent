var kn = Object.defineProperty;
var cr = (e) => {
  throw TypeError(e);
};
var Cn = (e, t, r) => t in e ? kn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var J = (e, t, r) => Cn(e, typeof t != "symbol" ? t + "" : t, r), ur = (e, t, r) => t.has(e) || cr("Cannot " + r);
var te = (e, t, r) => (ur(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Rt = (e, t, r) => t.has(e) ? cr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ot = (e, t, r, n) => (ur(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const $n = "5";
var Er;
typeof window < "u" && ((Er = window.__svelte ?? (window.__svelte = {})).v ?? (Er.v = /* @__PURE__ */ new Set())).add($n);
const Ln = 1, zn = 2, jn = 16, Tn = 1, Sn = 4, Bn = 8, Rn = 16, On = 1, Nn = 2, Gt = "[", Jt = "[!", Kt = "]", De = {}, re = Symbol(), In = "http://www.w3.org/1999/xhtml", fr = !1;
var Wt = Array.isArray, Dn = Array.prototype.indexOf, Xt = Array.from, mt = Object.keys, wt = Object.defineProperty, Me = Object.getOwnPropertyDescriptor, Mn = Object.getOwnPropertyDescriptors, Pn = Object.prototype, Fn = Array.prototype, kr = Object.getPrototypeOf, vr = Object.isExtensible;
const nt = () => {
};
function Cr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Un(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ve = 2, $r = 4, Lt = 8, Zt = 16, ze = 32, qe = 64, Qt = 128, se = 256, yt = 512, de = 1024, Le = 2048, Ve = 4096, $e = 8192, er = 16384, Lr = 32768, zt = 65536, dr = 1 << 17, qn = 1 << 18, zr = 1 << 19, Mt = 1 << 20, it = Symbol("$state"), jr = Symbol("legacy props"), Vn = Symbol(""), Tr = new class extends Error {
  constructor() {
    super(...arguments);
    J(this, "name", "StaleReactionError");
    J(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Sr = 3, Ke = 8;
function Br(e) {
  return e === this.v;
}
function Rr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Or(e) {
  return !Rr(e, this.v);
}
function Hn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Gn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Jn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Kn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Wn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Xn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ei = !1;
function ti(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ae = null;
function hr(e) {
  ae = e;
}
function Ze(e, t = !1, r) {
  var n = ae = {
    p: ae,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Kr(() => {
    n.d = !0;
  });
}
function Qe(e) {
  const t = ae;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = S, n = L;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var l = o[i];
          Ie(l.effect), xe(l.reaction), rr(l.fn);
        }
      } finally {
        Ie(r), xe(n);
      }
    }
    ae = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Nr() {
  return !0;
}
function Je(e) {
  if (typeof e != "object" || e === null || it in e)
    return e;
  const t = kr(e);
  if (t !== Pn && t !== Fn)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Wt(e), i = /* @__PURE__ */ M(0), l = L, o = (s) => {
    var a = L;
    xe(l);
    var c = s();
    return xe(a), c;
  };
  return n && r.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Xn();
        var f = r.get(a);
        return f === void 0 ? f = o(() => {
          var u = /* @__PURE__ */ M(c.value);
          return r.set(a, u), u;
        }) : $(f, c.value, !0), !0;
      },
      deleteProperty(s, a) {
        var c = r.get(a);
        if (c === void 0) {
          if (a in s) {
            const v = o(() => /* @__PURE__ */ M(re));
            r.set(a, v), Nt(i);
          }
        } else {
          if (n && typeof a == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), u = Number(a);
            Number.isInteger(u) && u < f.v && $(f, u);
          }
          $(c, re), Nt(i);
        }
        return !0;
      },
      get(s, a, c) {
        var h;
        if (a === it)
          return e;
        var f = r.get(a), u = a in s;
        if (f === void 0 && (!u || (h = Me(s, a)) != null && h.writable) && (f = o(() => {
          var p = Je(u ? s[a] : re), y = /* @__PURE__ */ M(p);
          return y;
        }), r.set(a, f)), f !== void 0) {
          var v = C(f);
          return v === re ? void 0 : v;
        }
        return Reflect.get(s, a, c);
      },
      getOwnPropertyDescriptor(s, a) {
        var c = Reflect.getOwnPropertyDescriptor(s, a);
        if (c && "value" in c) {
          var f = r.get(a);
          f && (c.value = C(f));
        } else if (c === void 0) {
          var u = r.get(a), v = u == null ? void 0 : u.v;
          if (u !== void 0 && v !== re)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(s, a) {
        var v;
        if (a === it)
          return !0;
        var c = r.get(a), f = c !== void 0 && c.v !== re || Reflect.has(s, a);
        if (c !== void 0 || S !== null && (!f || (v = Me(s, a)) != null && v.writable)) {
          c === void 0 && (c = o(() => {
            var h = f ? Je(s[a]) : re, p = /* @__PURE__ */ M(h);
            return p;
          }), r.set(a, c));
          var u = C(c);
          if (u === re)
            return !1;
        }
        return f;
      },
      set(s, a, c, f) {
        var E;
        var u = r.get(a), v = a in s;
        if (n && a === "length")
          for (var h = c; h < /** @type {Source<number>} */
          u.v; h += 1) {
            var p = r.get(h + "");
            p !== void 0 ? $(p, re) : h in s && (p = o(() => /* @__PURE__ */ M(re)), r.set(h + "", p));
          }
        if (u === void 0)
          (!v || (E = Me(s, a)) != null && E.writable) && (u = o(() => /* @__PURE__ */ M(void 0)), $(u, Je(c)), r.set(a, u));
        else {
          v = u.v !== re;
          var y = o(() => Je(c));
          $(u, y);
        }
        var A = Reflect.getOwnPropertyDescriptor(s, a);
        if (A != null && A.set && A.set.call(f, c), !v) {
          if (n && typeof a == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), b = Number(a);
            Number.isInteger(b) && b >= d.v && $(d, b + 1);
          }
          Nt(i);
        }
        return !0;
      },
      ownKeys(s) {
        C(i);
        var a = Reflect.ownKeys(s).filter((u) => {
          var v = r.get(u);
          return v === void 0 || v.v !== re;
        });
        for (var [c, f] of r)
          f.v !== re && !(c in s) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Zn();
      }
    }
  );
}
function Nt(e, t = 1) {
  $(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  var t = ve | Le, r = L !== null && (L.f & ve) !== 0 ? (
    /** @type {Derived} */
    L
  ) : null;
  return S === null || r !== null && (r.f & se) !== 0 ? t |= se : S.f |= zr, {
    ctx: ae,
    deps: null,
    effects: null,
    equals: Br,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  const t = /* @__PURE__ */ jt(e);
  return on(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ir(e) {
  const t = /* @__PURE__ */ jt(e);
  return t.equals = Or, t;
}
function Dr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ye(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ni(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ve) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Mr(e) {
  var t, r = S;
  Ie(ni(e));
  try {
    Dr(e), t = un(e);
  } finally {
    Ie(r);
  }
  return t;
}
function Pr(e) {
  var t = Mr(e);
  if (e.equals(t) || (e.v = t, e.wv = an()), !et) {
    var r = (Oe || (e.f & se) !== 0) && e.deps !== null ? Ve : de;
    Ae(e, r);
  }
}
const ot = /* @__PURE__ */ new Map();
function xt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Br,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  const r = xt(e);
  return on(r), r;
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t = !1, r = !0) {
  const n = xt(e);
  return t || (n.equals = Or), n;
}
function $(e, t, r = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!me || (L.f & dr) !== 0) && Nr() && (L.f & (ve | Zt | dr)) !== 0 && !(q != null && q[1].includes(e) && q[0] === L) && Qn();
  let n = r ? Je(t) : t;
  return Ur(e, n);
}
function Ur(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    et ? ot.set(e, t) : ot.set(e, r), e.v = t, (e.f & ve) !== 0 && ((e.f & Le) !== 0 && Mr(
      /** @type {Derived} */
      e
    ), Ae(e, (e.f & se) === 0 ? de : Ve)), e.wv = an(), qr(e, Le), S !== null && (S.f & de) !== 0 && (S.f & (ze | qe)) === 0 && (ue === null ? di([e]) : ue.push(e));
  }
  return t;
}
function qr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var l = r[i], o = l.f;
      (o & Le) === 0 && (Ae(l, t), (o & (de | se)) !== 0 && ((o & ve) !== 0 ? qr(
        /** @type {Derived} */
        l,
        Ve
      ) : sr(
        /** @type {Effect} */
        l
      )));
    }
}
function dt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function Ce(e) {
  T = e;
}
let B;
function pe(e) {
  if (e === null)
    throw dt(), De;
  return B = e;
}
function We() {
  return pe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ je(B)
  );
}
function z(e) {
  if (T) {
    if (/* @__PURE__ */ je(B) !== null)
      throw dt(), De;
    B = e;
  }
}
function Pt() {
  for (var e = 0, t = B; ; ) {
    if (t.nodeType === Ke) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Kt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Gt || r === Jt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ je(t)
    );
    t.remove(), t = n;
  }
}
function Vr(e) {
  if (!e || e.nodeType !== Ke)
    throw dt(), De;
  return (
    /** @type {Comment} */
    e.data
  );
}
var At, Hr, Yr, Gr;
function Ft() {
  if (At === void 0) {
    At = window, Hr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Yr = Me(t, "firstChild").get, Gr = Me(t, "nextSibling").get, vr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), vr(r) && (r.__t = void 0);
  }
}
function st(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return Yr.call(e);
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return Gr.call(e);
}
function j(e, t) {
  if (!T)
    return /* @__PURE__ */ we(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ we(B)
  );
  if (r === null)
    r = B.appendChild(st());
  else if (t && r.nodeType !== Sr) {
    var n = st();
    return r == null || r.before(n), pe(n), n;
  }
  return pe(r), r;
}
function Ut(e, t) {
  if (!T) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ we(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ je(r) : r;
  }
  return B;
}
function H(e, t = 1, r = !1) {
  let n = T ? B : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ je(n);
  if (!T)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== Sr) {
    var l = st();
    return n === null ? i == null || i.after(l) : n.before(l), pe(l), l;
  }
  return pe(n), /** @type {TemplateNode} */
  n;
}
function Jr(e) {
  e.textContent = "";
}
function ii(e) {
  S === null && L === null && Gn(), L !== null && (L.f & se) !== 0 && S === null && Yn(), et && Hn();
}
function li(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function He(e, t, r, n = !0) {
  var i = S, l = {
    ctx: ae,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Le,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      or(l), l.f |= Lr;
    } catch (a) {
      throw ye(l), a;
    }
  else t !== null && sr(l);
  var o = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (zr | Qt)) === 0;
  if (!o && n && (i !== null && li(l, i), L !== null && (L.f & ve) !== 0)) {
    var s = (
      /** @type {Derived} */
      L
    );
    (s.effects ?? (s.effects = [])).push(l);
  }
  return l;
}
function Kr(e) {
  const t = He(Lt, null, !1);
  return Ae(t, de), t.teardown = e, t;
}
function tr(e) {
  ii();
  var t = S !== null && (S.f & ze) !== 0 && ae !== null && !ae.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ae
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: S,
      reaction: L
    });
  } else {
    var n = rr(e);
    return n;
  }
}
function oi(e) {
  const t = He(qe, e, !0);
  return () => {
    ye(t);
  };
}
function si(e) {
  const t = He(qe, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Et(t, () => {
      ye(t), n(void 0);
    }) : (ye(t), n(void 0));
  });
}
function rr(e) {
  return He($r, e, !1);
}
function nr(e) {
  return He(Lt, e, !0);
}
function X(e, t = [], r = jt) {
  const n = t.map(r);
  return Tt(() => e(...n.map(C)));
}
function Tt(e, t = 0) {
  var r = He(Lt | Zt | t, e, !0);
  return r;
}
function Xe(e, t = !0) {
  return He(Lt | ze, e, !0, t);
}
function Wr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = et, n = L;
    gr(!0), xe(null);
    try {
      t.call(null);
    } finally {
      gr(r), xe(n);
    }
  }
}
function Xr(e, t = !1) {
  var i;
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    (i = r.ac) == null || i.abort(Tr);
    var n = r.next;
    (r.f & qe) !== 0 ? r.parent = null : ye(r, t), r = n;
  }
}
function ai(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ze) === 0 && ye(t), t = r;
  }
}
function ye(e, t = !0) {
  var r = !1;
  (t || (e.f & qn) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Zr(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Xr(e, t && !r), $t(e, 0), Ae(e, er);
  var n = e.transitions;
  if (n !== null)
    for (const l of n)
      l.stop();
  Wr(e);
  var i = e.parent;
  i !== null && i.first !== null && Qr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Zr(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ je(e)
    );
    e.remove(), e = r;
  }
}
function Qr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Et(e, t) {
  var r = [];
  ir(e, r, !0), en(r, () => {
    ye(e), t && t();
  });
}
function en(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function ir(e, t, r) {
  if ((e.f & $e) === 0) {
    if (e.f ^= $e, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, l = (n.f & zt) !== 0 || (n.f & ze) !== 0;
      ir(n, t, l ? r : !1), n = i;
    }
  }
}
function kt(e) {
  tn(e, !0);
}
function tn(e, t) {
  if ((e.f & $e) !== 0) {
    e.f ^= $e;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & zt) !== 0 || (r.f & ze) !== 0;
      tn(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
const ci = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let at = [], ct = [];
function rn() {
  var e = at;
  at = [], Cr(e);
}
function nn() {
  var e = ct;
  ct = [], Cr(e);
}
function lr(e) {
  at.length === 0 && queueMicrotask(rn), at.push(e);
}
function ui(e) {
  ct.length === 0 && ci(nn), ct.push(e);
}
function fi() {
  at.length > 0 && rn(), ct.length > 0 && nn();
}
function vi(e) {
  var t = (
    /** @type {Effect} */
    S
  );
  if ((t.f & Lr) === 0) {
    if ((t.f & Qt) === 0)
      throw e;
    t.fn(e);
  } else
    ln(e, t);
}
function ln(e, t) {
  for (; t !== null; ) {
    if ((t.f & Qt) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let ut = !1, ft = null, Pe = !1, et = !1;
function gr(e) {
  et = e;
}
let lt = [];
let L = null, me = !1;
function xe(e) {
  L = e;
}
let S = null;
function Ie(e) {
  S = e;
}
let q = null;
function on(e) {
  L !== null && L.f & Mt && (q === null ? q = [L, [e]] : q[1].push(e));
}
let W = null, le = 0, ue = null;
function di(e) {
  ue = e;
}
let sn = 1, Ct = 0, Oe = !1;
function an() {
  return ++sn;
}
function St(e) {
  var u;
  var t = e.f;
  if ((t & Le) !== 0)
    return !0;
  if ((t & Ve) !== 0) {
    var r = e.deps, n = (t & se) !== 0;
    if (r !== null) {
      var i, l, o = (t & yt) !== 0, s = n && S !== null && !Oe, a = r.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), f = c.parent;
        for (i = 0; i < a; i++)
          l = r[i], (o || !((u = l == null ? void 0 : l.reactions) != null && u.includes(c))) && (l.reactions ?? (l.reactions = [])).push(c);
        o && (c.f ^= yt), s && f !== null && (f.f & se) === 0 && (c.f ^= se);
      }
      for (i = 0; i < a; i++)
        if (l = r[i], St(
          /** @type {Derived} */
          l
        ) && Pr(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!n || S !== null && !Oe) && Ae(e, de);
  }
  return !1;
}
function cn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      q != null && q[1].includes(e) && q[0] === L || ((l.f & ve) !== 0 ? cn(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Ae(l, Le) : (l.f & de) !== 0 && Ae(l, Ve), sr(
        /** @type {Effect} */
        l
      )));
    }
}
function un(e) {
  var h;
  var t = W, r = le, n = ue, i = L, l = Oe, o = q, s = ae, a = me, c = e.f;
  W = /** @type {null | Value[]} */
  null, le = 0, ue = null, Oe = (c & se) !== 0 && (me || !Pe || L === null), L = (c & (ze | qe)) === 0 ? e : null, q = null, hr(e.ctx), me = !1, Ct++, e.f |= Mt, e.ac !== null && (e.ac.abort(Tr), e.ac = null);
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), u = e.deps;
    if (W !== null) {
      var v;
      if ($t(e, le), u !== null && le > 0)
        for (u.length = le + W.length, v = 0; v < W.length; v++)
          u[le + v] = W[v];
      else
        e.deps = u = W;
      if (!Oe || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (c & ve) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (v = le; v < u.length; v++)
          ((h = u[v]).reactions ?? (h.reactions = [])).push(e);
    } else u !== null && le < u.length && ($t(e, le), u.length = le);
    if (Nr() && ue !== null && !me && u !== null && (e.f & (ve | Ve | Le)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      ue.length; v++)
        cn(
          ue[v],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ct++, ue !== null && (n === null ? n = ue : n.push(.../** @type {Source[]} */
    ue))), f;
  } catch (p) {
    vi(p);
  } finally {
    W = t, le = r, ue = n, L = i, Oe = l, q = o, hr(s), me = a, e.f ^= Mt;
  }
}
function hi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Dn.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (t.f & ve) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !W.includes(t)) && (Ae(t, Ve), (t.f & (se | yt)) === 0 && (t.f ^= yt), Dr(
    /** @type {Derived} **/
    t
  ), $t(
    /** @type {Derived} **/
    t,
    0
  ));
}
function $t(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      hi(e, r[n]);
}
function or(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Ae(e, de);
    var r = S, n = Pe;
    S = e, Pe = !0;
    try {
      (t & Zt) !== 0 ? ai(e) : Xr(e), Wr(e);
      var i = un(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = sn;
      var l;
      fr && ei && (e.f & Le) !== 0 && e.deps;
    } finally {
      Pe = n, S = r;
    }
  }
}
function gi() {
  try {
    Jn();
  } catch (e) {
    if (ft !== null)
      ln(e, ft);
    else
      throw e;
  }
}
function fn() {
  var e = Pe;
  try {
    var t = 0;
    for (Pe = !0; lt.length > 0; ) {
      t++ > 1e3 && gi();
      var r = lt, n = r.length;
      lt = [];
      for (var i = 0; i < n; i++) {
        var l = pi(r[i]);
        _i(l);
      }
      ot.clear();
    }
  } finally {
    ut = !1, Pe = e, ft = null;
  }
}
function _i(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      (n.f & (er | $e)) === 0 && St(n) && (or(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Qr(n) : n.fn = null));
    }
}
function sr(e) {
  ut || (ut = !0, queueMicrotask(fn));
  for (var t = ft = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (qe | ze)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  lt.push(t);
}
function pi(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, i = (n & (ze | qe)) !== 0, l = i && (n & de) !== 0;
    if (!l && (n & $e) === 0) {
      (n & $r) !== 0 ? t.push(r) : i ? r.f ^= de : St(r) && or(r);
      var o = r.first;
      if (o !== null) {
        r = o;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function m(e) {
  for (var t; ; ) {
    if (fi(), lt.length === 0)
      return ut = !1, ft = null, /** @type {T} */
      t;
    ut = !0, fn();
  }
}
function C(e) {
  var t = e.f, r = (t & ve) !== 0;
  if (L !== null && !me) {
    if (!(q != null && q[1].includes(e)) || q[0] !== L) {
      var n = L.deps;
      e.rv < Ct && (e.rv = Ct, W === null && n !== null && n[le] === e ? le++ : W === null ? W = [e] : (!Oe || !W.includes(e)) && W.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), l = i.parent;
    l !== null && (l.f & se) === 0 && (i.f ^= se);
  }
  return r && (i = /** @type {Derived} */
  e, St(i) && Pr(i)), et && ot.has(e) ? ot.get(e) : e.v;
}
function Bt(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const bi = -7169;
function Ae(e, t) {
  e.f = e.f & bi | t;
}
let _r = !1;
function vn() {
  _r || (_r = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function dn(e) {
  var t = L, r = S;
  xe(null), Ie(null);
  try {
    return e();
  } finally {
    xe(t), Ie(r);
  }
}
function mi(e, t, r, n = r) {
  e.addEventListener(t, () => dn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), vn();
}
const hn = /* @__PURE__ */ new Set(), qt = /* @__PURE__ */ new Set();
function wi(e, t, r, n = {}) {
  function i(l) {
    if (n.capture || tt.call(t, l), !l.cancelBubble)
      return dn(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? lr(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function It(e, t, r, n, i) {
  var l = { capture: n, passive: i }, o = wi(e, t, r, l);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Kr(() => {
    t.removeEventListener(e, o, l);
  });
}
function gn(e) {
  for (var t = 0; t < e.length; t++)
    hn.add(e[t]);
  for (var r of qt)
    r(e);
}
function tt(e) {
  var b;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, s = e.__root;
  if (s) {
    var a = i.indexOf(s);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    a <= c && (o = a);
  }
  if (l = /** @type {Element} */
  i[o] || e.target, l !== t) {
    wt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var f = L, u = S;
    xe(null), Ie(null);
    try {
      for (var v, h = []; l !== null; ) {
        var p = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var y = l["__" + n];
          if (y != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (Wt(y)) {
              var [A, ...d] = y;
              A.apply(l, [e, ...d]);
            } else
              y.call(l, e);
        } catch (E) {
          v ? h.push(E) : v = E;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        l = p;
      }
      if (v) {
        for (let E of h)
          queueMicrotask(() => {
            throw E;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, xe(f), Ie(u);
    }
  }
}
function _n(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ne(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Z(e, t) {
  var r = (t & On) !== 0, n = (t & Nn) !== 0, i, l = !e.startsWith("<!>");
  return () => {
    if (T)
      return Ne(B, null), B;
    i === void 0 && (i = _n(l ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ we(i)));
    var o = (
      /** @type {TemplateNode} */
      n || Hr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ne(s, a);
    } else
      Ne(o, o);
    return o;
  };
}
function pr() {
  if (T)
    return Ne(B, null), B;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = st();
  return e.append(t, r), Ne(t, r), e;
}
function U(e, t) {
  if (T) {
    S.nodes_end = B, We();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const yi = ["touchstart", "touchmove"];
function xi(e) {
  return yi.includes(e);
}
function ge(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function pn(e, t) {
  return bn(e, t);
}
function Ai(e, t) {
  Ft(), t.intro = t.intro ?? !1;
  const r = t.target, n = T, i = B;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ we(r)
    ); l && (l.nodeType !== Ke || /** @type {Comment} */
    l.data !== Gt); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ je(l);
    if (!l)
      throw De;
    Ce(!0), pe(
      /** @type {Comment} */
      l
    ), We();
    const o = bn(e, { ...t, anchor: l });
    if (B === null || B.nodeType !== Ke || /** @type {Comment} */
    B.data !== Kt)
      throw dt(), De;
    return Ce(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === De)
      return t.recover === !1 && Kn(), Ft(), Jr(r), Ce(!1), pn(e, t);
    throw o;
  } finally {
    Ce(n), pe(i);
  }
}
const Ye = /* @__PURE__ */ new Map();
function bn(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: o = !0 }) {
  Ft();
  var s = /* @__PURE__ */ new Set(), a = (u) => {
    for (var v = 0; v < u.length; v++) {
      var h = u[v];
      if (!s.has(h)) {
        s.add(h);
        var p = xi(h);
        t.addEventListener(h, tt, { passive: p });
        var y = Ye.get(h);
        y === void 0 ? (document.addEventListener(h, tt, { passive: p }), Ye.set(h, 1)) : Ye.set(h, y + 1);
      }
    }
  };
  a(Xt(hn)), qt.add(a);
  var c = void 0, f = si(() => {
    var u = r ?? t.appendChild(st());
    return Xe(() => {
      if (l) {
        Ze({});
        var v = (
          /** @type {ComponentContext} */
          ae
        );
        v.c = l;
      }
      i && (n.$$events = i), T && Ne(
        /** @type {TemplateNode} */
        u,
        null
      ), c = e(u, n) || {}, T && (S.nodes_end = B), l && Qe();
    }), () => {
      var p;
      for (var v of s) {
        t.removeEventListener(v, tt);
        var h = (
          /** @type {number} */
          Ye.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, tt), Ye.delete(v)) : Ye.set(v, h);
      }
      qt.delete(a), u !== r && ((p = u.parentNode) == null || p.removeChild(u));
    };
  });
  return Vt.set(c, f), c;
}
let Vt = /* @__PURE__ */ new WeakMap();
function Ei(e, t) {
  const r = Vt.get(e);
  return r ? (Vt.delete(e), r(t)) : Promise.resolve();
}
function ki(e, t, ...r) {
  var n = e, i = nt, l;
  Tt(() => {
    i !== (i = t()) && (l && (ye(l), l = null), l = Xe(() => (
      /** @type {SnippetFn} */
      i(n, ...r)
    )));
  }, zt), T && (n = B);
}
function mn(e) {
  ae === null && ti(), tr(() => {
    const t = Bt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function oe(e, t, [r, n] = [0, 0]) {
  T && r === 0 && We();
  var i = e, l = null, o = null, s = re, a = r > 0 ? zt : 0, c = !1;
  const f = (v, h = !0) => {
    c = !0, u(h, v);
  }, u = (v, h) => {
    if (s === (s = v)) return;
    let p = !1;
    if (T && n !== -1) {
      if (r === 0) {
        const A = Vr(i);
        A === Gt ? n = 0 : A === Jt ? n = 1 / 0 : (n = parseInt(A.substring(1)), n !== n && (n = s ? 1 / 0 : -1));
      }
      const y = n > r;
      !!s === y && (i = Pt(), pe(i), Ce(!1), p = !0, n = -1);
    }
    s ? (l ? kt(l) : h && (l = Xe(() => h(i))), o && Et(o, () => {
      o = null;
    })) : (o ? kt(o) : h && (o = Xe(() => h(i, [r + 1, n]))), l && Et(l, () => {
      l = null;
    })), p && Ce(!0);
  };
  Tt(() => {
    c = !1, t(f), c || u(null, null);
  }, a), T && (i = B);
}
function Ci(e, t, r, n) {
  for (var i = [], l = t.length, o = 0; o < l; o++)
    ir(t[o].e, i, !0);
  var s = l > 0 && i.length === 0 && r !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Jr(a), a.append(
      /** @type {Element} */
      r
    ), n.clear(), Re(e, t[0].prev, t[l - 1].next);
  }
  en(i, () => {
    for (var c = 0; c < l; c++) {
      var f = t[c];
      s || (n.delete(f.k), Re(e, f.prev, f.next)), ye(f.e, !s);
    }
  });
}
function $i(e, t, r, n, i, l = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  T && We();
  var a = null, c = !1, f = /* @__PURE__ */ Ir(() => {
    var u = r();
    return Wt(u) ? u : u == null ? [] : Xt(u);
  });
  Tt(() => {
    var u = C(f), v = u.length;
    if (c && v === 0)
      return;
    c = v === 0;
    let h = !1;
    if (T) {
      var p = Vr(o) === Jt;
      p !== (v === 0) && (o = Pt(), pe(o), Ce(!1), h = !0);
    }
    if (T) {
      for (var y = null, A, d = 0; d < v; d++) {
        if (B.nodeType === Ke && /** @type {Comment} */
        B.data === Kt) {
          o = /** @type {Comment} */
          B, h = !0, Ce(!1);
          break;
        }
        var b = u[d], E = n(b, d);
        A = wn(
          B,
          s,
          y,
          null,
          b,
          E,
          d,
          i,
          t,
          r
        ), s.items.set(E, A), y = A;
      }
      v > 0 && pe(Pt());
    }
    T || Li(u, s, o, i, t, n, r), l !== null && (v === 0 ? a ? kt(a) : a = Xe(() => l(o)) : a !== null && Et(a, () => {
      a = null;
    })), h && Ce(!0), C(f);
  }), T && (o = B);
}
function Li(e, t, r, n, i, l, o) {
  var s = e.length, a = t.items, c = t.first, f = c, u, v = null, h = [], p = [], y, A, d, b;
  for (b = 0; b < s; b += 1) {
    if (y = e[b], A = l(y, b), d = a.get(A), d === void 0) {
      var E = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : r;
      v = wn(
        E,
        t,
        v,
        v === null ? t.first : v.next,
        y,
        A,
        b,
        n,
        i,
        o
      ), a.set(A, v), h = [], p = [], f = v.next;
      continue;
    }
    if (zi(d, y, b), (d.e.f & $e) !== 0 && kt(d.e), d !== f) {
      if (u !== void 0 && u.has(d)) {
        if (h.length < p.length) {
          var I = p[0], R;
          v = I.prev;
          var D = h[0], Y = h[h.length - 1];
          for (R = 0; R < h.length; R += 1)
            br(h[R], I, r);
          for (R = 0; R < p.length; R += 1)
            u.delete(p[R]);
          Re(t, D.prev, Y.next), Re(t, v, D), Re(t, Y, I), f = I, v = Y, b -= 1, h = [], p = [];
        } else
          u.delete(d), br(d, f, r), Re(t, d.prev, d.next), Re(t, d, v === null ? t.first : v.next), Re(t, v, d), v = d;
        continue;
      }
      for (h = [], p = []; f !== null && f.k !== A; )
        (f.e.f & $e) === 0 && (u ?? (u = /* @__PURE__ */ new Set())).add(f), p.push(f), f = f.next;
      if (f === null)
        continue;
      d = f;
    }
    h.push(d), v = d, f = d.next;
  }
  if (f !== null || u !== void 0) {
    for (var ne = u === void 0 ? [] : Xt(u); f !== null; )
      (f.e.f & $e) === 0 && ne.push(f), f = f.next;
    var Q = ne.length;
    if (Q > 0) {
      var he = null;
      Ci(t, ne, he, a);
    }
  }
  S.first = t.first && t.first.e, S.last = v && v.e;
}
function zi(e, t, r, n) {
  Ur(e.v, t), e.i = r;
}
function wn(e, t, r, n, i, l, o, s, a, c) {
  var f = (a & Ln) !== 0, u = (a & jn) === 0, v = f ? u ? /* @__PURE__ */ Fr(i, !1, !1) : xt(i) : i, h = (a & zn) === 0 ? o : xt(o), p = {
    i: h,
    v,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return p.e = Xe(() => s(e, v, h, c), T), p.e.prev = r && r.e, p.e.next = n && n.e, r === null ? t.first = p : (r.next = p, r.e.next = p.e), n !== null && (n.prev = p, n.e.prev = p.e), p;
  } finally {
  }
}
function br(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== n; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ je(l)
    );
    i.before(l), l = o;
  }
}
function Re(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Fe(e, t, r = !1, n = !1, i = !1) {
  var l = e, o = "";
  X(() => {
    var s = (
      /** @type {Effect} */
      S
    );
    if (o === (o = t() ?? "")) {
      T && We();
      return;
    }
    if (s.nodes_start !== null && (Zr(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), o !== "") {
      if (T) {
        B.data;
        for (var a = We(), c = a; a !== null && (a.nodeType !== Ke || /** @type {Comment} */
        a.data !== ""); )
          c = a, a = /** @type {TemplateNode} */
          /* @__PURE__ */ je(a);
        if (a === null)
          throw dt(), De;
        Ne(B, c), l = pe(a);
        return;
      }
      var f = o + "";
      r ? f = `<svg>${f}</svg>` : n && (f = `<math>${f}</math>`);
      var u = _n(f);
      if ((r || n) && (u = /** @type {Element} */
      /* @__PURE__ */ we(u)), Ne(
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), r || n)
        for (; /* @__PURE__ */ we(u); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ we(u)
          );
      else
        l.before(u);
    }
  });
}
function ht(e, t) {
  lr(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const mr = [...` 	
\r\f \v\uFEFF`];
function ji(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var l = i.length, o = 0; (o = n.indexOf(i, o)) >= 0; ) {
          var s = o + l;
          (o === 0 || mr.includes(n[o - 1])) && (s === n.length || mr.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Ti(e, t) {
  return e == null ? null : String(e);
}
function yn(e, t, r, n, i, l) {
  var o = e.__className;
  if (T || o !== r || o === void 0) {
    var s = ji(r, n, l);
    (!T || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (l && i !== l)
    for (var a in l) {
      var c = !!l[a];
      (i == null || c !== !!i[a]) && e.classList.toggle(a, c);
    }
  return l;
}
function _e(e, t, r, n) {
  var i = e.__style;
  if (T || i !== t) {
    var l = Ti(t);
    (!T || l !== e.getAttribute("style")) && (l == null ? e.removeAttribute("style") : e.style.cssText = l), e.__style = t;
  }
  return n;
}
const Si = Symbol("is custom element"), Bi = Symbol("is html");
function Ri(e) {
  if (T) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          vt(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          vt(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, ui(r), vn();
  }
}
function vt(e, t, r, n) {
  var i = Oi(e);
  T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Vn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ni(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Oi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Si]: e.nodeName.includes("-"),
      [Bi]: e.namespaceURI === In
    })
  );
}
var wr = /* @__PURE__ */ new Map();
function Ni(e) {
  var t = wr.get(e.nodeName);
  if (t) return t;
  wr.set(e.nodeName, t = []);
  for (var r, n = e, i = Element.prototype; i !== n; ) {
    r = Mn(n);
    for (var l in r)
      r[l].set && t.push(l);
    n = kr(n);
  }
  return t;
}
function Ii(e, t, r = t) {
  mi(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (T && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Bt(t) == null) && r(e.checked), nr(() => {
    var n = t();
    e.checked = !!n;
  });
}
function yr(e, t) {
  return e === t || (e == null ? void 0 : e[it]) === t;
}
function Ue(e = {}, t, r, n) {
  return rr(() => {
    var i, l;
    return nr(() => {
      i = l, l = [], Bt(() => {
        e !== r(...l) && (t(e, ...l), i && yr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      lr(() => {
        l && yr(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
const Ge = [];
function Di(e, t = nt) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function i(s) {
    if (Rr(e, s) && (e = s, r)) {
      const a = !Ge.length;
      for (const c of n)
        c[1](), Ge.push(c, e);
      if (a) {
        for (let c = 0; c < Ge.length; c += 2)
          Ge[c][0](Ge[c + 1]);
        Ge.length = 0;
      }
    }
  }
  function l(s) {
    i(s(
      /** @type {T} */
      e
    ));
  }
  function o(s, a = nt) {
    const c = [s, a];
    return n.add(c), n.size === 1 && (r = t(i, l) || nt), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: l, subscribe: o };
}
let _t = !1;
function Mi(e) {
  var t = _t;
  try {
    return _t = !1, [e(), _t];
  } finally {
    _t = t;
  }
}
function Pi(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, r, n) {
  var A;
  var i = (r & Bn) !== 0, l = (r & Rn) !== 0, o = (
    /** @type {V} */
    n
  ), s = !0, a = () => (s && (s = !1, o = l ? Bt(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), o), c;
  if (i) {
    var f = it in e || jr in e;
    c = ((A = Me(e, t)) == null ? void 0 : A.set) ?? (f && t in e ? (d) => e[t] = d : void 0);
  }
  var u, v = !1;
  i ? [u, v] = Mi(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t], u === void 0 && n !== void 0 && (u = a(), c && (Wn(), c(u)));
  var h;
  if (h = () => {
    var d = (
      /** @type {V} */
      e[t]
    );
    return d === void 0 ? a() : (s = !0, d);
  }, (r & Sn) === 0)
    return h;
  if (c) {
    var p = e.$$legacy;
    return function(d, b) {
      return arguments.length > 0 ? ((!b || p || v) && c(b ? h() : d), d) : h();
    };
  }
  var y = ((r & Tn) !== 0 ? jt : Ir)(h);
  return i && C(y), function(d, b) {
    if (arguments.length > 0) {
      const E = b ? C(y) : i ? Je(d) : d;
      return $(y, E), o !== void 0 && (o = E), d;
    }
    return Pi(y) ? y.v : C(y);
  };
}
function Fi(e) {
  return new Ui(e);
}
var ke, fe;
class Ui {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Rt(this, ke);
    /** @type {Record<string, any>} */
    Rt(this, fe);
    var l;
    var r = /* @__PURE__ */ new Map(), n = (o, s) => {
      var a = /* @__PURE__ */ Fr(s, !1, !1);
      return r.set(o, a), a;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, s) {
          return C(r.get(s) ?? n(s, Reflect.get(o, s)));
        },
        has(o, s) {
          return s === jr ? !0 : (C(r.get(s) ?? n(s, Reflect.get(o, s))), Reflect.has(o, s));
        },
        set(o, s, a) {
          return $(r.get(s) ?? n(s, a), a), Reflect.set(o, s, a);
        }
      }
    );
    Ot(this, fe, (t.hydrate ? Ai : pn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && m(), Ot(this, ke, i.$$events);
    for (const o of Object.keys(te(this, fe)))
      o === "$set" || o === "$destroy" || o === "$on" || wt(this, o, {
        get() {
          return te(this, fe)[o];
        },
        /** @param {any} value */
        set(s) {
          te(this, fe)[o] = s;
        },
        enumerable: !0
      });
    te(this, fe).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, te(this, fe).$destroy = () => {
      Ei(te(this, fe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    te(this, fe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    te(this, ke)[t] = te(this, ke)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return te(this, ke)[t].push(n), () => {
      te(this, ke)[t] = te(this, ke)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    te(this, fe).$destroy();
  }
}
ke = new WeakMap(), fe = new WeakMap();
let xn;
typeof HTMLElement == "function" && (xn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    J(this, "$$ctor");
    /** Slots */
    J(this, "$$s");
    /** @type {any} The Svelte component instance */
    J(this, "$$c");
    /** Whether or not the custom element is connected */
    J(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    J(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    J(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    J(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    J(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    J(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    J(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (l) => {
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), U(l, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = qi(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = bt(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Fi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = oi(() => {
        nr(() => {
          var i;
          this.$$r = !0;
          for (const l of mt(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const o = bt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, o);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const o = this.$$c.$on(i, l);
          this.$$l_u.set(l, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = bt(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return mt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function bt(e, t, r, n) {
  var l;
  const i = (l = r[e]) == null ? void 0 : l.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function qi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function gt(e, t, r, n, i, l) {
  let o = class extends xn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return mt(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return mt(t).forEach((s) => {
    wt(o.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(a) {
        var u;
        a = bt(s, a, t), this.$$d[s] = a;
        var c = this.$$c;
        if (c) {
          var f = (u = Me(c, s)) == null ? void 0 : u.get;
          f ? c[s] = a : c.$set({ [s]: a });
        }
      }
    });
  }), n.forEach((s) => {
    wt(o.prototype, s, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[s];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
/*! js-cookie v3.0.5 | MIT */
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
var Vi = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function Ht(e, t) {
  function r(i, l, o) {
    if (!(typeof document > "u")) {
      o = pt({}, t, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var s = "";
      for (var a in o)
        o[a] && (s += "; " + a, o[a] !== !0 && (s += "=" + o[a].split(";")[0]));
      return document.cookie = i + "=" + e.write(l, i) + s;
    }
  }
  function n(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var l = document.cookie ? document.cookie.split("; ") : [], o = {}, s = 0; s < l.length; s++) {
        var a = l[s].split("="), c = a.slice(1).join("=");
        try {
          var f = decodeURIComponent(a[0]);
          if (o[f] = e.read(c, f), i === f)
            break;
        } catch {
        }
      }
      return i ? o[i] : o;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function(i, l) {
        r(
          i,
          "",
          pt({}, l, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return Ht(this.converter, pt({}, this.attributes, i));
      },
      withConverter: function(i) {
        return Ht(pt({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var rt = Ht(Vi, { path: "/" });
const V = [];
for (let e = 0; e < 256; ++e)
  V.push((e + 256).toString(16).slice(1));
function Hi(e, t = 0) {
  return (V[e[t + 0]] + V[e[t + 1]] + V[e[t + 2]] + V[e[t + 3]] + "-" + V[e[t + 4]] + V[e[t + 5]] + "-" + V[e[t + 6]] + V[e[t + 7]] + "-" + V[e[t + 8]] + V[e[t + 9]] + "-" + V[e[t + 10]] + V[e[t + 11]] + V[e[t + 12]] + V[e[t + 13]] + V[e[t + 14]] + V[e[t + 15]]).toLowerCase();
}
let Dt;
const Yi = new Uint8Array(16);
function Gi() {
  if (!Dt) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Dt = crypto.getRandomValues.bind(crypto);
  }
  return Dt(Yi);
}
const Ji = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xr = { randomUUID: Ji };
function Ar(e, t, r) {
  var i;
  if (xr.randomUUID && !e)
    return xr.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? Gi();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Hi(n);
}
let Yt;
function Ki(e) {
  Yt = e;
}
function Al() {
  return Yt ? (Yt(), !0) : !1;
}
const Wi = Di({});
class Xi {
  constructor(t, r, n) {
    J(this, "cookie");
    J(this, "fingerprinting");
    J(this, "choices");
    this.cookie = t, this.fingerprinting = n, this.choices = this.enhanceChoiceCallbacks(r);
  }
  /**
   * Enhance callbacks to update the store after user callbacks execute.
   */
  enhanceChoiceCallbacks(t) {
    return Object.entries(t).forEach(([r, n]) => {
      const i = n.onAccepted, l = n.onRejected;
      n.onAccepted = i ? async () => {
        await i(), this.updateStore();
      } : () => {
        this.updateStore();
      }, n.onRejected = l ? async () => {
        await l(), this.updateStore();
      } : () => {
        this.updateStore();
      };
    }), t;
  }
  save() {
    const t = Object.fromEntries(Object.entries(this.choices).map(([o, s]) => [o, !!s.value])), n = (this.fingerprinting !== !0 && typeof this.fingerprinting == "object" && this.fingerprinting.enabledBy ? this.fingerprinting.enabledBy : ["tracking", "analytics"]).some((o) => t[o] === !0);
    if (this.fingerprinting && n) {
      const o = JSON.parse(rt.get(this.cookie.name) ?? "{}").fingerprint ?? (this.fingerprinting === !0 ? Ar() : this.fingerprinting.uuid ?? Ar());
      if (this.fingerprinting !== !0 && "cookie" in this.fingerprinting) {
        const { name: s, ...a } = this.fingerprinting.cookie;
        rt.set(s, o, a);
      } else
        t.fingerprint = o;
    }
    const { name: i, ...l } = this.cookie;
    rt.set(i, JSON.stringify(t), l), Object.entries(this.choices).forEach(([o, s]) => {
      var a, c;
      o !== "fingerprint" && (s.value ? (a = s == null ? void 0 : s.onAccepted) == null || a.call(s) : (c = s == null ? void 0 : s.onRejected) == null || c.call(s));
    });
  }
  acceptAll() {
    Object.values(this.choices).forEach((t) => {
      t.value = !0;
    }), this.save();
  }
  rejectAll() {
    Object.values(this.choices).forEach((t) => {
      t.value = !!t.mandatory;
    }), this.save();
  }
  getSaved() {
    const t = rt.get(this.cookie.name);
    return t ? JSON.parse(t) : void 0;
  }
  loadSelections(t) {
    Object.entries(t).forEach(([r, n]) => {
      var i, l;
      if (r !== "fingerprint") {
        const o = this.choices[r];
        o.value = n, n ? (i = o == null ? void 0 : o.onAccepted) == null || i.call(o) : (l = o == null ? void 0 : o.onRejected) == null || l.call(o);
      }
    });
  }
  updateStore() {
    Wi.set(Object.fromEntries(Object.entries(this.choices).map(([t, r]) => [t, !!r.value])));
  }
}
function El(e, t) {
  var i;
  const n = (((i = t == null ? void 0 : t.cookies) == null ? void 0 : i.get.bind(t.cookies)) ?? ((l) => rt.get(l)))(e);
  if (n)
    try {
      return JSON.parse(n).fingerprint;
    } catch {
      return;
    }
}
const Zi = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--fxemoji'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cpath%20fill='%23D19B61'%20d='M30.588%20157.435C45.694%2092.479%20111.838%2011.252%20210.984%208.688s188.907%2023.082%20247.894%20100.02s58.986%20220.881%2025.646%20265.6s-41.869%20142.173-192.764%20131.914C140.866%20495.964%2087.009%20464.001%2038.281%20394.068s-28.245-148.266-7.693-236.633z'%3e%3c/path%3e%3cpath%20fill='%234F3D30'%20d='M161.834%20173.737c0%2010.843-18.425%2019.634-41.154%2019.634s-41.154-8.79-41.154-19.634c0-26.124%2043.257-30.846%2043.791-41.152c.1-1.933%202.78-3.171%205.053-2.251c11.912%204.825%2033.464%2017.179%2033.464%2043.403zm161.668%20236.249c-2.039-.662-4.442.228-4.532%201.618c-.479%207.408-39.281%2010.802-39.281%2029.579c0%207.794%2016.528%2014.112%2036.915%2014.112s36.915-6.318%2036.915-14.112c.001-18.849-19.332-27.729-30.017-31.197zm87.547-118.379c-2.039-.968-4.442.333-4.532%202.366c-.479%2010.834-39.281%2015.797-39.281%2043.258c0%2011.398%2016.528%2020.638%2036.915%2020.638s36.915-9.24%2036.915-20.638c0-27.566-19.333-40.552-30.017-45.624z'%3e%3c/path%3e%3cpath%20fill='%23332A23'%20d='M264.821%20274.863c0%2010.345-16.528%2018.731-36.915%2018.731s-36.915-8.386-36.915-18.731c0-24.923%2038.802-29.428%2039.281-39.261c.09-1.845%202.494-3.026%204.532-2.147c10.684%204.603%2030.017%2016.389%2030.017%2041.408zm6.898-210.826c-2.039-.662-4.442.228-4.532%201.618c-.479%207.408-39.281%2010.802-39.281%2029.579c0%207.794%2016.528%2014.112%2036.915%2014.112s36.915-6.318%2036.915-14.112c0-18.849-19.333-27.729-30.017-31.197zm121.102%2054.782c-1.858-.913-4.049.315-4.131%202.233c-.437%2010.227-35.806%2014.912-35.806%2040.833c0%2010.759%2015.065%2019.482%2033.65%2019.482c18.584%200%2033.65-8.722%2033.65-19.482c-.002-26.021-17.624-38.279-27.363-43.066zm-235.287%20237.23c-2.272-1.117-4.951.385-5.052%202.731c-.534%2012.504-43.782%2018.233-43.782%2049.929c0%2013.156%2018.421%2023.821%2041.145%2023.821c22.724%200%2041.145-10.665%2041.145-23.821c0-31.818-21.548-46.806-33.456-52.66z'%3e%3c/path%3e%3c/svg%3e";
var Qi = /* @__PURE__ */ Z('<button><img alt="Edit Cookies" width="50px" height="50px" class="svelte-1dtbu2x"/></button>');
const el = {
  hash: "svelte-1dtbu2x",
  code: ".edit.svelte-1dtbu2x {position:fixed;z-index:9999;cursor:pointer;bottom:10px;background-color:inherit;border:none;}.edit.right.svelte-1dtbu2x {right:1vw;margin-left:1vw;}.edit.left.svelte-1dtbu2x {left:1vw;margin-right:1vw;}.edit.svelte-1dtbu2x img:where(.svelte-1dtbu2x) {width:50px;}"
};
function An(e, t) {
  Ze(t, !0), ht(e, el);
  const r = w(t, "onclick", 7), n = w(t, "position", 7);
  var i = Qi();
  let l;
  i.__click = function(...s) {
    var a;
    (a = r()) == null || a.apply(this, s);
  };
  var o = j(i);
  return z(i), X(
    (s) => {
      l = yn(i, 1, "edit svelte-1dtbu2x", null, l, s), vt(o, "src", Zi);
    },
    [
      () => ({ right: n() === "right", left: n() === "left" })
    ]
  ), U(e, i), Qe({
    get onclick() {
      return r();
    },
    set onclick(s) {
      r(s), m();
    },
    get position() {
      return n();
    },
    set position(s) {
      n(s), m();
    }
  });
}
gn(["click"]);
gt(An, { onclick: {}, position: {} }, [], [], !0);
var tl = /* @__PURE__ */ Z('<div class="choice svelte-81tpmv"><input type="checkbox" class="svelte-81tpmv"/> <label class="svelte-81tpmv"><strong class="svelte-81tpmv"> </strong> - <!></label></div>'), rl = /* @__PURE__ */ Z('<button type="button" class="reject svelte-81tpmv"> </button>'), nl = /* @__PURE__ */ Z('<button type="button" class="accept svelte-81tpmv"> </button>'), il = /* @__PURE__ */ Z("<!> <!>", 1), ll = /* @__PURE__ */ Z('<div class="customize svelte-81tpmv" role="dialog" aria-modal="true" aria-labelledby="cookie-box-title" aria-describedby="cookie-box-description"><div class="svelte-81tpmv"><h3 id="cookie-box-title" class="svelte-81tpmv"><!></h3> <button type="button" class="close svelte-81tpmv" aria-label="Close cookie preferences">&#x2715;</button> <p id="cookie-box-description" class="svelte-81tpmv"><!></p></div> <form class="svelte-81tpmv"><h4 class="svelte-81tpmv"> </h4> <!> <div class="button-group svelte-81tpmv"><!> <button type="submit" class="confirm svelte-81tpmv"> </button></div></form></div>');
const ol = {
  hash: "svelte-81tpmv",
  code: '.customize.svelte-81tpmv {z-index:9999;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);width:min(1000px, 80vw);background-color:var(--bg-color);color:var(--fg-color);padding:30px;pointer-events:auto;backdrop-filter:"blur(5px)";border-radius:10px;box-shadow:0 8px 24px rgba(0, 0, 0, 0.15);}.customize.svelte-81tpmv > div:where(.svelte-81tpmv) {box-sizing:border-box;margin:0;padding:0;position:relative;}.customize.svelte-81tpmv > div:where(.svelte-81tpmv) h3:where(.svelte-81tpmv) {font-size:18px;font-weight:bold;margin-bottom:10px;}.customize.svelte-81tpmv > div:where(.svelte-81tpmv) button:where(.svelte-81tpmv) {position:absolute;right:10px;top:-10px;font-size:large;font-weight:bolder;cursor:pointer;background-color:inherit;color:inherit;border:none;}.customize.svelte-81tpmv > div:where(.svelte-81tpmv) p:where(.svelte-81tpmv) {font-size:14px;line-height:1.5;margin-bottom:16px;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) h4:where(.svelte-81tpmv) {font-size:16px;margin:16px 0 10px;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .choice:where(.svelte-81tpmv) {display:flex;align-items:flex-start;gap:0.5rem;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .choice:where(.svelte-81tpmv) input[type=checkbox]:where(.svelte-81tpmv) {transform:scale(1.1);}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .choice:where(.svelte-81tpmv) label:where(.svelte-81tpmv) {display:inline-block;font-size:14px;margin-bottom:10px;line-height:1.4;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .choice:where(.svelte-81tpmv) label:where(.svelte-81tpmv) strong:where(.svelte-81tpmv) {font-weight:600;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) button:where(.svelte-81tpmv) {cursor:pointer;font-weight:600;padding:10px;border:2px solid white;transition:all 0.7s;border-radius:5px;font-size:medium;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) button:where(.svelte-81tpmv):hover {color:inherit;background-color:rgba(128, 128, 128, 0.2);}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .button-group:where(.svelte-81tpmv) {display:flex;gap:10px;margin-top:16px;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .button-group:where(.svelte-81tpmv) button:where(.svelte-81tpmv) {flex:1;}.customize.svelte-81tpmv form:where(.svelte-81tpmv) .button-group:where(.svelte-81tpmv) button.confirm:where(.svelte-81tpmv) {flex:2;}'
};
function En(e, t) {
  Ze(t, !0), ht(e, ol);
  const r = w(t, "heading", 7), n = w(t, "description", 7), i = w(t, "customize", 7), l = w(t, "choices", 7), o = w(t, "acceptAllLabel", 7), s = w(t, "rejectAllLabel", 7), a = w(t, "close", 7), c = w(t, "save", 7), f = w(t, "acceptAll", 7), u = w(t, "rejectAll", 7);
  let v = /* @__PURE__ */ M(void 0);
  const h = (_) => _.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  let p = /* @__PURE__ */ M((_) => {
  });
  const y = (_) => {
    _.key === "Escape" && a()();
  };
  mn(() => {
    setTimeout(
      () => {
        $(p, (_) => {
          var x;
          (x = C(v)) != null && x.contains(_.target) || a()();
        });
      },
      100
    );
  });
  const A = () => {
    a()();
  };
  tr(() => {
    var x;
    const _ = Array.from(((x = C(v)) == null ? void 0 : x.querySelectorAll("a")) || []);
    return _.forEach((k) => {
      k.addEventListener("click", A);
    }), () => {
      _.forEach((k) => {
        k.removeEventListener("click", A);
      });
    };
  });
  var d = ll();
  It("keydown", At, y), It("click", At, function(..._) {
    var x;
    (x = C(p)) == null || x.apply(this, _);
  });
  var b = j(d), E = j(b), I = j(E);
  Fe(I, r), z(E);
  var R = H(E, 2);
  R.__click = function(..._) {
    var x;
    (x = a()) == null || x.apply(this, _);
  };
  var D = H(R, 2), Y = j(D);
  Fe(Y, n), z(D), z(b);
  var ne = H(b, 2), Q = j(ne), he = j(Q, !0);
  z(Q);
  var ce = H(Q, 2);
  $i(ce, 17, () => Object.entries(l()), ([_, x]) => _, (_, x) => {
    var k = /* @__PURE__ */ ri(() => Un(C(x), 2));
    let g = () => C(k)[1];
    var O = tl(), ee = j(O);
    Ri(ee);
    var N = H(ee, 2), F = j(N), K = j(F, !0);
    z(F);
    var ie = H(F, 2);
    Fe(ie, () => g().description), z(N), z(O), X(
      (G, Be) => {
        vt(ee, "id", G), ee.disabled = g().mandatory, vt(N, "for", Be), ge(K, g().label);
      },
      [
        () => h(g().label),
        () => h(g().label)
      ]
    ), Ii(ee, () => g().value, (G) => g().value = G), U(_, O);
  });
  var be = H(ce, 2), Te = j(be);
  {
    var Se = (_) => {
      var x = il(), k = Ut(x);
      {
        var g = (N) => {
          var F = rl();
          F.__click = function(...ie) {
            var G;
            (G = u()) == null || G.apply(this, ie);
          };
          var K = j(F, !0);
          z(F), X(() => ge(K, typeof s() == "string" ? s() : s().text)), U(N, F);
        };
        oe(k, (N) => {
          s() && N(g);
        });
      }
      var O = H(k, 2);
      {
        var ee = (N) => {
          var F = nl();
          F.__click = function(...ie) {
            var G;
            (G = f()) == null || G.apply(this, ie);
          };
          var K = j(F, !0);
          z(F), X(() => ge(K, typeof o() == "string" ? o() : o().text)), U(N, F);
        };
        oe(O, (N) => {
          o() && N(ee);
        });
      }
      U(_, x);
    };
    oe(Te, (_) => {
      i().showAcceptRejectAllButtons && _(Se);
    });
  }
  var Ee = H(Te, 2), P = j(Ee, !0);
  return z(Ee), z(be), z(ne), z(d), Ue(d, (_) => $(v, _), () => C(v)), X(() => {
    ge(he, i().chooseLabel), ge(P, i().confirmLabel);
  }), It("submit", ne, function(..._) {
    var x;
    (x = c()) == null || x.apply(this, _);
  }), U(e, d), Qe({
    get heading() {
      return r();
    },
    set heading(_) {
      r(_), m();
    },
    get description() {
      return n();
    },
    set description(_) {
      n(_), m();
    },
    get customize() {
      return i();
    },
    set customize(_) {
      i(_), m();
    },
    get choices() {
      return l();
    },
    set choices(_) {
      l(_), m();
    },
    get acceptAllLabel() {
      return o();
    },
    set acceptAllLabel(_) {
      o(_), m();
    },
    get rejectAllLabel() {
      return s();
    },
    set rejectAllLabel(_) {
      s(_), m();
    },
    get close() {
      return a();
    },
    set close(_) {
      a(_), m();
    },
    get save() {
      return c();
    },
    set save(_) {
      c(_), m();
    },
    get acceptAll() {
      return f();
    },
    set acceptAll(_) {
      f(_), m();
    },
    get rejectAll() {
      return u();
    },
    set rejectAll(_) {
      u(_), m();
    }
  });
}
gn(["click"]);
gt(
  En,
  {
    heading: {},
    description: {},
    customize: {},
    choices: {},
    acceptAllLabel: {},
    rejectAllLabel: {},
    close: {},
    save: {},
    acceptAll: {},
    rejectAll: {}
  },
  [],
  [],
  !0
);
var sl = /* @__PURE__ */ Z('<div role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-description"><!></div>');
const al = {
  hash: "svelte-yse54d",
  code: '.blury-background-for-cookie-consent {pointer-events:none;overflow:hidden;position:relative;}.blury-background-for-cookie-consent::after {content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;backdrop-filter:blur(2px);filter:blur(2px);z-index:0;pointer-events:none;}'
};
function ar(e, t) {
  Ze(t, !0), ht(e, al);
  const r = w(t, "cookie", 7), n = w(t, "heading", 7), i = w(t, "description", 7), l = w(t, "customize", 7), o = w(t, "choices", 15), s = w(t, "editable", 7), a = w(t, "showEditButton", 7, !0), c = w(t, "fingerprinting", 7, !0), f = w(t, "bgColor", 7), u = w(t, "fgColor", 7), v = w(t, "position", 7, "right"), h = w(t, "acceptAllLabel", 7), p = w(t, "rejectAllLabel", 7), y = w(t, "customizeBtn", 7), A = w(t, "rejectAllBtn", 7), d = w(t, "acceptAllBtn", 7), b = w(t, "children", 7);
  let E = /* @__PURE__ */ M(!1), I = /* @__PURE__ */ M(!1), R = /* @__PURE__ */ M("box");
  const D = new Xi(r(), o(), c()), Y = () => {
    D.save(), $(R, "close");
  }, ne = () => {
    D.acceptAll(), $(E, !1), $(R, "close");
  }, Q = () => {
    D.rejectAll(), $(E, !1), $(R, "close");
  }, he = () => {
    $(I, !0), document.documentElement.classList.add("blury-background-for-cookie-consent");
  }, ce = () => {
    document.documentElement.classList.remove("blury-background-for-cookie-consent"), $(I, !1), $(E, C(R) === "box");
  }, be = (g) => {
    g.preventDefault(), Y(), ce(), $(E, !1);
  }, Te = (g) => {
    g.preventDefault(), D.acceptAll(), ce(), $(E, !1);
  }, Se = (g) => {
    g.preventDefault(), D.rejectAll(), ce(), $(E, !1);
  }, Ee = () => {
    s() && ($(E, !0), he());
  };
  mn(() => {
    Ki(Ee);
    let g = D.getSaved();
    if (!g) return void $(E, !0);
    D.loadSelections(g), $(R, "close");
  }), tr(() => {
    var N, F, K;
    const g = he, O = Q, ee = ne;
    return (N = y()) == null || N.addEventListener("click", g), (F = A()) == null || F.addEventListener("click", O), (K = d()) == null || K.addEventListener("click", ee), () => {
      var ie, G, Be;
      (ie = y()) == null || ie.removeEventListener("click", g), (G = A()) == null || G.removeEventListener("click", O), (Be = d()) == null || Be.removeEventListener("click", ee);
    };
  });
  var P = pr(), _ = Ut(P);
  {
    var x = (g) => {
      var O = sl(), ee = j(O);
      {
        var N = (K) => {
          var ie = pr(), G = Ut(ie);
          ki(G, () => b() ?? nt), U(K, ie);
        }, F = (K, ie) => {
          {
            var G = (Be) => {
              En(Be, {
                get heading() {
                  return n();
                },
                get description() {
                  return i();
                },
                get customize() {
                  return l();
                },
                get choices() {
                  return o();
                },
                get acceptAllLabel() {
                  return h();
                },
                get rejectAllLabel() {
                  return p();
                },
                close: ce,
                save: be,
                acceptAll: Te,
                rejectAll: Se
              });
            };
            oe(
              K,
              (Be) => {
                l() && Be(G);
              },
              ie
            );
          }
        };
        oe(ee, (K) => {
          C(I) ? K(F, !1) : K(N);
        });
      }
      z(O), X(() => _e(O, `--bg-color: ${f() ?? ""}; --fg-color: ${u() ?? ""}`)), U(g, O);
    }, k = (g, O) => {
      {
        var ee = (N) => {
          An(N, {
            onclick: Ee,
            get position() {
              return v();
            }
          });
        };
        oe(
          g,
          (N) => {
            s() && a() && N(ee);
          },
          O
        );
      }
    };
    oe(_, (g) => {
      C(E) ? g(x) : g(k, !1);
    });
  }
  return U(e, P), Qe({
    get cookie() {
      return r();
    },
    set cookie(g) {
      r(g), m();
    },
    get heading() {
      return n();
    },
    set heading(g) {
      n(g), m();
    },
    get description() {
      return i();
    },
    set description(g) {
      i(g), m();
    },
    get customize() {
      return l();
    },
    set customize(g) {
      l(g), m();
    },
    get choices() {
      return o();
    },
    set choices(g) {
      o(g), m();
    },
    get editable() {
      return s();
    },
    set editable(g) {
      s(g), m();
    },
    get showEditButton() {
      return a();
    },
    set showEditButton(g = !0) {
      a(g), m();
    },
    get fingerprinting() {
      return c();
    },
    set fingerprinting(g = !0) {
      c(g), m();
    },
    get bgColor() {
      return f();
    },
    set bgColor(g) {
      f(g), m();
    },
    get fgColor() {
      return u();
    },
    set fgColor(g) {
      u(g), m();
    },
    get position() {
      return v();
    },
    set position(g = "right") {
      v(g), m();
    },
    get acceptAllLabel() {
      return h();
    },
    set acceptAllLabel(g) {
      h(g), m();
    },
    get rejectAllLabel() {
      return p();
    },
    set rejectAllLabel(g) {
      p(g), m();
    },
    get customizeBtn() {
      return y();
    },
    set customizeBtn(g) {
      y(g), m();
    },
    get rejectAllBtn() {
      return A();
    },
    set rejectAllBtn(g) {
      A(g), m();
    },
    get acceptAllBtn() {
      return d();
    },
    set acceptAllBtn(g) {
      d(g), m();
    },
    get children() {
      return b();
    },
    set children(g) {
      b(g), m();
    }
  });
}
gt(
  ar,
  {
    cookie: {},
    heading: {},
    description: {},
    customize: {},
    choices: {},
    editable: {},
    showEditButton: {},
    fingerprinting: {},
    bgColor: {},
    fgColor: {},
    position: {},
    acceptAllLabel: {},
    rejectAllLabel: {},
    customizeBtn: {},
    rejectAllBtn: {},
    acceptAllBtn: {},
    children: {}
  },
  [],
  [],
  !0
);
var cl = /* @__PURE__ */ Z('<button type="button" id="customize" class="svelte-3al1ct"> </button>'), ul = /* @__PURE__ */ Z('<button type="button" id="reject" class="svelte-3al1ct"> </button>'), fl = /* @__PURE__ */ Z('<button type="button" id="accept" class="svelte-3al1ct"> </button>'), vl = /* @__PURE__ */ Z('<div><div><h3 id="cookie-consent-title" class="svelte-3al1ct"><!></h3> <p id="cookie-consent-description"><!></p></div> <div class="actions svelte-3al1ct"><!> <!> <!></div></div>');
const dl = {
  hash: "svelte-3al1ct",
  code: `.box.svelte-3al1ct {z-index:9999;position:fixed;bottom:1vw;display:flex;flex-direction:column;gap:20px;max-width:500px;background-color:var(--bg-color);color:var(--fg-color);padding:20px;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.7);}.box.right.svelte-3al1ct {right:1vw;margin-left:1vw;}.box.left.svelte-3al1ct {left:1vw;margin-right:1vw;}.box.svelte-3al1ct h3:where(.svelte-3al1ct) {font-size:larger;font-weight:500;margin-top:0;}.box.svelte-3al1ct .actions:where(.svelte-3al1ct) {display:flex;justify-content:flex-end;gap:15px;}
@media (max-width: 600px) {.box.svelte-3al1ct .actions:where(.svelte-3al1ct) {flex-direction:column;align-items:center;}.box.svelte-3al1ct .actions:where(.svelte-3al1ct) button:where(.svelte-3al1ct) {width:100%;}
}button.svelte-3al1ct {cursor:pointer;padding:10px;border:2px solid var(--fg-color);color:var(--bg-color);transition:all 0.7s;border-radius:5px;font-size:medium;width:33.3333333333%;}button#customize.svelte-3al1ct {background-color:inherit;color:inherit;border:none;font-size:1.1em;}button.svelte-3al1ct:hover {color:inherit;background-color:rgba(128, 128, 128, 0.2);}`
};
function hl(e, t) {
  Ze(t, !0), ht(e, dl);
  let r = /* @__PURE__ */ M(void 0), n = /* @__PURE__ */ M(void 0), i = /* @__PURE__ */ M(void 0);
  const l = w(t, "cookie", 7), o = w(t, "heading", 7), s = w(t, "description", 7), a = w(t, "acceptAllLabel", 7), c = w(t, "rejectAllLabel", 7), f = w(t, "customize", 7), u = w(t, "choices", 15), v = w(t, "editable", 7, !0), h = w(t, "showEditButton", 7, !0), p = w(t, "fingerprinting", 7, !1), y = w(t, "bgColor", 7, "#000000"), A = w(t, "fgColor", 7, "#ffffff"), d = w(t, "position", 7, "right");
  return ar(e, {
    get cookie() {
      return l();
    },
    get heading() {
      return o();
    },
    get description() {
      return s();
    },
    get acceptAllLabel() {
      return a();
    },
    get rejectAllLabel() {
      return c();
    },
    get customize() {
      return f();
    },
    get choices() {
      return u();
    },
    get editable() {
      return v();
    },
    get showEditButton() {
      return h();
    },
    get fingerprinting() {
      return p();
    },
    get bgColor() {
      return y();
    },
    get fgColor() {
      return A();
    },
    get position() {
      return d();
    },
    get customizeBtn() {
      return C(r);
    },
    get rejectAllBtn() {
      return C(n);
    },
    get acceptAllBtn() {
      return C(i);
    },
    children: (b, E) => {
      var I = vl();
      let R;
      var D = j(I), Y = j(D), ne = j(Y);
      Fe(ne, () => typeof o() == "string" ? o() : o().text), z(Y);
      var Q = H(Y, 2), he = j(Q);
      Fe(he, () => typeof s() == "string" ? s() : s().text), z(Q), z(D);
      var ce = H(D, 2), be = j(ce);
      {
        var Te = (x) => {
          var k = cl(), g = j(k, !0);
          z(k), Ue(k, (O) => $(r, O), () => C(r)), X(() => {
            _e(k, f().style), ge(g, f().label);
          }), U(x, k);
        };
        oe(be, (x) => {
          f() && x(Te);
        });
      }
      var Se = H(be, 2);
      {
        var Ee = (x) => {
          var k = ul(), g = j(k, !0);
          z(k), Ue(k, (O) => $(n, O), () => C(n)), X(() => {
            _e(k, typeof c() == "object" ? c().style : void 0), ge(g, typeof c() == "string" ? c() : c().text);
          }), U(x, k);
        };
        oe(Se, (x) => {
          c() && x(Ee);
        });
      }
      var P = H(Se, 2);
      {
        var _ = (x) => {
          var k = fl(), g = j(k, !0);
          z(k), Ue(k, (O) => $(i, O), () => C(i)), X(() => {
            _e(k, typeof a() == "object" ? a().style : void 0), ge(g, typeof a() == "string" ? a() : a().text);
          }), U(x, k);
        };
        oe(P, (x) => {
          a() && x(_);
        });
      }
      z(ce), z(I), X(
        (x) => {
          R = yn(I, 1, "box svelte-3al1ct", null, R, x), _e(Y, typeof o() == "object" ? o().style : void 0), _e(Q, typeof s() == "object" ? s().style : void 0);
        },
        [
          () => ({ right: d() === "right", left: d() === "left" })
        ]
      ), U(b, I);
    },
    $$slots: { default: !0 }
  }), Qe({
    get cookie() {
      return l();
    },
    set cookie(b) {
      l(b), m();
    },
    get heading() {
      return o();
    },
    set heading(b) {
      o(b), m();
    },
    get description() {
      return s();
    },
    set description(b) {
      s(b), m();
    },
    get acceptAllLabel() {
      return a();
    },
    set acceptAllLabel(b) {
      a(b), m();
    },
    get rejectAllLabel() {
      return c();
    },
    set rejectAllLabel(b) {
      c(b), m();
    },
    get customize() {
      return f();
    },
    set customize(b) {
      f(b), m();
    },
    get choices() {
      return u();
    },
    set choices(b) {
      u(b), m();
    },
    get editable() {
      return v();
    },
    set editable(b = !0) {
      v(b), m();
    },
    get showEditButton() {
      return h();
    },
    set showEditButton(b = !0) {
      h(b), m();
    },
    get fingerprinting() {
      return p();
    },
    set fingerprinting(b = !1) {
      p(b), m();
    },
    get bgColor() {
      return y();
    },
    set bgColor(b = "#000000") {
      y(b), m();
    },
    get fgColor() {
      return A();
    },
    set fgColor(b = "#ffffff") {
      A(b), m();
    },
    get position() {
      return d();
    },
    set position(b = "right") {
      d(b), m();
    }
  });
}
customElements.define("cookie-box", gt(
  hl,
  {
    cookie: {},
    heading: {},
    description: {},
    acceptAllLabel: {},
    rejectAllLabel: {},
    customize: {},
    choices: {},
    editable: {},
    showEditButton: {},
    fingerprinting: {},
    bgColor: {},
    fgColor: {},
    position: {}
  },
  [],
  [],
  !0
));
var gl = /* @__PURE__ */ Z('<button type="button" id="customize" class="svelte-7s1wlw"> </button>'), _l = /* @__PURE__ */ Z('<button type="button" id="reject" class="svelte-7s1wlw"> </button>'), pl = /* @__PURE__ */ Z('<button type="button" id="accept" class="svelte-7s1wlw"> </button>'), bl = /* @__PURE__ */ Z('<div class="banner svelte-7s1wlw"><div><h3 id="cookie-consent-title" class="svelte-7s1wlw"><!></h3> <p id="cookie-consent-description" class="svelte-7s1wlw"><!></p></div> <div class="actions svelte-7s1wlw"><!> <!> <!></div></div>');
const ml = {
  hash: "svelte-7s1wlw",
  code: `.banner.svelte-7s1wlw {z-index:9999;position:fixed;bottom:1vw;left:1vw;right:1vw;box-shadow:0 0 10px rgba(0, 0, 0, 0.8);display:flex;flex-direction:row;width:95vw;background-color:var(--bg-color);color:var(--fg-color);padding:12px 16px;margin:auto;}
@media (max-width: 600px) {.banner.svelte-7s1wlw {flex-direction:column;align-items:center;}
}.banner.svelte-7s1wlw h3:where(.svelte-7s1wlw) {font-size:1em;font-weight:400;margin-top:0;margin-bottom:5px;}.banner.svelte-7s1wlw p:where(.svelte-7s1wlw) {margin:0;font-size:0.9em;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) {width:33.3333333333%;display:flex;justify-content:flex-end;align-items:center;gap:15px;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) button:where(.svelte-7s1wlw) {cursor:pointer;padding:5px;border:2px solid var(--fg-color);color:var(--bg-color);transition:all 0.7s;font-size:0.9em;width:33.3333333333%;height:50%;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) button#customize:where(.svelte-7s1wlw) {background-color:inherit;color:inherit;border:none;font-size:1em;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) button:where(.svelte-7s1wlw):hover {color:inherit;background-color:rgba(128, 128, 128, 0.2);}
@media (max-width: 600px) {.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) {flex-direction:column;align-items:center;width:100%;margin-top:15px;}.banner.svelte-7s1wlw .actions:where(.svelte-7s1wlw) button:where(.svelte-7s1wlw) {width:100%;}
}`
};
function wl(e, t) {
  Ze(t, !0), ht(e, ml);
  let r = /* @__PURE__ */ M(void 0), n = /* @__PURE__ */ M(void 0), i = /* @__PURE__ */ M(void 0);
  const l = w(t, "cookie", 7), o = w(t, "heading", 7), s = w(t, "description", 7), a = w(t, "acceptAllLabel", 7), c = w(t, "rejectAllLabel", 7), f = w(t, "customize", 7), u = w(t, "choices", 15), v = w(t, "editable", 7, !0), h = w(t, "showEditButton", 7, !0), p = w(t, "fingerprinting", 7, !1), y = w(t, "bgColor", 7, "#000000"), A = w(t, "fgColor", 7, "#ffffff");
  return ar(e, {
    get cookie() {
      return l();
    },
    get heading() {
      return o();
    },
    get description() {
      return s();
    },
    get acceptAllLabel() {
      return a();
    },
    get rejectAllLabel() {
      return c();
    },
    get customize() {
      return f();
    },
    get choices() {
      return u();
    },
    get editable() {
      return v();
    },
    get showEditButton() {
      return h();
    },
    get fingerprinting() {
      return p();
    },
    get bgColor() {
      return y();
    },
    get fgColor() {
      return A();
    },
    get customizeBtn() {
      return C(r);
    },
    get rejectAllBtn() {
      return C(n);
    },
    get acceptAllBtn() {
      return C(i);
    },
    children: (d, b) => {
      var E = bl(), I = j(E), R = j(I), D = j(R);
      Fe(D, () => typeof o() == "string" ? o() : o().text), z(R);
      var Y = H(R, 2), ne = j(Y);
      Fe(ne, () => typeof s() == "string" ? s() : s().text), z(Y), z(I);
      var Q = H(I, 2), he = j(Q);
      {
        var ce = (P) => {
          var _ = gl(), x = j(_, !0);
          z(_), Ue(_, (k) => $(r, k), () => C(r)), X(() => {
            _e(_, f().style), ge(x, f().label);
          }), U(P, _);
        };
        oe(he, (P) => {
          f() && P(ce);
        });
      }
      var be = H(he, 2);
      {
        var Te = (P) => {
          var _ = _l(), x = j(_, !0);
          z(_), Ue(_, (k) => $(n, k), () => C(n)), X(() => {
            _e(_, typeof c() == "object" ? c().style : void 0), ge(x, typeof c() == "string" ? c() : c().text);
          }), U(P, _);
        };
        oe(be, (P) => {
          c() && P(Te);
        });
      }
      var Se = H(be, 2);
      {
        var Ee = (P) => {
          var _ = pl(), x = j(_, !0);
          z(_), Ue(_, (k) => $(i, k), () => C(i)), X(() => {
            _e(_, typeof a() == "object" ? a().style : void 0), ge(x, typeof a() == "string" ? a() : a().text);
          }), U(P, _);
        };
        oe(Se, (P) => {
          a() && P(Ee);
        });
      }
      z(Q), z(E), X(() => {
        _e(R, typeof o() == "object" ? o().style : void 0), _e(Y, typeof s() == "object" ? s().style : void 0);
      }), U(d, E);
    },
    $$slots: { default: !0 }
  }), Qe({
    get cookie() {
      return l();
    },
    set cookie(d) {
      l(d), m();
    },
    get heading() {
      return o();
    },
    set heading(d) {
      o(d), m();
    },
    get description() {
      return s();
    },
    set description(d) {
      s(d), m();
    },
    get acceptAllLabel() {
      return a();
    },
    set acceptAllLabel(d) {
      a(d), m();
    },
    get rejectAllLabel() {
      return c();
    },
    set rejectAllLabel(d) {
      c(d), m();
    },
    get customize() {
      return f();
    },
    set customize(d) {
      f(d), m();
    },
    get choices() {
      return u();
    },
    set choices(d) {
      u(d), m();
    },
    get editable() {
      return v();
    },
    set editable(d = !0) {
      v(d), m();
    },
    get showEditButton() {
      return h();
    },
    set showEditButton(d = !0) {
      h(d), m();
    },
    get fingerprinting() {
      return p();
    },
    set fingerprinting(d = !1) {
      p(d), m();
    },
    get bgColor() {
      return y();
    },
    set bgColor(d = "#000000") {
      y(d), m();
    },
    get fgColor() {
      return A();
    },
    set fgColor(d = "#ffffff") {
      A(d), m();
    }
  });
}
customElements.define("cookie-banner", gt(
  wl,
  {
    cookie: {},
    heading: {},
    description: {},
    acceptAllLabel: {},
    rejectAllLabel: {},
    customize: {},
    choices: {},
    editable: {},
    showEditButton: {},
    fingerprinting: {},
    bgColor: {},
    fgColor: {}
  },
  [],
  [],
  !0
));
export {
  wl as CookieBanner,
  hl as CookieBox,
  Wi as cookieChoices,
  El as getFingerprint,
  Al as openCookieSettings
};

var m = (t, o, e) => {
  if (!o.has(t))
    throw TypeError("Cannot " + e);
};
var l = (t, o, e) => (m(t, o, "read from private field"), e ? e.call(t) : o.get(t)), C = (t, o, e) => {
  if (o.has(t))
    throw TypeError("Cannot add the same private member more than once");
  o instanceof WeakSet ? o.add(t) : o.set(t, e);
}, y = (t, o, e, s) => (m(t, o, "write to private field"), s ? s.call(t, e) : o.set(t, e), e);
var h = (t, o, e) => (m(t, o, "access private method"), e);
function $(t, o) {
  switch (t) {
    case "info":
      return `<svg t="1706352827061" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5252" width="${o}" height="${o}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m36.571429 341.333333h-73.142858v292.571428h73.142858V438.857143z m0-121.904762h-73.142858v73.142857h73.142858v-73.142857z" p-id="5253" fill="currentColor"></path></svg>`;
    case "success":
      return `<svg t="1706352864705" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6223" width="${o}" height="${o}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m193.194667 218.331428L447.21981 581.315048l-103.936-107.812572-52.662858 50.761143 156.379429 162.230857 310.662095-319.683047-52.467809-50.956191z" p-id="6224" fill="currentColor"></path></svg>`;
    case "warning":
      return `<svg t="1706352900701" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7203" width="${o}" height="${o}"><path d="M901 757.3L582.5 184.5c-15.4-27.7-43-41.5-70.5-41.5-27.6 0-55.2 13.8-70.5 41.5L123 757.3c-29.9 53.8 9 119.9 70.5 119.9h636.9c61.6 0.1 100.5-66.1 70.6-119.9zM479 370.6c0-18.2 14.8-33 33-33s33 14.8 33 33v220.8c0 18.2-14.8 33-33 33s-33-14.8-33-33V370.6zM512 766c-23.5 0-42.5-19-42.5-42.5s19-42.5 42.5-42.5 42.5 19 42.5 42.5-19 42.5-42.5 42.5z" fill="currentColor" p-id="7204"></path></svg>`;
    case "error":
      return `<svg t="1706347999579" style="flex-shrink: 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4224" width="${o}" height="${o}"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m129.29219 233.447619l-129.267809 129.29219-129.316571-129.29219-51.736381 51.736381 129.316571 129.267809-129.316571 129.316571 51.736381 51.736381L512 563.687619l129.29219 129.316571 51.736381-51.73638L563.687619 512l129.316571-129.29219-51.73638-51.736381z" p-id="4225" fill="currentColor"></path></svg>`;
  }
}
var i, c, d, f, p, u, v, w, x;
class L {
  constructor(o = {}) {
    C(this, f);
    C(this, u);
    C(this, w);
    C(this, i, {
      duration: 3e3,
      typeColor: {
        infoColor: "#fff",
        successColor: "#fff",
        warningColor: "#fff",
        errorColor: "#fff",
        infoBgColor: "#409eff",
        successBgColor: "#67c23a",
        warningBgColor: "#e6a23c",
        errorBgColor: "#f56c6c"
      }
    });
    C(this, c, []);
    C(this, d, 20);
    o.duration && (l(this, i).duration = o.duration), o.typeColor && (o.typeColor.errorBgColor && (l(this, i).typeColor.errorBgColor = o.typeColor.errorBgColor), o.typeColor.warningBgColor && (l(this, i).typeColor.warningBgColor = o.typeColor.warningBgColor), o.typeColor.successBgColor && (l(this, i).typeColor.successBgColor = o.typeColor.successBgColor), o.typeColor.infoBgColor && (l(this, i).typeColor.infoBgColor = o.typeColor.infoBgColor), o.typeColor.errorColor && (l(this, i).typeColor.errorColor = o.typeColor.errorColor), o.typeColor.warningColor && (l(this, i).typeColor.warningColor = o.typeColor.warningColor), o.typeColor.successColor && (l(this, i).typeColor.successColor = o.typeColor.successColor), o.typeColor.infoColor && (l(this, i).typeColor.infoColor = o.typeColor.infoColor));
  }
  info(o, e = {}) {
    h(this, f, p).call(this, o, "info", e);
  }
  success(o, e = {}) {
    h(this, f, p).call(this, o, "success", e);
  }
  error(o, e = {}) {
    h(this, f, p).call(this, o, "error", e);
  }
  warn(o, e = {}) {
    h(this, f, p).call(this, o, "warning", e);
  }
}
i = new WeakMap(), c = new WeakMap(), d = new WeakMap(), f = new WeakSet(), p = function(o, e, s = {}) {
  let a = s.duration || l(this, i).duration, r = s.color || l(this, i).typeColor[`${e}Color`], n = s.bgColor || l(this, i).typeColor[`${e}BgColor`], g = h(this, u, v).call(this, e, o, r, n);
  l(this, c).push(g), h(this, w, x).call(this, g, a);
}, u = new WeakSet(), v = function(o, e, s, a) {
  const r = document.createElement("div"), n = `--${l(this, c).length}-${(/* @__PURE__ */ new Date()).getTime()}`;
  r.id = n, r.style.position = "fixed", r.style.zIndex = "2147483647", r.style.top = `${l(this, d)}px`, r.style.left = "50%", r.style.padding = "12px 18px", r.style.borderRadius = "3px", r.style.fontSize = "14px", r.style.color = s, r.style.backgroundColor = a, r.classList.add("fade-in"), r.style.transition = "all 0.3s", r.style.opacity = "1", r.style.display = "flex", r.style.alignItems = "flex-start", r.style.gap = "6px", r.innerHTML = $(o, 20);
  const g = document.createTextNode(e);
  return r.appendChild(g), document.body.appendChild(r), n;
}, w = new WeakSet(), x = function(o, e) {
  const s = document.getElementById(o), a = s.offsetHeight + 20;
  y(this, d, l(this, d) + a);
  const r = this;
  setTimeout(() => {
    s.addEventListener("animationend", function() {
      this.remove(), y(r, c, l(r, c).filter((n) => n !== o)), l(r, c).forEach((n) => {
        const g = document.getElementById(n), B = Number(g.style.top.replace(/[^0-9]/g, "")) - a;
        g.style.top = `${B}px`;
      }), y(r, d, l(r, d) - a);
    }), s.classList.remove("fade-in"), s.classList.add("fade-out");
  }, e);
};
function M() {
  console.warn(`[simple toast][WARNING][${(/* @__PURE__ */ new Date()).toLocaleTimeString()}]

您正在尝试多次实例化SpMessage，我们会返回最初的实例，这可能会导致达不到您的使用预期

`);
}
function T(t) {
  let o = null;
  return new Proxy(t, {
    construct(e, s) {
      return o === null ? o = new e(...s) : M(), o;
    }
  });
}
const b = T(L);
export {
  b as SpMessage
};

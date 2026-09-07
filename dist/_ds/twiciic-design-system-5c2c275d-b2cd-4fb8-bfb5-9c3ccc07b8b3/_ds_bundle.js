/* @ds-bundle: {"format":4,"namespace":"TWICIICDesignSystem_5c2c27","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"LogoLockup","sourcePath":"components/brand/LogoLockup.jsx"},{"name":"TwinBars","sourcePath":"components/brand/TwinBars.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/display/SectionHeader.jsx"},{"name":"StatPair","sourcePath":"components/display/StatPair.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"LangSwitch","sourcePath":"components/forms/LangSwitch.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"ad96ee5ebe04","components/brand/LogoLockup.jsx":"5a593d45e44b","components/brand/TwinBars.jsx":"9fe792049dc9","components/display/Badge.jsx":"1d3d0ed89a18","components/display/Card.jsx":"0161a47d8709","components/display/SectionHeader.jsx":"4093968963ec","components/display/StatPair.jsx":"5f13cbdc2a28","components/forms/Input.jsx":"7ecf1c85aaf6","components/forms/LangSwitch.jsx":"024d1ed507fd","ui_kits/posts/ds-base.js":"5d74c0a08baa","ui_kits/website/website.jsx":"b10beb03cd9b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TWICIICDesignSystem_5c2c27 = window.TWICIICDesignSystem_5c2c27 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Button — sharp rectangles, Geist 600. Primary's hover slides the twin bars in at the left edge. */

const BTN_SIZES = {
  sm: {
    height: 34,
    padX: 14,
    font: 13
  },
  md: {
    height: 42,
    padX: 18,
    font: 14
  },
  lg: {
    height: 50,
    padX: 24,
    font: 16
  }
};
function Button({
  children,
  variant = "primary",
  // "primary" | "secondary" | "ghost"
  size = "md",
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = BTN_SIZES[size] || BTN_SIZES.md;
  const active = hover && !disabled;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    position: "relative",
    overflow: "hidden",
    height: s.height,
    padding: `0 ${s.padX}px`,
    fontFamily: "var(--font-sans)",
    fontSize: s.font,
    fontWeight: 600,
    letterSpacing: "0.01em",
    lineHeight: 1,
    whiteSpace: "nowrap",
    border: "1px solid transparent",
    borderRadius: "var(--radius-none, 0)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transform: press && !disabled ? "translateY(1px)" : "none",
    transition: "background var(--duration-fast,150ms) var(--ease-out), color var(--duration-fast,150ms) var(--ease-out), padding var(--duration-base,300ms) var(--ease-out)"
  };
  const variants = {
    primary: {
      background: "var(--surface-inverse, #000)",
      color: "var(--text-on-inverse, #fff)",
      paddingLeft: active ? s.padX + 14 : s.padX
    },
    secondary: {
      background: active ? "var(--surface-inverse, #000)" : "transparent",
      color: active ? "var(--text-on-inverse, #fff)" : "var(--text-primary, #000)",
      border: "1px solid var(--border-strong, #000)"
    },
    ghost: {
      background: active ? "var(--gray-100, #EBEBE8)" : "transparent",
      color: "var(--text-primary, #000)"
    }
  };
  const barW = 5;
  const twinSlide = variant === "primary" ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: barW * 2,
      display: "flex",
      transform: active ? "translateX(0)" : `translateX(-${barW * 2}px)`,
      transition: "transform var(--duration-base,300ms) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--vienna-red, #DB1F40)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--bratislava-blue, #46AFF8)"
    }
  })) : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), twinSlide, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* LogoLockup — official TWICIIC + Interreg lockup, trilingual. Renders the supplied PNG assets. */

const LOCKUP_FILES = {
  en: {
    regular: "en/twiciic-regular.png",
    expanded: "en/twiciic-regular.png",
    // no EN expanded master supplied — falls back to regular
    minimal: "en/twiciic-minimal.png",
    bw: "en/twiciic-monochrome.png"
  },
  de: {
    regular: "de/twiciic-regular.png",
    expanded: "de/twiciic-regular-expanded.png",
    minimal: "de/twiciic-minimal.png",
    bw: "de/twiciic-bw.png"
  },
  sk: {
    regular: "sk/twiciic-regular.png",
    expanded: "sk/twiciic-regular-expanded.png",
    minimal: "sk/twiciic-minimal.png",
    bw: "sk/twiciic-bw.png"
  }
};
const LOCKUP_ALT = {
  en: "TWICIIC — Interreg Slovakia–Austria, co-funded by the European Union",
  de: "TWICIIC — Interreg Slowakei–Österreich, kofinanziert von der Europäischen Union",
  sk: "TWICIIC — Interreg Slovensko–Rakúsko, spolufinancovaný Európskou úniou"
};
function LogoLockup({
  lang = "en",
  variant = "regular",
  // "regular" | "expanded" | "minimal" | "bw"
  height = 56,
  assetBase = "assets/logos",
  style,
  ...rest
}) {
  const files = LOCKUP_FILES[lang] || LOCKUP_FILES.en;
  const src = `${assetBase}/${files[variant] || files.regular}`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: LOCKUP_ALT[lang] || LOCKUP_ALT.en,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { LogoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoLockup.jsx", error: String((e && e.message) || e) }); }

// components/brand/TwinBars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* TwinBars — the TWICIIC signature device. Two bars, Vienna Red + Bratislava Blue. */

function TwinBars({
  height = 28,
  gap = 0,
  mono = false,
  animate = "none",
  // "none" | "pulse"
  as: Tag = "span",
  style,
  ...rest
}) {
  const barWidth = Math.round(height * 0.2573 * 100) / 100;
  const reduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pulse = animate === "pulse" && !reduced;
  const barStyle = (color, anim) => ({
    width: barWidth,
    height: "100%",
    background: color,
    transformOrigin: "bottom",
    animation: pulse ? `${anim} var(--duration-pulse, 1800ms) var(--ease-in-out, ease-in-out) infinite` : "none"
  });
  return /*#__PURE__*/React.createElement(Tag, _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      height,
      gap,
      verticalAlign: "middle",
      flex: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: barStyle(mono ? "var(--gray-300, #CFCFC8)" : "var(--vienna-red, #DB1F40)", "twin-pulse-a")
  }), /*#__PURE__*/React.createElement("span", {
    style: barStyle(mono ? "var(--gray-400, #ABABA3)" : "var(--bratislava-blue, #46AFF8)", "twin-pulse-b")
  }));
}
Object.assign(__ds_scope, { TwinBars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TwinBars.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Badge — uppercase rectangular tag. City variants tie content to Vienna or Bratislava. */

function Badge({
  children,
  variant = "neutral",
  // "neutral" | "vienna" | "bratislava" | "twin" | "inverse"
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: "transparent",
      color: "var(--text-secondary, #62625C)",
      border: "1px solid var(--border-default, #E0E0DB)"
    },
    vienna: {
      background: "var(--vienna-red-tint, #FBE4E8)",
      color: "var(--vienna-red-deep, #B5152F)",
      border: "1px solid transparent"
    },
    bratislava: {
      background: "var(--bratislava-blue-tint, #E3F2FE)",
      color: "var(--bratislava-blue-deep, #1272B8)",
      border: "1px solid transparent"
    },
    twin: {
      background: "var(--surface-card, #fff)",
      color: "var(--text-primary, #000)",
      border: "1px solid var(--border-default, #E0E0DB)"
    },
    inverse: {
      background: "var(--surface-inverse, #000)",
      color: "var(--text-on-inverse, #fff)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 24,
      padding: "0 9px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-eyebrow-size, 13px)",
      fontWeight: "var(--text-eyebrow-weight, 600)",
      letterSpacing: "var(--text-eyebrow-tracking, 0.09em)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-none, 0)",
      ...variants[variant],
      ...style
    }
  }, rest), variant === "twin" && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      height: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      background: "var(--vienna-red, #DB1F40)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      background: "var(--bratislava-blue, #46AFF8)"
    }
  })), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Card — flat white rectangle on City Gray. Depth from borders, never shadows. */

function Card({
  children,
  accent = false,
  // twin-bar mark at top-left
  interactive = false,
  padding = 24,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: "var(--surface-card, #fff)",
      border: `1px solid ${hover ? "var(--border-strong, #000)" : "var(--border-default, #E0E0DB)"}`,
      borderRadius: "var(--radius-none, 0)",
      padding,
      transition: "border-color var(--duration-fast, 150ms) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      height: 18,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      background: "var(--vienna-red, #DB1F40)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      background: "var(--bratislava-blue, #46AFF8)"
    }
  })), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SectionHeader — eyebrow with twin-bar bullet, heavy headline, optional lead. */

function SectionHeader({
  eyebrow,
  title,
  lead,
  level = 2,
  align = "left",
  style,
  ...rest
}) {
  const H = `h${level}`;
  const sizes = {
    1: {
      size: "var(--text-h1-size, 48px)",
      leading: "var(--text-h1-leading, 1.06)",
      tracking: "var(--text-h1-tracking, -0.025em)",
      weight: 750
    },
    2: {
      size: "var(--text-h2-size, 32px)",
      leading: "var(--text-h2-leading, 1.15)",
      tracking: "var(--text-h2-tracking, -0.015em)",
      weight: 700
    },
    3: {
      size: "var(--text-h3-size, 22px)",
      leading: "var(--text-h3-leading, 1.3)",
      tracking: "var(--text-h3-tracking, -0.01em)",
      weight: 650
    }
  };
  const t = sizes[level] || sizes[2];
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      maxWidth: 720,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      justifyContent: align === "center" ? "center" : "flex-start",
      margin: "0 0 14px",
      fontSize: "var(--text-eyebrow-size, 13px)",
      fontWeight: "var(--text-eyebrow-weight, 600)",
      letterSpacing: "var(--text-eyebrow-tracking, 0.09em)",
      textTransform: "uppercase",
      color: "var(--text-secondary, #62625C)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      height: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3.5,
      background: "var(--vienna-red, #DB1F40)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3.5,
      background: "var(--bratislava-blue, #46AFF8)"
    }
  })), eyebrow), /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontSize: t.size,
      lineHeight: t.leading,
      letterSpacing: t.tracking,
      fontWeight: t.weight,
      color: "var(--text-primary, #000)",
      textWrap: "balance"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: "var(--text-lead-size, 20px)",
      lineHeight: "var(--text-lead-leading, 1.5)",
      fontWeight: 400,
      color: "var(--text-secondary, #62625C)",
      textWrap: "pretty"
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/display/StatPair.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* StatPair — paired Vienna/Bratislava statistics, the duality layout in miniature. */

function StatPair({
  left = {
    label: "Vienna",
    value: "",
    detail: ""
  },
  right = {
    label: "Bratislava",
    value: "",
    detail: ""
  },
  style,
  ...rest
}) {
  const cell = (item, color) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 5,
      background: color,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontSize: "var(--text-eyebrow-size, 13px)",
      fontWeight: 600,
      letterSpacing: "var(--text-eyebrow-tracking, 0.09em)",
      textTransform: "uppercase",
      color: "var(--text-secondary, #62625C)"
    }
  }, item.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 40,
      lineHeight: 1.05,
      letterSpacing: "-0.025em",
      fontWeight: 800,
      color: "var(--text-primary, #000)",
      fontVariantNumeric: "tabular-nums"
    }
  }, item.value), item.detail && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "var(--text-small-size, 14px)",
      color: "var(--text-muted, #878780)"
    }
  }, item.detail)));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 32,
      alignItems: "stretch",
      ...style
    }
  }, rest), cell(left, "var(--vienna-red, #DB1F40)"), cell(right, "var(--bratislava-blue, #46AFF8)"));
}
Object.assign(__ds_scope, { StatPair });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatPair.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Input — sharp rectangle, focus shows the twin underline at the bottom edge. */

function Input({
  label,
  hint,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  const fieldStyle = {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    padding: multiline ? "12px 14px" : "0 14px",
    height: multiline ? "auto" : 44,
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-body-size, 16px)",
    lineHeight: multiline ? 1.5 : "42px",
    color: "var(--text-primary, #000)",
    background: disabled ? "var(--gray-100, #EBEBE8)" : "var(--surface-card, #fff)",
    border: `1px solid ${focus ? "var(--border-strong, #000)" : "var(--border-default, #E0E0DB)"}`,
    borderRadius: "var(--radius-none, 0)",
    outline: "none",
    resize: multiline ? "vertical" : "none",
    transition: "border-color var(--duration-fast, 150ms) var(--ease-out)"
  };
  const Field = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--text-eyebrow-size, 13px)",
      fontWeight: 600,
      letterSpacing: "var(--text-eyebrow-tracking, 0.09em)",
      textTransform: "uppercase",
      color: "var(--text-secondary, #62625C)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Field, _extends({
    id: id,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 3,
      display: "flex",
      transform: focus ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--duration-base, 300ms) var(--ease-out)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--vienna-red, #DB1F40)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--bratislava-blue, #46AFF8)"
    }
  }))), hint && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-small-size, 14px)",
      color: "var(--text-muted, #878780)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/LangSwitch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* LangSwitch — EN / DE / SK segmented control. Trilingual is a design feature, not a chore. */

const LANGS = ["en", "de", "sk"];
function LangSwitch({
  value = "en",
  onChange,
  size = "md",
  // "sm" | "md"
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(null);
  const h = size === "sm" ? 28 : 36;
  const padX = size === "sm" ? 10 : 14;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    "aria-label": "Language",
    style: {
      display: "inline-flex",
      border: "1px solid var(--border-strong, #000)",
      background: "var(--surface-card, #fff)",
      ...style
    }
  }, rest), LANGS.map(lang => {
    const active = value === lang;
    const hover = hovered === lang && !active;
    return /*#__PURE__*/React.createElement("button", {
      key: lang,
      type: "button",
      "aria-pressed": active,
      onClick: () => onChange && onChange(lang),
      onMouseEnter: () => setHovered(lang),
      onMouseLeave: () => setHovered(null),
      style: {
        height: h,
        padding: `0 ${padX}px`,
        border: "none",
        borderRadius: 0,
        fontFamily: "var(--font-sans)",
        fontSize: size === "sm" ? 12 : 13,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        background: active ? "var(--surface-inverse, #000)" : hover ? "var(--gray-100, #EBEBE8)" : "transparent",
        color: active ? "var(--text-on-inverse, #fff)" : "var(--text-primary, #000)",
        transition: "background var(--duration-fast, 150ms) var(--ease-out)"
      }
    }, lang.toUpperCase());
  }));
}
Object.assign(__ds_scope, { LangSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/LangSwitch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/posts/ds-base.js
try { (() => {
// ui_kits/posts/ds-base.js — loads the TWICIIC design system tokens + font. Edit `base` if you move this file.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/posts/ds-base.js", error: String((e && e.message) || e) }); }

// ui_kits/website/website.jsx
try { (() => {
/* TWICIIC marketing site — trilingual landing page composing the design-system primitives. */

const DS = window.TWICIICDesignSystem_5c2c27;
if (!DS) {
  document.getElementById("root").innerHTML = '<p style="padding:40px;font-family:sans-serif">Design-system bundle (_ds_bundle.js) not loaded — reload the page once the compiler has run.</p>';
  throw new Error("TWICIIC DS bundle missing");
}
const {
  Button,
  Badge,
  Card,
  SectionHeader,
  StatPair,
  Input,
  LangSwitch,
  LogoLockup,
  TwinBars
} = DS;
const COPY = {
  en: {
    nav: ["The programme", "Accelerator", "Partners", "News"],
    cta: "Apply now",
    heroEyebrow: "Interreg Slovakia–Austria · 2025–2028",
    heroTitle: ["Two cities.", "One innovation champion."],
    heroLead: "TWICIIC connects the impact ecosystems of Vienna and Bratislava — peer learning, cross-border investor networks, and a joint accelerator for scale-ups that put impact first.",
    heroPrimary: "Apply to the accelerator",
    heroSecondary: "Read the programme",
    pillarsEyebrow: "What we do",
    pillarsTitle: "Capacity, connection, acceleration",
    pillars: [["Peer learning", "Scale-ups, SMEs and organisations learn from each other and gain a deeper understanding of both markets."], ["Investor networks", "Cross-border investor connections open capital and customers on both sides of the border."], ["Joint accelerator", "A shared programme — and a joint action plan — anchors lasting cooperation in the Twin City Region."]],
    dualityEyebrow: "The Twin City Region",
    vienna: ["Vienna", "Capital, networks, scale", "An established investor base and Europe's most liveable-city infrastructure."],
    bratislava: ["Bratislava", "Talent, momentum, reach", "A fast-emerging impact ecosystem one hour down the Danube."],
    statLeft: {
      label: "Project budget",
      value: "€1.57M",
      detail: "ERDF co-financing: 80%"
    },
    statRight: {
      label: "Duration",
      value: "36 mo",
      detail: "October 2025 – September 2028"
    },
    partnersEyebrow: "Consortium",
    partnersTitle: "Six partners, two cities",
    ctaTitle: "Build across the border.",
    ctaLead: "Calls open to impact-driven scale-ups in Vienna and Bratislava.",
    ctaLabel: "Email",
    ctaHint: "We reply within two working days.",
    ctaButton: "Get the open call",
    footerNote: "This project is co-financed by the Interreg Slovakia–Austria 2021–2027 Programme from the European Regional Development Fund (ERDF)."
  },
  de: {
    nav: ["Das Programm", "Accelerator", "Partner", "Aktuelles"],
    cta: "Jetzt bewerben",
    heroEyebrow: "Interreg Slowakei–Österreich · 2025–2028",
    heroTitle: ["Zwei Städte.", "Ein Innovations-Champion."],
    heroLead: "TWICIIC verbindet die Impact-Ökosysteme von Wien und Bratislava — Peer-Learning, grenzüberschreitende Investorennetzwerke und ein gemeinsamer Accelerator für wirkungsorientierte Scale-ups.",
    heroPrimary: "Für den Accelerator bewerben",
    heroSecondary: "Programm lesen",
    pillarsEyebrow: "Was wir tun",
    pillarsTitle: "Kapazität, Verbindung, Beschleunigung",
    pillars: [["Peer-Learning", "Scale-ups, KMU und Organisationen lernen voneinander und verstehen beide Märkte besser."], ["Investorennetzwerke", "Grenzüberschreitende Investorenkontakte öffnen Kapital und Kundschaft auf beiden Seiten der Grenze."], ["Gemeinsamer Accelerator", "Ein gemeinsames Programm und ein Aktionsplan verankern dauerhafte Zusammenarbeit in der Twin-City-Region."]],
    dualityEyebrow: "Die Twin-City-Region",
    vienna: ["Wien", "Kapital, Netzwerke, Skalierung", "Eine etablierte Investorenbasis und die Infrastruktur der lebenswertesten Stadt Europas."],
    bratislava: ["Bratislava", "Talent, Dynamik, Reichweite", "Ein schnell wachsendes Impact-Ökosystem, eine Stunde donauabwärts."],
    statLeft: {
      label: "Projektbudget",
      value: "€1,57M",
      detail: "EFRE-Kofinanzierung: 80 %"
    },
    statRight: {
      label: "Laufzeit",
      value: "36 Mon.",
      detail: "Oktober 2025 – September 2028"
    },
    partnersEyebrow: "Konsortium",
    partnersTitle: "Sechs Partner, zwei Städte",
    ctaTitle: "Über die Grenze hinaus bauen.",
    ctaLead: "Offene Calls für wirkungsorientierte Scale-ups in Wien und Bratislava.",
    ctaLabel: "E-Mail",
    ctaHint: "Wir antworten innerhalb von zwei Werktagen.",
    ctaButton: "Open Call erhalten",
    footerNote: "Dieses Projekt wird vom Programm Interreg Slowakei–Österreich 2021–2027 aus dem Europäischen Fonds für regionale Entwicklung (EFRE) kofinanziert."
  },
  sk: {
    nav: ["Program", "Akcelerátor", "Partneri", "Novinky"],
    cta: "Prihlásiť sa",
    heroEyebrow: "Interreg Slovensko–Rakúsko · 2025–2028",
    heroTitle: ["Dve mestá.", "Jeden inovačný šampión."],
    heroLead: "TWICIIC prepája impaktové ekosystémy Viedne a Bratislavy — vzájomné učenie, cezhraničné investorské siete a spoločný akcelerátor pre scale-upy s pozitívnym dopadom.",
    heroPrimary: "Prihlásiť sa do akcelerátora",
    heroSecondary: "Prečítať program",
    pillarsEyebrow: "Čo robíme",
    pillarsTitle: "Kapacita, prepojenie, akcelerácia",
    pillars: [["Vzájomné učenie", "Scale-upy, MSP a organizácie sa učia od seba navzájom a lepšie rozumejú obom trhom."], ["Investorské siete", "Cezhraničné kontakty otvárajú kapitál a zákazníkov na oboch stranách hranice."], ["Spoločný akcelerátor", "Spoločný program a akčný plán ukotvujú trvalú spoluprácu v regióne Twin City."]],
    dualityEyebrow: "Región Twin City",
    vienna: ["Viedeň", "Kapitál, siete, rast", "Etablovaná investorská základňa a infraštruktúra najlepšieho mesta pre život v Európe."],
    bratislava: ["Bratislava", "Talent, dynamika, dosah", "Rýchlo rastúci impaktový ekosystém hodinu dolu Dunajom."],
    statLeft: {
      label: "Rozpočet projektu",
      value: "€1,57M",
      detail: "Spolufinancovanie EFRR: 80 %"
    },
    statRight: {
      label: "Trvanie",
      value: "36 mes.",
      detail: "Október 2025 – September 2028"
    },
    partnersEyebrow: "Konzorcium",
    partnersTitle: "Šesť partnerov, dve mestá",
    ctaTitle: "Stavajte cez hranicu.",
    ctaLead: "Výzvy otvorené pre impaktové scale-upy vo Viedni a v Bratislave.",
    ctaLabel: "E-mail",
    ctaHint: "Odpovieme do dvoch pracovných dní.",
    ctaButton: "Získať otvorenú výzvu",
    footerNote: "Tento projekt je spolufinancovaný programom Interreg Slovensko–Rakúsko 2021–2027 z Európskeho fondu regionálneho rozvoja (EFRR)."
  }
};
const PARTNERS = [["ZSI — Centre for Social Innovation", "Lead partner · Vienna"], ["Relevant Ventures", "Vienna"], ["Vienna Business Agency", "Vienna"], ["CB ESPRI", "Bratislava"], ["Impact Slovakia", "Bratislava"], ["Capital City of Bratislava", "Bratislava"]];
function Nav({
  lang,
  setLang,
  t
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-default)",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/twiciic-wordmark.svg",
    alt: "TWICIIC",
    style: {
      height: 22,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, t.nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      fontSize: 14.5,
      fontWeight: 500,
      color: "var(--text-primary)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LangSwitch, {
    value: lang,
    onChange: setLang,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, t.cta))));
}
function Hero({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      padding: "96px 24px 104px",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      margin: "0 0 20px",
      fontSize: "var(--text-eyebrow-size)",
      fontWeight: 600,
      letterSpacing: "var(--text-eyebrow-tracking)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(TwinBars, {
    height: 13
  }), t.heroEyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "var(--text-display-size)",
      lineHeight: "var(--text-display-leading)",
      letterSpacing: "var(--text-display-tracking)",
      fontWeight: 800,
      maxWidth: 800,
      textWrap: "balance"
    }
  }, t.heroTitle[0], /*#__PURE__*/React.createElement("br", null), t.heroTitle[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 36px",
      fontSize: "var(--text-lead-size)",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      maxWidth: 620,
      textWrap: "pretty"
    }
  }, t.heroLead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, t.heroPrimary), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, t.heroSecondary))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      paddingRight: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse-a",
    style: {
      width: 56,
      height: 220,
      background: "var(--vienna-red)",
      transformOrigin: "bottom",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "pulse-b",
    style: {
      width: 56,
      height: 220,
      background: "var(--bratislava-blue)",
      transformOrigin: "bottom",
      display: "block"
    }
  })));
}
function Pillars({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: t.pillarsEyebrow,
    title: t.pillarsTitle,
    level: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 44
    }
  }, t.pillars.map(([title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    accent: true,
    interactive: true,
    padding: 28,
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 10px",
      fontSize: "var(--text-h3-size)",
      fontWeight: 650,
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, body))))));
}
function Duality({
  t
}) {
  const side = (data, color, align) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "72px 56px",
      textAlign: align,
      display: "flex",
      flexDirection: "column",
      alignItems: align === "right" ? "flex-end" : "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-eyebrow-size)",
      fontWeight: 600,
      letterSpacing: "var(--text-eyebrow-tracking)",
      textTransform: "uppercase",
      color
    }
  }, data[0]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 38,
      lineHeight: 1.08,
      letterSpacing: "-0.022em",
      fontWeight: 800
    }
  }, data[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      maxWidth: 380,
      textWrap: "pretty"
    }
  }, data[2]));
  return /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      margin: "0 0 32px",
      fontSize: "var(--text-eyebrow-size)",
      fontWeight: 600,
      letterSpacing: "var(--text-eyebrow-tracking)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(TwinBars, {
    height: 13
  }), t.dualityEyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 14px 1fr",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)"
    }
  }, side(t.vienna, "var(--vienna-red-deep)", "right"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--vienna-red)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--bratislava-blue)"
    }
  })), side(t.bratislava, "var(--bratislava-blue-deep)", "left")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      padding: "32px 56px"
    }
  }, /*#__PURE__*/React.createElement(StatPair, {
    left: t.statLeft,
    right: t.statRight
  })));
}
function Partners({
  t,
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      margin: "0 0 14px",
      fontSize: "var(--text-eyebrow-size)",
      fontWeight: 600,
      letterSpacing: "var(--text-eyebrow-tracking)",
      textTransform: "uppercase",
      color: "var(--gray-400)"
    }
  }, /*#__PURE__*/React.createElement(TwinBars, {
    height: 13
  }), t.partnersEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 44px",
      fontSize: "var(--text-h1-size)",
      lineHeight: 1.06,
      letterSpacing: "-0.025em",
      fontWeight: 750,
      color: "var(--white)"
    }
  }, t.partnersTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 1,
      background: "var(--gray-800)",
      border: "1px solid var(--gray-800)"
    }
  }, PARTNERS.map(([name, role]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      background: "var(--surface-inverse)",
      padding: "26px 24px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: 16.5,
      fontWeight: 650,
      color: "var(--white)"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: "var(--gray-400)"
    }
  }, role))))));
}
function Cta({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      padding: "96px 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: "-0.026em",
      fontWeight: 800,
      textWrap: "balance"
    }
  }, t.ctaTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "18px 0 0",
      fontSize: "var(--text-lead-size)",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, t.ctaLead)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t.ctaLabel,
    type: "email",
    placeholder: "founder@startup.eu",
    hint: t.ctaHint
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      justifySelf: "start"
    }
  }, t.ctaButton)));
}
function Footer({
  t,
  lang
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: "44px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(LogoLockup, {
    lang: lang,
    height: 52,
    assetBase: "../../assets/logos"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: 480,
      textWrap: "pretty"
    }
  }, t.footerNote)));
}
function App() {
  const [lang, setLang] = React.useState("en");
  const t = COPY[lang];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "TWICIIC marketing site"
  }, /*#__PURE__*/React.createElement(Nav, {
    lang: lang,
    setLang: setLang,
    t: t
  }), /*#__PURE__*/React.createElement(Hero, {
    t: t
  }), /*#__PURE__*/React.createElement(Pillars, {
    t: t
  }), /*#__PURE__*/React.createElement(Duality, {
    t: t
  }), /*#__PURE__*/React.createElement(Partners, {
    t: t,
    lang: lang
  }), /*#__PURE__*/React.createElement(Cta, {
    t: t
  }), /*#__PURE__*/React.createElement(Footer, {
    t: t,
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/website.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.LogoLockup = __ds_scope.LogoLockup;

__ds_ns.TwinBars = __ds_scope.TwinBars;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatPair = __ds_scope.StatPair;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LangSwitch = __ds_scope.LangSwitch;

})();

import {
  ButtonBase_default
} from "./chunk-NW6NZCXI.js";
import {
  memoTheme_default
} from "./chunk-B5ZXG6YC.js";
import {
  useDefaultProps
} from "./chunk-DI4SAKYS.js";
import {
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  styled_default
} from "./chunk-6RQQIMQP.js";
import {
  require_react
} from "./chunk-6GAV2S6I.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@mui/material/esm/CardActionArea/CardActionArea.js
var React = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/CardActionArea/cardActionAreaClasses.js
function getCardActionAreaUtilityClass(slot) {
  return generateUtilityClass("MuiCardActionArea", slot);
}
var cardActionAreaClasses = generateUtilityClasses("MuiCardActionArea", ["root", "focusVisible", "focusHighlight"]);
var cardActionAreaClasses_default = cardActionAreaClasses;

// node_modules/@mui/material/esm/CardActionArea/CardActionArea.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    focusHighlight: ["focusHighlight"]
  };
  return composeClasses(slots, getCardActionAreaUtilityClass, classes);
};
var CardActionAreaRoot = styled_default(ButtonBase_default, {
  name: "MuiCardActionArea",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme_default(({
  theme
}) => ({
  display: "block",
  textAlign: "inherit",
  borderRadius: "inherit",
  // for Safari to work https://github.com/mui/material-ui/issues/36285.
  width: "100%",
  [`&:hover .${cardActionAreaClasses_default.focusHighlight}`]: {
    opacity: (theme.vars || theme).palette.action.hoverOpacity,
    "@media (hover: none)": {
      opacity: 0
    }
  },
  [`&.${cardActionAreaClasses_default.focusVisible} .${cardActionAreaClasses_default.focusHighlight}`]: {
    opacity: (theme.vars || theme).palette.action.focusOpacity
  }
})));
var CardActionAreaFocusHighlight = styled_default("span", {
  name: "MuiCardActionArea",
  slot: "FocusHighlight",
  overridesResolver: (props, styles) => styles.focusHighlight
})(memoTheme_default(({
  theme
}) => ({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit",
  opacity: 0,
  backgroundColor: "currentcolor",
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.short
  })
})));
var CardActionArea = React.forwardRef(function CardActionArea2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardActionArea"
  });
  const {
    children,
    className,
    focusVisibleClassName,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsxs)(CardActionAreaRoot, {
    className: clsx_default(classes.root, className),
    focusVisibleClassName: clsx_default(focusVisibleClassName, classes.focusVisible),
    ref,
    ownerState,
    ...other,
    children: [children, (0, import_jsx_runtime.jsx)(CardActionAreaFocusHighlight, {
      className: classes.focusHighlight,
      ownerState
    })]
  });
});
true ? CardActionArea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var CardActionArea_default = CardActionArea;

export {
  getCardActionAreaUtilityClass,
  cardActionAreaClasses_default,
  CardActionArea_default
};
//# sourceMappingURL=chunk-IOBNKN5I.js.map

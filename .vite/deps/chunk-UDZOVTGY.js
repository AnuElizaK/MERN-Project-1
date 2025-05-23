import {
  ImageListContext_default
} from "./chunk-3SZG7UEA.js";
import {
  useDefaultProps
} from "./chunk-DI4SAKYS.js";
import {
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  integerPropType_default,
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

// node_modules/@mui/material/esm/ImageList/ImageList.js
var import_prop_types = __toESM(require_prop_types(), 1);
var React = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/ImageList/imageListClasses.js
function getImageListUtilityClass(slot) {
  return generateUtilityClass("MuiImageList", slot);
}
var imageListClasses = generateUtilityClasses("MuiImageList", ["root", "masonry", "quilted", "standard", "woven"]);
var imageListClasses_default = imageListClasses;

// node_modules/@mui/material/esm/ImageList/ImageList.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant]
  };
  return composeClasses(slots, getImageListUtilityClass, classes);
};
var ImageListRoot = styled_default("ul", {
  name: "MuiImageList",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({
  display: "grid",
  overflowY: "auto",
  listStyle: "none",
  padding: 0,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  variants: [{
    props: {
      variant: "masonry"
    },
    style: {
      display: "block"
    }
  }]
});
var ImageList = React.forwardRef(function ImageList2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiImageList"
  });
  const {
    children,
    className,
    cols = 2,
    component = "ul",
    rowHeight = "auto",
    gap = 4,
    style: styleProp,
    variant = "standard",
    ...other
  } = props;
  const contextValue = React.useMemo(() => ({
    rowHeight,
    gap,
    variant
  }), [rowHeight, gap, variant]);
  const style = variant === "masonry" ? {
    columnCount: cols,
    columnGap: gap,
    ...styleProp
  } : {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap,
    ...styleProp
  };
  const ownerState = {
    ...props,
    component,
    gap,
    rowHeight,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(ImageListRoot, {
    as: component,
    className: clsx_default(classes.root, classes[variant], className),
    ref,
    style,
    ownerState,
    ...other,
    children: (0, import_jsx_runtime.jsx)(ImageListContext_default.Provider, {
      value: contextValue,
      children
    })
  });
});
true ? ImageList.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `ImageListItem`s.
   */
  children: import_prop_types.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * Number of columns.
   * @default 2
   */
  cols: integerPropType_default,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The gap between items in px.
   * @default 4
   */
  gap: import_prop_types.default.number,
  /**
   * The height of one row in px.
   * @default 'auto'
   */
  rowHeight: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["auto"]), import_prop_types.default.number]),
  /**
   * @ignore
   */
  style: import_prop_types.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["masonry", "quilted", "standard", "woven"]), import_prop_types.default.string])
} : void 0;
var ImageList_default = ImageList;

export {
  getImageListUtilityClass,
  imageListClasses_default,
  ImageList_default
};
//# sourceMappingURL=chunk-UDZOVTGY.js.map

import type { PropEx, Cust } from '@cssfn/css-types';
export declare type Length = PropEx.Length | Cust.Expr;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    xxs: Length;
    xs: Length;
    sm: Length;
    lg: Length;
    xl: Length;
    default: Length;
    none: Length;
    md: Length;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    xxs: Length;
    xs: Length;
    sm: Length;
    lg: Length;
    xl: Length;
    default: Length;
    none: Length;
    md: Length;
}>, cssVals: import("@cssfn/css-config").Vals<{
    xxs: Length;
    xs: Length;
    sm: Length;
    lg: Length;
    xl: Length;
    default: Length;
    none: Length;
    md: Length;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export { cssProps as spacers, cssProps as default };

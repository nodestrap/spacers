"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.spacers = exports.cssConfig = exports.cssVals = exports.cssDecls = exports.cssProps = void 0;
const css_config_1 = __importDefault(require("@cssfn/css-config")); // Stores & retrieves configuration using *css custom properties* (css variables)
// configs:
_a = (0, css_config_1.default)(() => {
    const basics = {
        none: '0px',
        md: '1rem',
    };
    const defaults = {
        default: basics.md,
    };
    return {
        ...basics,
        ...defaults,
        xxs: [['calc(', basics.md, '/', 8, ')']],
        xs: [['calc(', basics.md, '/', 4, ')']],
        sm: [['calc(', basics.md, '/', 2, ')']],
        lg: [['calc(', basics.md, '*', 1.5, ')']],
        xl: [['calc(', basics.md, '*', 3, ')']],
    };
}, { prefix: 'spc' }), exports.default = exports.spacers = exports.cssProps = _a[0], exports.cssDecls = _a[1], exports.cssVals = _a[2], exports.cssConfig = _a[3];
exports.spacers = exports.cssProps;
exports.default = exports.cssProps;

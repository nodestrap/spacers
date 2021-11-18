import createCssConfig from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
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
}, { prefix: 'spc' });
export { cssProps as spacers, cssProps as default };

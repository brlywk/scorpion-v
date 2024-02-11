/* eslint style/quote-props: off */
// eslint.config.js
import antfu from "@antfu/eslint-config";

export default antfu({
    stylistic: {
        indent: 4,
        quotes: "double",
        semi: true,
    },

    typescript: true,
    vue: true,

    rules: {
        curly: "off",
        "style/arrow-parens": "off",
        "style/brace-style": ["warn", "1tbs"],
        "no-console": "warn",
        "ts/consistent-type-definitions": "off",
    },
});

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

    ignores: ["**/fixtures"],
});

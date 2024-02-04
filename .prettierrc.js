// I have to add a Prettier config file although Vue should be formatted by
// estint; reason being that my NeoVim config has Prettier running by default
// for js and ts files, so to not have eslint yell all the time, add config for those
// files that match the eslint config
export default {
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    trailingComma: "all",
    arrowParens: "avoid",
};

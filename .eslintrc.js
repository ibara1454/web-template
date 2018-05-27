module.exports = {
    "extends": ["eslint:recommended", "google"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "globals": {
        "console": false,
        "__dirname": false
    },
    "rules": {
        "no-console": "off",
        "comma-dangle": 0
    },

};

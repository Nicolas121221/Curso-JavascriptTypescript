const { html } = require("../base");

const regExp1 = /<.+>.+<\/.+>/gi; // greedy
const regExp2 = /<.+?>.+?<\/.+?>/gi; // non-greedy

console.log(html.match(regExp2));

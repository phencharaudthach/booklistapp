// lesson 6

var banner = document.querySelector('#page-benner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node type is:', banner.nodeName);
console.log('page-banner has child nodes:', banner.hasChildNodes());

var clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
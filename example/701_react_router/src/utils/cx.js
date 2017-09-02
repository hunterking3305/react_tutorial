module.exports = function(obj){
  return Object.keys(obj).filter(function(key){return obj[key]}).join(' ');
}

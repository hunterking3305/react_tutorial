module.exports = function(o){
  return Object.keys(o).filter(function(k){return o[k]}).join(' ');
}

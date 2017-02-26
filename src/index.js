module.exports = function sum(...val) {
  var s = 0;
  var f = function(...sv) {
  	if (sv.length != 0) {
  		s += sv.reduce((acc, item) => acc += item, 0);
  		return f;
  	} else {
  		return s;
  	}
  }
  return f(...val);
}

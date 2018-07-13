//Your code here
function justInvoke(fn) {
  return fn();
};

function setThisWithCall(fn, obj, arg){
//  calls and returns the function as a callback, and assigns this to be bob while passing an argument to the invoked function
  return fn.call(obj, arg);
}

function setThisWithApply(fn, obj, [args*]){
  return fn.apply(obj, [args*]);
};

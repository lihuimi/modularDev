
(function (w, get) {
  let name = 'chen';
  function showMsg(){
    console.log(get.getMsg() + name);
  }
  w.showMsg = {showMsg};
})(window, getMsg);
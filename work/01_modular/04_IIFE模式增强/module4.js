/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */
(function (w, $) {
  $('body').css('background','red');
  function foo() {
    console.log('foo..');
  }
  w.obj = {foo};
})(window, jQuery)
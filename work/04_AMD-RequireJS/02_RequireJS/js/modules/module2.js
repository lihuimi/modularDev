/**
 * Created by lenovo on 2016/12/7.
 */

define(['getMsg','jquery'], function (getMsg, $) {
  let name = 'chen';
  function showMsg(){
    $('body').css('background','red');
    console.log(getMsg.getMsg() + name);

  }
  return {showMsg};
})
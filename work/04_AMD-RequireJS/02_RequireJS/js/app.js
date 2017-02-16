/**
 * Created by lenovo on 2016/12/8.
 */
(function () {
  require.config({
    // baseUrl:'js/',
    paths: {
      'jquery': 'libs/jquery.1.10.2',
      'angular': 'libs/angular',
      'angular-messages': 'libs/angular-messages',
      'showMsg': 'modules/module2',
      "getMsg": 'modules/module1'
    },
    shim: {
      'angular': {
        exports: 'angular'
      },
      'angular-messages': {
        exports: 'angular-messages',
        deps: ['angular']
      }
    }
  })
  require(['showMsg', 'angular', 'angular-messages'], function (showMsg) {
    showMsg.showMsg();
    angular.module('myApp', ['ngMessages'])
    angular.bootstrap(document,['myApp'])
  });
})()
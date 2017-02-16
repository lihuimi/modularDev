(function () {
  //配置
  require.config({
    //基本路径
    baseUrl: 'js/',
    //映射: 模块标识名: 路径
    paths: {
      //自定义模块
      'alerter': 'modules/alerter',
      'dataService': 'modules/dataService',

      //库模块
      'jquery': 'libs/jquery-1.10.1',
      'angular': 'libs/angular',
      'angular-messages': 'libs/angular-messages',
    },

    //配置不兼容AMD的模块
    shim: {
      angular: {
        exports: 'angular'
      },
      'angular-messages': {
        exports: 'angular-messages',
        deps: ['angular']
      }

    }
  })

  //引入模块使用
  require(['alerter', 'angular', 'angular-messages'], function (alerter, angular) {
    alerter.showMsg()
    angular.module('myApp', ['ngMessages'])
    //启动angular
    angular.bootstrap(document, ['myApp'])
  })
})()
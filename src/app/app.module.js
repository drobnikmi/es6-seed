'use strict';
import angular from 'angular';
import firstController from './first.controller';

/** Style Dependency */
import '../assets/sass/style.scss';

export default (() => {
  return angular.module('app', [])
  .controller('firstController', firstController)
})();

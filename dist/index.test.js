'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('print hello', function () {
  var result = (0, _2.default)();

  expect(result).toBe('hello');
});
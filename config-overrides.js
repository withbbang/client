/**
 * 설명: CRA에서 npm run eject 없이 webpack 추가 설정 혹은 덮어 씌우는 파일
 * 의존성: react-app-rewired -D
 * 옵션 의존성: react-app-rewire-scss-loaders -D
 */

const addRewireScssLoader = require('react-app-rewire-scss-loaders');
const path = require('path');

module.exports = function override(config, env) {
  config = addRewireScssLoader('sass-resources-loader', {
    resources: path.resolve(__dirname, './src/scss/_variables.scss')
  })(config, env);

  return config;
};

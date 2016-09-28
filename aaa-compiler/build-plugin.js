var path = Npm.require('path');

var handler = function (compileStep, isLiterate) {
  var input_path = compileStep._fullInputPath;

  compileStep.addJavaScript({
    path: input_path,
    sourcePath: input_path,
    data: "console.log('I should be printed only once!');"
  });
};

Plugin.registerSourceHandler('aaa', {archMatching: 'web'}, handler);

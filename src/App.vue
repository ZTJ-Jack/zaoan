<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {width: 100%;-webkit-text-size-adjust:none;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);height: 100%;}
body {width: 100%;height: 100%; color: #333333;background: #ffffff;min-height: 100%;font-family: 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;}
* {margin: 0;padding: 0;border: 0;}
ul,ul li,ol,li {list-style: none outside none;}
img {vertical-align: middle;border: none;width: 100%;}
i {font: inherit;}
input,select,option {vertical-align: middle;border-radius: 0px;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);outline: none;}
input[type="text"],input[type="button"],input[type="submit"],input[type="reset"] {-webkit-appearance: none;appearance: none;border-radius: 0;outline: none;}
h1,h2,h3,h4,h5,h6,i,strong {font-weight: normal;}
select::-ms-expand { display: none; }
a {color: #333333;text-decoration: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
a:hover {text-decoration: none;outline: none;}
.clear {clear: both;}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix {zoom: 1;display: block;_height: 1px;clear: both;}
body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{margin: 0;padding: 0;}
html{font-size: 26.67vw}
html,body,#app{
    overflow: hidden;
    width: 100%;
    height: 100%;
}
</style>

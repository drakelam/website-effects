<script type='text/javascript'>
//<![CDATA[
document.write('<div class="tet-2019"><img class="left-2019" id="left-2020" src="https://lh4.googleusercontent.com/-HXBsyeylNsk/XDQOO3VSvjI/AAAAAAAACm0/mN6mv1PCfgc8o3PrRm_kvBWN7KmMjsPqQCLcBGAs/s1600/tet1.png"/><img class="right-2019" id="right-2020" src="https://lh4.googleusercontent.com/-tlsSRiDAay8/XDQOjlNI5uI/AAAAAAAACm8/66f7Unvw1J039PCBEUX9q-gFOfUw8JoGgCLcBGAs/s1600/tet2.png"/></div><style>#left-2020{width: 130px;left:0;z-index:7;position:fixed;;transition:all 0.3s linear;-moz-transition:all 0.3s linear;-webkit-transition:all 0.3s linear}#right-2020{width: 130px;right:0;z-index:7;position:fixed;;transition:all 0.3s linear;-moz-transition:all 0.3s linear;-webkit-transition:all 0.3s linear}.left-2019{top:0px}.right-2019{top:0px}.text-2019-l{top:50px}.text-2019-r{top:50px}@media screen and (max-width:1024px){.tet-2019{display:none}}@media screen and (max-width:1440px){#shareduyblogs{display:none}}</style>')
//]]>
</script>
<script>//<![CDATA[
      var lastScroll = 0;
      jQuery(document).ready(function($) {
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll > lastScroll) {
            $('#right-2020').removeClass('left-2019').addClass('text-2019-l')
            $('#left-2020').removeClass('right-2019').addClass('text-2019-r')
          } else if (scroll < lastScroll) {
            $('#right-2020').addClass('left-2019').removeClass('text-2019-l')
$('#left-2020').addClass('right-2019').removeClass('text-2019-r')
          }
          lastScroll = scroll;
        })
      })
//]]></script>
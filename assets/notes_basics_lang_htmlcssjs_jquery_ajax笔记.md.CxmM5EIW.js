import{_ as a,c as e,o,ag as p}from"./chunks/framework.DPDPlp3K.js";const x=JSON.parse('{"title":"jquery-ajax笔记","description":"","frontmatter":{"title":"jquery-ajax笔记","date":"2020-01-01T09:02:55.000Z","categories":["编程语言","前端"],"tags":["JavaScript"]},"headers":[],"relativePath":"notes/basics/lang/htmlcssjs/jquery_ajax笔记.md","filePath":"notes/basics/lang/htmlcssjs/jquery_ajax笔记.md"}'),n={name:"notes/basics/lang/htmlcssjs/jquery_ajax笔记.md"};function s(r,t,l,u,c,j){return o(),e("div",null,t[0]||(t[0]=[p(`<p>ajax [javascript xmlhttprequest xml,html,json]</p><p>一、Ajax</p><p>jquery对ajax多了大量的封装 jquery使用三层封装： 最低层封装方法为:$.ajax() 封装最底层实现了第二层的三种方法： .load() $.get() $.post() 最高层是：$.getScript() 和 $.getJSON()</p><p>局部方法：需要一个包含元素的jquery对象作为前缀 .load() 适合做静态文件的异步获取 全局方法：无须指定某个元素 $.get()和$.post() 适合传递参数到服务器页面</p><ol><li><p>load方法： .load(url,[data],[callback]) 概括： url:必须，请求html文件的url地址，参数类型为String data:可选，发送的key/value数据，参数类型为Object callback:可选，成功或失败的回调函数，参数类型为Function 详解： url: 1.异步载入html内容 $(&quot;#id&quot;).load(&quot;test.html&quot;) 对载入的html进行筛选，在url参数跟一个选择器 $(&quot;#id&quot;).load(&quot;test.html .my&quot;) 选择器是test.html中的选择器 2.载入服务器文件，一般不仅需要载入数据，还要向服务器提交数据，此时用参数data 向服务器提交数据有两种方式：get 和 post ajax数据载入完毕后，就能执行回调函数callback， 回调函数可以传递三个可选参数： responseText（请求返回） textStatus（请求状态） XMLHttpRequest（XMLHttpRequest对象）</p></li><li><p>$.get(): $.get(url,[data],[callback],[type]) 概括： type，服务器返回的内容格式：包括xml,html,script,json,text 详解： 一般情况下type是智能判断的，不需要主动设置</p></li><li><p>$.post(): 使用和get方法基本一致 区别： 1.get请求通过URL提交的，而post请求则是http消息实体提交的 2.get提交有大小限制（2KB）,而post方式不受限制 3.get方式会被缓存下来，可能有安全问题，而post没有这个问题</p></li><li><p>$.getScript()和$.getJSON(): $.getScript()用于加载特定的js文件 $.getJSON()用于专门加载json文件</p></li><li><p>$.ajax():最底层的全局方法，完全可以单独实现上面的所有方法 只有一个参数，传递一个各个功能键值对的对象</p><p>$.ajax()方法对象参数： url: 发送请求的地址 type: 请求方式 data: 发送到服务器的数据，键值对字符串或对象 success: 请求成功后调用的回调函数</p></li></ol><p>表单序列化： 使用表单序列化方法.serialize()，会智能的获取表单内的所有元素，这样，在面对大量的表单元素时， 会把表单元素内容序列化为字符串，然后再使用Ajax请求</p><pre><code>$.ajaxSetup()   初始化ajax重复的属性

	$.ajaxSetup({
		type:&quot;POST&quot;,
		url:&quot;user.php&quot;,
		data:$(&quot;form&quot;).serialize()
	});
	$.(&quot;form&quot;).click(fucntion(){
		$.ajax(){
		success:function(response,status,xhr){
			$(&quot;#box&quot;) .html(response);
			}
			}
	);

在使用data属性传递的时候，如果是以对象形式传递键值对，可以使用$.param()方法将对象转换为字符串键值对格式
注意：使用$.param()将对象形式的键值对转为URL地址的字符串键值对，可以更加稳定准确的传递表单内容
</code></pre><p>二、Ajax进阶：</p><ol><li><p>全局请求事件：</p><p>1.加载请求： .ajaxStart()和 .ajaxStop() 请求开始时（未完成其他请求）激活.ajaxStart(), 请求结束时（所有的请求都结束了）激活.ajaxStop()</p><pre><code> $(document).ajaxStart(function(){
 	$(&quot;.loading&quot;).show();
 }).ajaxStop(function(){
 	$(&quot;.loading&quot;).hide();
 });
 
 //如果请求时间太长，可以在ajax里设置超时
 timeout:2000,
 
 //如果某个ajax不想触发全局事件，可以设置取消
 global:false,
</code></pre><p>2.错误处理： error:function(){} 3.请求全局事件： 全局事件方法：ajaxStart() ajaxStop() ajaxError() ajaxSuccess() ajaxComplete() ajaxSend() 局部方法:error() success() complete() 4.JSON和JSONP： 同一域，只要设置dataType：‘json’ 即可加载JSON文件 非同域，可以使用JSONP（json with padding），但也是有条件的 5.jqXHR对象： $.ajax()返回一个jqXHR对象 done() always() fail()代替success() complete() error()</p><pre><code> 使用jqXHR的连缀方式比$.ajax()的属性方式有三大好处：
 	1.可连缀操作      jqXHR.done(function(){alert(response);}).done(function(){alert(response););
 	2.可以多次执行同一个回调函数
 	3.为多个操作指定回调函数  $.when(jqxhr1,jqxhr2).done(function(r1,r2){});
</code></pre></li></ol><hr><p>全局事件方法时所有Ajax请求都会触发到，并且只能绑定到document上。而局部方法，只针对某个ajax</p><hr><p>​</p><p>​</p><p>​ ​</p><p>​</p><p>​</p>`,17)]))}const d=a(n,[["render",s]]);export{x as __pageData,d as default};

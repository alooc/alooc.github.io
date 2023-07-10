import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,f as o}from"./app-a2c721dc.js";const d={},r=o(`<h1 id="html5" tabindex="-1"><a class="header-anchor" href="#html5" aria-hidden="true">#</a> html5：</h1><pre><code>输入和显示
</code></pre><h1 id="css-选择器-外部样式表" tabindex="-1"><a class="header-anchor" href="#css-选择器-外部样式表" aria-hidden="true">#</a> css 选择器 外部样式表</h1><pre><code>	位置，布局，大小，颜色
选择器：
	1.普通选择器
	2.伪元素选择器
	3.伪类选择器
		结构性
		元素状态
		其他
			js中修改：
				行内属性
					document.body.style.backgroundColor=&quot;#232323&quot;
				元素类
					document.getElementById(&quot;id&quot;).className=&quot;solid&quot;


属性：
	1.与内容相关：
		content 与伪元素选择器一起使用，插入新内容
	2.字体与文本相关
	3.背景、边框和边距相关
	4.大小、定位和轮廓相关
		border-sizing 控制宽高的控制范围：值：
			content-box
			border-box
			inherit
		calc(40%-10px)
		定位相关：
			position
			z-index
			left
			bottom
			right
			top
		轮廓相关:
			outline
			outline-color
			outline-style:none,dotted,dashed,solid,double,groove,ridge,inset,outset
			outline-width 
			outline-offset
	5.盒模型与布局相关
		隐藏：disable:none 释放空间 visibility:hidden 仍占用空间
		inline-block
		flex
	6.表格列表相关
	7.变形和动画相关
</code></pre><p>​</p><h1 id="js-函数" tabindex="-1"><a class="header-anchor" href="#js-函数" aria-hidden="true">#</a> js :函数</h1><pre><code>数据类型
变量
作用域
复杂类型
with避免重复对象
循环分支
</code></pre><h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM:</h1><pre><code>根据ID访问HTML元素
	getElementById()
	innerHTML
	value
根据CSS选择器访问HTML元素
	Elemnt querySelector()
	NodeList querySelectorAll()
利用节点关系访问HTML元素

访问、修改、增加、删除HTML元素

绑定事件处理函数：
	1.绑定HTML元素属性
		需要修改HTML元素的代码
	2.绑定javascript对象属性
		无需修改HTML元素的代码，将事件处理韩函数放在脚本中绑定
	3.通过事件绑定方法addEventListener()实现
		objectTarget.addEventListener(&quot;eventType&quot; , handler , captureFlag); 
		eg.: 
			document.getElementById(&quot;testbn&quot;).addEventListener(&quot;click&quot; , gotClick2 , false); 
事件处理函数的执行环境

事件类型
</code></pre><p>​</p><p>​</p>`,11),a=[r];function i(c,s){return n(),e("div",null,a)}const u=t(d,[["render",i],["__file","疯狂HTML5_CSS3_JavaScript讲义笔记.html.vue"]]);export{u as default};

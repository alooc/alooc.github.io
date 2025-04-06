import{_ as n,c as e,o as p,ag as o}from"./chunks/framework.DPDPlp3K.js";const M=JSON.parse('{"title":"JavaScript笔记","description":"","frontmatter":{"title":"JavaScript笔记","date":"2020-01-01T09:02:55.000Z","categories":["编程语言","前端"],"tags":["JavaScript"]},"headers":[],"relativePath":"notes/basics/lang/htmlcssjs/JavaScript笔记.md","filePath":"notes/basics/lang/htmlcssjs/JavaScript笔记.md"}'),a={name:"notes/basics/lang/htmlcssjs/JavaScript笔记.md"};function l(r,t,c,i,s,d){return p(),e("div",null,t[0]||(t[0]=[o(`<p>javascript高级编程</p><p>变量定义、流程控制、运算符</p><p>Javascript函数 不是面向对象的 有点像Java方法，但并不一样</p><pre><code>在Java里，类是一等公民，类是可以独立存在的程序单元
在JavaScript里，函数是一等公民
函数永远是独立存在的！！！即使定义在一个类中也是独立存在的。（call）

定义函数的方法:
	第一种：
		function 函数名(p1,p2){
			函数执行体
			return ;
			}
	第二种：用function定义匿名函数
		function (p1,p2){
			函数执行体
			return ;
			}
	第三种：直接用function的构造器来创建函数
		new Function(p1,p2,p3,...,pn,&quot;return ;&quot;)
			语法繁琐之处在于，设置函数执行体时，参数很难传递。
</code></pre><p>调用函数的方式： 第一种： 调用者.函数名（参数列表）//调用者可以省略 调用者.xxx(p1,p2,p3); 第二种： 函数名.call(调用者，参数列表) xxx.call(调用者，p1,p2,p3); 第三种： 函数名.apply(调用者，arguments); xxx.apply(调用者，arguments); //call与apply的本质是一样的，是不过apply可以通过arguments来访问当前函数的参数</p><p>函数的功能： 只要定义一个JS函数，同时就产生了一个js类 function既是函数，又是类，又是这个类的构造器 函数默认调用者是window</p><pre><code>1.函数就当成一个函数来使用
2.函数可以当成类用
	只要你定义了一个js函数的时候，同时就产生了一个js类。因此可以通过new来调用它的构造器
		把函数当成类使用时，函数里的变量可分为：
			1.类变量：使用函数名作为前缀
			2.实例变量：使用this作为前缀
			3.方法中定义的局部变量：不是用前缀，或使用var修饰			
3.函数可作为类的方法
</code></pre><hr><p>var的作用： 大部分时，JavaScript脚本都可以省略var 但是，某些时候，如果我们要强调是新声明了一个变量，那就必须使用var了。</p><pre><code>	用var和不用var的区别：
		不用var:	
			1.如果上下文中该变量存在，直接用已有的变量
			2.如果上下文中该变量不存在，才新声明一个新的变量
		用var:
			表明声明一个新变量
</code></pre><p>​</p><hr><p>最主要的绑定事件监听的方法： 1通过HTML标签的onxxx属性来设置 此时onxxx属性可以是一条或多条js语句 2.通过DOM对象的onxxx属性来设置 此时onxxx属性只能是一个函数的引用</p><hr><p>this前缀的作用： 当在函数里访问一个变量时： 如果使用this，程序只搜索主调对象里是否包含该实例变量。如果不存在，当成undefined处理 如果没有this， 程序先搜索当前函数中是否存在该局部变量 如果不在，继续搜索主调对象中 如果不在，继续搜索主调对象所在对象中 如果不在，继续搜索，直到搜索到window对象。</p><hr><p>js函数的传参： js允许实参个数和函数定义的形参个数不匹配，没有传入实参的值当成undefined 函数定义不支持重载</p><pre><code>==：普通相等。会把两个参与比较的表达式，转换为相同类型之后进行比较。 
===:精确相等。强类型比较

！=
！==
</code></pre><p>js的类和对象：</p><pre><code>js如何定义类？
	js在定义函数时，同时定义一个类，并提供构造器
	
js类的继承：
	通过prototype关键字实现
	js中功能上的子类和父类具有相同的类名
	可以继承系统类 Array.prototype.each=function(){};
	//js没有严格的类继承层次
	//js的类层次只有2层，所有类都继承Object类

创建对象的方法：
	1.通过new调用构造器创建。并不太好
	2.通过new Object()来创建。其实也是调用构造器，只是调用Object的构造器。也不好
	3.使用json语法
</code></pre><hr><p>JS是动态语言，对象的属性、方法可以动态的改变（增加新的属性，增加新的方法） 直接对对象不存在的属性赋值，并赋值为函数，就相当于给对象增加了一个方法</p><hr><p>JSON（JavaScript Object Notation） notation：记号，标记法 现在已经成为一种跨平台、跨语言的通用的数据交换格式。 也是一种轻量级的序列化机制。</p><p>关于json: 记住两个符号： {}代表对象 []代表数组</p><p>Java里有List集合，还有Map集合 js的数组既是数组，也是List集合 js的对象完全可代替Map集合，甚至比Map更强大</p><p>级联菜单：</p><hr><p>如何用Javascript操作HTML文档： 要达到的效果，让HTML页面可以与用户交互，当用户有动作时，HTML页面可以随之改变</p><p>HTML文档 &lt;-----&gt; DOM树</p><p>DOM(Document Object Model)文档对象模型 DOM(Document Object Mapping)文档对象映射</p><p>经过DOM转换，就可以把HTML文档的所有节点，当成“内存中的对象”来进行处理。</p><p>如果直接修改HTML文档，只能以IO流的形式修改； 转换为DOM对象后，就可以通过调用方法，访问属性来修改DOM对象。</p><p>HTML元素之间的继承关系图： 一切都是node 除了文档之外，其他HTML标签都是元素（Element），其实所有的HTML标签都是HTLMElement</p><pre><code>除了继承关系之外，DOM对象之间，还存在严格的包含关系。
</code></pre><p>要对HTML文档进行修改：</p><pre><code>查   得到HTML节点对应的DOM对象
	1.document.getElementById(&quot;id&quot;); ---很好用

	2.利用节点之间的父子、兄弟关系来获取      sibling

	3.对于表单，也就是HTMLFormElement,它有如下两个属性：
		HTMLCollection elements	:返回该表单内所有的表单控件
		long length	：返回该表单内表单控件的个数

	4.对于列表框、下拉菜单，它有如下两个属性：
		HTMLCollection options :返回该列表框内的所有列表项
		long length	：返回该列表框内的所有列表项的个数
	
	5.对表格，它有如下属性：
		HTMLTableCaptionElement caption:获取表格的标题
		HTMLCollection rows:获取表格的所有行
		HTMLCollection tBodies:获取表格的所有tbody
		HTMLTableSectionElement tfoot:获取表格里所有的tfoot
		HTMLTableSectionElement	thead:获取表格里所有的thead
		
		HTMLTableSectionElement 有如下属性：
			rows:获取它所包含的所有表格行

		HTMLTableRowElement有如下属性：
			cells：获取它所包含的所有单元格


增
	增加节点之前，首先要创建节点，有如下几种方式：
		
		1.document.createElement 完全创建一个新的节点，有时候性能较差
		2.cloneNode(boolean deep) 克隆节点，比第一种方式性能略高
		3.new Option

		前两种对所有节点都可用，第三种只对某些节点可用
	
	添加节点的几种方式：
		1.通用方式：
			appendchild --永远在父节点的最后添加
			insertBefore(Node newChild,Node refChild):把节点添加到指定位置
			replaceChild(Node newChild,Node oldChild):把oldchild替换成newchild
		2.对于select元素，增加如下方法：
			add(option,before) 在指定的option前面添加一个新的option
						如果before为null，则添加到最后

		3.对于表格，有如下方法：
			insertRow  增加一行
			insertCell 增加一个单元格
</code></pre><p>​</p><pre><code>删



改
</code></pre><hr><p>Node Document HTMLDocument HTMLBodyDocument Element HTMLElement HTMLBodyElement HTMLDivElement HTMLTableElement HTMLTableRowElement</p><hr><p>HTMLDocument 包含 HTMLBodyElement 包含 HTMLDivElement HTMLDivElement HTMLTableElement HTMLTableRowElement</p><hr><p>​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​</p>`,45)]))}const m=n(a,[["render",l]]);export{M as __pageData,m as default};

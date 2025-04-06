import{_ as t,c as n,o as e,ag as r}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"《Java开发手册》学习笔记","description":"","frontmatter":{"title":"《Java开发手册》学习笔记","date":"2020-01-01T09:02:55.000Z","categories":["编程语言","Java"],"tags":["Java"]},"headers":[],"relativePath":"notes/basics/lang/java/学习笔记《java开发手册》.md","filePath":"notes/basics/lang/java/学习笔记《java开发手册》.md"}'),o={name:"notes/basics/lang/java/学习笔记《java开发手册》.md"};function i(s,a,l,d,c,_){return e(),n("div",null,a[0]||(a[0]=[r(`<h1 id="第一章-计算机基础" tabindex="-1">第一章 计算机基础 <a class="header-anchor" href="#第一章-计算机基础" aria-label="Permalink to &quot;第一章 计算机基础&quot;">​</a></h1><p>​ 计算机组成原理 ​ 计算机引论 ​ 计算机网络 ​ 信息安全</p><h1 id="第二章-面向对象" tabindex="-1">第二章 面向对象 <a class="header-anchor" href="#第二章-面向对象" aria-label="Permalink to &quot;第二章 面向对象&quot;">​</a></h1><p>​ 抽象、封装、继承、多态</p><pre><code>使用静态内部类的好处：
     * 1.作用域不会扩散到包外
     * 2.可以通过“外部类.内部类”的方式直接访问
     * 3.内部类可以访问外部类中的所有静态属性和方法
访问控制级别要从严处理
序列化：
	1.Java原生 效率低
	2.Hessian
	3.json序列化
	。。。其他序列化工具 

方法：
	方法体中要对传入的参数保持理性的不信任。
		方法的第一步骤并不是功能实现，而应该是参数预处理：
			1.入参保护：判断参数是否超过服务处理能力
			2.参数校验：视具体情况而定
POJO（简单的Java对象），通常是只包含getter、setter、toString方法的简单类
		DO\\BO\\DTO\\VO\\AO
	POJO作为数据载体，通常用于数据传输，不应该包含任何业务逻辑。
泛型定义时，约定俗成的符号：
	E 代表 Element，用于集合中的元素
	T 代表 the Type of object，表示某个类
	K 代表 Key，V 代表 Value，用于键值对元素。
9种基本数据类型：
	boolean byte char short int long float double  
		表示生活中的真假、字符、整数和小数
	refvar
		面向对象世界中的引用变量，也叫引用句柄
		引用 4B     引用指向的对象 最小12B
对象的存储空间的分配的单位是8个字节

包装类

String StringBuilder StringBuffer
</code></pre><h1 id="第三章-代码风格" tabindex="-1">第三章 代码风格 <a class="header-anchor" href="#第三章-代码风格" aria-label="Permalink to &quot;第三章 代码风格&quot;">​</a></h1><p>​ 大驼峰、小驼峰 ​ 望文知义 ​ * ​ 代码逻辑要分主次、个性和共性。不要把不同层次的逻辑写在一个大方法体里， ​ 应该将次要逻辑抽取为独立方法，将共性逻辑抽取成为共性方法（比如参数校 ​ 验、权限判断等），便于复用和维护，使主干代码逻辑更加清晰。 ​ * ​ 代码注释</p><h1 id="第四章-走进jvm" tabindex="-1">第四章 走进JVM <a class="header-anchor" href="#第四章-走进jvm" aria-label="Permalink to &quot;第四章 走进JVM&quot;">​</a></h1><p>​ 字节码 类加载 内存布局 对象创建 垃圾回收 ​ 计算机工程领域的任何问题都可以通过增加一个中间层来解决。 ​ 字节码的主要指令： ​ 1.加载和存储指令 ​ 在某个帧栈中，通过指令操作数据在虚拟机栈的局部变量表与操作栈之间来回传输。 ​ 常见指令如下： ​ （1）将局部变量加载到操作栈中 ​ （2）从操作栈顶存储到局部变量表 ​ （3）将常量加载到操作栈顶，这是极为高频使用的指令 ​ 2.运算指令 ​ 对两个操作栈帧上的值进行运算，并把结果写入操作栈顶 ​ 3.类型转换指令 ​ 显式转换两种不同的数值类型 ​ 4.对象创建与访问指令 ​ 根据类进行对象的创建、初始化、方法调用相关指令 ​ （1）创建对象指令 ​ （2）访问属性指令 ​ （3）检查实例类型指令 ​ 5.操作栈管理指令 ​ JVM提供了直接控制操作栈的指令 ​ （1）出栈操作 ​ （2）复制栈顶元素并压入栈 ​ 6.方法调用与返回指令 ​ （1）INVOKEVIRTUAL指令：调用对象的实例方法 ​ （2）INVOKESPECIAL指令：调用实例初始化方法、私有方法、父类方法等 ​ （3）INVOKESTATIC指令：调用类静态方法 ​ （4）RETURN指令：返回VOID类型 ​ 7.同步指令 ​</p><pre><code>解释执行
JIT编译执行

类加载过程：
	Java的类加载器是一个运行时核心基础设施模块，
		主要是在启动之初进行类的Load、Link和Init，
		即加载、链接、初始化。
Parents Delegation Model
魔法值：在代码中直接出现的值
</code></pre><p>​</p><p>​</p>`,12)]))}const v=t(o,[["render",i]]);export{h as __pageData,v as default};

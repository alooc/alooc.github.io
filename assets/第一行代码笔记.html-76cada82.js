import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,b as l}from"./app-ce74b944.js";const s={},d=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.
	log工具使用方便强大

	不要再使用system.out.println打印日志了，
	注意Javaweb中的自动化测试

2.
	Activity 包含用户界面的组件
	
	使用intent连接活动之间的跳转和数据传输
	活动的声明周期，运行、暂停、停止、销毁
		运行：在栈顶，正在操作
		暂停：仍显示在界面中，但不是栈顶，不是正在操作的对象
		停止：栈中存在，界面不存在
		销毁：栈中没有

		onCreate
		onRestart onStart
		onResume
		onPause
		onStop    
		onDestory
	活动的启动模式：
		标准启动，是默认的
		singleTop  该活动如果在栈顶的话，启动时，不再创建新的实例 ;但是，栈中已经存在，却不在栈顶，仍会创建一个新的实例
		singleTask 该活动再栈中存在，直接将它上面的栈中元素出栈，然后取出它，不会创建新的实例;但是，取出的活动，已经销毁了
		singleInstance  创建新的返回栈，共享返回栈
	
	活动的最佳实践：	
		编程中有很多小技巧，使用这些技巧可以带来极大的便利
			继承的妙用
		
			可以写一个所有活动和器父类之间的中间类，用它来统一这些活动的行为

		知晓当前的活动
		随时随地退出程序  写一个管理活动类来管理，活动创建时添加，活动销毁时减少，并添加一个可以销毁全部活动的方法
		启动活动的最佳写法，传递数据时单独写一个方法

3.
	控件
	布局
	ListView
	Recycler

4.
	碎片
	动态的增加碎片
	返回栈
	 
	代码域xml结合开发




	Java 的回调机制


	内容提供者
	服务
	网络


12 MaterialDesign
	ToolBar  
	滑动菜单 DrawerLayout
	悬浮按钮 FloatingActionButton
	交互式通知 Snackbar

	CoordinatorLayout 
	CardView

	AppBarLayout  解决标题栏被遮挡的问题

	下拉刷新 SwipeRefreshLayout

	可折叠式标题栏 CollaspingToolbarLayout

	系统工作栏透明

13 高级技巧

	1.自定义自己的Application类

	2.Intent传输对象

	3.定制自己的日志工具，在自定义类中控制log的打印等级

	4.调试Andriod程序

	5.创建定时任务

	6.多窗口模式编程     分屏

	7.Lambda表达式
		
	implementation &#39;de.hdodenhof:circleimageview:3.1.0&#39;
	implementation &#39;com.android.support:design:28.0.0&#39;

	implementation &#39;androidx.recyclerview:recyclerview:1.1.0&#39;

	implementation &#39;androidx.cardview:cardview:1.0.0&#39;

	implementation &#39;com.github.bumptech.glide:glide:4.5.0&#39;	
	 annotationProcessor &#39;com.github.bumptech.glide:compiler:4.5.0&#39;

	implementation &#39;org.litepal.android:java:3.0.0&#39;

	implementation &#39;com.squareup.okhttp3:okhttp:4.5.0&#39;

	implementation &#39;com.google.code.gson:gson:2.8.6&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[d];function t(a,r){return i(),e("div",null,v)}const u=n(s,[["render",t],["__file","第一行代码笔记.html.vue"]]);export{u as default};

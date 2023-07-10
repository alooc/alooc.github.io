import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as t}from"./app-a2c721dc.js";const s={},d=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.websocket是什么：
	websocket 基于TCP的一种新的网络协议，全双工  允许服务器主动向客户端发送消息

	
	具体原理是什么：
		浏览器发送websocket连线请求，服务器回应。只需一次握手，就可建立一条快速通道，进行数据传输
	


2.原生websocket的使用
	1.引入依赖
		&lt;dependency&gt;
		    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		    &lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt;
		&lt;/dependency&gt;
	2.配置类
		springboot使用配置类开启终端，前端可以借此连接服务器
	3.编写websocketServer的具体实现类
		该类处理使用websocket时的连接关闭和消息处理
	4.前端调用
		通过controller调用websocketServer的具体实现类的方法
		前端可以使用WebSocket的API
3.sockjs + stomp的使用
	比原生的好用
	1.引入依赖
		&lt;dependency&gt;
		    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		    &lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt;
		&lt;/dependency&gt;
		还要引入sockjs.min.js和stomp.min.js
	2.配置类
		开启sockjs的终端
		配置消息代理，一个是服务端向客户端发送消息的代理，
				一个是客户端向服务端发送消息的代理
	3.控制器类实现业务
		@MessageMapping处理客户端给服务端发送的消息
		@SendTo 指定服务端向客户端发送消息
	4.前端调用
		实现四个方法即可
			1.连接，订阅消息
			2.断开连接
			3.发送消息
			4.显示消息

	
	
	

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[d];function v(r,c){return e(),i("div",null,l)}const m=n(s,[["render",v],["__file","基础总结.html.vue"]]);export{m as default};

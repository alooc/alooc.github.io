import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as u,d as t,e,a as p,f as n,w as a,b as g}from"./app-64e721bb.js";const c={},d=t("h1",{id:"_1-web-xml",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-web-xml","aria-hidden":"true"},"#"),e(" 1.web.xml：")],-1),m=t("li",null,"配置JSP",-1),q=t("li",null,"配置和管理Servlet",-1),v=t("li",null,"配置和管理Listener",-1),b=t("li",null,"配置和管理Filter",-1),h=t("li",null,"配置标签库",-1),j=t("li",null,"配置JSP属性",-1),_=t("li",null,"配置和管理JASS授权认证",-1),S=t("li",null,"配置和管理资源引用",-1),f=t("br",null,null,-1),x=t("br",null,null,-1),P=t("br",null,null,-1),w=t("br",null,null,-1),C=t("br",null,null,-1),J=t("br",null,null,-1),y=t("br",null,null,-1),A=g(`<h1 id="_2-jsp的基本原理" tabindex="-1"><a class="header-anchor" href="#_2-jsp的基本原理" aria-hidden="true">#</a> 2.JSP的基本原理：</h1><ul><li><p>jsp就是servlet</p></li><li><p>jsp页面组成：</p><ul><li>1.静态部分。标准html</li><li>2.动态部分。收Java程序控制的内容，这些内容由Java脚本动态生成。</li></ul></li></ul><h1 id="_3-jsp的4种基本语法" tabindex="-1"><a class="header-anchor" href="#_3-jsp的4种基本语法" aria-hidden="true">#</a> 3.jsp的4种基本语法：</h1><ul><li><p>jsp注释：<br> &lt;%--注释部分 --%&gt;</p></li><li><p>jsp声明：<br> 用于声明变量和方法<br> &lt;%!声明部分%&gt;</p></li><li><p>jsp输出表达式：<br> &lt;%=表达式%&gt;</p></li><li><p>jsp小脚本：<br> &lt;% 代码 %&gt;</p></li></ul><h1 id="_4-jsp的3个编译指令" tabindex="-1"><a class="header-anchor" href="#_4-jsp的3个编译指令" aria-hidden="true">#</a> 4.jsp的3个编译指令：</h1><ul><li><p>编译指令是通知servlet引擎的处理消息<br> &lt;%@ 编译指令名 属性名=“属性值” ...%&gt;</p></li><li><p>page指令：<br> &lt;%@ page ...%&gt;</p><p>​ 定义页面需要的环境变量</p></li><li><p>include指令：<br> &lt;%@ include file=&quot;relativeURLSpec&quot; %&gt;<br> 包含并解析jsp</p></li><li><p>标签指令<br> &lt;%@ taglib uri=&quot;&quot; prefix=&quot;mytag&quot; %&gt;</p></li></ul><h1 id="_5-jsp的7个动作指令" tabindex="-1"><a class="header-anchor" href="#_5-jsp的7个动作指令" aria-hidden="true">#</a> 5.jsp的7个动作指令：</h1><ul><li><p>动作指令是运行时的动作</p><pre><code>  jsp:forward
  jsp:param	转发时增加额外的请求参数
  jsp:include
  jsp:plugin
  jsp:useBean
  jsp:setProperty
  jsp:getProperty
</code></pre></li><li><p>详解：</p><pre><code>  	forward:
  			“转向”
  			用于将页面响应转发到另外的页面。
  			&lt;jsp:forward page=&quot;&quot;&gt;
  				&lt;jsp:param name=&quot;age&quot; value=&quot;22&quot;&gt;
  			&lt;/jsp:forward&gt;
  
  	include:
  		“导入”
  		&lt;jsp:include page=&quot;&quot;&gt;
  			&lt;jsp:param name=&quot;age&quot; value=&quot;22&quot;&gt;
  		&lt;/jsp:include&gt;
  		
  		forward拿目标页面代替原有页面
  		include拿目标页面插入原有页面
  		
  	useBean,setProperty,getProperty:
  		useBean用于在JSP页面初始化一个Java实例
  		setProperty用于为JavaBean实例的属性设置值
  		getProperty用于输出JavaBean实例的属性
  		&lt;jsp:useBean id=&quot;JavaBean的实例名&quot; class=&quot;JavaBean的实现类&quot; scope=&quot;page|request|session|application&quot; /&gt;
  		&lt;jsp:setProperty name=&quot;JavaBean的实例名&quot; property=&quot;属性名&quot; value=&quot;值&quot; /&gt;
  		&lt;jsp:getProperty name=&quot;JavaBean的实例名&quot; property=&quot;属性名&quot; /&gt;
  		
  	plugin:
  		主要用于下载服务器端的JavaBean或Applet到客户端执行
  	
  	param:
  		用于设置参数值，本身不能单独使用
  		可与以下三个结合使用：
  			jsp:forward
  			jsp:include
  			jsp:plugin
  		&lt;jsp:param name=&quot;参数名&quot; value=&quot;参数值&quot; /&gt;
</code></pre></li></ul><h1 id="_6-jsp脚本中的9个内置对象" tabindex="-1"><a class="header-anchor" href="#_6-jsp脚本中的9个内置对象" aria-hidden="true">#</a> 6.jsp脚本中的9个内置对象：</h1><pre><code>	这9个内置对象都是ServletAPI接口的实例，JSP规范对其进行默认的初始化。
	已经是对象了，可以直接使用。
	因为是在_jspService()方法中完成初始化的，因此只能在jsp小脚本、jsp输出表达式中使用这些对象，不能在声明中使用。
	
	application: javax.servlet.ServletContext的实例，代表JSP所属的web应用本身
	config:	javax.servlet.ServletConfig的实例，代表JSP的配置信息
	exception:	java.lang.Throwable的实例，代表其他页面中的异常和错误	
	out:	javax.servlet.jsp.JspWriter的实例，代表JSP页面的输出流，用于输出内容，形成HTML页面
	page:	代表该页面本身，没有太大的用处。也就是servlet中的this
	pageContext:	javax.servlet.jsp.PageContext的实例，代表JSP页面的上下文，使用该对象可以访问页面中的共享数据
	request:	javax.servlet.http.HttpServletRequest的实例，该对象封装了一次请求，客户端的请求参数都被封装到该对象里。
	response:	javax.servlet.http.HttpServletResponse的实例，代表服务器对客户端的响应。
	session:	javax.servlet.http.HttpSession的实例，该对象代表一次会话。当客户端浏览器与站点建立连接时，会话开始；当客户端关闭浏览器时 ，会话结束。
	
	web服务器：解析请求参数，处理用户请求，生成响应数据
	web浏览器：发送请求，读取响应数据，渲染页面
	
	property：固有的属性，内在的，原来就有的
	attribute：外部的描述，外在的，后天形成的
	
	详解：
		application对象:
			作用：
				在整个web应用的多个jsp,servlet之间共享数据
				访问web应用的配置参数
			
			共享数据：
				&lt;%!
				int i;
				%&gt;
				&lt;%
				application.setAttribute(&quot;counter&quot;,String.valueOf(++i));
				%&gt;
				&lt;%=application.getAttribute(&quot;counter&quot;) %&gt;
			获得web应用配置参数：
				首先在web.xml中定义：
					&lt;context-param&gt;
						&lt;param-name&gt;driver&lt;/param-name&gt;
						&lt;param-value&gt;com.mysql.cj.jdbc.Driver&lt;/param-value&gt;
					&lt;/context-param&gt;
				在jsp中调用：
					&lt;%=application.getInitParameter(&quot;driver&quot;) %&gt;
					
		config对象：
			对JSP无用
			对servlet用处大:
				直接在web.xml中配置：
					&lt;servlet&gt;
						&lt;!--指定servlet名字--&gt;
						&lt;servlet-name&gt;config&lt;/servlet-name&gt;
						&lt;!--指定将哪个jsp页面配置成servlet--&gt;
						&lt;jsp-file&gt;/file.jsp&lt;/jsp-file&gt;
						&lt;!--配置--&gt;
						&lt;init-param&gt;
							&lt;param-name&gt;name&lt;/param-name&gt;
							&lt;param-value&gt;value&lt;/param-value&gt;
						&lt;/init-param&gt;
					&lt;/servlet&gt;
					&lt;servlet-mapping&gt;
						&lt;!--指定将config servlet配置到/config路径--&gt;
						&lt;servlet-name&gt;config&lt;/servlet-name&gt;
						&lt;url-pattern&gt;/config&lt;/url-pattern&gt;
					&lt;/servlet-mapping&gt;
				jsp中调用：
					&lt;%=config.getInitParameter(&quot;name&quot;) %&gt;
		
		exception对象:
			只在异常处理页面使用
			
			普通页面：
				&lt;%@ page contentType=&quot;text/html&quot;  pageEncoding=&quot;UTF-8&quot; language=&quot;java&quot; errorPage=&quot;error.jsp&quot; %&gt;
			异常处理页面：
				&lt;%@ page contentType=&quot;text/html&quot;  pageEncoding=&quot;UTF-8&quot; language=&quot;java&quot; iserrorPage=&quot;true&quot; %&gt;
				&lt;body&gt;
				异常类型是：&lt;%=exception.getClass() %&gt; &lt;br/&gt;
				异常信息是：&lt;%=exception.getMessage() %&gt; &lt;br/&gt;
				&lt;/body&gt;
		
		out对象:
			所有使用out的地方，都可以使用输出表达式来代替
			
			&lt;%=... %&gt;的本质是out.write(...);
		
		pageContext对象：
			共享数据
			
			pageContext.setAttribute(&quot;name&quot;,&quot;value&quot;)
			pageContext.setAttribute(&quot;name&quot;,&quot;value&quot;,&quot;pageContext.SESSION_SCOPE&quot;)
			pageContext.getAttribute(&quot;name&quot;)
			pageContext.getAttribute(&quot;name&quot;,&quot;int scope&quot;)
			
			scope值：
				pageContext.PAGE_SCOPE
				pageContext.REQUEST_SCOPE
				pageContext.SESSION_SCOPE
				pageContext.APPLICATION_SCOPE	
	
		request对象：
			1.获取请求头/请求参数	
				request提供的方法：
					获取请求参数： 
						String getParameter(String paramName)	获取值
						Map getParameterMap()	获取所有参数名和参数值组成的map对象
						Enumeration getParameterEnumeration()	获取所有请求参数名组成的Enumeration对象
						String[] getParameterValues(String paramName)	获取请求参数的所有值，多个值组成数组返回
					获取请求头：
						String getHeader(String name)	指定的请求头的值
						java.util.Enumeration&lt;String&gt; getHeaderNames()	所有请求头的名称
						java.util.Enumeration&lt;String&gt; getHeaders(String name)	指定请求头的多个值
						int getIntHeader(String name)	指定请求头的值，并将该值转换为整数值
					
			2.操作request范围的属性：
				设置和获取request范围的属性
					setAttribute(String attrName,Object attrValue)
					Object getAttribute(String attrName)
			
			3.执行forward或include:
				request的getRequestDispatcher(String path)方法，获取RequestDispatcher对象  【path字符必须以斜线开头】
					getRequestDispatcher(&quot;/a.jsp&quot;).forward(request,response);
					getRequestDispatcher(&quot;/a.jsp&quot;).include(request,response);
			
		response对象：
			out只能输出字符流，无法输出非字符流。
			位图、PDF文档等必须使用response
			此外，还可以使用response来重定向请求，以及用于向客户端增加Cookie
			
			1.response响应生成非字符响应
				
			2.重定向
				&lt;%response.sendRedirect(&quot;redirect-result.jsp&quot;); %&gt;
			3.增加Cookie
				增加：
					Cookie c=new Cookie(&quot;username&quot;,kerwin);
					c.setMaxAge(24*3600);
					response.addCookie(c);
				读取：
					Cookie[] cookies=request.getCookies();
					for(Cookie c:cookies){
						if(c.getName().equals(&quot;username&quot;))
						{
							out.println(c.getValue());
						}
					}
		
		session对象：
			设置和获取session范围的属性
				setAttribute(String attrName,Object attrValue)
				Object getAttribute(String attrName)
			session的属性值可以是任何可序列化的Java对象
</code></pre><h1 id="_7-servlet介绍" tabindex="-1"><a class="header-anchor" href="#_7-servlet介绍" aria-hidden="true">#</a> 7.Servlet介绍：</h1><pre><code>	1.Servlet的开发：
		Servlet通常被称为服务端小程序，是运行在服务器端的程序，用于处理及响应客户端的请求
		
		servlet是个特殊的Java类，必须继承HttpServlet
		
		方法：
			service()
			doGet()
			doPost()
			doPut()
			doDelete()
			init(ServletConfig config)
			destroy()
	
	2.Servlet的配置：
		注解：@WebServlet
		web.xml: &lt;servlet&gt;  &lt;servlet-mapping&gt;
	
	3.JSP/Servlet的生命周期：
		创建servlet实例 ——&gt; init() 完成初始化 ——&gt; 响应客户请求 ——&gt; destroy() 销毁，回收资源
		
	4.load-on-startup Servlet:
		创建servlet实例的时机
		@WebServlet(loadOnStartup=1)
		&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
	
	5.访问Servlet的配置参数
		设置：
			注解：@WebServlet
				@WebServlet(
							initParams={
										@WebInitParam(name=&quot;driver&quot;,value=&quot;&quot;),
										@WebInitParam(name=&quot;url&quot;,value=&quot;&quot;)
										}
							)
			web.xml
				直接在web.xml中配置：
					&lt;servlet&gt;
						&lt;!--指定servlet名字--&gt;
						&lt;servlet-name&gt;config&lt;/servlet-name&gt;
						&lt;!--指定将哪个jsp页面配置成servlet--&gt;
						&lt;jsp-file&gt;/file.jsp&lt;/jsp-file&gt;
						&lt;!--配置--&gt;
						&lt;init-param&gt;
							&lt;param-name&gt;name&lt;/param-name&gt;
							&lt;param-value&gt;value&lt;/param-value&gt;
						&lt;/init-param&gt;
					&lt;/servlet&gt;
					&lt;servlet-mapping&gt;
						&lt;!--指定将config servlet配置到/config路径--&gt;
						&lt;servlet-name&gt;config&lt;/servlet-name&gt;
						&lt;url-pattern&gt;/config&lt;/url-pattern&gt;
					&lt;/servlet-mapping&gt;
		读取：	
			config.getInitParameter(&quot;name&quot;);
			&lt;%=config.getInitParameter(&quot;name&quot;) %&gt;	
			
	6.使用Servlet作为控制器：
		servlet的作用类似于调度员：
			所有用户请求都发送给Servlet，Servlet调用model来处理用户请求，并调用jsp来呈现处理结果；
										 或者Servlet直接调用jsp将状态数据呈现给用户。
</code></pre><h1 id="_8-jsp2的自定义标签" tabindex="-1"><a class="header-anchor" href="#_8-jsp2的自定义标签" aria-hidden="true">#</a> 8.JSP2的自定义标签：</h1><pre><code>	这种标签具有和html标签类似的语法，又可以完成JSP脚本的功能。
	
	开发标签库的步骤：
		1.开发自定义标签处理类
		2.建立一个*.tld文件，每一个*.tld文件对应一个标签库，每个标签库可包含多个标签
		3.在jsp中使用自定义标签
	
	开发自定义标签类：
		继承一个父类：javax.servlet.jsp.tagext.SimpleTagSupport
			如果标签类包含属性，每个属性都又对应的getter和setter方法
			重写doTag()方法，这个方法负责生成页面内容
	
	建立TLD文件：
		Tag Library Definition
		根元素&lt;taglib&gt;
			子元素：
				tlib-version
				short-name
				uri:标签库的唯一标识
				包含多个tag元素：
					子元素：
						name:	标签名称
						tag-class:	标签处理类
						body-content：	标签体的内容：
													tagdependent:标签处理类自己负责处理标签体
													empty:只能作为空标签使用
													scriptless:标签体可以是静态HTML元素、表达式语言，但不允许出现jsp脚本
													JSP：可以使用jsp脚本
						dynamic-attributes：	动态属性
	
	使用标签库：
		需要两点：
			标签库URI：确定使用哪个标签库
			标签名：确定使用哪个标签
		
		步骤：
			1.导入标签库
			2.使用标签
		&lt;%@ taglib uri=&quot;&quot; prefix=&quot;mytag&quot; %&gt;
		&lt;mytag:tagName tagAttribute=&quot;value&quot;&gt;&lt;/mytag:tagName&gt;
		
	带属性的标签：
		TLD中：
			tag增加子元素：
				&lt;attribute&gt;
					&lt;name&gt;属性名
					&lt;required&gt;是否为必须属性 true / false
					&lt;fragment&gt;是否支持JSP脚本、表达式等动态内容 true / false
				&lt;/attribute&gt;
	
	带标签体的标签：

	以页面片段作为属性的标签
	
	动态属性的标签
</code></pre><h1 id="_9-filter介绍" tabindex="-1"><a class="header-anchor" href="#_9-filter介绍" aria-hidden="true">#</a> 9.Filter介绍：</h1><pre><code>	使用Filter的完整流程：
		Filter对用户请求进行预处理，接着将请求交给Servlet进行处理并生成响应，最后Filter再对服务器响应进行后处理。
	
	创建：
		1.创建Filter处理类
		2.web.xml中配置
</code></pre><h1 id="_10-listener介绍" tabindex="-1"><a class="header-anchor" href="#_10-listener介绍" aria-hidden="true">#</a> 10.Listener介绍：</h1><p>步骤：<br> 1.定义Listener实现类<br> 2.通过注解或在web.xml文件中配置Listener</p><p>​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​ <br> ​</p>`,19);function E(N,T){const r=l("welcome-file"),o=l("welcome-file-list");return i(),u("div",null,[d,t("ul",null,[m,q,v,b,h,j,_,S,t("li",null,[e("Web应用的首页"),f,p("配置Web应用的首页"),x,n(o,null,{default:a(()=>[P,n(r,null,{default:a(()=>[e("index.html")]),_:1}),w,n(r,null,{default:a(()=>[e("index.htm")]),_:1}),C,n(r,null,{default:a(()=>[e("index.jsp")]),_:1}),J]),_:1}),y,e(" metadata-complete:该属性接受true和false两个属性值。为true时，该web应用不会加载注解配置的web组件（如Servlet,Filter,Listener等）")])]),A])}const k=s(c,[["render",E],["__file","JSP_Servlet笔记.html.vue"]]);export{k as default};

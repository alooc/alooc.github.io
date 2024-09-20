import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,b as o}from"./app-64e721bb.js";const r={},a=o(`<h1 id="第一章-java-ee应用" tabindex="-1"><a class="header-anchor" href="#第一章-java-ee应用" aria-hidden="true">#</a> 第一章 Java EE应用</h1><pre><code>## Java EE架构：
	Domain Object(领域对象层)
	DAO(Data Access Object 数据访问层)  在其他框架中的别名 EAO(Entity)    		Mapper层
	Service (业务逻辑层)
	Controller(控制器层)
	View(表现层)  组成：jsp页面等
(上层组件的实现依赖于下层组件的功能，下层组件支持上层组的实现)

servlet 3.x规范：提供功能：异步请求，注解，增强的Servlet API，非阻塞I/O

jsp只负责简单的显示逻辑
中间层将底层信息封装成JavaBean集，即DTO（数据传输对象），传输DTO给JSP页面
</code></pre><h1 id="第二章-spring-mvc" tabindex="-1"><a class="header-anchor" href="#第二章-spring-mvc" aria-hidden="true">#</a> 第二章 Spring MVC</h1><pre><code>使用注解开发，简单

Spring MVC应用的开发步骤：
	1.在web.xml中定义前端控制器DispatcherServlet来拦截请求
	
	2.如果 使用POST提交请求，需要定义包含表单数据的JSP页面。GET请求无需这一步骤
	
	3.定义处理用户请求的handler类，@Controller
	
	4.配置handle。注解开发即可
	  
	5.编写视图资源  ModelAndView
	
Spring MVC请求&gt;响应的完整工作流程：
	
	1.用户发送请求，前端控制器DispatcherServlet截获
	
	2.DispatcherServlet对请求URL进行解析，得到URI。根据URI调用HandlerMapping获得该Handler配置的相关对象，包括
	Handler对象以及Handler对象对应的拦截器，这些对象会被封装在一个HandlerExceptionChain对象中返回。
	
	3.DispatcherServlet根据获得的handler，选择一个合适的HandlerAdapter。
	
	4.提取请求中的模型数据，开始执行Handler.
		在填充Handler的入参过程中，根据配置，spring做额外的工作：消息转换，数据转换，数据格式化，数据验证
		
	5.Handler执行完成后，向 DispatcherServlet返回一个ModelAndView对象。
	
	6.根据返回的ModelAndView对象选择一个合适的ViewResolver(视图解析器)返回给DispatcherServlet
	
	7.DispatcherServlet结合Model和View来渲染视图
	
	8.将视图渲染结果返回给客户端
	
开发者不必关心以上对象是如何共作的，开发者只需要在Controller当中完成对请求的业务处理。
</code></pre><h1 id="第三章-spring-mvc的常用注解" tabindex="-1"><a class="header-anchor" href="#第三章-spring-mvc的常用注解" aria-hidden="true">#</a> 第三章 Spring MVC的常用注解</h1><pre><code>@Controller
@RequestMapping
@GetMapping
@PostMapping
@RequestParam
@PathVariable
@MatrixVariable
@CrossOrigin
@RequestHeader 
@CookieValue
@RequestAttribute
@SessionAttribute
@SessionAttributes
@ModelAttribute
@RequestBody
@ResponseBody
@RestController
@ResponseStatus
@ExceptionHandler
@ControllerAdvice
@RestControllerAdvice
</code></pre><p>详解：</p><pre><code>@Controller 控制器类

@RequestMapping 处理请求地址映射  注释的方法为请求处理方法 也可以注释类 @RequestMapping(&quot;/login)

@RequestParam 将指定的请求参数赋值给方法中的形参 @RequestParam(&quot;loginname&quot;)

@PathVariable 获得请求URL中的动态参数 @PathVariable(&quot;/pathVariableTest/{userId}&quot;)

@MatrixVariable 允许开发者进行多条件查询 @MatrixVariable(value=&quot;age&quot;,pathVar=&quot;userId&quot;)
	默认不开启，需在配置文件中设置 &lt;mvc:annotation-driven enable-matrix-variables=&quot;true&quot; /&gt;

@CrossOrigin 处理跨域请求

@RequestHeader 将请求的头信息数据映射到功能处理方法的参数上 @RequestHeader(&quot;User-Agent&quot;) String userAgent

@CookieValue 将请求的Cookie数据映射到功能处理方法的参数上 @CookieValue(value=&quot;JSESSIONID&quot;,defaultValue=&quot;&quot;) String sessionId

@RequestAttribute 将request作用域中的属性转换到目标方法的参数 @RequestAttribute(value=&quot;username&quot;) String username

@SessionAttribute 将session作用域中的属性转换到目标方法的参数 @SessionAttribute(value=&quot;username&quot;) String username

@SessionAttributes 有选择地指定Model中的哪些属性转存到HttpSession对象中

@ModelAttribute 将请求参数绑定到对象 

@RequestBody 将json数据设置到对象中  @RequestBody Book book

@ResponseBody 将其他格式数据（json xml等）转换为body数据

@RestController  该类会被看成一个controller，该类中的所有使用@RequestMapping的方法都默认使用了@ResponseBody

Spring MVC的异常处理：
	@ExceptionHandler(value=Exception.class)  value=Exception.class表示处理所有的Exception类型异常  
		为简化开发，写一个父类，在父类中完成异常处理方法
</code></pre><h1 id="第四章-spring-mvc标签库" tabindex="-1"><a class="header-anchor" href="#第四章-spring-mvc标签库" aria-hidden="true">#</a> 第四章 Spring MVC标签库</h1><pre><code>spring提供一组功能强大的标签用来在JSP和spring web mvc中处理表单元素。
标签可以访问控制器处理命令对象和绑定数据。

表单标签库：
	必须在jsp页面开头处声明taglib指令：
		&lt;%@ taglib prefix=&quot;form&quot; uri=&quot;http://www.springframework.org/tags/form&quot; %&gt;
	
	form标签：自动绑定，支持其他提交方法
	
	input标签：绑定表单数据
		
	password标签：绑定表单数据
	
	hidden标签：没有可视外观的input
	
	textarea标签：
	
	checkbox标签：绑定boolean数据，绑定列表数据
	
	checkboxes标签

	radiobutton标签
	
	radiobuttons标签
	
	select标签
	
	option标签
	
	options标签
	
	errors标签
</code></pre><h1 id="第五章-spring-mvc国际化" tabindex="-1"><a class="header-anchor" href="#第五章-spring-mvc国际化" aria-hidden="true">#</a> 第五章 Spring MVC国际化</h1><pre><code>//了解

步骤：
	1.给系统加载国际化资源文件
	2.输出国际化消息：
		两种方式：
			在视图页面输出国际化消息，需要使用spring mvc的标签库
			在controller的处理方法中输出国际化消息， 需要用到RequestContext的getMessage()方法
</code></pre><h1 id="第六章-spring-mvc的数据转换、格式化、数据校验" tabindex="-1"><a class="header-anchor" href="#第六章-spring-mvc的数据转换、格式化、数据校验" aria-hidden="true">#</a> 第六章 Spring MVC的数据转换、格式化、数据校验</h1><pre><code>//了解
</code></pre><h1 id="第七章-spring-mvc的文件上传下载和拦截器机制" tabindex="-1"><a class="header-anchor" href="#第七章-spring-mvc的文件上传下载和拦截器机制" aria-hidden="true">#</a> 第七章 Spring MVC的文件上传下载和拦截器机制</h1><pre><code>文件上传：
	表单设置：
		-&gt;	method=&quot;POST&quot; 
		-&gt;	enctype=&quot;multipart/form-data&quot;	浏览器采用二进制流的方式来处理表单数据

	SpringMVC ：
			通过即插即用的MultipartResolver实现
		SpringMVC使用Apache Commons FileUpload技术实现了一个MultipartResolver实现类：CommonsMultipartResolver
			需要依赖Apache Commons FileUpload的组件：
												-&gt;commons-fileupload-1.3.3.jar
												-&gt;commons-io-2.6.jar
			文件接收（类型都是MultipartFile）：
				-&gt;File spring将文件传给File,File.transferTo()
				-&gt;作为对象的属性  将文件传给某个对象的某一属性 

文件下载：
	使用ResponseEntity对象，可以方便地定义返回的BodyBulider,HttpHeader,HttpStatus
		BodyBulider对象用来构建返回的Body
		HttpHeader类型代表Http协议中的头信息
		HttpStatus类型代表Http协议中的状态
	
拦截器：
	
	主要作用是拦截用户的请求并进行相应的处理。比如通过拦截器进行用户权限验证，或用来判断用户是否已经登录等。

	通过实现HandlerInterceptor接口来拦截请求
		三个方法：
			1.boolean preHandle(HttpServletRequest request, HttpServletResponse response,
		Object handler)	预处理 在请求之前被调用
			
			2.void postHandle(HttpServletRequest request, HttpServletResponse response,
		Object handler, ModelAndView mv)	在请求处理之后，视图渲染之前被调用
			
			3.void afterCompletion(HttpServletRequest request,
		HttpServletResponse response, Object handler, Exception exception)   资源清理
	
	&lt;mvc:interceptors&gt;
		&lt;mvc:interceptor&gt;
			&lt;mvc:mapping path=&quot;/*&quot;/&gt;
			&lt;!-- 使用bean定义一个Interceptor，直接定义在mvc:interceptors下面的Interceptor将拦截所有的请求 --&gt;  
			&lt;bean class=&quot;org.fkit.interceptor.AuthorizationInterceptor&quot;/&gt;
		&lt;/mvc:interceptor&gt;
	&lt;/mvc:interceptors&gt;	
</code></pre><h1 id="第八章-mybatis简介" tabindex="-1"><a class="header-anchor" href="#第八章-mybatis简介" aria-hidden="true">#</a> 第八章 MyBatis简介</h1><pre><code>	SQL Mapping 框架
	
ORM介绍：
	ORM框架是面向对象程序设计语言与关系数据库发展不同步的中间解决方案

	ORM工具的唯一作用就是：
		把对持久化对象的保存、修改、删除等操作，转换为对数据库的操作。
	
	ORM框架负责将相关操作转换成对应的SQL操作。

ORM基本映射关系：
	1.数据表映射类。持久化类被映射到一个数据表。
	2.数据表的行映射对象（即实例）。
	3.数据表的列（字段）映射对象的属性。

Mybatis主要思想：将程序中的大量SQL语句剥离出来，配置在配置文件中，以实现SQL的灵活配置。

通用信息为根配置信息，根配置信息需要使用配置文件指定。

&lt;configuration&gt;
&lt;settings&gt;
&lt;environments&gt;
&lt;environment&gt;
&lt;transactionManager&gt;
&lt;dataSource&gt;
&lt;property&gt;

 数据源是一种用来提高数据库连接性能的常规手段，
 数据源会负责维持一个数据库连接池，当程序创建数据源实例时，系统会一次性创建多个数据库连接，并存池。
 程序需要使用时，在池中取出一个空闲的数据库连接。
 不需要时，将数据库连接归还给连接池即可。
 
配置log4j.properties查看日志

使用mybatis步骤：
	1.开发持久化类PO和编写持久化操作的Mapper.xml，在其中定义要执行的SQL语句。
	2.获取SqlSessionFactory
	3.获取SqlSession
	4.用面向对象的方式操作数据库
	5.关闭事务，关闭SqlSession

SqlSessionFactory是整个数据库映射关系编译后的内存镜像，通常一个应用对应一个SqlSessionFactory对象，SqlSessionFactory通过加载mybatis-config.xml配置文件生成。
SqlSession由SqlSessionFactory工厂产生。
对PO的操作必须在SqlSession的管理下才能同步到数据库。
</code></pre><h1 id="第九章-mybatis体系结构" tabindex="-1"><a class="header-anchor" href="#第九章-mybatis体系结构" aria-hidden="true">#</a> 第九章 Mybatis体系结构</h1><pre><code>SqlSessionFactory：通过SqlSessionFactoryBuilder对象获得
	SqlSession openSession() 创建SqlSession对象

SqlSession

Mybatis的配置文件：
	
	配置文件的结构：
		顶层的configuration 配置
		properties 属性
		settings 设置
		typeAliases 类型命名
		typeHandlers 类型处理器
		objectFactory 对象工厂
		plugins 插件
		environments 环境
		environment 环境变量
		transactionManager 事务管理器
		dataSource 数据源
		databaseIdProvider 数据库厂商标识
		mapper 映射器

	properties 属性：
		可外部配置且动态替换
		既可在典型的Java属性文件中配置，也可通过properties元素的子元素传递
	settings 设置：
		调正mybatis运行时的行为
	typeAliases 类型命名：
		别名，减少冗余
	typeHandlers 类型处理器：
		处理参数和结果集中的数据类型
	objectFactory 对象工厂：
		创建结果对象的新实例
	environments 环境：
		配置数据源
	mapper 映射器：
		告诉mybatis去哪里找映射文件，进而找到这些SQL语句
</code></pre><p>​ <br> ​ Mapper XML映射文件：<br> ​ <br> 常用的元素：<br> select 映射查询语句<br> insert 映射插入语句<br> update 映射更新语句<br> delete 映射删除语句<br> sql 可被其他语句引用的可重用语句块<br> cache 给定命名空间的缓存配置<br> cache-ref 其他命名空间缓存配置的引用<br> resultMap 最复杂也是最强大的元素，用来描述如何从数据库结果集中加载对象</p><h1 id="第十章-深入使用mybatis" tabindex="-1"><a class="header-anchor" href="#第十章-深入使用mybatis" aria-hidden="true">#</a> 第十章 深入使用MyBatis</h1><pre><code>关联映射：
	一对一
	一对多
	多对多

通过mapper接口的代理对象访问MyBatis，该对象关联了SqlSession对象，可通过该
	对象直接调用方法操作数据库。
	mapper接口对象的类名必须与xml文件中的mapper的namespace一致，
		方法名和参数必须与xml文件中的&lt;select&gt;元素中的id属性和parameterType属性一致

动态SQL：
	常用的动态SQL元素：
		if
		choose(when,otherwise)
		where
		set
		foreach
		bind

调用存储过程：
	
事务管理：
	
	事务的概念：ACID
	
	transaction接口
	
	对于数据库的事务而言，应该具有以下动作：
		创建 create
		提交 commit
		回滚 rollback
		关闭 close
	
	事务管理分为两种形式：
		使用JDBC的事务管理机制。即利用java.sql.Connection对象完成对事务的提交、回滚和关闭等操作。
		使用MABAGED的事务管理机制。对于这种机制，MyBatis自身不会去实现事务管理，而是让容器如WebLogic,JBoss等来实现对事务的管理。
		
	事务的配置创建和使用：
		1.配置：跟配置文件中配置&lt;transactionManager type=&quot;JDBC&quot;&gt;
		2.创建：JdbcTransactionFactory
		3.使用：对象实例
	
缓存机制：
	
	简介：
		查询缓存分为一级缓存和二级缓存，
			一级缓存是SqlSession级别的缓存，二级缓存是mapper级别的缓存，二级缓存是多个SqlSession共享的。
	
	一级缓存：
		SqlSession对象中用HashMap存储缓存数据
		使用：
			再次查询时会从缓存中获取数据
			SqlSession执行DML操作（insert,update ,delete），并提交数据库，mybatis会清空sqlsession的一级缓存
			SqlSession结束后，一级缓存也就不存在了。
			MyBatis默认开启以及缓存，不需要进行任何配置。
		mybatis的缓存机制时基于id进行缓存的，也就是说，mybatis使用hashmap缓存数据时，
			对象的id作为key
			对象作为value
	
	二级缓存：
		多个SqlSession使用用一个mapper的SQL语句去操作数据库，得到的数据会存在二级缓存区域，使用HashMap存储
		
		多个SqlSession共享，作用域是mapper的同一个namespace
		
		在setting全局参数中配置开启二级缓存。
			&lt;settings&gt;
				&lt;!-- 开启二级缓存 --&gt;
				&lt;setting name=&quot;cacheEnabled&quot; value=&quot;true&quot;/&gt;
			&lt;/settings&gt;
		mapper.xml中使用二级缓存：
			&lt;!-- 开启二级缓存 
				回收策略为先进先出
				自动刷新时间60s
				最多缓存512个引用对象
				只读
			--&gt;
			&lt;cache 
				eviction=&quot;LRU&quot;  
				flushInterval=&quot;60000&quot; 
				size=&quot;512&quot; 
				readOnly=&quot;true&quot;/&gt; 
</code></pre><h1 id="第十一章-mybatis的注解配置" tabindex="-1"><a class="header-anchor" href="#第十一章-mybatis的注解配置" aria-hidden="true">#</a> 第十一章 MyBatis的注解配置</h1><pre><code>常用注解：
	@Select				映射查询的SQL语句
	@SelectProvider		Select语句的动态SQL映射
	@Insert 			映射插入的SQL语句
	@InsertProvider		Insert语句的动态SQL映射
	@Update				映射更新的SQL语句
	@UpdateProvider		Update语句的动态SQL映射
	@Delete				映射删除的SQL语句
	@DeleteProvider		Delete语句的动态SQL映射
	@Result				在列和属性之间的单独结果映射，id  one  mane
	@Results			多个结果映射(@Result)列表
	@Options			提供配置选项的附加值，通常在映射语句上作为附加功能配置出现
	@One				复杂类型的单独属性值映射。必须指定select属性，表示已映射的SQL语句的完全限定名
	@Many				复杂类型的集合属性映射。必须指定select属性，表示已映射的SQL语句的完全限定名
	@Param				当映射器方法需要多个参数时，这个注解可以被应用于映射器方法参数来给每个参数取一个名字。否则会按顺序默认命名。

示例：
	@Select(&quot;SELECT * FROM TB_USER &quot;)
	
	@Select(&quot;SELECT * FROM TB_USER WHERE id = #{id}&quot;)
	@Results({
		@Result(id=true,column=&quot;id&quot;,property=&quot;id&quot;),
		@Result(column=&quot;name&quot;,property=&quot;name&quot;),
		@Result(column=&quot;sex&quot;,property=&quot;sex&quot;),
		@Result(column=&quot;age&quot;,property=&quot;age&quot;)
	})
	
	@Insert(&quot;INSERT INTO TB_USER(name,sex,age) VALUES(#{name},#{sex},#{age})&quot;)
	@Options(useGeneratedKeys=true,keyProperty=&quot;id&quot;)
	
	@Delete(&quot;DELETE FROM TB_USER WHERE id = #{id}&quot;)
	int removeUser(@Param(&quot;id&quot;) Integer id);
	
	@Update(&quot;UPDATE TB_USER SET name = #{name},sex = #{sex},age = #{age} WHERE id = #{id}&quot;)
</code></pre><p>​ <br> ​ <br> ​ 关联：<br> ​ =========================================================<br> ​ select属性表示需要关联执行的SQL语句<br> ​ fetchType表示查询类型是立即加载（EAGER）还是懒加载（LAZY） <br> ​ 【区别：没用时加载，用到时再加载】<br> ​ ========================================================= <br> ​ <br> 一对一关联：<br> td_person td_card</p><pre><code>		CardMapper
			@Select(&quot;SELECT * FROM TB_CARD WHERE ID = #{id} &quot;)
			Card selectCardById(Integer id);
		PersonMapper
			@Select(&quot;SELECT * FROM TB_PERSON WHERE ID = #{id}&quot;)
			@Results({
				@Result(id=true,column=&quot;id&quot;,property=&quot;id&quot;),
				@Result(column=&quot;name&quot;,property=&quot;name&quot;),
				@Result(column=&quot;sex&quot;,property=&quot;sex&quot;),
				@Result(column=&quot;age&quot;,property=&quot;age&quot;),
				@Result(column=&quot;card_id&quot;,property=&quot;card&quot;,
				one=@One(
					select=&quot;org.fkit.mapper.CardMapper.selectCardById&quot;,
					fetchType=FetchType.EAGER))
			})
			Person selectPersonById(Integer id);

	一对多关联：
		td_clazz td_student
		
		StudentMapper
			// 根据班级id查询班级所有学生
			@Select(&quot;SELECT * FROM TB_STUDENT WHERE CLAZZ_ID = #{id}&quot;)
			@Results({
				@Result(id=true,column=&quot;id&quot;,property=&quot;id&quot;),
				@Result(column=&quot;name&quot;,property=&quot;name&quot;),
				@Result(column=&quot;sex&quot;,property=&quot;sex&quot;),
				@Result(column=&quot;age&quot;,property=&quot;age&quot;)
			})
			List&lt;Student&gt; selectByClazzId(Integer clazz_id);
			
		ClazzMapper
			/ 根据id查询班级信息
			@Select(&quot;SELECT * FROM TB_CLAZZ  WHERE ID = #{id}&quot;)
			@Results({
				@Result(id=true,column=&quot;id&quot;,property=&quot;id&quot;),
				@Result(column=&quot;code&quot;,property=&quot;code&quot;),
				@Result(column=&quot;name&quot;,property=&quot;name&quot;),
				@Result(column=&quot;id&quot;,property=&quot;students&quot;,
				many=@Many(
						select=&quot;org.fkit.mapper.StudentMapper.selectByClazzId&quot;,
						fetchType=FetchType.LAZY))
			})
			Clazz selectById(Integer id);	
			
	多对多关联：
		td_user td_order td_article
		
		UserMapper
			@Select(&quot;SELECT * FROM TB_USER WHERE ID = #{id} &quot;)
			User selectById(Integer id);
		ArticleMapper
			@Select(&quot;SELECT * FROM tb_article WHERE id IN &quot;
			+&quot;(SELECT article_id FROM tb_item WHERE order_id = #{id} ) &quot;)
			List&lt;Article&gt; selectByOrderId(Integer order_id);
		OrderMapper
			@Select(&quot;SELECT * FROM TB_ORDER WHERE ID = #{id}&quot;)
			@Results({
				@Result(id=true,column=&quot;id&quot;,property=&quot;id&quot;),
				@Result(column=&quot;code&quot;,property=&quot;code&quot;),
				@Result(column=&quot;total&quot;,property=&quot;total&quot;),
				@Result(column=&quot;user_id&quot;,property=&quot;user&quot;,
					one=@One(select=&quot;org.fkit.mapper.UserMapper.selectById&quot;,
					fetchType=FetchType.EAGER)),
				@Result(column=&quot;id&quot;,property=&quot;articles&quot;,
					many=@Many(select=&quot;org.fkit.mapper.ArticleMapper.selectByOrderId&quot;,
					fetchType=FetchType.LAZY))
			})
			Order selectById(Integer id);

	动态SQL：
		
		@SelectProvider(type=EmployeeDynaSqlProvider.class,method=&quot;selectWhitParam&quot;)
		List&lt;Employee&gt; selectWhitParam(Map&lt;String, Object&gt; param);
		
		创建一个产生动态SQL的类：
			EmployeeDynaSqlProvider.java
				public String selectWhitParam(Map&lt;String, Object&gt; param){
						return new SQL(){
							{
								SELECT(&quot;*&quot;);
								FROM(&quot;tb_employee&quot;);
								if(param.get(&quot;id&quot;) != null){
									WHERE(&quot; id = #{id} &quot;);
								}
								if(param.get(&quot;loginname&quot;) != null){
									WHERE(&quot; loginname = #{loginname} &quot;);
								}
								if(param.get(&quot;password&quot;) != null){
									WHERE(&quot;password = #{password}&quot;);
								}
								if(param.get(&quot;name&quot;)!= null){
									WHERE(&quot;name = #{name}&quot;);
								}
								if(param.get(&quot;sex&quot;)!= null){
									WHERE(&quot;sex = #{sex}&quot;);
								}
								if(param.get(&quot;age&quot;)!= null){
									WHERE(&quot;age = #{age}&quot;);
								}
								if(param.get(&quot;phone&quot;)!= null){
									WHERE(&quot;phone = #{phone}&quot;);
								}
								if(param.get(&quot;sal&quot;)!= null){
									WHERE(&quot;sal = #{sal}&quot;);
								}
								if(param.get(&quot;state&quot;)!= null){
									WHERE(&quot;state = #{state}&quot;);
								}
								
							}
						}.toString();
						}	

	调用存储过程：
		@Select(&quot;{call select_user()}&quot;)
		@Options(statementType=StatementType.CALLABLE)
	
	二级缓存：
		@CacheNamespace(eviction=LruCache.class,flushInterval=60000,size=512,readWrite=true)
</code></pre><p>​</p><hr><hr><hr><p>学生 班级<br> 一对一<br> 一对多<br> 多对多</p><p>​ <br> ​ <br> ​</p>`,33),s=[a];function u(i,l){return e(),n("div",null,s)}const c=t(r,[["render",u],["__file","基础总结.html.vue"]]);export{c as default};

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-b0773e9a.js";const e={},p=t(`<p>简介，简单项目配置：</p><p>application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
<span class="token comment">#    url: jdbc:mysql://localhost:3306/db_account</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/atguigudb<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver


    <span class="token key atrule">druid</span><span class="token punctuation">:</span>
      <span class="token key atrule">aop-patterns</span><span class="token punctuation">:</span> com.atguigu.admin.*  <span class="token comment">#springbean监控</span>
      <span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall<span class="token punctuation">,</span>slf4j  <span class="token comment">#所有开启的功能</span>

      <span class="token key atrule">stat-view-servlet</span><span class="token punctuation">:</span>  <span class="token comment">#监控页配置</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">login-username</span><span class="token punctuation">:</span> admin
        <span class="token key atrule">login-password</span><span class="token punctuation">:</span> admin
        <span class="token key atrule">resetEnable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

      <span class="token key atrule">web-stat-filter</span><span class="token punctuation">:</span>  <span class="token comment">#web监控</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">urlPattern</span><span class="token punctuation">:</span> /*
        <span class="token key atrule">exclusions</span><span class="token punctuation">:</span> <span class="token string">&#39;*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*&#39;</span>


      <span class="token key atrule">filter</span><span class="token punctuation">:</span>
        <span class="token key atrule">stat</span><span class="token punctuation">:</span> <span class="token comment">#sql监控</span>
          <span class="token key atrule">slow-sql-millis</span><span class="token punctuation">:</span> <span class="token number">1000</span>
          <span class="token key atrule">logSlowSql</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">wall</span><span class="token punctuation">:</span> <span class="token comment">#防火墙</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">config</span><span class="token punctuation">:</span>
            <span class="token key atrule">drop-table-allow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>



  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> r<span class="token punctuation">-</span>bp1nc7reqesxisgxpipd.redis.rds.aliyuncs.com
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> lfy<span class="token punctuation">:</span>Lfy123456
    <span class="token key atrule">client-type</span><span class="token punctuation">:</span> jedis
    <span class="token key atrule">jedis</span><span class="token punctuation">:</span>
      <span class="token key atrule">pool</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token comment">#    url: redis://lfy:Lfy123456@r-bp1nc7reqesxisgxpipd.redis.rds.aliyuncs.com:6379</span>
<span class="token comment">#    lettuce:</span>
<span class="token comment">#      pool:</span>
<span class="token comment">#        max-active: 10</span>
<span class="token comment">#        min-idle: 5</span>



  <span class="token comment">#    type: com.zaxxer.hikari.HikariDataSource</span>
  <span class="token key atrule">jdbc</span><span class="token punctuation">:</span>
    <span class="token key atrule">template</span><span class="token punctuation">:</span>
      <span class="token key atrule">query-timeout</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">boot</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">client</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8888</span>
        <span class="token key atrule">instance</span><span class="token punctuation">:</span>
          <span class="token key atrule">prefer-ip</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#使用ip注册进来</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> boot<span class="token punctuation">-</span>05<span class="token punctuation">-</span>web<span class="token punctuation">-</span>admin




<span class="token comment"># 配置mybatis规则、使用MyBatisPlus则此项配置无效</span>
<span class="token comment">#mybatis:</span>
<span class="token comment">##  config-location: classpath:mybatis/mybatis-config.xml</span>
<span class="token comment">#  mapper-locations: classpath:mybatis/mapper/*.xml</span>
<span class="token comment">#  configuration:  # 指定mybatis全局配置文件中的相关配置项</span>
<span class="token comment">#    map-underscore-to-camel-case: true</span>


<span class="token comment"># management 是所有actuator的配置</span>
<span class="token comment"># management.endpoint.端点名.xxxx  对某个端点的具体配置</span>
<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled-by-default</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#默认开启所有监控端点  true</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span> <span class="token comment"># 以web方式暴露所有端点</span>

  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>   <span class="token comment">#对某个端点的具体配置</span>
    <span class="token key atrule">health</span><span class="token punctuation">:</span>
      <span class="token key atrule">show-details</span><span class="token punctuation">:</span> always
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

    <span class="token key atrule">info</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

    <span class="token key atrule">beans</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

    <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">appName</span><span class="token punctuation">:</span> boot<span class="token punctuation">-</span>admin
  <span class="token key atrule">appVersion</span><span class="token punctuation">:</span> 1.0.0
  <span class="token key atrule">mavenProjectName</span><span class="token punctuation">:</span> @project.artifactId@
  <span class="token key atrule">mavenProjectVersion</span><span class="token punctuation">:</span> @project.version@




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="一-spring-boot的概念" tabindex="-1"><a class="header-anchor" href="#一-spring-boot的概念" aria-hidden="true">#</a> 一，Spring Boot的概念</h1><p>spring boot是Pivotal团队提供的全新框架，<br> 其设计目的是用来“简化”spring应用的创建、运行、调试、部署等</p><p>使用spring boot可以做到专注于spring应用的开发<br> 而无需过多关注XML的配置。springboot使用“习惯优于配置&quot;的理念来实现spring<br> 应用开发的简化</p><p>使用springboot可以不用或者只需要很少的spring配置就可以让企业项目快速的运行起来</p><p>springMVC Spring Mybatis整合<br> springboot 可以简化各种框架的整合和配置，使基于spring应用的开变得更加简单和高效。</p><p>核心：<br> 内嵌的servlet容器<br> 简化的maven配置<br> 自动配置spring<br> 自动化配置框架的整合</p><h1 id="二-开发第一个springboot应用" tabindex="-1"><a class="header-anchor" href="#二-开发第一个springboot应用" aria-hidden="true">#</a> 二，开发第一个springboot应用</h1><p>springboot应用是基于maven开发</p><p>1.在pom.xml文件中配置springboot的核心启动器</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--spring-boot-starter-parent是Spring Boot的核心启动器，
	包含了自动配置、日志和YAML等大量默认的配置，大大简化了我们的开发。
	引入之后相关的starter引入就不需要添加version配置，
	spring boot会自动选择最合适的版本进行添加。
--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.0.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要导入了springboot的核心启动器，后续的依赖版本就需要自己指定了<br> 因为springboot会自己选择合适的版本关联</p><p>2.加入一个web开发的启动器</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token comment">&lt;!-- spring-boot-starter-web包含了Spring Boot预定义的一些Web开发的常用依赖包如: spring-webmvc,Tomcat.... --&gt;</span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.定义一个控制器Controller<br> SpringBoot的自动扫描是以启动类App.java为基准扫描与app类同级的所有包，以及所有的子包 。</p><h1 id="三-spring的自动化配置" tabindex="-1"><a class="header-anchor" href="#三-spring的自动化配置" aria-hidden="true">#</a> 三，spring的自动化配置</h1><pre><code>框架的整合以及配置文件的配置都是自动配置好的，无需程序员理会

spring.factories文件
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration相当于springmvc-servlet.xml文件

@Configuration -&gt;xml文件
@Bean -&gt;&lt;bean&gt;

类相当于配置文件
</code></pre><h1 id="功能详解" tabindex="-1"><a class="header-anchor" href="#功能详解" aria-hidden="true">#</a> 功能详解：</h1><h2 id="一、spring-boot-数据访问" tabindex="-1"><a class="header-anchor" href="#一、spring-boot-数据访问" aria-hidden="true">#</a> 一、spring boot 数据访问</h2><p>​ WEB应用中，数据访问相当重要<br> ​ spring boot数据访问方式：<br> ​ Spring Data<br> ​ Spring Data JPA<br> ​ JdbcTemplate<br> ​ Mybatis<br> ​ 数据访问的进化：<br> ​ JDBC &gt; Mybatis(半自动化) &gt; Hibernate(全自动化) &gt; JPA &gt; Spring Data<br> ​ <br> 1.在spring boot中使用spring data JPA访问数据库<br> ​ spring data JPA是属于spring data项目的</p><pre><code>spring data是如何简化hibernate开发的？
  spring data项目提供了很多核心接口
  这些接口已经封装了对数据库操作的API
  我们项目的数据访问层接口只要继承这些核心接口
  就拥有了对数据库的CRUD访问操作。

spring data的核心接口：
  Repository
    /
    CrudRepository
      /
      PagingAndSortingRepository(多了分页和排序功能)
        /
	JpaRepository(spring data JPA)

	（1）开始使用CrudRepository操作数据库
	a.在pom.xml中加入springboot整合spring data的核心启动器

	&lt;dependency&gt;
		&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		&lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
	&lt;/dependency&gt;

	b.因为要访问数据库，所以需要配置访问数据库的基本信息

	在全局配置文件中application.properties配置

	c.定义数据访问层接口，继承CrudRepository
	（2）PagingAndSortingRepository
	     分页  ， 排序。

	（3）JpaRepository

	（4）简单的条件查询，根据接口的方法名称确定的

	（5）多表查询，关联查询
	Student     Clazz
	N              1
	使用@Query 写SQL语句
	DML  @Modifying
	@NameQuery
	（6）动态查询
	继承接口Specification

	public List&lt;Map&lt;String, Object&gt;&gt; getStusDynamic(Student student) {
	
	List&lt;Student&gt; stus=studentRepository.findAll(new Specification&lt;Student&gt;() {
		@Override
		public Predicate toPredicate(Root&lt;Student&gt; root, CriteriaQuery&lt;?&gt; query,
				CriteriaBuilder cb) {
			//封装动态条件
			//root-&gt;代表了Student表 select s from Student s
			//cb -&gt;构建动态条件
			//本集合用于封装查询条件
			List&lt;Predicate&gt; predicates = new ArrayList&lt;Predicate&gt;();  
			
			if(student!=null){
				/** 是否传入了姓名来查询  */
				if(!StringUtils.isEmpty(student.getName())){
					//and s.name like  &quot;%&quot;+student.getName()+&quot;%&quot;
					predicates.add(cb.like(root.&lt;String&gt; get(&quot;name&quot;),&quot;%&quot; + student.getName() + &quot;%&quot;));
				}
				/** 是否传入了地址来查询  */
				if(!StringUtils.isEmpty(student.getAddress())){
					predicates.add(cb.like(root.&lt;String&gt; get(&quot;address&quot;),&quot;%&quot; + student.getAddress() + &quot;%&quot;));
				}
				/** 是否传入了性别来查询 */
				if(student.getSex() != &#39;\\0&#39;){
						predicates.add(cb.equal(root.&lt;String&gt; get(&quot;sex&quot;),student.getSex()));
					}
					/** 判断是否传入了班级信息来查询 */
					if(student.getClazz()!=null &amp;&amp; !StringUtils.isEmpty(student.getClazz().getName())){
						//s.clazz
						root.join(&quot;clazz&quot;, JoinType.INNER);
						//s.clazz.name
						Path&lt;String&gt; clazzName = root.get(&quot;clazz&quot;).get(&quot;name&quot;);
						//s.clazz.name=student.getClazz().getName()
						predicates.add(cb.equal(clazzName, student.getClazz().getName()));
					}
				}
				return query.where(predicates.toArray(new Predicate[predicates.size()])).getRestriction();
</code></pre><p>​ <br> ​ <br> ​ <br> ​ }<br> ​ });<br> ​ //stus动态查询的<br> ​ List&lt;Map&lt;String,Object&gt;&gt; studatas=new ArrayList&lt;&gt;();<br> ​ if(stus!=null &amp;&amp; stus.size()&gt;0) {<br> ​ stus.forEach(s -&gt; {<br> ​ Map&lt;String,Object&gt; data = new HashMap&lt;&gt;();<br> ​ data.put(&quot;name&quot;, s.getName());<br> ​ data.put(&quot;age&quot;, s.getAge());<br> ​ data.put(&quot;sex&quot;, s.getSex());<br> ​ data.put(&quot;address&quot;, s.getAddress());<br> ​ data.put(&quot;clazzName&quot;, s.getClazz().getName());<br> ​ studatas.add(data); <br> ​ });<br> ​ }<br> ​ return studatas;<br> ​ }</p><p>3.Spring Boot使用JdbcTemplate</p><p>4.Spring Boot整合Mybatiss</p><p>对于mybatis框架来说，需要告诉他数据访问层接口的位置：<br> ---因为Mybatis框架要为数据访问层接口做实现类对象<br> 以及持久化类的位置：<br> ---因为要为实体类做别名</p><p>再主类中使用注解表明注解地址<br> //扫描数据访问层接口的包名<br> @MapperScan(&quot;crudrepository.repository&quot;)</p><h1 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧" aria-hidden="true">#</a> 使用技巧：</h1><p>1.热部署</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- Spring Boot spring-boot-devtools 依赖 热部署插件 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 添加spring-boot-maven-plugin --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
					<span class="token comment">&lt;!-- 如果没有该项配置，devtools不会起作用，即应用不会restart --&gt;</span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fork</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fork</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.单元测试<br> 引入依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- spring-boot-starter-test 依赖.... --&gt;</span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>3.Spring Security</p><pre><code>一个强大且高度可定制的身份验证和访问控制框架

安全框架主要包含两个框架：
	认证：确认用户可以访问当前系统
	授权：确定用户在当前系统中是否能够执行某个操作，即用户所拥有的功能权限

spring security包含多个模块：
	核心模块
	远程调用
	Web网页
	配置
	LDAP
	ACL访问控制表
	CAS
	OpenID
	Test

&lt;!-- 添加spring-boot-starter-security 依赖 --&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>`,36),l=[p];function i(o,c){return s(),a("div",null,l)}const d=n(e,[["render",i],["__file","基础总结.html.vue"]]);export{d as default};

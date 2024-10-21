import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as l,d as t,f as i,w as c,b as a,e as n}from"./app-6337abed.js";const u={},r=a(`<h1 id="spring的基本用法" tabindex="-1"><a class="header-anchor" href="#spring的基本用法" aria-hidden="true">#</a> Spring的基本用法：</h1><p>​ <code>spring是一个很普通但很实用的一个框架，它提取了大量实际开发中需要重复解决的步骤，将这些步骤抽象成一个框架。</code></p><h2 id="_1-spring简介" tabindex="-1"><a class="header-anchor" href="#_1-spring简介" aria-hidden="true">#</a> 1.spring简介：</h2><ul><li>spring5<br> - Spring Core Container(即Spring容器)代表了Spring框架的核心机制。<br> ​</li></ul><h2 id="_2-spring入门" tabindex="-1"><a class="header-anchor" href="#_2-spring入门" aria-hidden="true">#</a> 2.spring入门：</h2><p><code>21个jar包</code></p><ul><li><p>实用spring管理bean：</p><ul><li><p>spring核心容器理论：spring核心容器就是一个超级大工厂，所有的对象都会被当成spring核心容器管理的对象。</p></li><li><p>Spring对Bean没有任何要求，只要是java类，将会当作bean处理</p></li><li><p>对于Spring框架而言，一切Java对象都是Bean。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
					...
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>spring通过反射机制从xml文件中获取bean对象：</p><ul><li><p>​ spring底层大概的执行代码：</p><ul><li><p>创建bean：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> idStr<span class="token operator">=</span>bean中的id<span class="token punctuation">;</span>
<span class="token class-name">String</span> classStr<span class="token operator">=</span>bean中的<span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span> clazz<span class="token operator">=</span><span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>classStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span> obj<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
spring的容器container<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>idStr<span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置参数（调用setter方法）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> nameStr<span class="token operator">=</span>属性的name<span class="token punctuation">;</span>
<span class="token class-name">String</span> refStr<span class="token operator">=</span>属性的引用ref，某一个bean的id 或某个value参数值<span class="token punctuation">;</span>
<span class="token class-name">String</span> setterName<span class="token operator">=</span><span class="token string">&quot;set&quot;</span><span class="token operator">+</span>nameStr<span class="token punctuation">.</span><span class="token function">subString</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>nameStr<span class="token punctuation">.</span><span class="token function">subString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>生成方法名 setName
<span class="token class-name">Object</span> paramBean<span class="token operator">=</span>container<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>refStr<span class="token punctuation">)</span>
<span class="token class-name">Method</span> setter<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>setterName<span class="token punctuation">,</span>paramBean<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
setter<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>paramBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>在程序中访问bean:</p><ul><li><p>​ <code>ApplicationContext</code>是最常用的接口， 有两个实现类：</p><ul><li><p><code>ClassPathXmlApplicationContext</code> 从类加载路径下搜索配置文件，并根据配置文件创建spring容器</p></li><li><p><code>FileSystemXmlApplicationContext</code> 从文件系统的相对路径或绝对路径中搜索配置文件，并根据配置文件创建spring容器</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ApplicationContext</span> ctx<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;beans.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span> p<span class="token operator">=</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">,</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>获取对象的两个方法：</p><ul><li><p><code>Object getBean(String id)</code> 需要强制类型转换:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>T getBean(String id,Class&lt;T&gt; requiredType)</code> 无需进行强制类型转换：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> p<span class="token operator">=</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">,</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul></li></ul></li></ul></li></ul><h2 id="_3-spring的核心机制-依赖注入" tabindex="-1"><a class="header-anchor" href="#_3-spring的核心机制-依赖注入" aria-hidden="true">#</a> 3.Spring的核心机制：依赖注入：</h2><ul><li><p>Spring框架的核心功能有两个：</p><ol><li><p>Spring容器作为超级大工厂，负责创建、管理所有的Java对象，这些Java对象被称为Bean</p></li><li><p>Spring容器管理容器中Bean之间的依赖关系，使用一种被称为“依赖注入”的方式来管理Bean之间的依赖关系</p></li></ol></li><li><p>理解依赖注入：</p><ul><li>调用者无须主动获取被调用者，只要被动接受Spring容器为其赋值即可（<code>&lt;property /&gt;</code>通过该子元素赋值）</li><li>调用者获取依赖对象的方式由原来的主动获取，变成了被动接受，所以又被称为控制反转。</li></ul></li><li><p>依赖注入的两种注入方式：</p><ul><li>设值注入：IoC容器使用成员变量的setter方法来注入被依赖对象</li><li>构造注入：IoC容器使用构造器来注入被依赖对象</li><li>Spring IoC容器的三个基本要点： <ol><li>应用程序的各组件面向接口编程</li><li>应用程序的各组件不再由程序主动创建，而是由Spring容器来负责产生并实例化</li><li>Spring采用配置文件或注解来管理bean的实现类、依赖关系。Spring容器根据配置文件或注解，利用反射来创建梳理，并为之注入依赖关系。</li></ol></li><li>两种方式对比： <ul><li>建议采用以设值注入为主，构造注入为辅的注入策略。 <ul><li>对于依赖关系无需变化的注入，尽量采用构造注入；</li><li>而对于其他依赖关系的注入，则考虑采用设值注入。</li></ul></li></ul></li></ul></li></ul><h2 id="_4-使用spring容器" tabindex="-1"><a class="header-anchor" href="#_4-使用spring容器" aria-hidden="true">#</a> 4.使用spring容器：</h2><ul><li>核心接口（获取spring容器）：<code>BeanFactory </code>和<code>ApplicationContext</code></li></ul><p><code>ApplicationContext</code>是<code>BeanFactory</code>的子接口</p><ul><li><p><code>ApplicationContext</code>:</p><p>当系统创建<code>ApplicationContext</code>容器时，默认会预初始化所有的singleton Bean 可在<code>&lt;bean&gt;</code>中设置 <code>lazy-init=&quot;true&quot;</code>改变默认预初始化</p></li><li><p><code>ApplicationContext</code>国际化</p></li><li><p><code>ApplicationContext</code>的事件机制:</p><ul><li>通过<code>ApplicationEvent</code>类和<code>ApplicationListener</code>接口实现事件处理</li><li>如果容器中有一个<code>ApplicationListener Bean</code>，每当<code>ApplicationContex</code>t发布<code>ApplicationEvent</code>时，<code>ApplicationListener Bean</code>将自动被触发。</li><li>容器事件监听器可以监听事件。 <ul><li>除此之外，程序也就二调用<code>ApplicationContex</code>的<code>publishEvent()</code>方法来触发容器事件。</li></ul></li></ul></li><li><p>让Bean获取Spring容器：</p><ul><li><p>接口有一个方法：<code>setBeanFactory(BeanFactory beanFactory)</code></p></li><li><p>spring容器会检测容器中的所有Bean，如果发现某个Bean实现了<code>ApplicationContextAware</code>接口，</p><p>Spring容器会在创建该Bean后，自动调用该方法，调用该方法时，会将容器本身作为参数传给该方法。</p></li><li><p>示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> ctx<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token operator">=</span>ctx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-spring容器中的bean" tabindex="-1"><a class="header-anchor" href="#_5-spring容器中的bean" aria-hidden="true">#</a> 5.Spring容器中的Bean:</h2></li></ul></li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>		Bean的基本定义和Bean别名：
<span class="token key attr-name">			&lt;bean</span> <span class="token value attr-value">id=&quot;person&quot; class=&quot;...&quot; name=&quot;#abc,@123,abc*&quot; /&gt;</span>
<span class="token key attr-name">			&lt;alias</span> <span class="token value attr-value">name=&quot;person&quot; alias=&quot;jack&quot; /&gt;</span>
<span class="token key attr-name">			&lt;alias</span> <span class="token value attr-value">name=&quot;jack&quot; alias=&quot;jackee&quot; /&gt;</span>
			
		容器中Bean的作用域：
<span class="token key attr-name">			singleton</span> <span class="token value attr-value">单例模式</span>
<span class="token key attr-name">			prototype</span> <span class="token value attr-value">每调用一次getBean就创建一个新的Bean实例</span>
<span class="token key attr-name">				&lt;bean</span> <span class="token value attr-value">id=&quot;...&quot; class=&quot;...&quot; scope=&quot;prototype&quot; /&gt;</span>
			
		配置依赖：
			
		设置普通属性值：
			value用于指定基本类型及其包装、字符串类型的参数值
<span class="token key attr-name">				&lt;property</span> <span class="token value attr-value">name=&quot;&quot; value=&quot;&quot;/&gt;</span>
		
<span class="token key attr-name">		配置合作者Bean</span><span class="token punctuation">:</span>
			属性值是另一个Bean的实例
<span class="token key attr-name">			&lt;property</span> <span class="token value attr-value">name=&quot;&quot; ref=&quot;&quot;/&gt;</span>
		
<span class="token key attr-name">		使用自动装配注入合作者Bean</span><span class="token punctuation">:</span>
			不推荐使用
		
<span class="token key attr-name">		注入嵌套Bean</span><span class="token punctuation">:</span>
<span class="token key attr-name">			&lt;bean</span> <span class="token value attr-value">...&gt;</span>
<span class="token key attr-name">				&lt;property</span> <span class="token value attr-value">...&gt;</span>
<span class="token key attr-name">					&lt;bean</span> <span class="token value attr-value">class=&quot;...&quot;/&gt;无需id属性，spring容器不能访问嵌套bean</span>
				&lt;/property&gt;
			&lt;/bean&gt;
		
		组合属性：
<span class="token key attr-name">			先getBean()</span> <span class="token value attr-value">然后再setter()</span>
<span class="token key attr-name">			&lt;bean</span> <span class="token value attr-value">id=&quot;a&quot; class=&quot;...&quot;&gt;</span>
<span class="token key attr-name">				&lt;property</span> <span class="token value attr-value">name=&quot;foo.bar.x.y&quot; value=&quot;xxx&quot; /&gt;</span>
			&lt;/bean&gt;
			相当于：
				a.getFoo().getBar().getX().setY(&quot;xxx&quot;);
		
<span class="token key attr-name">		Spring的Bean</span> <span class="token value attr-value">和JavaBean:</span>
			javabean通常作为DTO（数据传输对象）,用来封装值对象，再各层之间传递数据。
<span class="token key attr-name">			 spring的Bean</span> <span class="token value attr-value">无所不包，任何组件都可被称为Bean</span>
		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-spring提供的java配置管理" tabindex="-1"><a class="header-anchor" href="#_6-spring提供的java配置管理" aria-hidden="true">#</a> 6.Spring提供的Java配置管理：</h2><ul><li>以xml为主，Java类配置为辅</li><li>以Java类配置为主，xml为辅</li></ul><h2 id="_7-创建bean的三种方式" tabindex="-1"><a class="header-anchor" href="#_7-创建bean的三种方式" aria-hidden="true">#</a> 7.创建bean的三种方式：</h2><ul><li><p>调用构造器创建Bean</p></li><li><p>调用静态工厂方法创建Bean</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>静态工厂类<span class="token punctuation">&quot;</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>工厂方法<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>调用实例工厂方法创建Bean</p><ul><li><p>先将工厂实例化为bean</p></li><li><p>然后：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token attr-name">factory-bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>工厂bean的id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>方法<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="_8-深入理解容器中的bean" tabindex="-1"><a class="header-anchor" href="#_8-深入理解容器中的bean" aria-hidden="true">#</a> 8.深入理解容器中的Bean:</h2><pre><code>	抽象Bean和子bean:
			抽象：
				&lt;bean id=&quot;parentId&quot; class=&quot;...&quot; abstract=&quot;true&quot; /&gt;
			子：
				&lt;bean id=&quot;...&quot; class=&quot;...&quot; parent=&quot;parentId&quot; /&gt;
	Bean继承与Java继承：
		不同
	
	容器中的工厂Bean:
		FactoryBean
		获取的是工厂bean的getObject()方法获取的值
	
	获得Bean本身的id:
		实现BeanNameAware接口
		提供方法：
			setBeanName(String name)
	
	强制初始化Bean:
		可以在初始化主调Bean之前，强制初始化一个或多个Bean
			&lt;bean id=&quot;a&quot; class=&quot;...&quot; depends-on=&quot;b&quot; /&gt;
			&lt;bean id=&quot;b&quot; class=&quot;...&quot; /&gt;
</code></pre><h2 id="_9-容器中bean的生命周期" tabindex="-1"><a class="header-anchor" href="#_9-容器中bean的生命周期" aria-hidden="true">#</a> 9.容器中Bean的生命周期：</h2><pre><code>	singleton作用域的Bean，Spring 可完全管理
		prototype作用域的Bean,Spring 只负责创建，然后交给客户端后，容器不在跟踪其生命周期
	管理Bean的生命周期行为主要有如下两个时机：
		1.注入依赖关系之后
		2.即将销毁Bean之前
	
	依赖关系注入之后的行为：
		使用init-method属性 指定某个方法在Bean全部依赖关系设置结束后自动执行。
		实现InitializingBean接口
		
	Bean销毁之前的行为：
		使用destory-method属性	指定某个方法在Bean销毁之前被自动执行
		实现DisposableBean接口
	
	协调作用域不同步的Bean:
		方法注入
		&lt;lookup-method name=&quot;...&quot; bean=&quot;...&quot;/&gt;
</code></pre><h2 id="_10-高级依赖关系配置" tabindex="-1"><a class="header-anchor" href="#_10-高级依赖关系配置" aria-hidden="true">#</a> 10.高级依赖关系配置：</h2><p>将任意方法的返回值、类或对象的Field值、其他Bean的getter方法返回值，直接定义成容器中的一个Bean</p><h2 id="_11-基于xml-schema的简化配置方式" tabindex="-1"><a class="header-anchor" href="#_11-基于xml-schema的简化配置方式" aria-hidden="true">#</a> 11.基于XML Schema的简化配置方式：</h2><pre><code>	使用p:命名空间简化配置：【简化设值注入】
		p:命名空间不需要特定的Schema定义，它直接存在于Spring内核中
		可直接使用属性来配置参数值
		&lt;beans ...
				xmlns:p=&quot;http://www.springframework.org/schema/p&quot;&gt;
			&lt;bean id=&quot;...&quot; class=&quot;...&quot; p:age=&quot;22&quot; p:axe-ref=&quot;Bean的id&quot; /&gt;
			...
		&lt;/beans&gt;
		如果某属性名是以&quot;-ref&quot;结尾，则会引起冲突。
	
	使用c:命名空间简化配置：【简化构造注入】
		&lt;beans ...
				xmlns:c=&quot;http://www.springframework.org/schema/c&quot;&gt;
			&lt;bean id=&quot;...&quot; class=&quot;...&quot; c:age=&quot;22&quot; c:axe-ref=&quot;Bean的id&quot; /&gt;
			...
		&lt;/beans&gt;
	
	使用util:命名空间简化配置:
		必须导入最新的spring-util.xsd
		
		util Schema提供如下几个元素：
			constant	获取指定类的静态Field的值
			property-path	获取指定对象的getter方法的返回值
			list	定义一个List Bean
			set	定义一个Set Bean	
			map	定义一个Map Bean
			properties	加载一份资源文件，并根据加载的资源文件创建一个Properties Bean实例
			
			&lt;util:constant id=&quot;chin.age&quot; static-field=&quot;java.sql.Connection.TRANSACTION_SERIALIZABLE&quot; /&gt;
			
			&lt;util:properties id=&quot;confTest&quot; location=&quot;classpath:test_zh_CN.properties&quot; /&gt;
			
			&lt;util:list id=&quot;chin.schools&quot; list-class=&quot;java.util.LinkedList&quot;&gt;
				&lt;value&gt;小学&lt;/value&gt;
				&lt;value&gt;中学&lt;/value&gt;
				&lt;value&gt;大学&lt;/value&gt;
			&lt;/util:list&gt;
			
			&lt;util:set id=&quot;chin.axes&quot; set-class=&quot;java.util.HashSet&quot;&gt;
				&lt;value&gt;字符串&lt;/value&gt;
				&lt;bean class=&quot;...&quot;/&gt;
				&lt;ref bean=&quot;stoneAxe&quot;/&gt;
			&lt;/util:set&gt;
			
			&lt;util:map id=&quot;chin.scores&quot; map-class=&quot;java.util.TreeMap&quot;&gt;
				&lt;entry key=&quot;语文&quot; value=&quot;99&quot; /&gt;
				&lt;entry key=&quot;数学&quot; value=&quot;99&quot; /&gt;
				&lt;entry key=&quot;英语&quot; value=&quot;99&quot; /&gt;
			&lt;/util:map&gt;
</code></pre><h2 id="_12-spring提供的表达式语言-spel" tabindex="-1"><a class="header-anchor" href="#_12-spring提供的表达式语言-spel" aria-hidden="true">#</a> 12.Spring提供的表达式语言(SpEL):</h2><pre><code>	在运行时查询和操作对象图
	
	使用Expression接口进行表达式求值：
		SpEL的三个接口：
			ExpressionParser:	负责解析一个SpEL表达式，返回一个Expression对象
			Expression:			该接口的实例代表一个表达式
			EvaluationContext:	代表计算表达式值得上下文
		
		Expression包含的方法：
			Object getValue():	计算表达式的值
			&lt;T&gt; T getValue(Class&lt;T&gt; desiredResultType)：	计算表达式的值，并尝试将该值当成desiredResultType类型处理
			Object getValue(EvaluationContext context):		用指定的EvaluationContext来计算表达式的值
			&lt;T&gt; T getValue(EvaluationContext context,Class&lt;T&gt; desiredResultType)
			Object getValue(Object rootObject):		以rootObject作为表达式的root对象来计算表达式的值
			&lt;T&gt; T getValue(Object rootObject，Class&lt;T&gt; desiredResultType)：
	
	Bean定义中的表达式语言支持：
		在XML配置文件和注解中使用SpEL时，在表达式外面增加#{}包围即可
	
	SpEL语法详述：
		1.直接量表达式：
			就是在表达式中使用Java语言支持的直接量，包括字符串、日期、数值、boolean值和null。
			
		2.在表达式中创建数组：
			支持使用静态初始化、动态初始化两种语法来创建数组
			
		3.在表达式中创建List集合：
			{ele1,ele2,ele3 ...}
		
		4.在表达式中访问List,Map等集合元素：
			list[index]
			map[key]
		
		5.调用方法：
			和Java一样
		
		6.算术、比较、逻辑、赋值、三目等运算符：
		
		7.类型运算符：
			T()将括号内的字符串当成“类”处理
		
		8.调用构造器：
			直接使用new 来调用构造器
		
		9.变量：
			允许通过EvaluationContext来使用变量，该对象包含了一个setVariable(String name,Object value)方法，该方法用于设置一个变量。
				在EvaluationContext中设置了变量，就可以在SpEL中通过#name来访问该变量。
			#name
			#this	引用SpEL当前正在计算的对象
			#root	引用SpEL的EvaluationContext的root对象
		
		10.自定义函数：
			为Java方法重新起个名字
			registerFunction(String name,Method m)	将m方法注册成自定义函数，该函数的名称为name
		
		11.Elvis运算符：
			name != null? name:&quot;newVal&quot;
			简化为：
				name?:&quot;newVal&quot;
		12.安全导航操作：
			foo?.bar	若foo为空，直接返回null，不会导致NullPointerException
			
		13.集合选择：
			collection.?[condition_expr]
				&quot;#myList.?[length()&gt;7]&quot;
		
		14.集合投影：
			collection.![condition_expr]
				把collection集合中的元素依次传入condition_expr中，每个元素得到一个新结果，所有计算出来的结果组成的新结果就是该表达式的返回值
		
		15.表达式模板：
			允许在“直接量表达式”中插入一个或多个#{expr}，#{expr}将会被动态计算出来。
</code></pre><h1 id="深入使用spring" tabindex="-1"><a class="header-anchor" href="#深入使用spring" aria-hidden="true">#</a> 深入使用Spring:</h1><h2 id="_1-两种后处理器" tabindex="-1"><a class="header-anchor" href="#_1-两种后处理器" aria-hidden="true">#</a> 1.两种后处理器：</h2><pre><code>	开发者可以通过后处理器对IoC容器进行扩展
	Bean后处理器：对容器中的Bean进行后处理，对Bean进行额外加强
	容器后处理器：对IoC容器进行后处理，用于增强容器功能
	
	Bean后处理器：
		必须实现BeanPostProcessor接口
			接口包含两个方法：
				Object postProcessBeforeInitialization(Object bean,String name) throws BeansException
				Object postProcessAfterInitialization(Object bean,String name) throws BeansException
		
		Spring常用的两个后处理器：
			BeanNameAutoProxyCreator:		根据Bean实例的name属性，创建Bean实例的代理
			DefaultAdvisorAutoProxyCreator:	根据提供的Advisor，对容器中的所有Bean实例创建代理
		
	容器后处理器：
		必须实现BeanFactoryPostProcessor接口
			接口包含一个方法：
				postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory)
		
		PropertyPlaceholderConfigurer:属性占位符配置器
			&lt;context:property-placeholder location=&quot;classpath:dbconn.properties&quot; /&gt;
			使用：
				&quot;$(jdbc.url)&quot;
			属性文件dbconn.properties:
				jdbc.driverClassName=com.mysql.cj.jdbc.Driver
				jdbc.url=
				jdbc.username=
				jdbc.password=
		
		PropertyOverrideConfigurer:重写占位符配置器 【直接覆盖bean的值】
			&lt;context:property-override location=&quot;classpath:db.properties&quot; /&gt;
	
			db.properties:
				dataSource.driverClass=
				dataSource.jdbcUrl=
				dataSource.user=
				dataSource.password=
</code></pre><h2 id="_2-spring的-零配置-支持" tabindex="-1"><a class="header-anchor" href="#_2-spring的-零配置-支持" aria-hidden="true">#</a> 2.Spring的“零配置”支持：</h2><pre><code>	搜索Bean类：
			注解：
				@Component	标注一个普通的SpringBean类
				@Controller	标注一个控制器组件类
				@Service	标注一个业务逻辑组件类
				@Respository	标注一个DAO组件类
				&lt;context:component-scan base-package=&quot;app.service&quot;/&gt;
	指定Bean的作用域：
		@Scope(&quot;prototype&quot;)
	
	使用@Resource和@Value配置依赖：	
		@Resource name值，需要被注入的Bean实例的id  相当于&lt;property.../&gt;元素的ref属性
		@Value 相当于&lt;property.../&gt;元素的value属性
	
	使用@PostConstruct和@PreDestory定制生命周期行为：
		前者用于注解Bean的初始化方法
		后者用于注解Bean销毁之前的方法			
	
	使用@DependsOn和@Lazy改变初始化行为：
		前者用于强制初始化其他Bean
		后者用于指定该Bean是否取消预初始化
		@DependsOn({&quot;steelAxe&quot;,&quot;abc&quot;})
		@Lazy(true)
	
	自动装配和精确装配：
		@Autowired 标注setter时，默认采用byType自动装配策略
		@Primary 修饰特定Bean类，当自动装配出现冲突时，选择该注解修饰的Bean
	
	使用@Required检查注入：
		@Required修饰方法，若被修饰的方法没有配置注入，则报出异常，以防止程序运行时引发NPE异常，而找不到出错点。
</code></pre><h2 id="_3-资源访问" tabindex="-1"><a class="header-anchor" href="#_3-资源访问" aria-hidden="true">#</a> 3.资源访问：</h2><pre><code>	程序访问资源（各种类型的文件，二进制流）
	
	URL：
		java.net.URL 
	
	Spring改进Java资源访问的策略，提供Resource接口
		该接口是所有资源访问类所实现的接口：
			Resource接口的方法;
				getInputStream()
				exists()
				isOpen()
				getDescription()
				getFile()
				getURL()
				
	Spring提供的Resource实现类：
		UrlResource
		ClassPathResource	对于web应用，ClassPathResource可以自动搜索位于WEB-INF/classes下的资源文件
		FileSystemResource
		ServletContextResource 访问应用的相关资源
		InputStreamResource
		ByteArrayResource	访问字节数组
		针对不同的底层资源，这些实现类提供响应的资源访问逻辑，并提供便捷的包装，以利于客户端程序的资源访问
		
		示例：	
			UrlResource ur=new UrlResource(&quot;file:book.xml&quot;);
			
			ClassPathResource：
				显示创建：ClassPathResource cr=new ClassPathResource(&quot;book.xml&quot;);
				常用隐式创建：spring识别字符串参数包含classpath:前缀后，系统会自动创建ClassPathResource对象
			
			FilePathResource：
				显示创建：FilePathResource fr=new FilePathResource(&quot;book.xml&quot;);
				常用隐式创建：spring识别字符串参数包含file:前缀后，系统会自动创建FilePathResource对象
			
			ServletContextResource：
				// 从Web Context下的WEB-INF路径下读取book.xml资源
				ServletContextResource src = new ServletContextResource(application , &quot;WEB-INF/book.xml&quot;);
				可以访问WEB-INF中的资源了
			
			访问字节数组资源：
				InputStreamResource效率低，尽量使用ByteArrayResource或FileSystemResource替代它
				先从InputStream流中读出字节数组，然后以字节数组来创建ByteArrayResource。这样，InputStreamResource被转换为ByteArrayResource，从而方便多次读取。
	
	ResourceLoader接口和ResourceLoaderAware接口：
		ResourceLoader接口：实现类的示例可以获得一个Resource示例
		ResourceLoaderAware接口：实现类的示例可以获得一个ResourceLoader的引用
		
		ResourceLoader接口的方法：
			Resource getResource(String location) 
				ApplicationContext的实现类都实现了ResourceLoader接口，因此可直接获取Resource示例
	
	使用Resource作为属性：
		&lt;bean id=&quot;test&quot; class=&quot;org.crazyit.app.service.TestBean&quot;
			p:res=&quot;classpath:book.xml&quot;/&gt;
	
	在ApplicationContext中使用资源：
		显式声明：
			ApplicationContext ctx = new ClassPathXmlApplicationContext(&quot;beans*.xml&quot;);
			ApplicationContext ctx = new FileSystemXmlApplicationContext(&quot;beans.xml&quot;);
</code></pre><h2 id="_4-spring的aop" tabindex="-1"><a class="header-anchor" href="#_4-spring的aop" aria-hidden="true">#</a> 4.Spring的AOP：</h2><p><code>OOP将程序分解成各个层次的对象，从静态角度考虑程序结构</code></p><p><code>AOP将程序运行过程分解成各个切面，从动态角度考虑程序运行过程</code></p>`,38),d=t("li",null,[t("p",null,"为什么需要AOP："),t("ul",null,[t("li",null,"AOP专门用于处理系统中分布于各模块（不同方法）中的交叉关注点的问题。"),t("li",null,[n("在Java EE应用中，常常用AOP来处理一些具有横切性质的系统级服务， "),t("ul",null,[t("li",null,"如事务管理、安全检查、缓存、对象池管理等。")])])])],-1),k=t("p",null,"使用AspectJ实现AOP：",-1),v=a(`<li><p>AspectJ是一个基于Java语言的AOP框架</p></li><li><p>AspectJ主要包括两部分：</p><ul><li>定义如何表达、定义AOP编程中的语法规范</li><li>工具部分，包括编译器、调试工具等</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>			<span class="token comment">// 指定在执行org.crazyit.app.service包中任意类的、任意方法之前执行下面代码块</span>
			<span class="token comment">// 第一个星号表示返回值不限；第二个星号表示类名不限；</span>
			<span class="token comment">// 第三个星号表示方法名不限；圆括号中..代表任意个数、类型不限的形参</span>
			<span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">execution</span><span class="token punctuation">(</span><span class="token operator">*</span> org<span class="token punctuation">.</span>crazyit<span class="token punctuation">.</span>app<span class="token punctuation">.</span>service<span class="token punctuation">.</span>*<span class="token punctuation">.</span>*<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;模拟进行权限检查...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			
			<span class="token comment">// 定义一个PointCut，其名为logPointcut，</span>
			<span class="token comment">// 该Pointcut代表了后面给出的切入点表达式，这样可复用该切入点表达式</span>
			pointcut <span class="token function">logPointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token operator">:</span><span class="token function">execution</span><span class="token punctuation">(</span><span class="token operator">*</span> org<span class="token punctuation">.</span>crazyit<span class="token punctuation">.</span>app<span class="token punctuation">.</span>service<span class="token punctuation">.</span>*<span class="token punctuation">.</span>*<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">logPointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;模拟记录日志...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		
			<span class="token comment">// 指定在执行org.crazyit.app.service包中任意类的、任意方法时执行下面代码块</span>
			<span class="token class-name">Object</span> <span class="token function">around</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token operator">*</span> org<span class="token punctuation">.</span>crazyit<span class="token punctuation">.</span>app<span class="token punctuation">.</span>service<span class="token punctuation">.</span>*<span class="token punctuation">.</span>*<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;模拟开启事务...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">// 回调原来的目标方法</span>
				<span class="token class-name">Object</span> rvt <span class="token operator">=</span> <span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;模拟结束事务...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> rvt<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>AOP的基本概念：</p><ul><li>AOP框架能处理程序执行中特定的切入点(Pointcut)，而不与具体类耦合</li><li>AOP框架两个特征： <ul><li>1.各步骤之间的良好隔离性</li><li>2.源代码无关性</li></ul></li><li>关于切面编程的一些术语： <ul><li>切面（Aspect）：切面用于组织多个Advice,Advice放在切面中定义</li><li>连接点（Joinpoint）：程序执行过程中明确的点，如方法的调用，或者异常的抛出。</li><li>增强处理（Advice）：AOP框架在特定的切入点执行的增强处理。处理有“around”，“before”，“after”等类型</li><li>切入点（Pointcut）: 可以增强处理的连接点。连接点被添加增强处理，该连接点就变成了切入点。如何使用表达式来定义切入点是AOP的核心。</li><li>引入：将方法或字段添加到被处理的类中</li><li>目标对象：被AOP框架进行增强处理的对象</li><li>AOP代理：AOP框架创建的对象，代理就是对目标对象的加强。 <ul><li>可以是JDK动态代理，也可以是cglib代理。前者为实现接口的目标对象的代理，后者不实现接口。</li></ul></li><li>织入（Weaving）：将增强处理添加到目标对象中，并创建一个被增强的对象（AOP代理）的过程就是织入。 <ul><li>织入的两种实现方式： <ul><li>1.编译时增强，如AsoectJ</li><li>2.运行时增强，如Sping AOP</li></ul></li></ul></li></ul></li></ul></li><li><p>Spring的AOP支持：</p><ul><li>spring目前仅支持将方法调用作为连接点</li><li>AOP编程三件事： <ul><li>定义普通业务组件</li><li>定义切入点，一个切入点可能横切多个业务组件</li><li>定义增强处理，增强处理就是在AOP框架为普通业务组件织入的处理动作</li><li>AOP代理的方法 = 增强处理 + 目标对象的方法</li></ul></li><li>Spring的两种选择来定义切入点和增强处理： <ul><li>1.基于注解的“零配置”方式：使用@Aspect,@Pointcut等注解标注切入点和增强处理。</li><li>2.基于XML配置文件的管理方式：使用spring配置文件来定义切入点和增强处理</li></ul></li></ul></li>`,4),g=t("p",null,"基于注解的“零配置”方式：",-1),m=t("code",null,"<!-- 启动@AspectJ支持 -->",-1),b=t("br",null,null,-1),q=t("li",null,[t("p",null,"Jar包： aspectjweaver.jar aspectjrt.jar aopalliance.jar"),t("pre",null,[t("code",null,`  	定义切面Bean: @Aspect 切面类
  	定义Before增强处理：@Before("切入点表达式")
  		示例：	@Before("execution(* org.crazyit.app.service.impl.*.*(..))")
  	定义切面Bean:
  			@Aspect 切面类
  	定义Before增强处理：
  		@Before("切入点表达式")
  		示例：	@Before("execution(* org.crazyit.app.service.impl.*.*(..))")
  		
  	定义AfterReturning增强处理：
  		// 匹配org.crazyit.app.service.impl包下所有类的、
  		// 所有方法的执行作为切入点
  		@AfterReturning(returning="rvt", pointcut="execution(* org.crazyit.app.service.impl.*.*(..))")
  		
  		@AfterReturning的两个常用属性：
  			pointcut/value:指定切入点对应的切入表达式
  			returning：指定一个形参名，该形参可用于访问目标方法的返回值 
  						如果增强方法的形参类型定义好了，若于目标方法返回值类型不同，
  														则增强方法不会织入。
  		
  	定义AfterThrowing增强处理：
  		主要用于处理程序中未处理的异常
  		@AfterThrowing(throwing="ex", pointcut="execution(* org.crazyit.app.service.impl.*.*(..))")
  			pointcut/value:指定切入点对应的切入表达式
  			throwing：指定一个形参名，该形参可用于访问目标方法的返回值 
  						如果增强方法的形参异常类型定义好了，若于目标方法返回值异常类型不同，
  														则增强方法不会织入。
  
  	After:
  		不管目标方法成功完成，还是异常结束，该Advice都会织入
  		这种Advice类似于finally块
  		通常用来释放资源
  		@After("execution(* org.crazyit.app.service.*.*(..))")
  		
  	Around:
  		这种Advice功能最强大，它既可访问、修改目标方法调用参数，也可访问、修改目标方法的返回值。
  		它甚至完全组阻止目标方法的执行
  		
  		它既可在目标方法之前织入，也可以在目标方法之后织入。
  		
  		弱点：它是线程不安全的，能用其他Advice搞定的，就不要把Around Adivce拿出来。
  		
  		Around Advice方法必须满足如下三点：
  			1.必须声明返回值类型
  			2.必须声明一个类型为ProceedingJoinPoint类型的形参
  			3.必须调用ProceedingJoinPoint形参的proceed()方法，这就是回调目标方法。如果没有这一行，目标方法不会执行。
  		
  		@Around("execution(* org.crazyit.app.service.impl.*.*(..))")
  		
  		public Object processTx(ProceedingJoinPoint jp) throws java.lang.Throwable{
  			System.out.println("执行目标方法之前，模拟开始事务...");
  			
  			// 获取目标方法原始的调用参数
  			Object[] args = jp.getArgs();
  			if(args != null && args.length > 1)
  			{
  				// 修改目标方法的第一个参数
  				args[0] = "【增加的前缀】" + args[0];
  			}
  			
  			// 以改变后的参数去执行目标方法，并保存目标方法执行后的返回值
  			Object rvt = jp.proceed(args);
  			
  			System.out.println("执行目标方法之后，模拟结束事务...");
  			
  			// 如果rvt的类型是Integer，将rvt改为它的平方
  			if(rvt != null && rvt instanceof Integer)
  				rvt = (Integer)rvt * (Integer)rvt;
  			return rvt;
`)]),t("p",null,[n("​ "),t("br"),n(" }")]),t("pre",null,[t("code",null,`  	一般来说，需要修改目标方法的调用参数、修改目标方法的返回值，此时只能用Around
  			组织目标方法执行，用before
  	
  	访问目标方法的参数：
  		JoinPoint类型：
  			方法：
  				Object[] getArgs()	返回执行目标方法时的参数
  				Signature getSignature()	返回被增强的方法的相关信息
  				Object getTarget()	返回目标对象
  				Object getThis()	返回代理对象
  
  	定义切入点：
  		切入点定义：
  			一个切入点表达式
  			一个包含名字和任意参数的方法签名
  			@Aspect
  			public class SystemArchitecture
  			{
  				@Pointcut("execution(* org.crazyit.app.service.impl.*.*(..))")
  				public void myPointcut(){}
  			}
  			
  			// 直接使用SystemArchitecture切面类的myPointcut()切入点
  			@AfterReturning(returning="rvt", pointcut="SystemArchitecture.myPointcut()")
  			
  	切入点指示符，组合符号：
  		// 下面的args(arg0,arg1)会限制目标方法必须有2个形参
  		@AfterReturning(returning="rvt" , pointcut="execution(* org.crazyit.app.service.impl.*.*(..)) && args(arg0,arg1)")
`)])],-1),h=t("h2",{id:"_5-spring的缓存机制",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-spring的缓存机制","aria-hidden":"true"},"#"),n(" 5.Spring的缓存机制：")],-1),x=t("h2",{id:"_6-spring的事务",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_6-spring的事务","aria-hidden":"true"},"#"),n(" 6.Spring的事务：")],-1),y=t("pre",null,[t("code",null,`	@Transactional(propagation=Propagation.REQUIRED ,isolation=Isolation.DEFAULT , timeout=5)
	
	<!-- 配置JDBC数据源的局部事务管理器，使用DataSourceTransactionManager 类 -->
	<!-- 该类实现PlatformTransactionManager接口，是针对采用数据源连接的特定实现-->
	<!-- 配置DataSourceTransactionManager时需要依注入DataSource的引用 -->
	<bean id="transactionManager" 
		class="org.springframework.jdbc.datasource.DataSourceTransactionManager"
		p:dataSource-ref="dataSource"/>
	<!-- 根据Annotation来生成事务代理 -->
	<tx:annotation-driven transaction-manager="transactionManager"/>
`)],-1);function B(f,A){const s=o("RouterLink");return p(),l("div",null,[r,t("ul",null,[d,t("li",null,[k,t("ul",null,[v,t("li",null,[g,t("ul",null,[t("li",null,[t("p",null,[m,b,i(s,{to:"/blog/old/beframework/spring/aop:aspectj-autoproxy/"},{default:c(()=>[n("aop:aspectj-autoproxy/")]),_:1})])]),q])])])])]),h,x,y])}const _=e(u,[["render",B],["__file","基础总结.html.vue"]]);export{_ as default};

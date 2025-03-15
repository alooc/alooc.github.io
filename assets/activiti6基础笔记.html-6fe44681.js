import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,b as e}from"./app-475ca235.js";const s={},l=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>first-demo：
步骤：设计流程，配置流程引擎，加载流程文件，启动流程。

数据库表的含义
url driver user password

配置文件

工作流引擎设计的一致原则是：强调流程服务的可嵌入性和可扩展性

jbpm3,jbpm5 activiti5:
	jBPM3 是一个完整的工作流系统实现，面向开发人员，
		目的在于简化对组织核心流程进行支撑的软件创建，不支持标准。

	jBPM4 引入 PVM，使其拥有更强大的扩展性，同时增加 BPMS 特性，
		这些特性包括了对 BPMN 的支持、面向业务人员的 Web 建模器和简单统计分析功能的加入。

	jBPM5 基于原先的 Drools Flow，支持 BPMN，通过与 Drools 的合并支持 BAM，
		通过内容仓库增加对流程可视化的支持。由于放弃了 jBPM4 的 PVM，引擎的可扩展性受到损害，并且不再支持 jPDL。

	Activiti5 基于 jBPM4，与 Alfresco 的集成增加了其流程可视化与管理能力，
		同时通过创新的 Activiti Cycle 协作组件支持流程相关人员之间的协调，最后，它加强了集成能力。

******************************************************************
第一章 Activiti介绍
	BPMN   Business Process Modeling Notation  业务流程模型和符号
	BPMN 2.0 定义了5个基础的元素类别：
		流对象 Flow Object :在一个业务流程中，流对象是用于定义行为的图形元素，主要有事件Events、活动Activities、和网关 Gateways 三种流对象 
		数据 Data :主要有数据对象 Data Objects、数据输入 Data Inputs 、数据输出 Data Outputs 和数据存储 Data Stores 四种元素
		连接对象 Connecting Objects :用于连接流对象，顺序流 Sequence Flows、消息流 Message Flows、关联 Associations 和数据关联 Data Associations 四种连接流对象的方式
		泳道 Swimlanes :泳道提供了两种途径用于组织基础的模型元素，分别是池 Pools 和道 Lanes
		制品 Artifacts :制品主要用于为流程提供附加信息，当前制品包括组 Group 和 注释 Text Annotation

第二章 安装运行Activiti
	开发第一个应用：
		1.引入jar包
		2.写配置文件 activiti的配置文件默认是resource中的activiti.cgf.xml
			示例：
				&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
				&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
				       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
				       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd&quot;&gt;
					&lt;!-- 流程引擎配置的bean --&gt;
					&lt;bean id=&quot;processEngineConfiguration&quot;
						class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
						&lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/act?useUnicode=true&amp;amp; characterEncoding=utf8&amp;amp; useSSL=false&amp;amp; serverTimezone=UTC&amp;amp; rewriteBatchedStatements=true&quot; /&gt;
						&lt;property name=&quot;jdbcDriver&quot; value=&quot;com.mysql.cj.jdbc.Driver&quot; /&gt;
						&lt;property name=&quot;jdbcUsername&quot; value=&quot;root&quot; /&gt;
						&lt;property name=&quot;jdbcPassword&quot; value=&quot;root&quot; /&gt;
						&lt;property name=&quot;databaseSchemaUpdate&quot; value=&quot;true&quot; /&gt;
					&lt;/bean&gt;
				&lt;/beans&gt;

		3.创建bpmn文件 
		4.类文件启动示例：

			// 创建流程引擎
			ProcessEngine engine = ProcessEngines.getDefaultProcessEngine();

		★//部署层面
			// 得到流程存储服务组件，相当于流程仓库，可部署流程，kickstart App
			RepositoryService repositoryService = engine.getRepositoryService();
			
		★//启动层面
			// 得到运行时服务组件，运行服务，启动流程  启动流程
			RuntimeService runtimeService = engine.getRuntimeService();
			
		★//流程处理层面
			// 获取流程任务组件    流程启动后，使用
			TaskService taskService = engine.getTaskService();
			// 部署流程文件
			repositoryService.createDeployment()
					.addClasspathResource(&quot;bpmn/First.bpmn&quot;).deploy();
			// 启动流程
			runtimeService.startProcessInstanceByKey(&quot;process1&quot;);
			// 查询第一个任务
			Task task = taskService.createTaskQuery().singleResult();
			System.out.println(&quot;第一个任务完成前，当前任务名称：&quot; + task.getName());
			// 完成第一个任务
			taskService.complete(task.getId());
			// 查询第二个任务
			task = taskService.createTaskQuery().singleResult();
			System.out.println(&quot;第二个任务完成前，当前任务名称：&quot; + task.getName());
			// 完成第二个任务（流程结束）
			taskService.complete(task.getId());
			task = taskService.createTaskQuery().singleResult();
			System.out.println(&quot;流程结束后，查找任务：&quot; + task);
			// 退出
	
第三章 Activiti数据库设计
	activiti流程引擎的数据表分为5大类，各类职责不同，有统一的命名规范
	
	1.通用数据表：只存放通用资源， ACT_GE
		资源表 ACT_GE_BYTEARRAY 
			保存与流程引擎相关的资源
			一般用来保存字符串、流程文件的内容、流程图片内容
		属性表 ACT_GE_PROPERTY
			属性的键值对
	2.流程存储表：保存流程定义和部署信息 ACT_RE
		部署数据表 ACT_RE_DEPLOYMENT
			保存部署信息
		流程定义表 ACT_RE_PROCDEF
			保存流程文件 .bpmn
	3.身份数据表：有关身份数据的几张表 ACT_ID
		用户表 ACT_ID_USER
			保存用户信息
		用户账号（信息）表 ACT_ID_INFO
			activiti将用户、用户账号和用户信息分三种数据，用户表保存用户的数据，
			而其他两个被保存在这个表中
		用户组表 ACT_ID_GROUP
			用户组数据（组名称，组类型）
		关系表 ACT_ID_MEMBERSHIP
			保存用户属于哪个组
	4.运行时数据表：保存流程在运行过程中所产生的数据，例如流程实例、执行流、任务等 ACT_RU
		流程实例（执行流）表 ACT_RU_EXECUTION
		流程任务表 ACT_RU_TASK
		流程参数表 ACT_RU_VARIABLE
		流程与身份关系表 ACT_RU_IDENTITYLINK
		工作数据表
			ACT_RU_JOB
			ACT_RU_DEADLEFTER_JOB
			ACT_RU_SUSPENDED_JOB
			ACT_RU_TIMER_JOB
		事件描述表 ACT_RU_EVENT_SUBSCR
	5.历史数据表：流程引擎的日志表，操作过的流程元素将会被记录到历史表中 ACT_HI
		流程实例表 ACT_HI_PROCINST
		流程明细表 ACT_HI_DETAIL
		历史任务表和历史行为表 ACT_HI_TASKINST
		附件表和评论表 ACT_HI_ATTACHMENT
	6.DMN 规则引擎表
		activiti6加入了DMN规范的规则引擎模块
			1.决策部署表  ACT_DMN_DEPLOYMENT
				类似于流程定义部署，每次部署，向部署表中写入部署数据
			2.决策表 ACT_DMN_DECISION_TABLE
				决策类似于流程定义，保存决策模型
			3.部署资源表 ACT_DMN_DEPLOYMENT_RESOURCE
				规则引擎相关的资源，例如决策文件、图片

第四章 Activiti流程引擎配置
	1.流程引擎对象
		ProcessEngineConfiguration对象代表一个Activiti流程引擎的全部配置
			该对象的静态方法读取配置文件，生成实例
		1.
		/**
		 * 使用createProcessEngineConfigurationFromResourceDefault方法
		 * 创建ProcessEngineConfiguration实例
		 * @author Administrator
		 *
		 */
		//使用Activiti默认的方式创建ProcessEngineConfiguration
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResourceDefault();	
		2.
		/**
		 * 使用CreateProcessEngineConfigurationFromResource方法创建ProcessEngineConfiguration实例
		 * 
		 * @author Administrator
		 * 
		 */
		// 指定配置文件创建ProcessEngineConfiguration
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;my-activiti1.xml&quot;);
		3.
		/**
		 * 使用createProcessEngineConfigurationFromInputStream方法创建ProcessEngineConfiguration
		 * 
		 * @author yangenxiong
		 * 
		 */
		File file = new File(&quot;resource/input-stream.xml&quot;);
		// 得到文件输入流
		InputStream fis = new FileInputStream(file);
		// 使用createProcessEngineConfigurationFromInputStream方法创建ProcessEngineConfiguration
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromInputStream(fis);
		4.
		/**
		 * 使用createStandaloneInMemProcessEngineConfiguration创建ProcessEngineConfiguration
		 * 
		 * @author yangenxiong
		 * 
		 */
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createStandaloneInMemProcessEngineConfiguration();
		// 值为create-drop
		System.out.println(config.getDatabaseSchemaUpdate());
		// 值为jdbc:h2:mem:activiti
		System.out.println(config.getJdbcUrl());
		5.
		/**
		 * 使用CreateStandaloneProcessEngineConfiguration方法创建ProcessEngineConfiguration
		 * 
		 * @author yangenxiong
		 * 
		 */
		 ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createStandaloneProcessEngineConfiguration();
		// 默认值为 false
		System.out.println(config.getDatabaseSchemaUpdate());
		// 默认值为 jdbc:h2:tcp://localhost/~/activiti
		System.out.println(config.getJdbcUrl());
	2.数据源配置
	3.其他属性配置
		history配置
		asyncExecutorActivate配置
		邮件服务器配置
	示例：
		************************************************************************************
		&lt;!-- 将databaseType设置为oracle --&gt;
		&lt;bean id=&quot;processEngineConfiguration&quot;
			class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
			&lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/act&quot; /&gt;
			&lt;property name=&quot;jdbcDriver&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&gt;
			&lt;property name=&quot;jdbcUsername&quot; value=&quot;root&quot; /&gt;
			&lt;property name=&quot;jdbcPassword&quot; value=&quot;123456&quot; /&gt;
			&lt;property name=&quot;databaseSchemaUpdate&quot; value=&quot;create-drop&quot;/&gt;
			&lt;property name=&quot;databaseType&quot; value=&quot;oracle&quot;/&gt;
		&lt;/bean&gt;
		// 读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;database-type.xml&quot;);
		// 启动Activiti
		ProcessEngine engine = config.buildProcessEngine();
		// 关闭流程引擎
		engine.close();
		************************************************************************************
		&lt;!-- 使用C3P0数据源 --&gt;
		&lt;bean id=&quot;dataSource&quot; class=&quot;com.mchange.v2.c3p0.ComboPooledDataSource&quot;&gt;
			&lt;property name=&quot;driverClass&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&gt;
			&lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/act&quot; /&gt;
			&lt;property name=&quot;user&quot; value=&quot;root&quot; /&gt;
			&lt;property name=&quot;password&quot; value=&quot;123456&quot; /&gt;
		&lt;/bean&gt;

		&lt;bean id=&quot;processEngineConfiguration&quot;
			class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
			&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; /&gt;
		&lt;/bean&gt;
		// 读取c3p0-config.xml配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;config/c3p0-config.xml&quot;);
		// 能正常输出，即完成配置
		DataSource ds = config.getDataSource();
		// 查询数据库元信息，如果能查询则表示连接成功
		ds.getConnection().getMetaData();
		// 结果为 com.mchange.v2.c3p0.ComboPooledDataSource
		System.out.println(config.getDataSource().getClass().getName());
		
		或者

		&lt;!-- 不初始化任何属性 --&gt;
		&lt;bean id=&quot;processEngineConfiguration&quot;
			class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
		&lt;/bean&gt;
		// 创建C3P0数据源
		ComboPooledDataSource ds = new ComboPooledDataSource();
		// 设置JDBC连接的各个属性
		ds.setUser(&quot;root&quot;);
		ds.setPassword(&quot;123456&quot;);
		ds.setJdbcUrl(&quot;jdbc:mysql://localhost:3306/act&quot;);
		ds.setDriverClass(&quot;com.mysql.jdbc.Driver&quot;);
		// 验证是否连接成功
		ds.getConnection().getMetaData();

		// 读取Activiti配置文件
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;config/c3p0-coding.xml&quot;);
		// 为ProcessEngineConfiguration设置dataSource属性
		config.setDataSource(ds);
		System.out.println(config.getDataSource());
		************************************************************************************
		&lt;!-- 将databaseSchemaUpdate设置为false --&gt;
		&lt;bean id=&quot;processEngineConfiguration&quot;
			class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
			&lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/act&quot; /&gt;
			&lt;property name=&quot;jdbcDriver&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&gt;
			&lt;property name=&quot;jdbcUsername&quot; value=&quot;root&quot; /&gt;
			&lt;property name=&quot;jdbcPassword&quot; value=&quot;123456&quot; /&gt;
			&lt;property name=&quot;databaseSchemaUpdate&quot; value=&quot;false&quot;/&gt;
		&lt;/bean&gt;
		//读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;schemaUpdate-false.xml&quot;);
		//启动Activiti
		config.buildProcessEngine();
		************************************************************************************
		&lt;!-- 将databaseSchemaUpdate设置为true --&gt;
		&lt;bean id=&quot;processEngineConfiguration&quot;
			class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
			&lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/act&quot; /&gt;
			&lt;property name=&quot;jdbcDriver&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&gt;
			&lt;property name=&quot;jdbcUsername&quot; value=&quot;root&quot; /&gt;
			&lt;property name=&quot;jdbcPassword&quot; value=&quot;123456&quot; /&gt;
			&lt;property name=&quot;databaseSchemaUpdate&quot; value=&quot;true&quot;/&gt;
		&lt;/bean&gt;
		//读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;schemaUpdate-true.xml&quot;);
		System.out.println(config.getClass().getName());
		//启动Activiti
		config.buildProcessEngine();
		************************************************************************************
		&lt;!-- 将databaseSchemaUpdate设置为create-drop --&gt;
		&lt;bean id=&quot;processEngineConfiguration&quot;
			class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
			&lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/act&quot; /&gt;
			&lt;property name=&quot;jdbcDriver&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&gt;
			&lt;property name=&quot;jdbcUsername&quot; value=&quot;root&quot; /&gt;
			&lt;property name=&quot;jdbcPassword&quot; value=&quot;123456&quot; /&gt;
			&lt;property name=&quot;databaseSchemaUpdate&quot; value=&quot;create-drop&quot;/&gt;
		&lt;/bean&gt;
		// 读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;schemaUpdate-create-drop.xml&quot;);
		// 启动Activiti
		ProcessEngine engine = config.buildProcessEngine();
		// 关闭流程引擎
		engine.close();
		************************************************************************************
		&lt;bean id=&quot;processEngineConfiguration&quot;
			class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
			&lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/act&quot; /&gt;
			&lt;property name=&quot;jdbcDriver&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&gt;
			&lt;property name=&quot;jdbcUsername&quot; value=&quot;root&quot; /&gt;
			&lt;property name=&quot;jdbcPassword&quot; value=&quot;123456&quot; /&gt;
			&lt;property name=&quot;databaseSchemaUpdate&quot; value=&quot;true&quot;/&gt;
			&lt;property name=&quot;history&quot; value=&quot;activity&quot;/&gt;  activiti/audit/full/none/
		&lt;/bean&gt;
		// 读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;history-activity.xml&quot;);		
		//初始化流程引擎
		ProcessEngine engine = config.buildProcessEngine();
		//得到流程存储对象
		RepositoryService repositoryService = engine.getRepositoryService();
		//部署流程文件
		repositoryService.createDeployment().addClasspathResource(&quot;bpmn/history.bpmn20.xml&quot;).deploy();
		//得到运行服务对象
		RuntimeService runtimeService = engine.getRuntimeService();
		//创建参数
		Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
		vars.put(&quot;day&quot;, 10);
		//开始流程
		ProcessInstance pi = runtimeService.startProcessInstanceByKey(&quot;vacationProcess&quot;, vars);
		System.exit(0);
		************************************************************************************
		&lt;bean id=&quot;processEngineConfiguration&quot;
		class=&quot;org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration&quot;&gt;
			&lt;property name=&quot;jdbcUrl&quot; value=&quot;jdbc:mysql://localhost:3306/act&quot; /&gt;
			&lt;property name=&quot;jdbcDriver&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&gt;
			&lt;property name=&quot;jdbcUsername&quot; value=&quot;root&quot; /&gt;
			&lt;property name=&quot;jdbcPassword&quot; value=&quot;123456&quot; /&gt;
			&lt;property name=&quot;mailServerHost&quot; value=&quot;smtp.163.com&quot;&gt;&lt;/property&gt;
			&lt;property name=&quot;mailServerPort&quot; value=&quot;25&quot;&gt;&lt;/property&gt;
			&lt;property name=&quot;mailServerDefaultFrom&quot; value=&quot;yangenxiong@163.com&quot;&gt;&lt;/property&gt;
			&lt;property name=&quot;mailServerUsername&quot; value=&quot;yangenxiong@163.com&quot;&gt;&lt;/property&gt;
			&lt;property name=&quot;mailServerPassword&quot; value=&quot;123456&quot;&gt;&lt;/property&gt;
		&lt;/bean&gt;
		************************************************************************************

		************************************************************************************
	4.ProcessEngineCofiguration bean
		继承接口ProcessEngineCofiguration或ProcessEngineCofigurationImpl，
		自定义引擎启动类。
	5.Activiti的命令拦截器
		未学习

第五章 流程引擎的创建
	和汽车发动机启动很像
	1.ProcessEngineConfiguration的buildProcessEngine方法创建
	先读后配，相当于配置检查
		// 读取配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource(&quot;build_engine.xml&quot;);
		// 创建ProcessEngine
		ProcessEngine engine = config.buildProcessEngine();
	2.ProcessEngines对象
		调用ProcessEngines的init方法
			// 初始化ProcessEngines的Map,
			// 再加载Activiti默认的配置文件（classpath下的activiti.cfg.xml文件）
			// 如果与Spring整合，则读取classpath下的activiti-context.xml文件

			ProcessEngines.init();

			// 得到ProcessEngines的Map
			Map&lt;String, ProcessEngine&gt; engines = ProcessEngines.getProcessEngines();
			System.out.println(engines.size());
			System.out.println(engines.get(&quot;default&quot;));
		注册与注销ProcessEngine实例
			//读取自定义配置
			ProcessEngineConfiguration config = ProcessEngineConfiguration.
					createProcessEngineConfigurationFromResource(&quot;register.xml&quot;);
			//创建ProcessEngine实例
			ProcessEngine engine = config.buildProcessEngine();
			//获取ProcessEngine的Map
			Map&lt;String, ProcessEngine&gt; engines = ProcessEngines.getProcessEngines();
			System.out.println(&quot;注册后引擎数：&quot; + engines.size());
			//注销ProcessEngine实例
			ProcessEngines.unregister( engine);
			System.out.println(&quot;调用unregister后引擎数：&quot; + engines.size());
		使用ProcessEngines的retry方法
			//得到资源文件的URL实例
			ClassLoader cl = Retry.class.getClassLoader();
			URL url = cl.getResource(&quot;retry.xml&quot;);
			//调用retry方法创建ProcessEngine实例
			ProcessEngineInfo info = ProcessEngines.retry(url.toString());
			//得到流程实例保存对象
			Map&lt;String, ProcessEngine&gt; engines = ProcessEngines.getProcessEngines();
			System.out.println(&quot;调用retry方法后引擎数：&quot; + engines.size());	
		使用ProcessEngines的destroy方法
			// 进行初始化并且返回默认的ProcessEngine实例
			ProcessEngine engine = ProcessEngines.getDefaultProcessEngine();
			System.out.println(&quot;调用getDefaultProcessEngine方法后引擎数量：&quot;
					+ ProcessEngines.getProcessEngines().size());
			// 调用销毁方法
			ProcessEngines.destroy();
			// 最终结果为0
			System.out.println(&quot;调用destroy方法后引擎数量：&quot;
					+ ProcessEngines.getProcessEngines().size());

			// 得到资源文件的URL实例
			ClassLoader cl = Destroy.class.getClassLoader();
			URL url = cl.getResource(&quot;activiti.cfg.xml&quot;);
			// 调用retry方法创建ProcessEngine实例
			ProcessEngines.retry(url.toString());
			System.out.println(&quot;只调用 retry方法后引擎数量：&quot;
					+ ProcessEngines.getProcessEngines().size());
			// 调用销毁方法，没有效果
			ProcessEngines.destroy();
			System.out.println(&quot;调用destory无效果，引擎数量：&quot;
					+ ProcessEngines.getProcessEngines().size());
	3.ProcessEngine对象
		一个ProcessEngine实例代表一个流程引擎，实例中保存着各个服务组件的实例，根据这些服务组件，可以操作流程实例
		、任务、系统角色等数据。

		1.服务组件：
			好像J2EE的Service层，通过getXXXService方法得到实例
			包含的实例：
				RespositoryService:提供一系列管理流程定义和流程部署的API
				RuntimeService:在流程运行时对流程实例进行管理与控制
				TaskService:对流程任务进行管理，例如任务提醒、任务完成和创建任务等
				IdentityService:提供对流程角色数据进行管理的API，这些角色数据包括用户组、用户及它们之间的关系
				ManagementService:提供对流程引擎进行管理和维护的服务
				HistoryService:对流程的历史数据进行操作，包括查询、删除这些历史数据
				DynamicBpmnService:使用该服务，可以不需要重新部署流程模型，就可以实现对流程模型的修改
		2.关闭流程引擎：
			engine.close();
			根据配置中databaseSchemeUpdate属性判断是否删除数据库	
		3.流程引擎名称:
			默认名称时default
			使用config.setProcessEngineName(&quot;test&quot;);
			示例：
				ProcessEngineConfiguration config = ProcessEngineConfiguration.
				createProcessEngineConfigurationFromResource(&quot;name.xml&quot;);
				//设置流程引擎名称
				config.setProcessEngineName(&quot;test&quot;);
				ProcessEngine engine = config.buildProcessEngine();
				//根据名称查询流程引擎
				ProcessEngine engineTest = ProcessEngines.getProcessEngine(&quot;test&quot;);
				System.out.println(&quot;创建的引擎实例：&quot; + engine);
				System.out.println(&quot;查询的引擎实例：&quot; + engineTest);
	
第六章 用户组与用户
	1.用户组管理：
		1.Group对象：
			通过业务层组件去创建
			IdentityService
		2.创建用户组：
			id,name,type 然后保存，
				技巧：group.setId(null) 可以让数据库自动生成主键id
		3.修改用户组：
			setter
		4.删除用户组：
			deleteGroup(id)
	2.Activiti数据查询：
		Activiti提供了一套数据查询API供开发者使用，可以使用各个服务组件的createXXXQuery方法来获取这些查询对象。
		
		1.查询对象：
			Query是多有查询对象的父接口，提供了很多基础的方法：
				asc	设置查询结果的排序方式为升序
				count	计算查询结果的数据量
				desc	降序
				list	封装查询结果，返回相应类型的集合
				listPage	分页返回查询结果
				singleResult	查询单条符合条件的数据，没有返回null,多条抛出异常
		2.list方法：
			// 使用list方法查询全部的部署数据
			List&lt;Group&gt; datas = identityService.createGroupQuery().list();
		3.listPage方法：
			//调用listPage方法，从索引为2的记录开始，查询3条记录
			List&lt;Group&gt; datas = identityService.createGroupQuery().listPage(2, 3);
		4.count方法：
			// 使用list方法查询全部的部署数据
			long size = identityService.createGroupQuery().count();
		5.排序方法：
			List&lt;Group&gt; datas = identityService.createGroupQuery().orderByGroupName().asc().list();
		6.ID排序问题：
			主键均是字符型，排序要额外处理
		7.多字段排序：
			List&lt;Group&gt; datas = identityService.createGroupQuery()
				.orderByGroupId().desc()
				.orderByGroupName().asc().list();
		8.singleResult方法
		9.用户组数据查询：
			相应的数据查询对象除了拥有基类的方法，还有自己的方法：
			// groupId方法
			Group groupA = identityService.createGroupQuery().groupId(aId).singleResult();
			
			// groupName方法
			Group groupB = identityService.createGroupQuery().groupName(&quot;GroupB&quot;).singleResult();
			
			// groupType方法
			Group groupC = identityService.createGroupQuery().groupType(&quot;typeC&quot;).singleResult();
			
			// groupNameLike方法
			List&lt;Group&gt; groups = identityService.createGroupQuery().groupNameLike(&quot;%group%&quot;).list();

		10.原生SQL查询：
			createNativeGroupQuery()
			groups = identityService.createNativeGroupQuery()
				.sql(&quot;select * from ACT_ID_GROUP where NAME_ = #{name}&quot;)
				.parameter(&quot;name&quot;, &quot;GroupD&quot;).list();
	
	3.用户管理：
		User对象
		添加用户 newUser  saveUser
		修改用户
		删除用户
		验证用户密码 checkPassWord  是用户密码，不是用户的账号密码
		用户数据查询 UserQuery对象
		设置认证用户 setAuthenticatedUserId 多线程中使用
	4.用户信息管理：
		添加和删除用户信息：
			用为ACT_ID_INFO数据结构是key-value，没有查询对象,通过id+key可以查到记录
			setUserInfo(String userId,String key,String value)
			deleteUserInfo(String userId,String key)
			示例：
				// 创建用户
				creatUser(identityService, id, &quot;angus&quot;, &quot;young&quot;, &quot;yangenxiong@163.com&quot;, &quot;abc&quot;);
				// 创建一个用户信息
				identityService.setUserInfo(id, &quot;age&quot;, &quot;30&quot;);
				// 创建第二个用户信息
				identityService.setUserInfo(id, &quot;weight&quot;, &quot;60KG&quot;);
				// 删除用户年龄信息
				identityService.deleteUserInfo(id, &quot;age&quot;);
		查询用户信息：
			getUserInfo(String userId,String key)
		设置用户图片：
			setUserPicture
			getUserPicture

			先转为byte array，再存储，图片存放再资源表中，用户信息表存的是图片在的资源表的id
				// 读取图片并转换为byte数组
				FileInputStream fis = new FileInputStream(new File(&quot;resource/artifact/picture.png&quot;));		
				BufferedImage img = ImageIO.read(fis);
				ByteArrayOutputStream output = new ByteArrayOutputStream();
				ImageIO.write(img, &quot;png&quot;, output);
				//获取图片的byte数组
				byte[] picArray = output.toByteArray();		
				// 创建Picture实例
				Picture picture = new Picture(picArray, &quot;angus image&quot;);
				// 为用户设置图片
				identityService.setUserPicture(id, picture);	
	5.用户组和用户的关系：
		多对多，中间表ACT_ID_MEMBERSHIP

		绑定关系：
			// 绑定关系
			identityService.createMembership(user.getId(), group.getId());
		接触绑定：
			// 删除绑定关系
			identityService.deleteMembership(user.getId(), group.getId());
		查询用户组下的用户：
			使用用户的查询对象  memberOfGroup(group.getId())
				List&lt;User&gt; users = identityService.createUserQuery()
				.memberOfGroup(group.getId()).list();
		查询用户所属的用户组：
			使用用户组的查询对象 groupMenber(user.getId())
				List&lt;Group&gt; groups = identityService.createGroupQuery()
						.groupMember(user.getId()).list();
	
第七章 流程存储
	RepositoryService 主要对Activiti中的流程存储的相关数据进行操作，这些操作包括对流程存储数据的管理、
		流程部署以及对流程的基本操作等。
	1.流程文件部署：
		RepositoryService负责对流程文件的部署以及流程定义的管理
		
		1.Deployment对象：
			只提供getter方法
		2.DeploymentBuilder对象：
			DeploymentBuilder builder = repositoryService.createDeployment();
		3.添加输入流资源：
			builder.addInputStream(&quot;inputa&quot;,a)
				// 第一个资源输入流
				InputStream is1 = new FileInputStream(new File(
						&quot;resource/artifact/flow_inputstream1.png&quot;));
				// 第二个资源输入流
				InputStream is2 = new FileInputStream(new File(
						&quot;resource/artifact/flow_inputstream1.png&quot;));
				// 创建DeploymentBuilder实例
				DeploymentBuilder builder = repositoryService.createDeployment();
				// 为DeploymentBuilder添加资源输入流
				builder.addInputStream(&quot;inputA&quot;, is1);
				builder.addInputStream(&quot;inputB&quot;, is2);
				// 执行部署方法
				builder.deploy();

		4.添加classpath资源：
			builder.addClasspathResource(&quot;artifact/classpath.png&quot;)
				//添加classpath下的资源
				builder.addClasspathResource(&quot;artifact/classpath.png&quot;);
				//执行部署（写入到数据库中）
				builder.deploy();
		5.添加字符串资源：
			//添加String资源
			builder.addString(&quot;test&quot;, &quot;this is string method&quot;);
			//执行部署（写入到数据库中）
			builder.deploy();
		6.添加压缩包资源：
			//获取zip文件的输入流
			FileInputStream fis = new FileInputStream(new File(&quot;resource/artifact/ZipInputStream.zip&quot;));
			//读取zip文件，创建ZipInputStream对象
			ZipInputStream zi = new ZipInputStream(fis);
			//添加Zip压缩包资源
			builder.addZipInputStream(zi);
			//执行部署（写入到数据库中）
			builder.deploy();
		7.添加BPMN模型资源：
			addBpmnModel 
			addBytes
		8.修改部署信息：
			//设置各个属性
			builder.name(&quot;crazyit&quot;).tenantId(&quot;tenanId&quot;).key(&quot;myKey&quot;).category(&quot;myCategory&quot;);
		9.过滤重复部署：
			重复部署不再写入数据库，若不同，添加方法后，仍会修改数据库
			builderB.enableDuplicateFiltering();
		10.取消部署时的验证：
			默认情况下，在部署时会对流程的XML文件进行验证，包括验证是否符合BPMN规范、定义的流程是否可执行。
				builderB.addClasspathResource(&quot;bpmn/bpmnError.bpmn&quot;)
				.disableBpmnValidation().deploy();
	2.流程定义的管理：
		中止流程定义、激活流程定义和设置流程权限
		
		1.ProcessDefinition对象：
			有很多getter方法
		2.流程部署：
			将流程的描述文件写入数据库
		3.流程图部署：
		4.流程图自动生成：
			不自动生成 ，在配置文件中加&lt;property name=&quot;createDiagramOnDeploy&quot; value=&quot;false&quot; /&gt;
		5.中止与激活流程定义：
		6.流程定义缓存配置：
		7.自定义缓存
			自定义Java类，维护map
	3.流程定义的权限：
		activiti没有拦截检查，完全由开发者定义用户权限，然后根据表来查询
		1.设置流程定义的用户权限：
			repositoryService.addCandidateStarterUser(def.getId(), &quot;user1&quot;);
		2.设置流程定义的用户权限：
			repositoryService.addCandidateStarterGroup(def.getId(), &quot;group1&quot;);
		3.IdentityLink对象：
			对应表 ACT_RU_IDENTITYLINK
		4.查询权限数据：
			// 根据用户查询用权限的流程定义
			List&lt;ProcessDefinition&gt; defs = repositoryService
					.createProcessDefinitionQuery().startableByUser(&quot;user1&quot;).list();

			// 根据流程定义查询用户组数据
			List&lt;Group&gt; groups = identityService.createGroupQuery()
					.potentialStarter(def.getId()).list();
			
			// 根据流程定义查询用户数据
			List&lt;User&gt; users = identityService.createUserQuery()
					.potentialStarter(def.getId()).list();
			
			// 根据流程定义查询全部的 IdentityLink（ACT_RU_IDENTITYLINK表） 数据
			List&lt;IdentityLink&gt; links = repositoryService
					.getIdentityLinksForProcessDefinition(def.getId());	
	4.RepositoryService数据查询与删除：
		1.查询部署资源
			// 查询资源文件
			InputStream is = repositoryService.getResourceAsStream(dep.getId(), 
				&quot;artifact/GetResource.txt&quot;);
			// 读取输入流
			int count = is.available();
			byte[] contents = new byte[count];
			is.read(contents);
			String result = new String(contents);
		2.查询流程文件
		3.查询流程图
		4.查询部署的资源名称
		5.删除部署资源
		6.DeploymentQuery对象
		7.ProcessDefinitionQuery对象

第八章 流程任务管理
	1.任务的创建和删除：
		1.Task接口：
			ACT_RU_TASK
		2.创建与保存Task实例：
			newTask
			saveTask
		3.删除任务：
			多个删除方法
	2.任务权限：
		1.设置候选用户组
		2.设置候选用户
		3.权限数据查询
			用户组和用户的Query对象没有提供根据任务ID查询用户组和用户的方法
		4.设置任务持有人：
			setOwner
		5.设置任务代理人
			setAssignee
		6.添加任务权限数据
		7.删除用户组权限
		8.删除用户权限
	3.任务参数：
		参数类型分为流程参数和任务参数
		1.基本类型参数设置：
			setVariable
		2.序列化参数：
			对象必须实现序列化接口
		3.获取参数
			getVariable(taskId,argName)
		4.参数作用域：
			setVariableLocal 局部参数
			getVariableLocal 
		5.设置多个参数：
			setVariables
			setVariablesLocal	
				//初始化参数
				Map&lt;String,Object&gt; vars = new HashMap&lt;String, Object&gt;();
				vars.put(&quot;days&quot;, 10);
				vars.put(&quot;target&quot;, &quot;欧洲&quot;);
				taskService.setVariables(task1.getId(), vars);
			或使用序列化对象
		6.数据对象：
			BPMN文件中的dataObject元素
				Map&lt;String, DataObject&gt; objs = taskService.getDataObjects(task.getId());
	
	4.任务附件管理：
		1.Attachment对象：
		2.创建任务附件：
			// 设置任务附件
			taskService.createAttachment(&quot;web url&quot;, task.getId(), pi.getId(), &quot;163.com&quot;, 
					&quot;163 web page&quot;, &quot;http://www.163.com&quot;);
			// 创建图片输入流
			InputStream is = new FileInputStream(new File(&quot;resource/artifact/result.png&quot;));
			// 设置输入流为任务附件
			taskService.createAttachment(&quot;web url&quot;, task.getId(), pi.getId(), &quot;163.com&quot;, 
					&quot;163 web page&quot;, is);
		3.附件查询：
		4.删除附件
	5.任务评论和事件记录：
		1.Comment对象:
		2.新增任务评论
			addComment
		3.事件的记录
		4.数据查询
	6.任务声明与完成：
		1.任务声明：
			claim
		2.任务完成：
			complete

第九章 流程控制
	TaskService主要用于任务管理，包括任务操作、任务数据管理等
	IdentityService主要用于管理流程的身份数据
	RepositoryService主要管理流程部署的数据
	RuntimeService主要用于管理流程在运行时产生的数据，以及对流程进行操作的API

	流程运行时产生的数据包括流程参数、事件、流程 实例及执行流等
	流程的操作包括启动流程，流程前进等

	1.流程实例与执行流：
		1.流程实例与执行流的概念：
			启动一个流程时，会创建一个流程实例，每个流程实例至少有一个执行流
		2.流程实例和执行流对象 ProcessInstance Execution
	2.启动流程:
		RuntimeService提供流程启动的多个方法，命名均为startProcessInstanceByXXX
			XXX可以是流程定义的ID、Key【流程描述文件中process的id属性】和message
		1.startProcessInstanceById方法：
		2.startProcessInstanceByKey方法
		3.startProcessInstanceByMessage方法
			消息事件
	3.流程参数：
		1.设置与查询流程参数：
			设置需要传入执行流的ID
			查询需要传入执行流的ID和参数名称
			setViriable
		2.流程参数的作用域：
			局部只作用域执行流
			setViriableLocal
		3.其他设置参数的方法：
			setViriables
			setViriablesLocal
	4.流程操作：
		启动流程、发送信号、中断流程、激活流程
		1.流程触发：
			对于receiveTask等流程节点，使用trigger方法进行触发，使流程往前进行
		2.触发信号事件：
			事件节点是在流程中记录事件发生的流程元素，BPMN2 规范中主要有两种类型的事件：
				捕获事件Catching 需要信号才能前进 
					// 发送信号给事件，流程结束
					runtimeService.signalEventReceived(&quot;testSignal&quot;);
				抛出事件Throwing
		3.触发消息事件：
			消息事件节点
				// 触发消息事件
				runtimeService.messageEventReceived(&quot;testMsg&quot;, exe.getId());
		4.中断和激活流程：
			SUSPENSION_STATE_字段保存中断状态，1为活跃，2为中断
				runtimeService.suspendProcessInstanceById(pi.getId());
				runtimeService.activateProcessInstanceById(pi.getId());
		5.删除流程：
			runtimeService.deleteProcessInstance(pi.getId(), &quot;abc&quot;);
	5.流程数据查询：
		1.执行流查询：
		2.流程实例查询
			
第十章 历史数据管理和流程引擎管理
	历史数据：
		activiti删除的流程定义、流程任务和流程实例的数据
		已经完成的流程实例以及相关数据
	ManagementService可以查询引擎数据库信息、工作信息，直接对数据库操作
	
	1.历史数据管理：
		1.历史流程实例查询：
			historyService.createHistoricProcessInstanceQuery()
		2.历史任务查询：
			historyService.createHistoricTaskInstanceQuery()
		3.历史行为查询：
			historyService.createHistoricActivityInstanceQuery()
		4.历史流程明细查询：
			流程的明细信息包括流程参数和流程表单属性
				默认情况下，Activiti不会记录明细，当history配置为full级别时，才会记录
		5.删除历史流程实例和历史任务：
			historyService.deleteHistoricProcessInstance(pi1.getId());
			级联删除实例
	2.工作的产生：
		异步工作时，用工作表保存任务
			一般的工作 ACT_RU_JOB
			定时中断任务 ACT_RU_SUSPENDED_JOB
			定时任务 ACT_RU_TIMER_JOB
		1.异步任务产生的工作：
			Java Service Task主要用于在任务中调用外部的Java 类
		2.定义中间事件产生的工作：
			定义了定时器相关的节点，会在某个定义的时间点上执行。
			可以加入定时器的节点：
				中间事件节点、流程开始事件节点和边界事件节点
		3.定义边界事件产生的工作：
		4.定时开始事件产生的工作
		5.流程抛出事件产生的工作
		6.暂停工作的产生
		7.无法执行的工作
	3.工作管理：
		ManagementService提供工作查询对象（对象返回job实例）
		1.工作查询对象：	
			4个：
				JobQuery
				TimerJobQuery
				SuspendedJobQuery
				DeadLetterJobQuery
		2.获取工作异常信息：
			getXXXJobExceptionStacktrace
		3.转移与删除工作：
			move
			delete
	4.数据库管理：
		1.查询引擎属性
		2.数据表信息查询
		3.数据库操作
		4.数据表查询
	
第十一章 流程事件
	要点：
		BPMN的事件分类
		各种流程的事件定义
		开始事件的应用
		结束事件的应用
		边界事件的应用
		中间事件的应用
	
	1.事件分类：
		1.按照事件的位置分类：
			开始事件：表示流程开始的事件
			结束事件：表示流程结束的事件
			中间事件：出现在流程中，单独作为流程节点的事件
			边界事件：附属于某个流程节点（如子流程，流程任务）的事件
		2.按照事件的特性分类：
			Catching事件
			Throwing事件
				开始事件是Catching
				结束事件是throwing
				边界时catching
				中间 都有
	2.事件定义：
		与事件结合
	3.开始事件：
		无指定开始事件
		定时器开始事件
		消息开始事件
		错误开始事件
	4.结束事件：
		无指定结束事件
		错误结束事件
		取消结束事件
		中止结束事件
	5.边界事件
		定时器
		信号
		错误
		取消
	6.中间事件
		定时器  捕获
		信号 捕获 抛出
		消息 抛出	
	7.补偿事件
		补偿边界
			事务子流程取消触发
			补偿中间触发
		补偿中间

第十二章 流程任务
	BPMN任务概述
	用户任务的应用
	指定服务任务的行为
	WebService任务的应用
	脚本任务的应用
	任务监听器的使用
	流程监听器的使用

	1.用户任务：
		1.分配任务候选人
			&lt;userTask id=&quot;usertask1&quot; name=&quot;Task1&quot;&gt;
				&lt;potentialOwner&gt;
					&lt;resourceAssignmentExpression&gt;
						&lt;formalExpression&gt;user(angus), group(management), boss
						&lt;/formalExpression&gt;
					&lt;/resourceAssignmentExpression&gt;
				&lt;/potentialOwner&gt;
			&lt;/userTask&gt;
		2.分配任务代理人
			&lt;userTask id=&quot;usertask1&quot; name=&quot;Task 1&quot;&gt;
				&lt;humanPerformer&gt;
					&lt;resourceAssignmentExpression&gt;
						&lt;formalExpression&gt;user1&lt;/formalExpression&gt;
					&lt;/resourceAssignmentExpression&gt;
				&lt;/humanPerformer&gt;
			&lt;/userTask&gt;
		3.权限分配扩展
			使用activiti扩展来分配任务的候选人和代理人
				&lt;userTask id=&quot;usertask1&quot; name=&quot;Assignee&quot; activiti:assignee=&quot;user1&quot;&gt;&lt;/userTask&gt;
				&lt;userTask id=&quot;usertask2&quot; name=&quot;Candidate User&quot;
					activiti:candidateUsers=&quot;user1, user2&quot;&gt;&lt;/userTask&gt;
				&lt;userTask id=&quot;usertask3&quot; name=&quot;Candidate Group&quot;
					activiti:candidateGroups=&quot;group1,group2&quot;&gt;&lt;/userTask&gt;
		4.使用任务监听器进行权限分配
			设置监听类
				public class UserTaskListener implements TaskListener {

					public void notify(DelegateTask delegateTask) {
						System.out.println(&quot;使用任务监听器设置任务权限&quot;);
						delegateTask.setAssignee(&quot;user1&quot;);
						delegateTask.addCandidateGroup(&quot;group1&quot;);
						delegateTask.addCandidateUser(&quot;user1&quot;);		
					}
				}
			配置监听器
				&lt;userTask id=&quot;usertask1&quot; name=&quot;Assignee&quot;&gt;
					&lt;extensionElements&gt;
						&lt;activiti:taskListener event=&quot;create&quot;
							class=&quot;org.crazyit.activiti.UserTaskListener&quot;&gt;&lt;/activiti:taskListener&gt;
					&lt;/extensionElements&gt;
				&lt;/userTask&gt;
		5.使用JUEL分配权限
			
			&lt;userTask id=&quot;usertask2&quot; name=&quot;Task 1&quot; activiti:assignee=&quot;\${authService.getUserAssignee()}&quot;&gt;&lt;/userTask&gt;
			&lt;userTask id=&quot;usertask3&quot; name=&quot;Task 2&quot; activiti:candidateUsers=&quot;\${authService.getCandidateUsers()}&quot;&gt;&lt;/userTask&gt;
			&lt;userTask id=&quot;usertask4&quot; name=&quot;Task 3&quot; activiti:candidateGroups=&quot;\${authService.getCandidateGroups()}&quot;&gt;&lt;/userTask&gt;
			&lt;userTask id=&quot;usertask5&quot; name=&quot;Task 4&quot; activiti:assignee=&quot;\${authService.lastUser}&quot;&gt;&lt;/userTask&gt;
		
			服务Bean
			public class AuthService implements Serializable {
	
				private String lastUser = &quot;angus&quot;;
				
				public String getLastUser() {
					return this.lastUser;
				}
				
				public AuthService() {
					System.out.println(&quot;create AuthService&quot;);
				}

				//使用方法为任务指定代理人
				public String getUserAssignee() {
					return &quot;crazyit&quot;;
				}
				
				//使用方法为任务指定候选人
				public List&lt;String&gt; getCandidateUsers() {
					List&lt;String&gt; result = new ArrayList&lt;String&gt;();
					result.add(&quot;user1&quot;);
					result.add(&quot;user2&quot;);
					return result;
				}
				
				//使用方法为任务指定候选用户组
				public List&lt;String&gt; getCandidateGroups() {
					List&lt;String&gt; result = new ArrayList&lt;String&gt;();
					result.add(&quot;group1&quot;);
					result.add(&quot;group2&quot;);
					return result;
				}
			}

			添加流程变量
			Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
			vars.put(&quot;authService&quot;, new AuthService());
			// 启动流程
			ProcessInstance pi = runtimeService.startProcessInstanceByKey(&quot;process1&quot;, vars);
					
	2.服务任务：
		activiti:class: JavaDelegate或ActivitiBehavior的实现类
		activiti:delegateExpression  
		activiti:expression 直接调用bean
		
		1.实现JavaDelegate
			
			public class MyJavaDelegate implements JavaDelegate, Serializable {

				public void execute(DelegateExecution execution) {
					System.out.println(&quot; 实现  JavaDelegate 的  JavaSeviceTask: &quot; + this);
				}
			}
			activiti:class方式：

				&lt;serviceTask id=&quot;servicetask1&quot; name=&quot;Service Task 1&quot;
					activiti:class=&quot;org.crazyit.activiti.MyJavaDelegate&quot;&gt;&lt;/serviceTask&gt;

			activiti:delegateExpression 方式：
				Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
				vars.put(&quot;myDelegate&quot;, new MyJavaDelegate());
				// 启动流程
				ProcessInstance pi = runtimeService.startProcessInstanceByKey(&quot;process1&quot;, vars);

				&lt;serviceTask id=&quot;servicetask1&quot; name=&quot;Service Task&quot;
					activiti:delegateExpression=&quot;\${myDelegate}&quot;&gt;&lt;/serviceTask&gt;
			
		2.使用普通的JavaBean
			调用Bean方法和属性

			Bean类：
				public class MyJavaBean implements Serializable {

					private String name = &quot;crazyit&quot;;
					
					public String getName() {
						return this.name;
					}
					
					public void print(Execution exe) {
						System.out.println(&quot;使用Java Bean的print方法：&quot; + exe.getId());
					}
				}
			
			BPMN：
				&lt;serviceTask id=&quot;servicetask1&quot; name=&quot;Service Task&quot;
					activiti:expression=&quot;\${myBean.print(execution)}&quot;&gt;&lt;/serviceTask&gt;
				&lt;serviceTask id=&quot;servicetask2&quot; name=&quot;Service Task&quot;
					activiti:expression=&quot;\${execution.setVariable(&#39;myName&#39;, myBean.name)}&quot;&gt;&lt;/serviceTask&gt;
			设置参数：
				Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
				vars.put(&quot;myBean&quot;, new MyJavaBean());
				// 启动流程
				ProcessInstance pi = runtimeService.startProcessInstanceByKey(
						&quot;process1&quot;, vars);
		3.Shell任务：
			执行cmd命令
	
	3.流程与任务监听器：
		
		任务监听器taskListener  设置event  =&quot;create/complete/assignment&quot;表示用户任务创建时调用监听器
			&lt;userTask id=&quot;usertask1&quot; name=&quot;User Task&quot;&gt;
				&lt;extensionElements&gt;
					&lt;activiti:taskListener event=&quot;create&quot;
						class=&quot;org.crazyit.activiti.PropertyConfigListener&quot; /&gt;
				&lt;/extensionElements&gt;
			&lt;/userTask&gt;

			属性注入，往任务监听器中注入属性
				&lt;userTask id=&quot;usertask1&quot; name=&quot;User Task&quot;&gt;
					&lt;extensionElements&gt;
						&lt;activiti:taskListener event=&quot;create&quot;
							class=&quot;org.crazyit.activiti.PropertyInjection&quot;&gt;
							&lt;activiti:field name=&quot;userName&quot; stringValue=&quot;crazyit&quot; /&gt;
						&lt;/activiti:taskListener&gt;
					&lt;/extensionElements&gt;
				&lt;/userTask&gt;
				监听器类：
					public class PropertyInjection implements TaskListener {

						private Expression userName;
						
						public void setUserName(Expression userName) {
							this.userName = userName;
						}
						
						public void notify(DelegateTask delegateTask) {
							System.out.println(&quot;属性注入后的值：&quot; + this.userName.getValue(null));
						}
					}
		
		流程监听器：
			&lt;activiti:executionListener event=&quot;XXXXX&quot;
				class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
				&lt;activiti:field name=&quot;message&quot;&gt;
					&lt;activiti:string&gt;&lt;/activiti:string&gt;
				&lt;/activiti:field&gt;
			&lt;/activiti:executionListener&gt;
			


			
			&lt;process id=&quot;process1&quot; name=&quot;process1&quot; isExecutable=&quot;true&quot;&gt;
				&lt;extensionElements&gt;
					&lt;activiti:executionListener event=&quot;end&quot;
						class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
						&lt;activiti:field name=&quot;message&quot;&gt;
							&lt;activiti:string&gt;&lt;![CDATA[流程结束]]&gt;&lt;/activiti:string&gt;
						&lt;/activiti:field&gt;
					&lt;/activiti:executionListener&gt;
					&lt;activiti:executionListener event=&quot;start&quot;
						class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
						&lt;activiti:field name=&quot;message&quot;&gt;
							&lt;activiti:string&gt;&lt;![CDATA[流程开始]]&gt;&lt;/activiti:string&gt;
						&lt;/activiti:field&gt;
					&lt;/activiti:executionListener&gt;
				&lt;/extensionElements&gt;
				&lt;startEvent id=&quot;startevent1&quot; name=&quot;Start&quot;&gt;&lt;/startEvent&gt;
				&lt;userTask id=&quot;usertask1&quot; name=&quot;Task 1&quot;&gt;
					&lt;extensionElements&gt;
						&lt;activiti:executionListener event=&quot;end&quot;
							class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
							&lt;activiti:field name=&quot;message&quot;&gt;
								&lt;activiti:string&gt;&lt;![CDATA[用户任务结束]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
						&lt;activiti:executionListener event=&quot;start&quot;
							class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
							&lt;activiti:field name=&quot;message&quot;&gt;
								&lt;activiti:string&gt;&lt;![CDATA[用户任务开始]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
					&lt;/extensionElements&gt;
				&lt;/userTask&gt;
				&lt;exclusiveGateway id=&quot;exclusivegateway1&quot; name=&quot;Exclusive Gateway&quot;&gt;
					&lt;extensionElements&gt;
						&lt;activiti:executionListener event=&quot;start&quot;
							class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
							&lt;activiti:field name=&quot;message&quot;&gt;
								&lt;activiti:string&gt;&lt;![CDATA[网关开始]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
					&lt;/extensionElements&gt;
				&lt;/exclusiveGateway&gt;
				&lt;intermediateThrowEvent id=&quot;signalintermediatethrowevent1&quot;
					name=&quot;SignalThrowEvent&quot;&gt;
					&lt;extensionElements&gt;
						&lt;activiti:executionListener event=&quot;end&quot;
							class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
							&lt;activiti:field name=&quot;message&quot;&gt;
								&lt;activiti:string&gt;&lt;![CDATA[中间事件结束]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
						&lt;activiti:executionListener event=&quot;start&quot;
							class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
							&lt;activiti:field name=&quot;message&quot;&gt;
								&lt;activiti:string&gt;&lt;![CDATA[中间事件开始]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
					&lt;/extensionElements&gt;
				&lt;/intermediateThrowEvent&gt;
				&lt;endEvent id=&quot;endevent1&quot; name=&quot;End&quot;&gt;&lt;/endEvent&gt;
				&lt;sequenceFlow id=&quot;flow1&quot; sourceRef=&quot;startevent1&quot;
					targetRef=&quot;exclusivegateway1&quot;&gt;
					&lt;extensionElements&gt;
						&lt;activiti:executionListener 
							class=&quot;org.crazyit.activiti.ExecutionListenerInvocation&quot;&gt;
							&lt;activiti:field name=&quot;message&quot; stringValue=&quot;从开始事件到网关的顺序流&quot;/&gt;
						&lt;/activiti:executionListener&gt;
					&lt;/extensionElements&gt;	
				&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id=&quot;flow3&quot; sourceRef=&quot;usertask1&quot;
					targetRef=&quot;signalintermediatethrowevent1&quot;&gt;&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id=&quot;flow4&quot; sourceRef=&quot;signalintermediatethrowevent1&quot;
					targetRef=&quot;endevent1&quot;&gt;&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id=&quot;flow5&quot; sourceRef=&quot;exclusivegateway1&quot;
					targetRef=&quot;usertask1&quot;&gt;&lt;/sequenceFlow&gt;
			&lt;/process&gt;
				
第十三章 其他流程元素	
	1.子流程：
		1.嵌入式子流程
			&lt;subProcess id=&quot;subprocess1&quot; name=&quot;Sub Process&quot;&gt;
				&lt;startEvent id=&quot;startevent2&quot; name=&quot;Start&quot;&gt;&lt;/startEvent&gt;
				&lt;serviceTask id=&quot;usertask2&quot; name=&quot;Sub Task&quot;
					activiti:class=&quot;org.crazyit.activiti.EmbededJavaDelegate&quot;&gt;&lt;/serviceTask&gt;
				&lt;endEvent id=&quot;endevent1&quot; name=&quot;End&quot;&gt;&lt;/endEvent&gt;
				&lt;sequenceFlow id=&quot;flow3&quot; sourceRef=&quot;startevent2&quot;
					targetRef=&quot;usertask2&quot;&gt;&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id=&quot;flow4&quot; sourceRef=&quot;usertask2&quot;
					targetRef=&quot;endevent1&quot;&gt;&lt;/sequenceFlow&gt;
			&lt;/subProcess&gt;
		
		
		
		2.调用式子流程

			&lt;callActivity id=&quot;subprocess1&quot; name=&quot;人事、总监子流程&quot; calledElement=&quot;SubProcess&quot;&gt;
				&lt;extensionElements&gt;
					&lt;activiti:in source=&quot;days&quot; target=&quot;newDays&quot;&gt;&lt;/activiti:in&gt;
					&lt;activiti:out source=&quot;myDays&quot; target=&quot;resultDays&quot;&gt;&lt;/activiti:out&gt;
				&lt;/extensionElements&gt;
			&lt;/callActivity&gt;
			
			// 部署流程文件
			repositoryService
					.createDeployment()
					.addClasspathResource(
							&quot;bpmn/CallActivityVariable.bpmn&quot;)
					.addClasspathResource(&quot;bpmn/SubProcess.bpmn&quot;)
					.deploy();		

		3.事件子流程
		4.事务子流程
		5.特别子流程
			bpmn不指定子流程的执行顺序,实际运行时指定运行顺序
			&lt;adHocSubProcess id=&quot;adhocSubProcess&quot; ordering=&quot;Sequential&quot;&gt;
				&lt;userTask id=&quot;subProcessTask&quot; name=&quot;Task in subprocess&quot; /&gt;
				&lt;userTask id=&quot;subProcessTask2&quot; name=&quot;Task2 in subprocess&quot; /&gt;
			&lt;/adHocSubProcess&gt;
			
			// 查询子流程的执行流
			Execution exe = runtimeService.createExecutionQuery()
					.processInstanceId(pi.getId()).activityId(&quot;adhocSubProcess&quot;)
					.singleResult();
			// 让执行流到达第二个任务
			runtimeService.executeActivityInAdhocSubProcess(exe.getId(),
					&quot;subProcessTask2&quot;);	
			
			// 完成第二个任务
			Task subProcessTask2 = taskService.createTaskQuery()
					.processInstanceId(pi.getId())
					.taskDefinitionKey(&quot;subProcessTask2&quot;).singleResult();
			taskService.complete(subProcessTask2.getId());

			// 完成特别子流程✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
			//✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
			runtimeService.completeAdhocSubProcess(exe.getId());
			//✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
		
	2.顺序流与网关：
		顺序流：
			条件顺序流
				&lt;sequenceFlow id=&quot;flow4&quot; name=&quot;小于等于5天&quot; sourceRef=&quot;exclusivegateway1&quot;
					targetRef=&quot;usertask2&quot;&gt;
					&lt;conditionExpression xsi:type=&quot;tFormalExpression&quot;&gt;
					&lt;![CDATA[
					\${days &lt;= 5}
					]]&gt;
					&lt;/conditionExpression&gt;
				&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id=&quot;flow5&quot; name=&quot;大于5天&quot; sourceRef=&quot;exclusivegateway1&quot;
					targetRef=&quot;usertask3&quot;&gt;
					&lt;conditionExpression xsi:type=&quot;tFormalExpression&quot;&gt;
					&lt;![CDATA[
					\${days &gt; 5}
					]]&gt;
					&lt;/conditionExpression&gt;
				&lt;/sequenceFlow&gt;

				执行示例：
				Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
				vars.put(&quot;days&quot;, 6);
				ProcessInstance pi = runtimeService.startProcessInstanceByKey(
				&quot;process1&quot;, vars);
			默认顺序流
				&lt;userTask id=&quot;usertask1&quot; name=&quot;填写请假申请&quot; default=&quot;flow1&quot;&gt;&lt;/userTask&gt;
				
				&lt;sequenceFlow id=&quot;flow1&quot; sourceRef=&quot;usertask1&quot; targetRef=&quot;usertask2&quot;&gt;&lt;/sequenceFlow&gt;

				&lt;sequenceFlow id=&quot;flow2&quot; sourceRef=&quot;usertask1&quot; targetRef=&quot;usertask3&quot;&gt;
					&lt;conditionExpression xsi:type=&quot;tFormalExpression&quot;&gt;&lt;![CDATA[
					\${days &gt; 5}
					]]&gt;&lt;/conditionExpression&gt;
				&lt;/sequenceFlow&gt;
				
		流程网关：
			单向网关
			并行网关
			兼容网关
			事件网关
			组合网关（Activiti不支持）

			单向网关
			并行网关：
				分叉 合并
			兼容网关：
				单向网关和并行网关结合
			事件网关：
				哪个事件先触发，就转向哪一个执行流
				事件网关只会选择最先触发的事件所在的分支向前执行
	
	3.流程活动的特性：
		1.多实例活动
			&lt;multiInstanceLoopCharacteristics
				isSequential=&quot;true&quot;&gt;
				&lt;loopCardinality&gt;2&lt;/loopCardinality&gt;
			&lt;/multiInstanceLoopCharacteristics&gt;
		2.设置循环数据
			&lt;multiInstanceLoopCharacteristics
				isSequential=&quot;false&quot; activiti:collection=&quot;datas1&quot;&gt;
			&lt;/multiInstanceLoopCharacteristics&gt;
			
			List&lt;String&gt; datas1 = new ArrayList&lt;String&gt;();
			datas1.add(&quot;a&quot;);
			datas1.add(&quot;b&quot;);
			Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
			vars.put(&quot;datas1&quot;, datas1);
			ProcessInstance pi = runtimeService.startProcessInstanceByKey(
				&quot;process1&quot;, vars);
		3.获取循环元素
			&lt;multiInstanceLoopCharacteristics
				isSequential=&quot;true&quot; activiti:collection=&quot;datas1&quot;
				activiti:elementVariable=&quot;data&quot;&gt;
			&lt;/multiInstanceLoopCharacteristics&gt;

			public class ServiceB implements JavaDelegate {

				public void execute(DelegateExecution execution) {
				
					System.out.println(&quot;获取循环参数：&quot; + execution.getVariable(&quot;data&quot;));
				}
			}
		4.循环的内置参数
			nrOfInstances:实例总数
			nrOfActiveInstances:当前正在执行的实例总数	
			nrOfCompletedInstances:已经完成的实例总数
			loopCounter:当前循环的索引
		5.循环结束条件
			&lt;completionCondition&gt;\${nrOfCompletedInstances &gt;= 2}&lt;/completionCondition&gt;
			
			&lt;multiInstanceLoopCharacteristics
				isSequential=&quot;true&quot; activiti:collection=&quot;\${datas}&quot;
				activiti:elementVariable=&quot;data&quot;&gt;
				&lt;completionCondition&gt;\${nrOfCompletedInstances &gt;= 2}&lt;/completionCondition&gt;
			&lt;/multiInstanceLoopCharacteristics&gt;

第十四章 Activiti与规则引擎			
	1.Drools介绍与运行
		代码与业务规则分离
	2.规则语法
		全局变量
		函数
		规则属性
			activation-group 激活组，组内只有一个规则会被激活
			salience 优先级
		条件语法
			when then
		行为语法
			修改事实对象
			insert
			update
	3.Activiti整合Drools
		&lt;property name=&quot;customPostDeployers&quot;&gt;
			&lt;list&gt;
				&lt;bean class=&quot;org.activiti.engine.impl.rules.RulesDeployer&quot; /&gt;
			&lt;/list&gt;
		&lt;/property&gt;	
		
		&lt;businessRuleTask id=&quot;businessruletask1&quot; name=&quot;匹配销售规则&quot; 
			activiti:ruleVariablesInput=&quot;\${member}&quot; 
			activiti:resultVariable=&quot;members&quot;&gt; &lt;/businessRuleTask&gt;

第十五章 基于DMN的Activiti规则引擎
	1.DMN规范
	2.规则引擎使用
	3.MVEL表达式

第十六章 整合第三方框架
	
	引擎，各种服务，都可以直接注入

第十七章 Rest
	
第十八章 
	表单
	流程图与XML的转换
	回退
	会签
	



		
		
		

	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[l];function v(r,a){return i(),n("div",null,d)}const o=t(s,[["render",v],["__file","activiti6基础笔记.html.vue"]]);export{o as default};

import{_ as n,c as s,o as p,ag as e}from"./chunks/framework.DPDPlp3K.js";const g=JSON.parse('{"title":"SpringCloud基础总结","description":"","frontmatter":{"title":"SpringCloud基础总结","date":"2020-01-01T09:02:55.000Z","categories":["后端框架","SpringCloud"],"tags":["SpringCloud"],"sidebar":"heading"},"headers":[],"relativePath":"notes/be/frame/spring/springcloud/index.md","filePath":"notes/be/frame/spring/springcloud/index.md"}'),l={name:"notes/be/frame/spring/springcloud/index.md"};function i(t,a,r,o,c,d){return p(),s("div",null,a[0]||(a[0]=[e(`<h1 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h1><h2 id="_1-集群-同一个业务-部署在多个服务器" tabindex="-1">1.集群：同一个业务，部署在多个服务器 <a class="header-anchor" href="#_1-集群-同一个业务-部署在多个服务器" aria-label="Permalink to &quot;1.集群：同一个业务，部署在多个服务器&quot;">​</a></h2><p>​ （不同的服务器运行同样的代码，干同一件事）</p><h2 id="_2-分布式-一个业务分拆多个子业务-部署在不同的服务器上" tabindex="-1">2.分布式：一个业务分拆多个子业务，部署在不同的服务器上 <a class="header-anchor" href="#_2-分布式-一个业务分拆多个子业务-部署在不同的服务器上" aria-label="Permalink to &quot;2.分布式：一个业务分拆多个子业务，部署在不同的服务器上&quot;">​</a></h2><p>​ （不同的服务器，运行不同的代码，为了同一个目的）</p><h2 id="_3-为什么需要springcloud-一个大项目拆分出多个模块后-会出现各种各样的问题" tabindex="-1">3.为什么需要springcloud：一个大项目拆分出多个模块后，会出现各种各样的问题， <a class="header-anchor" href="#_3-为什么需要springcloud-一个大项目拆分出多个模块后-会出现各种各样的问题" aria-label="Permalink to &quot;3.为什么需要springcloud：一个大项目拆分出多个模块后，会出现各种各样的问题，&quot;">​</a></h2><p>​ 而springcloud提供了一整套的解决方案。</p><h2 id="_4-springcloud功能" tabindex="-1">4.springcloud功能: <a class="header-anchor" href="#_4-springcloud功能" aria-label="Permalink to &quot;4.springcloud功能:&quot;">​</a></h2><p>​ 基础功能： ​ 服务治理 Spring Cloud Eureka ​ 客户端负载均衡 Spring Cloud Ribbon ​ 服务容错保护 Spring Cloud Hystrix ​ 声明式服务调用 Spring Cloud Feign ​ API网关服务 Spring Cloud Zuul ​ 分布式配置中心 Spring Cloud Config ​ 高级功能： ​ 消息总线 Spring Cloud Bus ​ 消息驱动的微服务 Spring Cloud Stream ​ 分布式服务跟踪 Spring Cloud Sleuth</p><h2 id="_5-降级、熔断、限流" tabindex="-1">5.降级、熔断、限流 <a class="header-anchor" href="#_5-降级、熔断、限流" aria-label="Permalink to &quot;5.降级、熔断、限流&quot;">​</a></h2><p>​ 降级：降低服务的可用性，或关闭服务 ​ 熔断：超过设置的阈值后，直接断绝对外部接口的调用 ​ 限流：限制请求数，超过设置数的请求直接关闭</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>第1章 springcloud概述</span></span>
<span class="line"><span></span></span>
<span class="line"><span>架构要求：</span></span>
<span class="line"><span>	高性能</span></span>
<span class="line"><span>	独立</span></span>
<span class="line"><span>	容易扩展</span></span>
<span class="line"><span>	便于管理</span></span>
<span class="line"><span>	状态监控与警报</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第2章 搭建开发环境</span></span>
<span class="line"><span>	1.发布RESTWebService服务</span></span>
<span class="line"><span>	2.配置文件的位置</span></span>
<span class="line"><span>	3.yml文件</span></span>
<span class="line"><span>	4.运行时指定配置选择，profiles</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第3章 微服务发布与调用</span></span>
<span class="line"><span>	1.Euraka</span></span>
<span class="line"><span>		服务器端</span></span>
<span class="line"><span>		服务提供者</span></span>
<span class="line"><span>		服务调用者</span></span>
<span class="line"><span>	2.demo</span></span>
<span class="line"><span>	3.Eureka集群搭建</span></span>
<span class="line"><span>		服务器端互相注册</span></span>
<span class="line"><span>		服务提供者在每个服务器端都注册</span></span>
<span class="line"><span>		服务调用者在每个服务器端都注册</span></span>
<span class="line"><span>	4.健康自检</span></span></code></pre></div>`,12)]))}const h=n(l,[["render",i]]);export{g as __pageData,h as default};

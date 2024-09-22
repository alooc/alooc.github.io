import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,b as d}from"./app-b0773e9a.js";const r={},a=d(`<h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1><h2 id="_1-集群-同一个业务-部署在多个服务器" tabindex="-1"><a class="header-anchor" href="#_1-集群-同一个业务-部署在多个服务器" aria-hidden="true">#</a> 1.集群：同一个业务，部署在多个服务器</h2><p>​ （不同的服务器运行同样的代码，干同一件事）</p><h2 id="_2-分布式-一个业务分拆多个子业务-部署在不同的服务器上" tabindex="-1"><a class="header-anchor" href="#_2-分布式-一个业务分拆多个子业务-部署在不同的服务器上" aria-hidden="true">#</a> 2.分布式：一个业务分拆多个子业务，部署在不同的服务器上</h2><p>​ （不同的服务器，运行不同的代码，为了同一个目的）</p><h2 id="_3-为什么需要springcloud-一个大项目拆分出多个模块后-会出现各种各样的问题" tabindex="-1"><a class="header-anchor" href="#_3-为什么需要springcloud-一个大项目拆分出多个模块后-会出现各种各样的问题" aria-hidden="true">#</a> 3.为什么需要springcloud：一个大项目拆分出多个模块后，会出现各种各样的问题，</h2><p>​ 而springcloud提供了一整套的解决方案。</p><h2 id="_4-springcloud功能" tabindex="-1"><a class="header-anchor" href="#_4-springcloud功能" aria-hidden="true">#</a> 4.springcloud功能:</h2><p>​ 基础功能：<br> ​ 服务治理 Spring Cloud Eureka<br> ​ 客户端负载均衡 Spring Cloud Ribbon<br> ​ 服务容错保护 Spring Cloud Hystrix<br> ​ 声明式服务调用 Spring Cloud Feign<br> ​ API网关服务 Spring Cloud Zuul<br> ​ 分布式配置中心 Spring Cloud Config<br> ​ 高级功能：<br> ​ 消息总线 Spring Cloud Bus<br> ​ 消息驱动的微服务 Spring Cloud Stream<br> ​ 分布式服务跟踪 Spring Cloud Sleuth</p><h2 id="_5-降级、熔断、限流" tabindex="-1"><a class="header-anchor" href="#_5-降级、熔断、限流" aria-hidden="true">#</a> 5.降级、熔断、限流</h2><p>​ 降级：降低服务的可用性，或关闭服务<br> ​ 熔断：超过设置的阈值后，直接断绝对外部接口的调用<br> ​ 限流：限制请求数，超过设置数的请求直接关闭</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第1章 springcloud概述

架构要求：
	高性能
	独立
	容易扩展
	便于管理
	状态监控与警报

第2章 搭建开发环境
	1.发布RESTWebService服务
	2.配置文件的位置
	3.yml文件
	4.运行时指定配置选择，profiles

第3章 微服务发布与调用
	1.Euraka
		服务器端
		服务提供者
		服务调用者
	2.demo
	3.Eureka集群搭建
		服务器端互相注册
		服务提供者在每个服务器端都注册
		服务调用者在每个服务器端都注册
	4.健康自检
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),s=[a];function l(t,c){return e(),n("div",null,s)}const b=i(r,[["render",l],["__file","基础总结.html.vue"]]);export{b as default};

const e=JSON.parse(`{"key":"v-7a1ee8c4","path":"/blog/old/beframework/swagger/swagger.html","title":"swagger使用指南","lang":"zh-CN","frontmatter":{"title":"swagger使用指南","sidebar":"heading","category":["后端框架","swagger"],"tag":["swagger"],"description":"是什么： Swagger是一个规范完整的API框架，用于生成、描述、调用和可视化Restful风格的Web服务的接口文档。 springfox是swagger的一个开源实现，用在以SpringBoot作为后台的开发框架中。swagger是一款流行的API管理管理。 springfox实现了Swagger UI 和Swagger-Core。 在SpringBoot开发中，可以很方便地使用maven和gradle引入。 Springfox 是一个集成了 Swagger，基于 Sring MVC/Spring Webflux 实现的一 个 Swagger 描述文件生成框架，通过使用它定义的一些描述接口的注解自动生成 Swagger 的描述文件，使 Swagger 能够展示并调用接口。springfox通过spring-plugin的方式将Plugin注册到Spring上下文中，然后使用这些plugin进行API的扫描工作，这里的扫描工作其实也就是构造Documentation的工作，把扫描出的结果封装成Documentation并放入到DocumentationCache内存缓存中，之后swagger-ui界面展示的API信息通过Swagger2Controller暴露，Swagger2Controller内部直接从DocumentationCache中寻找Documentation。是一个开源的API Doc的框架， 它的前身是swagger-springmvc，可以将我们的Controller中的方法以文档的形式展现。官方定义为： Automated JSON API documentation for API's built with Spring。","head":[["meta",{"property":"og:url","content":"https://alooc.github.io/blog/old/beframework/swagger/swagger.html"}],["meta",{"property":"og:site_name","content":"Alooc"}],["meta",{"property":"og:title","content":"swagger使用指南"}],["meta",{"property":"og:description","content":"是什么： Swagger是一个规范完整的API框架，用于生成、描述、调用和可视化Restful风格的Web服务的接口文档。 springfox是swagger的一个开源实现，用在以SpringBoot作为后台的开发框架中。swagger是一款流行的API管理管理。 springfox实现了Swagger UI 和Swagger-Core。 在SpringBoot开发中，可以很方便地使用maven和gradle引入。 Springfox 是一个集成了 Swagger，基于 Sring MVC/Spring Webflux 实现的一 个 Swagger 描述文件生成框架，通过使用它定义的一些描述接口的注解自动生成 Swagger 的描述文件，使 Swagger 能够展示并调用接口。springfox通过spring-plugin的方式将Plugin注册到Spring上下文中，然后使用这些plugin进行API的扫描工作，这里的扫描工作其实也就是构造Documentation的工作，把扫描出的结果封装成Documentation并放入到DocumentationCache内存缓存中，之后swagger-ui界面展示的API信息通过Swagger2Controller暴露，Swagger2Controller内部直接从DocumentationCache中寻找Documentation。是一个开源的API Doc的框架， 它的前身是swagger-springmvc，可以将我们的Controller中的方法以文档的形式展现。官方定义为： Automated JSON API documentation for API's built with Spring。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-20T16:15:20.000Z"}],["meta",{"property":"article:author","content":"Alooc"}],["meta",{"property":"article:tag","content":"swagger"}],["meta",{"property":"article:modified_time","content":"2024-09-20T16:15:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"swagger使用指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-20T16:15:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alooc\\",\\"url\\":\\"https://alooc.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1、示例","slug":"_1、示例","link":"#_1、示例","children":[{"level":3,"title":"1、引入依赖","slug":"_1、引入依赖","link":"#_1、引入依赖","children":[]},{"level":3,"title":"2、修改路径匹配策略","slug":"_2、修改路径匹配策略","link":"#_2、修改路径匹配策略","children":[]},{"level":3,"title":"3、添加配置文件","slug":"_3、添加配置文件","link":"#_3、添加配置文件","children":[]},{"level":3,"title":"4、测试","slug":"_4、测试","link":"#_4、测试","children":[]},{"level":3,"title":"5、访问","slug":"_5、访问","link":"#_5、访问","children":[]}]},{"level":2,"title":"2、使用","slug":"_2、使用","link":"#_2、使用","children":[{"level":3,"title":"1、注解","slug":"_1、注解","link":"#_1、注解","children":[]},{"level":3,"title":"2、其他配置","slug":"_2、其他配置","link":"#_2、其他配置","children":[]},{"level":3,"title":"3、集成security","slug":"_3、集成security","link":"#_3、集成security","children":[]},{"level":3,"title":"4、使用knife4j美化界面","slug":"_4、使用knife4j美化界面","link":"#_4、使用knife4j美化界面","children":[]}]}],"git":{"createdTime":1726848920000,"updatedTime":1726848920000,"contributors":[{"name":"alooc","email":"zbsx508@gmail.com","commits":1}]},"readingTime":{"minutes":5.46,"words":1637},"filePathRelative":"blog/old/beframework/swagger/swagger.md","localizedDate":"2024年9月20日","excerpt":"<h1> 是什么：</h1>\\n<blockquote>\\n<p>Swagger是一个规范完整的API框架，用于生成、描述、调用和可视化Restful风格的Web服务的接口文档。</p>\\n</blockquote>\\n<blockquote>\\n<p>springfox是swagger的一个开源实现，用在以SpringBoot作为后台的开发框架中。swagger是一款流行的API管理管理。 springfox实现了Swagger UI 和Swagger-Core。 在SpringBoot开发中，可以很方便地使用maven和gradle引入。</p>\\n<p>Springfox 是一个集成了 Swagger，基于 Sring MVC/Spring Webflux 实现的一 个 Swagger 描述文件生成框架，通过使用它定义的一些描述接口的注解自动生成 Swagger 的描述文件，使 Swagger 能够展示并调用接口。springfox通过spring-plugin的方式将Plugin注册到Spring上下文中，然后使用这些plugin进行API的扫描工作，这里的扫描工作其实也就是构造Documentation的工作，把扫描出的结果封装成Documentation并放入到DocumentationCache内存缓存中，之后swagger-ui界面展示的API信息通过Swagger2Controller暴露，Swagger2Controller内部直接从DocumentationCache中寻找Documentation。是一个开源的API Doc的框架， 它的前身是swagger-springmvc，可以将我们的Controller中的方法以文档的形式展现。官方定义为： Automated JSON API documentation for API's built with Spring。</p>\\n</blockquote>","autoDesc":true}`);export{e as data};
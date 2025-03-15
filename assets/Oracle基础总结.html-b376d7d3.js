import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-475ca235.js";const t={},p=e(`<h1 id="游标" tabindex="-1"><a class="header-anchor" href="#游标" aria-hidden="true">#</a> 游标</h1><h1 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h1><p>​ 创建、删除、位图索引、组合索引<br> ​ create index index_name on table_name(table_column)</p><h1 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器" aria-hidden="true">#</a> 触发器</h1><p>​ 语句级触发器<br> ​ 行级触发器<br> ​ 触发器功能：<br> ​ 1.允许/限制对表的修改<br> ​ 2.自动生成派生列，比如自增字段<br> ​ 3.强制数据一致性<br> ​ 4.提供审计和日志记录<br> ​ 5.防止无效的事务处理<br> ​ 6.启用复杂的业务逻辑<br> ​ create or replace trigger tri_name<br> ​ [before | after | instead of] tri_event<br> ​ on table_name | view_name | user_name |db_name<br> ​ [ for each row] [when tri_condition]<br> ​ begin<br> ​ plsql_sentences;<br> ​ end tri_name;<br> ​</p><pre><code>		说明：
			:NEW 修饰符访问操作完成后列的值
			:OLD 修饰符访问操作完成前列的值
	参考文章：https://segmentfault.com/a/1190000021096635
</code></pre><h1 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h1><p>​ 定义一个sql方法<br> ​</p><pre><code>plsql是对sql的扩展，可实现复杂的逻辑处理
</code></pre><h1 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h1><p>​ 两种锁定策略：<br> ​ 悲观锁 pessimistic locking 在用户修改数值之前就已经开始生效了。我们在试图更新之前就把行锁住了，因此我们很悲观。<br> ​ 乐观锁 optimistic locking 把所有锁定的动作都延迟到即将执行更新之前才进行。我们会修改屏幕上的信息而不需要先锁住它。<br> ​ 我们很乐观，认为数据不会被其他用户修改。因此会等到最后一刻才去看我们的想法对不对。<br> ​ 虚拟列：<br> ​ 比视图好用，根据其他列的计算生成 virtual_name as (a+b+c)</p><h1 id="数据库日志表" tabindex="-1"><a class="header-anchor" href="#数据库日志表" aria-hidden="true">#</a> 数据库日志表</h1><p>​ oracle日志文件：<br> ​ 重做日志文件：<br> ​ 主要记录数据库的操作过程，可以在进行数据库恢复时，将重做日志文件在还原的数据库上进行执行，以达到数据库的最新状态。</p><pre><code>	归档日志文件：
		重做日志放满后，将被覆盖的放到归档日志文件中。
</code></pre><h1 id="批处理" tabindex="-1"><a class="header-anchor" href="#批处理" aria-hidden="true">#</a> 批处理</h1><p>​ 脚本语言</p><p>merge into tablename<br> using table|select...<br> on ...<br> update|insert ...</p><p>merge into 效率更好</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--基础</span>
nvl
decode
to_char
to_date
<span class="token keyword">comment</span> <span class="token keyword">on</span> <span class="token keyword">table</span> das<span class="token punctuation">.</span>service_efficiency <span class="token operator">is</span> <span class="token string">&#39;服务效率表&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">comment</span> <span class="token keyword">on</span> <span class="token keyword">column</span> das<span class="token punctuation">.</span>service_efficiency<span class="token punctuation">.</span>se_id <span class="token operator">is</span> <span class="token string">&#39;主键ID&#39;</span><span class="token punctuation">;</span>
<span class="token comment">--主键</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> das<span class="token punctuation">.</span>monitor_summary
  <span class="token punctuation">(</span>msu_id<span class="token punctuation">)</span>
  <span class="token punctuation">(</span><span class="token keyword">select</span> sys_guid<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token comment">--时间</span>
<span class="token keyword">select</span> sysdate <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
<span class="token comment">--条件</span>
<span class="token keyword">case</span>
	<span class="token keyword">when</span> to_char<span class="token punctuation">(</span>count_time<span class="token punctuation">,</span> <span class="token string">&#39;mm&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">7</span> <span class="token keyword">then</span>
	 to_char<span class="token punctuation">(</span>count_time<span class="token punctuation">,</span> <span class="token string">&#39;YYYY&quot;上半年&quot;&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">when</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">then</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token keyword">when</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">then</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token punctuation">[</span><span class="token keyword">else</span>
	 to_char<span class="token punctuation">(</span>count_time<span class="token punctuation">,</span> <span class="token string">&#39;YYYY&quot;下半年&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">end</span> 半年
<span class="token comment">--FM0099.99 格式化数字类型的格式</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>para<span class="token punctuation">,</span><span class="token string">&#39;FM990.00&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> tablename<span class="token punctuation">;</span>
<span class="token comment">--0表示：如果参数存在数字就希纳是数字，不存在数字就显示0</span>
<span class="token comment">--9表示：如果参数存在数字就显示数字，不存在数字就显示空格</span>
<span class="token comment">--FM表示：将9带来的空格删除</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token string">&#39;FM9000.00&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
sql总结
*/</span>
<span class="token comment">----tns配置</span>

ora3 <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
    <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> <span class="token number">10.1</span><span class="token number">.50</span><span class="token number">.23</span><span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span>
		  <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> DEDICATED<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> dwks<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

<span class="token comment">----ddl</span>
<span class="token comment">--创建用户</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> username identified <span class="token keyword">by</span> password<span class="token punctuation">;</span>
<span class="token comment">--创建表空间</span>
<span class="token keyword">create</span> <span class="token keyword">tablespace</span> ts_username_name datafile <span class="token string">&quot;I:\\dworcl\\oradata\\dworcl\\ts_dw_z1.dbf&quot;</span> size <span class="token number">100</span>M<span class="token punctuation">;</span>
<span class="token comment">--创建表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> tablename <span class="token punctuation">(</span>
				colname  coltype<span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
				<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
				<span class="token keyword">constraint</span> pk_username_tablename_colname <span class="token keyword">primary</span> <span class="token keyword">key</span> colname<span class="token punctuation">,</span>
				<span class="token keyword">constraint</span> fk_username_tablename_colname <span class="token keyword">foreign</span> <span class="token keyword">key</span> colname <span class="token keyword">references</span> reftablename<span class="token punctuation">(</span>colname<span class="token punctuation">)</span>
				<span class="token punctuation">)</span> <span class="token keyword">tablespace</span> spacename<span class="token punctuation">;</span>
<span class="token comment">--创建序列</span>
<span class="token keyword">create</span> sequence username<span class="token punctuation">.</span>seqname <span class="token keyword">start</span> <span class="token keyword">with</span> <span class="token number">100</span> increment <span class="token keyword">by</span> <span class="token number">1</span> minvalue <span class="token number">100</span> maxvalue <span class="token number">99999</span> cache <span class="token number">20</span> <span class="token keyword">cycle</span><span class="token operator">|</span>nocycle<span class="token punctuation">;</span>
<span class="token comment">--创建索引</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> username<span class="token punctuation">.</span>idx_name <span class="token keyword">on</span> username<span class="token punctuation">.</span>tablename<span class="token punctuation">(</span>colname<span class="token punctuation">)</span> <span class="token keyword">tablespace</span> ts_name<span class="token punctuation">;</span>
<span class="token comment">--创建临时表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> username<span class="token punctuation">.</span>temp_tablename <span class="token keyword">tablespace</span> spacename
<span class="token keyword">as</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tablename<span class="token punctuation">;</span>
<span class="token comment">----dml</span>
<span class="token comment">--插入</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> dw<span class="token punctuation">.</span>m_order_temp
  <span class="token punctuation">(</span>ddbh<span class="token punctuation">,</span> brbh<span class="token punctuation">,</span> yljgid<span class="token punctuation">,</span> cfid<span class="token punctuation">,</span> zje<span class="token punctuation">,</span> tc<span class="token punctuation">,</span> grfd<span class="token punctuation">,</span> ddsj<span class="token punctuation">)</span>
  <span class="token keyword">select</span> <span class="token operator">*</span>
    <span class="token keyword">from</span> dw<span class="token punctuation">.</span>m_order a
   <span class="token keyword">where</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span>
            <span class="token keyword">from</span> dw<span class="token punctuation">.</span>m_order_detl b
           <span class="token keyword">where</span> a<span class="token punctuation">.</span>ddbh <span class="token operator">=</span> b<span class="token punctuation">.</span>ddbh
             <span class="token operator">and</span> b<span class="token punctuation">.</span>spmbh <span class="token operator">=</span> <span class="token string">&#39;861234568&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--更新</span>
<span class="token keyword">update</span> dw<span class="token punctuation">.</span>institution_natl a
   <span class="token keyword">set</span> yljgmc <span class="token operator">=</span> <span class="token keyword">replace</span><span class="token punctuation">(</span>yljgmc<span class="token punctuation">,</span> <span class="token string">&#39;意愿&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;医院&#39;</span><span class="token punctuation">)</span>
 <span class="token keyword">where</span> yljgmc <span class="token operator">like</span> <span class="token string">&#39;%意愿%&#39;</span>
   <span class="token operator">and</span> <span class="token keyword">exists</span>
 <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span> <span class="token keyword">from</span> dw<span class="token punctuation">.</span>institution_natl b <span class="token keyword">where</span> a<span class="token punctuation">.</span>yljgid <span class="token operator">=</span> b<span class="token punctuation">.</span>yljgid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--删除 </span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> tablename <span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token comment">----dql</span>
<span class="token keyword">select</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">from</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">having</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token comment">----dcl</span>
<span class="token comment">--赋权</span>
<span class="token keyword">grant</span> dba <span class="token keyword">to</span> username<span class="token punctuation">;</span>
<span class="token comment">--收权</span>
<span class="token keyword">revoke</span> dba <span class="token keyword">from</span> username<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","Oracle基础总结.html.vue"]]);export{k as default};

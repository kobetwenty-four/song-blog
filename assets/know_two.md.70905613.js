import{o as n,c as s,d as a}from"./app.ed5dff4a.js";const p='{"title":"第二章 webgl简单入门教程","description":"","frontmatter":{},"headers":[{"level":2,"title":"webgl在画布刷底色","slug":"webgl在画布刷底色"},{"level":2,"title":"css颜色转webgl颜色","slug":"css颜色转webgl颜色"},{"level":2,"title":"案列---多姿多彩的画布","slug":"案列-多姿多彩的画布"},{"level":2,"title":"canvas 2d坐标系","slug":"canvas-2d坐标系"},{"level":2,"title":"webgl坐标系","slug":"webgl坐标系"}],"relativePath":"know/two.md","lastUpdated":1630893132513}',t={},e=[a('<h1 id="第二章-webgl简单入门教程"><a class="header-anchor" href="#第二章-webgl简单入门教程" aria-hidden="true">#</a> 第二章 webgl简单入门教程</h1><hr><h2 id="webgl在画布刷底色"><a class="header-anchor" href="#webgl在画布刷底色" aria-hidden="true">#</a> webgl在画布刷底色</h2><p>    1. 在html中建立canvas 画布</p><p>    <code>&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;</code></p><p>    2. 在js中获取canvas 画布</p><p>    <code>const canvas = document.getElementById(&#39;canvas&#39;)</code></p><p>    3. 使用canvas 获取webgl 绘图上下文</p><p>    <code>const gl = canvas.getContext(&#39;webgl&#39;)</code></p><p>    4. 指定将要用来清空绘图区的颜色</p><p>    <code>gl.clearColor(0,0,0,1)</code></p><p>    5. 使用之前指定的颜色，清空绘图区</p><p>    <code>gl.clear(gl_COLOR_BUFFER_BIT)</code></p><p>    完整代码</p><div class="language-html line-numbers-mode"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">*</span> <span class="token punctuation">{</span>\n      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">#canvas</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 在html中建立canvas 画布 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token comment">// 在js中获取canvas 画布</span>\n    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#canvas&#39;</span><span class="token punctuation">)</span>\n    <span class="token comment">// 设置canvas画布宽高</span>\n    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth\n    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight\n    <span class="token comment">// 获取webgl绘图上下文</span>\n    <span class="token keyword">const</span> gl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;webgl&#39;</span><span class="token punctuation">)</span>\n    <span class="token comment">// 指定将要用来清空绘图区的颜色</span>\n    gl<span class="token punctuation">.</span><span class="token function">clearColor</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token comment">// 使用之前指定的颜色，清空绘图区</span>\n    gl<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">COLOR_BUFFER_BIT</span><span class="token punctuation">)</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="css颜色转webgl颜色"><a class="header-anchor" href="#css颜色转webgl颜色" aria-hidden="true">#</a> css颜色转webgl颜色</h2><p>    1. 定义css颜色</p><p>    <code>const rgbaCss = &#39;(0,255,255,1)&#39;</code></p><p>     2. 定义正则      <code>\\(\\)表示先找到小括号 (.*)的()表示捕捉括号,(.*)捕捉括号里的所有东西</code></p><p>    <code>const reg = /\\((.*)\\)/</code></p><p>     3. 捕捉数据      <code>reg.exec(rgbaCss) 结果是个数组[&quot;(0,255,255,1)&quot;,&quot;0,255,255,1&quot;]</code></p><p>     <code>const rgbaStr = reg.exec(rgbaCss)[1]</code></p><p>     4. 加工数据      <code>webgl颜色r,g,b,a范围是0-1</code></p><p>     <code>const [r,g,b,a] = glColor.split(&#39;,&#39;).map((n,i) =&gt;i&lt;3?+n/255:+n)</code></p><p>     5. 声明颜色</p><p>     <code>gl.clearColor(r,g,b,a)</code></p><p>     6. 刷底色</p><p>     <code>gl.clear(gl.COLOR_BUFFER_BIT)</code></p><p>     完整代码</p><div class="language-html line-numbers-mode"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">*</span> <span class="token punctuation">{</span>\n      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">#canvas</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 在html中建立canvas 画布 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token comment">// 在js中获取canvas 画布</span>\n    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#canvas&#39;</span><span class="token punctuation">)</span>\n    <span class="token comment">// 设置canvas画布宽高</span>\n    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth\n    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight\n    <span class="token comment">// 获取webgl绘图上下文</span>\n    <span class="token keyword">const</span> gl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;webgl&#39;</span><span class="token punctuation">)</span>\n    <span class="token comment">// 指定将要用来清空绘图区的颜色</span>\n    gl<span class="token punctuation">.</span><span class="token function">clearColor</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token comment">// 使用之前指定的颜色，清空绘图区</span>\n    gl<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">COLOR_BUFFER_BIT</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> rgbaCss <span class="token operator">=</span> <span class="token string">&#39;(0,255,255,1)&#39;</span>\n    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\((.*)\\)</span><span class="token regex-delimiter">/</span></span>\n    <span class="token keyword">const</span> rgbaStr <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>rgbaCss<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a<span class="token punctuation">]</span> <span class="token operator">=</span> rgbaStr<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token operator">+</span>n <span class="token operator">/</span> <span class="token number">255</span> <span class="token operator">:</span> <span class="token operator">+</span>n<span class="token punctuation">)</span>\n\n    <span class="token comment">// 声明颜色</span>\n    gl<span class="token punctuation">.</span><span class="token function">clearColor</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a<span class="token punctuation">)</span>\n    <span class="token comment">// 刷底色</span>\n    gl<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">COLOR_BUFFER_BIT</span><span class="token punctuation">)</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="案列-多姿多彩的画布"><a class="header-anchor" href="#案列-多姿多彩的画布" aria-hidden="true">#</a> 案列---多姿多彩的画布</h2><p>     用到threejs的Color库</p><p>     链接地址: <a href="http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Color" target="_blank" rel="noopener noreferrer">http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Color</a></p><p>     完整代码</p><div class="language-html line-numbers-mode"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>多彩画布<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">body</span> <span class="token punctuation">{</span>\n      <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>\n      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">#canvas</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token comment">// 引入threejs Color对象</span>\n    <span class="token keyword">import</span> <span class="token punctuation">{</span> Color <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/three/build/three.module.js&#39;</span>\n    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#canvas&#39;</span><span class="token punctuation">)</span>\n    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth\n    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight\n    <span class="token comment">// 3维画笔</span>\n    <span class="token keyword">const</span> gl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;webgl&#39;</span><span class="token punctuation">)</span>\n    gl<span class="token punctuation">.</span><span class="token function">clearColor</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>\n    gl<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">COLOR_BUFFER_BIT</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 实例化Color对象</span>\n    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token string">&#39;rgba(255,0,255,1)&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>r<span class="token punctuation">,</span>g<span class="token punctuation">,</span>b<span class="token punctuation">}</span> <span class="token operator">=</span> color\n    gl<span class="token punctuation">.</span><span class="token function">clearColor</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span>g<span class="token punctuation">,</span>b<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>\n    gl<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">COLOR_BUFFER_BIT</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 动画驱动</span>\n    <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">ani</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 色相偏移 色相(H) 饱和度(S) 亮度(L)</span>\n      color<span class="token punctuation">.</span><span class="token function">offsetHSL</span><span class="token punctuation">(</span><span class="token number">0.005</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span>r<span class="token punctuation">,</span>g<span class="token punctuation">,</span>b<span class="token punctuation">}</span> <span class="token operator">=</span> color\n      gl<span class="token punctuation">.</span><span class="token function">clearColor</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span>g<span class="token punctuation">,</span>b<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>\n      gl<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">COLOR_BUFFER_BIT</span><span class="token punctuation">)</span>\n      <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>ani<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="canvas-2d坐标系"><a class="header-anchor" href="#canvas-2d坐标系" aria-hidden="true">#</a> canvas 2d坐标系</h2><p>     canvas 2d 坐标系的原点在左上角。</p><p>     canvas 2d 坐标系的y 轴方向是朝下的。</p><p>     canvas 2d 坐标系的坐标基底有两个分量，分别是一个像素的宽和一个像素的高，即1个单位的宽便是1个像素的宽，1个单位的高便是一个像素的高。</p><p>     <img src="https://note.youdao.com/yws/api/personal/file/WEB997a18961b8cf9291581cefc95420654?method=download&amp;shareKey=edbcacc395ca180e99b195ca0fa9d029" alt="image"></p><h2 id="webgl坐标系"><a class="header-anchor" href="#webgl坐标系" aria-hidden="true">#</a> webgl坐标系</h2><p>     webgl坐标系的坐标原点在画布中心。</p><p>     webgl坐标系的y 轴方向是朝上的。</p><p>     webgl坐标基底中的两个分量分别是半个canvas的宽和canvas的高，即1个单位的宽便是半个个canvas的宽，1个单位的高便是半个canvas的高。</p><p>     <img src="https://note.youdao.com/yws/api/personal/file/WEBa4cfcd3ae5a50eff56683d0a71dbf816?method=download&amp;shareKey=01a114fbfac8fa4175c87703660fa039" alt="image"></p>',45)];t.render=function(a,p,t,c,o,l){return n(),s("div",null,e)};export{p as __pageData,t as default};

import{o as e,c as t,d as n}from"./app.9e536525.js";const a='{"title":"webgl 绘图的基本步骤","description":"","frontmatter":{},"headers":[{"level":3,"title":"webgl 绘图的基本步骤","slug":"webgl-绘图的基本步骤"},{"level":3,"title":"webgl 的绘图步骤","slug":"webgl-的绘图步骤"}],"relativePath":"guide/know/three/drawBaseStep.md","lastUpdated":1630570306435}',r={},l=[n('<h3 id="webgl-绘图的基本步骤"><a class="header-anchor" href="#webgl-绘图的基本步骤" aria-hidden="true">#</a> webgl 绘图的基本步骤</h3><hr><h4 id="现实中的绘图"><a class="header-anchor" href="#现实中的绘图" aria-hidden="true">#</a> 现实中的绘图</h4><p>     1. 找一张画布</p><p>     2. 找一支画笔</p><p>     3. 开始绘图</p><h4 id="canvas-2d绘图"><a class="header-anchor" href="#canvas-2d绘图" aria-hidden="true">#</a> canvas 2d绘图</h4><p>     // 1. canvas画布</p><p>     <code>const canvas = document.getElementById(&#39;canvas&#39;)</code></p><p>     // 2. 二维画笔</p><p>     <code>const ctx = canvas.getContext(&#39;2d&#39;)</code></p><p>     // 3. 设置画笔颜色</p><p>     <code>ctx.fillStyle = &#39;pink&#39;</code></p><p>     // 4. 用画笔画出一个矩形</p><p>     <code>ctx.fillRect(20,20,300,400)</code></p><h4 id="webgl绘图"><a class="header-anchor" href="#webgl绘图" aria-hidden="true">#</a> webgl绘图</h4><p>     webgl更像是电脑绘图,他绘画的步骤多了一层介质--手绘板(webgl里的程序对象),用触控笔在手绘板上画画,手绘板把画的东西发给电脑</p><p>     1. 找一台电脑</p><p>     2. 找一块手绘板</p><p>     3. 找一支触控笔</p><p>     4. 开始画画</p><h4 id="canvas-2d-和-webgl绘图的差异"><a class="header-anchor" href="#canvas-2d-和-webgl绘图的差异" aria-hidden="true">#</a> canvas 2d 和 webgl绘图的差异</h4><p>     浏览器有三大线程： js 引擎线程、GUI 渲染线程、浏览器事件触发线程。</p><p>     其中GUI 渲染线程就是用于渲图的,渲染二维图形用的是js语言,渲染三维图形用的是GLSL ES 语言。这个时候我们就需要找人翻译翻译---它就是我们之前提到过的手绘板，它在webgl 里叫“程序对象”。</p><h4 id="webgl-的绘图思路"><a class="header-anchor" href="#webgl-的绘图思路" aria-hidden="true">#</a> webgl 的绘图思路</h4><p>     1. 找一台电脑 --- 浏览器里内置的webgl 渲染引擎，负责渲染webgl 图形，只认GLSL ES语言。</p><p>     2. 找一块手绘板 --- 程序对象，承载GLSL ES语言，翻译GLSL ES语言和js语言，使两者可以相互通信。</p><p>     3. 找一支触控笔 --- 通过canvas 获取的webgl 类型的上下文对象，可以向手绘板传递绘图命令，并接收手绘板的状态信息。</p><p>     4. 开始画画 --- 通过webgl 类型的上下文对象，用js 画画。</p><h3 id="webgl-的绘图步骤"><a class="header-anchor" href="#webgl-的绘图步骤" aria-hidden="true">#</a> webgl 的绘图步骤</h3><p>     1. 在html中建立canvas 画布</p><p>     <code>&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;</code></p><p>     2. 在js中获取canvas画布</p><p>     <code>const canvas=document.getElementById(&#39;canvas&#39;)</code></p><p>     3. 使用canvas 获取webgl 绘图上下文</p><p>     <code>const gl=canvas.getContext(&#39;webgl&#39;)</code></p><p>     4. 在script中建立顶点着色器和片元着色器，glsl es</p><p>     // 顶点着色器</p><div class="language-"><pre><code>&lt;script id=&quot;vertexShader&quot; type=&quot;x-shader/x-vertex&quot;&gt;\n    void main() {\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n        gl_PointSize = 100.0;\n    }\n&lt;/script&gt;\n</code></pre></div><p>     // 片元着色器</p><div class="language-"><pre><code>&lt;script id=&#39;fragmentShader&#39; type=&#39;x-shader/x-fragment&#39;&gt;\n  void main() {\n    gl_FragColor = vec4(1.0,1.0,0.0,1.0)\n  }\n&lt;/script&gt;\n</code></pre></div><p>     5. 在js中获取顶点着色器和片元着色器的文本</p><p>     <code>const vsSource = document.getElementById(&#39;vertexShader&#39;).innerText</code></p><p>     <code>const fsSource = document.getElementById(&#39;fragmentShader&#39;).innerText</code></p><p>     6. 初始化着色器</p><p>     <code>initShader(gl,vsSource,fsSource)</code></p><p>     7. 指定将要用来清空绘图区的颜色</p><p>     <code>gl.clearColor(0,0,0,1)</code></p><p>     8. 使用之前指定的颜色，清空绘图区</p><p>     <code>gl.clear(gl.COLOR_BUFFER_BIT)</code></p><p>     9. 绘制顶点</p><p>     <code>gl.drawArrays(gl.POINTS,0,1)</code></p><p>     完整代码</p><div class="language-"><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;title&gt;Document&lt;/title&gt;\n  &lt;style&gt;\n    * {\n      margin:0;\n      padding: 0;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;!-- 建立canvas画布 --&gt;\n  &lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;\n\n  &lt;!-- 顶点着色器 --&gt;\n  &lt;!-- 点位信息 --&gt;\n  &lt;script id=&quot;vertexShader&quot; type=&quot;x-shader/x-vertex&quot;&gt;\n    void main() {\n      // 点位 分号不能少 vec表示4维向量\n      gl_Position = vec4(0.0,0.0,0.0,1.0);\n      // 点的尺寸 分号不能少 浮点数\n      gl_PointSize = 100.0;\n    }\n  &lt;/script&gt;\n\n  &lt;!-- 片元着色器 --&gt;\n  &lt;script id=&quot;fragmentShader&quot; type=&quot;x-shader/x-fragment&quot;&gt;\n    void main() {\n      // 点的颜色 分号不能少\n      gl_FragColor = vec4(1.0,1.0,0.0,1.0);\n    }\n  &lt;/script&gt;\n\n  &lt;script&gt;\n    // 获取canvas画布\n    const canvas = document.getElementById(&#39;canvas&#39;)\n    // 设置canvas画布宽高\n    canvas.width = window.innerWidth\n    canvas.height = window.innerHeight\n    // 使用canvas获取webgl绘图上下文 webgl画笔\n    const gl = canvas.getContext(&#39;webgl&#39;)\n    // 获取顶点着色器的文本\n    const vsSource = document.getElementById(&#39;vertexShader&#39;).innerText\n    // 获取片元着色器的文本\n    const fsSource = document.getElementById(&#39;fragmentShader&#39;).innerText\n    // 初始化着色器\n    // 解析着色器文本,整合到程序对象里,关联webgl上下文对象,实现两种语言通信\n    initShader(gl,vsSource,fsSource)\n    // 指定将要用来清理绘图区的颜色\n    gl.clearColor(0.0,0.0,0.0,1.0)\n    // 清理绘图区\n    gl.clear(gl.COLOR_BUFFER_BIT)\n    // 绘制顶点(绘制方式,从哪个点开始绘制,绘制需要使用到多少个点) `https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/drawArrays`\n    gl.drawArrays(gl.POINTS, 0, 1)\n\n    function initShader(gl,vsSource,fsSource) {\n      // 创建程序对象,相当于前面提到的手绘板的外壳\n      const program = gl.createProgram()\n      // 建立着色器对象,手绘板接收触控笔信号的零件,把触控笔的js---&gt;glsl es,然后让webgl渲染引擎识别显示\n      const vertexShader = loadShader(gl,gl.VERTEX_SHADER,vsSource)\n      const fragmentShader = loadShader(gl,gl.FRAGMENT_SHADER,fsSource)\n      // 将顶点着色器和片元着色器对象装进程序对象里,完成手绘板拼装\n      gl.attachShader(program,vertexShader)\n      gl.attachShader(program,fragmentShader)\n      // 连接webgl上下文对象和程序对象\n      gl.linkProgram(program)\n      // 启动程序对象\n      gl.useProgram(program)\n      // 将程序对象挂到上下文对象上\n      gl.program = program\n      return true\n    }\n    function loadShader(gl,type,source) {\n      // 根据着色器类型,建立着色器对象\n      const shader = gl.createShader(type)\n      // 将着色器源文件传入着色器对象中\n      gl.shaderSource(shader,source)\n      // 编译着色器对象\n      gl.compileShader(shader)\n      // 返回着色器对象\n      return shader\n    }\n  &lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre></div><p>     封装公用函数到 jsm/utils.js</p><div class="language-"><pre><code>function initShader(gl,vsSource,fsSource) {\n  // 创建程序对象,相当于前面提到的手绘板的外壳\n  const program = gl.createProgram()\n  // 建立着色器对象,手绘板接收触控笔信号的零件,把触控笔的js---&gt;glsl es,然后让webgl渲染引擎识别显示\n  const vertexShader = loadShader(gl,gl.VERTEX_SHADER,vsSource)\n  const fragmentShader = loadShader(gl,gl.FRAGMENT_SHADER,fsSource)\n  // 将顶点着色器和片元着色器对象装进程序对象里,完成手绘板拼装\n  gl.attachShader(program,vertexShader)\n  gl.attachShader(program,fragmentShader)\n  // 连接webgl上下文对象和程序对象\n  gl.linkProgram(program)\n  // 启动程序对象\n  gl.useProgram(program)\n  // 将程序对象挂到上下文对象上\n  gl.program = program\n  return true\n}\nfunction loadShader(gl,type,source) {\n  // 根据着色器类型,建立着色器对象\n  const shader = gl.createShader(type)\n  // 将着色器源文件传入着色器对象中\n  gl.shaderSource(shader,source)\n  // 编译着色器对象\n  gl.compileShader(shader)\n  // 返回着色器对象\n  return shader\n}\n\nexport {initShader,loadShader}\n</code></pre></div><p>     封装之后代码</p><div class="language-"><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;title&gt;Document&lt;/title&gt;\n  &lt;style&gt;\n    * {\n      margin:0;\n      padding: 0;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;!-- 建立canvas画布 --&gt;\n  &lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;\n\n  &lt;!-- 顶点着色器 --&gt;\n  &lt;!-- 点位信息 --&gt;\n  &lt;script id=&quot;vertexShader&quot; type=&quot;x-shader/x-vertex&quot;&gt;\n    void main() {\n      // 点位 分号不能少 vec表示4维向量\n      gl_Position = vec4(0.0,0.0,0.0,1.0);\n      // 点的尺寸 分号不能少 浮点数\n      gl_PointSize = 100.0;\n    }\n  &lt;/script&gt;\n\n  &lt;!-- 片元着色器 --&gt;\n  &lt;script id=&quot;fragmentShader&quot; type=&quot;x-shader/x-fragment&quot;&gt;\n    void main() {\n      // 点的颜色 分号不能少\n      gl_FragColor = vec4(1.0,1.0,0.0,1.0);\n    }\n  &lt;/script&gt;\n\n  &lt;script type=&#39;module&#39;&gt;\n    import {initShader} from &#39;../jsm/utils.js&#39;\n    // 获取canvas画布 \n    const canvas = document.getElementById(&#39;canvas&#39;)\n    // 设置canvas画布宽高\n    canvas.width = window.innerWidth\n    canvas.height = window.innerHeight\n    // 使用canvas获取webgl绘图上下文 webgl画笔\n    const gl = canvas.getContext(&#39;webgl&#39;)\n    // 获取顶点着色器的文本\n    const vsSource = document.getElementById(&#39;vertexShader&#39;).innerText\n    // 获取片元着色器的文本\n    const fsSource = document.getElementById(&#39;fragmentShader&#39;).innerText\n    // 初始化着色器\n    // 解析着色器文本,整合到程序对象里,关联webgl上下文对象,实现两种语言通信\n    initShader(gl,vsSource,fsSource)\n    // 指定将要用来清理绘图区的颜色\n    gl.clearColor(0.0,0.0,0.0,1.0)\n    // 清理绘图区\n    gl.clear(gl.COLOR_BUFFER_BIT)\n    // 绘制顶点(绘制方式,从哪个点开始绘制,绘制需要使用到多少个点) `https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/drawArrays`\n    gl.drawArrays(gl.POINTS, 0, 1)\n\n    /*\n    *function initShader(gl,vsSource,fsSource) {\n    *  // 创建程序对象,相当于前面提到的手绘板的外壳\n    *  const program = gl.createProgram()\n    *  // 建立着色器对象,手绘板接收触控笔信号的零件,把触控笔的js---&gt;glsl es,然后让webgl渲染引擎识别显示\n    *  const vertexShader = loadShader(gl,gl.VERTEX_SHADER,vsSource)\n    *  const fragmentShader = loadShader(gl,gl.FRAGMENT_SHADER,fsSource)\n    *  // 将顶点着色器和片元着色器对象装进程序对象里,完成手绘板拼装\n    *  gl.attachShader(program,vertexShader)\n    *  gl.attachShader(program,fragmentShader)\n    *  // 连接webgl上下文对象和程序对象\n    *  gl.linkProgram(program)\n    *  // 启动程序对象\n    *  gl.useProgram(program)\n    *  // 将程序对象挂到上下文对象上\n    *  gl.program = program\n    *  return true\n    *}\n    *function loadShader(gl,type,source) {\n    *  // 根据着色器类型,建立着色器对象\n    *  const shader = gl.createShader(type)\n    *  // 将着色器源文件传入着色器对象中\n    *  gl.shaderSource(shader,source)\n    *  // 编译着色器对象\n    *  gl.compileShader(shader)\n    *  // 返回着色器对象\n    *  return shader\n    *}\n    */\n  &lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre></div>',58)];r.render=function(n,a,r,o,g,d){return e(),t("div",null,l)};export{a as __pageData,r as default};

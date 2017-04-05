<h1>RN-MEITUAN</h1>
<p>一个使用React-native完成的美团的UI例子</p>
<h3>步骤一:安装好一些依赖</h3>
<pre><code>NPM install 
</code></pre>

<h4>步骤二:</h4>
<p>运行在IOS平台：</p>
<pre><code>react-native run-ios
</code></pre>

<p>运行在android平台上：</p>
<pre><code>react-native run-android
</code></pre>

<p>最后注意因为我是在mac平台上开发的后面只运行了iPhone，后面发现无法运行在android平台上，so
如果你要运行在android平台上 要在<strong>package.json</strong>加一句</p>
<pre><code>“bundle-android”: “react-native bundle –platform android –dev false –entry-file index.android.js –bundle-output android/app/src/main/assets/index.android.bundle –sourcemap-output android/app/src/main/assets/index.android.map –assets-dest android/app/src/main/res/”
</code></pre>

<p>实例：package.json中</p>
<pre><code>  &quot;scripts&quot;: {
    &quot;start&quot;: &quot;node node_modules/react-native/local-cli/cli.js start&quot;,
    &quot;test&quot;: &quot;jest&quot;,
    “bundle-android”: “react-native bundle –platform android –dev false –entry-file index.android.js –bundle-output android/app/src/main/assets/index.android.bundle –sourcemap-output android/app/src/main/assets/index.android.map –assets-dest android/app/src/main/res/”
    &quot;test&quot;: &quot;jest&quot;
  },
</code></pre>


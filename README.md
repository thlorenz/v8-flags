# v8-flags [![build status](https://secure.travis-ci.org/thlorenz/v8-flags.png)](http://travis-ci.org/thlorenz/v8-flags)

Configures v8 flags at runtime.

```js
// use-strict-violator.js
a = "I'm the trouble starter, punking instigator"

module.exports = a;
```

```js
var flags = require('v8-flags').flags;
console.log('inital use strict', flags.use_strict());

flags.use_strict(true);
console.log('set use strict to', flags.use_strict());

try {
  require('./use-strict-violator');
} catch(err) {
  console.error('FAIL:', err);
}

flags.use_strict(false);
console.log('set use strict to', flags.use_strict());

var violator = require('./use-strict-violator');
console.log(violator)
```

```
inital use strict false
set use strict to true
FAIL: [ReferenceError: a is not defined]
set use strict to false
I'm the trouble starter, punking instigator
```

## Installation

    npm install v8-flags

## Contributions

I am doing my best to document each flag, but am hoping for others *especially the ones with insider knowledge* to supply useful comments.

I made this as easy as possible, all you have to do is add/edit the `.md` file with the name of the flag in [this
folder](https://github.com/thlorenz/v8-flags/tree/master/scripts/comments) and run `npm run flag-doc` to
update all documentation with the added details.

## API

The different versions of v8 and thus Node.js have different flags and therefore the API fluctuates somewhat between the
versions. The API is generated on install to match the Node.js version you are using.

The flags for the *currently* latest Node.js versions `0.8`, `0.10` and `0.11` are documented in the following
locations:

- [0.8](https://github.com/thlorenz/v8-flags/blob/master/flags-0.8.md)
- [0.10](https://github.com/thlorenz/v8-flags/blob/master/flags-0.10.md)
- [0.11](https://github.com/thlorenz/v8-flags/blob/master/flags-0.11.md)

The below API allows to access and configure these flags.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [enforceFlagImplications()](#enforceflagimplications)
- [flags()](#flags)
  - [Example](#example)
- [listFlags() → {Object}](#listflags--object)
- [meta() → {Array.<Object>}](#meta--arrayobject)
- [printHelp()](#printhelp)
- [resetAllFlags()](#resetallflags)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="enforceFlagImplications"><span class="type-signature"></span>enforceFlagImplications<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Enforces all flag implications.</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L117">lineno 117</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="flags"><span class="type-signature"></span>flags<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Exposes methods to get and set v8 flags.</p>
<h4>Example</h4>
<pre><code class="lang-js">var flags = require('v8-flags').flags;
console.log(flags.use_strict()); // false
flags.use_strict(true)
console.log(flags.use_strict()); // true</code></pre>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L21">lineno 21</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="listFlags"><span class="type-signature"></span>listFlags<span class="signature">()</span><span class="type-signature"> &rarr; {Object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Lists all flags along with their <strong>current</strong> value.</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L85">lineno 85</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>key/value pair for each flag</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Object</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="meta"><span class="type-signature"></span>meta<span class="signature">()</span><span class="type-signature"> &rarr; {Array.&lt;Object>}</span></h4>
</dt>
<dd>
<div class="description">
<p>The meta data for the flags.</p>
<p>It is initialized on startup from the definitions found in C++ land.</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L39">lineno 39</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>array of objects with the folloing properties each</p>
<ul>
<li><strong>name:</strong> flag name</li>
<li><strong>default:</strong> default setting of the flag</li>
<li><strong>type:</strong> type of the flag</li>
<li><strong>description:</strong> the description of the flag</li>
<li><strong>readonly:</strong> set <code>true</code> if flag cannot be set</li>
<li><strong>configurable:</strong> set <code>true</code> if setting the flag at runtime has the desired effect</li>
<li><strong>implications:</strong> flags that will be set to <code>true</code> whenever this flag is <code>true</code> and <code>enforceFlagImplications</code> is called</li>
<li><strong>negativeImplications:</strong> flags that will be set to <code>false</code> whenever this flag is <code>false</code> and <code>enforceFlagImplications</code> is called</li>
</ul>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;Object></span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="printHelp"><span class="type-signature"></span>printHelp<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Prints flag help to the console.</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L100">lineno 100</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="resetAllFlags"><span class="type-signature"></span>resetAllFlags<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Resets all flags to their default values</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L108">lineno 108</a>
</li>
</ul></dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT

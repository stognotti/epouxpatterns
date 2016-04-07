---
title: "Button"
layout: pattern
---

<div class="pl-pattern">
<h3>Buttons</h3>
Buttons are used as triggers for actions. Depending on the use case, buttons contain a label and/or an icon. There are a variety of styles, sizes, and variations that can be used for different situations.

<p>All button labels are sentence case. They should be as short as possible while clearly explaining what will happen when the button is clicked.</p>
&nbsp;
</div>
<div class="pl-pattern">
<h3 id="button-styles">Button styles</h3>
<p>There are 6 button styles:</p>
<ul>
<li><strong>Default</strong>, the general button style.</li>
<li><strong>Primary</strong>, indicates the critical, or most important action on a form/page.</li>
<li><strong>Danger</strong>, indicates a dangerous, generally destructive action, such as deleting.</li>
<li><strong>Success</strong>, indicates a positive action.</li>
<li><strong>Warning</strong>, indicates an action that may have some side effects, such as giving a user admin access.</li>
<li><strong>Link</strong>, used for non-critical actions. Useful for keeping the interface simple.</li>
</ul>
<p>All buttons are prefixed with the <code>btn</code> class. The <code>btn</code> class can be applied to any element. Try to use <code>&lt;button&gt;</code> elements when an action won’t change the URL/route, and <code>&lt;a&gt;</code> elements when the action will change the URL/route.</p>

time is {{ site.time }}
<div class="pl-preview">
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-link">Link</button>
</div>


</div>
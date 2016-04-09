---
layout: pattern
title: Icons
---
<div class="pl-pattern">
This is  example of preview code

{% assign u="_preview-code/icons/preview1.html" }
<a href=¨{{ site.repository.url }}/blob/master/site{{page.url}}/../{{ u }}¨ target=¨_blank¨>Edit code</a>
{% capture my-include %}{% include_relative preview-template.md f=u %}{% endcapture %}
{{ my-include | markdownify }}

</div>
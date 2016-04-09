<a href=¨{{ site.repository.url }}/blob/master/site/{{page.url}}/{{ include.f }}¨ target=¨_blank¨>Edit code</a>
<div  class="pl-preview">
{% include_relative {{ include.f }}  %}
</div>
<p style="display:block">
{% highlight html %}
{% include_relative {{ include.f }}  %}
{% endhighlight %}
</p>





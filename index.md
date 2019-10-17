---
layout: default
hero: true
title: SPP
theme: dark-theme
autoscroll: false
pagination: 
  enabled: true
---
<div class="content">
{% for post in paginator.posts %}
    <article class="index-post row">
      <header class="col container">
        <h2><a href="{{ site.siteurl }}{{ post.url }}">{{ post.title }}</a></h2>
        <h5>{{ post.date | date: "%d %b %Y" }}</h5>
        <p>{{ post.content | truncatewords:50 | strip_html }}</p>
      </header>
      <div class="col">
        <img class="image" src="http://img.youtube.com/vi/{{ post.youtubeId }}/maxresdefault.jpg" alt="Video thumbnail">
      </div>        
    </article>
{% endfor %}

{% if paginator.total_pages > 1 %}
<div class="pagination">
{% if paginator.next_page %}
    <a class="next" href="{{ paginator.next_page_path }}">Load more posts</a>
{% endif %}
</div>
{% endif %}
</div>

<footer>
  <p>End of the page</p>
</footer>

<script src="//unpkg.com/jscroll/dist/jquery.jscroll.min.js"></script>
<script type="text/javascript">
  $(function() {
    $('.content').jscroll({
      contentSelector: ".content",
      pagingSelector: '.pagination',
{% if page.autoscroll %}
      nextSelector: '.next',
      autoTrigger: true
{% else %}
      autoTrigger: false
{% endif %}
    })
  })
</script>
{% if page.autoscroll %}
<style>.pagination{display: none;}</style>
{% endif %}
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
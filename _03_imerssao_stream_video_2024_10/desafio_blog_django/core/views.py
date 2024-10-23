from django.shortcuts import render
from .models import Post, Tag

def blog_list(request):
    posts = Post.objects.all()
    tags = Tag.objects.all()
    return render(request, 'core/blog_list.html', {'posts': posts, 'tags': tags})

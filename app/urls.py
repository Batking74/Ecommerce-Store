from django.views.generic import TemplateView
from django.urls import path, re_path
from django.contrib import admin
from django.urls import path


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))
]
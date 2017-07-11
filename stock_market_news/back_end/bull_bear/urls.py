from django.conf.urls import url, include
from . import views
from rest_framework import routers


# router = routers.DefaultRouter()
# router.register(r'bull_bear', views.NewsViewSet, base_name='whole')
# router.register(r'bull_bear/(?P<article_id>[A-Za-z0-9]+)', views.news_detail, base_name='detail')


urlpatterns = [
    # url(r'^', include(router.urls)),
    url(r'bull_bear/$', views.NewsList.as_view()),
    url(r'bull_bear/major_bull/$', views.MajorBullList.as_view()),
    url(r'bull_bear/bull/$', views.BullList.as_view()),
    url(r'bull_bear/neutral/$', views.NeutralList.as_view()),
    url(r'bull_bear/bear/$', views.BearList.as_view()),
    url(r'bull_bear/major_bear/$', views.MajorBearList.as_view()),
    url(r'bull_bear/(?P<article_id>[A-Za-z0-9.]+)/$', views.NewsDetail.as_view()),
]

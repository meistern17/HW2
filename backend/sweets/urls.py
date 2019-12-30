from django.conf.urls import url
from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token

from . import views

from drf_yasg import openapi
from drf_yasg.views import get_schema_view

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)

urlpatterns = [
    path('sweet/list', views.sweet_list),
    path('sweet/options', views.sweet_list),
    path('sweet/create', views.sweet_list),
    path('sweet/<int:sweet_id>/get', views.sweet_detail),
    path('sweet/<int:sweet_id>/update', views.sweet_detail),
    path('sweet/<int:sweet_id>/delete', views.sweet_detail),

    path('brand/list', views.brand_list),
    path('brand/options', views.brand_list),
    path('brand/create', views.brand_list),
    path('brand/<int:brand_id>/get', views.brand_detail),
    path('brand/<int:brand_id>/update', views.brand_detail),
    path('brand/<int:brand_id>/delete', views.brand_detail),

    path('reseller/list', views.reseller_list),
    path('reseller/options', views.reseller_list),
    path('reseller/create', views.reseller_list),
    path('reseller/<int:reseller_id>/get', views.reseller_detail),
    path('reseller/<int:reseller_id>/update', views.reseller_detail),
    path('reseller/<int:reseller_id>/delete', views.reseller_detail),

    url(r'^api-token-auth/', obtain_jwt_token),
]

"""PseudoForms URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from rest_framework_jwt.views import obtain_jwt_token

from APIManager.views import (
	FormAPIView,
	SaveFormAPIView,
    formRUDView,
    FormFillPropsAPIView,
    FormFillPropsRetrieveAPIView,
    FormFilledDataInsertAPIView,
    FormFilledDataListAPIView,
    CreateListPublicFormAPIView,
    ViewPublicFormAPIView,
    current_user, 
    UserList,
    
)
from .views import (
    homePage,
    logoutUser,
    signUpUser,
    loginUser,
)
from django.views.generic import TemplateView

urlpatterns = [
    
    #react related stuff
    path('admin/', admin.site.urls),
    re_path(r'^pseudoforms/', TemplateView.as_view(template_name='react.html')),
    path('api/', FormAPIView.as_view(), name='form-view'),
    re_path(r'api/(?P<slug>[\w-]+)/$', formRUDView.as_view(), name = 'form-rud'),
    path('create/', SaveFormAPIView.as_view(), name='form-create'),
    path('fillform/', FormFillPropsAPIView.as_view(), name = 'fill-form'),
    re_path(r'fillform/(?P<slug>[\w-]+)/$', FormFillPropsRetrieveAPIView.as_view(), name = 'fill-form'),
    path(r'formpush/', FormFilledDataInsertAPIView.as_view(), name = 'fill-form'),
    path('filleformlist/', FormFilledDataListAPIView.as_view(), name = 'fill-form'),
    path('listaddpublic/', CreateListPublicFormAPIView.as_view(), name = 'public-form'),
    re_path(r'viewpublic/(?P<slug>[\w-]+)/$', ViewPublicFormAPIView.as_view(), name = 'public-form'),
    path('token-auth/', obtain_jwt_token),
    path('current_user/', current_user),
    path('users/', UserList.as_view()),

    #django
    path('', homePage),
    path('loginUser/', loginUser),
    path('signUpUser/', signUpUser),
    path('logoutUser/', logoutUser),
]

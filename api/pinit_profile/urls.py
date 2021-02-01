from django.urls import path
from rest_framework import routers
from .views import *

router  = routers.DefaultRouter()
router.register('profiles', ProfilesViewSet, basename = 'Profile')

urlpatterns = router.urls
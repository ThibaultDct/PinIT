from django.urls import path
from rest_framework import routers
from .views import *

router  = routers.DefaultRouter()
router.register('profiles', ProfilesViewSet, basename = 'Profile')
router.register('projects', ProjectsViewSet, basename = 'Project')

urlpatterns = router.urls
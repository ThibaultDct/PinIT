from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter

from .models import Profile
from .serializers import ProfileSerializer

class ProfilesViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    filter_backends = (SearchFilter,)
    search_fields = {'id', 'pseudo',}

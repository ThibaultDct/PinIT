from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from rest_framework import permissions

from .models import Profile
from .serializers import ProfileSerializer

class ProfilesViewSet(ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ProfileSerializer
    filter_backends = (SearchFilter,)
    search_fields = {'id', 'pseudo',}

    def get_queryset(self):
        return self.request.user.profile.all()

    def perform_create(self, serializer):
        serializer.save(profile=self.request.user)

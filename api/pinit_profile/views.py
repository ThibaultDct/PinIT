from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from rest_framework import permissions

from .models import Profile
from .models import Project
from .serializers import ProfileSerializer
from .serializers import ProjectSerializer

class ProfilesViewSet(ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ProfileSerializer
    filter_backends = (SearchFilter,)
    search_fields = {'id', 'pseudo',}

    def get_queryset(self):
        return self.request.user.profile.all()

    #def get_profile(self, profile):
    #    return Profile.objects.get(pseudo=profile)

    def perform_update(self, serializer):
        #profile = self.get_profile(self.request.user)
        serializer.save(profile=self.request.user)


    def perform_create(self, serializer):
        serializer.save(profile=self.request.user)

class ProjectsViewSet(ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ProjectSerializer
    filter_backends = (SearchFilter,)
    search_fields = {'id', 'title', 'profile', 'created',}

    def get_queryset(self):
        return Project.objects.all()

    def perform_create(self, serializer):
        print("Création de post par %s" % (self.request.user))
        profile_obj = Profile.objects.get(pseudo=self.request.user)
        serializer.save(profile=profile_obj)

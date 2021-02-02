from rest_framework.serializers import ModelSerializer

from .models import Profile, Project

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'lastname', 'firstname', 'pseudo', 'age', 'img', 'country', 'email', 'bio']

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'image', 'description', 'profile', 'created', 'likes']

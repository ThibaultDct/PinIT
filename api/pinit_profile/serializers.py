from rest_framework.serializers import ModelSerializer

from .models import Profile

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'lastname', 'firstname', 'pseudo', 'age', 'img', 'country', 'email', 'bio']
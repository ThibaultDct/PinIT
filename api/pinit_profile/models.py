from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

# age validator function
def validate_age(value):
    if (value >= 1 and value <= 120):
        return value
    else:
        raise ValidationError("Age must be between 1 and 120")

class Profile(models.Model):
    lastname = models.CharField(max_length = 255, blank = False, default = '')
    firstname = models.CharField(max_length = 255, blank = False, default = '')
    pseudo = models.CharField(max_length = 255, unique = True, blank = False, default = '')
    age = models.IntegerField(validators = [validate_age])
    img = models.CharField(max_length = 512, default = 'https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png')
    country = models.CharField(max_length = 255, default = '')
    email = models.EmailField(max_length = 255, default = '')
    bio = models.CharField(max_length = 512, default = '')
    created_at = models.DateTimeField(auto_now_add = True)
    profile = models.ForeignKey(User, related_name = 'profile', on_delete = models.CASCADE, null = True)

    def __str__(self):
        return "%s %s (@%s)" % (self.lastname, self.firstname, self.pseudo)

    class Meta:
        ordering = ['lastname', 'firstname']
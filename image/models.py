from django.db import models

# Create your models here.

class Type(models.Model):
    name = models.CharField(max_length=255,null=True,blank=True)
    
    def __str__(self):
        return self.name

class Image(models.Model):
    type = models.ForeignKey(Type, related_name='images',on_delete=models.SET_NULL,null=True)
    title = models.CharField(max_length=255,null=True,blank=True)
    content = models.TextField(null=True,blank=True)
    image = models.ImageField(upload_to="images/")
    
    def __str__(self):
        return self.type.name + "-"+ str(self.id)
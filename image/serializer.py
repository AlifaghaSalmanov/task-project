from rest_framework import serializers

from .models import Image


class ImageSerializers(serializers.ModelSerializer):
    type = serializers.StringRelatedField()
    # title = serializers.SerializerMethodField()
    # content = serializers.SerializerMethodField()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if instance.type.name == "header":
            for field_name in ["title", "content"]:
                representation.pop(field_name)
        return representation

    # def get_title(self, obj):
    #     if obj.type == "headers":
    #         return None
    #     return obj.title

    # def get_content(self, obj):
    #     if obj.type == "headers":
    #         return None
    #     return obj.content

    class Meta:
        model = Image
        fields = "__all__"

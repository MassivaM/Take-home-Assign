# serializers.py
#serializer for the value 
from rest_framework import serializers

from .models import Value

class ValueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Value
        fields = ('name',)

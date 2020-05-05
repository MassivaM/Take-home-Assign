# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework import viewsets

from .serializers import ValueSerializer
from .models import Value


class ValueViewSet(viewsets.ModelViewSet):
    queryset = Value.objects.all().order_by('name')
    serializer_class = ValueSerializer

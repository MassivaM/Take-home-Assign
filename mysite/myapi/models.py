# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
# A value has a name, the class has been populated with values "Foo" and "Bar"

class Value(models.Model):
    name = models.CharField(max_length=60)


    def __str__(self):
   	return self.name

# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class CnstockCompany(models.Model):
    article_id = models.CharField(primary_key=True, max_length=20)
    title = models.CharField(max_length=100)
    publish_time = models.DateTimeField(blank=True, null=True)
    art_source = models.CharField(max_length=50, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    stock_code = models.CharField(max_length=45, blank=True, null=True)
    bull_bear = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cnstock_company'


class TableName(models.Model):
    article_id = models.CharField(max_length=20)
    title = models.CharField(max_length=100)
    publish_time = models.DateTimeField(blank=True, null=True)
    art_source = models.CharField(max_length=50, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    stock_code = models.CharField(max_length=45, blank=True, null=True)
    bull_bear = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'table_name'

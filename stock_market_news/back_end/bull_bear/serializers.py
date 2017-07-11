from rest_framework import serializers
from .models import CnstockCompany


class CnstockCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = CnstockCompany
        fields = ('article_id', 'publish_time', 'title', 'stock_code', 'bull_bear')
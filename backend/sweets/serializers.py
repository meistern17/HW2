from rest_framework import serializers

from sweets.models import Reseller, Brand, Sweet


class SweetSerializer(serializers.ModelSerializer):
    brand_name = serializers.SerializerMethodField()

    class Meta:
        model = Sweet
        fields = '__all__'

    def get_brand_name(self, obj):
        return obj.brand.name if obj.brand else ''


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class ResellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reseller
        fields = '__all__'

from django.contrib import admin

from sweets.models import Brand, Reseller, Sweet


class SweetAdmin(admin.ModelAdmin):
    pass


admin.site.register(Sweet, SweetAdmin)


class BrandAdmin(admin.ModelAdmin):
    pass


admin.site.register(Brand, BrandAdmin)


class ResellerAdmin(admin.ModelAdmin):
    pass


admin.site.register(Reseller, ResellerAdmin)

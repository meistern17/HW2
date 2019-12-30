from django.db import models


class SweetManager(models.Manager):
    pass


class BrandManager(models.Manager):
    pass


class ResellerManager(models.Manager):
    pass


class Brand(models.Model):
    name = models.TextField()

    objects = BrandManager()

    def __str__(self): return self.name


class Sweet(models.Model):
    name = models.TextField()
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    expiration_date = models.DateField(null=True)
    calories = models.IntegerField(null=True)
    veggie = models.BooleanField()
    rating = models.PositiveIntegerField(null=True)

    objects = SweetManager()

    def __str__(self): return self.name


class Reseller(models.Model):
    sweets = models.ManyToManyField(Sweet, blank=True)
    name = models.TextField()
    location = models.TextField(null=True)
    size = models.PositiveIntegerField(null=True)
    employees = models.PositiveIntegerField(null=True)
    bio = models.BooleanField()

    objects = ResellerManager()

    def __str__(self): return self.name

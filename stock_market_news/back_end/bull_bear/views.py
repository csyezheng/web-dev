from django.shortcuts import render

# Create your views here.

from .models import CnstockCompany
from .serializers import CnstockCompanySerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics



class NewsList(generics.ListCreateAPIView):
    """
    List all news titles, or create a new news title.
    """

    queryset = CnstockCompany.objects.order_by('-publish_time').filter(stock_code__isnull=False)[:100]
    serializer_class = CnstockCompanySerializer


class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a news instance.
    """

    queryset = CnstockCompany.objects.order_by('-publish_time').filter(stock_code__isnull=False)
    serializer_class = CnstockCompanySerializer
    lookup_field = 'article_id'


class MajorBullList(generics.ListAPIView):
    """
    List all news titles which is major bull.
    """

    queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear__exact='重大利好')[:100]
    serializer_class = CnstockCompanySerializer


class BullList(generics.ListAPIView):
    """
    List all news titles which is bull.
    """

    queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear__exact='利好')[:100]
    serializer_class = CnstockCompanySerializer


class NeutralList(generics.ListAPIView):
    """
    List all news titles which is neutral.
    """

    queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear__exact='中性')[:100]
    serializer_class = CnstockCompanySerializer


class MajorBearList(generics.ListAPIView):
    """
    List all news titles which is major bear.
    """

    queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear__exact='重大利空')[:100]
    serializer_class = CnstockCompanySerializer


class BearList(generics.ListAPIView):
    """
    List all news titles which is bear.
    """

    queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear__exact='利空')[:100]
    serializer_class = CnstockCompanySerializer






# class NewsViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed
#     """
#
#     queryset = CnstockCompany.objects.order_by('-publish_time').filter(stock_code__isnull=False)
#     serializer_class = CnstockCompanySerializer
#
#
# class BigBullViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed
#     """
#
#     queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear='重大利好')
#     serializer_class = CnstockCompanySerializer
#
#
# class BullViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed
#     """
#
#     queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear__exact='利好')
#     serializer_class = CnstockCompanySerializer
#
# class NeuterViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed
#     """
#
#     queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear='中性')
#     serializer_class = CnstockCompanySerializer
#
# class BearViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed
#     """
#
#     queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear='利空')
#     serializer_class = CnstockCompanySerializer
#
#
# class BigBearViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed
#     """
#
#     queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear='重大利空')
#     serializer_class = CnstockCompanySerializer
#
#
# @api_view(['GET'])
# def bull(request):
#     """
#     API endpoint that allows users to be viewed
#     """
#
#     try:
#         queryset = CnstockCompany.objects.order_by('-publish_time').filter(bull_bear__exact='利好')
#     except CnstockCompany.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#
#     if request.method == 'GET':
#         serializer = CnstockCompanySerializer(queryset)
#         return Response(serializer.data)
#
#
#
# @api_view(['GET', 'POST', 'DELETE'])
# def news_detail(request, article_id):
#     """
#     Retrieve, update or delete a detail news instance.
#     """
#     try:
#         news = CnstockCompany.objects.get(article_id=article_id)
#     except CnstockCompany.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#
#     if request.method == 'GET':
#         serializer = CnstockCompanySerializer(news)
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         serializer = CnstockCompanySerializer(news, request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     elif request.method == 'DELETE':
#         news.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
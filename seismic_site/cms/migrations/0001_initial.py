# Generated by Django 2.2.4 on 2019-09-28 12:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True)),
            ],
            options={
                'verbose_name_plural': 'categories',
            },
        ),
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, help_text='Page title', max_length=150)),
                ('slug',
                 models.SlugField(blank=True, help_text='Unique URL slug (leave empty to auto-generate)', unique=True)),
                ('content', models.TextField(blank=True, help_text='Page content')),
                ('updated_on', models.DateTimeField(auto_now=True, help_text='Last update time', null=True)),
                ('publishing_date',
                 models.DateTimeField(blank=True, help_text='Public page publishing date', null=True)),
                ('is_published',
                 models.BooleanField(db_index=True, default=False, help_text='Is this page visible on the website')),
                ('category', models.ForeignKey(blank=True, help_text='Page category', null=True,
                                               on_delete=django.db.models.deletion.SET_NULL, to='cms.Category')),
            ],
        ),
    ]

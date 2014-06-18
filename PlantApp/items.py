# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

from scrapy.item import Item, Field

class TutorialItem(Item):
    scienceName = Field()
    commName = Field()
    duration = Field()
    habit = Field()
    sun = Field()
    water = Field()
    
    vendor = Field()
    product = Field()
    location = Field()
    website = Field()
    
    # define the fields for your item here like:
    # name = Field()
    pass

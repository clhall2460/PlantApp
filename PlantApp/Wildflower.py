from scrapy.spider import Spider
from scrapy.selector import Selector
from tutorial.items import TutorialItem


class WildflowerSpider(Spider):
    name = "Wildflower"
    allowed_domains = ["wildflower.org"]
    start_urls = ["http://www.wildflower.org/collections/printable.php?collection=TX_east"]

    def parse(self, response):
        #filename = 'test'
        #open(filename, 'wb').write(response.body)
        sel = Selector(response)
        items = []
        item = TutorialItem()
        
        item['scienceName'] = ''
        item['scienceName'] = sel.xpath('//td/i/text()').extract()
        item['commName'] = ''
        item['commName'] = sel.xpath('//tr/td[2]/text()').extract()
        item['duration'] = ''
        item['duration'] = sel.xpath('//tr/td[3]/text()').extract()
        item['habit'] = ''
        item['habit'] = sel.xpath('//tr/td[4]/text()').extract()
        item['sun'] = ''
        item['sun'] = sel.xpath('//tr/td[5]/text()').extract()
        item['water'] = ''
        item['water'] = sel.xpath('//tr/td[6]/text()').extract()
        
        print item
        return item

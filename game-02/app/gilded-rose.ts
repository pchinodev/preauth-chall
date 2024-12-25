export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (const item of this.items) {
            this.updateItem(item);
        }
        return this.items;
    }

    updateItem(item: Item) {
        if (item.name === 'Aged Brie') {
            this.updateAgedBrie(item);
        } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
            // do nothing
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            this.updateBackstagePass(item);
        } else if (item.name === 'Conjured') {
            this.updateConjured(item);
        }
    }

    updateAgedBrie(item: Item) {
        this.decrementSellIn(item);
        this.increaseQuality(item);
    }

    updateBackstagePass(item: Item) {
        this.decrementSellIn(item);

        if (item.sellIn < 0) {
            item.quality = 0;
        } else if (item.sellIn < 6) {
            this.increaseQuality(item, 3);
        } else if (item.sellIn < 11) {
            this.increaseQuality(item, 2);
        } else {
            this.increaseQuality(item);
        }
    }

    updateConjured(item: Item) {
        this.decrementSellIn(item);
        this.decrementQuality(item, 2);
    }

    private decrementSellIn(item: Item) {
        item.sellIn--;
    }

    private increaseQuality(item: Item, amount: number = 1) {
        if (item.quality + amount <= 50) {
            item.quality += amount;
        }
    }

    private decrementQuality(item: Item, amount: number = 1) {
        if (item.quality - amount >= 0) {
            item.quality -= amount;
        }
    }
}

interface Subject {
  getStock: (coin: string) => string;
}

class StocksApi implements Subject {
  getStock = (stock: string): string => {
    console.log(`StocksApi: getting ${stock} stock...`);
    switch (stock) {
      case 'TSLA':
        return '$700';
      case 'AAPL':
        return '$145';
      case 'CDR.WA':
        return '$102';
      default:
        return '$0';
    }
  };
}

class StocksApiProxy implements Subject {
  private cache: { [key: string]: string } = {};

  constructor(private stockApi: StocksApi) {}

  getStock = (stock: string): string => {
    if (!this.cache[stock]) {
      console.log(`Cannot find a stock in cache, making request.`);
      this.cache[stock] = this.stockApi.getStock(stock);
    } else {
      console.log(`Reusing exists stock value`);
    }

    return this.cache[stock];
  };
}

const clientCode = () => {
  console.log('Getting stock without proxy');
  const stocksApi = new StocksApi();
  console.log(stocksApi.getStock('TSLA'));
  console.log(stocksApi.getStock('TSLA'));

  console.log('Getting stock with proxy');
  const stocksApiProxy = new StocksApiProxy(stocksApi);
  console.log(stocksApiProxy.getStock('AAPL'));
  console.log(stocksApiProxy.getStock('AAPL'));
  console.log(stocksApiProxy.getStock('CDR.WA'));
};

clientCode();

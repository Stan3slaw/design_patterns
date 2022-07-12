interface Subject {
  request: () => void;
}

class RealSubject implements Subject {
  request = (): void => {
    console.log('RealSubject: Handling request.');
  };
}

class RealProxy implements Subject {
  constructor(private realSubject: RealSubject) {}

  request = (): void => {
    if (this.checkAccess()) {
      this.realSubject.request();
      console.log('Proxy: Logging the time of request.');
    }
  };

  private checkAccess = (): boolean => {
    console.log('Checking access...');
    return true;
  };
}

const clientCode = () => {
  console.log('Make request without proxy');
  const realSubject = new RealSubject();
  realSubject.request();

  console.log('Make request with proxy');
  const realProxy = new RealProxy(realSubject);
  realProxy.request();
};

clientCode();

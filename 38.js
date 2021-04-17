(() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1), (y = 2);
      console.log('catch ici x:'+x);
    }
    console.log('catch disi x:'+x);
    console.log(y);
  })();
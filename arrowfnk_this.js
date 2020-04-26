"use strict";

class Loader {
  createLoader(fnk) {
     return fnk([3,5]);
  }
}

class service {
  entities = [1,2,3,4,5];
  
  load(key) {
    // bindすればthisが拘束できるけど型情報が失われます。
    const what = new Loader().createLoader(this.loadFindByIds.bind(this));
    console.log(what);
    return what;
  }
  
  loadFindByIds(ids) {
    console.log(this.entities);
    return this.entities.filter(e => ids.includes(e));
  }
}

//console.log(new service().loadFindByIds([1,3]));

new service().load(1);
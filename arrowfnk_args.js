"use strict";
class Some {
  execute = (userIds) => {
    console.log(userIds);
  }
  
  execute2 = async (userIds) => {
    await console.log(userIds);
  }
}

const obj = new Some();
obj.execute(1);
obj.execute2([2,3]);
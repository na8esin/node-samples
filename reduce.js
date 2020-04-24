obj = [
  {
    id: 1,
    userId: 100,
    expertiseFieldId: 1,
    expertiseFields: { id: 1, name: '資産運用A' }
  },
  {
    id: 2,
    userId: 100,
    expertiseFieldId: 2,
    expertiseFields: { id: 2, name: '仕事' }
  },
  {
    id: 3,
    userId: 100,
    expertiseFieldId: 3,
    expertiseFields: { id: 3, name: '何か' }
  },
];

xs.reduce(function(rv, x) {
    return rv;
  }, {});


var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

console.log(groupBy(obj, 'userId'));

/*
{
  userId: 100,
  expertiseFields:[{
    id: 1, name: '資産運用A'
  },
  {
    id: 2, name: '年金A'
  }]
}



*/
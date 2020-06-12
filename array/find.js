const parentIds = [25,35];

const entites = [
{id:1, parentId:25},
{id:2, parentId:25},
{id:3, parentId:35},
];


const finds = parentIds.map(
        parentId =>
          entites.filter(e => e.parentId === parentId) || null
      );
      
console.log(finds);
/*
* [ { id: 1, parentId: 25 } ]
*/

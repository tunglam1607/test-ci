// Bai 1

// function flatten(input) {
//     const stack = [...input];
//     const res = [];
//     while(stack.length) {
//       const next = stack.pop();
//       if(Array.isArray(next)) {
//         stack.push(...next);
//       } else {
//         res.push(next);
//       }
//     }
//     console.log(res.reverse());
//   }
  
//   const arr1 = [1, {}, ["b"]]
//   const arr2 = [1, [2], [3,[4]]]
//   const arr3 = ["a", [["b"]]]

//   flatten(arr1);
//   flatten(arr2);
//   flatten(arr3);
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
        console.log(acc.concat(cur));
        return acc.concat(cur);      
    },
    [1, 2]
);

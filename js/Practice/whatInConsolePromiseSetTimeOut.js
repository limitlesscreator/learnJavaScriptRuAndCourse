console.log(1);

const p = Promise.resolve(() => {
    console.log(2);

    setTimeout(() => console.log("3"));
});

setTimeout(() => console.log("4"));

p.then((res) => {
    res();
    console.log("name");
});

console.log("5");

//////////////////////////////////////////////////////////////

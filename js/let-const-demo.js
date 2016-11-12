
function test() {
    var x = 3;
    var x = 5;
    console.log(x);
}

function testWithLet() {
    let y = 3;
    let y = 5;
    console.log(x);
}

function testWithConst() {
    const z = 5;
    z = 3;
    console.log(z);
}

test();
testWithLet();
testWithConst();
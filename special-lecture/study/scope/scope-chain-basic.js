let x = 10;

function a() {
    let y = 20;

    function b() {
        let z = 30;
        console.log(x, y, z);
    }

    b();
}

a();
const { letterChanger } = require('../src/letterChanger.js');

test("returns a string with the letters changed to its following alphabet letter", () => {
    expect( letterChanger("hello") ).toBe("ifmmp");
    expect( letterChanger("hola") ).toBe("ipmb");
    expect( letterChanger("[}{(891hello198)}]") ).toBe("[}{(891ifmmp198)}]");
    expect( letterChanger("2 5 1 now i have numbers and symbols #!|°$") ).toBe("2 5 1 opx j ibwf ovncfst boe tzncpmt #!|°$");
});

test("returns a 100.000.000 length string made with only letters, in less than 20 seconds", () => {
    let largeString = "";

    for(let i = 0; i < 100000000; i++ ){
        let variation = i % 2 === 0 ? 65 : 97;
        let ASCII = Math.floor( ( Math.random() * 26 ) + variation  );
        largeString +=  String.fromCharCode(ASCII) 
    }

    let startingTime = new Date().getTime();
    letterChanger( largeString )
    let finnishingTime = new Date().getTime();
    expect( finnishingTime - startingTime ).toBeLessThanOrEqual( 20 * 1000 )
});
const { replaceLetter } = require('../src/letterChanger.js');

test("returns the same character when it's not a letter", () => {
	expect( replaceLetter(" ") ).toBe(" ");
	expect( replaceLetter("9") ).toBe("9");
	expect( replaceLetter("(") ).toBe("(");
	expect( replaceLetter("#") ).toBe("#");
	expect( replaceLetter("!") ).toBe("!");
});

test("returns the alphabet's next letter, when it is a letter", () => {
	expect( replaceLetter("A") ).toBe("B");
	expect( replaceLetter("a") ).toBe("b");
	expect( replaceLetter("h") ).toBe("i");
	expect( replaceLetter("Z") ).toBe("A");
	expect( replaceLetter("z") ).toBe("a");
});
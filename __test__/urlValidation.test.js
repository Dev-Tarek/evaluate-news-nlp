
import { checkUrl } from '../src/client/js/urlValidation';

describe("Testing the submit functionality", () => {
    test("Testing the urlValidation() function", () => {
            let testCases = [
                // Invalid
                [false, ''],
                [false, 'abc'],
                [false, 'abc@test'],
                [false, 'abc!test'],
                [false, 'abc.t'],
                [false, 'http://'],
                [false, 'http://local'],
                [false, 'http://localhost:2000'],
                [false, 'abc@gmail.com'],

                // Valid
                [true, 'abc.com'],
                [true, 'abc.com:2000'],
                [true, '190.160.0.1'],
                [true, 'https://go.com'],
                [true, 'https://go.com/here'],
                [true, 'https://go.com/here/123-456/'],
            ];

            for (let testCase of testCases) 
                expect(checkUrl(testCase[1])).toBe(testCase[0]);
    });
});
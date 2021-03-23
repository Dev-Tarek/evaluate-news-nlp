import { clearResults } from '../src/client/js/formHandler';

describe("Testing the formHandler functionality", () => {
    test("Testing the clearResults() function", () => {
        document.body.innerHTML =
            `<div> 
              <span id="results"></span>
              <span id="url"></span>
            </div>`

        expect(clearResults()).toBe(0);
    });
});
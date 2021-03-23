
import { toggleLoading } from '../src/client/js/toggleLoading';

describe("Testing the loading toggle functionality", () => {
    test("Testing the toggleLoading() function", () => {
        document.body.innerHTML =
            `<div> 
              <span id="loading-modal"></span>
              <span id="loading-spinner"></span>
            </div>`

            let testCases = [
                // ON
                ['ON',  true],
                ['ON',  1   ],
                ['ON',  2   ],
                ['ON',  -1  ],

                // OFF
                ['OFF',  false  ],
                ['OFF',  0      ],
            ];

            for (let testCase of testCases) 
                expect(toggleLoading(testCase[1])).toBe(testCase[0]);
    });
});
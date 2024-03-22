// HERE WE ARE DEFINING A FUNCTION (s -> string, shift -> shiftvalue)
const movingShift = (s, shift) => {
    let result = ''; // Empty string 
    for (let i = 0; i < s.length; i++) { // We are iterating through each character
      const charCode = s.charCodeAt(i); // check uppercase or lowercase letter by checking its ASCII code range
      let shiftedChar;
      // If it's a letter, it calculates the shifted character based on the Caesar Cipher logic with an increasing shift value for each character. The shift value for each character is shift + i.
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        const isUpperCase = charCode >= 65 && charCode <= 90;
        const startCharCode = isUpperCase ? 65 : 97;
        shiftedChar = String.fromCharCode(startCharCode + ((charCode - startCharCode + shift + i) % 26));
        result += shiftedChar;
      } else {
        // Non-letter characters are added to the result without modification.
        result += s[i];
      }
    }
  
    const parts = []; // Empty array for parts
    const partLength = Math.ceil(result.length / 5); // using Math.ceil() to ensure equal or nearly equal lengths for the parts
    for (let i = 0; i < 5; i++) {
      // loop 5 times to create 5 parts from the encoded string
      const start = i * partLength;
      const end = start + partLength;
      parts.push(result.substring(start, end)); //adds each part to the parts array by extracting the corresponding substring from the encoded result.
    }
  
    return parts; // return final output
  }
  
  const s = "I should have known that you would have a perfect answer for me!!!";
  const shift = 1;
  const encodedParts = movingShift(s, shift);
  console.log(encodedParts);
  
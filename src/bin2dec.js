/**
 * Converts binary value to decimal
 * @param {string} bin binary in string
 */
export function bin2dec(bin) {
  if (!bin.match(/^[0-1]+$/)) {
    throw new Error("input should contain binary value");
  }

  const binArray = bin.split("");

  let res = 0;

  for (let p = binArray.length - 1, i = 0; p >= 0; p--, i++) {
    res += parseInt(binArray[i]) * 2 ** p;
  }

  return res;
}

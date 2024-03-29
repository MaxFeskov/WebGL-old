/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

export default function translate(out, a, v) {
  const [x, y, z] = v;

  if (a === out) {
    out[12] = (a[0] * x) + (a[4] * y) + (a[8] * z) + a[12];
    out[13] = (a[1] * x) + (a[5] * y) + (a[9] * z) + a[13];
    out[14] = (a[2] * x) + (a[6] * y) + (a[10] * z) + a[14];
    out[15] = (a[3] * x) + (a[7] * y) + (a[11] * z) + a[15];
  } else {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23] = a;

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;

    out[12] = (a00 * x) + (a10 * y) + (a20 * z) + a[12];
    out[13] = (a01 * x) + (a11 * y) + (a21 * z) + a[13];
    out[14] = (a02 * x) + (a12 * y) + (a22 * z) + a[14];
    out[15] = (a03 * x) + (a13 * y) + (a23 * z) + a[15];
  }

  return out;
}

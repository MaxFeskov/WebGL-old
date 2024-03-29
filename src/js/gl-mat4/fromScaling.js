/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest)
 *     mat4.scale(dest, dest, vec)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */

export default function fromScaling(out, v) {
  [out[0], out[5], out[10]] = v;

  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;

  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

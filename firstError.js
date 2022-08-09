
function binarySearch(left, right) {
    if (right === left) {
        return left;
    }
    let mid = left + (right - left >> 1);
    let curIsBad = isBadVersion(mid);
    if (curIsBad) {
        return binarySearch(left, mid);
    } else {
        return binarySearch(mid + 1, right);
    }
}
function solution(n) {
    return binarySearch(1, n);
};

function isBadVersion(n) {
  return n >= 4;
}
solution(5);
const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추"

function splitString(stringParams) {
  // split의 매개변수는 띄어쓰기로 처리되어 있습니다.
  let result = stringParams.split(' ');
  return result;
}
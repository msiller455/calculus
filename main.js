function getDistanceNums(num1, num2) {
  return Math.abs(num2 - num1)
}

function getDistancePoints(point1, point2) {
  const leg1 = getDistanceNums(point2[0], point1[0])
  const leg2 = getDistanceNums(point2[1], point1[1])
  return Math.sqrt(leg1**2 + leg2**2)
}
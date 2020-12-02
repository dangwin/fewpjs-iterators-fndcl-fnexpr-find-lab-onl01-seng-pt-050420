const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let winning = arr.find(obj => {
    return obj.result === "W"
  })
  return winning ? winning.year : undefined
}

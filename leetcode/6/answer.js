const { smallCharacter } = require('../../lib/tool');

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // grid = [["1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","0"],["1","0","1","1","1","0","0","1","1","0","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","1","1","1","1","1","1","0","1","1","1","0","1","1","1","0","1","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","0","1","1","0","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","1","1"],["1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["0","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","1","1","1","1","1"],["1","0","1","1","1","1","1","0","1","1","1","0","1","1","1","1","0","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]



  let result = 0;
  grid.forEach((row, rowIdx) => {
    row.forEach((column, columnIdx) => {
      if (parseInt(column) === 1) {
        result += 1;
        const BFSQue = [[rowIdx, columnIdx]];
        const BFSMap = {};
        BFSMap[`${rowIdx},${columnIdx}`] = true;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        while (BFSQue.length !== 0) {
          const currEl = BFSQue.shift();
          const [currRow, currColumn] = currEl;
          grid[currRow][currColumn] = 0;
          directions.forEach(direction => {
            const nextRow = currRow + direction[0];
            const nextColumn = currColumn + direction[1];
            const nextEl = (grid[nextRow] || [])[nextColumn];
            const nextStr = `${nextRow},${nextColumn}`;
            if (parseInt(nextEl) === 1 && !BFSMap[nextStr]) {
              BFSQue.push([nextRow, nextColumn]);
              BFSMap[nextStr] = true;
            }
          })
        }
      }
    })
  });
  return result;
};



// 输出模块
const outputFn = numIslands; // 记得修改这个！！！！
module.exports = (data) => {
  console.log('运行前输入的参数', data);
  const result = outputFn.apply(this, data);
  console.log('运行后输入的参数', data);
  debugger
  return result;
}
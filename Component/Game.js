import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Button,
  Pressable,
} from 'react-native';
// import App from '../App';
// const [state,setState]
const Game = () => {
  let [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  let [count,setCount]=useState(1);
  //   console.log("board",board)
  let [currentPlayer, setCurrentPlayer] = useState(1);
  let [winner, setWinner] = useState(null);

  const iconPlayer = value => {
    if (value === 1) {
      return '⭕';
    } else if (value === -1) {
      return '❌ ';
    } else {
      return '';
    }
  };
  console.log('winner is-->>', winner);
  const checkWinner = () => {
    let tempBoard = board;
    console.log('winner is', winner);
    var tempWinner = null;
    for (var i in tempBoard) {
      let sum = 0;
      for (var j in tempBoard[i]) {
        sum += tempBoard[i][j];
        if (sum === 3 || sum===-3) {
          tempWinner=sum/3;
          for (const a in tempBoard) {
            for (const b in tempBoard[a]) {
              tempBoard[a][b] = tempWinner;
            }
          }
          setBoard(tempBoard);
          setWinner(tempWinner)
        }
      }
    }
    for (var i in tempBoard) {
      let sum = 0;
      for (var j in tempBoard[i]) {
        sum += tempBoard[j][i];
        if (sum === 3 || sum=== -3) {
          tempWinner = sum/3;
          for (const a in tempBoard) {
            for (const b in tempBoard[a]) {
              tempBoard[b][a] = tempWinner;
            }
          }
          setBoard(tempBoard);
          setWinner(tempWinner)
        }
      }
    }
    if (
      tempBoard[0][0] + tempBoard[1][1] + tempBoard[2][2] === 3 ||
      tempBoard[0][2] + tempBoard[1][1] + tempBoard[2][0] === 3
    ) {
      winner = 1;

      for (var i in tempBoard) {
        for (var j in tempBoard[i]) {
          tempBoard[i][j] = winner;
         
        }
      }
      setBoard(tempBoard);
      setWinner(winner);
    }
    if (
      tempBoard[0][0] + tempBoard[1][1] + tempBoard[2][2] === -3 ||
      tempBoard[0][2] + tempBoard[1][1] + tempBoard[2][0] === -3
    ) {
      winner = -1;

      for (var i in tempBoard) {
        for (var j in tempBoard[i]) {
          tempBoard[i][j] = winner;
         
        }
      }
      setBoard(tempBoard);
      setWinner(winner);
    }
  };
  // function hello() {
  //   console.log('hello');
  // }
  const messageDisplay = () => {
    if (winner === null) {
      if (count===10 && winner==null) {
        return  "draw restart game ! ";
      } else {
        return iconPlayer(currentPlayer) + "'s turn 💡";
      }
     
    } else {
      return iconPlayer(winner) + 'is win, congrats! ✌';
    }
   
  };
  const handleTap = (row, col) => {
    console.log('handleTap is called');
    console.log('count',count);
    let tempBoard = board;
    tempBoard[row][col] = currentPlayer;
    setBoard(tempBoard);
    console.log('board', board);
    // setBoard((board[row][col] = currentPlayer));
    // setBoard((board[(row, col)] = currentPlayer));
    //   board[row,col]=currentPlayer,
    if (currentPlayer === 1) {
      setCurrentPlayer((currentPlayer = -1));
    } else if (currentPlayer === -1) {
      setCurrentPlayer((currentPlayer = 1));
    }
    // let player=

    // temp.tempBoard[row][col] = temp.TempPlayer;
    checkWinner();
    setCount(count=>count+1);
    // temp.TempPlayer*=-1,
  };
  const handleAddTask = () => {
    console.log('ndjjsjjk');
  };
  const handleReset = () => {
    console.log('reset is called');
    setCurrentPlayer(1);
    setWinner(null);
    setCount(1)
    setBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.title}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Tic Tac Toa 🎮</Text>
      </View>
      <View style={styleSheet.msg}>
        <Text style={{textAlign: 'center',fontSize:25}}>{messageDisplay()}</Text>
      </View>
      {/* <View style={styles.item}> */}
      <View style={styleSheet.item}>
        {board.map((row, rownum) => {
          return (
            <View key={rownum} style={styleSheet.row}>
              {row.map((element, colnum) => {
                return (
                  <View key={rownum + 'x' + colnum} style={styleSheet.element}>
                    {console.log(`element  ${element}  --- colnum  ${colnum}`)}
                    <TouchableOpacity
                      style={styleSheet.tapTitle}
                      disabled={element === 1 || element === -1}
                      onPress={() => handleTap(rownum, colnum)}>
                      <Text style={{fontSize: 40, textAlign: 'center'}}>
                        {iconPlayer(element)}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>

      {/* <View > */}
      <TouchableOpacity onPress={() => handleReset()}>
        <View style={styleSheet.reset}>
          <Text style={styleSheet.resetButton}>Reset</Text>
        </View>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};
const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bff1ff',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  element: {
    flex: 1,
    minHeight: 100,
    // borderColor: 'gray',
    borderWidth: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
    textAlign: 'center',
    backgroundColor: 'white',
    // margin:5
  },
  msg: {
    fontSize: 50,
    textAlign: 'center',
  },
  item: {
    marginTop: 30,
    flex: 1,
    color: '#021129',

    alignItems: 'center',
  },
  board: {
    flex: 1,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    width: 300,
    height: 100,
    alignItems: 'stretch',
    // margin:5
  },
  tapTitle: {
    // flex:1,
    // backgroundColor: '#1ab',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    // margin:5
  },
  reset: {
    marginTop: 30,

    marginBottom: 40,
    marginLeft: 120,
    width: 90,
    height: 60,
    marginStart: 30,
    backgroundColor: '#140d0a',
    borderRadius: 10,
    fontSize: 60,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 2,
  },

  resetButton: {
    fontSize: 20,

    color: '#f2e4e4',
  },
});

export default Game;

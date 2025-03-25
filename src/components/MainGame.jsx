import React, { useEffect, useRef, useState } from 'react'
import NumBtn from './NumBtn';

export default function MainGame({ username, lvl }) {

    const [gameBoard, setGameBoard] = useState(generateSudokuBoard(lvl));// from local storage
    const [numData, setNumData] = useState(null);
    // [[],[],[],[],[],[],[],[],[]]
    useEffect(()=>{
        console.log(numData);
    },[numData])
    const numBtnRef = useRef();
    // ---------------------------------------------------------
    
    function generateSudokuBoard(difficulty) {
        const board = createFullSudoku(); // Step 1: Generate a full Sudoku
        let removeCount = getRemoveCount(difficulty); // Step 2: Get numbers to remove
    
        let newBoard = board.map(row => [...row]); // Copy the board to modify
    
        while (removeCount > 0) {
            let row = Math.floor(Math.random() * 9);
            let col = Math.floor(Math.random() * 9);
    
            if (newBoard[row][col] !== 0) { // If cell is not already empty
                newBoard[row][col] = 0; // Remove the number
                removeCount--;
            }
        }
    
        return newBoard;
    }
    
    // Get number of tiles to remove based on difficulty
    function getRemoveCount(difficulty) {
        switch (difficulty) {
            case 1: return 30;
            case 2: return 40;
            case 3: return 50;
            default: return 40; // Default to medium
        }
    }
    
    // Create a full valid Sudoku board (using backtracking)
    function createFullSudoku() {
        let board = Array.from({ length: 9 }, () => Array(9).fill(0));
        solveSudoku(board); // Fills the board with a valid solution
        return board;
    }
    
    // Solve Sudoku using backtracking
    function solveSudoku(board) {
        function isValid(num, row, col) {
            for (let i = 0; i < 9; i++) {
                if (board[row][i] === num || board[i][col] === num) return false;
                let boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
                let boxCol = 3 * Math.floor(col / 3) + (i % 3);
                if (board[boxRow][boxCol] === num) return false;
            }
            return true;
        }
    
        function solve() {
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    if (board[row][col] === 0) {
                        for (let num = 1; num <= 9; num++) {
                            if (isValid(num, row, col)) {
                                board[row][col] = num;
                                if (solve()) return true;
                                board[row][col] = 0;
                            }
                        }
                        return false;
                    }
                }
            }
            return true;
        }
    
        solve();
    }

    const deployButtons =()=>{
        const btns = [1,2,3,4,5,6,7,8,9];
        return btns.map( btn => {
             return <NumBtn btn={btn} NumData={numData} setNumData={setNumData} numBtnRef={numBtnRef}/>
        })
    }

    const insertData =()=>{

    }
    
    const deployGame =()=>{
        return gameBoard.map((row, rowIndex) => (
            <div key={rowIndex} className="sudoku-row">
                {row.map((cell, colIndex) => (
                    <div
                        key={colIndex}
                        className="sudoku_cell"
                        onClick={()=>{insertData()}}
                        >
                        {cell === 0 ? "" : cell}
                    </div>)
                    
                )}
            </div>
        ))
    }

    // ---------------------------------------------------------
    return (


        <div className="main_game_page">
            <h1 className='game_mainHeader'>Sudoku</h1>
            <div className="board_main">
                <div className="board">
                <div className="sudoku-grid">
                    {deployGame()}
                </div>
                    <div className="numBtns">
                        {deployButtons()}
                    </div>
                </div>
                <button id="startBtn" onClick={()=>{return}}>Start again</button>
                <button id="finishBtn" onClick={()=>{return}}>Finish game</button>
            </div>
        </div>
    )
}

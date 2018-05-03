import detectWinner from '../logic/detectWinner';

describe('winDiagonal', () => {
    it('should win diagonal X', () => {
        const state = {
            board: [
                ['X', '0', 'X'],
                ['0', 'X', '0'],
                ['X', 'X', '0']
            ],
            symbol: 'X',
            gameEnd: false,
            win: false
        };

        const expectValue = {
            win: true,
            stillPlay: false
        };

        expect(detectWinner(state)).toEqual(expectValue);
    });
});

describe('noEmptySpace', () => {
    it('No empty space, nobody win', () => {
        const state = {
            board: [
                ['X', '0', 'X'],
                ['0', '0', '0'],
                ['X', 'X', '0']
            ],
            symbol: 'X',
            gameEnd: false,
            win: false
        };

        const expectValue = {
            win: false,
            stillPlay: false
        };

        expect(detectWinner(state)).toEqual(expectValue);
    });
});

describe('winRow', () => {
    it('Win row, still could play', () => {
        const state = {
            board: [
                ['0', '0', '0'],
                ['0', '0', ''],
                ['', 'X', 'X']
            ],
            symbol: '0',
            gameEnd: false,
            win: false
        };

        const expectValue = {
            win: true,
            stillPlay: true
        };

        expect(detectWinner(state)).toEqual(expectValue);
    });
});

describe('wrongSymbol', () => {
    it('wrongSymbol', () => {
        const state = {
            board: [
                ['0', '0', ')'],
                ['0', '0', ''],
                ['', 'X', 'X']
            ],
            symbol: '0',
            gameEnd: false,
            win: false
        };

        const expectValue = {
            win: false,
            stillPlay: true
        };

        expect(detectWinner(state)).toEqual(expectValue);
    });
});


describe('wrongSymbol', () => {
    it('wrongSymbol', () => {
        const state = {
            board: [
                ['0', '0', ''],
                ['0', '0', ''],
                ['X', 'X', 'X']
            ],
            symbol: 'X',
            gameEnd: false,
            win: false
        };

        const expectValue = {
            win: true,
            stillPlay: true
        };

        expect(detectWinner(state)).toEqual(expectValue);
    });
});

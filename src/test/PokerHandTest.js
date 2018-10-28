import PokerHand, { Result } from './PokerHand.js';

describe('PokerHand', () => {

	describe('compareWith()', () => {

		it(`ties`, () => {

			let hand1 = new PokerHand('AC 4S');
			const hand2 = new PokerHand('4S 5S');

			expect(hand1.compareWith(hand2)).toBe(Result.TIE);

		});

	});

});

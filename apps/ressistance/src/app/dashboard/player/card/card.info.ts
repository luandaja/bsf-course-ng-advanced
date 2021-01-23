import { CardType, CardMap } from './models';
import { Card } from '../../../models';

export const reverseCardImages: { [key: number]: string; } = {
	[CardType.Character]: 'assets/cards/back-character-a.jpg',
	[CardType.Assignment]: 'assets/cards/back-vote-a.jpg',
	[CardType.Mission]: 'assets/cards/back-mission-a.jpg',
	[CardType.Leader]: 'assets/cards/back-leader-a.jpg',
	[CardType.Team]: 'assets/cards/back-team.jpg'
};

export const cardImages: CardMap = {
	[Card.Spy]: { image: 'assets/cards/axis-1-en.jpg', cardType: CardType.Character },
	[Card.Ally]: { image: 'assets/cards/ally-1-en.jpg', cardType: CardType.Character },
	[Card.Support]: { image: 'assets/cards/support-en.jpg', cardType: CardType.Assignment },
	[Card.Reject]: { image: 'assets/cards/reject-en.jpg', cardType: CardType.Assignment },
	[Card.Success]: { image: 'assets/cards/succeed-en.jpg', cardType: CardType.Mission },
	[Card.Fail]: { image: 'assets/cards/fail-en.jpg', cardType: CardType.Mission },
	[Card.Leader]: { image: 'assets/cards/leader-en.jpg', cardType: CardType.Leader },
	[Card.Team]: { image: 'assets/cards/mission-en.jpg', cardType: CardType.Team },
}

export interface BoardStatus {
	hasGameStarted?: boolean,
	shouldDragCards?: boolean,
	wereSpiesRevealed?: boolean,
	playerInTurn?: string,
	cards?: boolean[]
}
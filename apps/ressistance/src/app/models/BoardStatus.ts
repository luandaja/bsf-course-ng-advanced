export interface BoardStatus {
	hasGameStarted?: boolean,
	shouldDragCards?: boolean,
	wereSpiesRevealed?: boolean,
	missionNumber?: number,
	playerInTurn?: string,
	cards?: boolean[]
}

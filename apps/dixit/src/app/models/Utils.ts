export function add<T>(array: T[], item: T): T[] {
	const newList = Object.assign([], array) as T[];
	newList.push(item);
	return newList;
}

export function concat<T>(array: T[], items: T[]): T[] {
	const newList = Object.assign([], array) as T[];
	return newList.concat(items);
}

export function shuffle<T>(array: T[]) {
	const newList = Object.assign([], array) as T[];
	for (let i = newList.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newList[i], newList[j]] = [newList[j], newList[i]];
	}
	return newList;
}

export function update(array: any[], updatedItem: any) {
	const newArray = array.map(item => Object.assign({}, item));
	const index = newArray.findIndex(item => item.id === updatedItem.id);
	newArray.splice(index, 1, updatedItem);
	return newArray;
}

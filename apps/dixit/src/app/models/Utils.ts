

export function add<T>(array: T[], item: T): T[] {
	const newList = Object.assign([], array) as T[];
	newList.push(item);
	return newList;
}

export function concat<T>(array: T[], items: T[]): T[] {
	const newList = Object.assign([], array) as T[];
	return newList.concat(items);
}

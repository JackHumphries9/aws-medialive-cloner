export function jsonParse<Type>(json: string): Type {
	return JSON.parse(json) as Type;
}

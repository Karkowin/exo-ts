/**
*
*/
export function subtract(a: number, b: number): number {
	return a - b;
}

/**
*
*/
export function prop<T, K extends keyof T>(obj: T, propName: K): T[K] {
	return obj[propName];
}

/**
* 
* @param {Array} input un tableau de donnée
* @param {Function} fn une fonction de traitement qui prend en paramètre un tableau de donnée
* @return {Array} un tableau de donnée filtré du même type que le tableau d'entrée
*/
export function filter<T>(fn: (input: T[]) => T[], input: T[]): T[] {
	return fn(input);
}

interface IDownloadProduct {
	file: string;
}

interface IShipableProduct {
}

class DownloadProduct implements IDownloadProduct {
	file: string;

	constructor(product: IDownloadProduct) {
		this.file = product.file;
	}
}

class ShipableProduct implements IShipableProduct {
	constructor(product: IShipableProduct) {
	}
}

/**
 * Créé class et interface necessaire a rendre le code suivant valide
 */
function isDownloadProduct(arg: IDownloadProduct | IShipableProduct): arg is IDownloadProduct {
	return (arg as IDownloadProduct).file !== undefined;
}

function productFactory(product: IDownloadProduct | IShipableProduct): DownloadProduct | ShipableProduct {
	if (isDownloadProduct(product)) {
		return new DownloadProduct(product);
	} else {
		return new ShipableProduct(product);
	}
}

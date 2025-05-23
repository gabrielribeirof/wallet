export type Either<L, A> = Left<L, A> | Right<L, A>;

export class Left<L, A> {
	readonly value: L;

	constructor(value: L) {
		this.value = value;
	}

	isLeft(): this is Left<L, A> {
		return true;
	}

	isRight(): this is Right<L, A> {
		return false;
	}

	getLeft(): L {
		return this.value;
	}

	getRight(): A {
		throw new Error('Called getRight on a Left');
	}
}

export class Right<L, A> {
	readonly value: A;

	constructor(value: A) {
		this.value = value;
	}

	isLeft(): this is Left<L, A> {
		return false;
	}

	isRight(): this is Right<L, A> {
		return true;
	}

	getLeft(): L {
		throw new Error('Called getLeft on a Right');
	}

	getRight(): A {
		return this.value;
	}
}

export const left = <L, A>(l: L): Either<L, A> => {
	return new Left(l);
};

export const right = <L, A>(a: A): Either<L, A> => {
	return new Right<L, A>(a);
};

export const someLeft = (...eithers: Either<any, any>[]): boolean => {
	return eithers.some((either) => either.isLeft());
};

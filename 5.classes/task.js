class PrintEditionItem {


	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.type = null;
		this.state = 100;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(status) {
		if (status < 0) {
			this._state = 0;
		} else if (status > 100) {
			this._state = 100;
		} else {
			this._state = status;
		}
	};

	get state() {
		return this._state;
	};


}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (const book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		let foundBook;
		let foundBookIndex;
		if (this.books.some(item => bookName === item.name)) {
			foundBookIndex = this.books.findIndex(item => bookName === item.name);
			foundBook = this.books[foundBookIndex];
			this.books.splice(foundBookIndex, 1);
			return foundBook;
		} else {
			return null;
		}
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if ((mark < 1) || (mark > 5)) {
			console.log("Ошибка, оценка должна быть числом от 1 до 5");
		} else if (this.marks[subject]) {
			this.marks[subject].push(mark);
		} else {
			this.marks[subject] = [];
			this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (this.marks[subject]) {
			let sum = 0;
			for (const mark of this.marks[subject]) {
				sum += mark;
			}
			return sum / this.marks[subject].length;
		} else {
			console.log("Несуществующий предмет");
		}
	}

	getAverage() {
		let sum = 0;
		let lengthArray = 0;
		Object.values(this.marks).forEach(item => item.forEach(mark => {
			sum += mark;
			lengthArray++;
		}));
		return sum / lengthArray;
	}


}
import { Pipe } from 'angular2/core';

@Pipe({
	name: 'orderby',
})

export class OrderByPipe {
	transform(array: Array<string>, sortCol: string): Array<string> {
		var ascending = true;
		if (sortCol[0][0] === '-') {
			sortCol = sortCol[0].substring(1);
			ascending = false;
		}
		array.sort((a: any, b: any) => {
			if (a[sortCol] < b[sortCol]) {
				return (ascending ? -1 : 1);
			} else if (a[sortCol] > b[sortCol]) {
				return (ascending ? 1 : -1);
			} else {
				return 0;
			}
		});
		return array;
	}
}


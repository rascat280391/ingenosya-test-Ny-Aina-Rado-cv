export class DateTime {
	static format(date: string): string {
		const d = new Date(date);
    	return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	}
}

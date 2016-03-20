export class LeagueTeam {
	team: string;
	manager: string;
	money: number;
	points: number;
	gwpoints: number;

	// maybe add team value: money + player value
	constructor(team: string, manager: string, money: number, points: number, gwpoints: number) {
		this.team = team;
		this.manager = manager;
		this.money = money;
		this.points = points;
		this.gwpoints = gwpoints;
	}
}
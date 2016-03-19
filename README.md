# Silly Season Fantasy League - Client
[Server repository](https://github.com/larskris/SillySeasonFantasyLeague)

# Silly Season Fantasy League
### Fantasy League based on the official [Fantasy Premier League](http://fantasy.premierleague.com). 
* This league is focused on league play. 
* Each player is unique and can only play for one team. 
* Each game week is a silly season.
* Any player can be bought from any manager if the transfer fee is high enough, game week salaries are based on the transfer fee.
* The goal is still focused on getting as many points as possible.
* Player points are both calculated as points and converted to money.
* Transfer fee goes to selling manager or is lost if player was a free agent.
* Buying and paying salaries wastes money.

## Quick setup
Make sure that you are running Postgres.  

In a terminal execute the following:
```
$ git clone https://github.com/larskris/sillyseason-client.git
$ cd sillyseason
$ npm install
$ npm start

```
Check the output for the localhost port in your terminal.

Server will run on "localhost:3001"


## Transfer Rules
### For transfers the Players model has four important fields:
* user_id: the user who owns the player
* value: current value of player
* topbid: current highest bid on player by current owner
* owned: true if user has owned player over a gameweek, user cannot make a profit from a player when sold if this field is false


### Buy free agent
* value subtracted from user's money
* player marked with topbid


### Buy from other user when player is marked as not owned (player bought in the same transfer round)

- if bid larger than topbid
	* all invested money is returned to other user, no loss or profit
	* topbid + 100k (or bid if less than topbid + 100k) is taken from user
	* player marked with topbid

- if bid smaller than topbid
	* value of player goes up to bid, difference is taken from other user's money
	* player remains in other user's possession


### Buy from other user when player is marked as owned (player bought before last game week, other user received points (if any) for player at least once)

- if bid larger than topbid
	* ownership of player change to bidding user and player is marked as not owned
	* user pays topbid + 100k (or bid) to other user
	* player marked with new topbid

- if bid smaller than topbid
	* value of player goes up to bid
	* no money drawn from owner of player, increased salary will be paid instead


### Sell player
* player fields changed to nil, value set to 90% of previous value
* seller receives 90% of previous value



## User stories
### A user can ...
* create an account and log in. 
* create a new password protected league, the league will be listed for others to join.
* join a league.
* create a team and start making offers on players.
* sell players from own team.
* set salary roof that other managers must bid over in order to buy said player.
* see league table.
* see logs of all activity.

### Stretch goals, a user can ...
* see player stats.
* post suggestions in a forum for changes, others should be able to comment and vote on suggestions.
* filter log entries.
* can navigate through other team's history

## Models
#### User model  
###### Relationships
* Has many players
* Has many logs
* Belongs to league

###### Attributes
- team_name
- league_id
- user_name

#### Player model
###### Relationships
* Belongs to user
* Belongs to league
* Has many logs

###### Attributes
- data (json data from official API)
- value
- user_id
- league_id
- owned
- topbid

#### Log model
###### Relationships
* Belongs to user
* Belongs to player
* Belongs to league

###### Attributes
- user_id
- player_id
- league_id
- text (message)
- action (related to text field, should be a set of allowed actions e.g. bought, sold, bid)
- value (of transfer fee or bid)
- game_week_id (1 - 38)

#### League model
###### Relationships
* Has many users
* Has many players
* Has many logs

###### Attributes
- league_name
- user_id (admin)


## Logs
Logs keep track of events. Logs are of the following kind:

* newPlayer - created when new player is added to API data
* stoptransfers - created before the first game starts, stops transfers until newgameweek has been created
* newgameweek - created after games have been played, calculates the points for each user and activates transfers
* gwpoints - created for each user after each game week. Shows the total points for that game week from user's players
* bid - created when user bids on players.
* salaries - created when transfers are stopped. 10% of the total value of user's players are subtracted from user's money.


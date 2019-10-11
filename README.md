# Testing II

## MVP

- [ ] **write unit tests and the implementation code** for a React application for _Baseball Stadium_ personnel.
- [ ] Display Component - show the number of Balls, Strikes, and Fouls
- [ ] Dashboard Component - buttons to increase Balls, Strikes, Fouls, and Hits.

**For the MVP you only need to record information about a player's _"at bat"_**.

### Count Rules

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

### Display Component

- display the count of `balls` and `strikes` for the at-bat.
- should be updated when the user records activity on the `Dashboard` component.

### Dashboard Component

- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.

Feel free add other components and organize and name your components any way you want to satisfy the requirements. **Make it up and make it happen developer!**.

## Stretch

- Track all the activity of a single inning. Include the number of outs and track them.
- Track the number of runs and errors in the inning.
- Track which bases are occupied and to record hits, doubles, triples and home runs.
- Track all activity across all innings. Display the current inning.
- Work on [this repository for extra practice testing a legacy React application](https://github.com/LambdaSchool/React-Testing).
  - https://github.com/LambdaSchool/React-Testing

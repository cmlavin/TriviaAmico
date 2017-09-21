import React from 'react'
import { Grid } from 'semantic-ui-react'

class Leaderboard extends React.Component {
  componentWillReceiveProps(nextProps) {
    debugger
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

// const Leaderboard = () => {
//   return(
//     <div>
//       <Grid id="leaderboardGrid">
//         <Grid.Column>
//         </Grid.Column>
//       </Grid>
//     </div>
//   )
// }

export default Leaderboard

//will need componentWillReceiveProps
//props will be all the scores from App.js

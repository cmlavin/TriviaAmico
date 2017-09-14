import React from 'react'
import { Loader } from 'semantic-ui-react'

const Loading = () => {
  return(
    <div>
      <div id="gameLoading">
        The game is loading...
        <div id="loaderGraphic">
          <Loader active size="massive" inline='centered' />
        </div>
      </div>
    </div>
  )
}

export default Loading

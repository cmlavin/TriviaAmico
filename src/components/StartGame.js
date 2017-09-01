import React from 'react';
import { Form, Select, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import categories from '../options/categories'
import difficulties from '../options/difficulties'
import numQuestions from '../options/numQuestions'
import questionTypes from '../options/questionTypes'

  const StartGame = (props) => {
    return(
      <div>
        <Form>
          <Form.Field inline>
            <label><h3 className="formLabel">Category</h3></label>
            <Select className="selections" options={categories} onChange={props.handleSelection}/><br/>
            <label><h3 className="formLabel">Difficulty</h3></label>
            <Select className="selections" options={difficulties} onChange={props.handleSelection}/><br/>
            <label><h3 className="formLabel">Number of questions</h3></label>
            <Select className="selections" options={numQuestions} onChange={props.handleSelection}/><br/>
            <label><h3 className="formLabel">Type of questions</h3></label>
            <Select className="selections" options={questionTypes} onChange={props.handleSelection}/><br/>
            <Link to='/game'><Button id="startGameButton" onClick={props.handleSubmit}>Start Game</Button></Link>
          </Form.Field>
        </Form>
      </div>
    )
}

export default StartGame;

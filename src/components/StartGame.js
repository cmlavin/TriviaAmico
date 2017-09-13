import React from 'react';
import { Form, Select, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import categories from '../options/categories'
import difficulties from '../options/difficulties'
import numQuestions from '../options/numQuestions'
import questionTypes from '../options/questionTypes'

  const StartGame = (props) => {
    return(
      <div id="startGameForm">
        <Form>
          <Form.Field inline>
          <div className="form-select-container">
            <div className="inline">
              <div className="inline-inner">Category</div>
            </div>
            <div className="inline"><Select className="selections" options={categories} onChange={props.handleSelection}/></div>
          </div>
          <div className="form-select-container">
            <div className="inline">
              <div className="inline-inner">  Difficulty </div>
            </div>
            <div className="inline"><Select className="selections" options={difficulties} onChange={props.handleSelection}/></div>
          </div>
          <div className="form-select-container">
            <div className="inline">
              <div className="inline-inner">  Number of questions </div>
            </div>
            <div className="inline"><Select className="selections" options={numQuestions} onChange={props.handleSelection}/></div>
          </div>
          <div className="form-select-container">
            <div className="inline">
              <div className="inline-inner"> Type of questions </div>
            </div>
            <div className="inline"><Select className="selections" options={questionTypes} onChange={props.handleSelection}/></div>
          </div>
            <Link to='/game'><Button id="startGameButton" onClick={props.handleSubmit}>Start Game</Button></Link>
          </Form.Field>
        </Form>
      </div>
    )
}

export default StartGame;

import React from 'react'
import PropTypes from 'prop-types'

const NewFlashcard = ({onSave, onChange}) => (
  <div>
    <form>
      <div className="d-none d-lg-block">
        <div className="input-group form-row">
          <input type="text" className="form-control col-md-4" placeholder="Question" aria-label="question"
                 name="question" onChange={onChange} aria-describedby="basic-addon2"/>
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-arrows-alt-h fa-sm"/></span>
          </div>
          <input type="text" className="form-control col-md-4" placeholder="Answer" aria-label="answer"
                 name="answer" onChange={onChange} aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-outline-success" type="submit" onClick={onSave}>Add flashcard</button>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <input type="text" className="form-control" id="question" name="question" placeholder="Question"
               onChange={onChange}/>
        <input type="text" className="form-control" id="answer" name="answer" placeholder="Answer" onChange={onChange}/>
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <button className="btn btn-outline-success btn-block" type="submit" onClick={onSave}>Add flashcard</button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </form>
  </div>
);

NewFlashcard.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NewFlashcard

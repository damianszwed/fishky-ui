import React from 'react'
import PropTypes from 'prop-types'

const Flashcard = ({question, answers, flashcard}) => {
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{question}</h5>
          {
            answers && answers.map((answer) => {
              return (
                <p key={flashcard.id.replace(/=/g, '-') + answer} className="card-text">{answer}</p>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

Flashcard.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array,
  flashcard: PropTypes.object.isRequired
};

export default Flashcard;

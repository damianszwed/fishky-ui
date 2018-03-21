import * as types from '../actions/actionTypes';

const initialState = {
  learningProcessEnabled: false,
  actualQuestion: "here-will-be-question",
  actualQuestionId: "here-will-be-actual-question-id",
  expectedAnswer: "here-will-be-expected-answer",
  flashcardsToLearn: [],
  learningProcessFinished: false
};

export default function learningReducer(state = initialState, action) {
  switch (action.type) {
    case types.START_LEARNING:
      //1) Copy, Randomize array order and save to array1
      //2) Copy, map and randomize again, save to array1

      let array1 = shuffle([...action.flashcards]);
      let array2 = shuffle(
        array1.map(flashcard => (
          {
            id: "other-id",
            question: "inverted",
            answer: "inverted"
          }
        ))
      );

      return {
        ...initialState,
        actualQuestion: array1[0].question,
        actualQuestionId: array1[0].id,
        expectedAnswer: array1[0].answer,
        learningProcessEnabled: true,
        flashcardsToLearn: [...array1.splice(1), array2]
      };

    default:
      return state;
  }
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

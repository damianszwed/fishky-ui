import reducer from './flashcardFoldersReducer'
import * as types from '../actions/actionTypes';
import * as actions from '../actions/flashcardFoldersActions'

describe('flashcardFoldersReducer', () => {
  it('should add flashcard folder when passed CREATE_FLASHCARD_FOLDER_SUCCESS', () => {
    // arrange
    const initialState = [
      {whatever: 'whateverA'},
      {whatever: 'whateverB'}
    ];

    const newFlashcardFolder = {whatever: 'whateverC'};

    const action = actions.createFlashcardFolderSuccess(newFlashcardFolder);

    //act
    const newState = reducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].whatever).toEqual('whateverA');
    expect(newState[1].whatever).toEqual('whateverB');
    expect(newState[2].whatever).toEqual('whateverC');
  });

  it('should update concrete folder on event', () => {
    //given
    const initialState = [
      {id: 'a'},
      {id: 'b'},
      {id: 'c'},
    ];

    const newFlashcardFolder = {id: 'b', otherField: 'bb'};

    const action = actions.loadFlashcardFolderSuccess(newFlashcardFolder);

    //when
    const newState = reducer(initialState, action);

    //then
    expect(newState.length).toEqual(3);
    expect(newState[1].otherField).toEqual('bb');
  });

  it('should add concrete folder on event', () => {
    //given
    const initialState = [
      {id: 'a'},
      {id: 'b'},
      {id: 'c'},
    ];

    const newFlashcardFolder = {id: 'd', otherField: 'dd'};

    const action = actions.loadFlashcardFolderSuccess(newFlashcardFolder);

    //when
    const newState = reducer(initialState, action);

    //then
    expect(newState.length).toEqual(4);
    expect(newState[3].otherField).toEqual('dd');
  });

  describe('when flashcard folders are loaded', () => {
    let state;
    beforeEach(() => {
      state = reducer({}, {
        type: types.LOAD_FLASHCARD_FOLDERS,
        flashcardFolders: [
          {
            id: 'a'
          },
          {
            id: 'b'
          }
        ]
      })
    });

    it('lists all of the flashcards as visible', () => {
      expect(state).toEqual(
        [
          {
            id: 'a'
          },
          {
            id: 'b'
          }
        ]
      )
    });
  })
});

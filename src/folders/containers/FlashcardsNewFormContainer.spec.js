import React from 'react';
import expect from 'expect';
import {FlashcardNewFormContainer} from './FlashcardNewFormContainer';

import Enzyme, {mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import toastr from 'toastr';
import jsdom from 'jsdom'

jest.mock('toastr');

Enzyme.configure({adapter: new Adapter()});

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

function setup() {
  const props = {
    actions: {
      saveFlashcard: () => {
        return Promise.resolve();
      }
    },
    flashcardFolderId: "flashcardFolderIdValue"
  };

  return mount(<FlashcardNewFormContainer {...props} />);
}

describe('Flashcards New Form Container Page', () => {
  it('doesnt change flashcard key', () => {

    const wrapper = setup();
    console.log(wrapper);
    const saveButton = wrapper.find('button').first();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().resetNewFlashcardKey).toBe(0);
  });

  it('should set newFlashcard to default object', () => {
    //given
    const wrapper = setup();
    //when & then
    expect(wrapper.state().newFlashcard).toEqual({"answers": [""], "question": ""});
  });

  it('should set answer on flashcard answer form change', () => {
    //given
    const wrapper = setup();
    //when
    const answerEvent = {
      target: {
        value: "answerValue"
      }
    }
    wrapper.instance().onFlashcardAnswerFormChange(0, answerEvent);
    //when
    expect(wrapper.state().newFlashcard).toEqual({"answers": ["answerValue"], "question": ""});
  });

  it('should add one more answer on demand', () => {
    //given
    const wrapper = setup();
    //when
    wrapper.instance().addOneMoreAnswer();
    //when
    expect(wrapper.state().newFlashcard).toEqual({"answers": ["", ""], "question": ""});
  });

  it('should add one more answer on demand given existing answer', () => {
    //given
    const wrapper = setup();
    const answerEvent = {
      target: {
        value: "answerValue"
      }
    }
    wrapper.instance().onFlashcardAnswerFormChange(0, answerEvent);
    //when
    wrapper.instance().addOneMoreAnswer();
    //when
    expect(wrapper.state().newFlashcard).toEqual({"answers": ["answerValue", ""], "question": ""});
  });

  it('should not revoke first answer given two answers', () => {
    //given
    const wrapper = setup();
    const answerEvent = {
      target: {
        value: "questionValue"
      }
    }
    wrapper.instance().onFlashcardAnswerFormChange(0, answerEvent);
    wrapper.instance().addOneMoreAnswer();
    //when
    wrapper.instance().revokeAnswer();
    wrapper.instance().revokeAnswer();
    //when & then
    expect(wrapper.state().newFlashcard).toEqual({"answers": ["questionValue"], "question": ""});
  });

  it('should return false on validation check given empty flashcard', () => {
    //given
    const wrapper = setup();
    //when & then
    expect(wrapper.instance().newFlashcardIsValid()).toEqual(false);
  });

  it('should return false on validation check given empty answer', () => {
    //given
    const wrapper = setup();
    const questionEvent = {
      target: {
        name: "question",
        value: "questionValue"
      }
    }
    wrapper.instance().onFlashcardQuestionFormChange(questionEvent);
    //when
    let flashcardIsValid = wrapper.instance().newFlashcardIsValid();
    //then
    expect(flashcardIsValid).toEqual(false);
  });

  it('should return true on validation check given correct flashcard', () => {
    //given
    const wrapper = setup();
    const questionEvent = {
      target: {
        name: "question",
        value: "questionValue"
      }
    }
    wrapper.instance().onFlashcardQuestionFormChange(questionEvent);
    const answerEvent = {
      target: {
        value: "answerValue"
      }
    }
    wrapper.instance().onFlashcardAnswerFormChange(0, answerEvent);
    //when
    let flashcardIsValid = wrapper.instance().newFlashcardIsValid();
    //then
    expect(flashcardIsValid).toEqual(true);
  });

});

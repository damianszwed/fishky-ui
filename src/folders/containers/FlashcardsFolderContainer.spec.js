import React from 'react';
import expect from 'expect';
import {FlashcardFolderContainer} from './FlashcardFolderContainer';

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
    flashcardFolders: [],
    actions: {
      saveFlashcard: () => {
        return Promise.resolve();
      }
    },
    loadingFlashcardFolders: false,
    match: {params: {}},
    history: {}
  };

  return mount(<FlashcardFolderContainer {...props} />);
}

describe('Flashcards Folder Container Page', () => {
  it('doesnt change flashcard key', () => {

    const wrapper = setup();
    console.log(wrapper);
    const saveButton = wrapper.find('button').first();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().resetNewFlashcardKey).toBe(0);
  });

  describe('New flashcard', () => {
    it('should set newFlashcard to empty object', () => {
      //given
      const wrapper = setup();
      //when & then
      expect(wrapper.state().newFlashcard).toEqual({});
    });

    it('should return false on validation check given empty flashcard', () => {
      //given
      const wrapper = setup();
      //when & then
      expect(wrapper.instance().newFlashcardIsValid()).toEqual(false);
    });
  });

});

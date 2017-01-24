"use strict";

describe('The angular workshop app', function () {
  beforeAll(function () {
    browser.get('/');
  });

  describe('main page', function() {
    it('should provide a means to switch between english and german language', function() {
      expect(element(by.id('set-english')).isDisplayed()).toBe(true);
      expect(element(by.id('set-german')).isDisplayed()).toBe(true);

      // check for german text
      element(by.id('presentation-begins'))
        .getText()
        .then(function(value) {
          expect(value).toMatch(/Die Präsentation begann um/)
        });

      // switch to english
      element(by.id('set-english')).click();

      // proof that we can switch to english
      element(by.id('presentation-begins'))
        .getText()
        .then(function(value) {
          expect(value).toMatch(/The presentation started at/)
        });

      // switch to german again
      element(by.id('set-german')).click();

      // check for german text
      element(by.id('presentation-begins'))
        .getText()
        .then(function(value) {
          expect(value).toMatch(/Die Präsentation begann um/)
        });
    });
  });


  describe('navbar', function() {
    it('should have a brand called "Angular 1.x Workshop"', function () {
      expect(element(by.id('brand')).getText()).toEqual('Angular 1.x Workshop');
    });

    it('should provide a page to calculate Thorsten\'s salary', function () {
      expect(element(by.id('home-menu')).isDisplayed()).toBe(true);
    });

    it('should provide a page to show about information', function () {
      expect(element(by.id('about-menu')).isDisplayed()).toBe(true);
    });

    it('should provide a page to view Thorsten\'s company information', function () {
      expect(element(by.id('contact-menu')).isDisplayed()).toBe(true);
    });

    it('should provide a page to view Thorsten\'s students that are available for underpaid programming jobs', function () {
      expect(element(by.id('students-menu')).isDisplayed()).toBe(true);
    });
  });
});

'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /main when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/main");
  });


  describe('main', function() {

    beforeEach(function() {
      browser.get('index.html#/main');
    });


    it('should render view1 when user navigates to /main', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for main/);
    });

  });


  describe('photos', function() {

    beforeEach(function() {
      browser.get('index.html#/photos');
    });


    it('should render photos when user navigates to /photos', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for photos/);
    });

  });
});

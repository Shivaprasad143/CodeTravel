import { NewTravelPortalPage } from './app.po';

describe('new-travel-portal App', function() {
  let page: NewTravelPortalPage;

  beforeEach(() => {
    page = new NewTravelPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

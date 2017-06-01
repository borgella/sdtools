import { The6starsPage } from './app.po';

describe('the6stars App', () => {
  let page: The6starsPage;

  beforeEach(() => {
    page = new The6starsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

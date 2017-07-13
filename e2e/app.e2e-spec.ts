import { Getmynumberv2Page } from './app.po';

describe('getmynumberv2 App', () => {
  let page: Getmynumberv2Page;

  beforeEach(() => {
    page = new Getmynumberv2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

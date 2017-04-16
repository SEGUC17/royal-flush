import { AmrAbuGreedahAJS2Page } from './app.po';

describe('amr-abu-greedah-ajs2 App', function() {
  let page: AmrAbuGreedahAJS2Page;

  beforeEach(() => {
    page = new AmrAbuGreedahAJS2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

// <<<<<<< HEAD
// import { MeanAuthPage } from './app.po';

// describe('mean-auth App', () => {
//   let page: MeanAuthPage;

//   beforeEach(() => {
//     page = new MeanAuthPage();
// =======
import { AngularSrcPage } from './app.po';

describe('angular-src App', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

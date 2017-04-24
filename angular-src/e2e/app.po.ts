import { browser, element, by } from 'protractor';

// <<<<<<< HEAD
// export class MeanAuthPage {
// =======
export class AngularSrcPage {
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

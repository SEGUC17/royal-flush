// <<<<<<< HEAD
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
// =======
// /* tslint:disable:no-unused-variable */

// import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(() => {
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
// <<<<<<< HEAD
    }).compileComponents();
  }));
// =======
//     });
//     TestBed.compileComponents();
//   });
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});

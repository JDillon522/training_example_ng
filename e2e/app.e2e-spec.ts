import { TrainingPage } from './app.po';

describe('training App', function() {
  let page: TrainingPage;

  beforeEach(() => {
    page = new TrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

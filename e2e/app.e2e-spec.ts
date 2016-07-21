import { MapProjectPage } from './app.po';

describe('map-project App', function() {
  let page: MapProjectPage;

  beforeEach(() => {
    page = new MapProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

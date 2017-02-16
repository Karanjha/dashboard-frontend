import { DashboardFrontendPage } from './app.po';

describe('dashboard-frontend App', function() {
  let page: DashboardFrontendPage;

  beforeEach(() => {
    page = new DashboardFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

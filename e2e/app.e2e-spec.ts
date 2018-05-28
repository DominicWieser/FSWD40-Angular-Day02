import { MyFoodAppPage } from './app.po';

describe('my-food-app App', () => {
  let page: MyFoodAppPage;

  beforeEach(() => {
    page = new MyFoodAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

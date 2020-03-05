export class FeaturedPageFactory {
  constructor(private contentItems: any) {
    console.log('FeaturedPageFactory constructor called!');
  }

  public init() {

    const allGood = true;

    return new Promise((resolve, reject) => {

      if (allGood) {
        resolve(this.contentItems);
      } else {
        reject(console.log('Not so good.'));
      }

    });
  }

}

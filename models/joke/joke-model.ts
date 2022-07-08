import { Builder } from 'builder-pattern';

interface JokeModel {
  value: string;
  onFetchSingleJoke: (cat: string) => void;
}

interface JokeView {
  joke: string;
  handleGetSingleJoke: (cat: string) => void;
}

export class JokeViewModel {
  private _view!: JokeView;
  private model: JokeModel;

  constructor(model: JokeModel) {
    this.model = model;
  }

  get view() {
    return this._view;
  }

  set view(view: JokeView) {
    this._view = view;
  }

  create(): JokeViewModel {
    this.view = Builder<JokeView>()
      .joke(this.model.value)
      .handleGetSingleJoke(this.model.onFetchSingleJoke)
      .build();

    return this;
  }
}

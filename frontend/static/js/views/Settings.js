import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
        <h1>Posts</h1>
        <p>
            Manage your privacy and configuration.
        </p>
    `;
  }
}

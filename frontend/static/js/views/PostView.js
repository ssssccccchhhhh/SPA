import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle(`Post #${this.postId}`);
  }

  async getHtml() {
    console.log(this.params.id);
    return `
        <h1>Post#${this.postId}</h1>
        <p>You are viewing post #${this.postId}</p>

        <p>
            <a href="/posts" data-link>View recent posts</a>
        </p>
    `;
  }
}

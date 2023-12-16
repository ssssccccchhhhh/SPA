import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
        <h1>Posts</h1>
        <p>
            You are viewing the posts!
        </p>
        <li>
            <a href="/posts/1" data-link>View post1</a>
        </li>
        <li>
            <a href="/posts/2" data-link>View post2</a>
        </li>
    `;
  }
}

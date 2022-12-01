import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsMonkey</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="/">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/technology">Technology</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
      </>
    )
  }
}

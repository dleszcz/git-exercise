import React, {Component} from 'react';
import {Newsletter} from './newsletter/newsletter.component';
import {List} from './list/list.component';
import envConfig from 'env-config';


export class Home extends Component {
  componentWillMount() {
    fetch(`http://myapi?privateKey=${envConfig.privateKey}`)
  }
  
  render() {
    return (
      <div className="home">
        <h1>Hello world!!!</h1>

        <section className="home__section">
          <h2 className="home__section-header">Section 1 header</h2>
          <div className="home__section-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </section>

        <section className="home__section">
          <h2 className="home__section-header">Section 2 header</h2>
          <div className="home__section-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </section>

        <section className="home__section">
          <Newsletter/>
        </section>

        <section className="home__section">
          <List/>
        </section>
      </div>
    );
  }
}

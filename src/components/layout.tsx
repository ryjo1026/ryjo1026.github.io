import React from 'react';
import Header from './header';

type layoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: layoutProps) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <header>
        <Header title={title} />
      </header>
      <main>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Blog</h1>
              <p className="subtitle">just some random thoughts</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <div className="columns is-mobile">
            <div className="column is-8 is-offset-2">
              <div className="box">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Layout;

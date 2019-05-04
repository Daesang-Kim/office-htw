import * as React from 'react';
import {
    Link,
} from 'react-router-dom';

const Header = () => (
    <>
        <div>
          <h1>Welcome to HTW</h1>
          <Link to="/WorkingTime">퇴능</Link>
          <Link to="/ShuttleBus">셔틀</Link>
          <hr />
        </div>
    </>
)

export default Header;

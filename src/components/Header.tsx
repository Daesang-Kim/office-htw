import * as React from 'react';
import {
    Link,
} from 'react-router-dom';

const Header = () => (
    <>
        <div>
          <h1>Welcome to HTW</h1>
          <Link to="/WorkingTime" style={{margin: "5px"}}>퇴능</Link>
          <Link to="/ShuttleBus" style={{margin: "5px"}}>셔틀</Link>
          <hr />
        </div>
    </>
)

export default Header;

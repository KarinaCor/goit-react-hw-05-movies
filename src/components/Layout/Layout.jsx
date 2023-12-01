import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import * as SC from '../Layout/Layout.styled'


const Layout = () => {
  return (
    <SC.Container>
      <header>
        <SC.Navigation>
          <SC.NavList>
            <SC.NavItem>
              <Link to="/">
                Home<SC.Span>.</SC.Span>
              </Link>
            </SC.NavItem>
            <SC.NavItem>
              <Link to="/movies">
                Movies<SC.Span>.</SC.Span>
              </Link>
            </SC.NavItem>
          </SC.NavList>
        </SC.Navigation>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </SC.Container>
  );
};

export default Layout;
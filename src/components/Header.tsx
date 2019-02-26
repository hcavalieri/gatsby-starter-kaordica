import * as React from 'react';

export interface IHeaderProps {
  isHome?: boolean;
}

export const Header: React.SFC<IHeaderProps> = props => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;

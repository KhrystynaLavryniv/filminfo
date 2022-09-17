import React from 'react';
import { NotFoundPageContainer, LinkBack } from './NotFound.styled';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

const NotFound = () => {
  const location = useLocation();
  const path = useRef(location);

  return (
    <NotFoundPageContainer>
      <LinkBack
        to={path.current?.state?.from ?? `/`}
        state={{ from: path.current }}
      >
        Go Back
        <BsArrowLeftShort />
      </LinkBack>
    </NotFoundPageContainer>
  );
};

export default NotFound;

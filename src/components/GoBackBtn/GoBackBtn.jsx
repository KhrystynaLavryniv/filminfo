import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { GoBackButton, LinkBack } from './GoBackBtn.styled';
const GoBackBtn = () => {
  const location = useLocation();
  const path = useRef(location);
  return (
    <div>
      <GoBackButton type="button">
        <LinkBack
          to={path.current?.state?.from ?? `/`}
          state={{ from: path.current }}
        >
          <BsArrowLeftShort />
        </LinkBack>
      </GoBackButton>
    </div>
  );
};

export default GoBackBtn;

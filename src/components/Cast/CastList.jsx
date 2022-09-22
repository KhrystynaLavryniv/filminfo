import React from 'react';
import imageNotFound from '../../images/nf.jpg';
import { CastImg, CastListStyled, CastCont, CastItem } from './CastList.styled';

const CastList = ({ castInfo }) => {
  return (
    <CastCont>
      <CastListStyled>
        {castInfo.map(({ name, character, profile_path }) => (
          <CastItem key={name}>
            <CastImg
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + profile_path
                  : imageNotFound
              }
              alt={name}
            />

            <div>
              <p>{name}</p>
              {character ? <p>({character})</p> : <p>?</p>}
            </div>
          </CastItem>
        ))}
      </CastListStyled>
    </CastCont>
  );
};

export default CastList;

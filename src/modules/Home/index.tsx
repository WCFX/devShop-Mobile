import React from 'react';
import { TouchableOpacity } from 'react-native';

// import {  } from '~/components';
// import {  } from '~/assets';
// import {  } from '~/helpers';
// import {  } from '~/types';
import * as S from './styles';

const Home = () => {
  const handleFuction = () => {
    console.log('handleFuction');
  };
  return (
    <S.Container>
      <S.Title>Hello Motherfuckers</S.Title>
      <TouchableOpacity onPress={handleFuction} />
      <S.Description>Wagnifico na parada</S.Description>
    </S.Container>
  );
};
export { Home };

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import {  } from '~/components';
// import {  } from '~/assets';
// import {  } from '~/helpers';
// import {  } from '~/types';
import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <S.Title>Hello Motherfuckers</S.Title>
      <Icon name="home" size={24} color="#FFF" />
      <S.Description>Wagnifico na parada</S.Description>
    </S.Container>
  );
};
export { Home };

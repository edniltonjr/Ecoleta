import React, {useState, useEffect} from 'react';

import { Text, View, ImageBackground, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import RNPickerSelect from 'react-native-picker-select';
// import axios from 'axios';

const Home = () => {

  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

    // interface IBGEUFResponse {
  //   sigla: string;
  // }
  
  // interface IBGECityResponse {
  //   nome: string;
  // }

  // Feature sendo implementada para listagem de Estados e Cidades consumidas pela API do IBGE
  
  // const [selectedUf, setSelectUf] = useState('0');
  // const [selectedCity, setSelectCity] = useState('0');
  // const [ufs, setUfs] = useState<string[]>([]);
  // const [cities, setCities] = useState<string[]>([]);


  // useEffect(() => {
  //   axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then(response => {
  //     const ufInitials = response.data.map(uf => uf.sigla);
  //     console.log(ufInitials);
  //     setUfs(ufInitials);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
  //     const cityNames = response.data.map(city => city.nome);
  //     setCities(cityNames);
  //   });
  // }, [selectedUf]);

//   const listUfs = ufs.map(uf =>{
//     return { label: uf, value: uf }
// })

// const listCities = cities.map(city =>{
//   return { label: city, value: city }
// })


  const navigation = useNavigation();
  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city
    });
  }

  return(
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <ImageBackground 
    source={require('../../assets/home-background.png')} 
    style={styles.container}
    imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <View>
          <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
          <Text style={styles.description}>Ajudamos pessoas a econtrarem pontos de coleta de forma eficiente</Text>
        </View>
      </View>

      <View style={styles.footer}>

        <TextInput style={styles.input} placeholder="Digite a UF" maxLength={2} autoCapitalize="characters" autoCorrect={false} value={uf} onChangeText={text => setUf(text)}/>
        <TextInput style={styles.input} placeholder="Digite a Cidade" value={city} autoCorrect={false} onChangeText={text => setCity(text)}/>

        {/* <RNPickerSelect  placeholder={{ label: 'Selecione um Estado', value: 'Selecione um Estado'  }}  onValueChange={(value) => setSelectUf(value)} items={listUfs} />
        <RNPickerSelect  placeholder={{ label: 'Selecione uma Cidade', value: 'Selecione um Estado'  }} onValueChange={(value) => console.log(value)} items={listCities} /> */}


        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#FFF" size={24}/>
          </View>

          <Text style={styles.buttonText}>
            Entrar
          </Text>

        </RectButton> 
      </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  )  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#F0F0F5'
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;
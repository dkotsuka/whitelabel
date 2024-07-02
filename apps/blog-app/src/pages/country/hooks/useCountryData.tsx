import {useEffect, useState} from 'react';

export const useCountryData = (country: string) => {
  const [countryData, setCountryData] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCountryData(data);
      setLoading(false);
    }, 1000);
  }, [country]);

  return {countryData, loading};
};

const data = {
  summary: {
    country: 'Brasil',
    geography:
      'O Brasil é um país imenso na América do Sul, com uma variedade de paisagens, desde a floresta amazônica até os pampas e a costa atlântica. Sua localização tropical proporciona um clima quente e úmido em grande parte do país, com algumas regiões mais secas e frias.',
    population: 214749623,
    area: 8515767,
    latitude: -10.0,
    longitude: -55.0,
    top_tourist_cities: [
      {
        name: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        latitude: -22.9068,
        longitude: -43.1729,
        estimated_daily_expenses: {
          budget: 'R$ 250-R$ 500',
          mid_range: 'R$ 500-R$ 1000',
          luxury: 'R$ 1000+',
        },
      },
      {
        name: 'Salvador',
        state: 'Bahia',
        latitude: -12.9754,
        longitude: -38.5035,
        estimated_daily_expenses: {
          budget: 'R$ 200-R$ 400',
          mid_range: 'R$ 400-R$ 750',
          luxury: 'R$ 750+',
        },
      },
      {
        name: 'Foz do Iguaçu',
        state: 'Paraná',
        latitude: -25.5422,
        longitude: -54.5777,
        estimated_daily_expenses: {
          budget: 'R$ 150-R$ 300',
          mid_range: 'R$ 300-R$ 600',
          luxury: 'R$ 600+',
        },
      },
      {
        name: 'Manaus',
        state: 'Amazonas',
        latitude: -3.1023,
        longitude: -60.0219,
        estimated_daily_expenses: {
          budget: 'R$ 200-R$ 400',
          mid_range: 'R$ 400-R$ 750',
          luxury: 'R$ 750+',
        },
      },
      {
        name: 'Brasília',
        state: 'Distrito Federal',
        latitude: -15.7801,
        longitude: -47.9292,
        estimated_daily_expenses: {
          budget: 'R$ 250-R$ 500',
          mid_range: 'R$ 500-R$ 1000',
          luxury: 'R$ 1000+',
        },
      },
      {
        name: 'Fernando de Noronha',
        state: 'Pernambuco',
        latitude: -3.855,
        longitude: -32.4244,
        estimated_daily_expenses: {
          budget: 'R$ 500-R$ 1000',
          mid_range: 'R$ 1000-R$ 2000',
          luxury: 'R$ 2000+',
        },
      },
      {
        name: 'Bonito',
        state: 'Mato Grosso do Sul',
        latitude: -20.921,
        longitude: -56.4788,
        estimated_daily_expenses: {
          budget: 'R$ 200-R$ 400',
          mid_range: 'R$ 400-R$ 750',
          luxury: 'R$ 750+',
        },
      },
      {
        name: 'Ouro Preto',
        state: 'Minas Gerais',
        latitude: -20.4433,
        longitude: -43.5329,
        estimated_daily_expenses: {
          budget: 'R$ 150-R$ 300',
          mid_range: 'R$ 300-R$ 600',
          luxury: 'R$ 600+',
        },
      },
      {
        name: 'Paraty',
        state: 'Rio de Janeiro',
        latitude: -22.9667,
        longitude: -44.4246,
        estimated_daily_expenses: {
          budget: 'R$ 200-R$ 400',
          mid_range: 'R$ 400-R$ 750',
          luxury: 'R$ 750+',
        },
      },
      {
        name: 'Lençóis Maranhenses',
        state: 'Maranhão',
        latitude: -2.9242,
        longitude: -43.4508,
        estimated_daily_expenses: {
          budget: 'R$ 150-R$ 300',
          mid_range: 'R$ 300-R$ 600',
          luxury: 'R$ 600+',
        },
      },
      {
        name: 'Pantanal',
        state: 'Mato Grosso do Sul and Mato Grosso',
        latitude: -18.9033,
        longitude: -57.2593,
        estimated_daily_expenses: {
          budget: 'R$ 200-R$ 400',
          mid_range: 'R$ 400-R$ 750',
          luxury: 'R$ 750+',
        },
      },
      {
        name: 'Florianópolis',
        state: 'Santa Catarina',
        latitude: -27.5972,
        longitude: -48.5481,
        estimated_daily_expenses: {
          budget: 'R$ 200-R$ 400',
          mid_range: 'R$ 400-R$ 750',
          luxury: 'R$ 750+',
        },
      },
      {
        name: 'Jericoacoara',
        state: 'Ceará',
        latitude: -2.8787,
        longitude: -40.2248,
        estimated_daily_expenses: {
          budget: 'R$ 250-R$ 500',
          mid_range: 'R$ 500-R$ 1000',
          luxury: 'R$ 1000+',
        },
      },
      {
        name: 'Porto Seguro',
        state: 'Bahia',
        latitude: -16.4245,
        longitude: -39.0456,
        estimated_daily_expenses: {
          budget: 'R$ 200-R$ 400',
          mid_range: 'R$ 400-R$ 750',
          luxury: 'R$ 750+',
        },
      },
      {
        name: 'Ilhéus',
        state: 'Bahia',
        latitude: -14.7854,
        longitude: -39.0448,
        estimated_daily_expenses: {
          budget: 'R$ 150-R$ 300',
          mid_range: 'R$ 300-R$ 600',
          luxury: 'R$ 600+',
        },
      },
      {
        name: 'Recife',
        state: 'Pernambuco',
        latitude: -8.0548,
        longitude: -34.8824,
        estimated_daily_expenses: {
          budget: 'R$ 200-R$ 400',
          mid_range: 'R$ 400-R$ 750',
          luxury: 'R$ 750+',
        },
      },
    ],
    cuisine:
      'A culinária brasileira é rica e diversificada, refletindo a história e a geografia do país. De pratos tradicionais como feijoada e churrasco a influências indígenas, africanas e europeias, a comida brasileira oferece uma experiência culinária única.',
    culture:
      'A cultura brasileira é vibrante e rica, com uma mistura de influências indígenas, africanas e europeias. As diversas regiões do país possuem suas próprias tradições, costumes e expressões artísticas, desde a música e a dança até as artes visuais e a literatura.',
  },
};

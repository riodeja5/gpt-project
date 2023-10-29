import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';


export const GraphqlTestScreen: React.FC = () => {
  const [result, setResult] = useState(0);
  const url = "http://127.0.0.1:3000";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: "{droid(id: \"2000\") {id,name,}}" })
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url, options);
        const data = response.json();
        setResult(await data);
        return data;
      } catch (e) {
        return e;
      }
    }
    getData();
  }, []);

  return (
  <View>
    <Text>{result}</Text>
  </View>
  )
};
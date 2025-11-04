import {useState} from 'react';
import { View, Text, Button} from 'react-nat ive';

export default function ex2Deps() {
    const [count, setCount] = useState(0);

      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Valor do contador:</Text>
          <Button 
            title="Somar 1"
            onPress={() => setCount(count + 1)}
          />
        </View>
      )
    }      
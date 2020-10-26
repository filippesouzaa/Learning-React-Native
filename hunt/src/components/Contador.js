import React, { useState }from 'react'
import { View, Text, Button } from 'react-native'

export default props =>{

    const [num, setNum] = useState(props.numeroInicial)

    function press(){
        setNum(num + 1)
    }

    
    return(
        <View>
            <Text>{num}</Text>
            <Button
                title="Incrementar"
                onPress={press}
            />
        </View>
    );
}
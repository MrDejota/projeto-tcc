import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import { useNavigation } from '@react-navigation/native';
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";


export default function Leitura1(){

    const navigation = useNavigation();

    return(
        <Container>

            <ScrollView> 

            <Box>
                <TouchableOpacity onPress={()=> navigation.navigate('MainTab')}> 
                    <Flecha />
                </TouchableOpacity>
                <Text style={{fontSize:20}}> Como lidar com a raiva </Text>
                <Save />         
            </Box> 


            <Text style={{fontSize: 18, marginTop: 10, textAlign: "center", margin: 15}}> 
            COM A PSICOLOGIA DA ATENÇÃO PLENA
            </Text>

            <Text style={{fontSize: 25, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> A Raiva </Text>
                <Linha1 />
            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
            A raiva é uma emoção humana básica. Todos nós podemos sentir raiva de vez em quando, até o sujeito mais calmo e zen. A diferença entre uma pessoa consumida pela raiva – e que está prestes de fazer algo que vai se arrepender depois – e a pessoa que consegue estar consciente de suas emoções está na capacidade de prestar atenção ao próprio corpo, às suas sensações, e pensamentos.

Costumo dizer que aprendemos muitas informações e conhecimentos sobre as coisas e sobre o mundo, e em comparação, muito pouco sobre nós mesmos, sobre o que acontece dentro. Razão pela qual é mais comum que não saibamos o que fazer com as nossas emoções, sendo a raiva um exemplo típico.

Então surge a pergunta sobre como lidar com a raiva. Existe uma técnica da psicologia que poderia ajudar neste sentido?

A resposta é sim! Existem várias técnicas e possibilidades. A psicoterapia, a analise, ao trazer para pessoa mais autoconhecimento também abre espaço para agir com mais liberdade e não ser refém das emoções e de comportamentos inadequados que só pioram a situação. Por isso, sempre recomendamos procurar um profissional da psicologia e fazer terapia.

Além da terapia, existem técnicas e métodos que podem ajudar também. Neste texto, vou apresentar uma das alternativas, a partir da psicologia da atenção plena (Mindfulness).
            </Text>

            <Text style={{fontSize: 20, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> Decifrando a raiva </Text>
            <Linha2 />
            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
            Um modo como seguramos e mantemos a raiva na mente, mesmo apesar dela nos ser desagradável, é ilustrado por um símile dado pelo Buddha no Lekha Sutta. Lá o Buddha diz que há três maneiras de se lidar com a raiva.

Algo ocorre, ficamos com raiva, e a mantemos por um longo tempo, ruminando-a. Quem sabe até por toda a vida! Tal atitude o Buddha compara a alguém que faz riscos profundos em uma rocha. Há, então, a raiva que fica por um tempo, mas a pessoa é rápida em deixá-la passar. Isso é como alguém que escreve na areia ou num solo macio. As marcas logo serão apagadas pelo vento ou pela água. Tal pessoa, ainda que fique com raiva, é macia e flexível por dentro, e não dá muita margem para a raiva se perpetuar. Finalmente, há aquela que é como alguém que escreve na água, tão logo os traços de irritação e descontentamento surgem em sua mente logo são apagados, pois ela não segura esses traços por meio da repetição do pensamento e do tomar tudo como sendo pessoal.
            </Text>

            <Text style={{fontSize: 20, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> Lidando com ela </Text>
            <Linha2 />
<Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
Como você lida com sua raiva? Se você se percebe no primeiro ou no segundo tipo, o treinamento em mindfulness lhe ensinará em primeiro lugar a se distanciar emocionalmente da raiva na medida necessária para vê-la um pouco mais claramente. Se você tentar suprimi-la irá apenas adiar o problema, além de colaborar para aumentar sua força subconsciente. Se você simplesmente expressar a raiva, estará justificando sua reação e, portanto, fortalecendo-a conscientemente. Ter mindfulness nesse momento implica em estar presente com a raiva, permitir seu aparecimento e reconhecimento na mente, mas sem reagir positiva ou negativamente.

Ver a raiva sem reagirmos a ela nos permitirá compreendê-la num sentido mais profundo, talvez percebendo nossos preconceitos e pré-julgamentos, as noções de eu e propriedade que mantemos na mente, nosso senso de importância e nossa fragilidade. Aquilo que acreditamos, nossas crenças e julgamentos, alteram a forma como interpretamos os fatos que nos acontecem. O que pensamos de nós mesmos molda nossas ansiedades e nossa dor. Tudo isso deve ser percebido com compaixão em relação a nós mesmos.
</Text>


            </ScrollView>

        </Container>
    )
}
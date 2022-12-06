import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import { useNavigation } from '@react-navigation/native';
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";


export default function Leitura2(){

    const navigation = useNavigation();

    return(
        <Container>

            <ScrollView> 

            <Box>
                <TouchableOpacity onPress={()=> navigation.navigate('MainTab')}> 
                    <Flecha />
                </TouchableOpacity>
                <Text style={{fontSize:20}}> Depressão </Text>
                <Save />         
            </Box> 


            <Text style={{fontSize: 18, marginTop: 10, textAlign: "center", margin: 15}}> 
            COMO O MINDFULNESS ATUA NO TRATAMENTO DA DEPRESSÃO
            </Text> 

            <Text style={{fontSize: 25, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> Revivendo o passado </Text>
                <Linha1 />
            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
            Um outro sintoma frequente na depressão é o processo de ruminação. Isso ocorre quando o paciente se perde em lembranças ou fica preso em pensamentos negativos e não consegue voltar a viver o momento presente. Então, é nesse momento que a meditação e o mindfulness surgem como uma aliados no tratamento da doença. “Estudos mostram que práticas de mindfulness mostram um efeito positivo em pessoas com transtornos depressivos. Principalmente em pacientes que têm fortes chances de ter novos episódios após o tratamento”, afirma a especialista.
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> Mindfulness no tratamento da depressão </Text>
            <Linha2 />
            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
            Joana preparou um passo a passo para utilizar práticas de atenção plena no tratamento da depressão. O objetivo da prática é sair desse ciclo de pensamentos que prende a pessoa ao passado – ou em alguma lembraça ruim – e trazê-la de volta ao momento presente.

Sinta o momento. Pare, observe a experiência no momento presente. Pergunte a si mesma: “Como estou me sentindo? O que está acontecendo na minha experiência, neste momento?”
Observe o que está sentindo. Em que você está pensando neste momento? O que você está sentindo?
Preste atenção na sua respiração. Sinta a sua respiração. Repare  como o seu corpo se comporta durante a respiração. Sinta a temperatura e perceba o caminho que o ar percorre até chegar nos seus pulmões.
Lembre-se: é essencial manter a frequência do exercício. Dessa forma, será possível sentir os benefícios do mindfulness no tratamento da depressão. Além disso, é importante alinhar essa ferramenta a um tratamento multidisciplinar. O que isso quer dizer? Que é importante contar com a ajuda de outros especialistas para um tratamento mais assertivo. Então, converse com um terapeuta ou psiquiatra, por exemplo, e encontre o melhor caminho para você.
            </Text>
     
            </ScrollView>

        </Container>
    )
}
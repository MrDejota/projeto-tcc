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
                <TouchableOpacity onPress={()=> navigation.navigate('Autocontrole')}> 
                    <Flecha />
                </TouchableOpacity>      
            </Box> 


            <Text style={{fontSize: 18, marginTop: 10, textAlign: "center", margin: 15}}> 
            AUTOCONTROLE: O QUE É, COMO DESENVOLVER E TÉCNICAS DE MINDFULNESS
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> O que é autocontrole emocional? </Text>
                <Linha1 />
            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
            Autocontrole emocional é o atributo que torna uma pessoa capaz de dominar as próprias emoções ou os impulsos decorrentes dessas emoções.

Isso porque as emoções, em si, não podem ser controladas, pois são reações espontâneas e automáticas a uma determinada situação – seja ela real, ou não.

            </Text>

            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
Como diria um dos maiores escritores de todos os tempos, William Shakespeare:

“Não posso escolher como me sinto, mas posso escolher o que fazer a respeito”.
            
Ou seja, não podemos controlar a emoção gerada por um impulso, mas podemos recorrer ao autocontrole para dar uma resposta adequada a essa situação.
            </Text>

            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
Nesse sentido, a autodisciplina funciona como um tipo de filtro que nos permite escolher o que e de que maneira dizer ou fazer alguma coisa.

Significa que, para exercer o autocontrole, é preciso diminuir ou deixar a impulsividade de lado por um momento, dando espaço para uma análise racional de cada cenário.
            </Text>


            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> Qual a importância do autocontrole? </Text>
            <Linha2 />
            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
            Desenvolver o autocontrole permite a adaptação profissional – e pessoal – a diferentes situações, levando a respostas adequadas e moderadas.

Graças ao autocontrole, é possível abrir mão de rápidos momentos de satisfação em prol de um bem maior, que inclua toda uma família, departamento ou comunidade.

É o caso de negociações policiais para salvar a vida de reféns ou mesmo negociações diplomáticas que envolvem perdas para um ou mais países.
            
Nesses cenários tensos, os negociadores tendem a estar com as emoções à flor da pele, o que pode reforçar comportamentos impulsivos.
            </Text>

            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
No entanto, com autodisciplina, vão conseguir se comunicar de maneira moderada e tranquila, favorecendo respostas conciliadoras e desfechos pacíficos.

Conforme citamos acima, o autocontrole também é uma peça-chave para alcançar metas e realizar tarefas que exigem concentração e adiamento de um período de diversão ou descanso.

Usando essa ferramenta, nossa mente pondera os sacrifícios que valem a pena, identificando, por exemplo, que é mais vantajoso poupar dinheiro para uma viagem de férias do que gastar em roupas.
            </Text>

            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
Outra função relevante do autocontrole é que ele faz do indivíduo protagonista no campo dos sentimentos, pois é um mecanismo de inteligência emocional.

Como componente dessa área, o autocontrole colabora para o autoconhecimento, pois só é possível gerenciar aquilo que conhecemos.

Assim, quem busca por essa ferramenta acaba descobrindo os gatilhos que desestabilizam suas emoções e produzem respostas negativas, o que dá a chance de manipular o cenário para mudar sua resposta de costume.
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> Dicas De Como Manter O Autocontrole </Text>
            <Linha2 />
            <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
Quando o assunto é autodisciplina, há alguns pontos que merecem nossa atenção.

Ao contrário do que pode parecer, exercer o autocontrole exige um repertório diferenciado, orientado à situação e ao comportamento social esperado de cada um.

Nos dias de hoje, desempenhamos mais de um papel, de acordo com o ambiente e a proximidade que mantemos com as pessoas ao redor.

E o autocontrole precisa estar alinhado a esse papel.
        </Text>

        <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
Uma mulher de 30 anos, por exemplo, pode exercer a função de profissional ou empresária no trabalho, de mãe e esposa em casa, de estudante em uma universidade, etc.

Para cada um desses papéis, ela recorre a um tipo de autodisciplina, já que sua postura em casa, com certeza, será diferente da postura no trabalho e na faculdade.
        </Text>

        <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
Analisando essa questão, um artigo publicado na Harvard Business Review citou três razões principais que nos fazem perder o autocontrole:

Autocontrole é um recurso cognitivo finito
Diferentes tipos de autocontrole necessitam dos mesmos recursos
Exercer autocontrole pode afetar negativamente o autocontrole futuro se não for renovado.
Ou seja, é necessário repor nossas fontes de autodisciplina, o que explica por que a probabilidade de reações impulsivas aumenta quando estamos sempre agindo sob pressão.
        </Text>

        <Text style={{fontSize: 16, marginTop: 10, textAlign: "justify", margin: 15}}>
Então, nossa dica inicial é que você trabalhe para repor o autocontrole, descansando sua mente, focando no cenário presente e diminuindo a pressão e preocupações do dia a dia.
        </Text>



            </ScrollView>

        </Container>
    )
}
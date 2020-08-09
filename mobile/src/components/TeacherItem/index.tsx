import React from 'react';
import { View, Image, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: 'http://github.com/joaobispo2077.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>João Bispo</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}> 2 + 2 = 4. {'\n'} {'\n'}
                Inspirado pelos números visa mostrar que a matemática é muito mais que símbolos complexos, busca conectar a sua mente com inúmeras situações em que os números e calcúlos se apresentam em seu cotidiano e que além de estarem lá, nem são tão complexos assim.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Custo/hora da aula {'   '}
                    <Text style={styles.priceValue}>R$ 100,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unFavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entre em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;
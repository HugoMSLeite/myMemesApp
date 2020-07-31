import React, { useState } from 'react';
import qs from 'qs';
import {
    Wrapper,
    Container,
    Header,
    HeaderTitle,
    ViewForm,
    TextInput,
    Button,
    ButtonCloseModal
} from './styles';
import MemeImage from '../../components/MemeImage';
import { Alert, View, Text, TouchableWithoutFeedback, Modal, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        backgroundColor: "#000",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        height: 400
    }
});

export default function Home() {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [boxes, setBoxes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [urlImage, setUrlImage] = useState();

    function handleSelectTamplate(template) {
        setSelectedTemplate(template);
    }

    const handleInputChange = (text, index) => {
        const newValues = boxes;
        newValues[index] = text;
        setBoxes(newValues);
    }

    async function handleSubmit() {
        if (boxes.map(text => text).length != selectedTemplate.box_count) {
            Alert.alert('Preencha todos os textos');
            return;
        }

        setModalOpen(true);
        const params = qs.stringify({
            template_id: selectedTemplate.id,
            username: 'HugoLeite',
            password: 'testePass',
            boxes: boxes.map(text => ({ text })),
        });
        console.log(params)
        try {
            const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);
            const { data: { url } } = await resp.json();
            setUrlImage(url);
            setSelectedTemplate(null);
        } catch (err) {
            console.log(err)
        }
    }

    function handleSaveFile() {
        let urlSplit = urlImage.split('/');
        FileSystem.downloadAsync(
            urlImage,
            FileSystem.documentDirectory + urlSplit[urlSplit.length - 1]
        ).then(({ uri }) => {
            Alert.alert('Download concluído')
        });
    }

    async function handleShare() {
        const shareOptions = {
            title: 'Share file',
            url: urlImage,
            failOnCancel: false,
        };

        try {
            const ShareResponse = await Share.open(shareOptions);
        } catch (error) {
            console.log('Error =>', error);
            setResult('error: '.concat(getErrorString(error)));
        }
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <HeaderTitle>
                        Memes
                </HeaderTitle>
                </Header>
                <MemeImage handleClick={handleSelectTamplate} />
                <ViewForm>
                    {selectedTemplate && (
                        <>
                            <Text style={{ color: '#fff' }}>Informe os textos para inserir no meme</Text>
                            {new Array(selectedTemplate.box_count).fill('').map((_, index) => (
                                <TextInput key={String(Math.random())}
                                    placeholder={`Texto #${index + 1}`}
                                    placeholderTextColor="#666"
                                    onChangeText={text => handleInputChange(text, index)}
                                />
                            ))}
                            <TouchableWithoutFeedback onPress={handleSubmit}>
                                <Button colors={['#00fc6c', '#00ac4a']}
                                    start={[1, 0.2]}>
                                    <Text>Gerar Meme</Text>
                                </Button>
                            </TouchableWithoutFeedback>
                        </>
                    )}
                </ViewForm>
            </Container>
            <Modal visible={modalOpen} transparent={true} animationType="slide">
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ButtonCloseModal onPress={() => setModalOpen(false)}>
                            <Text style={{ color: "#fff", fontSize: 20, marginBottom: 10 }}>X</Text>
                        </ButtonCloseModal>
                        <Image source={{ uri: urlImage }} style={{ width: '100%', height: 300 }} />
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <AntDesign name="save" size={26} color="#fff" onPress={handleSaveFile} style={{ marginRight: 100 }} />
                            <AntDesign name="sharealt" size={26} color="#fff" onPress={handleShare} />
                        </View>
                    </View>
                </View>
            </Modal>
        </Wrapper >
    )
}
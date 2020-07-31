import React, { useEffect, useState } from 'react';

import { Image } from 'react-native'
import { Container, Template, Label, TextContainer } from './styles';

export default function MemeImage(props) {
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        (async () => {
            const resp = await fetch('https://api.imgflip.com/get_memes');
            const { data: { memes } } = await resp.json();
            setTemplates(memes);
        })();
    }, []);

    return (
        <>
            <TextContainer>Selecione uma imagem</TextContainer>
            <Container>
                {templates.map((item, key) => (
                    <Template key={key} onPress={() => props.handleClick(item)}>
                        <Image source={{ uri: item.url }} style={{ width: '100%', height: 300 }}></Image>
                        <Label>{item.name}</Label>
                    </Template>
                ))}
            </Container>
        </>
    );
}
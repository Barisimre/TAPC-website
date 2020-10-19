import React from 'react';
import InfoCard, { CardText } from '../Components/InfoCard';
import Page from '../Components/Page';

export default function Contact() {
    return (
        <Page>
            <InfoCard title="Committee">
                <CardText>
                    <p>Chairman: Baris Imre</p>
                    <p>Board Representative: Tom Grooters</p>
                    <p>Treasurer: Jasper Bovenkerk</p>
                    <p>Secretary: Pranav Chobdar</p>
                    <p>General Member: Berke Guducu</p>
                    <p>General Member: Kevin Witlox</p>
            </CardText>
            </InfoCard>
            <InfoCard title="Contact">
                <CardText>
                    <p>Email: tapc2020@inter-actief.net </p>
            </CardText>
            </InfoCard>
        </Page>
    );
}
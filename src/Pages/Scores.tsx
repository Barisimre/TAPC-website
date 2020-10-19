import React from 'react';
import InfoCard, { CardText } from '../Components/InfoCard';
import Page from '../Components/Page';

export default function Scores() {
    return (
        <Page>
            <InfoCard title="Scores">
                <CardText>
                    There are no scores yet
                </CardText>
            </InfoCard>
        </Page>
    );
}
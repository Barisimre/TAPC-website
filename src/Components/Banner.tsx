import React from 'react';
import { Pane, Tab, TabNavigation, majorScale, Heading, Image } from 'evergreen-ui'
import banner from '../resources/banner.png';
import ia from '../resources/ia.png';
import iawhite from '../resources/iawhite.png';
import { colors, setColors } from '../Constants';




export default function Banner() {

    return (
        <>
            <div style={{
                position: 'fixed', marginLeft: 'auto', marginRight: 'auto', display: 'flex',
                flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: '100%', top: '0', backgroundColor: setColors.navBarBackground
            }}>
                <Pane height={majorScale(6)} flex={1} alignItems="center" display="flex" justifyContent="center" marginTop={12}>
                    <Heading color={setColors.navBarcolors} is="h1" size={900}>TAPC 2020 Programming Contest</Heading>
                </Pane>

                <Pane height={majorScale(6)} width="100%" flex={1} alignItems="center" display="flex" justifyContent="center" marginBottom={8}>
                    <TabNavigation>
                        {['Home Page', 'Rules', 'Participate', 'Contact', 'Scores'].map((tab) => (
                            <Tab color={setColors.navBarcolors} key={tab} is="a" href={(tab !== 'Home Page') ? tab : "/"} id={tab}>
                                {tab}
                            </Tab>
                        ))}
                    </TabNavigation>
                </Pane>



            </div>
            <Pane flex={1} alignItems="center" display="flex" justifyContent="center" marginTop={96}>
                <Image src={banner} style={{ width: '20%', marginRight: '30px' }} />
                {/* <Image src={(setColors.navBarBackground === colors.blue) ? iawhite : ia} style={{ width: '20%', marginLeft: '30px' }} /> */}
                <Image src={ia} style={{ width: '20%', marginLeft: '30px' }} />

            </Pane >
        </>
    );
}

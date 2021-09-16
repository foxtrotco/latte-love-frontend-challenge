import React from 'react';
import { colors } from '@utils';

import { TextButton } from '@components';
import { NavigationContainer, ActionBar, Logo, AccountContainer, NavigationBar, Heading } from './styled';

const Navigation = () => {
    return (
        <NavigationContainer>
            <ActionBar>
                <Logo
                    src="https://res.cloudinary.com/dbtk9pyvu/image/upload/v1624987521/ShipShop/Navigation/Foxtrot_Logo_White_taqxfl.svg"
                    alt="Foxtrot"
                />
                <AccountContainer>
                    <TextButton color={colors.coconut} kind="secondary">
                        Account
                    </TextButton>
                </AccountContainer>
            </ActionBar>
            <NavigationBar>
                <Heading>
                    Latté <em>Love</em>
                </Heading>
            </NavigationBar>
        </NavigationContainer>
    );
};

export default Navigation;

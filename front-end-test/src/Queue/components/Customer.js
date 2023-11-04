import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';
import { sha256 } from 'js-sha256';

const Customer = ({ customer }) => {

    //get the gravatar image url
    const profileUrl = customer.emailAddress !== null ? 
                        'https://gravatar.com/avatar/' + sha256(customer.emailAddress) :
                        require('../../assets/avatar.jpeg')

    return (
        <CustomerCard>
            <ProfilePicture>
                        <img style={{ height: '100%' }} src={profileUrl} />
            </ProfilePicture>
            <Content>
                <Name>{customer.name}</Name>
                <div></div>
            </Content>
        </CustomerCard>
    )
}

export default Customer;
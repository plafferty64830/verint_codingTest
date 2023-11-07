import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';
import { sha256 } from 'js-sha256';
import { formatTime } from '../../functions/date/formatTime';

const Customer = ({ customer, expectedTime }) => {

    //get the gravatar image url
    const profileUrl = customer.emailAddress !== null && customer.emailAddress !== undefined ?
        'https://gravatar.com/avatar/' + sha256(customer.emailAddress) :
        require('../../assets/avatar.jpeg')

    return (
        <CustomerCard>
            <ProfilePicture style={{flexDirection: 'column'}}>
                <img style={{ height: '100%' }} src={profileUrl} />
            </ProfilePicture>
            <Content style={{flexDirection: 'column'}}>
                <Name>{customer.name}</Name>
                <div>{formatTime(expectedTime)}</div>
            </Content>
        </CustomerCard>
    )
}

export default Customer;
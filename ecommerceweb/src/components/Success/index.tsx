import React from 'react';

export default function Success() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '23px', justifyContent: 'center', alignItems: 'center' }}>
            <div>logo</div>
            <button style={{ border: 'none', borderRadius: '8px', color: 'white', backgroundColor: 'blueviolet', width: 'fit-content', height: '60px', fontSize: '29px', cursor: 'default' }} disabled>Successfull</button>
            <div style={{ fontSize: '16px' }}>Your order is being prepared. Thanks for <br /> choosing Zaza Shop</div>
        </div>
    );
}
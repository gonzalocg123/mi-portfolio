import React from 'react';

const SimpleBackground: React.FC = () => {
    return (
        <div 
        className="simple-background"
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
            overflow: 'hidden'
        }}
        >
        <div 
            style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,105,180,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)'
            }}
        />
        <div 
            style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,105,180,0.05) 0%, transparent 70%)',
            filter: 'blur(50px)'
            }}
        />
        </div>
    );
};

export default SimpleBackground;
import dp from '../../assets/dp.jpg'

export const topBarStyle = {
    topContainer: {
        background: `url(${dp})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
        height: '100vh'
    },

    topContent: {
        position: 'absolute',
        top: {xs:'180px', md:'300px'},
        left: {xs:'1em',md:'13em'},
        width: '100vw'
    },

    downloadButton: {
        
    }
};

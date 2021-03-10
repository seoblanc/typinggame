import createHashRouter from './router';

const init = () => {
    const root = document.getElementById('root');
    createHashRouter(root);
};

init();